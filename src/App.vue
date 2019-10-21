<template>
    <div id="app">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from './components/Navigation'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    export default {
        name: "App",
        components: {
            'Navigation': Navigation
        },
        computed: {
            ...mapGetters({
                info: 'info'
            }),
            ...mapActions({
                getUser: 'getUser'
            })
        },
        mounted() {
            this.$store.dispatch('getUser')
        }
    };
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
