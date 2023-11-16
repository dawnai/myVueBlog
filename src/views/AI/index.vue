<template>
  <div style="margin: 50px">
    <el-row type="flex" align="middle" style="height: 60vh">
      <el-col :span="12">
        <myAiLottie></myAiLottie>
      </el-col>
      <el-col :span="12">
        <div class="myWelcome" style="text-align: center">
          <h1 style="font-size: 8vh">
            This module is designed to allow everyone to experience the joy of
            algorithms
          </h1>

          <h2>--------------</h2>
          <h3>欢迎使用AI在线图像处理算法</h3>
          <h3 style="display: inline-block">我提供了一些在线处理模块</h3>
        </div>
      </el-col>
    </el-row>
    <br />
    <!-- SDXL介绍 -->
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="12">
        <el-card shadow="hover">
          <h1 style="font-size: 3vw; margin: 10px 0px; color: #002fa7">SDXL</h1>
          <p class="introduce">
            AI绘画领域我接触的比较晚，早期的绘画模型我都没有使用过，SDXL反而是我第一个接触的AI绘画模型。
          </p>
          <p class="introduceEng">
            I came into the field of AI art relatively late, and I haven't used
            early painting models. Instead, SDXL was the first AI painting model
            I encountered
          </p>
          <p class="introduce">
            SDXL也是基于latent
            diffusion架构，但是SDXL已经超越了先前发布的各种版本的Stable
            Diffusion，并且与当前未开源的文生图SOTA模型（如midjorney）具有不相上下的效果
          </p>
          <p class="introduceEng">
            SDXL is also based on the latent diffusion architecture, but it has
            surpassed various previous versions of Stable Diffusion that have
            been released. Its performance is on par with current
            state-of-the-art (SOTA) models in non-open-source realms, such as
            the undisclosed model Midjorney
          </p>
          <p class="introduce" style="display: flex;align-items: center;">
            <span>你可以点击下方按钮进行体验</span><svg t="1700117773320" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1737" width="32" height="32"><path d="M778.9056 59.9552h-366.592c-41.9328 0-81.152 22.528-102.2976 58.5728l-169.0112 288.256a123.8528 123.8528 0 0 0 25.7536 156.672l3.7376 3.584c44.032 36.3008 112.0256 34.9696 154.624-1.3312V885.76a119.296 119.296 0 0 0 203.776 84.0704 118.784 118.784 0 0 0 34.56-85.248l-1.8944-194.048 246.784-17.1008a100.9664 100.9664 0 0 0 91.8528-100.7616l-2.4576-394.1888a119.3472 119.3472 0 0 0-118.8352-118.528zM215.296 516.4032l-3.072-2.816a56.6272 56.6272 0 0 1-12.9536-72.704l168.96-288.2048a50.5344 50.5344 0 0 1 44.032-25.1904h366.6432c28.16 0 51.1488 23.04 51.3024 51.4048l2.5088 393.9328a33.4336 33.4336 0 0 1-30.1056 33.3824l-245.8624 16.9984a67.4816 67.4816 0 0 0-62.6688 67.9424l1.8432 194.048c0.1536 14.08-5.12 27.1872-14.9504 37.0688a51.8144 51.8144 0 0 1-88.3712-36.5056V357.2736L289.536 505.6a53.76 53.76 0 0 1-74.24 10.8032z" fill="#2c2c2c" p-id="1738"></path></svg>
          </p>
          <el-button style="background-color: #002fa7;color: white;" @click="toSdxl()">开始</el-button>

        </el-card>
      </el-col>
      <el-col :span="12">
        <img src="./imgs/sdxl_cover.jpg" alt="" />
      </el-col>
    </el-row>
    
  </div>
</template>
<script>
import myAiLottie from "./myAiLottie";
export default {
  name: "AI",
  data() {
    return {
      output: "",
    };
  },
  components: {
    myAiLottie,
  },
  methods: {
    toSdxl() {
      console.log("good");
      this.$router.push("/Sdxl");
    },
  },
};
</script>

<style scoped>
.myWelcome {
  background: linear-gradient(30deg, #22c358, #002fa7);
  -webkit-background-clip: text;
  /* 适用于WebKit内核的浏览器（Chrome、Safari等） */
  color: transparent;
  /* 让文字透明 */
}

p {
  /* color: #626362; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bolder;
  font-family: "阿里妈妈灵动体 VF Thin";
}

.cardstyle:hover {
  background: linear-gradient(30deg, #22c358, #002fa7);
  -webkit-background-clip: text;
  /* 适用于WebKit内核的浏览器（Chrome、Safari等） */
  color: transparent;
}
img {
  width: 100%;
}
.introduce {
  font-family: "阿里妈妈灵动体 VF Thin";
  font-weight: bold;
  color: #202020;
  margin-top: 20px;
}
.introduceEng {
  font-family: "阿里妈妈灵动体 VF Thin";
  font-size: small;
  color: #202020;
  margin-top: 10px;
}

</style>