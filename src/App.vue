<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link :to="{name: 'root'}" class="navbar-brand">Practice</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link :to="{name: 'root'}" class="nav-link">Home</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{name: 'gallery'}" class="nav-link">Gallery</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{name: 'users'}" class="nav-link">Users</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{name: 'todos'}" class="nav-link">My todo</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{name: 'about'}" class="nav-link">About</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {}
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
