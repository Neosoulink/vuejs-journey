<template>
	<div @click.stop>
		<div v-show="loading" class="lightbox__loading"></div>
		<transition name="lightbox-fade">
			<img :src="src" alt="" :style="style" class="lightbox__image" v-show="!loading" :key="src">
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		image: {type: String}
	},
	data() {
		return {
			loading: true,
			src: false,
			style: {}
		}
	},
	methods: {
		resize(image){
			let width = image.width;
			let height = image.height;
			
			if (width > window.innerWidth || height > window.innerHeight) {
				let ratio = width / height;
				let windowRatio = window.innerWidth / window.innerHeight;

				if (ratio > windowRatio) {
					width = window.innerWidth;
					height = width / ratio;
				}else{
					height = window.innerHeight;
					width = height * ratio;
				}
			}
			
			this.style = {
				width : width + 'px',
				height: height + 'px',
				top: ((window.innerHeight - height) * 0.5) + 'px',
				left: ((window.innerWidth - width) * 0.5) + 'px',
			}
		}
	},
	mounted() {
		let image = new window.Image();

		image.onload = () => {
			this.resize(image);
			setTimeout(() => {
				this.loading = false;
			}, 1000);
			this.src = this.image;
		}
		image.src = this.image;
		this.resizeEvent = () => {
			this.resize(image);
		}
		addEventListener('resize', this.resizeEvent);
	},
	destroyed() {
		window.removeEventListener('resize', this.resizeEvent );
	},
}
</script>