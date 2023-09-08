<template>
    <div style="margin: 40px;">
        <!-- 大屏展示前端东西 -->
        <div>
            <div style="background-color: #f2f2f2; padding: 50px 50px">
                <el-row>
                    <el-col :span="12">
                        <h1 style="font-size: 3vw; margin: 10px 0px; color: #22c358">
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
    </div>
</template>

<script>
import weblottie from './weblottie'
export default {
    name: 'myWeb',
    components: {
        weblottie
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
}</style>