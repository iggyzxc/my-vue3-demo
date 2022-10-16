<template>
  <v-container class="mt-10">
    <v-card class="mx-auto mt-n7" max-width="500" elevation="5" outlined>
    <div>
      <v-card-title class="text-center mt-3">
        <h3>
          <a :href="'//' + 'vuetifyjs.com/en/'" class="hover" target="_blank">Vuetify</a>
        </h3>
      </v-card-title>
      <br />
    </div>
    <div class="description">
      <v-card-text>
        <p>
          Vuetify is a Vue UI Library with beautifully handcrafted Components
          using the Material Design specification. No design skills required —
          everything you need to create amazing applications is at your
          fingertips. Supercharge your development process with all of the tools
          that you need to succeed:
        </p>
        <ul>
          <li>WCAG Accessibility (a11y) / WCAG / Section 508 / RTL support</li>
          <li>30+ supported languages</li>
          <li>Smaller bundle sizes with automatic tree-shaking</li>
          <li>A massive Discord community</li>
          <li>18 months Long-term support for Major releases</li>
          <li>IE11 / Safari 9 support with polyfill</li>
          <li>Extensive customization options with SASS/SCSS and Presets</li>
          <li>Responsive support down to 320px width</li>
          <li>Direct support support from Vuetify</li>
        </ul>
      </v-card-text>
    </div>
  </v-card>
  </v-container>
 
</template>

<script>
</script>

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
}

h3 {
  font-weight: 550;
  letter-spacing: 4px;
}

.description {
  text-align: justify;
  font-size: 13px;
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
