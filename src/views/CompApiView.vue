<template>
  <v-container class="mt-6">
    <v-card
    class="mx-auto my-15"
    elevation="5"
    max-width="500"
    outlined
  >
    <div>
      <v-card-title class="text-center mt-3">
        <h3>
          <a
            :href="'//' + 'vuejs.org/guide/extras/composition-api-faq.html'"
            target="_blank"
            class="hover"
            >Composition API</a
          >
        </h3>
      </v-card-title>

      <br />
    </div>
    <div class="description">
      <v-card-text>
        <p>
          Composition API is a set of APIs that allows us to author Vue
          components using imported functions instead of declaring options. It
          is an umbrella term that covers the following APIs:
        </p>

        <ul>
          <li>
            Reactivity API, e.g. ref() and reactive(), that allows us to
            directly create reactive state, computed state, and watchers.
          </li>
          <li>
            Lifecycle Hooks, e.g. onMounted() and onUnmounted(), that allow us
            to programmatically hook into the component lifecycle.
          </li>
          <li>
            Dependency Injection, i.e. provide() and inject(), that allow us to
            leverage Vue's dependency injection system while using Reactivity
            APIs.
          </li>
        </ul>
      </v-card-text>
    </div>
  </v-card>
  </v-container>
</template>

<script></script>

<style scoped>
ul {
  display: table;
  margin: 10px 25px;
  font-weight: 350;
}

p {
  text-indent: 30px;
  font-size: 15px;
  font-weight: 350;
  margin-left: 10px;
  margin-right: 25px;
}

h3 {
  font-weight: 550;
  letter-spacing: 4px;
}
.description {
  text-align: justify;
  font-size: 15px;
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
