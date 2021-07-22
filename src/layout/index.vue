<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer_bg" @click="handleClickOutside" />
    <div class="sidebar-container">
      sidebar
    </div>
    <div class="main-container">
      <div class="navbar" @click="handleClick">
        navbar
      </div>
      <div class="appmain">
        appmain
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResizeMixin from './mixin/ResizeHandler.js'

export default {
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    },
    handleClickOutside() {
      this.$store.commit('app/CLOSE_SIDEBAR', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  $sideBarWidth: 210px;
  .app-wrapper{
    width: 100%;
    height: 100%;
    // 遮罩层
    .drawer_bg{
      background: #000;
      opacity: 0.3;
      width: 100%;
      top: 0;
      height: 100%;
      position: absolute;
    }
    .sidebar-container{
      position: fixed;
      top: 0;
      width: $sideBarWidth;
      height: 100%;
      background-color: greenyellow;
      transition: width .3s;
    }
    .main-container{
      margin-left: $sideBarWidth;
      transition: margin-left .3s;
      .navbar{
        height: 50px;
        background-color: aqua;
      }
      .appmain{
        min-height: calc(100vh - 50px);
        background-color: yellow;
      }
    }
  }
  .hideSidebar{
    .sidebar-container{
      width: 54px;
    }
    .main-container{
      margin-left: 54px;
    }
  }
  .mobile{
    .sidebar-container{
      width: $sideBarWidth;
      transition: transform .3s;
    }
    .main-container{
      margin-left: 0;
    }
  }
  // 类名中间没有空格, 表示两个类名同时存在的情况时
  .mobile.hideSidebar{
    .sidebar-container{
      transform: translateX(-$sideBarWidth);
    }
  }
  .withoutAnimation{
    .main-container,
    .sidebar-container{
      transition: none;
    }
  }
</style>
