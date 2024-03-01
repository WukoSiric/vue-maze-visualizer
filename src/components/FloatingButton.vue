<script>
export default {
	props: {
		buttonText: {
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
	<button ref="button" @click="buttonFunction"> {{ buttonText }} </button>
</template>

<style></style>