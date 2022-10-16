<!-- eslint-disable -->
<template>
    <div class="container" style="color:black;">
        <form @submit.prevent="sendMail">
        <label>Name</label>
        <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
            style="color:black;"
        >
        <label>Email</label>
        <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            style="color:black;"
            >
        <label>Message</label>
        <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message"
            style="color:black;"
            >
        </textarea>
        
        <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
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

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>