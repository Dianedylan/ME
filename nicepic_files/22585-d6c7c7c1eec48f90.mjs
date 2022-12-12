(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[22585],{442279:(e,t)=>{function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){return e===t}function o(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1],n=null,o=null;return function(){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return null!==n&&n.length===i.length&&i.every((function(e,r){return t(e,n[r])}))||(o=e.apply(void 0,i)),n=i,o}}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),s=0;s<t;s++)o[s]=arguments[s];var a=0,c=o.pop(),d=i(o),u=e.apply(void 0,[function(){return a++,c.apply(void 0,arguments)}].concat(r)),l=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];var s=d.map((function(n){return n.apply(void 0,[e,t].concat(o))}));return u.apply(void 0,n(s))};return l.resultFunc=c,l.recomputations=function(){return a},l.resetRecomputations=function(){return a=0},l}}var a=t.P1=s(o)},55259:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(794230),o=n(619937);const i={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},s=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},a={overview:()=>"/",reporting:e=>{const t=e.objectiveType||null;delete e.objectiveType;const n={...e,...s(t)};return(0,r.Z)("/reporting/campaigns/",n)},reportingAdGroup:e=>{const{campaignId:t,objectiveType:n,showAllEntities:o,adGroupId:a,message:c}=e,d=a?{adGroupIds:[a]}:{},u={campaignIds:[t],...o?i:{},...s(n),...d,message:c};return(0,r.Z)("/reporting/adgroups/",u)},campaign:e=>{const{id:t,objectiveType:n}=e;return(0,r.Z)("/reporting/adgroups/",{campaignIds:[t],...s(n)})},editCampaign:e=>e.isAutomatedCampaign?a.editAutomated({campaignId:e.id,view:"campaign"}):a.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{const{id:t,objectiveType:n,showAllEntities:o,pinPromotionId:a,campaignId:c}=e;if("TEMPORARY_SHOPPING"===n||"CATALOG_SALES"===n)return(0,r.Z)("/reporting/productgroups/",{adGroupIds:[t],...s(n)});{const e=o?i:{},d=c?{campaignIds:[c]}:{},u=a?{pinPromotionIds:[a]}:{};return(0,r.Z)("/reporting/ads/",{adGroupIds:[t],...s(n),...e,...u,...d})}},editAdGroup:e=>e.isAutomatedCampaign?a.editAutomated({campaignId:e.id,view:"campaign"}):a.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{const{id:t,adFilter:n}=e,o=n?{adFilter:n}:{};return(0,r.Z)("/reporting/ads/",{pinPromotionIds:[t],...o})},editPinPromotion:e=>{const t=e.isCreatingPins?{isCreatingPins:!0}:{},n=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return a.editV2({adGroupId:e.adGroupId,view:"ad",...n,...t})},productGroup:e=>{const{id:t,name:n}=e;return(0,r.Z)("/reporting/productgroups/",{productGroupIds:[t],name:n})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",productgroups:()=>"/reporting/productgroups/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>a.pinPromotion(e),campaignMode:()=>"/ads/campaign_mode/",create:e=>{const{campaignId:t,objectiveType:n,partialCreate:o,catalogsFeedId:i}=e,s={};return t&&o&&(s.campaignId=t),n&&(s.objectiveType=n),"CATALOG_SALES"===n&&i&&(s.catalogsFeedId=i),(0,r.Z)("/ads/create/",s)},createAutomated:e=>(0,r.Z)("/automated/ads/create/",e),editV2:e=>(0,r.Z)("/ads/edit/",e),editAutomated:e=>(0,r.Z)("/automated/ads/edit/",e),duplicateCampaign:e=>(0,r.Z)("/ads/duplicate/",e),audiences:()=>"/audiences/",audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{const{page:t,subSection:n,nextStepUrl:i}=e;switch(t){case o.kM.BILLING_HISTORY:return"/billing/history/";case o.kM.ORDER_LINES:return"/billing/order_lines/";case o.kM.PROMOTIONS:return"/billing/promotions/";case o.kM.DOCUMENTS:return"/billing/documents/";case o.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:const e={};return n&&(e.section=n),i&&(e.next_step_link_url=i),(0,r.Z)("/billing/",e)}},bulk:e=>{const{subSection:t,page:n,jobStarted:i}=e||{};switch(n){case o.fm.UPLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/upload_template/",{section:t});case o.fm.DOWNLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/download_template/",{section:t});case o.fm.HISTORY:return(0,r.Z)("/bulk_editor/history/",{section:t,job_started:i});case o.fm.RESOURCES:return(0,r.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},history:e=>(0,r.Z)("/history/",e),shopping:e=>a.reporting(s("TEMPORARY_SHOPPING")),pinterest_tag:e=>{const{page:t,subSection:n,platform:i}=e;switch(t){case o.qp.PINTEREST_EVENT_HISTORY:return"/conversions/event-history/";case o.qp.CONVERSION_HEALTH:return"/conversions/health/";case o.qp.PINTEREST_TAG:return(0,r.Z)("/conversions/tag/",{subPage:n,platform:i});case o.qp.PINTEREST_TAG_EVENTS:return"/conversions/tag-events/";case o.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case o.qp.CONVERSION_UPLOAD:return(0,r.Z)("/conversions/upload/",{subPage:n});case o.qp.UPLOAD_HISTORY:return(0,r.Z)("/conversions/history/",{subPage:n});case o.qp.PCA_UPLOAD_HISTORY:return(0,r.Z)("/conversions/pca_history/",{subPage:n});case o.qp.PCA_UPLOAD:return(0,r.Z)("/conversions/pca_upload/",{subPage:n});case o.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case o.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";default:return"/conversions/tag/"}},"pin-builder":e=>(0,r.Z)("/pin-builder/",e),purchases:()=>a.reporting(s("PURCHASE")),awareness_reserved:()=>a.reporting(s("IMPRESSION")),engagement:()=>a.reporting(s("BILLABLE_ENGAGEMENT")),videos:()=>a.reporting(s("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>a.reporting(s("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>a.reporting(s("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>a.reporting(s("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,r.Z)("/reporting/preferences/",e),report_builder:e=>(0,r.Z)("/report-center/builder/",e),report_history:()=>"/report-center/history/",report_unsubscribe:e=>(0,r.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,r.Z)("/report-center/download/",e),media_planner:()=>"/media_planner/",awareness:()=>a.reporting(s("AWARENESS")),traffic:()=>a.reporting(s("TRAFFIC")),app_installs:()=>a.reporting(s("APP_INSTALL")),catalog_sales:()=>a.reporting(s("CATALOG_SALES")),web_conversion:()=>a.reporting(s("WEB_CONVERSION")),video_view:()=>a.reporting(s("VIDEO_VIEW")),quick_promote:()=>"/quick-promote/",quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:()=>"/recommendations/",catalog_view:()=>"/product-catalogs/data-source"},c=a},924196:(e,t,n)=>{n.d(t,{Z:()=>r});const r={GOOGLE_ADWORDS_ID:852082959,GOOGLE_ADWORDS_LABEL_PROPEL_QUALIFIED:"Mah3CPrv13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_PROPEL_UNQUALIFIED:"_DJfCKzy13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE:"GGbCCM7p-nYQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT:"SwBsCIz9k3cQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_ADVERTISER_INTENT:"kDf0COWL4okBEI-Cp5YD",DOUBLECLICK_TAG_ID:"8032161",DOUBLECLICK_EVENT_ID_PROPEL:"prope001",DOUBLECLICK_CATEGORY_ID_PROPEL_QUALIFIED:"pinte0",DOUBLECLICK_CATEGORY_ID_PROPEL_UNQUALIFIED:"pinte00",TRADEDESK_ADVERTISER_ID:"fc1uc9n",TRADEDESK_EVENT_ID_GENERAL_PAGEVIEW:"ogalyt3",TRADEDESK_CONVERSION_ID_PROPEL_QUALIFIED:"judrn76",TRADEDESK_CONVERSION_ID_PROPEL_UNQUALIFIED:"f0v4s5d",FACEBOOK_ADVERTISER_ID:"956400731086791",TWITTER_UNIVERSAL_TAG_ID:"nuzh8",TWITTER_CONVERSION_ID_PROPEL_QUALIFIED:"ny8zl",TWITTER_CONVERSION_ID_PROPEL_UNQUALIFIED:"nya0d",LINKEDIN_PARTNER_ID:"44352",LINKEDIN_CONVERSION_ID_PROPEL_QUALIFIED:"166217",LINKEDIN_CONVERSION_ID_PROPEL_UNQUALIFIED:"171754",LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT:"529092",PINTEREST_TAG_ID:"2614461171935",SMB_PAID_PINTEREST_ID:"2613736141997"}},904431:(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>i});class o{static reportGoogleConversion(e,t,n){void 0!==window.gtag_report_conversion?window.gtag_report_conversion(e,t,n):o.queuedGoogleConversions.push({id:e,label:t,url:n})}static reportFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("track",t,n):window.fbq("track",t):o.queuedFacebookConversions.push({id:e,event:t,data:n})}static reportCustomFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("trackCustom",t,n):window.fbq("trackCustom",t):o.queuedFacebookConversions.push({id:e,isCustomEvent:!0,event:t,data:n})}static reportPinterestConversion(e,t,n){void 0!==window.pintrk?n?window.pintrk("track",t,n):window.pintrk("track",t):o.queuedPinterestConversions.push({id:e,event:t,data:n})}static reportTwitterConversion(e,t){void 0!==window.twttr?t?window.twttr.conversion.trackPid(e,t):window.twttr.conversion.trackPid(e):o.queuedTwitterConversions.push({id:e,data:t})}static reportTheTradeDeskConversion(e,t){const n=document.createElement("img");n.setAttribute("height","1"),n.setAttribute("width","1"),n.setAttribute("role","presentation"),n.style.borderStyle="none",n.style.position="absolute",n.setAttribute("src",`//insight.adsrvr.org/track/conv/?adv=${e}&ct=0:${t}&fmt=3`),document.body.insertBefore(n,document.body.lastChild)}static reportLinkedInConversion(e,t){const n=document.createElement("img");n.setAttribute("width","1"),n.setAttribute("height","1"),n.setAttribute("role","presentation"),n.setAttribute("src",`https://dc.ads.linkedin.com/collect/?pid=${e}&conversionId=${t}&fmt=gif`),n.style.display="none",document.body.insertBefore(n,document.body.lastChild)}static reportDoubleClickConversion(e,t,n){const r=1e13*Math.random(),o=document.createElement("iframe");o.setAttribute("width","1"),o.setAttribute("height","1"),o.setAttribute("frameborder","0"),o.setAttribute("src",`https://${e}.fls.doubleclick.net/activityi;src=${e};\n    type=${t};cat=${n};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=${r}?`),o.style.display="none",document.body.insertBefore(o,document.body.lastChild)}static insertGoogleAdWordsTag(e){const t=document.createElement("script");t.setAttribute("async",""),t.setAttribute("src",`https://www.googletagmanager.com/gtag/js?id=AW-${e}`),t.onload=()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(e,t,n){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","AW-"+e),window.gtag_report_conversion=function(e,t,n){return window.gtag("event","conversion",{send_to:"AW-"+e+"/"+t,event_callback:function(){void 0!==n&&window.location.assign(n)}}),!1};const t=o.queuedGoogleConversions;for(let n=0;n<t.length;n+=1){const r=t[n];r.id===e&&o.reportGoogleConversion(r.id,r.label,r.url)}},document.body.insertBefore(t,document.body.firstChild)}static insertFacebookPixelTag(e){var t,n,r,i,s,a;t=window,n=document,r="script",t.fbq||(i=t.fbq=function(){i.callMethod?i.callMethod.apply(i,arguments):i.queue.push(arguments)},t._fbq||(t._fbq=i),i.push=i,i.loaded=!0,i.version="2.0",i.queue=[],(s=n.createElement(r)).async=!0,s.src="//connect.facebook.net/en_US/fbevents.js",(a=n.getElementsByTagName(r)[0]).parentNode.insertBefore(s,a)),window.fbq("init",e),window.fbq("track","PageView");const c=o.queuedFacebookConversions;for(let d=0;d<c.length;d+=1){const t=c[d];t.id===e&&(t.isCustomEvent?o.reportCustomFacebookConversion(e,t.event,t.data):o.reportFacebookConversion(e,t.event,t.data))}}static insertTwitterUniversalTag(e){var t,n,r,o,i,s;t=window,n=document,r="script",t.twq||((o=t.twq=function(){o.exe?o.exe.apply(o,arguments):o.queue.push(arguments)}).version="1.1",o.queue=[],(i=n.createElement(r)).async=!0,i.src="//static.ads-twitter.com/uwt.js",(s=n.getElementsByTagName(r)[0]).parentNode.insertBefore(i,s)),window.twq("init",e),window.twq("track","PageView")}static insertLinkedInInsightTag(e){window._linkedin_data_partner_id=e;const t=document.createElement("script");t.setAttribute("src","//snap.licdn.com/li.lms-analytics/insight.min.js"),document.body.insertBefore(t,document.body.firstChild)}static insertPinterestTag(e){!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};const e=window.pintrk;e.queue=[],e.version="3.0";const t=document.createElement("script");t.async=!0,t.src="https://s.pinimg.com/ct/core.js";const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}(),window.pintrk("load",e),window.pintrk("page");const t=o.queuedPinterestConversions;for(let n=0;n<t.length;n+=1){const r=t[n];r.id===e&&o.reportPinterestConversion(e,r.event,r.data)}}}r(o,"queuedGoogleConversions",[]),r(o,"queuedFacebookConversions",[]),r(o,"queuedPinterestConversions",[]),r(o,"queuedTwitterConversions",[]);const i=o},756306:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),o=n(121093),i=n(883119),s=n(785893);class a extends r.Component{constructor(...e){var t,n,r;super(...e),r={paused:!1,showPulsar:!1},(n="state")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentDidMount(){this.mountPulsar(),this.props.onExperienceMount&&this.experience&&this.props.onExperienceMount(this.experience)}componentWillUnmount(){clearTimeout(this.timer)}mountPulsar(){if(!this.experience)return;const{display_data:e}=this.experience;e.has_pulsar&&this.setState({showPulsar:!0})}renderPulsar(){const{anchor:e}=this.props,{paused:t}=this.state;if(!e)return null;const n=e.getBoundingClientRect(),{height:r,width:o}=n,a=-(68+r/2),c=-(68-o/2);return(0,s.jsx)(i.xu,{position:"absolute",zIndex:new i.Ry(1),dangerouslySetInlineStyle:{__style:{marginTop:a,marginLeft:c,cursor:"pointer",pointerEvents:"none"}},children:(0,s.jsx)(i.o3,{paused:t})})}renderFlyout(e){const{anchor:t,flyoutSize:n,idealDirection:r,textOverflow:o}=this.props;return(0,s.jsx)(i.J2,{anchor:t,color:"blue",idealDirection:r||"down",onDismiss:()=>{},shouldFocus:!1,showCaret:!0,size:n,children:(0,s.jsx)(i.xu,{column:12,padding:3,children:(0,s.jsx)(i.xv,{color:"inverse",overflow:o,weight:"bold",children:e})})})}render(){const{experienceIds:e,placementId:t,shouldTimeoutDismiss:n}=this.props,{showPulsar:r}=this.state;return(0,s.jsx)(o.Z,{eligibleIds:e,placementId:t,eligibleTypes:[8],children:({complete:e,dismiss:t,experience:o})=>{this.experience=o;const{display_data:a}=o;return a.has_pulsar||a.has_tooltip?(n&&a.disappearTime&&a.disappearTime>0&&(this.timer=setTimeout((()=>(t(),null)),a.disappearTime)),(0,s.jsxs)(i.xu,{zIndex:new i.Ry(10),children:[r&&this.renderPulsar(),a.has_tooltip&&(!a.has_pulsar||this.state.paused)&&this.renderFlyout(a.text)]})):(e(),null)}})}}},869636:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),o=n(702664),i=n(442279),s=n(123159),a=n(780280),c=n(172071);const d=(0,i.P1)((e=>e.experiences),((e,t)=>t),((e,t)=>e[t])),u=(e,t)=>"function"==typeof t?t(e):t,l=(e,t={},n=!1)=>{const[i,l]=(0,r.useReducer)(u,t),{isBot:p}=(0,a.B)(),{fetchExperienceForPlacements:_,mountPlacement:g,triggerExperimentsForPlacement:m,unmountPlacement:E}=(0,s.M)();(0,r.useDebugValue)(`Placement Hook ID - ${e}`),(0,r.useEffect)((()=>{const t=Object.assign({},i),r=n&&null!=t&&t.advertiser_id?{advertiserId:t.advertiser_id}:void 0;return g(e,t,r),()=>{E(e)}}),[]),(0,r.useEffect)((()=>{Object.keys(i).length>0&&_([e],p,i)}),[i]);const h=(0,o.useSelector)((t=>d(t,e))),I=(0,o.useSelector)((t=>t.experiencesMulti[e])),v=h?h.triggerable_placed_exps:[];(0,r.useEffect)((()=>{((e,t,n={})=>{c.Z.increment(`${e}.${t}`,1,n)})("experienceservice","placementHookExperimentTrigger.1",{platform:"web",placement_id:e,...v}),m(e,i)}),[JSON.stringify(v)]);return{experience:h,experiencesMulti:I,setExtraContext:l}}},940589:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(643913);function o(e){const{query:t,rs:n,scope:o,guideAdded:i,filters:s,user:a}=e;if(!t)return"/";const c={q:t,rs:n};if(s&&(c.filters=s),a&&(c.user=a),i&&i.term&&(c.add_refine=`${i.term}|guide|word|${i.index}`),window.location.pathname.startsWith("/explore"))return`/search/pins/?${(0,r.Z)(c)}`;let d=o;return["pins","buyable_pins","my_pins","boards","users","idea_pins"].includes(d)||(d="pins"),d?`/search/${d}/?${(0,r.Z)(c)}`:`${window.location.pathname}?${(0,r.Z)(c)}`}},439181:(e,t,n)=>{n.d(t,{N:()=>l,t:()=>p});var r=n(667294),o=n(904431),i=n(924196),s=n(78714),a=n(6637),c=n(425288),d=n(785893);const{Provider:u,useHook:l}=(0,c.Z)("LinkedAccount");function p({children:e}){const[t,n]=(0,r.useState)(!1),[c,l]=(0,r.useState)([]),p=(0,r.useCallback)((({businessName:e,thirdPartyApps:t,thirdPartyMarketingTrackingEnabled:r,nextUrl:c})=>{n(!0);const d={business_name:e,third_party_apps:t};return a.Z.create("BusinessOwnershipResource",d).callCreate({showError:!0}).then((()=>{r&&(o.Z.reportFacebookConversion(i.Z.FACEBOOK_ADVERTISER_ID,"CompleteRegistration",{content_name:"/business/convert"}),o.Z.reportPinterestConversion("track","lead",{lead_type:"Self-serve"}),o.Z.reportLinkedInConversion(i.Z.LINKEDIN_PARTNER_ID,i.Z.LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT),o.Z.reportGoogleConversion(i.Z.GOOGLE_ADWORDS_ID,i.Z.GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT)),n(!1),(e=>{(0,s.Z)(e?`/?next=${encodeURIComponent(e)}`:"/")})(c)})).catch((e=>(n(!1),Promise.reject({error:e}))))}),[n]),_=(0,r.useMemo)((()=>({createLinkedBusinessAccount:p,linkedBusinessCreationLoading:t,userAccounts:c,userAccountsRetrieved:l})),[p,t,l,c]);return(0,d.jsx)(u,{value:_,children:e})}},385269:(e,t,n)=>{n.d(t,{J:()=>d,Z:()=>_});var r=n(667294),o=n(439181),i=n(425288),s=n(934523),a=n(785893);const{Provider:c,useHook:d}=(0,i.Z)("Header"),u={childList:!0,attributes:!0,subtree:!0},l={height:s.cI,isInBiznuxFullscreen:!1,repinPinId:null,repinStartAnimation:!1,showAccountMenuFlyout:!1};function p(e,t){switch(t.type){case"showAccountMenuFlyout":return{...e,showAccountMenuFlyout:!0};case"hideAccountMenuFlyout":return{...e,showAccountMenuFlyout:!1};case"showRepinAnimation":return{...e,repinStartAnimation:!0,repinPinId:t.payload};case"hideRepinAnimation":return{...e,repinStartAnimation:!1,repinPinId:null};case"updateHeight":return{...e,height:t.payload};case"updateIsInBiznuxFullscreen":return{...e,isInBiznuxFullscreen:t.payload};default:throw new Error("action type not supported")}}function _({children:e}){const t=(0,r.useRef)(null),[{height:n,isInBiznuxFullscreen:i,repinPinId:d,repinStartAnimation:_,showAccountMenuFlyout:g},m]=(0,r.useReducer)(p,l);(0,r.useEffect)((()=>{const e=document.getElementById(s.WZ),n=()=>{e&&m({type:"updateHeight",payload:e.clientHeight})};return e&&"undefined"!=typeof MutationObserver&&(t.current=new MutationObserver(n),t.current.observe(e,u)),()=>{var e;null===(e=t.current)||void 0===e||e.disconnect()}}));const E=(0,r.useMemo)((()=>({height:n,isInBiznuxFullscreen:i,repinPinId:d,repinStartAnimation:_,showAccountMenuFlyout:g,updateHeaderState:m})),[m,n,i,d,_,g]);return(0,a.jsx)(c,{value:E,children:(0,a.jsx)(o.t,{children:e})})}},541618:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(215292),o=n(883119),i=n(785893);function s(e,t){return t?"primary":e?"tertiary":void 0}function a({colors:e,isSelected:t,onClick:n}){return(0,i.jsx)(r.q,{children:({hovered:r,onMouseEnter:a,onMouseLeave:c})=>(0,i.jsx)(o.kC,{alignItems:"center",height:64,justifyContent:"start",children:(0,i.jsx)(o.iP,{mouseCursor:"pointer",onMouseEnter:a,onMouseLeave:c,onTap:n,rounding:"pill",children:(0,i.jsx)(o.xu,{alignItems:"center",color:s(r,t),display:"flex",height:64,justifyContent:"center",rounding:"pill",width:92,children:(0,i.jsx)(o.xu,{alignItems:"center",color:"default",display:"flex",height:60,justifyContent:"center",rounding:"pill",width:88,children:(0,i.jsx)(o.xu,{display:"flex",height:56,overflow:"hidden",rounding:"pill",width:84,wrap:!0,children:e.map(((e,t)=>(0,i.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:28,width:42},`${e}-${t}`)))})})})})})})}},116396:(e,t,n)=>{n.d(t,{W:()=>u,Z:()=>p});var r=n(667294),o=n(756306),i=n(541618),s=n(898781),a=n(407043),c=n(883119),d=n(785893);const u=[["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],["#DEBAB0","#E0999A","#DDA67C","#D98A64"],["#9A6B52","#A25847","#B37143","#BF6951"],["#683929","#34261F","#64281B","#4F2221"]],l=[{display:"Range 1",swatch_hex_colors:["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],term:"skin_color_bucket_id:1"},{display:"Range 2",swatch_hex_colors:["#DEBAB0","#E0999A","#DDA67C","#D98A64"],term:"skin_color_bucket_id:2"},{display:"Range 3",swatch_hex_colors:["#9A6B52","#A25847","#B37143","#BF6951"],term:"skin_color_bucket_id:3"},{display:"Range 4",swatch_hex_colors:["#683929","#34261F","#64281B","#4F2221"],term:"skin_color_bucket_id:4"}];function p({currentlyAppliedFiltersParamTerm:e,filterTones:t=l,onClickApplyFilters:n,query:p,showHeaderText:_=!0}){const{logContextEvent:g}=(0,a.v)(),m=(0,s.ZP)(),E=(0,r.useRef)(null),h=(0,r.useRef)(null),I=e?m._('Some ideas in this skin tone range', 'SkinToneFilters.copy.termSelected', 'Skin tone filters text'):m._('Pick a skin tone range', 'SkinToneFilters.copy.noTermSelected', 'Skin tone filters text');return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsxs)(c.kC,{alignItems:_?"center":"start",direction:"column",justifyContent:"start",children:[_&&(0,d.jsx)(c.xu,{marginBottom:2,children:(0,d.jsx)(c.xv,{color:"default",overflow:"normal",weight:"bold",children:I})}),(0,d.jsx)(c.xu,{display:"flex",flex:"none",paddingX:1,ref:E,children:t.map((({term:t},r)=>(0,d.jsx)(c.xu,{"data-test-id":"skin-tone-option",dangerouslySetInlineStyle:{__style:{padding:"0 2px"}},children:(0,d.jsx)(i.Z,{colors:u[r],isSelected:e===t,onClick:()=>(t=>{var r;const o=e===t?"":t;g({event_type:101,component:47,element:10418,view_type:2,aux_data:{entered_query:p,filter_type:"skin_tone",value:o}}),null===(r=h.current)||void 0===r||r.complete(),n(o)})(t)})},t)))})]}),E&&(0,d.jsx)(o.Z,{anchor:E.current,experienceIds:[502978],idealDirection:"right",onExperienceMount:e=>{e.complete&&502978===e.experience_id&&(h.current=e)},placementId:29})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/22585-d6c7c7c1eec48f90.mjs.map