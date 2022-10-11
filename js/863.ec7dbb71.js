"use strict";(self["webpackChunkvue3_crypto"]=self["webpackChunkvue3_crypto"]||[]).push([[863],{7536:function(a,t,s){s(7658);var c=s(6086),e=s(9669),l=s.n(e),n=s(6294);const i=(0,n.Z)();t["Z"]=(0,c.Q_)("wallet-data",{state:()=>({stockList:JSON.parse(localStorage.getItem("stock"))||[],dataList:[]}),getters:{currentStock:a=>{const t=a.dataList.filter((a=>"USDT"===a.s.slice(-4))),s=a.stockList.map((function(a){const s=t.findIndex((t=>t.b===a.abb));return a.price=Number(t[s].c),a}));return s},currentValue(){const a=this.currentStock.reduce(((a,t)=>a+t.price),0);return a},covertToBtc(a){const t=Number(a.dataList.filter((a=>"BTCUSDT"===a.s))[0].c),s=(this.currentValue/t).toFixed(10);return s}},actions:{sendCount(a,t,s){if(t>0){i.isLoading=!0;const c=this.stockList.findIndex((t=>t.abb===a));console.log(c);const e={title:s,abb:a,count:t,price:0};-1===c?this.stockList.push(e):this.stockList[c].count+=e.count,localStorage.setItem("stock",JSON.stringify(this.stockList)),this.stockList=JSON.parse(localStorage.getItem("stock")),setTimeout((()=>{i.isLoading=!1,i.pushMessage({style:"success",title:"購買成功",content:`已購買${s}(${a}) ${t}顆 `})}),500)}},getCurrentValue(){const a="https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products";l().get(a).then((a=>{this.dataList=a.data.data}))}}})},3129:function(a,t,s){s.d(t,{Z:function(){return w}});var c=s(6252);const e=a=>((0,c.dD)("data-v-1f6aa3c5"),a=a(),(0,c.Cn)(),a),l={class:"footer"},n={class:"container py-3"},i={class:"d-flex justify-content-between text-light"},o={class:"d-md-flex p-0 m-0 dnone"},r={class:"nav-item me-3"},d=(0,c.Uk)("回首頁"),v={class:"nav-item me-3"},u=(0,c.Uk)("所有產品"),b={class:"nav-item"},f=(0,c.Uk)("關於我們"),m=(0,c.uE)('<ul class="d-flex p-0 m-0 icon-ul" data-v-1f6aa3c5><li class="nav-item mx-2" data-v-1f6aa3c5><a href="https://www.facebook.com/hexschool/" class="nav-link pt-1" data-v-1f6aa3c5><i class="bi bi-facebook" data-v-1f6aa3c5></i></a></li><li class="nav-item mx-2" data-v-1f6aa3c5><a href="https://www.instagram.com/" class="nav-link pt-1" data-v-1f6aa3c5><i class="bi bi-instagram" data-v-1f6aa3c5></i></a></li><li class="nav-item mx-2" data-v-1f6aa3c5><a href="https://github.com/linancemelo" class="nav-link pt-1" data-v-1f6aa3c5><i class="bi bi-github" data-v-1f6aa3c5></i></a></li></ul>',1),_=e((()=>(0,c._)("div",{class:"d-flex justify-content-between text-light fs-8 mt-2"},[(0,c._)("p",{class:"mb-md-2 copyright"}," Copyright © 2022 LINANCE INC. Taipei Taiwan "),(0,c._)("p",{class:"mb-md-2 dnone"},"本網站僅提供個人作品使用，無商業用途。")],-1)));function p(a,t,s,e,p,g){const k=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("footer",l,[(0,c._)("div",n,[(0,c._)("div",i,[(0,c._)("ul",o,[(0,c._)("li",r,[(0,c.Wm)(k,{to:"/",class:"nav-link pt-2"},{default:(0,c.w5)((()=>[d])),_:1})]),(0,c._)("li",v,[(0,c.Wm)(k,{to:"/market",class:"nav-link pt-2"},{default:(0,c.w5)((()=>[u])),_:1})]),(0,c._)("li",b,[(0,c.Wm)(k,{to:"/",class:"nav-link pt-2"},{default:(0,c.w5)((()=>[f])),_:1})])]),m]),_])])}var g={},k=s(3744);const h=(0,k.Z)(g,[["render",p],["__scopeId","data-v-1f6aa3c5"]]);var w=h},3298:function(a,t,s){s.d(t,{Z:function(){return T}});var c=s(6252);const e=a=>((0,c.dD)("data-v-0abf3ccb"),a=a(),(0,c.Cn)(),a),l={class:"navbar navbar-expand-lg"},n={class:"container-fluid"},i=e((()=>(0,c._)("i",{class:"bi bi-currency-exchange"},null,-1))),o=(0,c.Uk)(" LINANCE"),r=e((()=>(0,c._)("button",{class:"menu-btn btn",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,c._)("i",{class:"bi bi-list"})],-1))),d={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},v=(0,c.uE)('<div class="offcanvas-header" data-v-0abf3ccb><h5 class="offcanvas-title" id="offcanvasNavbarLabel" data-v-0abf3ccb><i class="bi bi-currency-exchange" data-v-0abf3ccb></i> LINANCE</h5><button type="button" class="btn fw-bold text-white" data-bs-dismiss="offcanvas" aria-label="Close" data-v-0abf3ccb><i class="bi bi-x-lg" data-v-0abf3ccb></i></button></div>',1),u={class:"offcanvas-body"},b={class:"navbar-nav justify-content-end flex-grow-1"},f={class:"nav-item"},m=e((()=>(0,c._)("i",{class:"bi bi-bank2 align-self-center me-2"},null,-1))),_=(0,c.Uk)("市場"),p={class:"nav-item"},g=e((()=>(0,c._)("i",{class:"bi bi-wallet-fill align-self-center me-2"},null,-1))),k=(0,c.Uk)("錢包"),h=(0,c.uE)('<li class="nav-item" data-v-0abf3ccb><a class="nav-link" href="#" data-v-0abf3ccb><i class="bi bi-bar-chart-fill align-self-center me-2" data-v-0abf3ccb></i>股市</a></li><li class="nav-item" data-v-0abf3ccb><a class="nav-link" href="#" data-v-0abf3ccb><i class="bi bi-currency-dollar align-self-center me-2" data-v-0abf3ccb></i>外匯</a></li>',2),w=e((()=>(0,c._)("li",{class:"nav-item dropdown manage-money"},[(0,c._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"offcanvasNavbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,c._)("i",{class:"bi bi-cash-coin align-self-center me-2"}),(0,c.Uk)("理財 ")]),(0,c._)("ul",{class:"dropdown-menu border-0","aria-labelledby":"offcanvasNavbarDropdown"},[(0,c._)("li",null,[(0,c._)("a",{class:"dropdown-item",href:"#"},"流動性挖礦")]),(0,c._)("li",null,[(0,c._)("a",{class:"dropdown-item",href:"#"},"雙幣理財")]),(0,c._)("li",null,[(0,c._)("a",{class:"dropdown-item",href:"#"},"幣安礦池")]),(0,c._)("li",null,[(0,c._)("a",{class:"dropdown-item",href:"#"},"ETH 2.0")])])],-1))),y={class:"nav-item"},x=e((()=>(0,c._)("i",{class:"bi bi-chat-dots-fill align-self-center me-2"},null,-1))),L=(0,c.Uk)("關於我們");function N(a,t,s,e,N,C){const S=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("nav",l,[(0,c._)("div",n,[(0,c.Wm)(S,{to:{name:"home"},class:"navbar-brand ms-1 fs-6"},{default:(0,c.w5)((()=>[i,o])),_:1}),r,(0,c._)("div",d,[v,(0,c._)("div",u,[(0,c._)("ul",b,[(0,c._)("li",f,[(0,c.Wm)(S,{to:{name:"market"},class:"nav-link active","aria-current":"page"},{default:(0,c.w5)((()=>[m,_])),_:1})]),(0,c._)("li",p,[(0,c.Wm)(S,{to:{name:"wallet"},class:"nav-link",href:"#"},{default:(0,c.w5)((()=>[g,k])),_:1})]),h,w,(0,c._)("li",y,[(0,c.Wm)(S,{class:"nav-link",to:"/about"},{default:(0,c.w5)((()=>[x,L])),_:1})])])])])])])}var C={},S=s(3744);const D=(0,S.Z)(C,[["render",N],["__scopeId","data-v-0abf3ccb"]]);var T=D},5863:function(a,t,s){s.r(t),s.d(t,{default:function(){return W}});s(7658);var c=s(6252),e=s(3577),l=s(9963);const n=a=>((0,c.dD)("data-v-1c00c020"),a=a(),(0,c.Cn)(),a),i={class:"wallet"},o={class:"balance"},r=(0,c.uE)('<div class="info" data-v-1c00c020><div class="img" data-v-1c00c020><img src="https://ppt.cc/fwNSEx@.png" class="img-fluid" alt="" data-v-1c00c020></div><div class="name" data-v-1c00c020>Liang Melo</div></div><h4 data-v-1c00c020><i class="bi bi-eye-fill" data-v-1c00c020></i>總資產估值</h4>',2),d={class:"money"},v={class:"money-value"},u=n((()=>(0,c._)("i",{class:"bi bi-water"},null,-1))),b=n((()=>(0,c._)("div",{class:"option"},[(0,c._)("button",{class:"btn"},"儲值"),(0,c._)("button",{class:"btn"},"提現"),(0,c._)("button",{class:"btn"},"轉帳")],-1))),f={class:"stock-container"},m={class:"stock"},_=n((()=>(0,c._)("h4",null,"庫存明細",-1))),p=["onClick"],g={class:"left"},k={class:"logo"},h=["src"],w={class:"title"},y={class:"main"},x={class:"sec"},L={class:"right"},N={class:"main"},C={class:"sec"};function S(a,t,s,n,S,D){const T=(0,c.up)("Navbar"),U=(0,c.up)("Footer");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(T),(0,c._)("div",null,[(0,c._)("div",i,[(0,c._)("div",o,[r,(0,c._)("div",d,[(0,c._)("div",v,[(0,c.Uk)((0,e.zw)(n.covertToBtc)+"BTC ",1),(0,c._)("span",null,[u,(0,c.Uk)(" $"+(0,e.zw)(a.$filters.currency(n.currentValue)),1)])]),b])])]),(0,c._)("div",f,[(0,c._)("div",m,[_,(0,c._)("ul",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.currentStock,((t,s)=>((0,c.wg)(),(0,c.iD)("li",{key:s,onClick:(0,l.iM)((s=>a.$router.push(`/trade/USDT_${t.title}`)),["prevent"])},[(0,c._)("div",g,[(0,c._)("div",k,[(0,c._)("img",{src:`//logo.chainbit.xyz/${t.abb.toLowerCase()}`,class:"img-fluid",alt:""},null,8,h)]),(0,c._)("div",w,[(0,c._)("div",y,(0,e.zw)(t.title),1),(0,c._)("div",x,(0,e.zw)(t.abb),1)])]),(0,c._)("div",L,[(0,c._)("div",N,(0,e.zw)(t.count),1),(0,c._)("div",C,"$"+(0,e.zw)(t.price),1)])],8,p)))),128))])])])]),(0,c.Wm)(U)],64)}var D=s(3298),T=s(3129),U=s(7536),I=s(6086),Z={components:{Navbar:D.Z,Footer:T.Z},setup(){const a=(0,U.Z)(),{stockList:t,currentStock:s,currentValue:c,covertToBtc:e}=(0,I.Jk)(a),{getCurrentValue:l}=a;return a.getCurrentValue(),{stockList:t,currentStock:s,getCurrentValue:l,currentValue:c,covertToBtc:e}}},E=s(3744);const V=(0,E.Z)(Z,[["render",S],["__scopeId","data-v-1c00c020"]]);var W=V}}]);
//# sourceMappingURL=863.ec7dbb71.js.map