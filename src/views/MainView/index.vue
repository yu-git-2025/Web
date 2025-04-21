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
            img:'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico'
        },
        {
            id: 4,
            name: '同义千问',
            url: 'https://tongyi.aliyun.com'
            ,
            img:'https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png'
        },
        {
            id: 5,
            name: '豆包',
            url: 'https://www.doubao.com',
            img:'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo_new.png'
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
            img:'https://static.tiangong.cn/template/image/tg_logo.png'
        },
        
    ]

    const educationList = [
        {
            id: 1,
            name: '超星学习通',
            url: 'https://i.mooc.chaoxing.com',
            img:'https://mooc1.chaoxing.com/favicon.ico'
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
            img:'https://edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100'
        }
        ,
        {
            id: 4,
            name: 'U校园AI版',
            url: 'https://sso.unipus.cn',
            img:'https://sso.unipus.cn/favicon.ico'
        },
        {
            id: 5,
            name: '云班课',
            url: 'https://www.mosoteach.cn',
            img:'https://www.mosoteach.cn/favicon.ico'
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
            img:'https://vuejs.org/images/logo.png'
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
            img:'https://cn.vitejs.dev/logo.svg'
        },
        {
            id: 5,
            name: 'Element Plus',
            url: 'https://element-plus.org',
            img:'https://element-plus.org/images/element-plus-logo-small.svg'
        },
        {
            id: 6,
            name: 'Ant Design',
            url: 'https://ant.design',
            img:'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'
        },
        {
            id: 7,
            name: 'Ant Design Pro',
            url: 'https://pro.antdv.com',
            img:'https://pro.antdv.com/logo.png'
        },
        {
            id: 8,
            name: 'Vant',
            url: 'https://develop365.gitlab.io/vant/zh-CN/home/',
            img:'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png'
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
            img:'https://www.redis.net.cn/Application/Home/View/Public/img/icon.png'
        },
        {
            id: 11,
            name: 'uni-app',
            url: 'https://zh.uniapp.dcloud.io/',
            img:'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788'
        },
        {
            id: 12,
            name: 'cron表达式生成器',
            url: 'https://cron.qqe2.com/',
            img:'https://qqe2.com/favicon.ico'
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
        {
            id: 4,
            name: 'Favicon生成工具',
            url: 'https://realfavicongenerator.net/',
            img:'https://realfavicongenerator.net/assets/images/logo.png'
        },
        
    ]
  
</script>

<template>
    <el-space wrap size="small" class="el-space-card">
        <el-card v-for="item in dataList" shadow="hover" class="el-card-item" 
        body-style="padding: 15px 20px;display: flex;align-items: center;text-align: center;"
         @click="handleClick(item.url)">
            <img :src="item.img" style="width: 18px;"/>
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
        background-color: #e1e1e1;

    }

    .el-card-item:hover{
        transform: translateY(-5px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        background-color: #518afc;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }


    .el-card-name{
        margin-left: 10px;
        font-size: 18px;
        cursor: default; 
        caret-color: transparent;   /* 隐藏光标 */
    }

</style>
