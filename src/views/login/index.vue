<template>
  <div class="test">
    <el-scrollbar class="box">
      <div class="child">
        123
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .test{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
      width: 200px;
      height: 300px;
      background-color: #ccc;
      // overflow-x: auto;
      // overflow-y: auto;
      .child{
        width: 100%;
        height: 600px;
        background-color: aqua;
      }
    }
  }
</style>

// <style lang="scss">
//   .el-scrollbar .el-scrollbar__wrap{
//     overflow-x: hidden;
//   }
//   .is-horizontal{
//     display: none;
//   }
// </style>
