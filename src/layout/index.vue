<template>
  <div :class="{ hideSidebar: isHide, mobile: isMobile }" class="app-wrapper">
    <div class="sidebar-container">
      sidebar
    </div>
    <div class="main-container">
      <div class="navbar" @click="isHide=!isHide">
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
      isMobile: false
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    this.isMobile = this.$_isMobile()
  },
  methods: {
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
</style>
