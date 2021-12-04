<template>
    <v-app>
        <Drawer :data="events"></Drawer>

        <!--
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
            v-for="n in events"
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

        <v-content
        class="#F0F0F0 text-center"
        >
            <strong>2021</strong>
        </v-content>
    </v-app>
</template>

<script>
    //import Cards from "@/components/Cards"
    import CardsFetch from "@/components/CardsFetch"
    import Drawer from "@/components/Drawer"

    export default {
        name: "Home",
        data(){
            return{
                titleView: this.$store.state.bigTitle,
            }
        },
        computed:{
            myCards(){
                return this.$store.state.cards
            },
            events(){
                return this.$store.state.events
            },
            title(){
                return this.$store.getters.bigTitle
            },
        },
        components: {
            //Cards,
            CardsFetch,
            Drawer
        },
        methods: {
        },
        created(){
            this.$store.dispatch("fetchEvents")
        }
    }
</script>