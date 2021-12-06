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

    <v-card-title><h2>{{card.name}}</h2></v-card-title>
    <v-list-item><h4>Username: {{card.username}}</h4></v-list-item>
    <v-list-item><h4>Email: {{card.email}}</h4></v-list-item>
    <v-list-item><h2>Address</h2></v-list-item>
    <v-list-item><h4>Street: {{card.address.street}}</h4></v-list-item>
    <v-list-item><h4>Suite: {{card.address.suite}}</h4></v-list-item>
    <v-list-item><h4>City: {{card.address.city}}</h4></v-list-item>
    <v-list-item><h4>Zipcode: {{card.zipcode}}</h4></v-list-item>
    <v-list-item><h4>Phone: {{card.phone}}</h4></v-list-item>
    <v-list-item><h4>Website: {{card.website}}</h4></v-list-item>
    <v-list-item><h2>Company:</h2></v-list-item>
    <v-list-item><h4>Name: {{card.company.name}}</h4></v-list-item>
    <v-list-item><h4>CatchPhrase: {{card.company.catchPhrase}}</h4></v-list-item>
    <v-list-item><h4>Bs: {{card.company.bs}}</h4></v-list-item>

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