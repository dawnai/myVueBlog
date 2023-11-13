<template>
    <div style="margin: 80px;">
        <el-row :gutter="20">

            <el-col :span="12">
                <el-card>
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item label="图像内容">
                            <el-input v-model="form.prompt"></el-input>
                        </el-form-item>
                        <el-form-item label="图像否定内容">
                            <el-input v-model="form.negative_prompt"></el-input>
                        </el-form-item>
                        <el-form-item label="图像的宽度">
                            <el-input v-model="form.width"></el-input>
                        </el-form-item>
                        <el-form-item label="图像的高度">
                            <el-input v-model="form.height"></el-input>
                        </el-form-item>
                        <el-button @click="send">开始生成</el-button>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="12">
                <img src="../imgs/sdxl_cover.jpg" alt="" v-show="isShow">
                <img :src="data.result[0]" alt="">
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api'
export default {
    name: 'mySdxl',
    data() {
        return {
            form: {
                prompt: '',
                negative_prompt: '',
                width: '',
                height: '',
            },
            data: {
                result:[]
            },
            isShow:true
        }
    },
    methods: {
        send() {
            console.log('点击成功')
            this.isShow=false
            api.getSdxltData(this.form)
                .then(data => {
                    this.data = data;
                    console.log(this.data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
    }
}

</script>

<style></style>