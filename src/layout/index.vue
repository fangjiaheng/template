<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer_bg" />
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
import ResizeHandler from './mixin/ResizeHandler'

export default {
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
