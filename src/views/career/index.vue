<template>
  <div id="career">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron m-bot-0">
          <ul class="list-group">
            <li v-for="(item, key) in career" :key="key" class="list-group-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
      name: "CAREER",
      computed: {
        ...mapGetters({
          career: 'career'
        }),
      }
  };
</script>

<style scoped>
  #career {
      color: #fd7e14;
  }
</style>
