<template>
    <div style="margin: 50px;">
        <el-row type="flex" align="middle" style="height: 60vh;">
            <el-col :span="12">
                <myAiLottie></myAiLottie>
            </el-col>
            <el-col :span="12">
                <div class="myWelcome" style="text-align: center;">
                    <h1 style="font-size: 8vh">This module is designed to allow everyone to experience the joy of algorithms
                    </h1>

                    <h2>--------------</h2>
                    <h3>欢迎使用AI在线图像处理算法</h3>
                    <h3 style="display: inline-block">我提供了一些在线处理模块</h3>
                </div>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="cardstyle">
                        <img src="./imgs/llava.png" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7;">
                            Llava-13B
                        </h2>
                        <p>Visual instruction tuning towards large language </p>
                        <p>该视觉模型可以描述图片的内容</p>
                    </div>

                </el-card>

            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="cardstyle">
                        <img src="./imgs/out-0-22.png" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7">
                            Latent-Consistency-Model
                        </h2>
                        <p>Synthesizing High-Resolution Images with Few-Step Inference</p>
                        <p>该视觉模型可以生成很多高质量的人像</p>
                    </div>


                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover" @click="toSdxl">
                    <div class="cardstyle">
                        <img src="./imgs/sdxl_cover.jpg" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7">
                            SDXL
                        </h2>
                        <p>A text-to-image generative AI model that creates beautiful images</p>
                        <p>图像生成类模型，生成各种奇怪场景</p>
                        <el-button @click="toSdxl">star</el-button>

                    </div>

                </el-card>
            </el-col>

        </el-row>
        <br>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="cardstyle">
                        <img src="./imgs/IFAN.png" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7">
                            IFAN
                        </h2>
                        <p>Removes defocus blur in an image </p>
                        <p>该视觉模型可以去除失焦模糊</p>
                    </div>

                </el-card>

            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="cardstyle">
                        <img src="./imgs/SR.png" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7">
                            Rudalle-SR
                        </h2>
                        <p>Real-ESRGAN super-resolution model from ruDALL-E</p>
                        <p>该视觉模型可以将低分图像转化为高分辨率图像</p>
                    </div>

                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="cardstyle">
                        <img src="./imgs/style.png" alt="" style="width: 100%;">
                        <h2 style="color: #002fa7">
                            Clipstyler
                        </h2>
                        <p>Image Style Transfer with Text Condition</p>
                        <p>图像风格转移类模型，可以将图片转为手绘</p>
                    </div>

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import myAiLottie from './myAiLottie'
export default {
    name: 'AI',
    data() {
        return {
            output: '',
        }
    },
    components: {
        myAiLottie
    },
    methods: {
        toSdxl(){
            console.log('good')
            this.$router.push("/Sdxl")
        }
    }
}
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
</style>