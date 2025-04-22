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
            img:'https://chat.deepseek.com/favicon.svg',
            description: 'DeepSeek是一个基于深度学习的搜索引擎，旨在帮助用户快速找到所需的信息'
        },
        {
            id: 2,
            name: '智谱清言',
            url: 'https://chatglm.cn',
            img:'https://chatglm.cn/favicon.ico',
            description: '智谱清言是一个基于自然语言处理的智能问答系统，旨在为用户提供快速准确的信息查询服务'
        },
        {
            id: 3,
            name: '文心一言',
            url: 'https://yiyan.baidu.com',
            img:'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
            description: '文心一言是百度推出的一个智能对话系统，旨在为用户提供自然流畅的对话体验'
        },
        {
            id: 4,
            name: '同义千问',
            url: 'https://tongyi.aliyun.com',
            img:'https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png',
            description: '同义千问是阿里巴巴推出的一个智能问答系统，旨在为用户提供快速准确的信息查询服务'
        },
        {
            id: 5,
            name: '豆包',
            url: 'https://www.doubao.com',
            img:'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo_new.png',
            description: '豆包是一个基于自然语言处理的智能问答系统，旨在为用户提供快速准确的信息查询服务'
        },
        {
            id: 6,
            name: '讯飞星火',
            url: 'https://xinghuo.xfyun.cn',
            img:'https://xinghuo.xfyun.cn/favicon.ico',
            description: '讯飞星火是科大讯飞推出的一个智能对话系统，旨在为用户提供自然流畅的对话体验'
        },
        {
            id: 7,
            name: '天工',
            url: 'https://www.tiangong.cn',
            img:'https://static.tiangong.cn/template/image/tg_logo.png',
            description: '天工是一个基于深度学习的搜索引擎，旨在帮助用户快速找到所需的信息'
        },
        
    ]

    const educationList = [
        {
            id: 1,
            name: '超星学习通',
            url: 'https://i.mooc.chaoxing.com',
            img:'https://mooc1.chaoxing.com/favicon.ico',
            description: '超星学习通是一个在线学习平台，提供丰富的课程资源和学习工具'
        },
        {
            id: 2,
            name: 'PTA',
            url: 'https://pintia.cn',
            img:'https://static.pintia.cn/sparkling-daydream/icons/default/favicon.ico',
            description: 'PTA是一个在线编程学习平台，提供丰富的编程题库和学习资源'
        },
        {
            id: 3,
            name: '中国大学MOOC',
            url: 'https://www.icourse163.org',
            img:'https://edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100',
            description: '中国大学MOOC是一个在线学习平台，提供丰富的课程资源和学习工具'
        }
        ,
        {
            id: 4,
            name: 'U校园AI版',
            url: 'https://sso.unipus.cn',
            img:'https://sso.unipus.cn/favicon.ico',
            description: 'U校园AI版是一个在线学习平台，提供丰富的课程资源和学习工具'
        },
        {
            id: 5,
            name: '云班课',
            url: 'https://www.mosoteach.cn',
            img:'https://www.mosoteach.cn/favicon.ico',
            description: '云班课是一个在线学习平台，提供丰富的课程资源和学习工具'
        },
    ]

    const webList = [
        {
            id: 1,
            name: 'MDN',
            url: 'https://developer.mozilla.org',
            img:'https://developer.mozilla.org/favicon.ico',
            description: 'MDN是一个Web开发者的学习和参考资源，提供丰富的文档和示例代码'
        },
        {
            id: 2,
            name: 'Vue',
            url: 'https://cn.vuejs.org',
            img:'https://vuejs.org/images/logo.png',
            description: 'Vue是一个渐进式JavaScript框架，用于快速构建用户界面,提供高效的组件化开发方式'
        },
        {
            id: 3,
            name: 'React',
            url: 'https://react.docschina.org',
            img:'https://react.docschina.org/favicon.ico',
            description: 'React是一个用于构建用户界面的JavaScript库，提供高效的组件化开发方式,支持单向数据流和虚拟DOM'
        },
        {
            id: 4,
            name: 'Vite',
            url: 'https://cn.vitejs.dev',
            img:'https://cn.vitejs.dev/logo.svg',
            description: 'Vite是一个快速的前端构建工具，提供快速的开发和构建体验,支持热模块替换和按需加载'
        },
        {
            id: 5,
            name: 'Element Plus',
            url: 'https://element-plus.org',
            img:'https://element-plus.org/images/element-plus-logo-small.svg',
            description: 'Element Plus是一个基于Vue 3的UI组件库，提供丰富的组件和样式'
        },
        {
            id: 6,
            name: 'Ant Design',
            url: 'https://ant.design',
            img:'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
            description: 'Ant Design是一个企业级UI设计语言和React组件库，提供高质量的设计和开发体验'
        },
        {
            id: 7,
            name: 'Ant Design Pro',
            url: 'https://pro.antdv.com',
            img:'https://pro.antdv.com/logo.png',
            description: 'Ant Design Pro是一个基于Ant Design的企业级中后台前端解决方案，提供丰富的组件和样式'
        },
        {
            id: 8,
            name: 'Vant',
            url: 'https://develop365.gitlab.io/vant/zh-CN/home/',
            img:'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
            description: 'Vant是一个轻量、可靠的移动端组件库，提供丰富的组件和样式'
        },
        {
            id: 9,
            name: 'Apache Echarts',
            url: 'https://echarts.apache.org/',
            img:'https://echarts.apache.org/favicon.ico',
            description: 'Apache Echarts是一个开源的可视化图表库，提供丰富的图表类型和交互效果'
        },
        {
            id: 10,
            name: 'Redis',
            url: 'https://www.redis.net.cn',
            img:'https://www.redis.net.cn/Application/Home/View/Public/img/icon.png',
            description: 'Redis是一个开源的高性能键值数据库，提供丰富的数据结构和高效的存储方式'
        },
        {
            id: 11,
            name: 'uni-app',
            url: 'https://zh.uniapp.dcloud.io/',
            img:'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
            description: 'uni-app是一个使用Vue.js开发跨平台应用的框架，支持多端发布和丰富的组件库'
        },
        {
            id: 12,
            name: 'cron表达式生成器',
            url: 'https://cron.qqe2.com/',
            img:'https://qqe2.com/favicon.ico',
            description: 'cron表达式生成器是一个在线工具，用于生成和解析cron表达式，方便用户设置定时任务'
        },
        {
            id: 13,
            name: 'nginx',
            url: 'https://nginx.org',
            img:'https://nginx.org/favicon.ico',
            description: 'nginx是一个高性能的HTTP和反向代理服务器，提供丰富的功能和高效的性能'
        },
        
    ]
        
    const otherList = [
        {
            id: 1,
            name: 'GitHub',
            url: 'https://github.com',
            img:'https://github.githubassets.com/favicons/favicon.png',
            description: 'GitHub是一个全球最大的开源代码托管平台，提供丰富的项目和社区资源'
        },
        {
            id: 2,
            name: 'Gitee',
            url: 'https://gitee.com',
            img:'https://gitee.com/favicon.ico',
            description: 'Gitee是一个国内的开源代码托管平台，提供丰富的项目和社区资源'
        },
        {
            id: 3,
            name: 'CSDN',
            url: 'https://www.csdn.net',
            img:'https://www.csdn.net/favicon.ico',
            description: 'CSDN是一个国内的IT技术社区，提供丰富的技术文章和学习资源'
        },
        {
            id: 4,
            name: 'Favicon生成工具',
            url: 'https://realfavicongenerator.net/',
            img:'https://realfavicongenerator.net/assets/images/logo.png',
            description: 'Favicon生成工具是一个在线工具，用于生成和优化网站的favicon图标，支持多种格式和尺寸'
        },
        
    ]
  
</script>

<template>
    <el-space wrap size="large" class="el-space-card">
        <el-card v-for="item in dataList" shadow="hover" class="el-card-item" 
        body-style="padding: 15px 20px;display: flex;align-items: center;text-align: center;"
         @click="handleClick(item.url)">
         <template #header>
             <div class="card-header">{{item.description}}</div>
         </template>
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
        width: 220px;
        border-radius: 10px;
        background-color: var(--el-color-warning-light-9);
        box-shadow: var(--el-box-shadow);
    }

    .el-card-item:hover{
        transform: translateY(-5px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        background-color: #518afc;
        color: #fff;
        transition: all 0.3s ease-in-out;
    }

    .card-header{
        font-size: 14px;
        color: #999;
        word-wrap: break-word; /* 允许文本换行 */
    }
    
    .el-card-item:hover .card-header{
        color: #dcdada;
    }


    .el-card-name{
        margin-left: 10px;
        font-size: 18px;
        cursor: default; 
        caret-color: transparent;   /* 隐藏光标 */
    }

</style>
