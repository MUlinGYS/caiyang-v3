import{B as e,o as a,C as l,_ as t}from"./index-rOxHBf93.js";import{_ as s}from"./ButtonTable-CZlzGF9V.js";import{d,c as o,o as u,b as n,ah as r,w as i,ai as m,F as p,A as c,L as f,M as _,x as w,ak as y,r as v,j as k,Z as b,N as g,e as h,aO as x,C as V,H as C,I as j,aR as B,aK as U,b8 as q,u as L,$ as M,a0 as P,aq as R,m as T,_ as F,bf as H,aj as I,P as N}from"./vendor-D3DmZvU-.js";/* empty css               */const O={class:"btn-more"},z=d({__name:"ButtonMore",props:{list:{}},emits:["click"],setup(e,{emit:a}){const l=a;return(e,a)=>{const t=s,d=y,v=m,k=r;return u(),o("div",O,[n(k,null,{dropdown:i((()=>[n(v,null,{default:i((()=>[(u(!0),o(p,null,c(e.list,(e=>(u(),f(d,{key:e.key,onClick:a=>(e=>{l("click",e)})(e)},{default:i((()=>[_(w(e.label),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:i((()=>[n(t,{type:"more"})])),_:1})])}}}),A={class:"page-content"},D={class:"dialog-footer"},K={style:{maxHeight:"500px",overflowY:"scroll"}},S=t(d({__name:"Role",setup(t){const s=v(!1),d=v(!1),r=k((()=>e().getMenuList)),m=v(),p=b({name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],des:[{required:!0,message:"请输入角色描述",trigger:"blur"}]}),c=b({id:"",name:"",des:"",status:!0}),y=b([{name:"超级管理员",allow:"全部权限",des:"拥有系统全部权限",date:"2021-01-08 12:30:45",status:1},{name:"董事会部",allow:"自定义",des:"负责董事会部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"监事会部",allow:"自定义",des:"负责监事会部相关工作的管理者",date:"2021-01-08 12:30:45",status:0},{name:"市场部",allow:"自定义",des:"负责市场部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"人力资源部",allow:"自定义",des:"负责人力资源部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"财务部",allow:"自定义",des:"负责财务部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"公关部",allow:"自定义",des:"负责公关部相关工作的管理者",date:"2021-01-08 12:30:45",status:0},{name:"广告部",allow:"自定义",des:"负责广告部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"营销",allow:"自定义",des:"负责营销相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"设计部",allow:"自定义",des:"负责设计部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"开发部",allow:"自定义",des:"负责开发部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"测试部",allow:"自定义",des:"负责测试部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"安保部",allow:"自定义",des:"负责安保部相关工作的管理者",date:"2021-01-08 12:30:45",status:1}]),O=v("add"),S=(e,a)=>{s.value=!0,O.value=e,"edit"===e&&a?(c.id=a.id,c.name=a.name,c.des=a.des,c.status=1===a.status):(c.id="",c.name="",c.des="",c.status=!0)},Y=()=>{d.value=!0},Z={children:"children",label:e=>{var a;return l(null==(a=e.meta)?void 0:a.title)||""}},$=()=>{I.confirm("确定删除该角色吗？","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((()=>{N.success("删除成功")}))},E=e=>{return a=this,l=null,t=function*(){e&&(yield e.validate((a=>{if(a){const a="add"===O.value?"新增成功":"修改成功";N.success(a),s.value=!1,e.resetFields()}})))},new Promise(((e,s)=>{var d=e=>{try{u(t.next(e))}catch(a){s(a)}},o=e=>{try{u(t.throw(e))}catch(a){s(a)}},u=a=>a.done?e(a.value):Promise.resolve(a.value).then(d,o);u((t=t.apply(a,l)).next())}));var a,l,t};return(e,l)=>{const t=V,v=x,k=j,b=B,I=U,N=q,G=z,J=a,Q=P,W=R,X=M,ee=F,ae=H,le=g("ripple");return u(),o("div",A,[n(b,null,{default:i((()=>[n(v,{xs:24,sm:12,lg:6},{default:i((()=>[n(t,{placeholder:"部门名称"})])),_:1}),l[10]||(l[10]=h("div",{style:{width:"12px"}},null,-1)),n(v,{xs:24,sm:12,lg:6,class:"el-col2"},{default:i((()=>[C((u(),f(k,null,{default:i((()=>l[8]||(l[8]=[_("搜索")]))),_:1})),[[le]]),C((u(),f(k,{onClick:l[0]||(l[0]=e=>S("add"))},{default:i((()=>l[9]||(l[9]=[_("新增角色")]))),_:1})),[[le]])])),_:1})])),_:1}),n(J,{data:L(y)},{default:i((()=>[n(I,{label:"角色名称",prop:"name"}),n(I,{label:"描述",prop:"des"}),n(I,{label:"状态",prop:"status"},{default:i((e=>[n(N,{type:1===e.row.status?"primary":"info"},{default:i((()=>[_(w(1===e.row.status?"启用":"禁用"),1)])),_:2},1032,["type"])])),_:1}),n(I,{label:"创建时间",prop:"date"},{default:i((e=>{return[_(w((a=e.row.date,new Date(a).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/\//g,"-"))),1)];var a})),_:1}),n(I,{fixed:"right",label:"操作",width:"100px"},{default:i((e=>[n(b,null,{default:i((()=>[n(G,{list:[{key:"permission",label:"菜单权限"},{key:"edit",label:"编辑角色"},{key:"delete",label:"删除角色"}],onClick:a=>{return l=a,t=e.row,void("permission"===l.key?Y():"edit"===l.key?S("edit",t):"delete"===l.key&&$());var l,t}},null,8,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["data"]),n(ee,{modelValue:L(s),"onUpdate:modelValue":l[6]||(l[6]=e=>T(s)?s.value=e:null),title:"add"===L(O)?"新增角色":"编辑角色",width:"30%"},{footer:i((()=>[h("div",D,[n(k,{onClick:l[4]||(l[4]=e=>s.value=!1)},{default:i((()=>l[11]||(l[11]=[_("取消")]))),_:1}),n(k,{type:"primary",onClick:l[5]||(l[5]=e=>E(L(m)))},{default:i((()=>l[12]||(l[12]=[_("提交")]))),_:1})])])),default:i((()=>[n(X,{ref_key:"formRef",ref:m,model:L(c),rules:L(p),"label-width":"120px"},{default:i((()=>[n(Q,{label:"角色名称",prop:"name"},{default:i((()=>[n(t,{modelValue:L(c).name,"onUpdate:modelValue":l[1]||(l[1]=e=>L(c).name=e)},null,8,["modelValue"])])),_:1}),n(Q,{label:"描述",prop:"des"},{default:i((()=>[n(t,{modelValue:L(c).des,"onUpdate:modelValue":l[2]||(l[2]=e=>L(c).des=e),type:"textarea",rows:3},null,8,["modelValue"])])),_:1}),n(Q,{label:"状态"},{default:i((()=>[n(W,{modelValue:L(c).status,"onUpdate:modelValue":l[3]||(l[3]=e=>L(c).status=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),n(ee,{modelValue:L(d),"onUpdate:modelValue":l[7]||(l[7]=e=>T(d)?d.value=e:null),title:"菜单权限",width:"30%"},{default:i((()=>[h("div",K,[n(ae,{data:L(r),"show-checkbox":"","node-key":"id","default-expanded-keys":[1,2,3,4,5,6,7,8],"default-checked-keys":[1,2,3],props:Z},null,8,["data"])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d68ee22d"]]);export{S as default};
