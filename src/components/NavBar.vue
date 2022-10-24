<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon class="hamburger-color" @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="t-color">
        <router-link to="/">
          <span class="font-weight-light">Integrative Programming and Technologies 2 </span><span>Demonstration</span>
        </router-link>   
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary ref="inner_nav" style="position:fixed;">
      <v-list-item>
        <v-list-item-avatar>
          <a
            :href="
              '//' + 'sites.google.com/tip.edu.ph/organikagora-test-site/home'
            "
            target="_blank"
          >
            <v-img
              src="https://i.ibb.co/Hrzq6Rp/circle-profile-photo.png"
              alt="Iggy"
              class="my-2"
              max-height="120"
            ></v-img>
          </a>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="my-2 text-heading-5 font-weight-light text-center"
          >
            <a :href="'//' + 'sites.google.com/tip.edu.ph/organikagora-test-site/home'" class="hover" target="_blank"
              >Ignacio J. Macam Jr.</a
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-6"></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        router
        jp
        :to="item.path"
        :prepend-icon="item.icon"
        icon
        class="grey lighten-4 mx-5 my-1 hover item-icon"
      >
        <v-list-item-title class="item-text">{{ item.title }}</v-list-item-title>
      </v-list-item>

      <!-- SocMed -->
      <v-row class="mx-3 icons" >
          <v-list-item
            v-for="social in socials"
            :key="social"
            :href="social.href"
            class="grey lighten-4 hover"
            target="_blank"
          >
            <v-list-item-icon> 
              <v-icon>{{ social.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";


const drawer = ref(false);
const items = ref([
  { 
    title: "Home", icon: "mdi-home", path: "/" 
  },
  {
    title: "Basic Calculator", icon: "mdi-calculator-variant", path: "/calculatorView"
  },
  {
    title: "String App",icon: "mdi-code-string",path: "/stringManView"
  },
  {
    title: "Area Calculator", icon: "mdi-calculator", path: "/areaView"
  },
  { 
    title: "Quiz App", icon: "mdi-alpha-a", path: "/quizAppView" 
  },
]);

const socials = ref([
  {
    icon: "mdi-facebook", href: "https://www.facebook.com/iggyzxc/"
  },
  {
    icon: "mdi-instagram", href: "https://www.instagram.com/iggyzxc/"
  },
  {
    icon: "mdi-github", href: "https://github.com/iggyzxc"
  },
  {
    icon: "mdi-steam", href: "https://steamcommunity.com/profiles/76561198327472075/"
  },
]);

function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
</script>

<style scoped>
a:hover,
a:focus {
  color: aqua;
}

a {
  text-decoration: none;
  color: inherit;
}

.icons {
  top: 550px;
  position: fixed;

}

.hover:hover {
  color: aqua;
  text-shadow:0px 0px 10px aqua;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}

.t-color {
  color: snow;

}
.hamburger-color {
  color: #dddddd;
}
.item-icon {
  font-size: 20px;
}
.item-text {
  font-size: 15px;
}


</style>
