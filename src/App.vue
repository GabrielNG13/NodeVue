<template>
  <v-app>
    <SystemBar></SystemBar>

    <AppBar></AppBar>

    <Toolbar :data="events"></Toolbar>

    <!-- -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <v-content
        class="#F0F0F0 text-center"
      >
        <strong>v-footer</strong>
      </v-content>
    </v-footer>

    <v-button-navigation>
      <v-content
        class="#F0F0F0 text-center"
      >
        <strong>v-button-navigation</strong>
      </v-content>
    </v-button-navigation>
  </v-app>
</template>

<script>

  import AppBar from "@/components/AppBar"
  import SystemBar from "@/components/SystemBar"
  import Toolbar from "@/components/Toolbar"

  export default {
    name: 'App',

    computed: {
      events(){
        return this.$store.state.events
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

    data: () => ({
      //
    }),
    created(){
      this.$store.dispatch("fetchEvents")
    }
};
</script>