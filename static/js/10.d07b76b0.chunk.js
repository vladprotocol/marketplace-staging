(this.webpackJsonpmarketplace=this.webpackJsonpmarketplace||[]).push([[10],{692:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return m}));var a=n(43),i=n(77),r=n(686),s=n(689),u=n(684),c=function(t){var e=s;return Object(i.a)(e,u.a,t)},l=function(t){var e=r;return Object(i.a)(e,u.b,t)},o=function(t){return t?parseFloat(Object(a.fromWei)(t.toString(),"ether")):0},p=function(t){if(!t)return[];for(var e=[],n=t.length,i=0;i<n;i++)t[i]?e.push(Object(a.fromWei)(t[i].toString(),"ether")):e.push(0);return e},d=function(t){if(!t)return[];var e=[];if(!t)return[];for(var n=t.length,a=0;a<n;a++)t[a]?e.push(parseInt(t[a].toString())):e.push(0);return e},m=function(t){var e=[];if(!t)return[];for(var n=t.length,a=0;a<n;a++)t[a]?e.push(parseFloat(t[a].toString())):e.push(0);return e}},696:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"contract NFT","name":"_nft","type":"address"},{"internalType":"contract IBEP20","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_tokenPerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"},{"internalType":"bool","name":"_allowMultipleClaims","type":"bool"},{"internalType":"string","name":"_rarity","type":"string"},{"internalType":"uint256","name":"_maxMintPerNft","type":"uint256"},{"internalType":"uint256","name":"_priceMultiplier","type":"uint256"},{"internalType":"uint8","name":"_min_index","type":"uint8"},{"internalType":"uint8","name":"_max_index","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NftBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"nftId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NftMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"allowMultipleClaims","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"countBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"ipfsHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"lastOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxMintPerNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"max_index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"min_index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"mint_by_nftId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minted","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintingManager","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract NFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"nftIdURIs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"numberOfNftIds","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownersOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"priceMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"price_by_nftId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rarity","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokenPerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getOwnersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getClaimedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getMinted","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getMintsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getMaxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"adminSetInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"adminChangeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"}],"name":"adminSetTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPerBurn","type":"uint256"}],"name":"adminSetTokenPerBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"adminSetBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"adminSetPriceByNftId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"},{"internalType":"uint256","name":"_maxAllowed","type":"uint256"}],"name":"adminSetMaxMintByNftId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_manager","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"adminSetMintingManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_priceMultiplier","type":"uint256"}],"name":"adminSetMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"adminSetAllowMultipleClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintPerNft","type":"uint256"}],"name":"adminSetMaxMintPerNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_min_index","type":"uint8"},{"internalType":"uint8","name":"_max_index","type":"uint8"}],"name":"adminSetMintingInterval","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},697:function(t,e,n){"use strict";var a=n(0),i=n(180);e.a=function(){return Object(a.useContext)(i.a)}},773:function(t,e){t.exports=function(){for(var t=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],e=[],n=0;n<35;n++)e[n]=7===n||12===n||17===n||22===n?"-":t[Math.floor(Math.random()*t.length-1)];return e.join("")}},783:function(t,e,n){"use strict";n.r(e);var a=n(4),i=n.n(a),r=n(16),s=n(15),u=n(26),c=n(0),l=n(14),o=n.n(l),p=n(68),d=n(684),m=n(179),y=n(693),b=n.n(y),f=n(773),j=n.n(f),h=n(39),O=n(2),v=function(t){var e=t.nft;return Object(O.jsxs)("div",{className:"vcblock",children:[Object(O.jsx)(h.b,{to:{pathname:"/vlad-detail/".concat(e.trade)},children:Object(O.jsx)("img",{src:"/images/nfts/".concat(e.previewImage),alt:e.name,className:"img-fluid"})}),Object(O.jsxs)("div",{className:"vcblockhead",children:[Object(O.jsx)(h.b,{to:"/vlad-detail/".concat(e.trade),children:Object(O.jsx)("h6",{className:"inner-title",children:e.name})}),Object(O.jsxs)("p",{children:["By ",Object(O.jsx)(h.b,{to:{pathname:e.authorTwitter},children:e.authorName})]}),Object(O.jsx)("div",{className:"vcblock-smcontent",children:Object(O.jsxs)("p",{children:["On Sell for ",Object(O.jsxs)("span",{className:"b",children:[new o.a(e.sellPrice).div(new o.a(10).pow(18)).toFixed()," ALIFE "]})]})})]})]})},x=function(t){var e=t.data,n=t.sortOrder;return Object(O.jsx)("div",{className:"row",children:b()(e,"sellPriceNum",["asc"===n?"asc":"desc"]).map((function(t){return Object(O.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(O.jsx)(v,{nft:t})},j()())}))})},T=n(45),k=n(51),w=n(697),M=n(696),N="0xaBa054F1437aEBEa43fB0804b734DdB3F39FB62F",g=n(36),I=n(692),_=Object(c.createContext)(null),S=function(t){var e=t.children,n=Object(c.useRef)(!0),a=Object(c.useState)({isInitialized:!1,hasClaimed:[],ownerById:[],countBurnt:0,startBlockNumber:0,endBlockNumber:0,totalSupplyDistributed:0,currentDistributedSupply:0,balanceOf:0,nftMap:{},allowMultipleClaims:!0,rarity:"",priceMultiplier:0,maxMintPerNft:0,tokenPerBurn:0,amounts:[],maxMintByNft:[],prices:[],myMints:[]}),l=Object(u.a)(a,2),o=l[0],d=l[1],m=Object(p.m)().account;console.log("account",m);var y=Object(w.a)(),b=o.isInitialized;Object(c.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(){var e,n,a,s,c,l,o,p,m,y,b,f,j,h,O,v,x,T,k,w,_,S;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.a)(M,[{address:N,name:"startBlockNumber"},{address:N,name:"endBlockNumber"},{address:N,name:"countBurnt"},{address:N,name:"totalSupplyDistributed"},{address:N,name:"currentDistributedSupply"},{address:N,name:"allowMultipleClaims"},{address:N,name:"rarity"},{address:N,name:"priceMultiplier"},{address:N,name:"maxMintPerNft"},{address:N,name:"tokenPerBurn"}]);case 3:e=t.sent,n=Object(u.a)(e,10),a=n[0],s=n[1],c=n[2],l=n[3],o=n[4],p=n[5],m=n[6],y=n[7],b=n[8],f=n[9],j=Object(u.a)(a,1),h=j[0],O=Object(u.a)(s,1),v=O[0],x=Object(u.a)(c,1),T=x[0],k=Object(u.a)(l,1),w=k[0],_=Object(u.a)(o,1),S=_[0],d((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,countBurnt:T.toNumber(),startBlockNumber:h.toNumber(),endBlockNumber:v.toNumber(),currentDistributedSupply:S.toNumber(),totalSupplyDistributed:w.toNumber(),allowMultipleClaims:p[0],rarity:m[0].toString(),priceMultiplier:parseFloat(y[0].toString()),maxMintPerNft:parseInt(b[0].toString()),tokenPerBurn:Object(I.b)(f[0])})})),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.error("an error occured",t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(){return t.apply(this,arguments)}})()()}),[b,d]),Object(c.useEffect)((function(){var t=function(){var t=Object(s.a)(i.a.mark((function t(){var e,n,a,c,l,o,p,y,b,f,j,h,O,v;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=Object(I.d)(),t.next=4,Object(g.a)(M,[{address:N,name:"getMinted",params:[m]}]);case 4:return n=t.sent,a=n[0][0],c=Object(I.e)(n[0][1]),l=n[0][2],o=Object(I.f)(n[0][3]),p=Object(I.a)(n[0][4]),y=Object(I.f)(n[0][5]),t.next=13,e.methods.balanceOf(m).call();case 13:if(b=t.sent,f={},!(b>0)){t.next=23;break}for(j=function(){var t=Object(s.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.tokenOfOwnerByIndex(m,n).call();case 3:return a=t.sent,t.next=6,e.methods.getBunnyId(a).call();case 6:return r=t.sent,t.abrupt("return",[parseInt(r,10),parseInt(a,10)]);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),h=[],O=0;O<b;O++)h.push(j(O));return t.next=21,Promise.all(h);case 21:v=t.sent,f=v.reduce((function(t,e){if(!e)return t;var n=Object(u.a)(e,2),a=n[0],i=n[1];return Object(r.a)(Object(r.a)({},t),{},Object(T.a)({},a,t[a]?[].concat(Object(k.a)(t[a]),[i]):[i]))}),{});case 23:d((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,hasClaimed:a,ownerById:l,balanceOf:b,nftMap:f,amounts:c,maxMintByNft:o,prices:p,myMints:y})})),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.error("an error occured",t.t0);case 29:case"end":return t.stop()}}),t,null,[[0,26]])})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(s.a)(i.a.mark((function t(){var e,n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.a)(M,[{address:N,name:"getMinted",params:["0x0000000000000000000000000000000000000000"]}]);case 3:e=t.sent,n=e[0][0],a=Object(I.e)(e[0][1]),d((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,hasClaimed:n,amounts:a})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("an error occured",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();m?t():e()}),[b,m,d]),Object(c.useEffect)((function(){return function(){n.current=!1}}),[n]);var f=y<=o.endBlockNumber;return Object(O.jsx)(_.Provider,{value:Object(r.a)(Object(r.a)({},o),{},{canBurnNft:f,getTokenIds:function(t){return o.nftMap[t]},reInitialize:function(){n.current&&d((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!1})}))}}),children:e})},R={RARITY_RARE:"rare",RARITY_BASE:"base",PRICE_LOWEST:"asc",PRICE_HIGHEST:"desc"};e.default=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],l=Object(c.useState)(!1),y=Object(u.a)(l,2),b=y[0],f=y[1],j=Object(c.useState)("PRICE_LOWEST"),h=Object(u.a)(j,2),v=h[0],T=h[1],k=Object(c.useState)(R.PRICE_LOWEST),w=Object(u.a)(k,2),M=w[0],N=w[1],g=Object(p.m)().account,_=Object(c.useState)(new Array(6).fill(!1)),C=Object(u.a)(_,2),E=C[0],B=C[1],P=Object(c.useCallback)(Object(s.a)(i.a.mark((function t(){var e,n,u,c,l=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=l.length>0&&void 0!==l[0]?l[0]:"",f(!0),n=Object(I.c)(),u=d.c,E[0]&&(u=d.c.filter((function(t){return"mp4"===t.fileType}))),E[1]&&(u=d.c.filter((function(t){return"jpg"===t.fileType}))),c=[],u.forEach(function(){var t=Object(s.a)(i.a.mark((function t(a){var u,l,p,d,m,y,b,f,j,h,O,v,x,T,k,w;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.nftSecondaryMarket(a.nftId).call();case 2:return u=t.sent,t.next=5,n.methods.nftInfo(a.nftId).call();case 5:if(l=t.sent,p=l.authorName,d=l.authorTwitter,m=l.rarity,y=u.allowSell,b=u.sellMinPrice,f=u.totalArtistFee,j=u.totalGovernanceFee,h=u.lastSellIn,O=u.lastSellPrice,v=u.qtdSells,x=u.totalCollected,T=u.totalDevFee,!0!==u.allowSell){t.next=14;break}return t.next=11,n.methods.getListOpenTradesByNftId(a.nftId).call();case 11:k=t.sent,w=Array.isArray(k)&&k.length,k.forEach(function(){var t=Object(s.a)(i.a.mark((function t(s){var u,l,k,M,N;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.nftSecondaryTradeInfo(s).call();case 2:u=t.sent,l=u.sellPrice,k=u.sellDate,M=u.soldDate,N=Object(r.a)(Object(r.a)({},a),{},{allowSell:y,sellMinPrice:b,totalArtistFee:f,totalGovernanceFee:j,lastSellIn:h,lastSellPrice:O,qtdSells:v,totalCollected:x,totalDevFee:T,trade:s,totalQuantity:w,authorName:p,authorTwitter:d,sellPrice:l,sellPriceNum:parseFloat(new o.a(l).div(new o.a(10).pow(18)).toFixed()),sellDate:k,soldDate:M,rarity:m}),"RARITY_RARE"===e&&m===R.RARITY_RARE||"RARITY_BASE"===e&&m===R.RARITY_BASE?c.push(N):"PRICE_LOWEST"!==e&&"PRICE_HIGHEST"!==e||c.push(N);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),setTimeout((function(){a(c);var t=[];E[2]&&(t=c.filter((function(t){return"base"===t.rarity})),a(t)),E[3]&&(t=c.filter((function(t){return"rare"===t.rarity})),a(t)),E[4]&&(t=c.filter((function(t){return"epic"===t.rarity})),a(t)),E[5]&&(t=c.filter((function(t){return"legendary"===t.rarity})),a(t))}),0),setTimeout((function(){f(!1)}),1e3);case 10:case"end":return t.stop()}}),t)}))),[E]),A=function(){var t=Object(s.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"PRICE_LOWEST"===e?N(R.PRICE_LOWEST):"PRICE_HIGHEST"===e&&N(R.PRICE_HIGHEST),T(e),t.next=4,P(v);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(s.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=E.map((function(t,n){return n===e?!t:t})),B(n),t.next=4,P(v);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){P(v)}),[P,v,g]),Object(O.jsx)(S,{children:Object(O.jsxs)("section",{className:"vcollectionsec",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-sm-12 col-md-12 mb-5 vchead",children:Object(O.jsx)("h3",{children:"VLAD NFT Facts"})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-12 col-md-12",children:[Object(O.jsx)("div",{className:"pricefilterwrap",children:Object(O.jsxs)("ul",{className:"nav nav-pills pricefilterpills mb-3",id:"pills-tab",role:"tablist",children:[Object(O.jsx)("li",{className:"nav-item",role:"presentation",children:Object(O.jsx)("button",{className:"nav-link pricelink ".concat("PRICE_LOWEST"===v?"active":""),id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#price-lowest",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",onClick:function(){return A("PRICE_LOWEST")},children:"Price - Lowest"})}),Object(O.jsx)("li",{className:"nav-item",role:"presentation",children:Object(O.jsx)("button",{className:"nav-link pricelink ".concat("PRICE_HIGHEST"===v?"active":""),id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#price-highest",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",onClick:function(){return A("PRICE_HIGHEST")},children:"Price - Highest"})}),Object(O.jsx)("li",{className:"nav-item",role:"presentation",children:Object(O.jsx)("button",{className:"nav-link pricelink ".concat("RARITY_RARE"===v?"active":""),id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#rarity-rare",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",onClick:function(){return A("RARITY_RARE")},children:"Rarity - Rare"})}),Object(O.jsx)("li",{className:"nav-item",role:"presentation",children:Object(O.jsx)("button",{className:"nav-link pricelink ".concat("RARITY_BASE"===v?"active":""),id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#rarity-common",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",onClick:function(){return A("RARITY_BASE")},children:"Rarity - Base"})})]})}),Object(O.jsx)("div",{className:"vc-filter vc-explore",children:Object(O.jsx)("ul",{className:"nav vc-nav nav-pills",children:Object(O.jsxs)("li",{className:"nav-item vcdropdown pricedropdown dropdown",children:[Object(O.jsxs)("div",{className:"nav-link vcdropdown-toggle dropdown-toggle dropbtn","data-bs-toggle":"dropdown",role:"button","aria-expanded":"false",children:["Filter ",Object(O.jsx)("img",{src:"assets/images/settings-filter.svg",alt:"filter-icon",className:"img-fluid"})]}),Object(O.jsxs)("div",{className:"dropdown-content",children:[Object(O.jsx)("p",{children:"Format"}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"mp4",value:"mp4",checked:E[0],onChange:function(){return D(0)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"MP4"})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"jpg",value:"jpg",checked:E[1],onChange:function(){return D(1)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"JPG"})]})}),Object(O.jsx)("hr",{className:"seperator"}),Object(O.jsx)("p",{children:"Rarity"}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"base",value:"base",checked:E[2],onChange:function(){return D(2)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Base"})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"rare",value:"rare",checked:E[3],onChange:function(){return D(3)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Rare"})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"epic",value:"epic",checked:E[4],onChange:function(){return D(4)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Epic"})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"form-check checkblock",children:[Object(O.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"legendary",value:"legendary",checked:E[5],onChange:function(){return D(5)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Legendary"})]})})]})]})})})]})})]}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"ctab-content tab-content",id:"pills-tabContent",children:Object(O.jsx)("div",{className:"tab-pane fade show active ctabpane",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:b?Object(O.jsx)(m.a,{}):Object(O.jsx)(x,{data:n,sortOrder:M})})})})})]})})}}}]);
//# sourceMappingURL=10.d07b76b0.chunk.js.map