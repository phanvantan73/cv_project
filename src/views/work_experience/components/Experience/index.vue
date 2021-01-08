<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="(experience, idx) in experiences" :key="idx">
      {{ experience }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Experience",
    props: {
      experience: Array,
    },
  };
</script>
