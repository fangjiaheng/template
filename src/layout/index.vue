<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer_bg" />
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResizeHandler from './mixin/ResizeHandler'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar/index.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    Navbar
  },
  mixins: [ResizeHandler],
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
      overflow: hidden;
    }
    .main-container{
      margin-left: $sideBarWidth;
      transition: margin-left .28s;
      // .navbar{
      //   height: 50px;
      //   background-color: aqua;
      // }
      // .appmain{
      //   min-height: calc(100vh - 50px);
      //   background-color: yellow;
      // }
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
