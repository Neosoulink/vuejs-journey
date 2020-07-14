import Vue from 'vue';
import Vuex from 'vuex';

import moment from "moment";


Vue.use(Vuex);

const state = {
	todos: [{
		name: 'Première todo',
		completed: true,
		dateAdd: moment().format("DD/MM/YYYY à HH:mm:ss")
	}],
	msg: "Hello"
}

const getters = {
	todos: state => state.todos,
	completedTodos: state => state.todos.filter(todo => todo.completed),
	remainingTodos: state => state.todos.filter(todo => !todo.completed),
};

const mutations = {
	ADD_TODO(state, name) {
		state.todos.unshift({
			name: name,
			completed: false,
			dateAdd: moment().format("DD/MM/YYYY à HH:mm:ss")
		})
	},
	DELETE_TODO(state, todo) {
		state.todos = state.todos.filter(i => i !== todo)
	},
	DELETE_ALL_DONE(state) {
		state.todos = state.todos.filter(todo => !todo.completed )
	},
	SET_COMPLETED_TODO(state, {todo, value}) {
		state.todos.filter(todo_ => todo_ === todo)[0].completed = value
	},
	ALL_DONE(state, value) {
		state.todos.forEach(todo => {
			todo.completed = value;
		});
	}
}

const actions = {
	addTodo(store, name) {
		store.commit('ADD_TODO', name)
	},
	deleteTodo(store, todo) {
		store.commit('DELETE_TODO', todo)
	},
	setCompletedTodo(store, {todo, value}) {
		store.commit('SET_COMPLETED_TODO', {todo, value})
	},
}

let store = new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions,
	strict: true
})

global.store = store;

export default store;
