<template>
  <v-app>
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
        :src="myCard.img"
      ></v-img>

      <v-card-title><h3>{{myCard.nome}}</h3></v-card-title>
      <v-list-item><h4>Ramo: {{myCard.ramo}}</h4></v-list-item>
      <v-list-item><h4>Endereço: {{myCard.endereço}}</h4></v-list-item>
      <v-list-item><h4>Faixa de preço: {{myCard.preço}}</h4></v-list-item>


    </v-card>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    computed:{
      myCard(){
        return this.$store.state.cards[0]
      },
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>