<template>
  <div style="margin: 30px 100px; border-right: 1px solid #bcbbbb">
    <el-row type="flex" align="middle">
      <el-col :span="8">
        <div>
          <img :src="topImgUrl" alt="" style="width: 100%" />
        </div>
      </el-col>
      <el-col :span="12">
        <div
          style="
            background-color: white;
            padding: 30px 0px 30px 40px;
            margin-left: -10%;
          "
        >
          <h1 style="font-size: 3vw; margin: 10px 0px; color: #04333e">
            为什么想着写日记？
          </h1>
          <h1 style="font-size: 2vw">Why pen a diary's prose?</h1>
          <p class="myWebIntrooduce">
            写日记是自己的个人喜好，喜欢记录自己的生活
          </p>
          <p class="myWebIntrooduce">
            当你回看日记的时候，你会发现时间原来过得很慢，这里摘抄一句泰戈尔的诗句：
          </p>
          <p class="myWebIntrooduce" style="color: #fd7037">
            "तितली महीनों की गिनती नहीं करती, बल्कि क्षणों की गिनती करती है, और
            उसके पास पर्याप्त समय होता है।"
          </p>
          <p class="myWebIntrooduce">
            "蝴蝶不计算月份，只计算瞬间，而时间已足够"
          </p>
          <p class="myWebIntrooduceEnglish">
            "The butterfly counts not months but moments, and has time enough"
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="margin-top: 30px" :gutter="30">
      <el-col :span="7">
        <img
          :src="midImgUrl"
          alt=""
          style="width: 100%; height: 75%"
        />
        <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">CAMERA</h5>
        <h3>瑞士的风景 嘎嘎棒！</h3>
        <h5>_______</h5>
        <h5 style="font-style: italic; margin-top: 10px">by Maud</h5>
      </el-col>
      <el-col :span="7">
        <img
          :src="leftImgUrl"
          alt=""
          style="width: 100%; height: 75%"
        />
        <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">CAMERA</h5>
        <a
          href="https://www.gdmoa.org/"
          style="color: black; text-decoration: none"
          ><h3>
            艺术品:七十
            <svg
              t="1692949855247"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3799"
              width="32"
              height="32"
            >
              <path
                d="M455.68 404.032l91.264 529.152c0 0 67.456-69.44 123.136-117.888l122.432 163.904c4.928 6.656 15.68 7.104 23.872 1.088l52.288-38.208c8.256-6.016 10.944-16.32 5.952-22.976l-119.104-159.424c62.208-25.088 164.672-53.632 164.672-53.632L455.68 404.032zM308.352 648.384l-135.872 99.328c-20.544 15.04-24.256 43.968-8 65.408 16.256 21.376 46.272 27.008 66.752 12.032l135.872-99.328c20.992-15.36 24.512-45.504 8.256-66.88C359.168 637.504 329.344 633.024 308.352 648.384zM949.696 238.976c-16.256-21.376-45.632-26.176-67.072-10.496l-134.912 98.688c-21.44 15.68-25.152 44.672-8.896 66.048 16.256 21.376 46.272 27.008 67.712 11.328l134.912-98.688C962.88 290.176 965.952 260.352 949.696 238.976zM319.296 136.832c-15.936-20.928-45.248-25.728-66.752-10.048-20.096 14.72-24.256 43.968-8.32 64.896l105.536 138.816c15.936 20.992 45.696 25.408 65.792 10.688 21.44-15.68 25.216-44.608 9.28-65.6L319.296 136.832zM585.792 301.76c26.176 4.224 50.24-13.376 53.632-39.232l21.184-167.808c3.392-25.792-14.976-49.984-41.536-54.656-26.176-4.224-50.24 13.376-53.632 39.168l-21.248 167.872C540.928 272.96 559.296 297.088 585.792 301.76zM329.728 489.024c2.56-25.92-15.808-50.048-41.536-54.656l-170.048-27.968c-27.072-3.584-50.688 13.696-53.632 39.232-3.904 26.944 14.464 51.072 41.536 54.656l170.048 27.968C301.824 532.736 325.504 515.456 329.728 489.024z"
                fill="#272636"
                p-id="3800"
              ></path>
            </svg></h3
        ></a>

        <h5>_______</h5>
        <h5 style="font-style: italic; margin-top: 10px">by 广州美术馆</h5>
      </el-col>
      <el-col :span="7">
        <img
          :src="rightImgUrl"
          alt=""
          style="width: 100%; height: 75%"
        />
        <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">CAMERA</h5>
        <h3>夕阳也下班</h3>
        <h5>_______</h5>
        <h5 style="font-style: italic; margin-top: 10px">by Dawn</h5>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
export default {
  name: "bigDisplay",
  props:['topImgUrl','rightImgUrl','midImgUrl','leftImgUrl']
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
p {
    margin: 10px 0px;
}

</style>