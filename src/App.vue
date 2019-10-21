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
            ...mapActions({
                getUser: 'getUser',
                getCareer: 'getCareer',
                getExperience: 'getExperience'
            })
        },
        mounted() {
            this.$store.dispatch('getUser'),
            this.$store.dispatch('getCareer'),
            this.$store.dispatch('getExperience')
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
