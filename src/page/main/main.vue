<template>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'paeony',
  data () {
    return {}
  }
}
</script>

<style>
  body {
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    width: 200px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: inherit;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    height: 100%;
  }
</style>
