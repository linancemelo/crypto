"use strict";(self["webpackChunkvue3_crypto"]=self["webpackChunkvue3_crypto"]||[]).push([[621],{4314:function(t,a,e){var s=e(6086),n=e(9669),o=e.n(n),r=e(6294);const c=(0,r.Z)();a["Z"]=(0,s.Q_)("crypto-datalist",{state:()=>({dataList:[]}),getters:{cryptoUSDT:t=>{const a=t.dataList.filter((t=>"USDT"===t.s.slice(-4)));return a.forEach((t=>{const a=t.cs*t.c;t.totalMC=a;const e=(100*(t.c-t.o)/t.o).toFixed(2);t.percentChange=e})),a},sortData(){const t=[...this.cryptoUSDT].sort(((t,a)=>a.totalMC-t.totalMC)).slice(0,100);return t.forEach(((t,a)=>{t.ranking=a+1})),t},topTenMC(){return this.sortData.slice(0,10)}},actions:{getData(){c.isLoading=!0;const t="https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products";o().get(t).then((t=>{this.dataList=t.data.data,c.isLoading=!1}))}}})},7621:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=e(6252);function n(t,a,e,n,o,r){return(0,s.wg)(),(0,s.iD)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.sortData,((t,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},"1")))),128))])}var o=e(4314),r=e(6086),c=e(2262),i={setup(){const t=(0,o.Z)(),{sortData:a}=(0,r.Jk)(t),{getData:e}=t;t.getData();const s=(0,c.iH)([]);return setTimeout((()=>{s.value=[...a.value].find((t=>"ETH"===t.b))}),1e3),{cryptoData:t,sortData:a,getData:e,datalist:s}}},u=e(3744);const l=(0,u.Z)(i,[["render",n]]);var p=l}}]);
//# sourceMappingURL=621.84583329.js.map