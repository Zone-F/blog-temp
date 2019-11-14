<template>
  <article class="post post-type-categories">
    <div class="post-block">
      <header class="post-header">
        <h2 class="post-title">{{article.title}}</h2>
        <div class="post-meta">
          <span class="post-time">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshijian1" />
            </svg>
            <span class="post-meta-item-text">发表于</span>
            <time>{{article.createTime}}</time>
          </span>
          <span class="leancloud_visitors">
            <span class="post-meta-divider">|</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconyueduliang" />
            </svg>

            <span class="post-meta-item-text">阅读次数:</span>

            <span class="leancloud-visitors-count">暂无统计</span>
          </span>
        </div>
      </header>

      <div class="post-body" v-html="article.body"></div>
    </div>
  </article>
</template>
<script>
import { getArticle } from "~/api/article";
let moment = require("moment");

export default {
  validate({ params, query }) {
    // 必须含有id
    return params.id;
  },
  data(){
    return{
      article:{},
      tags:[]
    }
  },
  mounted() {
    getArticle({ id: this.$route.params.id })
      .then(res => {
        res.data[0].createTime = moment(res.data[0].createTime).format("YYYY-MM-DD")
        this.article = res.data[0]
        this.tags = res.tags
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.post-header {
  text-align: center;
}
.post-body {
  margin-top: 40px;
}
</style>