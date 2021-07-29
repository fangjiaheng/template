<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :collapse="isCollapse" :collapse-transition="false">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" />
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="1-1">
            <i class="el-icon-setting" />
            <span slot="title">选项1</span>
          </el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document" />
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState({
      isCollapse: state => !state.app.sidebar.opened,
      showLogo: state => state.settings.sidebarLogo
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

<!-- 滚动栏 el-scrollbar -->
<style lang="scss">
  .el-scrollbar{
    height: 100%;
  }
  .has-logo{
    .el-scrollbar{
      height: calc(100% - 50px);
    }
  }
  .scrollbar-wrapper{
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
</style>

<!-- el-menu -->
<style lang="scss">
  .el-menu{
    width: 100% !important;
    border-right: none !important;
  }
  .el-submenu__title{
    // padding-left: 15px !important;
  }
</style>
