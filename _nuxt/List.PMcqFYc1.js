import{d as r,ag as l,I as u,N as n,a6 as p,k as m}from"./entry.SO2DfJu_.js";import{u as f,f as _,_ as d}from"./MDCSlot.vz3RuGfC.js";const y=()=>({unwrap:f,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=t((o.default&&o.default())??[],["ul"]).map(a=>s(a,["li"]));return n("ul",i.map(a=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>a}))])))}}}),k=m(g,[["__scopeId","data-v-996b73c2"]]);export{k as default};
