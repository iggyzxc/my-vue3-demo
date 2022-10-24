<!-- eslint-disable -->
<template>
  <v-container class="mt-1">
    <v-col class="mt-1"> 
          <div class="text-center">      
              <h1>Welcome</h1>        
          </div>
    </v-col>

      <v-row>
        <v-col>
          <VuetifyView/>
        </v-col>
        <v-col>
          <CompApiView/>
        </v-col>
        <v-col>
          <AxiosView/>
        </v-col>
      </v-row>

    <v-col>
      <Email/>
    </v-col>
  
  </v-container>
</template>

<script setup>
import Email from '../components/Email.vue';
import AxiosView from '../views/AxiosView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import CompApiView from '../views/CompApiView.vue'
</script>

<style scoped>
.description {
  font-size: 15px;
  text-align: justify;
}

h1 {
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 10px;
}

h4 {
  font-weight: 350;
}

p {
  text-indent: 30px;
  font-weight: 300;
}
</style>
