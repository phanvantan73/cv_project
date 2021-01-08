<template>
  <ul class="list-group">
    <li v-for="(item, key) in career" :key="key" class="list-group-item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "List",
    props: {
      career: Array,
    },
  };
</script>
