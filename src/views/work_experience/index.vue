<template>
  <div id="work-block">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron m-bot-0">
          <Panel />
          <hr>
          <WorkInfo :experience="experience" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Panel from './components/Panel';
  import WorkInfo from './components/WorkInfo';

  export default {
    name: "WORK_EXPERIENCE",
    components: {
      Panel,
      WorkInfo,
    },
    computed: {
      ...mapGetters({
        experience: 'experience'
      }),
    }
  };
</script>

<style scoped>
  @import url('./style.scss');
</style>
