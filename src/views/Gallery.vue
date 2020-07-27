<template>
	<div>
		<!-- Light box part -->
		<Lightbox />
		<div class="mb-3 flex container">
		<div class="py-2">
			<legend>THÈME</legend>
			<b-button @click="themeLightbox = '/'" variant="outline-primary" class="mr-2">DEFAULT <i class="fa fa-bell"></i></b-button>
			<b-button @click="themeLightbox = 'code'" variant="outline-primary">CODES <i class="fa fa-code"></i></b-button>
		</div>

			<a
				:href="require(`../imgs/img (${n}).jpg`)"
				class="position-relative d-inline-block mb-2 mr-2"
				v-lightbox
				v-for="n in 8"
				:key="n"
			>
				<img :src="require(`../imgs/img (${n}).jpg`)" alt="lightImg" style="width: 200px;" />
			</a>

			<a
				:href="require(`../imgs/code_(${n}).jpg`)"
				class="position-relative d-inline-block mb-2 mr-2"
				v-lightbox="'code'"
				v-for="n in 8"
				:key="`../imgs/img (${n}).jpg`"
			>
				<img :src="addImage(n)" alt="lightImg" style="width: 200px;" />
			</a>
		</div>

		<!-- Slider part -->
		<div class="container">
			<div class="py-2">
				<legend>CAROUSEL</legend>
			</div>
			<carousel>
				<carousel-slide v-for="n in slides" :key="n" :index="n-1">
					<div
						class="position-absolute w-100 text-light d-flex flex-column align-items-center justify-content-center h-100 font-weight-bold"
						style="background-color: #00000088;font-size: 30px;"
					>Slide {{n}}</div>
					<img :src="require(`../imgs/img (${n}).jpg`)" alt="slide" class="w-100" />
				</carousel-slide>
			</carousel>
			<div class="py-3">
				<b-button @click="addSlide" variant="outline-primary" class="mr-2">Ajouter un slidet <i class="fa fa-plus"></i></b-button>
				<b-button @click="removeSlide" variant="outline-danger">Enlever un slide <i class="fa fa-times"></i></b-button>
			</div>
		</div>
	</div>
</template>
<script>
import Carousel from "@/components/carousels/Carousel";
import CarouselSlide from "@/components/carousels/CarouselSlide";
import Lightbox from "@/components/lightbox/Lightbox";

export default {
	components: {
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
			if(this.slides > 1)
			this.slides--;
		},
		addImage(n){ //thing to add event when img is not found...
			try {
				return require(`../imgs/img (${n}).jpg`)
			} catch (error) {
				console.log('hello',error);
			}
		}
	}
};
</script>
