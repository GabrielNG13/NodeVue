import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards:[
            {
                nome: "Bolinha's",
                ramo: "Alimenticio",
                endereço: "R. Enrico Dell'Acqua, 89 - Centro, São Roque - SP, 18130-460",
                preço: "$$$",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/4b/53/dd/bolinhas-grill-restaurante.jpg"
            },
            {
                nome: "Club Come Together",
                ramo: "Casa noturna",
                endereço: "Rua Marechal Deodoro da Fonseca, 123 - Centro, São Roque - SP, 18130-070",
                preço: "$$$",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/08/5b/82/66/clube-come-together.jpg"
            },
            {
                nome: "Snack House",
                ramo: "Alimenticio",
                endereço: "R. Rui Barbosa, 305 - Centro, São Roque - SP, 18130-440",
                preço: "$$",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/ed/dc/b7/snack-house.jpg"
            },
            {
                nome: "Pepper Club",
                ramo: "Casa noturna",
                endereço: "R. Santa Quitéria, 60 - Vila Irene, São Roque - SP, 18132-100",
                preço: "$$$",
                img: "https://dc.cdnon.net/pb/2020/03/p22328-pepper-club.jpg"
            },
            {
                nome: "Hot Dog da Vanda",
                ramo: "Alimenticio",
                endereço: "18130-510, Av. John Kenedy, 741-851 - Centro, São Roque - SP, 18130-510",
                preço: "$",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/09/c4/1f/f4/hot-dog-da-vanda.jpg"
            },
            {
                nome: "Vinã Club",
                ramo: "Casa noturna",
                endereço: "Estr. Sidonio Pereira Leite, 55 - Jardim Taboão, São Roque - SP, 18130-000",
                preço: "$$$$",
                img: "https://10619-2.s.cdn12.com/rests/original/105_507608699.jpg"
            },
            {
                nome: "Açai da Barra",
                ramo: "Alimenticio",
                endereço: "Av. Antônino Dias Bastos, 1055 - Centro, São Roque - SP, 18130-351",
                preço: "$$",
                img: "https://img.restaurantguru.com/r344-food-Acai-Da-Barra-2021-09.jpg"
            },
            {
                nome: "Praça da Republica",
                ramo: "Casa noturna",
                endereço: "Av. Antônino Dias Bastos - São Roque, SP",
                preço: "$",
                img: "https://turismo.saoroque.sp.gov.br/fotos/557f5bd0a7a99c580f3247e5e80bd772.jpg"
            },
        ],
        title: "Lugares para visitar em São Roque",
        events: null,
        titleEvents: "Events",
    },
    mutations: {
        SET_EVENTS(state, payload){
            state.events = payload
        }
    },
    actions: {
        fetchEvents({commit}){
            axios.get("https://agenda-balaguer.herokuapp.com/api/event")
            .then(res=>{
                const payload = res.data.values
                commit('SET_EVENTS', payload)
            })
        }
    },
    getters: {
        bigTitle(state){
            return state.titleEvents.toUpperCase()
        }
    }
})