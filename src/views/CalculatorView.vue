<template>
  <v-container class="my-8">
    <v-row class="my-8">
    <!-- First Card -->
    <v-col>
      <v-card
        class="mx-auto"
        elevation="5"
        max-width="500"
        outlined
      >
       <div
          id="calc"
          class="description"
        >
          <!-- Title of Lab Activity -->
          <v-card-title class="text-center">
            <h3>{{ title }}</h3>
          </v-card-title>

          <!-- Description of Lab Activity -->
          <v-card-subtitle
            class="text-center"
          >
            <h4>{{ description }}</h4>
          </v-card-subtitle>

          <div
            class="text-md-body-1"
          >
            <br />

            <v-card-text>
              <!-- Input textfield -->
              <v-row>
                <v-col>
                 <v-text-field
                   v-model.number="num1"
                   @keypress="numbersOnly"
                   type = "number"
                   color="secondary"
                   label="Enter number here..."
                   prepend-icon="mdi-numeric"
                   outlined
                 ></v-text-field>

                  <v-text-field
                    v-model.number="num2"
                    @keypress="numbersOnly"
                    type = "number"
                    color="secondary"
                    label="Enter number here..."
                    prepend-icon="mdi-numeric"
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
                      :style="{
                        'background-color': hover ? 'inherit' : 'aqua',
                      }"
                      @click="clearText(), (loader = 'loading4')"
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
      <v-col cols="6" v-show="result" class="mt-9">
        <v-card
            class="mx-auto"
            elevation="5"
            max-width="500"
            color="result"
            outlined
          >
            <div
              id="calc"
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
                <p>
                  <strong>Addition: &nbsp;</strong>{{ sum }}<br />
                  <strong>Subtraction: &nbsp;</strong>{{ difference }}<br />
                  <strong>Multiplication: &nbsp;</strong>{{ product }}<br />
                  <strong>Division: &nbsp;</strong>{{ quotient }}<br />
                  <strong>Average: &nbsp;</strong>{{ average }}
                </p>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </Transition>
      <!-- Second Card end -->
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  el: "#calc",
  data() {
    return {
      titleName: "Preliminary Activity",
      titleNum: "1",
      msg: "Simple Calculator",
      loader: null,
      loading4: false,
      num1: "",
      num2: "",
      sum: 0,
      difference: 0,
      product: 0,
      quotient: 0,
      average: 0,
    };
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 180);

      this.loader = null;
    },
  },

  methods: {
    numbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    clearText() {
      this.num1 = "";
      this.num2 = "";
    },
  },

  computed: {
    title() {
      return this.titleName + " " + this.titleNum;
    },

    description() {
      return this.msg;
    },

    result() {
      this.sum = this.num1 + this.num2;
      this.difference = this.num1 - this.num2;
      this.product = this.num1 * this.num2;
      this.quotient = this.num1 / this.num2;
      this.average = this.sum / 2;
      return (
        this.sum, this.difference, this.product, this.quotient, this.average
      );
    },
  },
};
</script>

<style scoped>
.description {
  text-align: auto;
  font-size: 15px;
  margin-top: 20px;
}
ul {
  display: table;
  margin: 0 auto;
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
input:placeholder-shown {
  font-size: 23px;
  font-weight: 400;
  opacity: 0.5;
}
span {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
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


/* Custom Loader for button */
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

/* Result Fade in */

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>