"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("../../base/index.js"),i=require("./computed.js"),c=require("../../hook/useWatchChartData.js"),l=require("../../node_modules/echarts/lib/chart/pie/install.js"),d=require("../../node_modules/echarts/lib/extension.js");d.use([l.install]);const g=e.defineComponent({name:"KsgPieChart",extends:a.KsgBaseChart,props:{data:Array},setup(t,{slots:s,expose:o,attrs:n}){const[r,u]=c.useWatchChartData(i.default,t,o);return console.log(r.value),()=>e.createVNode(a.KsgBaseChart,e.mergeProps(n,{ref:u},t,{option:r.value}),s)}});exports.default=g;
