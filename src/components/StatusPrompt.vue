<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="prompt" :class="{ active: isVisible }">
    {{ message }}
  </div>
</template>

<style scoped>
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
  transition: opacity 0.5s ease-in-out; /* Only opacity is transitioned */

  /* Appear bottom centre */
  position: fixed;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0; /* Start with 0 opacity */
}

/* Apply opacity when visible */
.prompt.active {
  opacity: 1;
}
</style>
