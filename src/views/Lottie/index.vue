<template>
    <div ref="animationContainer" class="lottie-container"></div>
  </template>
  
  <script>
  import lottie from 'lottie-web';
  
  export default {
    props: {
      animationData: {
        type: Object,
        required: true,
      },
      loop: {
        type: Boolean,
        default: true,
      },
    },
    mounted() {
      this.initAnimation();
    },
    methods: {
      initAnimation() {
        this.animation = lottie.loadAnimation({
          container: this.$refs.animationContainer,
          renderer: 'svg',
          loop: this.loop,
          autoplay: true,
          animationData: this.animationData,
        });
      },
    },
    beforeDestroy() {
      if (this.animation) {
        this.animation.destroy();
      }
    },
  };
  </script>
  
  <style scoped>
  .lottie-container {
    width: 100%;
    height: 100%;
  }
  </style>