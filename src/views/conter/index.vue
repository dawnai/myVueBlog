<template>
  <div>
    <div class="myIntroduce" style="margin-top: 50px; margin-bottom: 20px">
      <el-row>
        <el-col :span="12">
          <mylottie></mylottie>
        </el-col>
        <el-col :span="12">
          <el-card class="myWelcome">
            <h1 style="font-size: calc(520% + 10px)">Welcom to</h1>
            <h1 style="font-size: calc(520% + 10px)">DAWN's</h1>
            <h1 style="font-size: calc(520% + 10px)">Home</h1>
            <h2>--------------</h2>
            <h3>嗨，你好呀</h3>
            <h3 style="display: inline-block">欢迎来到我的个人网站！</h3>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="background-color: #f2f2f2; padding: 50px 50px">
      <el-row>
        <el-col :span="12">
          <h1 style="font-size: 3vw; margin: 10px 0px; color: #002fa7">
            简单介绍一下我的网站
          </h1>
          <h1 style="font-size: 2vw">Introduction to the website</h1>
          <p class="myWebIntrooduce">
            我建立这个网站的目的是分享生活。我希望通过这个平台，能够与您分享我的经验、见解以及我所深爱的艺术。
          </p>
          <p class="myWebIntrooduce">
            无论您是新手还是专家，我都希望我的内容能够对您有所启发和帮助
          </p>
          <p class="myWebIntrooduceEnglish">
            The purpose of establishing this website is to share life. I hope to
            share my experience, insights, and beloved art with you through this
            platform. Whether you are a novice or an expert, I hope my content
            can inspire and help you
          </p>
          <p style="margin-top: 20px" class="myWebIntrooduce">
            在这个网站上，您将找到关于AI的文章、教程、作品展示等。我尽力使内容有足够的深度，同时也保持易于理解。我希望这些内容能够为您提供新的视角
          </p>
          <p class="myWebIntrooduceEnglish">
            On this website, you will find articles, tutorials, work displays,
            and more about AI. I try my best to make the content deep enough
            while also keeping it easy to understand. I hope these contents can
            provide you with a new perspective
          </p>
          <p class="myWebIntrooduce" style="margin-top: 20px">
            <a
              href="https://www.bilibili.com"
              style="text-decoration: none; color: #002fa7"
              >去看看我的文章
              <svg
                t="1692842691541"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6299"
                width="25"
                height="25"
              >
                <path
                  d="M620.8 179.2c12.8 12.8 6.4 32-6.4 44.8-19.2 6.4-38.4 6.4-44.8-12.8-44.8-70.4-128-115.2-217.6-115.2-140.8 0-256 115.2-256 256 0 89.6 44.8 166.4 115.2 217.6 19.2 6.4 19.2 25.6 12.8 38.4-12.8 19.2-32 19.2-44.8 12.8C89.6 563.2 32 460.8 32 352c0-179.2 140.8-320 320-320 108.8 0 211.2 57.6 268.8 147.2zM326.4 332.8l243.2 601.6 83.2-243.2c6.4-19.2 19.2-32 38.4-38.4L934.4 576 326.4 332.8z m25.6-57.6L960 518.4c32 12.8 51.2 51.2 38.4 83.2-6.4 19.2-19.2 32-38.4 38.4l-243.2 83.2L633.6 960c-12.8 32-44.8 51.2-83.2 38.4-19.2-6.4-32-19.2-38.4-38.4L268.8 358.4c-12.8-32 6.4-70.4 38.4-83.2 12.8-6.4 32-6.4 44.8 0z"
                  fill="#002FA7"
                  p-id="6300"
                ></path></svg
            ></a>
          </p>
        </el-col>
        <el-col :span="12" style="padding: 10px 10px">
          <el-card style="border-radius: 20px">
            <catlottie />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 内容区域 -->
    <div style="margin: 30px 100px; border-right: 1px solid #bcbbbb">
      <el-row type="flex" align="middle">
        <el-col :span="8">
          <div>
            <img
              src="../../assets/微信图片_20230206145629.jpg"
              alt=""
              style="width: 100%"
            />
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
            <h1 style="font-size: 3vw; margin: 10px 0px; color: #002fa7">
              为什么使用这个头像？
            </h1>
            <h1 style="font-size: 2vw">Logo information</h1>
            <p class="myWebIntrooduce">
              灵感来自村上春树的《ノルウェイの森》(挪威的森林),第九章
            </p>
            <p class="myWebIntrooduce">绿子向渡边彻表达自己爱意的时候说：</p>
            <p class="myWebIntrooduce" style="color: #22c358">
              "私はあなたが好きで，春の熊が好きなように"
            </p>
            <p class="myWebIntrooduce">"最最喜欢你了，像喜欢春天的熊一样"</p>
            <p class="myWebIntrooduceEnglish">
              "I am fond of you, much like a bear in spring"
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
        style="margin-top: 30px"
        :gutter="30"
      >
        <el-col :span="7">
          <img
            src="../../assets/dc7b9bab75eb5c1347536417d7b5a5e.jpg"
            alt=""
            style="width: 100%; height: 75%"
          />
          <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">CAMERA</h5>
          <h3>华南农业大学的牛牛</h3>
          <h5>_______</h5>
          <h5 style="font-style: italic; margin-top: 10px">by Web</h5>
        </el-col>
        <el-col :span="7">
          <img
            src="../../assets/6fb5314fa7ab822b04926d3d03a01e8.jpg"
            alt=""
            style="width: 100%; height: 75%"
          />
          <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">PEOPLE</h5>
          <a
            href="https://space.bilibili.com/375065148?spm_id_from=333.337.0.0"
            style="color: black; text-decoration: none"
          >
            <h3>
              B站up:虞兮西西
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
              </svg>
            </h3>
          </a>

          <h5>_______</h5>
          <h5 style="font-style: italic; margin-top: 10px">by Bilibili</h5>
        </el-col>
        <el-col :span="7">
          <img
            src="../../assets/f1affa5852406db49844164e1d1381d.jpg"
            alt=""
            style="width: 100%; height: 75%"
          />
          <h5 style="margin: 10px 0px; color: rgb(59, 59, 59)">PEOPLE</h5>
          <h3>很cool的车车</h3>
          <h5>_______</h5>
          <h5 style="font-style: italic; margin-top: 10px">by NoName</h5>
        </el-col>
      </el-row>
    </div>
    <!-- 轮播图 -->
    <div style="margin-bottom: 20px">
      <el-row style="margin-top: 30px">
        <el-col :span="24">
          <div
            style="height: 20px; width: 100%; background-color: #f2f2f2"
          ></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-carousel :interval="4000" height="70vh">
            <!-- 大海 -->
            <el-carousel-item style="background-color: white">
              <el-row style="height: 70vh">
                <el-col :span="18">
                  <img
                    src="@/assets/imgs/woter.jpg"
                    alt=""
                    style="height: 100%; width: 100%"
                  />
                </el-col>
                <el-col
                  :span="6"
                  style="display: flex; align-items: center; height: 100%"
                >
                  <div
                    style="
                      width: 200%;
                      background-color: white;
                      height: 300px;
                      margin-left: -90%;
                      padding: 20px 20px;
                    "
                  >
                    <p class="myPome">
                      今天，是和你的第一次约会，为了这次相聚，我精心打扮了自己
                    </p>
                    <p class="myPome">可真正站在你的面前，我却像个傻孩子</p>
                    <p class="myPome">
                      笨拙地感受着你温柔的波涛，局促地抚摸着你水粼的肌肤，懵懂地亲吻着你的秀发
                    </p>
                    <p class="myPome">
                      来自大山的我用贪婪地眼光看着你，生怕漏掉了哪怕一丝美丽
                    </p>
                    <p class="myPome">
                      这一刻的我，只想躺在你的温柔乡里，安静地听你诉说那蓝色夜晚的回忆
                    </p>
                    <p class="myPome">
                      亲爱的姑娘啊，毕竟这<span style="color: #002fa7"
                        >1642</span
                      >公里，我走了整整<span style="color: #002fa7">24</span>年
                    </p>
                    <p class="myPome">--------------写给那位名为海的姑娘</p>
                    <p style="font-family: 'old'; font-size: medium">
                      写于贰零贰贰年捌月贰拾玖日
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
            <!-- 小王子 -->
            <el-carousel-item style="background-color: white">
              <el-row style="height: 70vh">
                <el-col :span="18">
                  <img
                    src="@/assets/imgs/小王子.jpg"
                    alt=""
                    style="height: 100%; width: 100%"
                  />
                </el-col>
                <el-col
                  :span="6"
                  style="display: flex; align-items: center; height: 100%"
                >
                  <div
                    style="
                      width: 200%;
                      background-color: white;
                      height: 300px;
                      margin-left: -90%;
                      padding: 20px 20px;
                    "
                  >
                    <p class="myPome">
                      也许世界上也有五千朵和你一模一样的花，但只有你是我独一无二的玫瑰
                    </p>
                    <p class="myPome">
                      小王子遇到一座玫瑰花园，里面生长着成千上万朵玫瑰花，他才知道他的玫瑰花并不是唯一的，于是他伤心地哭了
                    </p>
                    <p class="myPome">
                      这时狐狸告诉他一个有关“驯服”的哲理：对我来说，你还只是一个小男孩，就像其他千万个小男孩一样。我不需要你。你也同样用不着我
                    </p>
                    <p class="myPome">
                      对你来说，我也不过是一只狐狸，和其他千万只狐狸一样。但是，如果你驯服了我，我们就互相不可缺少了
                    </p>
                    <p class="myPome">
                      对我来说，你就是世界上唯一的了；我对你来说，也是世界上唯一的了
                    </p>
                    <p class="myPome" style="color: #d87a85">
                      正因为你为你的玫瑰花费了时间，这才使你的玫瑰变得如此重要
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
            <!-- 树叶 -->
            <el-carousel-item style="background-color: white">
              <el-row style="height: 70vh">
                <el-col :span="18">
                  <img
                    src="@/assets/imgs/green.jpg"
                    alt=""
                    style="height: 100%; width: 100%"
                  />
                </el-col>
                <el-col
                  :span="6"
                  style="display: flex; align-items: center; height: 100%"
                >
                  <div
                    style="
                      width: 200%;
                      background-color: white;
                      height: 300px;
                      margin-left: -90%;
                      padding: 20px 20px;
                      display: flex;
                      flex-wrap: wrap;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <p class="myPome">
                      当春天的微风轻抚绿叶， 那是大地复苏的季节。
                      翠绿的叶片闪烁着希望， 生命的奇迹在每一片中演绎。
                    </p>
                    <p class="myPome">
                      夏日的阳光洒在叶面， 绿叶似火热情洋溢。
                      在树荫下，清凉一片， 绿叶是大自然的庇护。
                    </p>
                    <p class="myPome">
                      秋风吹来，叶片纷纷坠落， 色彩斑斓如梦中画。
                      枫叶红艳，橙黄交错， 绿叶告别，展示新的风采。
                    </p>
                    <p class="myPome">
                      冬季的寒冷，叶片干枯， 但绿叶的精神永不凋谢。
                      它们沐浴阳光、吸收雨露， 等待春回大地再次焕发生机。
                    </p>
                    <p class="myPome">
                      绿叶是大自然的诗篇， 诉说着岁月的变迁。 无论四季如何更迭，
                      绿叶永远是生命的旋律。
                    </p>
                    <p class="myPome" style="color: #22c358">
                      作者：人工智能
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
            <!-- 铃芽 -->
            <el-carousel-item style="background-color: white">
              <el-row style="height: 70vh">
                <el-col :span="18">
                  <img
                    src="@/assets/imgs/铃芽.jpg"
                    alt=""
                    style="height: 100%; width: 100%"
                  />
                </el-col>
                <el-col
                  :span="6"
                  style="display: flex; align-items: center; height: 100%"
                >
                  <div
                    style="
                      width: 200%;
                      background-color: white;
                      height: 300px;
                      margin-left: -90%;
                      padding: 20px 20px;
                      display: flex;
                      flex-wrap: wrap;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <p class="myPome" style="color: #002fa7">
                        すずめの戸締まり（铃芽户缔）这部电影今天看完了，这又是一部新海诚的“灾难片”
                    </p>
                    <p class="myPome">
                      画面还是那么精美漂亮，人物塑造方面也中规中矩，虽然没有初见《君名》那样惊艳，也没有《秒五》那样刻苦铭心，我仍然觉得这是一部好作品
                    </p>
                    <p class="myPome">
                     这次看完，没有以前那种怅然若失的感觉，因为以前看完新海诚的作品，总会不由自主感叹一句：“咱们何时才能做出这样的动画啊”。可这次没有，因为在画面张力上咱们有了《深海》，在故事和人物塑造上咱们有了《魔童》
                    </p>
                    <p class="myPome">
                        铃芽究竟在寻找什么呢？虽然看到一半就知道故事的大致走向，可有一点还是不太明白，那只猫咪“大臣”，真的就只是一块用于镇压的“要石”吗？观影过程中我一直猜测猫咪其实是铃芽的妈妈，妈妈是因为镇压地龙而成为“要石”……
                    </p>
                    <p class="myPome">
                    可惜新海诚最终也没有解释“大臣”，也没有花费篇幅去解释铃芽妈妈遭遇的海啸，也算是给观众留下了想象的空间吧。
                    </p>
                    <p class="myPome" >
                        写于2023年9月3日晚
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import mylottie from "./mylottie";
import catlottie from "./catlottie";
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  name: "home",
  components: {
    mylottie,
    catlottie,
  },
};
</script>

<style scoped>
h1 {
  font-weight: bolder;
  font-family: "阿里妈妈灵动体 VF Thin";
}

h4 {
  margin-top: 10px;
}

.myWelcome {
  background: linear-gradient(30deg, #22c358, #002fa7);
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

p {
  margin: 10px 0px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.myPome {
  font-family: "old";
  font-size: large;
  margin: 5px;
}
</style>