<template>
    <v-app-bar>
      <v-toolbar-title></v-toolbar-title>
      <v-menu
        right
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in data"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>{{n.name}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
  export default {
    props:['data'],
    name: "Toolbar",
    components: {
    },
  }
</script>