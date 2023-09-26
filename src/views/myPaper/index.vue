<template>
    <div style="margin: 30px;">
        <br>
        <bigDisplay :bigDisplayContent="bigDisplayContent"/>
    </div>
</template>

<script>
import bigDisplay from '../bigDisplay'
export default {
    name: 'myPaper',
    components: {
        bigDisplay
    },
    data() {
        return {
            bigDisplayContent: {
                topImgUrl: require("./imgs/泰戈尔.jpg"), //传递图像要使用require，直接传递字符串 行不通
                leftImgUrl: require("./imgs/飞鸟集.jpg"),
                midImgUrl: require("./imgs/吉.jpg"),
                rightImgUrl: require("@/assets/imgs/五所.jpg"),
                oneText: "拉比尼德拉纳特·泰戈尔",
                twoText: "Rabindranath Tagore",
                threeText: "印度著名的诗人、哲学家、音乐家和艺术家，被广泛认为是20世纪最伟大的文化巨匠之一",
                fourText:
                    "《飞鸟集》是我最喜欢的一本诗集，每一句诗都值得慢慢品味，所以到现在我都没有完整看完飞鸟集",
                fiveText:
                    "Where the mind is without fear and the head is held high,Where knowledge is free,Where the world has not been broken up into fragments,By narrow domestic walls.",
                sixText: "在那里，心灵无所畏惧，头脑高举，知识自由，世界未被分割成碎片，被狭窄的壁垒所隔绝。",
                sevenText:'Let my love, like sunlight, surround you and yet give you illumined freedom.',
                leftType: "BOOK",
                leftHead: "《飞鸟集》",
                leftAuthor: "by Tagore",
                midType: "BOOK",
                midHead: "《吉檀迦利》",
                midAuthor: "by Tagore",
                rightType: "BOOK",
                rightHead: "夕阳也下班",
                rightAuthor: "by Dawn",
                color: "#04333e",
                web: ""
            },
        }
    }
}
</script>

<style></style>