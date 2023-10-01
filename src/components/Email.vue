<!-- eslint-disable -->

<template>
    <v-container class="mt-10">

    
      <v-card 
          class="mx-auto mt-9 description"
          elevation="5"
          max-width="500"
          outlined>
          <v-card-title class="text-center mt-8">
              <h4>Send a message</h4>
            </v-card-title>
          <v-form
          class="mx-5 my-5"
          ref="form"
          v-model="valid"
          @submit.prevent="sendMail"
          lazy-validation
              >
              <v-text-field
                  type="text"
                  v-model="name"
                  name="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  color="secondary"
                  required
              ></v-text-field>
          
              <v-text-field
                  type="email"
                  v-model="email"
                  name="email"
                  :rules="emailRules"
                  label="E-mail Address"
                  color="secondary"
                  required
              ></v-text-field>

              <v-textarea
                  filled
                  name="message"
                  v-model="message"
                  label="Message"
                  cols="30" rows="5"
                  color="secondary"
                  
              ></v-textarea>
          
              <div class="text-center">
                  <v-hover v-slot="{ hover }">
                      <v-btn
                      class="mr-4"
                      type="submit" 
                      value="Send"
                      :disabled="!valid"
                      @click="validate"
                      :style="{'background-color': hover ? 'inherit' : 'aqua'}"
                      :ripple="{ center: true }"
                      elevation="4"
                      plain
                      rounded
                      >
                      submit
                      </v-btn>
                  </v-hover>
              </div>
          </v-form>
      </v-card>
    </v-container>
  </template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than or equal to 15 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
    }
  },
  methods: {
    sendMail(e) {
      try {
        emailjs.sendForm('service_bkocd8n', 'template_pulagwj', e.target,
        'oAiM9oRi3jTaNPtLi', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        window.alert("Your message has been sent! Have a nice day!")

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.nameRules = []
      this.emailRules = []
    },
  }
}
</script>

<style scoped>
.description {
  text-align: center;
  font-size: 15px;
}

h4 {
  font-weight: 350;
  letter-spacing: 4px;
}

button:hover,
button:focus {
  color: rgb(30, 89, 156);
}

button {
  text-decoration: none;

  font-weight: 550;
  color: black;

}

button:disabled {
    color: rgb(22, 22, 22);
}
</style>