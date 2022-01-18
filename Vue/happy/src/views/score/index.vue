<template>
  <div>
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{score}}</span><span class="fenshu">分!</span>
        <div class="result_tip">{{ scoreTip }}</div>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data () {
    return {
      bg: require("../../assets/images/4-1.jpg"),
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，旅梦欢迎你！",
      ],
      score: 0,
      scoreTip: ''
    }
  },
  computed: {
    ...mapState(['answerid', 'itemNum']), // 你选的
    ...mapGetters(['rightAnswer']) // 正确答案
  },
  created () {
    // 修改背景图
    document.body.style.backgroundImage = `url(${this.bg})`;

    this.computedScore()
    this.getScoreTip()
  },
  methods: {
    // 计算总分数
    computedScore () {
      let every = 100 / this.itemNum
      this.answerid.forEach((item, index) => {
        if (item === this.rightAnswer[index]) {
          this.score += every
        }
      })
    },
    // 根据分数来显示提示
    getScoreTip () {
      let every = 100 / this.itemNum
      let index = Math.ceil(this.score / every) - 1
      this.scoreTip = this.scoreTipsArr[index]
    }
  }
};
</script>

<style lang="less" scoped>
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../../assets/images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
    font-weight: 200;
  }
}
</style>