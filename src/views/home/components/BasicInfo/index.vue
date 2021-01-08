<template>
  <div class="row">
    <div class="col">
      <div class="float-left text-left">
        <h1>Hello!</h1>
        <h1>My name is</h1>
        <h1>{{ lastname }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasicInfo",
    props: {
      lastname: String,
    },
  };
</script>
