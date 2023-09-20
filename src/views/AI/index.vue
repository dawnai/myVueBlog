<template>
    <div style="margin: 30px;">
        <h1>这个模块目前正在开发当中</h1>
        <h1>分享一下最近使用的壁纸：</h1>
        <h2>为了用户体验，这里将图片分辨率设置为1080p，你可以点击图片以获取4k原图</h2>
        <!-- 大图 -->
        <el-row>
            <el-col :span="24">
                <a href="https://my-vue-blog-6gpqou7l6bf67715-1300529724.tcloudbaseapp.com/img/AI美少女.d66bc1df.jpg">
                    <img src="@/assets/imgs/AI美少女1080.jpg" alt="" style="width: 100%;">
                </a>
            </el-col>
        </el-row>
        <h1>其实我挺抗拒AI生成的图像，觉得那样画出来的东西没有任何灵魂，这一张是我唯一觉得还不错的AI绘图</h1>
    </div>
</template>
<script>
export default {
    name: 'AI',
    data(){
        return {
            output:'',
        }
    },
    methods: {
        
    }
}
</script>

<style></style>