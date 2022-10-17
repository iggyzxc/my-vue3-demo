<!-- eslint-disable -->
<template>
  <v-container class="my-8">
    <v-col class="my-8">
      <div class="card">
        <v-card
        class="card mx-auto"
        elevation="5"
        max-width="500"
        outlined
      >
          <div>
            <v-card-title class="text-center mt-3">
              <h3>Welcome</h3>
            </v-card-title>
            <v-card-subtitle class="text-center">
              <h4>
                This is a vue web application created for demonstration purposes.
              </h4>
            </v-card-subtitle>
            <v-col>
              <v-card-text class="mt-1 mx-2 description">
              <p>
                Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.
              </p>
            </v-card-text>
            </v-col>
          </div>
        </v-card>
      </div>
    </v-col>
  <Email/>
  </v-container>
</template>

<script setup>
import Email from '../components/Email.vue';

</script>

<style scoped>
.description {
  font-size: 15px;
  text-align: justify;
}

h3 {
  font-weight: 500;
  letter-spacing: 5px;
}

h4 {
  font-weight: 350;
}

p {
  text-indent: 30px;
  font-weight: 300;
}
</style>
