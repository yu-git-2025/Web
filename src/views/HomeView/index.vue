<script setup>
    import AsideComponent from "@/components/AsideComponent/index.vue";

</script>

<template>
    <div class="common-layout">
      <el-container class="header-container-layout">
        <el-header class="header-layout">网页导航</el-header>
        <el-container class="main-container-layout">
            <!-- 侧边栏 -->
          <el-aside width="200px" class="aside-layout">
            <AsideComponent></AsideComponent>
          </el-aside>
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
        border: 2px solid #ef3838;

    }
    .aside-layout {
        border: 2px solid #2704d3;

    }
    .main-layout {
        border: 2px solid #000000;

    }

</style>
