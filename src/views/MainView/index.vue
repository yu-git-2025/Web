<script setup>
    import { useRoute } from 'vue-router'
    import { ref ,watch} from 'vue'

    const route=useRoute();
    const type = ref(route.params.type)

    watch(()=>route.params.type,(newType)=>{
    type.value = newType
    })
  
</script>

<template>
    <div v-if="'web'===type">1231221</div>
    54235435

</template>

<style scoped>

</style>
