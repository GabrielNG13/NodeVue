<template>
  <v-app>
    <SystemBar></SystemBar>

    <AppBar :data="data"></AppBar>

    <Toolbar :data="data"></Toolbar>

    <!-- -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <v-main
        class="text-center"
      >
        <v-btn @click="$vuetify.goTo(0,0)">Click to back to top</v-btn> 
      </v-main>
    </v-footer>

    <v-main
      class="text-center"
    >
      <strong>2021</strong>
    </v-main>
  </v-app>
</template>

<script>

  import AppBar from "@/components/AppBar"
  import SystemBar from "@/components/SystemBar"
  import Toolbar from "@/components/Toolbar"

  export default {
    name: 'App',

    computed: {
      data(){
        return this.$store.state.data
      }
    },
    components: {
      AppBar,
      SystemBar,
      Toolbar
    },
    methods: {
      itens(){
      }
    },
    created(){
      this.$store.dispatch("fetchData")
    }
};
</script>