<template>
  <div style="margin-top: 50px; margin-bottom: 20px">
    <bigDisplay :topImgUrl="topImgUrl" :leftImgUrl="leftImgUrl" :midImgUrl="midImgUrl" :rightImgUrl="rightImgUrl"></bigDisplay>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  import bigDisplay from '@/views/bigDisplay'
export default {

  name: "myDaily",
data(){
    return {
        topImgUrl:require('@/assets/imgs/河边露营.png'), //传递图像要使用require，直接传递字符串 行不通
        leftImgUrl:require('@/assets/imgs/年轮.jpg'),
        midImgUrl:require('@/assets/imgs/瑞士.jpg'),
        rightImgUrl:require('@/assets/imgs/五所.jpg'),
    }
},
  components: {
    bigDisplay
  },
};
</script>

<style scoped>
</style>