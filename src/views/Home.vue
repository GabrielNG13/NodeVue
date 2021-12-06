<template>
    <v-app>
        <!--<Drawer :data="data"></Drawer>
        <h1>{{titleView}}</h1>
        <v-row>
            <v-col
            v-for="n in myCards"
            :key="n"
            cols="12"
            xs="6"
            sm="5"
            md="4"
            lg="3"
            xl="2"
            >
                <Cards :card="n"></Cards>
            </v-col>
        </v-row>
        -->

        <h1>{{title}}</h1>
        <v-row>
            <v-col
            v-for="n in data"
            :key="n"
            cols="12"
            xs="6"
            sm="5"
            md="4"
            lg="3"
            xl="2"
            >
                <CardsFetch :card="n"></CardsFetch>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    //import Cards from "@/components/Cards"
    import CardsFetch from "@/components/CardsFetch"
    //import Drawer from "@/components/Drawer"

    export default {
        name: "Home",
        computed:{
            myCards(){
                return this.$store.state.cards
            },
            data(){
                return this.$store.state.data
            },
            title(){
                return this.$store.getters.bigTitle
            },
        },
        components: {
            //c,
            CardsFetch,
            //Drawer
        },
        methods: {
        },
        created(){
            this.$store.dispatch("fetchData")
        }
    }
</script>