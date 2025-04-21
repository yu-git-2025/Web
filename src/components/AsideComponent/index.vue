<script setup>
  
</script>
  
<template>
    <el-menu default-active="/ai" class="el-menu-vertical" router>
      <el-menu-item index="/ai">
        <template #title>AI工具</template>
      </el-menu-item>
      <el-menu-item index="/education">
        <template #title>大学工具</template>
      </el-menu-item>
      <el-menu-item index="/web">
        <template #title>web开发</template>
      </el-menu-item>
      <el-menu-item index="/other">
        <template #title>其他</template>
      </el-menu-item>
    </el-menu>
  </template>

<style scoped>
    .el-menu-vertical {
        /* width: 200px; */
        height: 100%;
        --el-menu-bg-color: var(--el-color-info-light-9);
    }
    .el-menu-vertical .el-menu-item {
        --el-menu-text-color: #000;
        --el-menu-active-color: #1285ff;
        --el-menu-item-font-size: 16px;

    }
    .el-menu-vertical .el-menu-item:hover {
        /* --el-menu-active-color: #fcbc0e; */
        /* --el-menu-text-color: #79e522; */
        background-color: var(--el-color-primary-light-7);
        transform: scale(1.08);
    }

</style>
