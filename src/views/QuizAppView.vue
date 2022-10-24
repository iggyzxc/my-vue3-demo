<template>  
  <v-container class="mt-12">
    <v-row class="mt-12">
        <!-- First Card -->
            <v-col>
            <v-card
                class="mx-auto"
                elevation="5"
                max-width="500"
                outlined
            >
                    <v-card-title class="text-center">
                        <h3>
                            Science & Nature Quiz
                        </h3>
                    </v-card-title>

                            <v-col class="shrink">
                            <div class="mb-3 text-center">
                                <v-btn
                                color="secondary"
                                @click="quiz = !quiz"
                                rounded
                                >
                                    Start
                                </v-btn>
                            </div>

                            <v-expand-transition>
                                <v-card
                                v-show="quiz"
                                >
                                <!-- timer container -->
                                <v-card-text>
                                    <div v-if="timer < 30">
                                        <v-progress-linear
                                        v-model="timer"
                                        color="red"
                                    ></v-progress-linear>
                                    </div>
                                    <div v-else>
                                        <v-progress-linear
                                        v-model="timer"
                                        color="green"
                                    ></v-progress-linear>
                                    </div>
                                    
                                </v-card-text>

                                <v-row>
                                    <v-col>
                                        <v-card-subtitle class="text-left">
                                            Score: {{ score }}/5
                                        </v-card-subtitle>
                                    </v-col>
                                    <v-col>
                                        <v-card-subtitle class="text-right">
                                            {{ questionCounter }} of {{ questions.length }}
                                        </v-card-subtitle>
                                    </v-col>
                                </v-row>

                                <div>
                                <v-card-text>
                                        <p class="text-center">{{formattedQuestion}}</p>
                                    </v-card-text>

                                    <v-card-actions
                                        class="justify-center d-flex flex-wrap"
                                    >
                                        <v-btn
                                        v-for="(choice, item) in currentQuestion.choices" 
                                        :key="item"
                                        rounded="pill"
                                        variant="outlined"
                                        size="small"
                                        class="mx-1 my-1"
                                        >
                                        
                                        <!-- option name -->
                                        <div
                                            class="default"
                                            :ref="optionChosen"
                                            @click="onOptionClicked(choice, item)"
                                        >
                                            {{ choice }}
                                        </div>
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                                                            
                                                      

   
                                                      
    
                                </v-card>
                            </v-expand-transition>

                            </v-col>
                    </v-card>
            </v-col>
            <!-- First Card End-->


            <!-- Second Card start -->
                <Transition>
                    <v-col cols="6" v-show="quizComplete">
                        <v-card
                        style="height: 100%;"
                        >
                            <!-- quiz results -->
                            <v-card-title>
                                <h3 class="text-center">Result</h3>
                            </v-card-title>
                            <!-- score -->
                            <v-card-text
                                class="text-center mt-8"
                            >
                            <h1>{{score * 20}} %</h1>
                            <div v-if="score > 3" class="mt-2" style="color: greenyellow">
                                    Passed
                            </div>
                            <div v-else class="mt-2" style="color: red">
                                    Failed 
                            </div>                   
                            </v-card-text>
                                <v-card-actions
                                    class="justify-center mt-8"
                                >
                                    <v-btn
                                    v-show="quizComplete"
                                    @click="quizStart"
                                    rounded
                                    :ripple="{ center: true }"
                                    :style="{ 'background-color': 'aqua' }"
                                
                                    class="mt-n5 mx-1 px-6"
                                    color="black"
                                    >
                                    Try Again?
                                    </v-btn> 
                                </v-card-actions>
                        </v-card>
                    </v-col>
              </Transition>
               <!-- Second Card end -->
        </v-row>
    </v-container>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
  data: () => ({
      quiz: false,
    }),
  setup() {
    let canClick = true;
    let timer = ref(100);
    let quizComplete = ref(false);
    let questionCounter = ref(0);
    let score = ref(0);
    const currentQuestion = ref({
      question: "",
      answer: 1,
      choices: [],
    });

    const questions = ref([]);
    const showQ = ref(true);

    const loadQuestion = () => {
      canClick = true;
      
      if (questions.value.length > questionCounter.value) {
        showQ;
        currentQuestion.value = questions.value[questionCounter.value];
        questionCounter.value++;
      } else {
        quizEnd();
        
      }
    };
 
    let itemsRef = [];
    const optionChosen = (element) => {
      if (element) {
        itemsRef.push(element);
      }
    };

    const clearSelected = (divSelected) => {
      setTimeout(() => {
        divSelected.classList.remove("bg-green");
        divSelected.classList.remove("bg-red");
        divSelected.classList.add("default");
        loadQuestion();
      }, 1000);
    };
 
    const onOptionClicked = (choice, item) => {
      
      if (canClick) {
        const divContainer = itemsRef[item];
        const optionID = item + 1;
        
        if (currentQuestion.value.answer == optionID) {
          score.value += 1;
          divContainer.classList.add("bg-green"); 
          divContainer.classList.remove("default"); 
          
        } else {
          divContainer.classList.add("bg-red"); 
          divContainer.classList.remove("default"); 
          
        }
        canClick = false;

        clearSelected(divContainer);
        console.log(choice, item);
      } else {

        console.log("cannot click");
      }
    };
 
    const countDownTimer = function() {
      let interVal = setInterval(() => {
    
        if (timer.value > 0) {

          timer.value--;
        } else {

          quizEnd();
          clearInterval(interVal);
        }
      }, 300);
    };

    const fetchQuestionsFromServer = async function() {
      axios("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple")
        .then((response) => {
          return response.data;
        })
        .then((data) => {

          const newQuestions = data.results.map((serverQuestion) => {
            const arrangedQuestion = {
              question: serverQuestion.question,
              choices: "",
              answer: "",
            };

            const choices = serverQuestion.incorrect_answers;

            arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);

            choices.splice(
              arrangedQuestion.answer - 1,
              0,
              serverQuestion.correct_answer
            );

            arrangedQuestion.choices = choices;

            return arrangedQuestion;
          });

          questions.value = newQuestions;
          loadQuestion();
          countDownTimer();
        });
    };

    const quizEnd = function() {
      score.value;
      timer.value = 0;
      quizComplete.value = true;
      showQ.value = false;
    };

    const quizStart = function() {
      canClick = true;
      timer.value = 100;
      quizComplete.value = false;
      questionCounter.value = 0;
      score.value = 0;
      currentQuestion.value = {
        question: "",
        answer: 1,
        choices: [],
      };

      questions.value = [];

      fetchQuestionsFromServer();
    };

    onMounted(() => {
      fetchQuestionsFromServer();
    });
    return {
      timer,
      currentQuestion,
      questions,
      score,
      questionCounter,
      loadQuestion,
      onOptionClicked,
      optionChosen,
      quizComplete,
      quizEnd,
      quizStart,
    };
  },

  computed: {
    formattedQuestion() {
      let entities = {
        amp: "&",
        apos: "'",
        "#x27": "'",
        "#x2F": "/",
        "#39": "'",
        "#47": "/",
        lt: "<",
        gt: ">",
        nbsp: " ",
        quot: '"',
        "#039": "'",
      };

      return this.currentQuestion.question.replace(/&([^;]+);/gm, function(
        match,
        entity
      ) {
        return entities[entity] || match;
      });
    },
  },

};
</script>
<style>
h1 {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 3px;
}
h3 {
  font-weight: 500;
  letter-spacing: 3px;
}

.resultMsg {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 50%;
  font-size: 20px;

  text-align: center;
  background: rgb(49, 49, 49);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

