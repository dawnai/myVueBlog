<template>
    <div style=" width: 100%;" id="cat1">
        
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../../../assets/json/work.json';
export default{
    name:'mylottie',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('cat1');
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