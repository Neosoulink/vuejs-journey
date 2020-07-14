<template>
	<div>
		<!-- Todolist part -->
		<Todos />
		<Todos />
		<Todos />
	</div>
</template>

<script>
// Components
import Todos from "@/components/todos/Todos.vue";

export default {
	components: {
		Todos
	}
}
</script>
