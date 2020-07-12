<template>
	<section class="todoapp w-100">
		<header class="header text-center py-3">
			<h1 class="display-2">Todos</h1>
		</header>
		<main class="main d-flex justify-content-center py-5">
			<div class="w-25">
				<div class="shadow">
					<div class="form-group mb-0">
						<b-input-group class="mb-0">
							<b-input-group-prepend class="bg-white" is-text>
								<input type="checkbox" v-model="allDone" />
							</b-input-group-prepend>
							<b-form-input
								placeholder="Ajouter une tâche"
								class="form-control rounded-0 border-0"
								v-model="newTodos"
								@keyup.enter="addTodo"
							></b-form-input>
						</b-input-group>
					</div>

					<ul class="todos list-group list-group-flush">
						<li
							class="list-group-item todo"
							v-for="todo in filteredTodos"
							:key="todo.id"
							:class="{'text-muted': todo.completed}"
						>
							<b-form-checkbox class="mr-2 d-inline" v-model="todo.completed">
								<span class="sr-only"></span>
							</b-form-checkbox>

							<label v-if="todo !== editing" @dblclick="update(todo)">{{ todo.name }}</label>
							<div v-else>
								<b-form-input
									placeholder="Update"
									class="form-control rounded-0 border-0 d-inline-block d-inline"
                  v-model="editing.name"
                  v-focus="true"
									@keyup.enter="doneTodo"
									@blur="doneTodo"
                  @keyup.esc="cancelEdit"
								></b-form-input>
							</div>

							<small class="text-muted ml-3">{{ todo.dateAdd }}</small>
							<small class="text-success ml-3" v-if="todo.completed">Tâche completé</small>
							<button type="button" class="close border-light" @click="deleteTodo(todo)">
								<span aria-hidden="true">&times;</span>
							</button>
						</li>
					</ul>
					
					<footer class="p-3 bg-white" v-show="todos.length">
						<p class="text-muted">Infos & actions sur vos tâches</p>
						<div class="row">
							<small class="col-6">
								<p>{{ remaining }} tâche(s) à faire</p>
							</small>
							<div class="col">
								<p class="text-muted mb-2">Filters</p>
								<a
									href="javascript:void(0)"
									@click.prevent="filter = 'all'"
									class="btn btn-sm btn-light mb-1 w-100"
								>Toute</a>
								<a
									href="javascript:void(0)"
									@click.prevent="filter = 'todo'"
									class="btn btn-sm btn-light mb-1 w-100"
								>A faire</a>
								<a
									href="javascript:void(0)"
									@click.prevent="filter = 'done'"
									class="btn btn-sm btn-light mb-1 w-100"
								>Faite</a>

								<p class="text-muted mb-2 mt-3">Actions</p>
								<a
									href="javascript:void(0)"
									@click.prevent="deleteCompleted"
									class="btn btn-sm btn-light mb-1 w-100"
									v-if="completed"
								>Suppr les faites</a>
							</div>
						</div>
					</footer>

				</div>
			</div>
		</main>
	</section>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';

export default {
	name: "Todos",
	data() {
		return {
			todos: [],
			newTodos: "",
      filter: "all",
      editing: null,
      oldTodoName: ''
		};
	},
	methods: {
		addTodo() {
			if (this.newTodos !== "") {
				this.todos.unshift({
					name: this.newTodos,
					completed: false,
					dateAdd: moment().format('DD/MM/YYYY à HH:mm:ss'),
				});
				this.newTodos = "";
			}
		},
		update(todo) {
      this.editing = todo;
      this.oldTodoName = this.editing.name;
    },
    doneTodo(){
      this.editing = null;
      this.oldTodoName = '';
    },
    cancelEdit(){
      this.editing.name = this.oldTodoName;
      this.doneTodo();
    },
		deleteTodo(todo) {
			this.todos = this.todos.filter(i => i !== todo);
		},
		deleteCompleted() {
			this.todos = this.todos.filter(todo => !todo.completed);
		}
	},
	computed: {
		allDone: {
			get() {
				return this.remaining === 0;
			},
			set(value) {
				this.todos.forEach(todo => {
					todo.completed = value;
				});
			}
		},
		remaining() {
			return this.todos.filter(todo => !todo.completed).length;
		},
		completed() {
			return this.todos.filter(todo => todo.completed).length;
		},
		filteredTodos() {
			if (this.filter === "todo") {
				return this.todos.filter(todo => !todo.completed);
			} else if (this.filter === "done") {
				return this.todos.filter(todo => todo.completed);
			}
			return this.todos;
    },
  },
  directives: {
    focus (el, value) {
      if (value) {
        Vue.nextTick(() => {
          el.focus();
        })
      }
		},
  }
};
</script>
