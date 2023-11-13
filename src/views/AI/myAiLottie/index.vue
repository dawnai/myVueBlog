<template>
    <div style=" width: 100%;" id="AiLottie">
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../../../assets/json/AiLottie.json';
export default{
    name:'mylottie',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('AiLottie');
      const animationOptions = {
        container: animationContainer,
        animationData: animationData,
        loop: true,
        autoplay: true,
      };
      this.animationInstance = lottie.loadAnimation(animationOptions);
    }
  }

}
</script>

<style>

</style>