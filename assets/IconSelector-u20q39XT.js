import{I as e,_ as s}from"./index-rOxHBf93.js";import{d as a,r as l,p as n,c as i,o,e as t,b as c,n as d,v as u,u as r,H as p,a5 as f,x as y,G as m,_ as v,m as S,w as _,ab as I,F as g,A as C,I as T,M as A}from"./vendor-D3DmZvU-.js";import{e as M}from"./iconfont-DPUoc2h2.js";const N={class:"icon-selector"},x={class:"icon"},L=["innerHTML"],b={class:"text"},h={class:"arrow"},k={class:"icons-list"},w=["onClick"],E=["innerHTML"],H={class:"dialog-footer"},j=s(a({__name:"IconSelector",props:{iconType:{type:String,default:e.CLASS_NAME},defaultIcon:{type:String,default:""},text:{type:String,default:"图标选择器"},width:{type:String,default:"200px"},size:{type:String,default:"large"},disabled:{type:Boolean,default:!1}},emits:["getIcon"],setup(s,{emit:a}){const j=a,U=M(),V=s,z=l(V.defaultIcon);n((()=>V.defaultIcon),(e=>{z.value=e}),{immediate:!0});const D=l("icons"),O=l(!1),$=()=>{V.disabled||(O.value=!0)},B=()=>{z.value="",j("getIcon",z.value)};return(a,l)=>{const n=I,M=T,F=v;return o(),i("div",N,[t("div",{class:u(["select",[s.size,{"is-disabled":s.disabled},{"has-icon":r(z)}]]),onClick:$,style:d({width:V.width})},[t("div",x,[p(t("i",{class:u(`iconfont-sys ${r(z)}`)},null,2),[[f,V.iconType===r(e).CLASS_NAME]]),p(t("i",{class:"iconfont-sys",innerHTML:r(z)},null,8,L),[[f,V.iconType===r(e).UNICODE]])]),t("div",b,y(V.text),1),t("div",h,[l[3]||(l[3]=t("i",{class:"iconfont-sys arrow-icon"},"",-1)),t("i",{class:"iconfont-sys clear-icon",onClick:m(B,["stop"])},"")])],6),c(F,{title:"选择图标",width:"40%",modelValue:r(O),"onUpdate:modelValue":l[2]||(l[2]=e=>S(O)?O.value=e:null),"align-center":""},{footer:_((()=>[t("span",H,[c(M,{onClick:l[0]||(l[0]=e=>O.value=!1)},{default:_((()=>l[4]||(l[4]=[A("取 消")]))),_:1}),c(M,{type:"primary",onClick:l[1]||(l[1]=e=>O.value=!1)},{default:_((()=>l[5]||(l[5]=[A("确 定")]))),_:1})])])),default:_((()=>[c(n,{height:"400px"},{default:_((()=>[p(t("ul",k,[(o(!0),i(g,null,C(r(U),(a=>(o(),i("li",{key:a.className,onClick:s=>(s=>{V.iconType===e.CLASS_NAME?z.value=s.className:z.value=s.unicode,O.value=!1,j("getIcon",z.value)})(a)},[p(t("i",{class:u(`iconfont-sys ${a.className}`)},null,2),[[f,s.iconType===r(e).CLASS_NAME]]),p(t("i",{class:"iconfont-sys",innerHTML:a.unicode},null,8,E),[[f,s.iconType===r(e).UNICODE]])],8,w)))),128))],512),[[f,"icons"===r(D)]])])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-e6e6b79d"]]);export{j as I};
