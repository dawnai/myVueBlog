<template>
  <div style="margin-top: 50px; margin-bottom: 20px">

    <bigDisplay :bigDisplayContent="bigDisplayContent">
    </bigDisplay>
    <el-row style="margin: 30px 100px;">
      <el-col :span="15">
        <div class="block">
          <div class="radio" style="font-weight: bold;margin: 20px 0px; font-size: 30px; display: flex;">
            八月
            <el-radio-group v-model="reverse" text-color="white" fill="#04333e" style="margin-left: 10px;">
              <el-radio-button :label="true" style="font-weight: bolder;">时间<i class="el-icon-top"></i></el-radio-button>
              <el-radio-button :label="false" style="font-weight: bolder;">时间<i class="el-icon-bottom"></i></el-radio-button>
            </el-radio-group>
          </div>
          <el-timeline :reverse="reverse">
            <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
              <el-card>
                <el-row>
                  <el-col :span="22">
                    <h1 class="parperHead">{{ activity.content }}</h1>
                    <h3 class="parperShort">{{ activity.shortContent }}</h3>
                  </el-col>
                  <el-col :span="2">
                    <!-- 点开drow的详情 -->
                    <el-button @click="drawerButton(activity.contents, activity.content)" type="primary"
                      style="margin-left: 16px; border: 0px; background-color: transparent;">
                      <svg t="1693290579425" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5635" width="32" height="32">
                        <path d="M732.16 660.48m-281.6 0a281.6 281.6 0 1 0 563.2 0 281.6 281.6 0 1 0-563.2 0Z"
                          fill="#22c358" p-id="5636" data-spm-anchor-id="a313x.search_index.0.i27.4f753a81sNUCLP"
                          class="selected"></path>
                        <path
                          d="M868.95616 921.36448H114.03264a97.792 97.792 0 0 1-97.536-97.85344V444.84608a20.66432 20.66432 0 0 1 41.3184-0.06144V823.5008a56.39168 56.39168 0 0 0 56.22784 56.41216H868.9664a56.38144 56.38144 0 0 0 56.2176-56.41216V465.5616a20.66432 20.66432 0 1 1 41.30816 0v357.94944a97.81248 97.81248 0 0 1-97.536 97.85344zM493.50656 683.4688a156.94848 156.94848 0 0 1-92.2624-29.8496L45.19936 378.37824a20.6848 20.6848 0 0 1 25.21088-32.8192l355.5328 274.86208a116.2752 116.2752 0 0 0 133.45792 1.32096L913.1008 365.88544a20.6848 20.6848 0 0 1 24.15616 33.60768L583.13728 655.64672a158.26944 158.26944 0 0 1-89.63072 27.82208zM491.52 838.48192a20.71552 20.71552 0 0 1-11.47904-37.94944L665.9072 676.22912a20.6848 20.6848 0 0 1 22.89664 34.46784l-185.856 124.3136a20.41856 20.41856 0 0 1-11.42784 3.47136z m165.2224 0a20.70528 20.70528 0 0 1-11.47904-37.94944l185.86624-124.30336a20.70528 20.70528 0 0 1 22.89664 34.42688L668.14976 834.9696a20.44928 20.44928 0 0 1-11.40736 3.51232z m185.84576-476.50816a20.6848 20.6848 0 0 1-20.65408-20.71552V204.8l-91.136-91.4432H181.7088v227.8912a20.66432 20.66432 0 0 1-41.30816 0.91136V92.63104a20.6848 20.6848 0 0 1 20.65408-20.71552H739.328c5.46816 0 10.73152 2.18112 14.592 6.07232l103.26016 103.58784c3.88096 3.8912 6.06208 9.1648 6.05184 14.65344v145.01888a20.6848 20.6848 0 0 1-20.64384 20.72576c-0.01024 0-0.01024 0 0 0zM532.80768 216.94464H243.712a20.72576 20.72576 0 0 1 0-41.44128h289.1264a20.736 20.736 0 0 1 20.24448 21.1968 20.736 20.736 0 0 1-20.2752 20.24448z m0 82.87232H243.712a20.72576 20.72576 0 0 1 0-41.44128h289.1264a20.736 20.736 0 1 1-0.03072 41.44128z"
                          fill="" p-id="5637"></path>
                      </svg>
                    </el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <!-- 右边可爱的小猫 -->
      <el-col :span="9">
        <lottie :animationData="darkCat">
        </lottie>
      </el-col>
    </el-row>

    <!-- 日记正文的drow -->
    <el-drawer :title="displayHeader" :visible.sync="drawer" :direction="direction" 
      :with-header="false">
      <div class="parperBox">
        <p class="hang-indent">{{ displayContent }}</p>

      </div>

    </el-drawer>
  </div>
</template>

<script>
import bigDisplay from '@/views/bigDisplay'
import lottie from '@/views/Lottie'
import darkCat from '@/assets/json/darkCat.json'
export default {
  name: "myDaily",
  data() {
    return {
      darkCat,
      // 大图展示数据
      bigDisplayContent: {
        topImgUrl: require('@/assets/imgs/河边露营.png'), //传递图像要使用require，直接传递字符串 行不通
        leftImgUrl: require('@/assets/imgs/年轮.jpg'),
        midImgUrl: require('@/assets/imgs/瑞士.jpg'),
        rightImgUrl: require('@/assets/imgs/五所.jpg'),
        oneText: '为什么想着写日记？',
        twoText: 'Why pen a diary\'s prose?',
        threeText: '写日记是自己的个人喜好，喜欢记录自己的生活',
        fourText: '当你回看日记的时候，你会发现时间原来过得很慢，这里摘抄一句泰戈尔的诗句：',
        fiveText: 'तितली महीनों की गिनती नहीं करती, बल्कि क्षणों की गिनती करती है, और उसके पास पर्याप्त समय होता है।',
        sixText: '蝴蝶不计算月份，只计算瞬间，而时间已足够',
        sevenText: 'The butterfly counts not months but moments, and has time enough',
        leftType: 'CAMERA',
        leftHead: '艺术品：七十',
        leftAuthor: 'by 广州美术馆',
        midType: 'CAMERA',
        midHead: '瑞士风景 嘎嘎棒！',
        midAuthor: 'by  maud',
        rightType: 'CAMERA',
        rightHead: '夕阳也下班',
        rightAuthor: 'by Dawn',
        color: '#04333e'
      },
      // 日记数据
      reverse: false, //用于控制日记的展示顺序
      activities: [{
        content: '写给这个网站',
        timestamp: '2023-08-29',
        shortContent: '这一封日记写给这个网站，在这一天我完成了日记的大致框架，后期只管录入文件就行',
        contents: '兜兜转转，终于可以写上第一篇日记了，今天广州的天气变凉快了，没有月初那么难受了。现在我写日记的方式是直接写在页面当中的，这肯定是不可取的，但是我还不知道该怎么安排读取文件，让其可以直接呈现。并且日记展示的组件还没有写完，日记的所有内容都放在前端了。也不知道这样放置所有内容，服务器多久才开始卡，反正我觉得应该快了。到时候出现卡顿的时候，再去优化代码吧，反正现在也不会怎么优化，只会搭建一些简单的界面，复杂的逻辑还不能搞懂，并且这个网站也只是静态的，不能和朋友进行一些互动，实在是可惜唉。但是话虽这么说，但我内心还是已经很满意了，毕竟静态网站一天只需要一分钱，就可以让全球的用户来看看这个网页，简直是泰裤辣。域名备案下来后，赶紧换上自己的域名，岂不美滋滋',
      }, {
        content: '用于测试',
        timestamp: '2023-08-17'
      }, {
        content: '用于测试',
        timestamp: '2018-08-15'
      }],
      // 日记drow控制数据
      drawer: false,
      direction: 'ltr',
      displayContent: '',
      displayHeader: '',

    }
  },
  components: {
    bigDisplay,
    lottie
  },
  methods: {
    // 打开信封回调
    drawerButton(contents, head) {
      this.drawer = true
      this.displayContent = contents
      this.displayHeader = head
    }
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
.radio {
  font-family: '阿里妈妈灵动体 VF Thin';
  font-size: larger;
}

.parperHead {
  font-family: '阿里妈妈灵动体 VF Thin';
  color: #04333e;
}

.parperHead {
  font-family: '阿里妈妈灵动体 VF Thin';
  color: #303131;
}

.hang-indent {
  font-family: 'old';
  font-size: 200%;
  text-indent: 2ch;
  margin-left: 1ch;
  margin-right: 1ch;
  display: block;
}

.parperBox {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  background-image: linear-gradient(#ffffff 1.1rem, transparent 1.1rem, transparent 2.5rem, #2d2c2c 2.5rem);
  background-size: 100% 2.6rem;
  border-radius: 10px;
  cursor: move;
}
</style>