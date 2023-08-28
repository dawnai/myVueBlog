<template>
            <div>
                <div class="myIntroduce" style="margin-top: 50px;margin-bottom: 20px;">
                    <el-row>
                        <el-col :span="12">
                            <mylottie></mylottie>
                        </el-col>
                        <el-col :span="12">
                            <el-card class="myWelcome">
                                <h1 style="font-size: calc(520% + 10px);">Welcom to</h1>
                                <h1 style="font-size: calc(520% + 10px);">DAWN's </h1>
                                <h1 style="font-size: calc(520% + 10px);">Home </h1>
                                <h2>--------------</h2>
                                <h3>嗨，你好呀</h3>
                                <h3 style="display: inline-block;">欢迎来到我的个人网站！</h3>

                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style=" background-color: #f2f2f2; padding: 50px 50px;">
                    <el-row>
                        <el-col :span="12">
                            <h1 style="font-size: 3vw; margin: 10px 0px; color: #002FA7;">简单介绍一下我的网站</h1>
                            <h1 style="font-size: 2vw;">Introduction to the website</h1>
                            <p class="myWebIntrooduce">
                                我建立这个网站的目的是分享生活。我希望通过这个平台，能够与您分享我的经验、见解以及我所深爱的艺术。
                            </p>
                            <p class="myWebIntrooduce">无论您是新手还是专家，我都希望我的内容能够对您有所启发和帮助</p>
                            <p class="myWebIntrooduceEnglish">The purpose of establishing this website is to share life. I
                                hope to share my experience, insights, and beloved art with you through this platform.
                                Whether you are a novice or an expert, I hope my content can inspire and help you</p>
                            <p style="margin-top: 20px;" class="myWebIntrooduce">
                                在这个网站上，您将找到关于AI的文章、教程、作品展示等。我尽力使内容有足够的深度，同时也保持易于理解。我希望这些内容能够为您提供新的视角</p>
                            <p class="myWebIntrooduceEnglish">On this website, you will find articles, tutorials, work
                                displays, and more about AI. I try my best to make the content deep enough while also
                                keeping it easy to understand. I hope these contents can provide you with a new perspective
                            </p>
                            <p class="myWebIntrooduce" style="margin-top: 20px;"> <a href="https://www.bilibili.com"
                                    style="text-decoration: none;color:#002FA7 ;">去看看我的文章 <svg t="1692842691541"
                                        class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="6299" width="25" height="25">
                                        <path
                                            d="M620.8 179.2c12.8 12.8 6.4 32-6.4 44.8-19.2 6.4-38.4 6.4-44.8-12.8-44.8-70.4-128-115.2-217.6-115.2-140.8 0-256 115.2-256 256 0 89.6 44.8 166.4 115.2 217.6 19.2 6.4 19.2 25.6 12.8 38.4-12.8 19.2-32 19.2-44.8 12.8C89.6 563.2 32 460.8 32 352c0-179.2 140.8-320 320-320 108.8 0 211.2 57.6 268.8 147.2zM326.4 332.8l243.2 601.6 83.2-243.2c6.4-19.2 19.2-32 38.4-38.4L934.4 576 326.4 332.8z m25.6-57.6L960 518.4c32 12.8 51.2 51.2 38.4 83.2-6.4 19.2-19.2 32-38.4 38.4l-243.2 83.2L633.6 960c-12.8 32-44.8 51.2-83.2 38.4-19.2-6.4-32-19.2-38.4-38.4L268.8 358.4c-12.8-32 6.4-70.4 38.4-83.2 12.8-6.4 32-6.4 44.8 0z"
                                            fill="#002FA7" p-id="6300"></path>
                                    </svg></a></p>
                        </el-col>
                        <el-col :span="12" style="padding: 10px 10px;">
                            <el-card style="border-radius: 20px;">
                                <catlottie />
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <!-- 内容区域 -->
                <div style="margin:30px 100px; border-right:1px solid #bcbbbb ;">
                    <el-row type="flex"  align="middle">
                        <el-col :span="8">
                            <div>
                                <img src="../../assets/微信图片_20230206145629.jpg" alt="" style="width: 100%;">
                            </div>

                        </el-col>
                        <el-col :span="12"  >
                            <div 
                                style="background-color: white; padding: 30px 0px 30px 40px;margin-left: -10%;">
                                <h1 style="font-size: 3vw; margin: 10px 0px; color: #002FA7;">为什么使用这个头像？</h1>
                                <h1 style="font-size: 2vw;">Logo information</h1>
                                <p class="myWebIntrooduce">灵感来自村上春树的《ノルウェイの森》(挪威的森林),第九章</p>
                                <p class="myWebIntrooduce">绿子向渡边彻表达自己爱意的时候说：</p>
                                <p class="myWebIntrooduce" style="color: #22c358;">"私はあなたが好きで，春の熊が好きなように"</p>
                                <p class="myWebIntrooduce">"最最喜欢你了，像喜欢春天的熊一样"</p>
                                <p class="myWebIntrooduceEnglish">"I am fond of you, much like a bear in spring"</p>
                            </div>
                        </el-col>

                    </el-row>
                    <el-row type="flex" justify="center" style="margin-top:30px" :gutter="30" >
                        <el-col  :span="7">
                            <img src="../../assets/dc7b9bab75eb5c1347536417d7b5a5e.jpg" alt="" style="width: 100%;height:75%">
                            <h5 style="margin: 10px 0px;color:rgb(59, 59, 59)">CAMERA</h5>
                            <h3 >华南农业大学的牛牛</h3>
                            <h5 >_______</h5>
                            <h5 style="font-style:italic;margin-top:10px">by Web</h5>
                        </el-col>
                        <el-col  :span="7">
                            <img src="../../assets/6fb5314fa7ab822b04926d3d03a01e8.jpg" alt="" style="width: 100%;height:75%">
                            <h5 style="margin: 10px 0px;color:rgb(59, 59, 59)">PEOPLE</h5>
                            <a href="https://space.bilibili.com/375065148?spm_id_from=333.337.0.0" style="color:black; text-decoration:none"><h3>B站up:虞兮西西 <svg t="1692949855247" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3799" width="32" height="32"><path d="M455.68 404.032l91.264 529.152c0 0 67.456-69.44 123.136-117.888l122.432 163.904c4.928 6.656 15.68 7.104 23.872 1.088l52.288-38.208c8.256-6.016 10.944-16.32 5.952-22.976l-119.104-159.424c62.208-25.088 164.672-53.632 164.672-53.632L455.68 404.032zM308.352 648.384l-135.872 99.328c-20.544 15.04-24.256 43.968-8 65.408 16.256 21.376 46.272 27.008 66.752 12.032l135.872-99.328c20.992-15.36 24.512-45.504 8.256-66.88C359.168 637.504 329.344 633.024 308.352 648.384zM949.696 238.976c-16.256-21.376-45.632-26.176-67.072-10.496l-134.912 98.688c-21.44 15.68-25.152 44.672-8.896 66.048 16.256 21.376 46.272 27.008 67.712 11.328l134.912-98.688C962.88 290.176 965.952 260.352 949.696 238.976zM319.296 136.832c-15.936-20.928-45.248-25.728-66.752-10.048-20.096 14.72-24.256 43.968-8.32 64.896l105.536 138.816c15.936 20.992 45.696 25.408 65.792 10.688 21.44-15.68 25.216-44.608 9.28-65.6L319.296 136.832zM585.792 301.76c26.176 4.224 50.24-13.376 53.632-39.232l21.184-167.808c3.392-25.792-14.976-49.984-41.536-54.656-26.176-4.224-50.24 13.376-53.632 39.168l-21.248 167.872C540.928 272.96 559.296 297.088 585.792 301.76zM329.728 489.024c2.56-25.92-15.808-50.048-41.536-54.656l-170.048-27.968c-27.072-3.584-50.688 13.696-53.632 39.232-3.904 26.944 14.464 51.072 41.536 54.656l170.048 27.968C301.824 532.736 325.504 515.456 329.728 489.024z" fill="#272636" p-id="3800"></path></svg></h3></a>
                            
                            <h5 >_______</h5>
                            <h5 style="font-style:italic;margin-top:10px">by Bilibili</h5>
                            
                        </el-col>
                        <el-col  :span="7">
                            <img src="../../assets/f1affa5852406db49844164e1d1381d.jpg" alt="" style="width: 100%;height:75%">
                            <h5 style="margin: 10px 0px;color:rgb(59, 59, 59)">PEOPLE</h5>
                            <h3 >很cool的车车</h3>
                            <h5 >_______</h5>
                            <h5 style="font-style:italic;margin-top:10px">by NoName</h5>
                        </el-col>

                    </el-row>

                </div>

            </div>
</template>

<script>
import mylottie from "./mylottie";
import catlottie from './catlottie'
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    name: "home",
    components: {
        mylottie,
        catlottie
    }
};
</script>

<style scoped>
@font-face {
    font-family: "阿里妈妈灵动体 VF Thin";
    src: url("../../assets/font/AlimamaAgileVF-Thin.woff2") format("woff2"),
        url("../../assets/font/AlimamaAgileVF-Thin.woff") format("woff");
    font-display: swap;
}

@font-face {
    font-family: "old";
    src: url("../../assets/font/oold.ttf") format("truetype");
    font-display: swap;
}

h1 {
    font-weight: bolder;
    font-family: "阿里妈妈灵动体 VF Thin";
}

h4 {
    margin-top: 10px;

}
.myWelcome {
    background: linear-gradient(30deg, #22c358, #002FA7);
    -webkit-background-clip: text;
    /* 适用于WebKit内核的浏览器（Chrome、Safari等） */
    color: transparent;
    /* 让文字透明 */
    border-radius: 20px;
}

.myWebIntrooduce {
    font-family: "阿里妈妈灵动体 VF Thin";
    font-weight: bold;
    color: #202020;
}

.myWebIntrooduceEnglish {
    font-family: "阿里妈妈灵动体 VF Thin";
    color: #202020;
    font-size: small;
}

.myA {
    text-decoration: none;
    font-family: 阿里妈妈灵动体 VF Thin;
    font-weight: bolder;
    font-size: larger;
}

p {
    margin: 10px 0px;
}



</style>