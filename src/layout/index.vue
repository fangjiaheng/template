<template>
  <div class="app-wrapper">
    <div class="sidebar">
      sidebar
    </div>
    <div class="main-cotainer">
      <div class="navbar">
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

}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    .sidebar{
      width: 210px;
      height: 100%;
      position: fixed;
      top: 0;
      z-index: 1001;
      overflow: hidden;
    }

    .main-cotainer{
      margin-left: 210px;
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
</style>
