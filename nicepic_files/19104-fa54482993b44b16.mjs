(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[19104],{134906:(e,t,r)=>{r.d(t,{Bh:()=>u,C9:()=>y,CB:()=>_,CU:()=>i,FU:()=>A,GT:()=>c,Gy:()=>I,J_:()=>D,Jx:()=>h,MZ:()=>b,VC:()=>p,VG:()=>a,ZA:()=>d,Zt:()=>f,a3:()=>R,aH:()=>s,h7:()=>S,nw:()=>m,oR:()=>E,qA:()=>l,qp:()=>B,sG:()=>g,vd:()=>v,xk:()=>w});var n=r(89254);const o=e=>{const t={"０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","　":" "},r=String(e).split("");return r.forEach(((e,n)=>{const o=t[e];o&&(r[n]=o)})),r.join("")};function s(e){return function(t,r){const n=[];t&&/\S/.test(t)||n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}const i=new RegExp(["(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*",'|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"',")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z]{2,20}$)","|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$"].join(""),"i");function c(e){return function(t,r){const n=[];(t=t&&t.trim()).match(i)||n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function a(e){return function(t,r){const n=[];(t=t&&t.trim()).match(/^[^0-9].*$/)||n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function d(e){return function(t,r){const n=[];if(t){const r=parseInt(t,10);Number.isNaN(r)?n.push(e.invalidAgeString):(e.ageTooShortString&&r<10&&n.push(e.ageTooShortString),r<=0||r>120?n.push(e.invalidAgeString):e.checkUnderAgeWithString&&r<13&&n.push(e.checkUnderAgeWithString))}const o={errors:n,warnings:[]};return r&&r(o),o}}function u(e){return function(t,r){const n=(t=t&&t.trim()).replace(/[\(\)\+\-\. ]/g,""),o=[],s=!1!==e.checkLength&&n.length<7;!t||t.match(/^(\(?\+?[0-9]*\)?)?[0-9_\- \.\(\)]*$/g)&&!s||o.push(e.message);const i={errors:o,warnings:[]};return r&&r(i),i}}function l(e){return function(t,r){const n=/^\d+$/,s=[];"number"==typeof t||"string"==typeof t&&(t=t&&t.trim(),(t=o(t))&&!t.match(n)&&s.push(e.message));const i={errors:s,warnings:[]};return r&&r(i),i}}function p(e){return function(t,r){const n=/^[\d\ -]+$/,s=[];"number"==typeof t||"string"==typeof t&&(t=t&&t.trim(),(t=o(t))&&!t.match(n)&&s.push(e.message));const i={errors:s,warnings:[]};return r&&r(i),i}}const _=e=>!!e.match(/^(https?:\/\/){0,1}[a-z0-9_\-]+\..+/gi);function h(e){return function(t,r){const n=[];t&&!_(t)&&n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function f(e){return function(t,r){const o=[];if(t)try{const r=(0,n.Z)(t);r&&r.protocol&&("http"!==r.protocol||"localhost"===r.hostname)||o.push(e.message)}catch(i){o.push(e.message)}const s={errors:o,warnings:[]};return r&&r(s),s}}function I(e){return function(t,r){const n=[];(e.should_trim||!1)&&(t=t&&t.trim());const o=t.length;e.min&&o<e.min?n.push(e.minErrorString):e.max&&o>e.max&&n.push(e.maxErrorString);const s={errors:n,warnings:[]};return r&&r(s),s}}function b(e){return function(t,r){const n=!e.checkExclusion,o=e.substrings,s=[];(n&&!o.some((e=>t.includes(e)))||!n&&o.some((e=>t.includes(e))))&&s.push(e.message);const i={errors:s,warnings:[]};return r&&r(i),i}}function g(e){return function(t,r){const n=[];t!==(e&&e.targetValue)&&n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function m(e){return function(t,r){const n=[];(t?parseFloat(t):0)<e.value&&n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function y(e){return function(t,r){const n=new Date(t),o=[];e.date instanceof Date&&n instanceof Date&&e.date<n&&o.push(e.message);const s={errors:o,warnings:[]};return r&&r(s),s}}function E(e){return function(t,r){const n=[];/^[\040-\176]*$/.test(t)||n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function w(e){return function(t,r){let n=2;if(e.hasFractionalCents)n=3;else if(e.currencyCode){const{maximumFractionDigits:t}=new Intl.NumberFormat(void 0,{style:"currency",currency:e.currencyCode}).resolvedOptions();n=t}const o=new RegExp(n?`^\\d*(\\.\\d{1,${n}})?$`:"^\\d*$"),s=[];"number"==typeof t&&(t=t.toString()),t&&!t.match(o)&&(t=t&&t.trim(),s.push(e.message));const i={errors:s,warnings:[]};return r&&r(i),i}}function S(e){return function(t,r){const n=[];Number(t)>=1e13&&n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function D(e){return function(t,r){t=t&&t.trim();const n=[],o=new Date(t);t&&!o.getTime()&&n.push(e.message);const s={errors:n,warnings:[]};return r&&r(s),s}}function B(e){return function(t,r){const n=t&&t.trim(),o=[];n&&!n.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)&&o.push(e.message);const s={errors:o,warnings:[]};return r&&r(s),s}}function v(e){return function(t,r){const n=[];e.pattern.test(t)||n.push(e.message);const o={errors:n,warnings:[]};return r&&r(o),o}}function A(e,t){const r=e.map((e=>e(t).errors));return[].concat(...r)}function R(e,t){let r="";return t.some((t=>{const n=t(e);return n.errors.length>0&&(r=n.errors[0],!0)})),r}},845772:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(717615),o=r(19121),s=r(231947);const i=()=>{const e=(0,o.Z)(),t=(0,n.Z)();return(0,s.lJ)(e,t)}},328369:(e,t,r)=>{r.d(t,{j:()=>s});const n={"á":"a","à":"a","â":"a","ä":"a","ã":"a","å":"a","æ":"a","ç":"c","é":"e","è":"e","ê":"e","ë":"e","í":"i","ì":"i","î":"i","ï":"i","ñ":"n","ó":"o","ò":"o","ô":"o","ö":"o","õ":"o","ø":"o","œ":"o","ß":"s","ú":"u","ù":"u","û":"u","ü":"u"},o=e=>{if(!e)return"";let t="";for(let r=0;r<e.length;r+=1)t+=n[e.charAt(r)]||e.charAt(r);return t},s=(e,t,r="name")=>{const n=t.toLowerCase();return e.filter((e=>((e,t)=>{const r=t.split(" "),n=e.split(" ");let s=0;for(let i=0;i<n.length;i+=1)(o(n[i]).includes(r[s])||n[i].includes(r[s]))&&(s+=1);return s===r.length})(e[r].toLowerCase(),n)))}},169158:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(667294),o=r(700380);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class i extends n.PureComponent{constructor(...e){super(...e),s(this,"setContainerRef",(e=>{this.containerRef=e})),s(this,"fetchMoreIfNecessary",(0,o.Z)((()=>{const{fetchMore:e,scrollBuffer:t}=this.props;e&&this.containerRef&&(({scrollTop:e,clientHeight:t,scrollHeight:r},n)=>e+t+(n?n(t):2*t)>r)(this.containerRef,t)&&e()}),200))}componentDidMount(){setTimeout(this.fetchMoreIfNecessary)}componentDidUpdate(){this.fetchMoreIfNecessary()}render(){const{children:e}=this.props;return e({onScroll:this.fetchMoreIfNecessary,setRef:this.setContainerRef})}}},463490:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(537336),o=r(89061),s=r(883119),i=r(785893);const c=({collaborator_count:e,useLegoLayout:t,type:r})=>t?(0,i.jsx)(s.xu,{marginEnd:e?2:0,children:(0,i.jsx)(n.Z,{type:r})}):(0,i.jsx)(n.Z,{type:r}),a=({board:e,showCollaborativeIcon:t,showPrivateIcon:r,showProtectedIcon:a,showSectionsIcon:d,useLegoLayout:u})=>{var l;const p=(null==e||null===(l=e.collaborating_users)||void 0===l?void 0:l.length)||0;return t||r||a||d?(0,i.jsxs)(s.xu,{display:"flex",direction:"row",marginEnd:u?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[r&&(0,i.jsx)(c,{collaborator_count:p,useLegoLayout:u,type:"secret"}),a&&(0,i.jsx)(c,{collaborator_count:p,useLegoLayout:u,type:"protected"}),t&&(u?(0,i.jsx)(o.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,i.jsx)(n.Z,{type:"group"})),d&&(0,i.jsx)(n.Z,{type:"sections"})]}):null}},421816:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(883119),o=r(785893);const s=({image_url:e,naturalHeight:t,naturalWidth:r})=>(0,o.jsx)(n.xu,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:(0,o.jsx)(n.zd,{wash:!0,width:48,height:48,rounding:2,children:(0,o.jsx)(n.Ee,{src:e,alt:"",naturalHeight:t,naturalWidth:r})})})},756777:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(883119),o=r(785893);const s={__style:{margin:"0 10px",borderRight:"3px solid transparent",borderTop:"3px solid #fff",animation:"spin .8s linear infinite"}};function i(){return(0,o.jsx)(n.xu,{alignItems:"center",color:"primary",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",rounding:8,children:(0,o.jsx)(n.xu,{dangerouslySetInlineStyle:s,display:"inlineBlock",height:18,position:"relative",rounding:"circle",width:18})})}function c({disabled:e,name:t,onClick:r,size:s,submitting:c,text:a}){return(0,o.jsxs)(n.xu,{display:"flex",position:"relative",children:[c&&(0,o.jsx)(i,{}),(0,o.jsx)(n.zx,{color:"red",disabled:e||c,name:t,onClick:r,size:s,type:"submit",text:a})]})}},537336:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(898781),o=r(883119),s=r(785893);const i=function({type:e}){const t=(0,n.ZP)(),r={group:{accessibilityLabel:t._('group board', 'Board picker group board icon', 'Board picker group board icon'),icon:"people"},protected:{accessibilityLabel:t._('protected board', 'Board picker protected board icon', 'Board picker protected board icon'),icon:"protect"},secret:{accessibilityLabel:t._('secret board', 'Board picker secret board icon', 'Board picker secret board icon'),icon:"lock"},sections:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-down"}}[e];return(0,s.jsx)(o.xu,{marginStart:1,children:(0,s.jsx)(o.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,s.jsx)(o.JO,{accessibilityLabel:r.accessibilityLabel,icon:r.icon,size:"12",color:"default"}):(0,s.jsx)(o.JO,{accessibilityLabel:r.accessibilityLabel,icon:r.icon,size:16,color:"default"})})})}},223123:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(702664),o=r(6637),s=r(332611),i=r(886858),c=r(379725),a=r(414327),d=r(782677);function u(){const e=(0,n.useDispatch)(),t=(0,n.useSelector)((e=>e.resources));return async function({boardCreateOptions:r,deprecatedSchemaForNormalization:n}){var u,l;const p=await o.Z.create("BoardResource",r).callCreate(),_=null===(u=p.resource_response)||void 0===u?void 0:u.data,h=n?(0,d.Fv)(_,n):void 0;e((0,a.XM)("BoardResource",r,p,h)),e((0,s.fO)({event_type:20})),null!==(l=_.owner)&&void 0!==l&&l.id&&e((0,c.b)("UserResource",{options:{user_id:_.owner.id,field_set_key:"save_behavior"}}));const f=t.BoardsResource||{},I=t.BoardsFeedResource||{};return Object.keys(f).forEach((t=>{var r;(0,i.k)(t).username===(null===(r=_.owner)||void 0===r?void 0:r.username)&&e((0,a.jB)("BoardsResource",t))})),Object.keys(I).forEach((t=>{var r;(0,i.k)(t).username===(null===(r=_.owner)||void 0===r?void 0:r.username)&&e((0,a.jB)("BoardsFeedResource",t))})),_}}},677324:(e,t,r)=>{r.d(t,{$n:()=>I,CE:()=>l,F$:()=>f,d9:()=>b,e1:()=>u,vB:()=>_});var n=r(647316),o=r(6637),s=r(935409),i=r(778821),c=r(379725),a=r(414327),d=r(875495);function u(e){return t=>{const{boardId:r,sectionIdBefore:n,sectionIdAfter:s,sourceSectionId:c,targetSectionId:a}=e;t((0,d._f)({feedType:i.DV.BOARD_SECTIONS,feedId:r,itemType:"board_section",sourceItemId:c,targetItemId:a}));const u={section_id:c,section_before:n||void 0,section_after:s||void 0};return o.Z.create("BoardSectionsReorderResource",u).callUpdate({showError:!1})}}function l(e,t){return r=>r((0,c.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}function p(e,t){return{type:"SECTION_ADDED",payload:{boardId:e,section:t}}}function _({boardId:e,name:t,nameSource:r,pinImport:c,initialPinIds:u=[]},l,_){let h=0;"RECOMMENDATION"===r?h=1:"EDITED_RECOMMENDATION"===r&&(h=2);const f={board_id:e,initial_pins:c&&!c.all?c.pinIds:u,name:t,name_source:h,..._?{orbac_subject_id:_}:Object.freeze({})};return t=>o.Z.create("BoardSectionResource",f).callCreate({showError:!1}).then((({resource_response:{data:r}})=>{t(p(e,r)),t((0,d.vX)({feedId:e,feedType:i.DV.BOARD_SECTIONS,itemIds:[r.id],itemType:"board_section"})),t((0,s.Tq)(e,"pin_count")),t((0,a.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:o,pinIds:u}=c||{all:!1,pinIds:[]};return o?new Promise(((o,s)=>t((0,n.Z)({inverseSelection:!0,selectedPinIds:u,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:r.id}},l)).then((()=>o(r))).catch(s))):(u.length>0&&t((0,d.N8)(i.DV.BOARDFEED,e)),r)}))}function h(e,t){return{type:"SECTION_DELETED",payload:{boardId:e,sectionId:t}}}function f(e,t,r){return n=>o.Z.create("BoardSectionEditResource",{section_id:t,...r?{orbac_subject_id:r}:Object.freeze({})}).callDelete({showError:!1}).then((()=>Promise.all([n(h(e,t)),n((0,d.EX)({feedId:e,feedType:i.DV.BOARD_SECTIONS,itemIds:[t],itemType:"board_section"})),n((0,s.Tq)(e,"pin_count")),n((0,a.jB)("BoardSectionsRepinResource",{board_id:e}))])))}function I(e,t,r,n){return c=>o.Z.create("BoardSectionEditResource",{section_id:t,title:r,...n?{orbac_subject_id:n}:Object.freeze({})}).callCreate({showError:!1}).then((t=>{const r=t.resource_response.data;return c(function(e,t){return r=>{const n=t.board;var o,c,a,u,l;n&&n.id!==e?(r(h(e,null!==(o=t.id)&&void 0!==o?o:"")),r((0,d.EX)({feedId:e,feedType:i.DV.BOARD_SECTIONS,itemIds:[null!==(c=t.id)&&void 0!==c?c:""],itemType:"board_section"})),r((0,s.Tq)(e,"pin_count")),r(p(null!==(a=n.id)&&void 0!==a?a:"",t)),r((0,d.vX)({feedId:null!==(u=n.id)&&void 0!==u?u:"",feedType:i.DV.BOARD_SECTIONS,itemIds:[null!==(l=t.id)&&void 0!==l?l:""],itemType:"board_section"})),r((0,s.Tq)(e,"pin_count"))):r({type:"SECTION_UPDATED",payload:{boardId:e,section:t}})}}(e,r)),c((0,a.jB)("BoardSectionsRepinResource",{board_id:e})),r}))}function b(e,t,r){return n=>o.Z.create("BoardSectionsMergeResource",{source_section_id:t,target_section_id:r}).callUpdate({showError:!1}).then((o=>Promise.all([n(h(e,t)),n((0,a.jB)("BoardSectionsRepinResource",{board_id:e})),n(l(r)),n((0,d.N8)(i.DV.BOARD_SECTION_PINS,r))]).then((()=>o))))}},647316:(e,t,r)=>{r.d(t,{Z:()=>_,S:()=>p});var n=r(6637),o=r(935409),s=r(778821),i=r(677324),c=r(124237);const a=e=>t=>{c.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(t,e))};var d=r(875495);const u=e=>(0,d.N8)(e.sectionId?s.DV.BOARD_SECTION_PINS:s.DV.BOARDFEED,e.sectionId||e.boardId);function l(e,t){const{source:r,target:n}=e;n.boardId!==r.boardId?(t((0,o.Tq)(r.boardId,"pin_count")),t((0,o.Tq)(n.boardId,"pin_count"))):r.sectionId&&n.sectionId||t((0,o.Tq)(n.boardId,"pin_count")),r.sectionId&&t((0,i.CE)(r.sectionId)),n.sectionId&&t((0,i.CE)(n.sectionId))}function p(e){return t=>{const{selectedPinIds:r,source:n,target:o}=e;t((0,d.EX)({feedId:n.sectionId||n.boardId,feedType:n.sectionId?s.DV.BOARD_SECTION_PINS:s.DV.BOARDFEED,itemIds:r,itemType:"pin"})),t((0,d.vX)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?s.DV.BOARD_SECTION_PINS:s.DV.BOARDFEED,itemIds:r,itemType:"pin"})),l(e,t)}}function _(e,t){return r=>function(e,t,r){const{inverseSelection:o,selectedPinIds:i,source:c,target:l,orbacSubjectId:p}=e;if(c.boardId===l.boardId&&(c.sectionId||null)===(l.sectionId||null))return Promise.reject();if(o){const e={board_id:c.boardId,new_board_id:l.boardId,old_section_id:c.sectionId||void 0,new_section_id:l.sectionId||void 0,pin_ids:i,orbac_subject_id:p};return n.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([t(u(c)),t(u(l))]))).catch(a(r))}{const e=(e,r)=>{t((0,d.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?s.DV.BOARD_SECTION_PINS:s.DV.BOARDFEED,itemIds:i,itemType:"pin"})),t((0,d.vX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?s.DV.BOARD_SECTION_PINS:s.DV.BOARDFEED,itemIds:i,itemType:"pin"}))};e(c,l);const o=()=>e(l,c);if(l.boardId===c.boardId){if(l.sectionId){const e={section_id:l.sectionId,pins:i,orbac_subject_id:p};return n.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{o(),a(r)(e)}))}{const e={section_id:c.sectionId,pins:i,orbac_subject_id:p};return n.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{o(),a(r)(e)}))}}{const e={board_id:l.boardId,section_id:l.sectionId||void 0,pin_ids:i,orbac_subject_id:p};return n.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{o(),a(r)(e)}))}}}(e,r,t).then((()=>l(e,r)))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/19104-fa54482993b44b16.mjs.map