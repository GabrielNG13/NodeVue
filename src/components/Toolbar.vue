<template>
  <v-toolbar>
    <v-spacer></v-spacer>

    <v-row>
      <v-col
      v-for="n in (0,4)"
      :key="n"
      >
        <v-list-item @click="() => {}">Event {{n}}</v-list-item>
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