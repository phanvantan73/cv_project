<template>
  <div id="career">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron m-bot-0">
          <List :career="career" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import List from './components/List';

  export default {
    name: "CAREER",
    components: {
      List,
    },
    computed: {
      ...mapGetters({
        career: 'career'
      }),
    },
  };
</script>

<style scoped>
  @import url('./style.scss');
</style>
