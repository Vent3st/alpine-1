import{d as x,H as v,$ as C,b as n,c,F as p,Y as w,f as o,g as l,w as m,e as i,t as r,L as f,n as D,a0 as L,D as N,a1 as B,k as I}from"./entry.f173a720.js";import{f as V}from"./date.824a539b.js";const $=["data-content-id"],z={key:0,class:"image"},A={key:0},E={class:"content"},F={class:"description"},S=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var a,s;return(a=C())!=null&&a.isEnabled()?(s=_.article)==null?void 0:s._id:void 0});return(a,s)=>{var u;const y=L,d=N;return t.article._path&&t.article.title?(n(),c("article",{key:0,class:D({featured:t.featured}),"data-content-id":f(h)},[t.article.cover?(n(),c("div",z,[(u=t.article)!=null&&u.badges?(n(),c("div",A,[(n(!0),c(p,null,w(t.article.badges,(e,k)=>(n(),c("span",{key:k,style:B({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):o("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):o("",!0),i("div",E,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[i("h1",null,r(t.article.title),1)]),_:1},8,["to"]),i("p",F,r(t.article.description),1),i("time",null,r(("formatDate"in a?a.formatDate:f(V))(t.article.date)),1)])],10,$)):o("",!0)}}});const q=I(S,[["__scopeId","data-v-8cbebf72"]]);export{q as default};
