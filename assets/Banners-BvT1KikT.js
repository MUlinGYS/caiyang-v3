import{d as t,a as o,i as e,b as n}from"./icon4-BZjLVC94.js";import{d as l,c as a,o as r,e as s,x as c,a as u,n as i,b as d,w as b,aO as f,aR as C,u as m}from"./vendor-D3DmZvU-.js";import{_ as x}from"./index-rOxHBf93.js";/* empty css               */import{_ as g}from"./BasicBanner-BLca7V0x.js";const p={class:"card-banner art-custom-card"},T={class:"banner-content"},_={class:"banner-icon"},k=["src","alt"],v={class:"banner-text"},B={class:"banner-title"},F={class:"banner-description"},h={class:"banner-buttons"},w=x(l({__name:"CardBanner",props:{icon:{default:t},title:{default:""},description:{default:""},buttonText:{default:"重试"},buttonColor:{default:"var(--main-color)"},buttonTextColor:{default:"#fff"},showCancel:{type:Boolean,default:!1},cancelButtonText:{default:"取消"},cancelButtonColor:{default:"#f5f5f5"},cancelButtonTextColor:{default:"#666"}},emits:["click","cancel"],setup(t,{emit:o}){const e=t,n=o,l=()=>{n("click")},d=()=>{n("cancel")};return(t,o)=>(r(),a("div",p,[s("div",T,[s("div",_,[s("img",{src:e.icon,alt:e.title},null,8,k)]),s("div",v,[s("p",B,c(e.title),1),s("p",F,c(e.description),1)]),s("div",h,[t.showCancel?(r(),a("div",{key:0,class:"banner-button cancel-button",style:i({backgroundColor:t.cancelButtonColor,color:t.cancelButtonTextColor}),onClick:d},c(t.cancelButtonText),5)):u("",!0),s("div",{class:"banner-button",style:i({backgroundColor:t.buttonColor,color:t.buttonTextColor}),onClick:l},c(t.buttonText),5)])])]))}}),[["__scopeId","data-v-f0267738"]]),y={class:"banners"},I=x(l({__name:"Banners",setup(t){const l=()=>{},c=()=>{},u=()=>{};return(t,i)=>{const x=g,p=f,T=C,_=w;return r(),a("div",y,[i[0]||(i[0]=s("h1",{class:"page-title"},"基础横幅",-1)),d(T,{gutter:20},{default:b((()=>[d(p,{xs:24,sm:12,md:12},{default:b((()=>[d(x,{title:"欢迎回来，管理员！",subtitle:"今日系统访问量增长了23%，运行状态良好。",buttonText:"查看详情",buttonColor:"rgb(var(--art-secondary))",buttonTextColor:"#fff",onClick:l})])),_:1}),d(p,{xs:24,sm:12,md:12},{default:b((()=>[d(x,{title:"欢迎使用本系统!",subtitle:"这是一个基于Vue3和Element Plus的后台管理系统模板。",buttonText:"开始使用",buttonColor:"rgb(var(--art-success))",buttonTextColor:"#fff",backgroundColor:"#D4F1F7",titleColor:"#333",subtitleColor:"#666",onClick:l})])),_:1})])),_:1}),i[1]||(i[1]=s("h1",{class:"page-title"},"基础横幅（图片）",-1)),d(T,{gutter:20},{default:b((()=>[d(p,{xs:24,sm:12,md:12},{default:b((()=>[d(x,{title:"欢迎回来，管理员！",subtitle:"今日系统访问量增长了23%，运行状态良好。",buttonText:"查看详情",buttonColor:"#FF3E76",backgroundColor:"#FF80A4",buttonTextColor:"#fff",backgroundImage:m(o),onClick:l},null,8,["backgroundImage"])])),_:1}),d(p,{xs:24,sm:12,md:12},{default:b((()=>[d(x,{title:"欢迎使用本系统!",subtitle:"这是一个基于Vue3和Element Plus的后台管理系统模板。",buttonText:"开始使用",buttonColor:"#1385FF",buttonTextColor:"#fff",backgroundColor:"#88A7FF",backgroundImage:m("/assets/icon7-Za4ive_7.png"),onClick:l},null,8,["backgroundImage"])])),_:1})])),_:1}),i[2]||(i[2]=s("h1",{class:"page-title"},"卡片横幅",-1)),d(T,{gutter:20},{default:b((()=>[d(p,{xs:24,sm:12,md:12,lg:6},{default:b((()=>[d(_,{title:"系统状态良好",description:"所有服务运行正常，无异常情况。",buttonText:"查看详情"})])),_:1}),d(p,{xs:24,sm:12,md:12,lg:6},{default:b((()=>[d(_,{icon:m(e),title:"新消息提醒",description:"您有3条未读消息需要处理。",buttonText:"立即查看",buttonColor:"rgb(var(--art-warning))"},null,8,["icon"])])),_:1}),d(p,{xs:24,sm:12,md:12,lg:6},{default:b((()=>[d(_,{icon:m(o),title:"数据分析报告",description:"本周数据分析报告已生成完毕。",buttonText:"下载报告",buttonColor:"rgb(var(--art-error))"},null,8,["icon"])])),_:1}),d(p,{xs:24,sm:12,md:12,lg:6},{default:b((()=>[d(_,{icon:m(n),title:"系统更新提示",description:"新版本V2.1.0已发布，建议及时更新。",buttonText:"更新",buttonColor:"rgb(var(--art-primary))",showCancel:!0,cancelButtonText:"取消",cancelButtonColor:"#eee",cancelButtonTextColor:"#333",onClick:c,onCancel:u},null,8,["icon"])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-719bfe3c"]]);export{I as default};
