import k from"./ArticlesListItem.1An4uQv0.js";import w from"./ProseA.jBPRwz5_.js";import I from"./ProseCodeInline.wWAmnz9t.js";import{u as v}from"./asyncData.UblArDvT.js";import{d as g,Y as A,I as S,M as c,b as a,c as r,e as o,g as i,F as C,Z as B,D as e,w as u,p as L,i as N,q as V,$ as b,X as q,k as z}from"./entry.c0seS-U-.js";import"./date.3uOv5BcS.js";const D=t=>(L("data-v-01e93ac2"),t=t(),N(),t),F={key:0,class:"articles-list"},P={class:"featured"},T={class:"layout"},Y={key:1,class:"tour"},$=D(()=>o("p",null,"Seems like there are no articles yet.",-1)),E=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>v(_.path,async()=>await V(b(_.path)).sort({date:-1}).find(),"$nzn4HIzK3O")),s=await s,l(),s),n=S(()=>m.value||[]);return(H,K)=>{var d;const p=k,h=w,f=I;return(d=c(n))!=null&&d.length?(a(),r("div",F,[o("div",P,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",T,[(a(!0),r(C,null,B(c(n).slice(1),(y,x)=>(a(),q(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",Y,[$,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),J=z(E,[["__scopeId","data-v-01e93ac2"]]);export{J as default};
