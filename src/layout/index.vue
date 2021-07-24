<template>
  <div :class="{ hideSidebar: isHide, mobile: isMobile, withoutAnimation }" class="app-wrapper">
    <div v-if="isMobile && !isHide" class="drawer_bg" />
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
export default {
  data() {
    return {
      isHide: false,
      isMobile: false,
      withoutAnimation: false
    }
  },
  watch: {
    isMobile(isMobile) {
      if (isMobile) {
        // 从电脑端变为手机端
        this.withoutAnimation = true
        this.isHide = true
      } else {
        // 从手机端变为电脑端
        this.withoutAnimation = true
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    this.isMobile = this.$_isMobile()
  },
  methods: {
    handleClick() {
      this.isHide = !this.isHide
      this.withoutAnimation = false
    },
    $_isMobile() {
      return document.body.getBoundingClientRect().width < 992
    },
    $_resizeHandler() {
      if (!document.hidden) {
        this.isMobile = this.$_isMobile()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $sideBarWidth: 210px;
  .app-wrapper{
    width: 100%;
    height: 100%;
    .sidebar-container{
      position: fixed;
      width: $sideBarWidth;
      height: 100%;
      background-color: greenyellow;
      transition: width .28s;
    }
    .main-container{
      margin-left: $sideBarWidth;
      transition: margin-left .28s;
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
      transition: transform .28s;
    }
    .main-container{
      margin-left: 0;
    }
  }
  .mobile.hideSidebar{
    .sidebar-container{
      transform: translateX(-$sideBarWidth);
    }
  }
  .withoutAnimation{
    .sidebar-container,
    .main-container{
      transition: none;
    }
  }

  .drawer_bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.25);
    pointer-events: none;
  }
</style>
