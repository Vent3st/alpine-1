import{a as r,a6 as l,J as u,a7 as e,$ as p,a8 as d,x as _}from"./entry.47e6d225.js";import m from"./ContentSlot.02d9a8ed.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const o=l(),{flatUnwrap:a,unwrap:s}=d(),i=u(()=>n.icon||f[n.type]);return()=>{const c=a((o.default&&o.default())??[],["ul"]).map(t=>s(t,["li"]));return e("ul",c.map(t=>e("li",[e("span",{class:`list-icon ${n.type}`},e(p,{name:i.value,class:"icon"})),e("span",e(m,{use:()=>t}))])))}}});const x=_(y,[["__scopeId","data-v-6ef1dddb"]]);export{x as default};