<template>
  <div class="posts-expand">
    <div class="post-block page">
      <header class="post-header">
        <h2 class="post-title" itemprop="name headline">标签页</h2>
      </header>

      <div class="post-body">
        <div class="category-all-page">
          <div class="category-all-title">目前共计 {{list.length}} 个标签</div>
          <div class="category-all">
            <ul class="category-list">
              <li class="category-list-item" v-for="tag in list" :key="tag._id">
                <nuxt-link class="category-list-link" :to="{path:`/categories/${tag._id}`}">{{tag.name}}</nuxt-link>
                <span class="category-list-count">（1）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { getTagList } from "~/api/tag";

export default {
   data() {
    return {
      list: []
    };
  },
  created() {},
  mounted() {
    getTagList()
      .then(res => {
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>
 
<style lang="scss" scoped>
@import "~/assets/css/theme.scss";
.posts-expand {
  padding-top: 40px;
  .post-title {
    text-align: center;
    word-break: break-word;
    font-weight: 400;
  }
  .post-body {
    text-align: justify;
    .category-all-page {
      .category-all {
        margin-top: 20px;
      }
      .category-all-title {
        text-align: center;
      }
      .category-list {
        margin: 0;
        padding: 0;
        list-style: none;
        .category-list-item {
          margin: 5px 10px;
          .category-list-link {
            color: $theme-color;
            text-decoration: none;
            outline: none;
            border-bottom: 1px solid $theme-color;
            word-wrap: break-word;
          }
          .category-list-count {
            color: #bbb;
          }
        }
      }
    }
  }
}
</style>