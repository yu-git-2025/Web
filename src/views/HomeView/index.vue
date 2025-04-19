<script setup>

</script>

<template>
    <div class="common-layout">
      <el-container class="header-container-layout">
        <el-header class="header-layout">Header</el-header>
        <el-container class="main-container-layout">
          <el-aside width="200px" class="aside-layout">Aside</el-aside>
          <el-main class="main-layout">Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<style scoped>
    .common-layout {
        height: 100vh;
        box-sizing: border-box;
    }
    .header-container-layout {
        height: 100%;
    }
    .main-container-layout {
        height: calc(100% - 80px);
        border: 2px solid #000000;
    }
    .header-layout {
        height: 80px;
        background-color: #d4dce3;
    }
    .aside-layout {
        background-color: #2b8040;

    }
    .main-layout {
        background-color: #409EFF;

    }

</style>
