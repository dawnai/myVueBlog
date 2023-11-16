<template>
    <div style=" width: 100%;" id="myFalse">
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/json/false.json';
export default{
    name:'myFalse',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('myFalse');
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