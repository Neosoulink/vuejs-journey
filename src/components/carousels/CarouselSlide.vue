<template>
	<transition :name="directionTrans">
		<div v-show="visible">
			<div class="">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'CarouselSlide',
	props: {
		index: {type :Number, default: 0}
	},
	computed: {
		visible() {
			return this.index === this.$parent.index
		},
		directionTrans(){
			if (this.$parent.direction) {
				return 'slide-'+this.$parent.direction;
			}
			return '';
		}
	},
}
</script>

<style>
	.slide-right-enter-active{
		animation : slidRighteIn 1s;
	}

	.slide-right-leave-active{
		animation : slideRightOut 1s;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
	}

	@keyframes slidRighteIn {
		from{ transform : translateX(100%); }
		to{ transform : translateX(0%); }
	}

	@keyframes slideRightOut {
		from{ transform : translateX(0%); }
		to{ transform : translateX(-100%); }
	}

	.slide-left-enter-active{
		animation : slideLeftIn 1s;
	}

	.slide-left-leave-active{
		animation : slideLeftOut 1s;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
	}

	@keyframes slideLeftIn {
		from{ transform : translateX(-100%); }
		to{ transform : translateX(0%); }
	}

	@keyframes slideLeftOut {
		from{ transform : translateX(0%); }
		to{ transform : translateX(100%); }
	}
</style>