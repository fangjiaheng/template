<template>
  <div class="navbar">
    <div class="hamburger-container" @click="handleClick">
      <!-- 这里也可以根据是否打开 然后翻转180deg -->
      <i :class="[opened ? 'el-icon-s-fold': 'el-icon-s-unfold']" />
    </div>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb'
import { mapState } from 'vuex'
export default {
  components: {
    Breadcrumb
  },
  computed: {
    ...mapState({
      opened: state => state.app.sidebar.opened
    })
  },
  methods: {
    handleClick() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container{
    float: left;
    height: 50px;
    width: 50px;
    line-height: 54px;
    text-align: center;
    cursor: pointer;
    transition: background .3s;
    &:hover{
      background: rgba(0, 0, 0, .03)
    }
    &:hover i{
      color: aqua;
      transition: color .3s;
    }
    i{
      font-size: 25px;
    }
  }
  .breadcrumb-container{
    float: left;
  }
  .right-menu{
    margin-right: 30px;
    float: right;
    height: 100%;
    line-height: 50px;
    .avatar-wrapper{
      margin-top: 5px;
      position: relative;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 15px;
      }
    }
  }
}
</style>
