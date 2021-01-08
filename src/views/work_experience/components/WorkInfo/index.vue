<template>
  <div class="row">
    <div class="col-md-6" v-for="(item, key) in experience" :key="key">
      <div class="card border-orange mb-3 max-width-18-r">
        <div class="card-header bg-transparent border-orange">
          {{ item.work }}
        </div>
        <div class="card-body">
        <img :src="item.image" alt=""
          width="80%"
          height="80%"
          class="min-height-200"
        >
        <hr>
        <h5 class="card-title">Experience</h5>
        <Experience :experiences="item.experience" />
        </div>
        <div class="card-footer bg-transparent border-orange">
          From {{ item.start_time }} to {{ item.end_time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Experience from '../Experience';

  export default {
    name: "WorkInfo",
    components: {
      Experience,
    },
    props: {
      experience: Array,
    },
  };
</script>
