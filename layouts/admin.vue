<template>
  <div class="default">
    <div class="headband"></div>
    <div class="content">
      <div class="left">
        <div class="header-inner">
          <div class="site-brand-wrapper">
            <div class="site-meta">
              <div class="site-title">
                <a href="/" class="brand" rel="start">后台管理</a>
              </div>
              <h1 class="site-subtitle">zone_98f@qq.com</h1>
            </div>
          </div>

          <nav class="site-nav">
            <ul id="menu" class="menu">
              <li class="menu-item menu-item-active">
                <nuxt-link to="/admin">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconzhuye" />
                  </svg>&nbsp;&nbsp;写文章
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-categories">
                <nuxt-link to="/categories">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconlabel" />
                  </svg>&nbsp;&nbsp;标签管理
                </nuxt-link>
              </li>

              <li class="menu-item menu-item-archives">
                <nuxt-link to="/archives">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguidang" />
                  </svg>&nbsp;&nbsp;文章管理
                </nuxt-link>
              </li>

              <!-- <li class="menu-item menu-item-about">
                <nuxt-link to="/about">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanyu" />
                  </svg>&nbsp;&nbsp;关于博客
                </nuxt-link>
              </li> -->

              <li class="menu-item menu-item-active">
                <nuxt-link to="/" no-prefetch>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconzhuye" />
                  </svg>&nbsp;&nbsp;前台首页
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="right">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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