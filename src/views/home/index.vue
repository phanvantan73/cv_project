<template>
  <div id="home">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron m-bot-0">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="float-left text-left">
                    <h1>Hello!</h1>
                    <h1>My name is</h1>
                    <h1>{{ info.lastname }}</h1>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                      <div class="card-body text-left">
                        I design and improve more beautiful websites. I provide high quality web development services.
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img :src="info.avatar" alt="..."
                width="100%"
                height="100%"
                class="rounded-circle"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "Home",
    computed: {
      ...mapGetters({
        info: 'info'
      }),
    }
  };
</script>

<style scoped>
  #home {
    color: #fd7e14;
  }
</style>
