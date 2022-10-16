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
            <v-card-title class="text-center mt-3" >
              <h3>Welcome</h3>
            </v-card-title>
            <br/>
            <v-card-text class="text-center">
              <h4>
                This is a vue web application created for demonstration purposes.
              </h4>
            </v-card-text>
            <br />
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
  text-align: center;
  font-size: 15px;
}

h3 {
  font-weight: 500;
  letter-spacing: 3px;
}
h4 {
  font-weight: 350;
}
</style>
