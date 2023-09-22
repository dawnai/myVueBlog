<template>
    <div style="margin: 40px;">
        <!-- 大屏展示前端东西 -->
        <div>
            <div style="background-color: #f2f2f2; padding: 50px 50px">
                <el-row>
                    <el-col :span="12">
                        <h1 style="font-size: 3vw; margin: 10px 0px; color: #002fa7">
                            我的网站使用哪些技术
                        </h1>
                        <h1 style="font-size: 2vw">Which graceful technologies adorn my website?</h1>
                        <p class="myWebIntrooduce" style="margin-top: 20px">
                            网站使用Vue框架搭建起来的，排版的部分使用了ELement，其中还有各种小动画，均使用lottie技术，资源来自<a href="https://lottiefiles.com/"
                                style="color: #002fa7;text-decoration: none;">这里</a>
                        </p>

                        <p class="myWebIntrooduceEnglish" style="margin-top: 10px;">
                            The website is built using the Vue framework, with the layout designed using Element. Various
                            small animations are implemented using Lottie technology, and resources are sourced from here
                        </p>
                        <p style="margin-top: 20px" class="myWebIntrooduce">
                            至于服务器的后端以及域名问题，我采用腾讯云服务的静态网站托管解决。选择静态网站托管的原因主要有两点，一是价格便宜，一天只需1分钱，二是提供了测试域名，让国内的朋友可以快速访问。
                        </p>
                        <p class="myWebIntrooduceEnglish" style="margin-top: 10px;">
                            As for the server's backend and domain issues, I've opted for Tencent Cloud's static website
                            hosting solution. There are two primary reasons for choosing static website hosting: first, it's
                            cost-effective, costing only 1 cent per day, and second, it provides a testing domain, allowing
                            my friends in China to access it quickly.
                        </p>
                        <p class="myWebIntrooduce" style="margin-top: 20px">
                            在后续文章中，我将持续更新我喜欢的资源网站
                        </p>
                        <p class="myWebIntrooduceEnglish" style="margin-top: 10px;">
                            In future articles, I will continue to update my favorite resource websites
                        </p>
                    </el-col>
                    <el-col :span="12" style="padding: 10px 10px">
                        <el-card style="border-radius: 20px;height: 70vh;">
                            <weblottie />
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 展示各个资源网站 -->
        <div style="margin-top: 40px; background-color: #f2f2f2;">
            <el-row style="padding: 30px;" :gutter="20">
                <el-col :span="8">
                    <a href="https://lottiefiles.com/" style="text-decoration: none;">
                        <el-card>
                            <h1 style="color: rgb(0, 220, 177);">LottieFiles</h1>
                            <br>
                            <div>
                                <img src="@/assets/imgs/lottiefiles.png" alt="" style="width: 100%;">
                            </div>
                            <div style="margin-top: 20px;">
                                <p class="myWebIntrooduce">LottieFiles 是一个免费的动画库，里面有很多优质的动画，我的网站大部分的小动画均来自这里</p>
                            </div>
                        </el-card>
                    </a>
                </el-col>
                <el-col :span="8">
                    <a href="https://2019.makemepulse.com/" style="text-decoration: none;">
                        <el-card>
                            <h1 style="color: #767d96;">NOMADIC TRIBE</h1>
                            <br>
                            <div>
                                <img src="@/assets/imgs/游牧部落.png" alt="" style="width: 100%;">
                            </div>
                            <div style="margin-top: 20px;">
                                <p class="myWebIntrooduce">NOMADIC TRIBE（游牧部落） 这是一个做的很好的web互动网站，在这个网站上可以进行一场特殊的旅行</p>
                            </div>
                        </el-card>
                    </a>
                </el-col>
                <el-col :span="8">
                    <a href="https://echarts.apache.org/zh/index.html" style="text-decoration: none;">
                        <el-card>
                            <h1 style="color: #f72c5b;">Apache ECharts</h1>
                            <br>
                            <div>
                                <img src="@/assets/imgs/echarts.png" alt="" style="width: 100%;">
                            </div>
                            <div style="margin-top: 20px;">
                                <p class="myWebIntrooduce">Apache ECharts 是一个做图的网站，你可以通过echarts制作好看的科研绘图</p>
                            </div>
                        </el-card>
                    </a>
                </el-col>
            </el-row>
        </div>
        <bigDisplay :bigDisplayContent="bigDisplayContent"></bigDisplay>
    </div>
</template>

<script>
import weblottie from './weblottie'
import bigDisplay from "@/views/bigDisplay";
export default {
    name: 'myWeb',
    components: {
        weblottie,
        bigDisplay
    },
    data() {
        return {
            bigDisplayContent: {
                topImgUrl: require("@/views/myWeb/imgs/new.png"), //传递图像要使用require，直接传递字符串 行不通
                leftImgUrl: require("@/views/myWeb/imgs/冲1.jpg"),
                midImgUrl: require("@/views/myWeb/imgs/冲2.jpg"),
                rightImgUrl: require("@/views/myWeb/imgs/冲3.jpg"),
                oneText: "我为什么喜欢前端呢？",
                twoText: "Why do I like writing web code?",
                threeText: "其实好像自己也没有一个准确的答案，只是觉得这样很酷哎",
                fourText:
                    "也许这个网站也没有什么人会看，大部分的浏览者也都是我的朋友家人",
                fiveText:
                    "可我还是会要求自己不断开发下去，一直保持对网站的更新和维护",
                sixText: "可我能笃定一点，未来的她一定会来看，然后因为配色和排版嘲讽我几句",
                sevenText:
                    "If you shed tears when you miss the sun,you also miss the stars ",
                leftType: "COMIC",
                leftHead: "乙姬潜水士:口岸",
                leftAuthor: "by 袁藤冲人",
                midType: "COMIC",
                midHead: "乙姬潜水士",
                midAuthor: "by  袁藤冲人",
                rightType: "COMIC",
                rightHead: "乙姬潜水士",
                rightAuthor: "by 袁藤冲人",
                color: "#002fa7",
                web:"https://www.youtube.com/watch?v=h5-YQoIrxZ4"
            },
        }
    }

}
</script>

<style>
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
</style>