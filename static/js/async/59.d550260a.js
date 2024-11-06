"use strict";(self.webpackChunkform_crafter=self.webpackChunkform_crafter||[]).push([["59"],{6912:function(e,l,i){i.r(l),i.d(l,{Route:()=>Z});var t=i("5893"),s=i("7294"),a=i("9627"),r=i("3258"),n=i("3708"),o=i("3025"),d=i("8142"),c=i("3718"),u=i("3742"),m=i("1571"),x=i("4979"),h=i("8971"),p=i("1012"),g=i("1211"),v=i("9410"),f=i("7026"),j=i("19");function b(){for(var e=arguments.length,l=Array(e),i=0;i<e;i++)l[i]=arguments[i];return(0,j.m6)((0,f.W)(l))}var N=i("8932");let y=N.z.array(N.z.object({id:N.z.string().default(""),field:N.z.string().optional(),type:N.z.enum(["input","select","radio","checkbox","textarea","date","time","datetime"]).default("input"),description:N.z.string().optional(),required:N.z.boolean().optional(),prefill:N.z.string().array().optional(),maxLength:N.z.number().optional(),minLength:N.z.number().optional(),options:N.z.array(N.z.object({label:N.z.string(),description:N.z.string().optional()})).optional()})),w=(0,s.createContext)(null),L=()=>{let e=(0,s.useContext)(w);if(!e)throw Error("useDesignerField must be used within a DesignerFieldProvider");return e},k=(0,s.forwardRef)((e,l)=>{let{onSave:i,onFormChange:s,onFormFocus:a,formKey:g="schema-form",back:f,...j}=e,[b]=(0,n.u)({duration:150});return(0,t.jsx)(r.l0,{ref:l,autoScrollToError:!0,...j,onSubmit:e=>null==i?void 0:i((null==e?void 0:e.form)||[]),onChange:e=>{var l;return null==s?void 0:s((null===(l=e.values)||void 0===l?void 0:l.form)?[...e.values.form]:[])},children:e=>{let{formState:l,formApi:i}=e;return(0,t.jsx)(r.OF,{field:"form",children:e=>{let{arrayFields:s,addWithInitValue:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"py-3",children:(0,t.jsxs)("div",{className:"flex justify-between items-center gap-2 pr-8",children:[(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(r.hE,{children:[(0,t.jsx)(r.zx,{icon:(0,t.jsx)(o.Z,{}),onClick:async()=>{let{data:e,ok:l}=function(e){try{let l=JSON.parse(e);return{data:y.parse(l),ok:!0}}catch(e){return console.log(e),{data:void 0,ok:!1}}}(await navigator.clipboard.readText());l?i.setValue("form",e):r.FN.error("剪贴板内容无效")},children:"导入"}),(0,t.jsx)(r.zx,{icon:(0,t.jsx)(d.Z,{}),onClick:async()=>{let e=i.getValues();await navigator.clipboard.writeText(JSON.stringify(e.form)),r.FN.success("已复制到剪贴板")},children:"导出"})]}),(0,t.jsx)(r.gn,{title:"确定要清空表单吗？",okType:"danger",onConfirm:()=>{i.reset(),localStorage.removeItem(g)},children:(0,t.jsx)(r.zx,{icon:(0,t.jsx)(c.Z,{}),type:"danger",children:"清空"})})]}),(0,t.jsx)(r.zx,{type:"primary",theme:"solid",icon:(0,t.jsx)(u.Z,{}),onClick:async()=>{let e=await i.validate();localStorage.setItem(g,JSON.stringify(e.form)),i.submitForm()},children:"保存"})]})}),(0,t.jsx)("div",{ref:b,onBlur:()=>null==a?void 0:a(void 0),children:s.map((e,n)=>{var o,d;let{field:c,key:u,remove:p}=e,g=null===(d=l.values)||void 0===d?void 0:null===(o=d.form)||void 0===o?void 0:o[n],v=(null==g?void 0:g.field)??`字段 ${n+1}`;return(0,t.jsx)(w.Provider,{value:{field:c,value:g,type:null==g?void 0:g.type},children:(0,t.jsxs)("div",{id:null==g?void 0:g.id,className:"my-3 flex items-stretch scroll-m-3 [&>:first-child]:focus-within:border-focus [&>:first-child]:focus-within:shadow-elevated",onFocus:()=>null==a?void 0:a(null==g?void 0:g.id),children:[(0,t.jsxs)("section",{className:"px-5 pt-5 pb-2 border rounded-medium bg-bg-1 flex-grow transition",children:[(0,t.jsxs)("div",{className:"sticky z-10 top-0 flex gap-2 items-center -mt-2 pt-2 pb-3 bg-gradient-to-b from-bg-1 via-35% via-bg-1 pointer-events-none *:pointer-events-auto",children:[(0,t.jsx)("div",{className:"flex items-center justify-center h-6 min-w-6 text-large/none text-text-3 border rounded-full bg-bg-2",children:n+1}),(0,t.jsx)("h5",{className:"text-h5 font-bold",children:v})]}),(0,t.jsxs)("div",{className:"sm:grid sm:grid-cols-12 sm:gap-x-4",children:[(0,t.jsx)(r.l0.Select,{fieldClassName:"col-span-4",className:"w-full",field:`${c}.type`,label:"类型",defaultActiveFirstOption:!0,optionList:[{label:"单行文本",value:"input"},{label:"下拉选择",value:"select"},{label:"单选",value:"radio"},{label:"多选",value:"checkbox"},{label:"多行文本",value:"textarea"},{label:"日期",value:"date"},{label:"时间",value:"time"},{label:"日期时间",value:"datetime"}],rules:[{required:!0,message:"字段类型不能为空"}],placeholder:"请选择字段类型"}),(0,t.jsx)(r.l0.Input,{fieldClassName:"col-span-6",className:"w-full",field:`${c}.field`,label:{text:"字段名",extra:(0,t.jsxs)(C,{children:["表单显示的标签。",(0,t.jsx)("br",{}),"简明描述该项应该填写的内容。",(0,t.jsx)("br",{}),"建议",(0,t.jsx)("b",{children:"不超过 8 个字"}),"，更详细的提示请写到提示中。"]})},rules:[{required:!0,message:"字段名不能为空"},{max:20,message:"字段名长为 20 个字符"}],placeholder:`字段 ${n+1}`}),(0,t.jsx)(r.l0.Switch,{fieldClassName:"col-span-2",field:`${c}.required`,label:"必填项"}),(0,t.jsx)(r.l0.Input,{fieldClassName:"col-span-12",field:`${c}.description`,label:{text:"提示",extra:(0,t.jsx)(C,{children:"表单项目的描述，用于提示用户该表单项目的用途，以及如何填写。"})},placeholder:"无提示"}),(0,t.jsx)($,{})]})]}),(0,t.jsx)("div",{className:"py-2",children:(0,t.jsxs)("div",{className:"sticky top-4 flex flex-col gap-2 [&_button]:rounded-l-none",children:[(0,t.jsx)(r.u,{content:"删除",position:"right",children:(0,t.jsx)(r.zx,{className:"rounded-l-none",type:"danger",onClick:()=>{let e=i.getValues();p();let l=r.FN.success({content:(0,t.jsxs)("span",{children:["已删除",(0,t.jsxs)("span",{children:["「",v,"」"]}),(0,t.jsx)("button",{type:"button",className:"ml-3 font-semibold text-link hover:text-link-hover active:text-link-active",onClick:()=>{i.setValue("form",e.form),r.FN.close(l)},children:"撤销"})]})})},icon:(0,t.jsx)(m.Z,{})})}),(0,t.jsxs)("div",{className:"flex flex-col [&_:not(:last-child)_button]:border-border [&_:not(:last-child)_button]:border-b [&_:not(:last-child)_button]:rounded-b-none [&_:last-child_button]:rounded-t-none",children:[(0,t.jsx)(r.u,{content:"上移",position:"right",children:(0,t.jsx)(r.zx,{icon:(0,t.jsx)(x.Z,{}),onClick:()=>{var e;if(0===n)return;let t=(null===(e=l.values)||void 0===e?void 0:e.form)??[];[t[n],t[n-1]]=[t[n-1],t[n]],i.setValue("form",t)}})}),(0,t.jsx)(r.u,{content:"下移",position:"right",children:(0,t.jsx)(r.zx,{icon:(0,t.jsx)(h.Z,{}),onClick:()=>{var e;if(n===s.length-1)return;let t=(null===(e=l.values)||void 0===e?void 0:e.form)??[];[t[n],t[n+1]]=[t[n+1],t[n]],i.setValue("form",t)}})})]})]})})]})},(null==g?void 0:g.id)||u)})}),(0,t.jsx)("div",{className:"pr-8",children:(0,t.jsx)(r.zx,{className:"my-3 border border-dashed border-primary bg-transparent",block:!0,size:"large",onClick:()=>n({id:(0,v.x0)(8),type:"input"}),icon:(0,t.jsx)(p.Z,{}),children:"添加字段"})})]})}})}})}),C=e=>{let{children:l}=e;return(0,t.jsx)(r.u,{content:l,children:(0,t.jsx)(g.Z,{className:"size-4 text-text-2"})})};function $(){let{field:e,type:l}=L();if(!l)return null;switch(l){case"input":case"textarea":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{className:"col-span-4",isText:!0}),(0,t.jsx)(r.l0.Input,{fieldClassName:"col-span-8",field:`${e}.prefill`,label:"默认值",placeholder:"无默认值"})]});case"select":case"checkbox":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{className:"col-span-4"}),(0,t.jsx)(F,{className:"col-span-8"}),(0,t.jsx)(S,{className:"col-span-12"})]});case"radio":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{className:"col-span-12"}),(0,t.jsx)(S,{className:"col-span-12"})]});default:return null}}let z=e=>{let{isText:l,className:i}=e,{field:s,type:a}=L();return(0,t.jsxs)("div",{className:b("grid grid-cols-2 gap-2",i),children:[(0,t.jsx)(r.l0.InputNumber,{className:"w-full",field:`${s}.minLength`,label:l?"最少字数":"选择下限",min:0,showClear:!0,innerButtons:!0,placeholder:"select"===a?"单选":"无限制"}),(0,t.jsx)(r.l0.InputNumber,{className:"w-full",field:`${s}.maxLength`,label:l?"最多字数":"选择上限",min:0,showClear:!0,innerButtons:!0,placeholder:"select"===a?"单选":"无限制"})]})},F=e=>{var l;let{className:i}=e,{field:s,value:a,type:n}=L();return(0,t.jsx)(r.l0.Select,{fieldClassName:i,className:"w-full",field:`${s}.prefill`,label:"默认选择",multiple:"radio"!==n&&"select"===n&&(!!(null==a?void 0:a.maxLength)&&a.maxLength>1||!!(null==a?void 0:a.minLength)&&a.minLength>1),max:"radio"!==n&&(null==a?void 0:a.maxLength)?a.maxLength:void 0,optionList:(null==a?void 0:null===(l=a.options)||void 0===l?void 0:l.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label})))??[],placeholder:"无默认选择",showClear:!0},`${s}.prefill`)},S=e=>{let{className:l}=e,{field:i,type:s}=L();return(0,t.jsx)("div",{className:l,children:(0,t.jsx)(r.OF,{field:`${i}.options`,children:e=>{let{add:l,arrayFields:i}=e;return(0,t.jsxs)(t.Fragment,{children:[i.map((e,l)=>{let{field:i,key:a,remove:n}=e;return(0,t.jsxs)("div",{className:"grid grid-cols-[1fr_auto] gap-2",children:[(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)(r.l0.Input,{fieldClassName:b("flex-grow","select"===s&&"basis-1/2"),field:`${i}.label`,placeholder:`选项 ${l+1}`,rules:[{required:!0,message:"选项不能为空"},{max:"select"===s?80:20,message:"select"===s?"选项最长 80 个字符":"选项最长 20 个字符"}],noLabel:!0}),"select"!==s&&(0,t.jsx)(r.l0.Input,{fieldClassName:"basis-1/2",field:`${i}.description`,placeholder:"无提示",noLabel:!0})]}),(0,t.jsx)("div",{className:"py-3",children:(0,t.jsx)(r.zx,{type:"danger",theme:"borderless",icon:(0,t.jsx)(m.Z,{}),onClick:n})})]},a)}),(0,t.jsx)("div",{className:"py-3",children:(0,t.jsx)(r.zx,{icon:(0,t.jsx)(p.Z,{}),onClick:l,children:"添加选项"})})]})}})})};var _=i("5077");let I=(0,s.forwardRef)((e,l)=>{let{schema:i=[],onSubmit:s,preview:a,...n}=e,o=i.map((e,l)=>{if(!e)return null;let i=e.field??`字段 ${l+1}`,s={field:e.id,label:i,extraText:e.description,initValue:e.prefill},n=e.required?[{required:!0,message:`${i}不能为空`}]:[],o=(()=>{var l,a,o;switch(e.type){case"input":return(0,t.jsx)(r.l0.Input,{...s,rules:[...n,{max:e.maxLength||void 0,message:`${i}最多 ${e.maxLength} 个字符`},{min:e.minLength||void 0,message:`${i}最少 ${e.minLength} 个字符`}]},e.id);case"select":return(0,t.jsx)(r.l0.Select,{className:"w-full",...s,rules:[...n,{validator:(l,i)=>!e.minLength||i.length>e.minLength,message:`${i}最少选择 ${e.minLength} 项`}],multiple:e.maxLength?e.maxLength>1:void 0,max:e.maxLength||void 0,optionList:(null==e?void 0:null===(l=e.options)||void 0===l?void 0:l.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label})))??[],showClear:!e.required},e.id);case"radio":return(0,t.jsx)(r.l0.RadioGroup,{...s,rules:n,options:(null===(a=e.options)||void 0===a?void 0:a.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label,extra:null==e?void 0:e.description})))??[]},e.id);case"checkbox":return(0,t.jsx)(r.l0.CheckboxGroup,{...s,rules:[...n,{validator:(l,i)=>!e.minLength||i.length>e.minLength,message:`${i}最少选择 ${e.minLength} 项`},{validator:(l,i)=>!e.maxLength||i.length<e.maxLength,message:`${i}最多选择 ${e.maxLength} 项`}],options:(null===(o=e.options)||void 0===o?void 0:o.filter(e=>e).map(e=>({label:null==e?void 0:e.label,value:null==e?void 0:e.label,extra:null==e?void 0:e.description})))??[]},e.id);case"textarea":return(0,t.jsx)(r.l0.TextArea,{...s,rules:[...n,{max:e.maxLength||void 0,message:`${i}最多 ${e.maxLength} 个字符`},{min:e.minLength||void 0,message:`${i}最少 ${e.minLength} 个字符`}],maxCount:e.maxLength||void 0,autosize:!0},e.id);case"date":return(0,t.jsx)(r.l0.DatePicker,{className:"w-full",...s,rules:n},e.id);case"time":return(0,t.jsx)(r.l0.TimePicker,{className:"w-full",...s,rules:n,format:"HH:mm"},e.id);case"datetime":return(0,t.jsx)(r.l0.DatePicker,{className:"w-full",...s,rules:n,type:"dateTime"},e.id);default:return null}})();if(!a)return o;let{highlightField:d,highlightClassName:c,onLocate:u}=a;return(0,t.jsxs)("div",{"data-highlight":d===e.id?"":void 0,className:b("group relative",d===e.id&&c),children:[o,u&&(0,t.jsx)("div",{className:"absolute top-2 right-0 opacity-0 group-hover:opacity-100 group-data-[highlight]:opacity-0",children:(0,t.jsx)(r.u,{position:"topRight",content:"在表单设计器中定位",children:(0,t.jsx)(r.zx,{type:"tertiary",theme:"outline",onClick:()=>u(e.id),size:"small",icon:(0,t.jsx)(_.Z,{})})})})]},e.id)});return o.length>0?(0,t.jsx)(r.l0,{autoScrollToError:!0,onSubmit:s,ref:l,...n,children:o}):(0,t.jsx)("div",{className:"py-3 text-center text-sm text-text-2",children:(null==a?void 0:a.empty)??"请在表单设计器中添加字段"})}),Z=(0,a.k0)("/")({component:function(){let[e,l]=(0,s.useState)([]),[i,a]=(0,s.useState)();return(0,t.jsx)("div",{className:"max-w-screen-2xl w-full mx-auto px-4",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_480px] gap-x-4",children:[(0,t.jsx)("div",{className:"py-4",children:(0,t.jsx)(k,{onFormChange:l,onSave:e=>console.log(e),onFormFocus:e=>a(e)})}),(0,t.jsxs)("div",{className:"max-lg:border-t pt-5 lg:h-full lg:relative lg:pt-20",children:[(0,t.jsx)("h3",{className:"text-large font-bold mb-2 px-2",children:"预览"}),(0,t.jsx)("div",{className:"lg:sticky lg:top-4 border bg-bg-1 py-2 px-5 rounded-medium lg:max-h-[calc(100vh-2rem)] overflow-auto",children:(0,t.jsx)(I,{preview:{highlightField:i,highlightClassName:"rounded ring-1 ring-primary shadow-knob px-3 -mx-3",onLocate:e=>{var l;let i=document.getElementById(e);i&&(i.scrollIntoView({behavior:"smooth"}),null===(l=i.querySelector("input.semi-input"))||void 0===l||l.focus({preventScroll:!0}))}},schema:e})})]})]})})}})}}]);