<template>
    <!-- id需要独一无二 -->
    <div style=" width: 100%;" id="web1">
        
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/json/web.json';//修改路径
export default{
    name:'weblottie',
    mounted() {
    this.initLottieAnimation();
  },
  methods: {
    initLottieAnimation() {
      const animationContainer = document.getElementById('web1');//修改id
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