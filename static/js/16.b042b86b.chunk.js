(this.webpackJsonpmarketplace=this.webpackJsonpmarketplace||[]).push([[16],{684:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n="0xe2Ca0a1A291f1b40406ea39cc095d90cfc4d393D",r="0xa81ab2d03b9e3a62bdbb837d417a5e221f754e14";t.c=[{name:"Pink Spider",metadata:"tier-NFT-base-dark-chocolate.json",description:"Laws are spider webs through which the big flies pass and the little ones get caught. Honore de Balzac",previewImage:"pink-spider-min.png",originalImage:"https://gateway.pinata.cloud/ipfs/QmZRVNLGYbjh2DaPuqcaQi51wXSjaxzGjAg24WviM5N8Tj",fileType:"png",blurImage:"",sortOrder:0,nftId:100,tokenAmount:10,tokenSupply:2222,nftFarmContract:"0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB",nftContract:"0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392",rarity:"Base"},{name:"Pink Fox",metadata:"tier-NFT-base-main-nopaint.json",description:"A fox is a wolf who sends flower. - Ruth Brown",previewImage:"pink-fox-min.png",originalImage:"https://gateway.pinata.cloud/ipfs/QmeDaRUcV3bp5oa6juNYYrV9G7o2zcKFcrRBJmPJxe6BQL",fileType:"png",blurImage:"",sortOrder:1,nftId:101,tokenAmount:10,tokenSupply:2222,nftFarmContract:"0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB",nftContract:"0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392",rarity:"Base"},{name:"Pink Bunny",metadata:"tier-NFT-base-marble.json",description:"I'm nutty bunny number two. I love me and I love you.",previewImage:"pink-bunny-min.png",originalImage:"https://gateway.pinata.cloud/ipfs/QmWh9xNZvyhzQWFp4xFEjbBBXPBuZhYnQufL2HwRBae9Gn",fileType:"png",blurImage:"",sortOrder:2,nftId:102,tokenAmount:10,tokenSupply:2222,nftFarmContract:"0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB",nftContract:"0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392",rarity:"Base"},{name:"Pink Dragon",metadata:"",description:"Everyone wants to live in a fairy tale, but don\u2019t forget there are dragons in those stories.",previewImage:"pink-dragon-min.png",originalImage:"https://gateway.pinata.cloud/ipfs/QmUBgkzR5rSLiWH9pgDACayjAQLcCfB8Csn81PVbTdB86t",fileType:"png",blurImage:"",sortOrder:3,nftId:103,tokenAmount:100,tokenSupply:666,nftFarmContract:"0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB",nftContract:"0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392",rarity:"Base"},{name:"Pink B&B",metadata:"",description:"Cheer the bull, or cheer the bear; cheer both, and you will be trampled and eaten. - Robert Jordan",previewImage:"bull-and-bear-min.png",originalImage:"https://gateway.pinata.cloud/ipfs/QmQ8MkJZzAQYNnUmzVXFmBQAZTXSjjvdvGVF3f16HP7LLW",fileType:"png",blurImage:"",sortOrder:4,nftId:104,tokenAmount:100,tokenSupply:666,nftFarmContract:"0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB",nftContract:"0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392",rarity:"Base"}]},793:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(15),s=a(26),i=a(0),o=a(688),l=a(68),d=a(684),b=a(175),u=a(698),m=a.n(u),p=a(16),f=a(2),j=function(e){var t=e.nft,a=e.currentTab,n=Object(i.useState)({isLoading:!1,isOpen:!1,nftCount:0,nftBurnCount:0}),r=Object(s.a)(n,2),c=r[0],o=r[1];console.log("state...",c.isOpen);Object(l.m)().account;var d=function(){console.log("state",c.isOpen),c.isOpen,o((function(e){return Object(p.a)(Object(p.a)({},e),{},{isOpen:!e.isOpen})}))};return Object(f.jsxs)("div",{className:"cblock",children:[Object(f.jsx)("a",{href:"/shibari-detail/".concat(t.tradeId),children:Object(f.jsx)("img",{src:"/images/nfts/".concat(t.previewImage),alt:t.name,className:"img-fluid"})}),Object(f.jsx)("div",{className:"cblock-content",children:Object(f.jsxs)("div",{className:"cblock-headwrap",children:[Object(f.jsx)("a",{href:"/shibari-detail/".concat(t.tradeId),children:Object(f.jsxs)("div",{className:"cblock-lefthead",children:[Object(f.jsx)("h6",{className:"inner-title",children:t.name}),Object(f.jsx)("p",{children:t.authorName})]})}),"owned"===a&&Object(f.jsxs)("div",{className:"owdetails-head",children:[Object(f.jsx)("i",{children:Object(f.jsx)("img",{src:"/assets/images/arrow-downsm.svg",className:"arrow-icon ".concat(c.isOpen?"active":""),alt:"arrow"})}),Object(f.jsx)("span",{className:"details-text",onClick:d,onKeyDown:d,role:"presentation",children:" Details "})]}),c.isOpen&&Object(f.jsx)("div",{className:"details-answer-new",children:t.description})]})})]})},h=function(e){var t=e.data,a=e.currentTab;return Object(f.jsx)("div",{className:"row",children:m()(t,"sortOrder").map((function(e){return Object(f.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(f.jsx)(j,{nft:e,currentTab:a})},e.nftId)}))})},g=(a(43),a(76)),O=a(695),x=(a(687),function(e){var t=O;return Object(g.a)(t,d.b,e)});t.default=function(){var e=Object(l.m)().account,t=e?"".concat(e.substring(0,4),"...").concat(e.substring(e.length-4)):null,a=Object(i.useState)([]),n=Object(s.a)(a,2),u=n[0],m=n[1],p=Object(i.useState)("owned"),j=Object(s.a)(p,2),g=j[0],O=j[1],v=Object(i.useState)(!1),w=Object(s.a)(v,2),A=w[0],k=w[1],I=Object(i.useCallback)(Object(c.a)(r.a.mark((function t(){var a,n,s=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.length>0&&void 0!==s[0]?s[0]:"";try{k(!0),a=x(),n=[],d.c.forEach(function(){var t=Object(c.a)(r.a.mark((function t(c){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=[],!e){t.next=5;break}return t.next=4,a.methods.getTradesByNftIdAndUser(e,c.nftId).call();case 4:s=t.sent;case 5:Object(o.isArray)(s)&&s.length>0&&s.forEach((function(e){n.push(B(parseInt(e,10),c.nftId))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),m(n),setTimeout((function(){k(!1)}),1e3)}catch(i){console.log("error"),console.error(i)}case 2:case"end":return t.stop()}}),t)}))),[e]),y=Object(i.useCallback)(Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{k(!0),a=x(),n=[],d.c.forEach(function(){var t=Object(c.a)(r.a.mark((function t(c){var s,i,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=[],i=[],l=[],!e){t.next=11;break}return t.next=6,a.methods.getTradesByNftIdAndUser(e,c.nftId).call();case 6:return s=t.sent,t.next=9,a.methods.getListOpenTradesByNftId(c.nftId).call();case 9:i=t.sent,l=s.filter((function(e){return i.includes(e)}));case 11:Object(o.isArray)(l)&&l.length>0&&l.forEach((function(e){n.push(B(parseInt(e,10),c.nftId))}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),m(n),setTimeout((function(){k(!1)}),1e3)}catch(s){console.log("error"),console.error(s)}case 1:case"end":return t.stop()}}),t)}))),[e]),N=function(e){O(e)},B=function(e,t){try{var a="/new-detail/".concat(t),n=d.c.filter((function(e){return t===e.nftId})).map((function(e){return e.previewImage})),r=d.c.filter((function(e){return t===e.nftId})).map((function(e){return e.name})),c=d.c.filter((function(e){return t===e.nftId})).map((function(e){return e.description}));return{tradeId:e,name:r[0]||"",description:c[0]||"",previewImage:n[0]||"",nftDetailLink:a,nftId:t}}catch(s){return null}};return Object(i.useEffect)((function(){"owned"===g?I():"listed"===g&&(m([]),y())}),[I,y,g]),Object(f.jsx)("section",{className:"vcollectionsec",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-sm-12 col-md-12 mb-5",children:Object(f.jsxs)("div",{className:"nfthead",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"assets/images/Ellipse.png",alt:"eclipse",className:"img-fluid"})}),Object(f.jsxs)("div",{className:"nftname",children:[Object(f.jsx)("h5",{className:"inner-title",children:t}),Object(f.jsxs)("span",{children:[u.length," NFT(s) in Account"]})]})]})})}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-sm-12 col-md-12",children:[Object(f.jsxs)("ul",{className:"bigtab nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[Object(f.jsx)("li",{className:"nav-item",role:"presentation",children:Object(f.jsx)("button",{className:"nav-link bigtablink ".concat("owned"===g?"active":""),id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#woed-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",onClick:function(){return N("owned")},children:"OWNED"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("button",{className:"nav-link bigtablink ".concat("listed"===g?"active":""),type:"button",onClick:function(){return N("listed")},children:"LISTED"})})]}),Object(f.jsx)("div",{className:"big-tabcontent tab-content",id:"pills-tabContent",children:Object(f.jsx)("div",{className:"tab-pane fade show active",id:"woed-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:A?Object(f.jsx)(b.a,{}):Object(f.jsx)(h,{data:u,currentTab:g})})})]})})]})})}}}]);
//# sourceMappingURL=16.b042b86b.chunk.js.map