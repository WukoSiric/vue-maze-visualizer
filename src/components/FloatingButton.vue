<script>
export default {
	props: {
		faClass: {
			Type: String,
			Required: true
		},
		buttonFunction: {
			Type: Function,
			Required: true
		}
	},
	data() {
		return {
			buttonRef: null
		};
	},
	mounted() {
		this.buttonRef = this.$refs.button;
	},
	methods: {

	}
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<button id="floating-button" ref="button" @click="buttonFunction"> <i :class="faClass"></i></button>
</template>

<style>
#floating-button {
	background-color: rgb(57, 57, 253);
	color: white;
	padding: 16px 20px;
	font-size: 1.2rem;
	font-weight: bold;
	border: none;
	cursor: pointer;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>