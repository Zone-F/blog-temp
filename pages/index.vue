<template>
  <div id="content" class="index">
    <section id="posts" class="posts-expand">
      <template v-for="article in list">
        <article class="post" :key="article._id">
          <header class="post-header">
            <h2 class="post-title">
              <nuxt-link class="post-title-link" :to="'/article/'+ article._id">{{article.title}}</nuxt-link>
            </h2>

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
          <div class="post-body">
            {{article.body.replace(/<[^>]+>/g,"")}}
            <div class="post-button text-center">
              <nuxt-link class="btn" :to="'/article/'+ article._id">阅读全文 »</nuxt-link>
            </div>
          </div>
          <footer class="post-footer">
            <div class="post-eof"></div>
          </footer>
        </article>
      </template>
    </section>
    <div class="page-block">
      <el-pagination
        layout="prev, pager, next"
        :total="page.total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/css/theme.scss";
.index {
  .posts-expand {
    padding-top: 40px;
    width: 100%;
    text-align: center;
    .post-title {
      word-break: break-word;
      font-weight: 400;
      font-size: 18px;
      .post-title-link {
        display: inline-block;
        position: relative;
        color: #555;
        border-bottom: none;
        line-height: 1.2;
        vertical-align: top;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $theme-color;
          visibility: hidden;
          transform: scaleX(0);
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          transition-delay: 0s;
        }
        &:hover::before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          -moz-transform: scaleX(1);
          -ms-transform: scaleX(1);
          -o-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
    .post-meta {
      margin: 3px 0 60px 0;
      color: #999;
      font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 12px;
      text-align: center;
      .post-meta-item-text {
        margin-left: 3px;
      }
      .post-category,
      .post-time {
        margin-right: 3px;
      }
    }
    .post-body {
      text-align: justify;
      .post-button {
        margin-top: 40px;
        text-align: center;
        .btn {
          display: inline-block;
          padding: 0 20px;
          font-size: 14px;
          color: #555;
          background: #fff;
          border: 2px solid #555;
          text-decoration: none;
          border-radius: 2px;
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          transition-delay: 0s;
          line-height: 2;
        }
        .btn:hover {
          border-color: $theme-color;
          color: $theme-color;
          // background: $theme-color;
        }
      }
    }
    .post-eof {
      display: block;
      margin: 80px auto 60px;
      width: 8%;
      height: 1px;
      background: #ccc;
      text-align: center;
    }
  }
  .page-block {
    text-align: center;
  }
  .el-pager li.active {
    color: $theme-color;
    cursor: default;
  }
  .el-pager li:hover {
    color: $theme-color;
  }
}
</style>

<script>
import { getArticleList } from "~/api/article";
let moment = require("moment");
export default {
  name:"index",
  data() {
    return {
      list: [],
      page: {
        current: 1,
        total: 10
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    handleCurrentChange(val) {
      this.init(val);
    },
    init(pageNum = 1, pageSize = 10) {
      getArticleList({ pageNum, pageSize })
        .then(res => {
          let list = res.data.map(item => {
            item.createTime = moment(item.createTime).format("YYYY-MM-DD");
            return item;
          });
          this.list = list;
          this.page.total = res.total;
          this.page.current = res.pageNum;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
};
</script>