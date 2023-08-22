<template>
    <div style="height: 600px; width: 100%;" id="lottie-animation">
        
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../../../assets/json/animation_llmaqk6p.json';
export default{
    name:'mylottie',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('lottie-animation');
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