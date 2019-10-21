<template>
  	<div class="full-width">
	    <nav class="navbar navbar-expand-lg navbar-light bg-pink">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/profile">Profile</router-link>
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
.full-width {
	width: 100%;
}

.bg-pink {
	background-color: #f5dadf !important;
}

li.nav-item {
    margin-left: 10px;
}

a {
	text-decoration: none;
	color: black;
}

li>a:hover {
    text-decoration: none;
	color: white;
}
</style>
