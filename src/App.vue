<template>
	<div id="app">
		<Lightbox />
		<div class="mb-3 flex container">
			<a
				:href="require(`./imgs/img (${n}).jpg`)"
				class="position-relative d-inline-block mb-2 mr-2"
				v-lightbox
				v-for="n in 8"
				:key="n"
			>
				<img :src="require(`./imgs/img (${n}).jpg`)" alt="lightImg" style="width: 200px;" />
			</a>

			<a
				:href="require(`./imgs/code_(${n}).jpg`)"
				class="position-relative d-inline-block mb-2 mr-2"
				v-lightbox="'code'"
				v-for="n in 8"
				:key="`./imgs/img (${n}).jpg`"
			>
				<img :src="require(`./imgs/code_(${n}).jpg`)" alt="lightImg" style="width: 200px;" />
			</a>

			<div>
				<button @click="themeLightbox = '/'">DEFAULT</button>
				<button @click="themeLightbox = 'code'">CODES</button>
			</div>
		</div>

		<div class="container">
			<carousel>
				<carousel-slide v-for="n in slides" :key="n" :index="n-1">
					<div
						class="position-absolute w-100 text-light d-flex flex-column align-items-center justify-content-center h-100 font-weight-bold"
						style="background-color: #00000088;font-size: 30px;"
					>Slide {{n}}</div>
					<img :src="require(`./imgs/img (${n}).jpg`)" alt="slide" class="w-100" />
				</carousel-slide>
			</carousel>
			<button @click="addSlide">Ajouter un slide</button>
			<button @click="removeSlide">Enlever un slide</button>
		</div>
		<Todos />
	</div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Carousel from "./components/carousels/Carousel";
import CarouselSlide from "./components/carousels/CarouselSlide";

import Lightbox from "./components/lightbox/Lightbox";

export default {
	name: "App",
	components: {
		Todos,
		Carousel,
		CarouselSlide,
		Lightbox
	},
	data() {
		return {
			slides: 2,
			themeLightbox: "/"
		};
	},
	methods: {
		addSlide() {
			this.slides++;
		},
		removeSlide() {
			this.slides--;
		}
	}
};
</script>