"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("lodash-es"),E=m=>{const r=m;return r.install=a=>{a.component(r.name,r)},r},b=m=>!isNaN(parseFloat(m))&&isFinite(m)&&Number(m)===m,I=(m,r,a)=>{var f,A,z;const e=u.cloneDeep(m);if(!e)return;const c=Array.isArray(e==null?void 0:e.dimensions)?"":e==null?void 0:e.dimensions.name,i=Array.isArray(e==null?void 0:e.dimensions)?[]:(f=e==null?void 0:e.dimensions)==null?void 0:f.data,h=(r==null?void 0:r.stack)||null,o=(r==null?void 0:r.percentage)||!1;if(!(a!=null&&a.isEmptyData)&&i===void 0)return;const j=`${c}`,F=i.length>0&&i[0],O=b(F)&&(a==null?void 0:a.chartType)==="pie"?i.map((s,p)=>p===0?`${s}`:s):i,S={[j]:O},N={};let l=[];if(h&&o&&(e==null?void 0:e.measures.length)>0){const s=e==null?void 0:e.measures.map(t=>t.data);l=u.zip(...s).map(t=>{const y=t.map(d=>b(d)?d:parseFloat(d));return u.sum(y)})}(A=e==null?void 0:e.measures)==null||A.map(s=>{const t=b(s.name)?`${s.name} `:s.name;Object.assign(N,{[t]:h&&o?s.data.map((y,d)=>u.round(y/l[d],4)):s.data})});let n=[];const $=c===void 0?"dimension":c;n.push($),n=[...n,...(z=e==null?void 0:e.measures)==null?void 0:z.map(s=>s.name)];const k=Object.assign({},S,N);return{dimensions:n,source:k}};exports.getDataset=I;exports.withInstall=E;
