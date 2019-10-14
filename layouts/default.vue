<template>
  <div class="default">
    <div class="headband"></div>
    <div class="content">
      <div class="left">
        <div class="header-inner">
          <div class="site-brand-wrapper">
            <div class="site-meta">
              <div class="site-title">
                <a href="/" class="brand" rel="start">zone98f's Blogs</a>
              </div>
              <h1 class="site-subtitle">zone_98f@qq.com</h1>
            </div>
          </div>

          <nav class="site-nav">
            <ul id="menu" class="menu">
              <li class="menu-item menu-item-active">
                <nuxt-link to="/">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconzhuye" />
                  </svg>&nbsp;&nbsp;我的主页
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-categories">
                <nuxt-link to="/categories">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconlabel" />
                  </svg>&nbsp;&nbsp;标签分类
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-archives">
                <nuxt-link to="/archives">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguidang" />
                  </svg>&nbsp;&nbsp;博客归档
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-about">
                <nuxt-link to="/about">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanyu" />
                  </svg>&nbsp;&nbsp;关于博客
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-active">
                <nuxt-link to="/admin" no-prefetch>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconzhuye" />
                  </svg>&nbsp;&nbsp;后台首页
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="sidebar-inner">
          <div class="site-overview">
            <img class="site-author-image" src="/uploads/avatar.png" alt="Baldwin" />
            <p class="site-author-name">Baldwin</p>
            <p class="site-description motion-element"></p>
            <nav class="site-state motion-element">
              <div class="site-state-item site-state-posts">
                <nuxt-link to="/archives">
                  <span class="site-state-item-count">20</span>
                  <span class="site-state-item-name">日志</span>
                </nuxt-link>
              </div>

              <div class="site-state-item site-state-tags">
                <nuxt-link to="/categories">
                  <span class="site-state-item-count">9</span>
                  <span class="site-state-item-name">标签</span>
                </nuxt-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="right">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/css/theme.scss";
.default {
  .headband {
    height: 3px;
    background: #222;
    // background: $theme-color;
  }
  .content {
    display: flex;
    .left {
      padding-left: 200px;
      .header-inner {
        background: #fff;
        width: 240px;
        .site-meta {
          text-align: center;
          padding: 20px 0;
          color: #fff;
          background: #222;
          .site-title {
            line-height: 36px;
            font-size: 20px;
            font-weight: normal;
            .brand {
              color: #fff;
            }
          }
          .site-subtitle {
            font-size: 13px;
            color: #ddd;
          }
        }
        .site-nav {
          .menu {
            margin: 0px;
            padding: 20px 0;
            padding-left: 0;
            text-align: center;
            .menu-item {
              display: block;
              margin: 0;
              a {
                display: block;
                font-size: 13px;
                position: relative;
                box-sizing: border-box;
                padding: 10px 20px;
                text-align: left;
                line-height: inherit;
                transition-property: background-color;
                transition-duration: 0.2s;
                transition-timing-function: ease-in-out;
                transition-delay: 0s;
              }
              a:hover {
                background: #f9f9f9;
                border-bottom-color: #fff;
              }
            }
            //NUXT匹配路由样式
            .nuxt-link-exact-active {
              color: $theme-color;
              background: #f9f9f9;
              border-bottom-color: #fff;
            }
            a.nuxt-link-exact-active:after {
              content: " ";
              position: absolute;
              top: 50%;
              margin-top: -3px;
              right: 15px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #bbb;
            }
          }
        }
      }
      .sidebar-inner {
        box-sizing: border-box;
        width: 240px;
        position: relative;
        padding: 20px 10px;
        margin-top: 10px;
        color: #555;
        text-align: center;
        background: #fff;
        box-shadow: initial;
        border-radius: initial;
        .site-overview {
          text-align: center;
          .site-author-image {
            display: block;
            margin: 0 auto;
            padding: 2px;
            width: 120px;
            height: 120px;
            // height: auto;
            border: 1px solid #eee;
          }
          p.site-author-name {
            margin: 0;
            text-align: center;
            color: #222;
            font-weight: 600;
          }
          .site-state {
            overflow: hidden;
            line-height: 1.4;
            white-space: nowrap;
            text-align: center;
            .site-state-item {
              display: inline-block;
              padding: 0 15px;
              border-left: 1px solid #eee;
            }
            .site-state-item:first-child {
              border-left: none;
            }
            .site-state-item a {
              border-bottom: none;
            }
            .site-state-item-count {
              display: block;
              text-align: center;
              color: inherit;
              font-weight: 600;
              font-size: 16px;
            }
            .site-state-item-name {
              font-size: 13px;
              color: #999;
            }
          }
        }
      }
      .sidebar-inner.fixed-top {
        position: fixed;
        top: 12px;
      }
    }
    .right {
      margin-left: 20px;
      box-sizing: border-box;
      padding: 40px;
      width: 700px;
      display: block;
      background: #fff;
      min-height: 700px;
      box-shadow: initial;
      border-radius: initial;
    }
  }
}
</style>
<script>
export default {};
</script>