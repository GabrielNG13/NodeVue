<template>
  <v-toolbar>
    <v-spacer></v-spacer>

    <v-row>
      <v-col
      v-for="n in data"
      :key="n"
      >
        <v-list-item @click="() => {}">{{n.name}}</v-list-item>
      </v-col>
    </v-row>

  </v-toolbar>
</template>

<script>
  export default {
    props:['data'],
    name: "Toolbar",
    components: {
    },
  }
</script>