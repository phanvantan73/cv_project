<template>
  <div class="full-width">
    <nav class="navbar navbar-expand-lg navbar-light bg-pink">
      <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/career">CAREER</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work-experience">WORK EXPERIENCE</router-link>
        </li>
      </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  };
</script>

<style>
  @import url('./style.scss');
</style>
