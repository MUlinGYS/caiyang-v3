import{u as e,a as t}from"./useChart-DEtKbZiu.js";import{g as a}from"./index-rOxHBf93.js";import"./index-CouOpfSh.js";import{L as i}from"./installSVGRenderer-B28tEVya.js";import{d as s,p as o,f as r,c as l,o as n,n as h}from"./vendor-D3DmZvU-.js";const d=s({__name:"BarChart",props:{data:{default:()=>[0,0,0,0,0,0,0]},xAxisData:{default:()=>[]},color:{default:""},height:{default:e().chartHeight},barWidth:{default:"40%"},showAxisLabel:{type:Boolean,default:!0},showAxisLine:{type:Boolean,default:!0},showSplitLine:{type:Boolean,default:!0}},setup(e){const{chartRef:s,isDark:d,initChart:x,getAxisLineStyle:p,getAxisLabelStyle:f,getAxisTickStyle:c,getSplitLineStyle:L}=t(),y=e,m=()=>{const e=y.color||new i(0,0,0,1,[{offset:0,color:a("--el-color-primary-light-4")},{offset:1,color:a("--el-color-primary")}]);return{grid:{top:15,right:0,bottom:0,left:0,containLabel:!0},tooltip:{trigger:"item"},xAxis:{type:"category",data:y.xAxisData,axisTick:c(),axisLine:p(y.showAxisLine),axisLabel:f(y.showAxisLabel)},yAxis:{axisLabel:f(y.showAxisLabel),axisLine:p(y.showAxisLine),splitLine:L(y.showSplitLine)},series:[{data:y.data,type:"bar",itemStyle:{borderRadius:4,color:e},barWidth:y.barWidth}]}};return o(d,(()=>x(m()))),r((()=>x(m()))),(e,t)=>(n(),l("div",{ref_key:"chartRef",ref:s,class:"bar-chart",style:h({height:y.height})},null,4))}});export{d as _};
