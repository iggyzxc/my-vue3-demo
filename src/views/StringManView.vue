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
        <!-- Title of Lab Activity -->
        <div id="stringM" class="description">
          <v-card-title class="text-center">
            <h3>{{ title }}</h3>
          </v-card-title>

          <!-- Description of Lab Activity -->
          <v-card-subtitle class="text-center">
            <h4>{{ description }}</h4>
          </v-card-subtitle>

          <div class="text-md-body-1">
            <br />

            <!-- Input textfield -->
            <v-card-text>
              <v-row>
                <v-col cols="12">
                 <v-text-field
                   v-model.text="input"
                   color="secondary"
                   label="Enter text here..."
                   prepend-icon="mdi-text"
                   outlined
                 ></v-text-field>
                </v-col>
              </v-row>

              <!-- Clear Button -->
              <v-card-actions>
                <v-col class="text-center">
                  <v-hover v-slot="{ hover }">
                 <v-btn
                   :disabled="loading4"
                   :loading="loading4"
                   :ripple="{ center: true }"
                   :style="{ 'background-color': hover ? 'inherit' : 'aqua' }"
                   @click="clearText(), loader='loading4'"
                   class="mt-n5 mx-1 px-6"
                   color="black"
                   elevation="4"
                   plain
                   rounded
                 >Clear
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template>
                  </v-btn>
                </v-hover>
                </v-col>
              </v-card-actions>
            </v-card-text>
          </div>
        </div>
      </v-card>
      <!-- First Card end -->
    </v-col>

    <!-- Second Card -->
    <Transition>
      <v-col cols="6" v-show="result" class="my-6">
      <v-card
          class="mx-auto"
          elevation="5"
          max-width="500"
          color="result"
          outlined
          >
        <div
            id="stringM"
            class="description"
          >   
              <div class="text-md-body-1">

                <!-- Result Title -->
                <v-card-title class="text-center">
                  <h3>Result</h3>
                </v-card-title>
              </div>

              <!-- Result Content -->
              <v-card-text :style="{fontFamily: 'Helvetica, Arial'}">
                <p v-show="cVowel > 0"><strong>Vowels: &nbsp;</strong>{{ cVowel }}</p>
                <p v-show="cNumber > 0"><strong>Numbers: &nbsp;</strong>{{ cNumber }}</p>
                <p v-show="cConsonant > 0"><strong>Consonants &nbsp;</strong>{{ cConsonant }}</p>
                <p v-show="convert != ''"><strong>Vowels conversion to (*): &nbsp;</strong>{{ convert }}</p>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
        <!-- Second Card end -->
      </Transition>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  el: "#stringM",
  data: function () {
    return {
      titleName: "Preliminary Activity",
      titleNum: "2",
      msg: "String Manipulation",
      loader: null,
      loading4: false,
      input: "",
      cVowel: 0,
      cNumber: 0,
      cConsonant: 0,
      convert: ""
    };
  },

  watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 180);

        this.loader = null;
      }
    },

  methods: {
    clearText() {
      this.input = "";
    }
  },

  computed: {
    title() {
      return this.titleName + " " + this.titleNum;
    },

    description() {
      return this.msg;
    },

    result() {
      this.cVowel = (this.input.match(/[aeiou]/gi) || 0).length;
      this.cNumber = (this.input.match(/\d/g) || 0).length;
      this.cConsonant = (this.input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || 0).length;
      this.convert = this.input.replace(/[aeiou]/gi, "*");
      return (
        this.cVowel, this.cNumber, this.cConsonant, this.convert
      );
    }
  },
};
</script>

<style scoped>
ul {
  display: table;
  margin: 0 auto;
}
.description {
  text-align: auto;
  font-size: 15px;
  margin-top: 20px;
}
input,
input:focus {
  width: 100%;
  margin-left: -13px;
  border: 0;
  padding: 10px 0;
  font-size: 1.5em;
  background: none;
  outline: 0px solid transparent;
}
span {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
}
input:placeholder-shown {
  font-size: 23px;
  font-weight: 400;
  opacity: 0.5;
}
p {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;
}
h3 {
  font-weight: 500;
  letter-spacing: 3px;
  font-family: 'Raleway';
}

h4 {
  font-weight: 350;
  letter-spacing: 5px;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
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
