<template>
  <div id="posts" class="posts-collapse">
    <span class="archive-move-on"></span>

    <span class="archive-page-counter">嗯..! 目前共计 {{total}} 篇日志。 继续努力。</span>
    <template v-for="(item,index) in list">
      <div class="collection-title" :key="item.id">
        <h2 class="archive-year" id="archive-year-2019">{{ index }}</h2>
      </div>
      <template v-for="article in item">
        <article class="post post-type-categories" :key="article.id">
          <header class="post-header">
            <h3 class="post-title">
              <nuxt-link class="post-title-link" :to="'/article/'+ article._id">
                <span itemprop="name">{{article.title}}</span>
              </nuxt-link>
            </h3>
            <div class="post-meta">
              <time
                class="post-time"
              >{{article.createTime.substring(5,10)}}</time>
            </div>
          </header>
        </article>
      </template>
    </template>
  </div>
</template>
 
<script>
import { getArticleList } from "~/api/article";
let moment = require("moment");
export default {
  data() {
    return {
      list: {},
      total: 0
    };
  },
  mounted() {
    getArticleList({ pageNum: 1, pageSize: 10000 })
      .then(res => {
        this.total = res.total;
        this.list = this.getShowList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getShowList(data) {
      let list = {};
      data.forEach(item => {
        item.createTime = moment(item.createTime).format("YYYY-MM-DD");
        let current = item.createTime.substring(0, 4);
        if (!list[current]) {
          list[current] = [];
        }
        list[current].push(item);
      });
      return list;
    }
  }
};
</script>
 
<style lang="scss" scoped>
.posts-collapse {
  position: relative;
  z-index: 1010;
  margin-left: 55px;
  &::after {
    content: " ";
    position: absolute;
    top: 20px;
    left: 0;
    margin-left: -2px;
    width: 4px;
    height: 100%;
    background: #f5f5f5;
    z-index: -1;
  }
  .archive-move-on {
    position: absolute;
    top: 11px;
    left: 0;
    margin-left: -6px;
    width: 10px;
    height: 10px;
    opacity: 0.5;
    background: #555;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .archive-page-counter {
    position: relative;
    top: 3px;
    left: 20px;
  }
  .collection-title {
    position: relative;
    margin: 60px 0;
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: -4px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      background: #bbb;
      border-radius: 50%;
    }
    h2 {
      margin-left: 20px;
    }
  }
  .post {
    margin: 30px 0;
    .post-header {
      position: relative;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      transition-property: border;
      border-bottom: 1px dashed #ccc;
      &:hover {
        border-bottom-color: #666;
      }
      &::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 12px;
        width: 6px;
        height: 6px;
        margin-left: -4px;
        background: #bbb;
        border-radius: 50%;
        border: 1px solid #fff;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        transition-property: background;
      }
      &:hover::before {
        background: #222;
      }
      .post-title {
        margin-left: 60px;
        font-size: 16px;
        font-weight: normal;
        line-height: inherit;
        a {
          color: #666;
          border-bottom: none;
        }
      }
      .post-meta {
        position: absolute;
        font-size: 12px;
        left: 20px;
        top: 5px;
      }
    }
  }
}
</style>