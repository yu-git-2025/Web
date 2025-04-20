<script setup>
    import { useRoute } from 'vue-router'
    import { ref ,watch ,onMounted} from 'vue'

    const route=useRoute();
    const type = ref(route.params.type)
    const dataList = ref([])

    onMounted(()=>{
        switch(type.value){
            case 'ai':
                dataList.value = aiList
                break
            case 'education':
                dataList.value = educationList
                break
            case 'web':
                dataList.value = webList
                break
            case 'other':
                dataList.value = otherList
                break
            default:
                dataList.value = ''
        }
    })

    watch(()=>route.params.type,(newType)=>{
        type.value = newType

        switch(newType){
            case 'ai':
                dataList.value = aiList
                break
            case 'education':
                dataList.value = educationList
                break
            case 'web':
                dataList.value = webList
                break
            case 'other':
                dataList.value = otherList
                break
            default:
                dataList.value = ''
        }
    })

    const handleClick = (url) => {
        window.open(
            url,
            "_blank",       // 在新标签页打开
            "noopener,noreferrer" // 安全特性，防止恶意跳转
        )
    }

    const aiList=[
        {
            id: 1,
            name: 'DeepSeek',
            url: 'https://chat.deepseek.com',
            img:'https://chat.deepseek.com/favicon.svg'
        },
        {
            id: 2,
            name: '智谱清言',
            url: 'https://chatglm.cn',
            img:'https://chatglm.cn/favicon.ico'
        },
        {
            id: 3,
            name: '文心一言',
            url: 'https://yiyan.baidu.com',
            img:'https://yiyan.baidu.com/favicon.ico'
        },
        {
            id: 4,
            name: '同义千问',
            url: 'https://tongyi.aliyun.com'
            ,
            img:'https://tongyi.aliyun.com/favicon.ico'
        },
        {
            id: 5,
            name: '豆包',
            url: 'https://www.doubao.com',
            img:'https://www.doubao.com/favicon.ico'
        },
        {
            id: 6,
            name: '讯飞星火',
            url: 'https://xinghuo.xfyun.cn',
            img:'https://xinghuo.xfyun.cn/favicon.ico'
        },
        {
            id: 7,
            name: '天工',
            url: 'https://www.tiangong.cn',
            img:'https://www.tiangong.cn/favicon.ico'
        },
        
    ]

    const educationList = [
        {
            id: 1,
            name: '超星学习通',
            url: 'https://i.mooc.chaoxing.com',
            img:'//edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100'
        },
        {
            id: 2,
            name: 'PTA',
            url: 'https://pintia.cn',
            img:'https://static.pintia.cn/sparkling-daydream/icons/default/favicon.ico'
        },
        {
            id: 3,
            name: '中国大学MOOC',
            url: 'https://www.icourse163.org',
            img:'//edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100'
        }
        ,
        {
            id: 4,
            name: 'U校园AI版',
            url: 'https://sso.unipus.cn',
            img:'https://edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100'
        },
        {
            id: 5,
            name: '云班课',
            url: 'https://www.mosoteach.cn',
            img:'https://www.mosoteach.cn/'
        },
    ]

    const webList = [
        {
            id: 1,
            name: 'MDN',
            url: 'https://developer.mozilla.org',
            img:'https://developer.mozilla.org/favicon.ico'
        },
        {
            id: 2,
            name: 'Vue',
            url: 'https://cn.vuejs.org',
            img:'https://cn.vuejs.org/favicon.ico'
        },
        {
            id: 3,
            name: 'React',
            url: 'https://react.docschina.org',
            img:'https://react.docschina.org/favicon.ico'
        },
        {
            id: 4,
            name: 'Vite',
            url: 'https://cn.vitejs.dev',
            img:'https://cn.vitejs.dev/favicon.ico'
        },
        {
            id: 5,
            name: 'Element Plus',
            url: 'https://element-plus.org',
            img:'https://element-plus.org/favicon.ico'
        },
        {
            id: 6,
            name: 'Ant Design',
            url: 'https://ant.design',
            img:'https://ant.design/favicon.ico'
        },
        {
            id: 7,
            name: 'Ant Design Pro',
            url: 'https://pro.antdv.com',
            img:'https://pro.antdv.com/favicon.ico'
        },
        {
            id: 8,
            name: 'Vant',
            url: 'https://develop365.gitlab.io',
            img:'https://develop365.gitlab.io/favicon.ico'
        },
        {
            id: 9,
            name: 'Apache Echarts',
            url: 'https://echarts.apache.org/',
            img:'https://echarts.apache.org/favicon.ico'
        },
        {
            id: 10,
            name: 'Redis',
            url: 'https://www.redis.net.cn',
            img:'https://www.redis.net.cn/favicon.ico'
        },
        {
            id: 11,
            name: 'uni-app',
            url: 'https://zh.uniapp.dcloud.io/',
            img:'https://zh.uniapp.dcloud.io/favicon.ico'
        },
        {
            id: 12,
            name: 'cron表达式生成器',
            url: 'https://cron.qqe2.com/',
            img:'https://vitepress.dev/favicon.ico'
        },
        {
            id: 13,
            name: 'nginx',
            url: 'https://nginx.org',
            img:'https://nginx.org/favicon.ico'
        },
        
    ]
        
    const otherList = [
        {
            id: 1,
            name: 'GitHub',
            url: 'https://github.com',
            img:'https://github.githubassets.com/favicons/favicon.png'
        },
        {
            id: 2,
            name: 'Gitee',
            url: 'https://gitee.com',
            img:'https://gitee.com/favicon.ico'
        },
        {
            id: 3,
            name: 'CSDN',
            url: 'https://www.csdn.net',
            img:'https://www.csdn.net/favicon.ico'
        },
        
    ]
  
</script>

<template>
    <el-space wrap size="small" class="el-space-card">
        <el-card v-for="item in dataList" shadow="hover" class="el-card-item" body-style="padding: 15px 20px" body-class="el-card-body" @click="handleClick(item.url)">
            <!-- <img :src="item.img" style="width: 30%;"/> -->
            <div class="el-card-name">{{item.name}}</div>
        </el-card>

    </el-space>

</template>

<style scoped>
    .el-space-card{
        /* border : 2px solid #2554c1; */
    }

    .el-card-item{
        border-radius: 10px;
    }

    .el-card-item:hover{
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        background-color: #518afc;
        color: #fff;
        transition: all 0.4s ease-in-out;
    }

    .el-card-body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .el-card-name{
        font-size: 18px;
        cursor: default; 
        caret-color: transparent;   /* 隐藏光标 */
    }

</style>
