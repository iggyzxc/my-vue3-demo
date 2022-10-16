<!-- eslint-disable -->
<template>
  <v-footer padless>
    <v-col class="text-center"> ©<strong>{{ new Date().getFullYear() }}&nbsp;
      <a
      :href="
          '//' + 'sites.google.com/tip.edu.ph/organikagora-test-site/home'
        "
        target="_blank">Macam</a>
          </strong>  All Rights Reserved.</v-col>
  </v-footer>
</template>

<script></script>

<style scoped>
footer {
  padding: 15px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  font-weight: 350;
  background-color: rgba(0,0,0, 0.5); 
  letter-spacing: 3px;
  font-size: 15px;
}
strong {
  letter-spacing: 1px;
}

.hover:hover {
  color: aqua;
  text-shadow:0px 0px 10px aqua;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}
</style>
