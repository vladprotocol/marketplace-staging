(this.webpackJsonpmarketplace=this.webpackJsonpmarketplace||[]).push([[14],{669:function(e,s,a){"use strict";a.d(s,"d",(function(){return d})),a.d(s,"c",(function(){return r})),a.d(s,"b",(function(){return j})),a.d(s,"a",(function(){return b})),a.d(s,"e",(function(){return o})),a.d(s,"f",(function(){return h}));var t=a(42),c=a(76),l=a(664),i=a(666),n=a(662),d=function(e){var s=i;return Object(c.a)(s,n.a,e)},r=function(e){var s=l;return Object(c.a)(s,n.b,e)},j=function(e){return e?parseFloat(Object(t.fromWei)(e.toString(),"ether")):0},b=function(e){if(!e)return[];for(var s=[],a=e.length,c=0;c<a;c++)e[c]?s.push(Object(t.fromWei)(e[c].toString(),"ether")):s.push(0);return s},o=function(e){if(!e)return[];var s=[];if(!e)return[];for(var a=e.length,t=0;t<a;t++)e[t]?s.push(parseInt(e[t].toString())):s.push(0);return s},h=function(e){var s=[];if(!e)return[];for(var a=e.length,t=0;t<a;t++)e[t]?s.push(parseFloat(e[t].toString())):s.push(0);return s}},761:function(e,s,a){"use strict";a.r(s);var t,c,l,i,n,d,r,j,b=a(4),o=a.n(b),h=a(15),m=a(26),x=a(0),O=a(28),p=a(39),u=a(59),v=a(662),N=a(66),g=a(13),f=a.n(g),y=(a(44),a(16),a(75)),w=a(7),A=a(124),L=a.n(A),D=a(663),V=a(675),k=a(2),C=(Object(w.e)(u.l)(t||(t=Object(y.a)(["\n  font-weight: 600;\n"]))),w.e.div(c||(c=Object(y.a)(["\n  margin-bottom: 16px;\n"])))),I=w.e.div(l||(l=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),S=(w.e.label(i||(i=Object(y.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),function(e){var s=e.nft,a=e.tokenIds,t=e.onSuccess,c=e.onDismiss,l=Object(x.useState)(!1),i=Object(m.a)(l,2),n=i[0],d=i[1],r=Object(x.useState)({address:"",tokenId:a[0],tradeId:s.tradeId}),j=Object(m.a)(r,2),b=j[0],O=(j[1],Object(x.useState)(null)),p=Object(m.a)(O,2),g=p[0],f=p[1],y=Object(D.a)(),w=Object(N.m)().account,A=Object(V.a)(v.b),S=function(){var e=Object(h.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(b.address)){e.next=6;break}f(y(999,"Please enter a valid wallet address")),e.next=9;break;case 6:return a=s.tradeId,e.next=9,A.methods.transfer(a,b.address).send({from:w}).on("sending",(function(){d(!0)})).on("receipt",(function(){c(),t()})).on("error",(function(){console.error(g),f("Unable to transfer NFT"),d(!1)}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(u.h,{title:y(999,"Buy now"),onDismiss:c,children:[Object(k.jsxs)(C,{children:[g&&Object(k.jsx)(u.l,{color:"failure",mb:"8px",children:g}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:["Your are buying ",Object(k.jsx)("span",{children:"Vlad Token"})]}),Object(k.jsx)("div",{className:"bidbox",children:Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("div",{className:"bidcontent",children:Object(k.jsxs)("div",{className:"vbid-details",children:[Object(k.jsx)("p",{children:"Ask price"}),Object(k.jsxs)("h6",{children:["0.55 BNB ",Object(k.jsx)("span",{className:"vladinput",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"$156.98"})}),Object(k.jsxs)("span",{children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE",Object(k.jsxs)("div",{className:"ctmtooltiptext",children:[Object(k.jsxs)("h6",{children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE"]}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:"A bonding curve is a mathematical curve that defines the relationship between the price and the supply of a given asset."}),Object(k.jsx)("p",{className:"text-deem",children:"After the sale of each NFT, the price of the next piece will automatically increase by a percentage calculated by the bonding curve."})]})]})]})]})})})})}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"amt-wrap",children:[Object(k.jsxs)("div",{className:"amt-title",children:[Object(k.jsx)("span",{children:"Your VLAD balance"}),Object(k.jsx)("span",{children:"Service fee (5%)"}),Object(k.jsx)("span",{children:"You will pay"})]}),Object(k.jsxs)("div",{className:"amt-bal",children:[Object(k.jsx)("span",{children:"86.001 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"})]})]}),Object(k.jsx)("div",{className:"alertnote",children:Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{src:"assets/images/alert-triangle.svg",alt:"alert icon"}),"Not enough funds"]})})]})]}),Object(k.jsxs)(I,{children:[Object(k.jsx)(u.b,{fullWidth:!0,variant:"secondary",onClick:c,children:y(462,"Cancel")}),Object(k.jsx)(u.b,{fullWidth:!0,onClick:S,disabled:!w||n||!b.address,children:y(464,"Buy now")})]})]})}),B=(Object(w.e)(u.l)(n||(n=Object(y.a)(["\n  font-weight: 600;\n"]))),w.e.div(d||(d=Object(y.a)(["\n  margin-bottom: 16px;\n"])))),T=w.e.div(r||(r=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Y=(w.e.label(j||(j=Object(y.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),function(e){var s=e.nft,a=e.tokenIds,t=e.onSuccess,c=e.onDismiss,l=Object(x.useState)(!1),i=Object(m.a)(l,2),n=i[0],d=i[1],r=Object(x.useState)({address:"",tokenId:a[0],tradeId:s.tradeId}),j=Object(m.a)(r,2),b=j[0],O=(j[1],Object(x.useState)(null)),p=Object(m.a)(O,2),g=p[0],f=p[1],y=Object(D.a)(),w=Object(N.m)().account,A=Object(V.a)(v.b),C=function(){var e=Object(h.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(b.address)){e.next=6;break}f(y(999,"Please enter a valid wallet address")),e.next=9;break;case 6:return a=s.tradeId,e.next=9,A.methods.transfer(a,b.address).send({from:w}).on("sending",(function(){d(!0)})).on("receipt",(function(){c(),t()})).on("error",(function(){console.error(g),f("Unable to transfer NFT"),d(!1)}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(u.h,{title:y(999,"Sell now"),onDismiss:c,children:[Object(k.jsxs)(B,{children:[g&&Object(k.jsx)(u.l,{color:"failure",mb:"8px",children:g}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:["Your are selling ",Object(k.jsx)("span",{children:"Vlad Token"})]}),Object(k.jsx)("div",{className:"bidbox",children:Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("div",{className:"bidcontent",children:Object(k.jsxs)("div",{className:"vbid-details",children:[Object(k.jsx)("p",{children:"Ask price"}),Object(k.jsxs)("h6",{children:["0.55 BNB ",Object(k.jsx)("span",{className:"vladinput",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"$156.98"})}),Object(k.jsxs)("span",{children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE",Object(k.jsxs)("div",{className:"ctmtooltiptext",children:[Object(k.jsxs)("h6",{children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE"]}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:"A bonding curve is a mathematical curve that defines the relationship between the price and the supply of a given asset."}),Object(k.jsx)("p",{className:"text-deem",children:"After the sale of each NFT, the price of the next piece will automatically increase by a percentage calculated by the bonding curve."})]})]})]})]})})})})}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"amt-wrap",children:[Object(k.jsxs)("div",{className:"amt-title",children:[Object(k.jsx)("span",{children:"Your VLAD balance"}),Object(k.jsx)("span",{children:"Service fee (5%)"}),Object(k.jsx)("span",{children:"You will pay"})]}),Object(k.jsxs)("div",{className:"amt-bal",children:[Object(k.jsx)("span",{children:"86.001 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"})]})]}),Object(k.jsx)("div",{className:"alertnote",children:Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{src:"assets/images/alert-triangle.svg",alt:"alert icon"}),"Not enough funds"]})})]})]}),Object(k.jsxs)(T,{children:[Object(k.jsx)(u.b,{fullWidth:!0,variant:"secondary",onClick:c,children:y(462,"Cancel")}),Object(k.jsx)(u.b,{fullWidth:!0,onClick:C,disabled:!w||n||!b.address,children:y(464,"Sell now")})]})]})}),M=a(669);s.default=function(){var e=Object(N.m)().account,s=Object(x.useState)(0),a=Object(m.a)(s,2),t=(a[0],a[1]),c=Object(x.useState)(0),l=Object(m.a)(c,2),i=l[0],n=l[1],d=Object(x.useState)(!1),r=Object(m.a)(d,2),j=r[0],b=r[1],g=Object(O.i)().id;Object(x.useEffect)((function(){(function(){var s=Object(h.a)(o.a.mark((function s(){var a,c,l,i,d;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=Object(M.c)(),s.next=3,a.methods.getTradeByTradeId(g).call();case 3:return c=s.sent,s.next=6,a.methods.nftSecondaryTradeInfo(g).call();case 6:if(l=s.sent,!e){s.next=15;break}return s.next=10,a.methods.getTradesByNftIdAndUser(e,Number(c[0])).call();case 10:i=s.sent,d=l.sellPrice,n(d),t(Number(c[0])),b(i.includes(g));case 15:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[g,e]);var y=v.c.filter((function(e){return 100===e.nftId}))[0],w=y.previewImage,A=function(){return!0},L=Object(u.n)(Object(k.jsx)(S,{nft:y,tokenIds:[1],onSuccess:A})),D=Object(m.a)(L,1)[0],V=Object(u.n)(Object(k.jsx)(Y,{nft:y,tokenIds:[1],onSuccess:A}));Object(m.a)(V,1)[0];return Object(k.jsx)("section",{className:"vcollectionsec",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-sm-12 col-md-12 mb-5 vchead",children:Object(k.jsxs)(p.b,{to:"/vlad-collection",className:"varrow-icon",children:[Object(k.jsx)("img",{src:"/assets/images/ArrowLeft.svg",alt:""}),"Vlad Collection"]})})}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(k.jsx)("div",{className:"details-img",children:Object(k.jsx)("img",{src:"/images/nfts/".concat(w),alt:"Vitruvian Androgyne",className:"img-fluid"})})}),Object(k.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(k.jsxs)("div",{className:"details-block",children:[Object(k.jsxs)("div",{className:"details-head",children:[Object(k.jsx)("div",{children:Object(k.jsx)("h6",{children:y.name})}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:Object(k.jsx)("img",{src:"/assets/images/staricon.svg",alt:"icon",className:"img-fluid"})})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:Object(k.jsx)("img",{src:"/assets/images/share-icon.svg",alt:"icon",className:"img-fluid"})})})]})]}),Object(k.jsx)("div",{className:"",children:Object(k.jsxs)("p",{children:["\u201c",y.description,"\u201d"]})}),Object(k.jsxs)("p",{className:"service-fee",children:["Service fee: ",Object(k.jsx)("span",{children:"5%"})]}),!j&&Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)(u.b,{className:"btn-link",fullWidth:!0,variant:"secondary",mt:"24px",onClick:D,children:"Buy Now"})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"buyvlad",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Buy now"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:["Your are buying ",Object(k.jsx)("span",{children:"Vlad Token"})]}),Object(k.jsx)("div",{className:"bidbox",children:Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("div",{className:"bidcontent",children:Object(k.jsxs)("div",{className:"vbid-details",children:[Object(k.jsx)("p",{children:"Ask price"}),Object(k.jsxs)("h6",{children:["0.55 BNB ",Object(k.jsx)("span",{className:"vladinput",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"$156.98"})}),Object(k.jsx)("span",{children:Object(k.jsxs)(p.b,{to:"/",className:"ctmtooltip",children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE",Object(k.jsxs)("div",{className:"ctmtooltiptext",children:[Object(k.jsxs)("h6",{children:[Object(k.jsx)("img",{src:"assets/images/upgraph.svg",alt:""}),"BONDING CURVE"]}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:"A bonding curve is a mathematical curve that defines the relationship between the price and the supply of a given asset."}),Object(k.jsx)("p",{className:"text-deem",children:"After the sale of each NFT, the price of the next piece will automatically increase by a percentage calculated by the bonding curve."})]})]})})]})]})})})})}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"amt-wrap",children:[Object(k.jsxs)("div",{className:"amt-title",children:[Object(k.jsx)("span",{children:"Your VLAD balance"}),Object(k.jsx)("span",{children:"Service fee (5%)"}),Object(k.jsx)("span",{children:"You will pay"})]}),Object(k.jsxs)("div",{className:"amt-bal",children:[Object(k.jsx)("span",{children:"86.001 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"})]})]}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-target":"#buynowtoggle","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:"Buy Now"})}),Object(k.jsx)("div",{className:"alertnote",children:Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{src:"assets/images/alert-triangle.svg",alt:"alert icon"}),"Not enough funds"]})})]})]})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"placeabid",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Place a Bid"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:["Your bid for ",Object(k.jsx)("span",{children:"Vitruvian Androgyne"})]}),Object(k.jsxs)("div",{className:"vladamount-wrap",children:[Object(k.jsx)("div",{className:"vbalance",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"0.0"})}),Object(k.jsx)("div",{className:"vladamount",children:Object(k.jsxs)("span",{children:["Vlad ",Object(k.jsxs)("span",{children:["($0.0)",Object(k.jsx)("img",{src:"/assets/images/vladsm.svg",alt:"vlad logo"})]})]})})]}),Object(k.jsxs)("div",{className:"amtrequired",children:["Must be at least ",Object(k.jsx)("span",{children:"100 VLAD ($56.49)"})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"amt-wrap",children:[Object(k.jsxs)("div",{className:"amt-title",children:[Object(k.jsx)("span",{children:"Your VLAD balance"}),Object(k.jsx)("span",{children:"Service fee (5%)"}),Object(k.jsx)("span",{children:"You will pay"})]}),Object(k.jsxs)("div",{className:"amt-bal",children:[Object(k.jsx)("span",{children:"86.001 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"})]})]}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-target":"#placeabid2","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:"Place a bid"})}),Object(k.jsx)("div",{className:"alertnote",children:Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{src:"/assets/images/alert-triangle.svg",alt:"alert icon"}),"Not enough funds"]})})]})]})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"placeabid2","aria-hidden":"true","aria-labelledby":"exampleModalToggleLabel2",tabIndex:-1,children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Place a Bid"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:["Your bid for ",Object(k.jsx)("span",{children:"Vitruvian Androgyne"})]}),Object(k.jsxs)("div",{className:"vladamount-wrap",children:[Object(k.jsx)("div",{className:"vbalance",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"0.0"})}),Object(k.jsx)("div",{className:"vladamount",children:Object(k.jsxs)("span",{children:["Vlad ",Object(k.jsxs)("span",{children:["($69.42)",Object(k.jsx)("img",{src:"/assets/images/vladsm.svg",alt:"vlad logo"})]})]})})]}),Object(k.jsxs)("div",{className:"amtrequired",children:["Must be at least ",Object(k.jsx)("span",{children:"100 VLAD ($56.49)"})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"amt-wrap",children:[Object(k.jsxs)("div",{className:"amt-title",children:[Object(k.jsx)("span",{children:"Your VLAD balance"}),Object(k.jsx)("span",{children:"Service fee (5%)"}),Object(k.jsx)("span",{children:"You will pay"})]}),Object(k.jsxs)("div",{className:"amt-bal",children:[Object(k.jsx)("span",{children:"86.001 VLAD"}),Object(k.jsx)("span",{children:"0.501 VLAD"}),Object(k.jsx)("span",{children:"169.501 VLAD"})]})]}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsx)("button",{type:"button",className:"btn btn-primary activebuy","data-bs-target":"#placeabid3","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:"Next Step"})}),Object(k.jsx)("div",{className:"additionalnote",children:Object(k.jsx)("p",{children:"5% fee will go to the artist and marketplace maintenance"})})]})]})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"placeabid3","aria-hidden":"true","aria-labelledby":"exampleModalToggleLabel2",tabIndex:-1,children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Place a Bid"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{className:"cwhite",children:"Approve "})," the transaction from your wallet to continue."]}),Object(k.jsx)("hr",{}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsxs)("button",{type:"button",className:"btn btn-primary cred btn-pending","data-bs-target":"#placeabid4","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:[Object(k.jsx)("i",{children:Object(k.jsx)("img",{src:"/assets/images/loader.svg",alt:"loader"})}),"PENDING APPROVAL"]})})]})]})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"placeabid4","aria-hidden":"true","aria-labelledby":"exampleModalToggleLabel2",tabIndex:-1,children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Place a Bid"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body",children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{className:"cwhite",children:"Sign "}),"and set your bid expiry time"]}),Object(k.jsx)("div",{className:"exptime",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",className:"expbtnactive",children:"3 Days"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:"7 Days"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:"30 Days"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:"1 Year"})})]})}),Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsxs)("p",{className:"cgrey",children:["Your bid will expire on ",Object(k.jsx)("span",{className:"expday",children:"Jul 12"})," ",Object(k.jsx)("span",{className:"exphour",children:" @ 23:34pm"})]}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{className:"cwhite",children:"You\u2019re placing a bid for 169.501 VLAD"}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsxs)("button",{type:"button",className:"btn btn-primary cred btn-pending","data-bs-target":"#placeabid5","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:[Object(k.jsx)("i",{children:Object(k.jsx)("img",{src:"/assets/images/loader.svg",alt:"loader"})}),"PLACE BID"]})}),Object(k.jsx)("p",{className:"cgrey",children:"When a bid is placed, your VLAD remains in your wallet. Vlad Finance marketplace smart contracts don't hold your VLAD. Keep it in your wallet if you want the bid to stay valid."})]})]})]})})}),Object(k.jsx)("div",{className:"ctm-modal modal fade",id:"placeabid5","aria-hidden":"true","aria-labelledby":"exampleModalToggleLabel2",tabIndex:-1,children:Object(k.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsxs)("div",{className:"modal-header",children:[Object(k.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Place a Bid"}),Object(k.jsx)("button",{type:"button",className:"btn-close ctm-btnclose","data-bs-dismiss":"modal","aria-label":"Close",children:"CANCEL"})]}),Object(k.jsxs)("div",{className:"modal-body success-body",children:[Object(k.jsx)("img",{src:"/assets/images/check-circle.svg",alt:"success icon"}),Object(k.jsx)("p",{children:"Your bid has been placed!"}),Object(k.jsxs)("p",{className:"cgrey",children:["Please keep ",Object(k.jsx)("span",{children:"[bid amount] "}),"available in your wallet for the bid to be valid."]}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:"Your bid will expire on Jul 12 @ 23:34pm"}),Object(k.jsx)("div",{className:"btn-bidwrap",children:Object(k.jsx)("button",{type:"button",className:"btn btn-primary activebuy","data-bs-target":"#transactionfailed","data-bs-toggle":"modal","data-bs-dismiss":"modal",children:"Done"})}),Object(k.jsx)("div",{className:"additionalnote",children:Object(k.jsxs)("p",{className:"cwhite",children:["Your bid will expire on ",Object(k.jsx)("span",{className:"expday",children:"Jul 12"})," ",Object(k.jsx)("span",{className:"exphour",children:" @ 23:34pm"})]})})]})]})})}),Object(k.jsxs)("div",{className:"creator-wrap",children:[Object(k.jsxs)("div",{className:"creator",children:[Object(k.jsx)("p",{children:"Creator"}),Object(k.jsx)(p.b,{to:"/",children:"Sushinobi"})]}),Object(k.jsxs)("div",{className:"crecollection",children:[Object(k.jsx)("p",{children:"COLLECTION"}),Object(k.jsx)(p.b,{to:"/",children:"Vlad Genesis"})]}),Object(k.jsx)("div",{className:"clear-fix"})]}),Object(k.jsxs)("div",{className:"smalltab",children:[Object(k.jsxs)("ul",{className:"smalltab nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[Object(k.jsx)("li",{className:"nav-item",role:"presentation",children:Object(k.jsx)("button",{className:"nav-link smtablink active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"DETAILS"})}),Object(k.jsx)("li",{className:"nav-item",role:"presentation",children:Object(k.jsx)("button",{className:"nav-link smtablink",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"OFFERS"})}),Object(k.jsx)("li",{className:"nav-item",role:"presentation",children:Object(k.jsx)("button",{className:"nav-link smtablink",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"HISTORY"})})]}),Object(k.jsxs)("div",{className:"sm-tabcontent tab-content",id:"pills-tabContent",children:[Object(k.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:Object(k.jsx)("table",{className:"table table-borderless tabtable",children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"tbldata-grey",children:"Token ID"}),Object(k.jsxs)("td",{children:["#",y.nftId]})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"tbldata-grey",children:"Edition"}),Object(k.jsx)("td",{children:"#2"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"tbldata-grey",children:"Rarity Tier"}),Object(k.jsx)("td",{children:y.rarity})]})]})})}),Object(k.jsx)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{className:"offer",children:[new f.a(i).div(new f.a(10).pow(18)).toFixed()," VLAD ",Object(k.jsx)("span",{children:"by"})," ",Object(k.jsx)(p.b,{to:"/",children:"0x1b12n10...n128"})]}),Object(k.jsxs)("p",{className:"time",children:[Object(k.jsx)("span",{children:"7/6/2021,"}),Object(k.jsx)("span",{children:"1:01 PM"})]})]})}),Object(k.jsx)("div",{className:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab",children:Object(k.jsx)("div",{className:"historytab",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{className:"thumb",children:Object(k.jsxs)("div",{className:"historylist",children:[Object(k.jsxs)("p",{className:"boldletter",children:["Bid accpeted ",Object(k.jsx)("span",{className:"whiteup",children:"10 VLAD"})]}),Object(k.jsxs)("p",{children:["By ",Object(k.jsx)("span",{children:Object(k.jsx)(p.b,{to:"/",children:"0x1b...6666 "})}),"at ",Object(k.jsx)("span",{children:"7/8/2021,"}),Object(k.jsx)("span",{children:" 9:55 PM"})]})]})}),Object(k.jsx)("li",{className:"mintlayer",children:Object(k.jsxs)("div",{className:"historylist",children:[Object(k.jsxs)("p",{className:"boldletter",children:["Bid ",Object(k.jsx)("span",{className:"whiteup",children:"10 VLAD"})]}),Object(k.jsxs)("p",{children:["By ",Object(k.jsx)("span",{children:Object(k.jsx)(p.b,{to:"/",children:"0x1b...6666 "})}),"at ",Object(k.jsx)("span",{children:"7/8/2021,"}),Object(k.jsx)("span",{children:" 9:55 PM"})]})]})}),Object(k.jsx)("li",{className:"mintlayer2",children:Object(k.jsxs)("div",{className:"historylist",children:[Object(k.jsxs)("p",{className:"boldletter",children:["Transfered to ",Object(k.jsx)(p.b,{to:"/",children:"Sushinobi"})]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{children:"7/8/2021,"}),Object(k.jsx)("span",{children:" 9:55 PM"})]})]})}),Object(k.jsx)("li",{className:"updown",children:Object(k.jsxs)("div",{className:"historylist",children:[Object(k.jsxs)("p",{className:"boldletter",children:["Minted by ",Object(k.jsx)(p.b,{to:"/",children:"Sushinobi"})]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{children:"7/8/2021,"}),Object(k.jsx)("span",{children:" 9:55 PM"})]})]})}),Object(k.jsx)("li",{className:"mintcircle",children:Object(k.jsxs)("div",{className:"historylist",children:[Object(k.jsxs)("p",{className:"boldletter",children:["Bid accpeted ",Object(k.jsx)("span",{className:"whiteup",children:"10 VLAD"})]}),Object(k.jsxs)("p",{children:["By ",Object(k.jsx)("span",{children:Object(k.jsx)(p.b,{to:"/",children:"0x1b...6666 "})}),"at ",Object(k.jsx)("span",{children:"7/8/2021,"}),Object(k.jsx)("span",{children:" 9:55 PM"})]})]})})]})})})]})]})]})})]})]})})}}}]);
//# sourceMappingURL=14.ec775475.chunk.js.map