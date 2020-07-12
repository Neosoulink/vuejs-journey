import Vue from 'vue';
import Store from './LightboxStore'

Vue.directive('lightbox',{
	bind(el, binding) {
		let group = binding.value === undefined ? 'default' : binding.value;
		Store.addImage(el.getAttribute('href'), group);
		el.addEventListener('click', (e) => {
			e.preventDefault();
			Store.open('../..'+el.getAttribute('href'), group);
		});
	},
	unbind(el, binding) {
		let group = binding.value === undefined ? 'default' : binding.value;
		Store.remove(el.getAttribute('href'), group);
	}
});
