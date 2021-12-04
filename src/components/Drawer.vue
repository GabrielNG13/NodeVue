<template>
    <v-navigation-drawer
    expand-on-hover
    height="100"
    width="256"
    >
        <v-navigation-drawer-title>Drawer</v-navigation-drawer-title>
        <v-list>
            <v-list-item
                v-for="n in data"
                :key="n"
                @click="() => {}"
            >
                <v-list-item-title>{{n.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props:['data'],
        name: "Drawer",
        components: {
        },
    }
</script>