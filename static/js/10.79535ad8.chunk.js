(this.webpackJsonpmarketplace=this.webpackJsonpmarketplace||[]).push([[10],{693:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return d}));var a=n(43),i=n(77),r=n(686),u=n(690),s=n(684),c=function(t){var e=u;return Object(i.a)(e,s.a,t)},p=function(t){var e=r;return Object(i.a)(e,s.b,t)},l=function(t){return t?parseFloat(Object(a.fromWei)(t.toString(),"ether")):0},o=function(t){if(!t)return[];for(var e=[],n=t.length,i=0;i<n;i++)t[i]?e.push(Object(a.fromWei)(t[i].toString(),"ether")):e.push(0);return e},y=function(t){if(!t)return[];var e=[];if(!t)return[];for(var n=t.length,a=0;a<n;a++)t[a]?e.push(parseInt(t[a].toString())):e.push(0);return e},d=function(t){var e=[];if(!t)return[];for(var n=t.length,a=0;a<n;a++)t[a]?e.push(parseFloat(t[a].toString())):e.push(0);return e}},696:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"contract NFT","name":"_nft","type":"address"},{"internalType":"contract IBEP20","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_tokenPerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"},{"internalType":"bool","name":"_allowMultipleClaims","type":"bool"},{"internalType":"string","name":"_rarity","type":"string"},{"internalType":"uint256","name":"_maxMintPerNft","type":"uint256"},{"internalType":"uint256","name":"_priceMultiplier","type":"uint256"},{"internalType":"uint8","name":"_min_index","type":"uint8"},{"internalType":"uint8","name":"_max_index","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NftBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"nftId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NftMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"allowMultipleClaims","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"countBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"ipfsHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"lastOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxMintPerNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"max_index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"min_index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"mint_by_nftId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minted","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintingManager","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract NFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"nftIdURIs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"numberOfNftIds","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownersOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"priceMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"price_by_nftId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rarity","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokenPerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getOwnersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getClaimedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getMinted","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getMintsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getMaxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"adminSetInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"adminChangeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"}],"name":"adminSetTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPerBurn","type":"uint256"}],"name":"adminSetTokenPerBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"adminSetBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"adminSetPriceByNftId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftId","type":"uint8"},{"internalType":"uint256","name":"_maxAllowed","type":"uint256"}],"name":"adminSetMaxMintByNftId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_manager","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"adminSetMintingManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_priceMultiplier","type":"uint256"}],"name":"adminSetMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"adminSetAllowMultipleClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintPerNft","type":"uint256"}],"name":"adminSetMaxMintPerNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_min_index","type":"uint8"},{"internalType":"uint8","name":"_max_index","type":"uint8"}],"name":"adminSetMintingInterval","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},697:function(t,e,n){"use strict";var a=n(0),i=n(180);e.a=function(){return Object(a.useContext)(i.a)}},773:function(t,e){t.exports=function(){for(var t=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],e=[],n=0;n<35;n++)e[n]=7===n||12===n||17===n||22===n?"-":t[Math.floor(Math.random()*t.length-1)];return e.join("")}},783:function(t,e,n){"use strict";n.r(e);var a=n(4),i=n.n(a),r=n(16),u=n(15),s=n(26),c=n(0),p=n(14),l=n.n(p),o=n(68),y=n(684),d=n(179),m=n(694),b=n.n(m),f=n(773),j=n.n(f),O=n(39),T=n(2),v=function(t){var e=t.nft;return Object(T.jsxs)("div",{className:"vcblock",children:[Object(T.jsx)(O.b,{to:{pathname:"/vlad-detail/".concat(e.trade)},children:Object(T.jsx)("img",{src:"/images/nfts/".concat(e.previewImage),alt:e.name,className:"img-fluid"})}),Object(T.jsxs)("div",{className:"vcblockhead",children:[Object(T.jsx)(O.b,{to:"/vlad-detail/".concat(e.trade),children:Object(T.jsx)("h6",{className:"inner-title",children:e.name})}),Object(T.jsxs)("p",{children:["By ",Object(T.jsx)(O.b,{to:{pathname:e.authorTwitter},children:e.authorName})]}),Object(T.jsx)("div",{className:"vcblock-smcontent",children:Object(T.jsxs)("p",{children:["On Sell for ",Object(T.jsxs)("span",{className:"b",children:[new l.a(e.sellPrice).div(new l.a(10).pow(18)).toFixed()," ALIFE "]})]})})]})]})},h=function(t){var e=t.data,n=t.sortOrder;return Object(T.jsx)("div",{className:"row",children:b()(e,"sellPriceNum",["asc"===n?"asc":"desc"]).map((function(t){return Object(T.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(T.jsx)(v,{nft:t})},j()())}))})},x=n(45),w=n(51),M=n(697),I=n(696),_="0xaBa054F1437aEBEa43fB0804b734DdB3F39FB62F",S=n(36),N=n(693),g=Object(c.createContext)(null),k=function(t){var e=t.children,n=Object(c.useRef)(!0),a=Object(c.useState)({isInitialized:!1,hasClaimed:[],ownerById:[],countBurnt:0,startBlockNumber:0,endBlockNumber:0,totalSupplyDistributed:0,currentDistributedSupply:0,balanceOf:0,nftMap:{},allowMultipleClaims:!0,rarity:"",priceMultiplier:0,maxMintPerNft:0,tokenPerBurn:0,amounts:[],maxMintByNft:[],prices:[],myMints:[]}),p=Object(s.a)(a,2),l=p[0],y=p[1],d=Object(o.m)().account;console.log("account",d);var m=Object(M.a)(),b=l.isInitialized;Object(c.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var e,n,a,u,c,p,l,o,d,m,b,f,j,O,T,v,h,x,w,M,g,k;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(S.a)(I,[{address:_,name:"startBlockNumber"},{address:_,name:"endBlockNumber"},{address:_,name:"countBurnt"},{address:_,name:"totalSupplyDistributed"},{address:_,name:"currentDistributedSupply"},{address:_,name:"allowMultipleClaims"},{address:_,name:"rarity"},{address:_,name:"priceMultiplier"},{address:_,name:"maxMintPerNft"},{address:_,name:"tokenPerBurn"}]);case 3:e=t.sent,n=Object(s.a)(e,10),a=n[0],u=n[1],c=n[2],p=n[3],l=n[4],o=n[5],d=n[6],m=n[7],b=n[8],f=n[9],j=Object(s.a)(a,1),O=j[0],T=Object(s.a)(u,1),v=T[0],h=Object(s.a)(c,1),x=h[0],w=Object(s.a)(p,1),M=w[0],g=Object(s.a)(l,1),k=g[0],y((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,countBurnt:x.toNumber(),startBlockNumber:O.toNumber(),endBlockNumber:v.toNumber(),currentDistributedSupply:k.toNumber(),totalSupplyDistributed:M.toNumber(),allowMultipleClaims:o[0],rarity:d[0].toString(),priceMultiplier:parseFloat(m[0].toString()),maxMintPerNft:parseInt(b[0].toString()),tokenPerBurn:Object(N.b)(f[0])})})),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.error("an error occured",t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(){return t.apply(this,arguments)}})()()}),[b,y]),Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(i.a.mark((function t(){var e,n,a,c,p,l,o,m,b,f,j,O,T,v;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=Object(N.d)(),t.next=4,Object(S.a)(I,[{address:_,name:"getMinted",params:[d]}]);case 4:return n=t.sent,a=n[0][0],c=Object(N.e)(n[0][1]),p=n[0][2],l=Object(N.f)(n[0][3]),o=Object(N.a)(n[0][4]),m=Object(N.f)(n[0][5]),t.next=13,e.methods.balanceOf(d).call();case 13:if(b=t.sent,f={},!(b>0)){t.next=23;break}for(j=function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.tokenOfOwnerByIndex(d,n).call();case 3:return a=t.sent,t.next=6,e.methods.getBunnyId(a).call();case 6:return r=t.sent,t.abrupt("return",[parseInt(r,10),parseInt(a,10)]);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),O=[],T=0;T<b;T++)O.push(j(T));return t.next=21,Promise.all(O);case 21:v=t.sent,f=v.reduce((function(t,e){if(!e)return t;var n=Object(s.a)(e,2),a=n[0],i=n[1];return Object(r.a)(Object(r.a)({},t),{},Object(x.a)({},a,t[a]?[].concat(Object(w.a)(t[a]),[i]):[i]))}),{});case 23:y((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,hasClaimed:a,ownerById:p,balanceOf:b,nftMap:f,amounts:c,maxMintByNft:l,prices:o,myMints:m})})),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.error("an error occured",t.t0);case 29:case"end":return t.stop()}}),t,null,[[0,26]])})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(u.a)(i.a.mark((function t(){var e,n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(S.a)(I,[{address:_,name:"getMinted",params:["0x0000000000000000000000000000000000000000"]}]);case 3:e=t.sent,n=e[0][0],a=Object(N.e)(e[0][1]),y((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!0,hasClaimed:n,amounts:a})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("an error occured",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();d?t():e()}),[b,d,y]),Object(c.useEffect)((function(){return function(){n.current=!1}}),[n]);var f=m<=l.endBlockNumber;return Object(T.jsx)(g.Provider,{value:Object(r.a)(Object(r.a)({},l),{},{canBurnNft:f,getTokenIds:function(t){return l.nftMap[t]},reInitialize:function(){n.current&&y((function(t){return Object(r.a)(Object(r.a)({},t),{},{isInitialized:!1})}))}}),children:e})},E={RARITY_RARE:"rare",RARITY_BASE:"base",PRICE_LOWEST:"asc",PRICE_HIGHEST:"desc"};e.default=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],p=Object(c.useState)(!1),m=Object(s.a)(p,2),b=m[0],f=m[1],j=Object(c.useState)("PRICE_LOWEST"),O=Object(s.a)(j,2),v=O[0],x=O[1],w=Object(c.useState)(E.PRICE_LOWEST),M=Object(s.a)(w,2),I=M[0],_=M[1],S=Object(o.m)().account,g=Object(c.useState)(new Array(6).fill(!1)),P=Object(s.a)(g,2),B=P[0],R=(P[1],Object(c.useCallback)(Object(u.a)(i.a.mark((function t(){var e,n,s,c,p=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=p.length>0&&void 0!==p[0]?p[0]:"",f(!0),n=Object(N.c)(),s=y.c,B[0]&&(s=y.c.filter((function(t){return"mp4"===t.fileType}))),B[1]&&(s=y.c.filter((function(t){return"jpg"===t.fileType}))),c=[],s.forEach(function(){var t=Object(u.a)(i.a.mark((function t(a){var s,p,o,y,d,m,b,f,j,O,T,v,h,x,w,M;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.nftSecondaryMarket(a.nftId).call();case 2:return s=t.sent,t.next=5,n.methods.nftInfo(a.nftId).call();case 5:if(p=t.sent,o=p.authorName,y=p.authorTwitter,d=p.rarity,m=s.allowSell,b=s.sellMinPrice,f=s.totalArtistFee,j=s.totalGovernanceFee,O=s.lastSellIn,T=s.lastSellPrice,v=s.qtdSells,h=s.totalCollected,x=s.totalDevFee,!0!==s.allowSell){t.next=14;break}return t.next=11,n.methods.getListOpenTradesByNftId(a.nftId).call();case 11:w=t.sent,M=Array.isArray(w)&&w.length,w.forEach(function(){var t=Object(u.a)(i.a.mark((function t(u){var s,p,w,I,_;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.nftSecondaryTradeInfo(u).call();case 2:s=t.sent,p=s.sellPrice,w=s.sellDate,I=s.soldDate,_=Object(r.a)(Object(r.a)({},a),{},{allowSell:m,sellMinPrice:b,totalArtistFee:f,totalGovernanceFee:j,lastSellIn:O,lastSellPrice:T,qtdSells:v,totalCollected:h,totalDevFee:x,trade:u,totalQuantity:M,authorName:o,authorTwitter:y,sellPrice:p,sellPriceNum:parseFloat(new l.a(p).div(new l.a(10).pow(18)).toFixed()),sellDate:w,soldDate:I,rarity:d}),"RARITY_RARE"===e&&d===E.RARITY_RARE||"RARITY_BASE"===e&&d===E.RARITY_BASE?c.push(_):"PRICE_LOWEST"!==e&&"PRICE_HIGHEST"!==e||c.push(_);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),setTimeout((function(){a(c);var t=[];B[2]&&(t=c.filter((function(t){return"base"===t.rarity})),a(t)),B[3]&&(t=c.filter((function(t){return"rare"===t.rarity})),a(t)),B[4]&&(t=c.filter((function(t){return"epic"===t.rarity})),a(t)),B[5]&&(t=c.filter((function(t){return"legendary"===t.rarity})),a(t))}),0),setTimeout((function(){f(!1)}),1e3);case 10:case"end":return t.stop()}}),t)}))),[B])),C=function(){var t=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"PRICE_LOWEST"===e?_(E.PRICE_LOWEST):"PRICE_HIGHEST"===e&&_(E.PRICE_HIGHEST),x(e),t.next=4,R(v);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){R(v)}),[R,v,S]),Object(T.jsx)(k,{children:Object(T.jsxs)("section",{className:"vcollectionsec section-min-height",children:[Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-sm-12 col-md-12 mb-5 vchead",children:Object(T.jsx)("h3",{children:"Shibari Collections"})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-sm-12 col-md-12",children:Object(T.jsx)("div",{className:"pricefilterwrap",children:Object(T.jsxs)("ul",{className:"nav nav-pills pricefilterpills mb-3",id:"pills-tab",role:"tablist",children:[Object(T.jsx)("li",{className:"nav-item",role:"presentation",children:Object(T.jsx)("button",{className:"nav-link pricelink ".concat("PRICE_LOWEST"===v?"active":""),id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#price-lowest",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",onClick:function(){return C("PRICE_LOWEST")},children:"Price - Lowest"})}),Object(T.jsx)("li",{className:"nav-item",role:"presentation",children:Object(T.jsx)("button",{className:"nav-link pricelink ".concat("PRICE_HIGHEST"===v?"active":""),id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#price-highest",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",onClick:function(){return C("PRICE_HIGHEST")},children:"Price - Highest"})})]})})})})]}),Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"ctab-content tab-content",id:"pills-tabContent",children:Object(T.jsx)("div",{className:"tab-pane fade show active ctabpane",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:b?Object(T.jsx)(d.a,{}):Object(T.jsx)(h,{data:n,sortOrder:I})})})})})]})})}}}]);
//# sourceMappingURL=10.79535ad8.chunk.js.map