<style src="./lightbox.scss" lang="scss"></style>

<template>
	<div class="lightbox position-fixed top-0 left-0 h-100 w-100" v-if="image !== false" @click="close">
		<transition name="lightbox-fade">
			<Lightbox-image :image="image" :key="image" />
		</transition>
		<button class="btn lightbox__btn lightbox__close text-light" @click="close"><i class="fa fa-times"></i></button>
		<div class="lightbox__nav">
			<button class="btn lightbox__btn lightbox__prev text-light" @click.stop.prevent="prev"><i class="fa fa-angle-left"></i></button>
			<button class="btn lightbox__btn lightbox__next text-light" @click.stop.prevent="next"><i class="fa fa-angle-right"></i></button>
		</div>
	</div>
</template>

<script>
import './LightboxDirective';
import Store from './LightboxStore';

import LightboxImage from './LightboxImage';

export default {
	components: { LightboxImage },
	data() {
		return {
			state: Store.state
		}
	},
	computed: {
		image(){ 
			if (this.state.index !== false && this.state.group ){
				return this.state.images[this.state.group][this.state.index]	;
			}
			return false;
		}
	},
	methods: {
		close() { Store.close(); },
		prev() { Store.prev(); },
		next() { Store.next(); }
	},
}
</script> 