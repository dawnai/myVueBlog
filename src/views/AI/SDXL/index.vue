<template>
  <div style="margin: 80px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="图像内容">
              <el-input
                clearable
                v-model="form.prompt"
                placeholder="请使用英文描述图像内容 例如：‘An astronaut riding a rainbow unicorn, cinematic, dramatic’"
              ></el-input>
            </el-form-item>
            <el-form-item label="否定内容">
              <el-input
                clearable
                v-model="form.negative_prompt"
                placeholder="请使用英文描述不想生成的内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="宽度">
              <el-input
                type="number"
                v-model="form.width"
                placeholder="请输入图像宽度，默认1024"
              ></el-input>
            </el-form-item>
            <el-form-item label="高度">
              <el-input
                type="number"
                v-model="form.height"
                placeholder="请输入图像宽度，默认1024"
              ></el-input>
            </el-form-item>
            <el-button @click="send">开始生成</el-button>
            
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <img src="../imgs/sdxl_cover.jpg" alt="" v-show="isShow" />
        <img :src="data.result[0]" alt="" style="width: 100%;" />
        <myWaiting v-show="isWating"></myWaiting>
        <myFalse v-show="isfalse"></myFalse>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api";
import myWaiting from '../myWaiting'
import myFalse from '../myFalse'
export default {
  name: "mySdxl",
  data() {
    return {
      form: {
        prompt: "",
        negative_prompt: "",
        width: "",
        height: "",
      },
      data: {
        result: [],
      },
      isShow: true,
      isWating:false,
      isfalse:false,
    };
  },
  methods: {
    send() {
      console.log("点击成功");
      this.data.result[0]=''
      this.$message.success("开始生成图像，请耐心等待");
      this.isShow = false;
      this.isWating = true;
      this.isfalse=false;
      api
        .getSdxltData(this.form)
        .then((data) => {
          this.data = data;
          console.log(this.data);
          this.isWating=false;
          this.$message.success("图像生成成功");
        })
        .catch((error) => {
          console.error("Error:", error);
          this.$message.error("图像生成失败,请不要输入涩涩的东西");
          this.isfalse=true;
          this.isWating=false
        });
    },
  },
  components:{
    myWaiting,
    myFalse
  }
};
</script>

<style></style>