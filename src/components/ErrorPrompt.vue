<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		}
	},
	data() {
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<template>
	<div class="prompt"> {{ message }}</div>
</template>

<style>
.prompt {
	background-color: #f44336;
	color: white;
	text-align: center;
	padding: 16px 20px;
	font-size: 1.2rem;
	font-weight: bold;
	border: none;
	cursor: pointer;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

	/* Appear bottom centre */
	position: fixed;
	bottom: 1%;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>