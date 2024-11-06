"use strict";(self.webpackChunkform_crafter=self.webpackChunkform_crafter||[]).push([["59"],{6912:function(e,l,i){i.r(l),i.d(l,{Route:()=>q});var s=i("5893"),t=i("7294"),a=i("9627"),r=i("300"),n=i("3708"),o=i("3025"),d=i("8142"),c=i("3718"),u=i("3742"),m=i("1571"),x=i("4979"),h=i("8971"),p=i("1012"),v=i("1211"),g=i("9410"),f=i("7026"),j=i("19");function b(){for(var e=arguments.length,l=Array(e),i=0;i<e;i++)l[i]=arguments[i];return(0,j.m6)((0,f.W)(l))}var N=i("8932");let y=N.z.array(N.z.object({id:N.z.string().default(""),field:N.z.string().optional(),type:N.z.enum(["input","select","radio","checkbox","textarea","date","time","datetime"]).default("input"),description:N.z.string().optional(),required:N.z.boolean().optional(),prefill:N.z.string().array().optional(),maxLength:N.z.number().optional(),minLength:N.z.number().optional(),options:N.z.array(N.z.object({label:N.z.string(),description:N.z.string().optional()})).optional()})),w=(0,t.createContext)(null),L=()=>{let e=(0,t.useContext)(w);if(!e)throw Error("useDesignerField must be used within a DesignerFieldProvider");return e},k=(0,t.forwardRef)((e,l)=>{let{onSave:i,onFormChange:t,onFormFocus:a,formKey:v="schema-form",back:f,...j}=e,[N]=(0,n.u)({duration:150});return(0,s.jsx)(r.l0,{ref:l,autoScrollToError:!0,...j,onSubmit:e=>null==i?void 0:i((null==e?void 0:e.form)||[]),onChange:e=>{var l;return null==t?void 0:t((null===(l=e.values)||void 0===l?void 0:l.form)?[...e.values.form]:[])},children:e=>{let{formState:l,formApi:i}=e;return(0,s.jsx)(r.OF,{field:"form",children:e=>{let{arrayFields:t,addWithInitValue:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"py-3",children:(0,s.jsxs)("div",{className:"flex justify-between items-center gap-2 pr-8",children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(r.hE,{children:[(0,s.jsx)(r.zx,{icon:(0,s.jsx)(o.Z,{}),onClick:async()=>{let{data:e,ok:l}=function(e){try{let l=JSON.parse(e);return{data:y.parse(l),ok:!0}}catch(e){return console.log(e),{data:void 0,ok:!1}}}(await navigator.clipboard.readText());l?i.setValue("form",e):r.FN.error("剪贴板内容无效")},children:"导入"}),(0,s.jsx)(r.zx,{icon:(0,s.jsx)(d.Z,{}),onClick:async()=>{let e=i.getValues();await navigator.clipboard.writeText(JSON.stringify(e.form)),r.FN.success("已复制到剪贴板")},children:"导出"})]}),(0,s.jsx)(r.gn,{title:"确定要清空表单设计器内容吗？",okType:"danger",onConfirm:()=>{i.reset(),localStorage.removeItem(v)},children:(0,s.jsx)(r.zx,{icon:(0,s.jsx)(c.Z,{}),type:"danger",children:"清空"})})]}),(0,s.jsx)(r.zx,{type:"primary",theme:"solid",icon:(0,s.jsx)(u.Z,{}),onClick:async()=>{let e=await i.validate();localStorage.setItem(v,JSON.stringify(e.form)),i.submitForm()},children:"保存"})]})}),(0,s.jsx)("div",{ref:N,onBlur:()=>null==a?void 0:a(void 0),children:t.map((e,n)=>{var o,d;let{field:c,key:u,remove:p}=e,v=null===(d=l.values)||void 0===d?void 0:null===(o=d.form)||void 0===o?void 0:o[n],g=(null==v?void 0:v.field)??`字段 ${n+1}`;return(0,s.jsx)(w.Provider,{value:{field:c,value:v,type:null==v?void 0:v.type},children:(0,s.jsxs)("div",{id:null==v?void 0:v.id,className:"py-3 flex items-stretch [&>:first-child]:focus-within:border-focus [&>:first-child]:focus-within:shadow-elevated",onFocus:()=>null==a?void 0:a(null==v?void 0:v.id),children:[(0,s.jsxs)("section",{className:"px-5 pt-5 pb-2 border rounded-medium bg-bg-1 flex-grow transition",children:[(0,s.jsxs)("div",{className:"sticky z-10 top-0 flex gap-2 items-center -mt-2 pt-2 pb-3 bg-gradient-to-b from-bg-1 via-35% via-bg-1 pointer-events-none *:pointer-events-auto",children:[(0,s.jsx)("div",{className:"flex items-center justify-center h-6 min-w-6 text-large/none text-text-3 border rounded-full bg-bg-2",children:n+1}),(0,s.jsx)("h5",{className:b("text-h5 font-bold",(null==v?void 0:v.required)&&"after:content-['*'] after:text-danger after:ml-1"),children:g})]}),(0,s.jsxs)("div",{className:"sm:grid sm:grid-cols-12 sm:gap-x-4",children:[(0,s.jsx)(r.l0.Select,{fieldClassName:"col-span-4",className:"w-full",field:`${c}.type`,label:"类型",defaultActiveFirstOption:!0,optionList:[{label:"单行文本",value:"input"},{label:"下拉选择",value:"select"},{label:"单选",value:"radio"},{label:"多选",value:"checkbox"},{label:"多行文本",value:"textarea"},{label:"日期",value:"date"},{label:"时间",value:"time"},{label:"日期时间",value:"datetime"}],rules:[{required:!0,message:"字段类型不能为空"}],placeholder:"请选择字段类型"}),(0,s.jsx)(r.l0.Input,{fieldClassName:"col-span-6",className:"w-full",field:`${c}.field`,label:{text:"字段名",extra:(0,s.jsxs)(C,{children:["表单显示的标签。",(0,s.jsx)("br",{}),"简明描述该项应该填写的内容。",(0,s.jsx)("br",{}),"建议",(0,s.jsx)("b",{children:"不超过 8 个字"}),"，更详细的信息请写到提示中。"]})},rules:[{required:!0,message:"字段名不能为空"},{max:20,message:"字段名长为 20 个字符"}],placeholder:`字段 ${n+1}`}),(0,s.jsx)(r.l0.Switch,{fieldClassName:"col-span-2",field:`${c}.required`,label:"必填项"}),(0,s.jsx)(r.l0.Input,{fieldClassName:"col-span-12",field:`${c}.description`,label:{text:"提示",extra:(0,s.jsx)(C,{children:"表单项目的描述，用于提示用户该表单项目的用途，以及如何填写。"})},placeholder:"无提示"}),(0,s.jsx)($,{})]})]}),(0,s.jsx)("div",{className:"py-2",children:(0,s.jsxs)("div",{className:"sticky top-4 flex flex-col gap-2 [&_button]:rounded-l-none",children:[(0,s.jsx)(r.u,{content:"删除",position:"right",children:(0,s.jsx)(r.zx,{className:"rounded-l-none",type:"danger",onClick:()=>{let e=i.getValues();p();let l=r.FN.success({content:(0,s.jsxs)("span",{children:["已删除",(0,s.jsxs)("span",{children:["「",g,"」"]}),(0,s.jsx)("button",{type:"button",className:"ml-3 font-semibold text-link hover:text-link-hover active:text-link-active",onClick:()=>{i.setValue("form",e.form),r.FN.close(l)},children:"撤销"})]})})},icon:(0,s.jsx)(m.Z,{})})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(r.u,{content:"上移",position:"right",children:(0,s.jsx)(r.zx,{icon:(0,s.jsx)(x.Z,{}),className:"rounded-b-none",onClick:()=>{var e;if(0===n)return;let s=(null===(e=l.values)||void 0===e?void 0:e.form)??[];[s[n],s[n-1]]=[s[n-1],s[n]],i.setValue("form",s)}})}),(0,s.jsx)("div",{className:"border-b border-border"}),(0,s.jsx)(r.u,{content:"下移",position:"right",children:(0,s.jsx)(r.zx,{icon:(0,s.jsx)(h.Z,{}),className:"rounded-t-none",onClick:()=>{var e;if(n===t.length-1)return;let s=(null===(e=l.values)||void 0===e?void 0:e.form)??[];[s[n],s[n+1]]=[s[n+1],s[n]],i.setValue("form",s)}})})]})]})})]})},(null==v?void 0:v.id)||u)})}),(0,s.jsx)("div",{className:"pr-8",children:(0,s.jsx)(r.zx,{className:"my-3 rounded-medium",block:!0,theme:"outline",size:"large",onClick:()=>n({id:(0,g.x0)(8),type:"input"}),icon:(0,s.jsx)(p.Z,{}),children:"添加字段"})})]})}})}})}),C=e=>{let{children:l}=e;return(0,s.jsx)(r.u,{content:l,children:(0,s.jsx)(v.Z,{className:"size-4 text-text-2"})})};function $(){let{field:e,type:l}=L();if(!l)return null;switch(l){case"input":case"textarea":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{className:"col-span-4",isText:!0}),(0,s.jsx)(r.l0.Input,{fieldClassName:"col-span-8",field:`${e}.prefill`,label:"默认值",placeholder:"无默认值"})]});case"select":case"checkbox":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{className:"col-span-4"}),(0,s.jsx)(F,{className:"col-span-8"}),(0,s.jsx)(S,{className:"col-span-12"})]});case"radio":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(F,{className:"col-span-12"}),(0,s.jsx)(S,{className:"col-span-12"})]});default:return null}}let z=e=>{let{isText:l,className:i}=e,{field:t,type:a}=L();return(0,s.jsxs)("div",{className:b("grid grid-cols-2 gap-2",i),children:[(0,s.jsx)(r.l0.InputNumber,{className:"w-full",field:`${t}.minLength`,label:l?"最少字数":"选择下限",min:0,showClear:!0,innerButtons:!0,placeholder:"select"===a?"单选":"无限制"}),(0,s.jsx)(r.l0.InputNumber,{className:"w-full",field:`${t}.maxLength`,label:l?"最多字数":"选择上限",min:0,showClear:!0,innerButtons:!0,placeholder:"select"===a?"单选":"无限制"})]})},F=e=>{var l;let{className:i}=e,{field:t,value:a,type:n}=L();return(0,s.jsx)(r.l0.Select,{fieldClassName:i,className:"w-full",field:`${t}.prefill`,label:"默认选择",multiple:"radio"!==n&&"select"===n&&(!!(null==a?void 0:a.maxLength)&&a.maxLength>1||!!(null==a?void 0:a.minLength)&&a.minLength>1),max:"radio"!==n&&(null==a?void 0:a.maxLength)?a.maxLength:void 0,optionList:(null==a?void 0:null===(l=a.options)||void 0===l?void 0:l.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label})))??[],placeholder:"无默认选择",showClear:!0},`${t}.prefill`)},S=e=>{let{className:l}=e,{field:i,type:t}=L(),[a]=(0,n.u)({duration:100});return(0,s.jsx)("div",{className:b("-mx-5 px-5 pt-2 mt-2 border-t",l),children:(0,s.jsx)(r.OF,{field:`${i}.options`,children:e=>{let{add:l,arrayFields:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:a,children:i.map((e,l)=>{let{field:i,key:a,remove:n}=e;return(0,s.jsxs)("div",{className:"grid grid-cols-[1fr_auto] gap-2",children:[(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)(r.l0.Input,{fieldClassName:b("flex-grow","select"===t&&"basis-1/2"),field:`${i}.label`,placeholder:`选项 ${l+1}`,rules:[{required:!0,message:"选项不能为空"},{max:"select"===t?80:20,message:"select"===t?"选项最长 80 个字符":"选项最长 20 个字符"}],noLabel:!0}),"select"!==t&&(0,s.jsx)(r.l0.Input,{fieldClassName:"basis-1/2",field:`${i}.description`,placeholder:"无提示",noLabel:!0})]}),(0,s.jsx)("div",{className:"py-3",children:(0,s.jsx)(r.zx,{type:"danger",theme:"borderless",icon:(0,s.jsx)(m.Z,{}),onClick:n})})]},a)})}),(0,s.jsx)("div",{className:"py-3 pr-10",children:(0,s.jsx)(r.zx,{block:!0,icon:(0,s.jsx)(p.Z,{}),onClick:l,children:"添加选项"})})]})}})})};var I=i("5077");let Z=(0,t.forwardRef)((e,l)=>{let{schema:i=[],onSubmit:t,preview:a,...n}=e,o=i.map((e,l)=>{if(!e)return null;let i=e.field??`字段 ${l+1}`,t={field:e.id,label:i,extraText:e.description,initValue:e.prefill},n=e.required?[{required:!0,message:`${i}不能为空`}]:[],o=(()=>{var l,a,o;switch(e.type){case"input":return(0,s.jsx)(r.l0.Input,{...t,rules:[...n,{max:e.maxLength||void 0,message:`${i}最多 ${e.maxLength} 个字符`},{min:e.minLength||void 0,message:`${i}最少 ${e.minLength} 个字符`}]},e.id);case"select":return(0,s.jsx)(r.l0.Select,{className:"w-full",...t,rules:[...n,{validator:(l,i)=>!e.minLength||i.length>e.minLength,message:`${i}最少选择 ${e.minLength} 项`}],multiple:e.maxLength?e.maxLength>1:void 0,max:e.maxLength||void 0,optionList:(null==e?void 0:null===(l=e.options)||void 0===l?void 0:l.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label})))??[],showClear:!e.required},e.id);case"radio":return(0,s.jsx)(r.l0.RadioGroup,{...t,rules:n,options:(null===(a=e.options)||void 0===a?void 0:a.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label,extra:null==e?void 0:e.description})))??[]},e.id);case"checkbox":return(0,s.jsx)(r.l0.CheckboxGroup,{...t,rules:[...n,{validator:(l,i)=>!e.minLength||i.length>e.minLength,message:`${i}最少选择 ${e.minLength} 项`},{validator:(l,i)=>!e.maxLength||i.length<e.maxLength,message:`${i}最多选择 ${e.maxLength} 项`}],options:(null===(o=e.options)||void 0===o?void 0:o.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label,extra:null==e?void 0:e.description})))??[]},e.id);case"textarea":return(0,s.jsx)(r.l0.TextArea,{...t,rules:[...n,{max:e.maxLength||void 0,message:`${i}最多 ${e.maxLength} 个字符`},{min:e.minLength||void 0,message:`${i}最少 ${e.minLength} 个字符`}],maxCount:e.maxLength||void 0,autosize:!0},e.id);case"date":return(0,s.jsx)(r.l0.DatePicker,{className:"w-full",...t,rules:n},e.id);case"time":return(0,s.jsx)(r.l0.TimePicker,{className:"w-full",...t,rules:n,format:"HH:mm"},e.id);case"datetime":return(0,s.jsx)(r.l0.DatePicker,{className:"w-full",...t,rules:n,type:"dateTime"},e.id);default:return null}})();if(!a)return o;let{highlightField:d,highlightClassName:c,onLocate:u}=a;return(0,s.jsxs)("div",{"data-highlight":d===e.id?"":void 0,className:b("group relative",d===e.id&&c),children:[o,u&&(0,s.jsx)("div",{className:"absolute top-2 right-0 opacity-0 group-hover:opacity-100 group-data-[highlight]:hidden",children:(0,s.jsx)(r.u,{position:"topRight",content:"在表单设计器中定位",children:(0,s.jsx)(r.zx,{type:"tertiary",theme:"outline",onClick:()=>u(e.id),size:"small",icon:(0,s.jsx)(I.Z,{})})})})]},e.id)});return o.length>0?(0,s.jsx)(r.l0,{autoScrollToError:!0,onSubmit:t,ref:l,...n,children:o}):(0,s.jsx)("div",{className:"py-3 text-center text-sm text-text-2",children:(null==a?void 0:a.empty)??"请在表单设计器中添加字段"})}),q=(0,a.k0)("/")({component:function(){let[e,l]=(0,t.useState)([]),[i,a]=(0,t.useState)();return(0,s.jsx)("div",{className:"max-w-screen-2xl w-full mx-auto px-4",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_480px] gap-x-4",children:[(0,s.jsx)("div",{className:"py-4",children:(0,s.jsx)(k,{onFormChange:l,onSave:e=>console.log(e),onFormFocus:e=>a(e)})}),(0,s.jsxs)("div",{className:"max-lg:border-t pt-5 lg:h-full lg:relative lg:pt-20",children:[(0,s.jsx)("h3",{className:"text-large font-bold mb-2 px-2",children:"预览"}),(0,s.jsx)("div",{className:"lg:sticky lg:top-4 border bg-bg-1 py-2 px-5 rounded-medium lg:max-h-[calc(100vh-2rem)] overflow-auto",children:(0,s.jsx)(Z,{preview:{highlightField:i,highlightClassName:"rounded ring-1 ring-primary shadow-knob px-3 -mx-3",onLocate:e=>{var l;let i=document.getElementById(e);i&&(i.scrollIntoView({behavior:"smooth"}),null===(l=i.querySelector("input.semi-input"))||void 0===l||l.focus({preventScroll:!0}))}},schema:e})})]})]})})}})}}]);