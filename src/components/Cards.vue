<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="card.img"
    ></v-img>

    <v-card-title><h3>{{card.nome}}</h3></v-card-title>
    <v-list-item><h4>Ramo: {{card.ramo}}</h4></v-list-item>
    <v-list-item><h4>Endereço: {{card.endereço}}</h4></v-list-item>
    <v-list-item><h4>Faixa de preço: {{card.preço}}</h4></v-list-item>


  </v-card>
</template>

<script>
  export default {
    props:['card'],
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>