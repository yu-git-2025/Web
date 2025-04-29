<script setup>
    import HeaderComponent from "@/components/HeaderComponent/index.vue";
    import AsideComponent from "@/components/AsideComponent/index.vue";
    import MainComponent from "@/components/MainComponent/index.vue";

</script>

<template>
    <div class="common-layout">
      <el-container class="header-container-layout">
        <el-header class="header-layout">
          <!-- 导航栏 -->
          <HeaderComponent></HeaderComponent>
        </el-header>
        <el-container class="main-container-layout">
            <!-- 侧边栏 -->
          <el-aside class="aside-layout">
            <AsideComponent></AsideComponent>
          </el-aside>
          <el-main class="main-layout">
            <!-- 主体内容 -->
            <MainComponent></MainComponent>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<style scoped>
    .common-layout {
        height: 100vh;
      }
      .header-container-layout {
        height: 100%;
        background-color: #f0f0f0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .main-container-layout {
        height: calc(100% - 110px);
    }
    .header-layout {
        height: 80px;

        margin: 10px 20px 10px 20px;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: #ffffff;

    }
    .aside-layout {
        min-width: 120px;
        max-width: 200px;
        width:20%;
        margin: 10px 10px 20px 20px;

    }
    .main-layout {
        background-color: #fff;
        margin: 10px 20px 20px 10px;
        padding: 0px;
        
    }

</style>
