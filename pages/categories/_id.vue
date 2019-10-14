<template>
  <div class="posts-collapse">
    <!-- {{$route.params.id}} -->
    <div class="collection-title">
      <h2 class="archive-year" id="archive-year-2019">2019</h2>
    </div>

    <article class="post post-type-categories" itemscope itemtype="http://schema.org/Article">
      <header class="post-header">
        <h3 class="post-title">
          <a class="post-title-link" href="/2019/03/05/standard/index/" itemprop="url">
            <span itemprop="name">前端开发规范手册（命名、HTML、CSS、JS、ES6、React）</span>
          </a>
        </h3>

        <div class="post-meta">
          <time
            class="post-time"
            itemprop="dateCreated"
            datetime="2019-03-05T16:55:00+08:00"
            content="2019-03-05"
          >03-05</time>
        </div>
      </header>
    </article>

    <article class="post post-type-categories" itemscope itemtype="http://schema.org/Article">
      <header class="post-header">
        <h3 class="post-title">
          <a class="post-title-link" href="/2019/03/05/others/books/" itemprop="url">
            <span itemprop="name">前端免费高清电子书(史上最全)</span>
          </a>
        </h3>

        <div class="post-meta">
          <time
            class="post-time"
            itemprop="dateCreated"
            datetime="2019-03-05T16:52:00+08:00"
            content="2019-03-05"
          >03-05</time>
        </div>
      </header>
    </article>

    <article class="post post-type-categories" >
      <header class="post-header">
        <h3 class="post-title">
          <a class="post-title-link" href="/2019/03/05/others/jenkins/" itemprop="url">
            <span itemprop="name">阿里云服务器（2、jenkins实现前端自动化部署）</span>
          </a>
        </h3>

        <div class="post-meta">
          <time
            class="post-time"
            itemprop="dateCreated"
            datetime="2019-03-05T16:51:00+08:00"
            content="2019-03-05"
          >03-05</time>
        </div>
      </header>
    </article>
  </div>
</template>
 
<script>
export default {
  components: {}
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