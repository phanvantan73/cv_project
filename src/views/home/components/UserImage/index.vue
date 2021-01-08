<template>
  <img :src="avatar" alt="..."
    width="100%"
    height="100%"
    class="rounded-circle"
  >
</template>

<script>
  export default {
    name: "UserImage",
    props: {
      avatar: String,
    }
  };
</script>
