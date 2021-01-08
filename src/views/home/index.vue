<template>
  <div id="home">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron m-bot-0">
          <div class="row">
            <div class="col-md-6">
              <BasicInfo :lastname="info.lastname" />
              <Description />
            </div>
            <div class="col-md-6">
              <UserImage :avatar="info.avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BasicInfo from './components/BasicInfo';
  import UserImage from './components/UserImage';
  import Description from './components/Description';

  export default {
    name: "Home",
    components: {
      BasicInfo,
      UserImage,
      Description,
    },
    computed: {
      ...mapGetters({
        info: 'info'
      }),
    },
  };
</script>

<style scoped>
  @import url('./style.scss');
</style>
