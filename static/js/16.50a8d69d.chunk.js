(this["webpackJsonpalife-frontend-farms"]=this["webpackJsonpalife-frontend-farms"]||[]).push([[16],{759:function(e,c,s){"use strict";s.r(c);var t=s(0),i=s(32),a=s(45),l=s(52),n=s(5),r=s.n(n),j=s(16),d=s(15),b=s(26),o=s(67),h=s(681),m=s(667),O="0xaBa054F1437aEBEa43fB0804b734DdB3F39FB62F",x=s(37),p=s(43),u=s(84),v=s(669),N=function(e){var c=v;return Object(u.a)(c,"0xA81Ab2D03b9E3a62BDBb837d417A5E221F754E14",e)},g=function(e){if(!e)return[];for(var c=[],s=e.length,t=0;t<s;t++)e[t]?c.push(Object(p.fromWei)(e[t].toString(),"ether")):c.push(0);return c},f=function(e){if(!e)return[];var c=[];if(!e)return[];for(var s=e.length,t=0;t<s;t++)e[t]?c.push(parseInt(e[t].toString())):c.push(0);return c},k=function(e){var c=[];if(!e)return[];for(var s=e.length,t=0;t<s;t++)e[t]?c.push(parseFloat(e[t].toString())):c.push(0);return c},y=s(1),A=Object(t.createContext)(null),B=function(e){var c=e.children,s=Object(t.useRef)(!0),i=Object(t.useState)({isInitialized:!1,hasClaimed:[],ownerById:[],countBurnt:0,startBlockNumber:0,endBlockNumber:0,totalSupplyDistributed:0,currentDistributedSupply:0,balanceOf:0,nftMap:{},allowMultipleClaims:!0,rarity:"",priceMultiplier:0,maxMintPerNft:0,tokenPerBurn:0,amounts:[],maxMintByNft:[],prices:[],myMints:[]}),n=Object(b.a)(i,2),u=n[0],v=n[1],B=Object(o.m)().account,V=Object(h.a)(),w=u.isInitialized;Object(t.useEffect)((function(){(function(){var e=Object(d.a)(r.a.mark((function e(){var c,s,t,i,a,l,n,d,o,h,u,N,g,f,k,y,A,B,V,w,S,D;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.a)(m,[{address:O,name:"startBlockNumber"},{address:O,name:"endBlockNumber"},{address:O,name:"countBurnt"},{address:O,name:"totalSupplyDistributed"},{address:O,name:"currentDistributedSupply"},{address:O,name:"allowMultipleClaims"},{address:O,name:"rarity"},{address:O,name:"priceMultiplier"},{address:O,name:"maxMintPerNft"},{address:O,name:"tokenPerBurn"}]);case 3:c=e.sent,s=Object(b.a)(c,10),t=s[0],i=s[1],a=s[2],l=s[3],n=s[4],d=s[5],o=s[6],h=s[7],u=s[8],N=s[9],g=Object(b.a)(t,1),f=g[0],k=Object(b.a)(i,1),y=k[0],A=Object(b.a)(a,1),B=A[0],V=Object(b.a)(l,1),w=V[0],S=Object(b.a)(n,1),D=S[0],v((function(e){return Object(j.a)(Object(j.a)({},e),{},{isInitialized:!0,countBurnt:B.toNumber(),startBlockNumber:f.toNumber(),endBlockNumber:y.toNumber(),currentDistributedSupply:D.toNumber(),totalSupplyDistributed:w.toNumber(),allowMultipleClaims:d[0],rarity:o[0].toString(),priceMultiplier:parseFloat(h[0].toString()),maxMintPerNft:parseInt(u[0].toString()),tokenPerBurn:(c=N[0],c?parseFloat(Object(p.fromWei)(c.toString(),"ether")):0)});var c})),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.error("an error occured",e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}})()()}),[w,v]),Object(t.useEffect)((function(){var e=function(){var e=Object(d.a)(r.a.mark((function e(){var c,s,t,i,n,o,h,p,u,y,A,V,w,S;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=N(),e.next=4,Object(x.a)(m,[{address:O,name:"getMinted",params:[B]}]);case 4:return s=e.sent,t=s[0][0],i=f(s[0][1]),n=s[0][2],o=k(s[0][3]),h=g(s[0][4]),p=k(s[0][5]),e.next=13,c.methods.balanceOf(B).call();case 13:if(u=e.sent,y={},!(u>0)){e.next=23;break}for(A=function(){var e=Object(d.a)(r.a.mark((function e(s){var t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.tokenOfOwnerByIndex(B,s).call();case 3:return t=e.sent,e.next=6,c.methods.getBunnyId(t).call();case 6:return i=e.sent,e.abrupt("return",[parseInt(i,10),parseInt(t,10)]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(c){return e.apply(this,arguments)}}(),V=[],w=0;w<u;w++)V.push(A(w));return e.next=21,Promise.all(V);case 21:S=e.sent,y=S.reduce((function(e,c){if(!c)return e;var s=Object(b.a)(c,2),t=s[0],i=s[1];return Object(j.a)(Object(j.a)({},e),{},Object(a.a)({},t,e[t]?[].concat(Object(l.a)(e[t]),[i]):[i]))}),{});case 23:v((function(e){return Object(j.a)(Object(j.a)({},e),{},{isInitialized:!0,hasClaimed:t,ownerById:n,balanceOf:u,nftMap:y,amounts:i,maxMintByNft:o,prices:h,myMints:p})})),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.error("an error occured",e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(d.a)(r.a.mark((function e(){var c,s,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.a)(m,[{address:O,name:"getMinted",params:["0x0000000000000000000000000000000000000000"]}]);case 3:c=e.sent,s=c[0][0],t=f(c[0][1]),v((function(e){return Object(j.a)(Object(j.a)({},e),{},{isInitialized:!0,hasClaimed:s,amounts:t})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("an error occured",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();B?e():c()}),[w,B,v]),Object(t.useEffect)((function(){return function(){s.current=!1}}),[s]);var S=V<=u.endBlockNumber;return Object(y.jsx)(A.Provider,{value:Object(j.a)(Object(j.a)({},u),{},{canBurnNft:S,getTokenIds:function(e){return u.nftMap[e]},reInitialize:function(){s.current&&v((function(e){return Object(j.a)(Object(j.a)({},e),{},{isInitialized:!1})}))}}),children:c})};c.default=function(){return Object(y.jsx)(B,{children:Object(y.jsxs)("section",{className:"vcollectionsec",children:[Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-sm-12 col-md-12 mb-5 vchead",children:[Object(y.jsx)("h3",{children:"VLAD NFT Facts"}),Object(y.jsx)("div",{className:"vctab-wrap",children:Object(y.jsxs)("ul",{className:"vctab nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link vclink active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"ALL"})}),Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link vclink",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile",children:"FOR SALE"})}),Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link vclink",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact",children:"BID"})})]})})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-sm-12 col-md-12",children:[Object(y.jsx)("div",{className:"pricefilterwrap",children:Object(y.jsxs)("ul",{className:"nav nav-pills pricefilterpills mb-3",id:"pills-tab",role:"tablist",children:[Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link pricelink active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#price-lowest",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Price - Lowest"})}),Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link pricelink",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#price-highest",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Price - Highest"})}),Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link pricelink",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#rarity-rare",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"Rarity - Rare"})}),Object(y.jsx)("li",{className:"nav-item",role:"presentation",children:Object(y.jsx)("button",{className:"nav-link pricelink",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#rarity-common",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"Rarity - Common"})})]})}),Object(y.jsx)("div",{className:"vc-filter vc-explore",children:Object(y.jsx)("ul",{className:"nav vc-nav nav-pills",children:Object(y.jsxs)("li",{className:"nav-item vcdropdown pricedropdown dropdown",children:[Object(y.jsxs)(i.b,{className:"nav-link vcdropdown-toggle dropdown-toggle dropbtn","data-bs-toggle":"dropdown",to:"/",role:"button","aria-expanded":"false",children:["Filter ",Object(y.jsx)("img",{src:"assets/images/settings-filter.svg",alt:"filter-icon",className:"img-fluid"})]}),Object(y.jsxs)("div",{className:"dropdown-content",children:[Object(y.jsx)("p",{children:"Format"}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"GIF"})]}),Object(y.jsx)("div",{className:"count",children:"23"})]}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"JPG"})]}),Object(y.jsx)("div",{className:"count",children:"1009"})]}),Object(y.jsx)("hr",{className:"seperator"}),Object(y.jsx)("p",{children:"Rarity"}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Base"})]}),Object(y.jsx)("div",{className:"count",children:"6,666"})]}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Rare"})]}),Object(y.jsx)("div",{className:"count",children:"1,998"})]}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Epic"})]}),Object(y.jsx)("div",{className:"count",children:"198"})]}),Object(y.jsxs)(i.b,{to:"/",children:[Object(y.jsxs)("div",{className:"form-check checkblock",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Legendary"})]}),Object(y.jsx)("div",{className:"count",children:"18"})]})]})]})})})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"tab-content pricetabcontent",id:"pills-tabContent",children:[Object(y.jsx)("div",{className:"tab-pane fade show active",id:"price-lowest",role:"tabpanel","aria-labelledby":"pills-home-tab",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vitruvian.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vladtoken.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/bokvlad.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]})}),Object(y.jsx)("div",{className:"tab-pane fade",id:"price-highest",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:"Price - Highest"}),Object(y.jsx)("div",{className:"tab-pane fade",id:"rarity-rare",role:"tabpanel","aria-labelledby":"pills-contact-tab",children:"Rarity - Rare"}),Object(y.jsx)("div",{className:"tab-pane fade",id:"rarity-common",role:"tabpanel","aria-labelledby":"pills-contact-tab",children:"Rarity - Common"})]})})]}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"ctab-content tab-content",id:"pills-tabContent",children:[Object(y.jsxs)("div",{className:"tab-pane fade show active ctabpane",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vitruvian.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vladtoken.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/bokvlad.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img4.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img5.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img6.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img7.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img8.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img9.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]})]}),Object(y.jsxs)("div",{className:"tab-pane fade ctabpane",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vitruvian.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/vladtoken.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/bokvlad.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img4.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img5.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img6.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]})]}),Object(y.jsxs)("div",{className:"tab-pane fade ctabpane",id:"pills-contact","aria-labelledby":"pills-contact-tab",children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img4.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img5.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img6.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img7.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img8.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vlad Token"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(y.jsxs)("div",{className:"vcblock",children:[Object(y.jsx)("img",{src:"assets/images/img9.png",alt:"Vitruvian Androgyne",className:"img-fluid"}),Object(y.jsxs)("div",{className:"vcblockhead",children:[Object(y.jsx)("h6",{children:"Vitruvian Androgyne"}),Object(y.jsxs)("p",{children:["By ",Object(y.jsx)(i.b,{to:"https://twitter.com/Sushinobi_nft",children:"Sushinobi"})]}),Object(y.jsxs)("div",{className:"vcblock-smcontent",children:[Object(y.jsx)("p",{children:"Auction 2/6"}),Object(y.jsxs)("p",{children:["Highest Bid ",Object(y.jsx)("span",{className:"b",children:"100 VLAD "}),Object(y.jsx)("span",{className:"aucprice",children:"$56.49"})]})]})]})]})})]})]})]})})})]})})}}}]);
//# sourceMappingURL=16.50a8d69d.chunk.js.map