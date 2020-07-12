<template>
	<div class="position-relative text-center overflow-hidden">
		<slot></slot>
		<button class="btn btn-dark btn-sm btn__nav btn__nav_prev" @click.prevent="prev">
			<i class="fa fa-angle-left"></i>
		</button>
		<button class="btn btn-dark btn-sm btn__nav btn__nav_next" @click.prevent="next">
			<i class="fa fa-angle-right"></i>
		</button>
		<div class="carousel__pagination position-absolute text-center w-100">
			<button
				v-for="n in slidesCount"
				:key="n"
				@click="goto(n-1)"
				class="mr-2"
				:class="{'active': n-1 === index}"
			></button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Carousel",
	data() {
		return {
			index: 0,
			slides: [],
			direction: "right"
		};
	},
	mounted() {
		this.slides = this.$children;
	},
	computed: {
		slidesCount() {
			return this.slides.length;
		}
	},
	methods: {
		next() {
			this.index++;
			this.direction = "right";
			if (this.index >= this.slidesCount) {
				this.index = 0;
				this.direction = "left";
			}
		},
		prev() {
			this.index--;
			this.direction = "left";
			if (this.index < 0) {
				this.index = this.slidesCount - 1;
				this.direction = "right";
			}
		},
		goto(index) {
			this.direction = index > this.index ? "right" : "left";
			this.index = index;
		}
	},
	watch: {
		slides() {
			if (this.index >= this.slidesCount) {
				this.index = this.slidesCount - 1;
				this.direction = "right";
			}
		}
	}
};
</script>

<style>
.btn__nav {
	position: absolute;
	top: 50%;
	margin-top: -32.5px;
	left: 10px;
	font-size: 30px;
	height: 65px;
	width: 65px;
}

.btn__nav.btn__nav_next {
	right: 10px;
	left: auto;
}

.carousel__pagination {
	bottom: 10px;
	left: 0;
	right: 0;
	z-index: 100;
}
.carousel__pagination button {
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: #000;
	opacity: 0.8;
	border-radius: 100%;
	border: none;
}
.carousel__pagination button.active {
	opacity: 1;
	background-color: white;
}
</style>