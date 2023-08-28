<template>
    <div style=" width: 100%;" id="car">
        
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/json/car.json';
export default{
    name:'carlottie',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('car');
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