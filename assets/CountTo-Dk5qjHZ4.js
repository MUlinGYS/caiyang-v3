import{_ as a}from"./index-rOxHBf93.js";import{C as l}from"./vue3-count-to.esm-CbK-J_R4.js";import{d as e,r as u,N as t,c as n,o as s,e as r,b as o,u as d,w as c,H as v,L as i,I as f,M as p,aG as m}from"./vendor-D3DmZvU-.js";const V={class:"page-content"},_={class:"mt-4"},h=a(e({__name:"CountTo",setup(a){const e=u(1e3),h=u(19999.99),y=u(2023.45),C=u(5e3),b=u(),k=u(!1),x=()=>{var a,l;if(!k.value)try{null==(a=b.value)||a.reset(),null==(l=b.value)||l.start(),k.value=!0}catch(e){}},j=()=>{var a;if(k.value)try{null==(a=b.value)||a.pause(),k.value=!1}catch(l){}},I=()=>{var a;try{null==(a=b.value)||a.reset(),k.value=!1}catch(l){}};return(a,u)=>{const k=f,T=m,g=t("ripple");return s(),n("div",V,[u[3]||(u[3]=r("h2",null,"基础用法",-1)),o(d(l),{endVal:e.value,duration:1e3},null,8,["endVal"]),u[4]||(u[4]=r("h2",null,"带前缀后缀",-1)),o(d(l),{prefix:"¥",suffix:"元",startVal:0,endVal:h.value,duration:2e3},null,8,["endVal"]),u[5]||(u[5]=r("h2",null,"小数点和分隔符",-1)),o(d(l),{startVal:0,endVal:y.value,decimals:2,decimal:".",separator:",",duration:2500},null,8,["endVal"]),u[6]||(u[6]=r("h2",null,"控制按钮",-1)),o(d(l),{ref_key:"countTo",ref:b,startVal:0,endVal:C.value,duration:3e3,autoplay:!1},null,8,["endVal"]),r("div",_,[o(T,null,{default:c((()=>[v((s(),i(k,{onClick:x},{default:c((()=>u[0]||(u[0]=[p("开始")]))),_:1})),[[g]]),v((s(),i(k,{onClick:j},{default:c((()=>u[1]||(u[1]=[p("暂停")]))),_:1})),[[g]]),v((s(),i(k,{onClick:I},{default:c((()=>u[2]||(u[2]=[p("重置")]))),_:1})),[[g]])])),_:1})])])}}}),[["__scopeId","data-v-5eb7babd"]]);export{h as default};
