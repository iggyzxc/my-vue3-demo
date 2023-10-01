<template>
  <v-container class="mt-3">
    <v-row>
    <!-- First Card -->
    <v-col>
      <v-card
        class = "mx-auto"
        elevation = "5"
        max-width = "500"
        max-height = "140"
        outlined
        color="transparent"
      >
       <div
          id="aCalc"
          class="description"
        >
          <!-- Title of Lab Activity -->
          <v-card-title class="text-center mt-n5">
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
              <!-- Shapes -->
              <v-row class="mt-n9" justify="space-around">
                <router-link to="/rectangle"><v-icon class="rect mt-n4">mdi-rectangle</v-icon></router-link>
                <router-link to="/square"><v-icon class="squ">mdi-square</v-icon></router-link>
                <router-link to="/triangle"><v-icon class="tri">mdi-triangle</v-icon></router-link>
               <router-link to="/circle"><v-icon class="circ">mdi-circle</v-icon></router-link>  
              </v-row>
            </v-card-text>
          </div>
        </div>
      </v-card>
  
      </v-col>
    </v-row>

    <router-view class="mt-1"/>
  </v-container>
</template>

<script>
// import Rectangle from '@/components/shapes/Rectangle.vue';
// import Square from '@/components/shapes/Square.vue';
// import Triangle from '@/components/shapes/Triangle.vue';
// import Circle from '@/components/shapes/Circle.vue';

export default {
  el: "#aCalc",
  data() {
    return {
      titleName: "Midterm Activity",
      titleNum: "1",
      msg: "Area Calculator",
    };
  },
  computed: {
    title() {
      return this.titleName + " " + this.titleNum;
    },

    description() {
      return this.msg;
    },

  }
};

</script>

<style scoped>
.description {
  text-align: auto;
  font-size: 15px;
  margin-top: 20px;
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

.v-icon {
  font-size: 50px;
}

.rect {
  font-size: 80px;
  color:#FF3131;
}

.squ {
  color: #33db14;
}

.tri {
  color:#e3d61b;
}

.circ {
  color:#1F51FF;
}

</style>