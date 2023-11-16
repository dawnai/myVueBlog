<template>
    <div style=" width: 100%;" id="mywaiting">
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/json/waiting.json';
export default{
    name:'myWaiting',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('mywaiting');
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