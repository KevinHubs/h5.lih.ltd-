(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalCenter-personalCard~pages-personalCenter-personalCenter"],{"0452":function(t,e,a){"use strict";a.r(e);var n=a("baf5"),i=a("45b6");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("385c");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"19da9914",null,!1,n["a"],o);e["default"]=c.exports},"06a5":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("4d89")),s={props:["showImg","videoId"],data:function(){return{isLoading:!0}},computed:{},methods:{playVideo:function(t){this.$store.commit("setCurVedio",t),this.$store.commit("setIsVideoShow",!0)},viewoHeight:function(){var t=this.$refs.videoPlayer;return 3*t/4+"px"},onLoaded:function(){this.isLoading=!1}},components:{lazyImage:i.default}};e.default=s},"0b55":function(t,e,a){var n=a("d6d6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a0c0ee18",n,!0,{sourceMap:!1,shadowMode:!1})},1321:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.video-card[data-v-58e2098b]{text-align:left;margin-bottom:%?20?%}.video-card .video-image[data-v-58e2098b]{width:100%}.video-card .info .title[data-v-58e2098b]{padding:%?20?% %?32?%}.video-card .info .title .inner[data-v-58e2098b]{display:block;height:%?50?%;overflow:hidden}.video-card .info .discription[data-v-58e2098b]{font-weight:400}.video-card .info .discription .text[data-v-58e2098b]{width:100%;overflow:hidden;text-overflow:ellipsis}.video-card .info .actionbox[data-v-58e2098b]{padding-bottom:%?20?%;text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.video-card.grid-2[data-v-58e2098b]{-webkit-box-flex:0;-webkit-flex:0 0 50%;flex:0 0 50%}.video-card.grid-2[data-v-58e2098b]:nth-child(2n){padding-left:%?6.9?%}.video-card.grid-2[data-v-58e2098b]:nth-child(2n-1){padding-right:%?6.9?%}.video-card.full[data-v-58e2098b]{background:#fff;padding-left:0!important;padding-right:0!important;padding-left:0!important;padding-left:0!important;-webkit-box-flex:0;-webkit-flex:0 0 100%;flex:0 0 100%}.video-card.full[data-v-58e2098b]:first-child{padding-top:0}.factional-icon[data-v-58e2098b]{margin-left:%?20?%}',""])},1334:function(t,e,a){"use strict";a.r(e);var n=a("f782"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"18e2":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"video-card clearfix",class:t.extraClass},["full"==t.extraClass?a("videoShower",{attrs:{showImg:t.vdata.images?t.vdata.images.list:t.defaultVideoImg,videoId:t.vdata.id}}):a("videoShower",{attrs:{showImg:t.vdata.images?t.vdata.images.hot:t.defaultVideoImg,videoId:t.vdata.id}}),a("v-uni-view",{staticClass:"info foren-bg"},[a("v-uni-view",{staticClass:"dark-text T3 title"},[a("v-uni-text",{staticClass:"inner"},[t._v(t._s(t.vdata.title))])],1),"full"==t.extraClass?a("v-uni-view",{staticClass:"actionbox"},[a("operateIconRroup",{attrs:{iconLists:t.icons,actionData:t.vdata,type:"video",from:"videoList",quotePage:"video"},on:{onShare:function(e){arguments[0]=e=t.$handleEvent(e),t.onShare.apply(void 0,arguments)},onCollect:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("onCollect")}}})],1):t._e()],1)],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"1e52":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"card panel",class:t.times},[t._t("default")],2)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},2473:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=n(a("bd86")),o=n(a("795b")),r=n(a("3e64")),c=(i={props:{vdata:{type:Object}},data:function(){return{isPlay:!1,initData:this.vdata}},mounted:function(){},computed:{_extraClass:function(){var t="full"==this.extraClass?" panel":"";return this.extraClass+t}}},(0,s.default)(i,"mounted",function(){this.$store.commit("setDocTxt","right")}),(0,s.default)(i,"methods",{toDocText:function(t){var e=this;this.$store.commit("setIsShowDocText",!0);var a={classicId:this.initData.id,chapterId:this.initData.chapterId||(this.initData.position?this.initData.position.chapterId:"")};a.chapterId?this.$store.commit("setDocTextData",a):this.getDetailData(this.initData).then(function(t){a.chapterId=t.position.chapterId,e.$store.commit("setDocTextData",a)})},showDetail:function(){this.$emit("playMantra",this.initData),this.$store.commit("setIsShowMantraDetail",!0)},getDetailData:function(t){var e=this;return new o.default(function(a,n){e.getData(e.APIURL+"/classic/classic/detail",{classicId:t.id},function(t){"suc"==t.result&&a(t.data)})})},getData:function(t,e,a,n){e=e||"",uni.request({url:t,data:e,method:"post",header:{SessionKey:uni.getStorageSync("session_key")},success:function(t){var e=t.data;setTimeout(function(){uni.hideLoading()},1500),a(e)},fail:function(t){n&&n(t),setTimeout(function(){uni.hideLoading()},1500)}})}}),(0,s.default)(i,"components",{card:r.default}),(0,s.default)(i,"watch",{}),i);e.default=c},2720:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.personal-header[data-v-19da9914]{padding:0 %?16?%;background-size:cover;position:relative;z-index:1}.personal-header .header-bgImg[data-v-19da9914]{position:absolute;left:0;top:0;width:100%;height:%?440?%;z-index:-1}.personal-header .action-icon[data-v-19da9914]{font-size:%?40?%}.personal-header .card[data-v-19da9914]{padding:%?20?% %?20?%;border-radius:%?4?%;margin-top:%?200?%}.personal-header .user-info[data-v-19da9914]{text-align:left;padding:%?16?% 0}.personal-header .user-info .user-img[data-v-19da9914]{width:%?160?%;height:%?160?%;margin-bottom:%?10?%;border-radius:50%}.personal-header .user-info .info-row[data-v-19da9914]{padding-left:%?30?%;margin-top:%?16?%;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.personal-header .user-info .info-row .info[data-v-19da9914]{width:%?440?%}.personal-header .user-info .info-row .user-name[data-v-19da9914]{font-weight:600}.personal-header .user-info .action-icon[data-v-19da9914]{font-size:%?36?%}.personal-header .signature uni-label[data-v-19da9914]{background:rgba(195,190,180,.7);margin-right:%?8?%;padding:%?4?% %?16?%}.personal-header .signature uni-label .action-icon[data-v-19da9914]{font-size:%?24?%}.personal-header .other-info[data-v-19da9914]{height:%?100?%}.personal-header .other-info .col-item[data-v-19da9914]{-webkit-box-flex:1.0;-webkit-flex:1.0;flex:1.0;text-align:center}',""])},"27c4":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{ref:"videoPlayer",staticClass:"video-shower",style:{height:t.viewoHeight()},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playVideo(t.videoId)}}},[a("v-uni-view",{staticClass:"img-wap"},[a("lazyImage",{staticClass:"video-image",attrs:{realSrc:t.showImg,placeholdSrc:t.defaultVideoImg,mode:"aspectFit"},on:{loaded:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"mark-bg mark"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"play-icon fg-text"},[a("actionIcon",{attrs:{iconClass:"icon-bofang"}})],1)],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"2dad":function(t,e,a){var n=a("cfe1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1185fec4",n,!0,{sourceMap:!1,shadowMode:!1})},"2e77":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("e814")),s={props:{isPlaying:{type:Boolean},audioData:{type:[Object,String]}},data:function(){return this,{}},computed:{},mounted:function(){},methods:{getSeconds:function(t){var e=(0,i.default)(60*Math.random());return t?(0,i.default)(t):e}},components:{}};e.default=s},3179:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"panel QA-card"},[a("v-uni-view",{staticClass:"questions"},[a("v-uni-view",{staticClass:"car-header"},[a("v-uni-view",[a("v-uni-image",{staticClass:"userImg",attrs:{src:t.cardData.questionAvatar?t.cardData.questionAvatar:t.defaultUserImg,mode:"aspectFit"}}),a("v-uni-text",{staticClass:"user-name T4 mudium-text"},[t._v(t._s(t.cardData.questionNickname))])],1),a("v-uni-view",{staticClass:"light-text"},[a("operateIconRroup",{attrs:{iconLists:t.shareIcons,showText:"",actionData:t.cardData,type:"question",from:"question",quotePage:"question"},on:{onShare:function(e){arguments[0]=e=t.$handleEvent(e),t.onShare.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"card-content T3"},[a("v-uni-view",{staticClass:"txt dark-text text"},[t._v(t._s(t.cardData.questionContent))])],1)],1),a("v-uni-view",{staticClass:"answer"},[a("v-uni-view",{staticClass:"car-header"},[a("v-uni-view",[a("v-uni-image",{staticClass:"userImg",attrs:{src:t.cardData.answerAvatar?t.cardData.answerAvatar:t.defaultUserImg,mode:"aspectFit"}}),a("v-uni-text",{staticClass:"user-name T4 mudium-text"},[t._v(t._s(t.cardData.answerNickname))])],1)],1),a("v-uni-view",{staticClass:"card-content T3"},[a("v-uni-rich-text",{attrs:{nodes:t.cardData.answerContent}})],1)],1),a("v-uni-view",{staticClass:"card-footer row-item bgclr-line light-text"},[a("v-uni-view",{staticClass:"T4"},[t._v(t._s(t.cardData.timecreated)),1==t.cardData.is_mine?a("actionIcon",{staticClass:"action-icon",attrs:{iconClass:"icon-delete"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteQa.apply(void 0,arguments)}}}):t._e()],1),a("v-uni-view",{staticClass:"right"},[a("operateIconRroup",{attrs:{iconLists:t.icons,actionData:t.cardData,type:"question",from:"question",quotePage:"question"},on:{onCollect:function(e){arguments[0]=e=t.$handleEvent(e),t.onCollect.apply(void 0,arguments)}}})],1)],1)],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"385c":function(t,e,a){"use strict";var n=a("4a59c"),i=a.n(n);i.a},"3cde":function(t,e,a){"use strict";a.r(e);var n=a("cdb4"),i=a("d3bf");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("c788");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"1f20c954",null,!1,n["a"],o);e["default"]=c.exports},"3e64":function(t,e,a){"use strict";a.r(e);var n=a("1e52"),i=a("58fc");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("870a");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"24c51782",null,!1,n["a"],o);e["default"]=c.exports},"45b6":function(t,e,a){"use strict";a.r(e);var n=a("bd3f"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"4a59c":function(t,e,a){var n=a("2720");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("29e3c34c",n,!0,{sourceMap:!1,shadowMode:!1})},"57d2":function(t,e,a){"use strict";var n=a("9478"),i=a.n(n);i.a},"58fc":function(t,e,a){"use strict";a.r(e);var n=a("683d"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"61c0":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.YY-button[data-v-1f20c954]{width:%?356?%;height:%?72?%;border-top-right-radius:%?72?%;border-bottom-right-radius:%?72?%;border-top-left-radius:%?72?%;padding:%?16?% %?40?%;margin-left:%?60?%}.YY-button .action-icon[data-v-1f20c954]{font-size:%?44?%;line-height:%?42?%}.YY-button .text[data-v-1f20c954]{line-height:%?42?%;margin-left:%?10?%}',""])},"66f28":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("afc2")),s=n(a("8522")),o={props:{extraClass:{value:String,default:"full"},vdata:{value:Object}},data:function(){var t=[{name:"collect"},{name:"share"}];return{icons:t}},computed:{shareConfig:function(){return this.$store.state.shareConfig}},methods:{onShare:function(){var t={title:this.vdata.title,desc:this.vdata.description||this.vdata.title,link:window.location.origin+"/#/pages/video/videoDetail?curId="+this.vdata.id+"&autoplay=true&app=false&back=false",imgUrl:this.vdata.images&&this.vdata.images.last?this.vdata.images.last:"https://mhb.hanyujingyun.cn/image/video.png",success:function(){}};this.WX.updateAppMessageShareData(t),this.WX.updateTimelineShareData(t),this.shareConfig.push(t),this.$store.commit("setShareConfig",this.shareConfig)}},watch:{},components:{videoShower:i.default,operateIconRroup:s.default}};e.default=o},"683d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["times"],data:function(){return{}},computed:{},methods:{}};e.default=n},"72d2":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"mantra-item foren-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDetail.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"row-item align-center"},[a("actionIcon",{staticClass:"action-icon",attrs:{extraClass:"assistant-text",iconClass:t.isPlay?"icon-zanting":"icon-bofang"}}),a("v-uni-view",{staticClass:"title T3 dark-text text-left"},[t._v(t._s(t.initData.title))])],1),a("v-uni-view",{staticClass:"toDocText assistant-text ",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toDocText.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"T3 "},[t._v("听与看")]),a("actionIcon",{attrs:{iconClass:"icon-wengao",extraClass:"assistant-text action-icon"}})],1)],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"785b":function(t,e,a){"use strict";a.r(e);var n=a("06a5"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},8402:function(t,e,a){"use strict";a.r(e);var n=a("18e2"),i=a("b830");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("57d2");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"58e2098b",null,!1,n["a"],o);e["default"]=c.exports},"870a":function(t,e,a){"use strict";var n=a("0b55"),i=a.n(n);i.a},8905:function(t,e,a){"use strict";a.r(e);var n=a("72d2"),i=a("d8bd");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("d944");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0d1c644b",null,!1,n["a"],o);e["default"]=c.exports},"91b5":function(t,e,a){"use strict";var n=a("bac1"),i=a.n(n);i.a},9478:function(t,e,a){var n=a("1321");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6ea48305",n,!0,{sourceMap:!1,shadowMode:!1})},afc2:function(t,e,a){"use strict";a.r(e);var n=a("27c4"),i=a("785b");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("91b5");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"e921ee34",null,!1,n["a"],o);e["default"]=c.exports},b830:function(t,e,a){"use strict";a.r(e);var n=a("66f28"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},bac1:function(t,e,a){var n=a("f5df");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1f1a7214",n,!0,{sourceMap:!1,shadowMode:!1})},baf5:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"personal-header"},[a("v-uni-image",{staticClass:"header-bgImg",attrs:{src:t.userInfo.cover?t.userInfo.cover:"https://mhb.hanyujingyun.cn/images/personalDefaultBg.png",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"row-item flex-end fg-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toback.apply(void 0,arguments)}}},[a("actionIcon",{staticClass:"action-icon",attrs:{iconClass:"icon-rightArrow",extraClass:"upDown"}})],1),a("v-uni-view",{staticClass:"card foren-bg"},[a("v-uni-view",{staticClass:"row-item user-info flex-start"},[a("v-uni-image",{staticClass:"user-img",attrs:{src:t.userInfo.avatar?t.userInfo.avatar:t.defaultUserImg}}),a("v-uni-view",{staticClass:"info-row row-item flex-between"},[a("v-uni-view",{staticClass:"col-item flex-start info"},[a("v-uni-view",{staticClass:"medium-text T1 user-name"},[t._v(t._s(t.userInfo.nickname||"游客，您好"))]),a("v-uni-view",{staticClass:"text-left medium-text sign-txt"},[t._v(t._s(t.userInfo.sign||"签名"))])],1),"center"==t.from?a("v-uni-view",{staticClass:"assistant-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPersonalInfo.apply(void 0,arguments)}}},[a("actionIcon",{staticClass:"action-icon",attrs:{iconClass:"icon-edit",extraClass:"upDown"}})],1):t._e()],1)],1),a("v-uni-view",{staticClass:"col-item signature  text-left"},[a("v-uni-view",[a("v-uni-text",{staticClass:"medium-text"},[t._v("标签：")]),a("v-uni-label",{staticClass:"T4 fg-text"},[t._v(t._s(t.userInfo.gender||"性别"))]),a("v-uni-label",{staticClass:"T4 fg-text"},[t._v(t._s(t.userInfo.constellation||"星座"))])],1)],1)],1)],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},bd3f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{from:{type:String},userInfo:{type:Object}},data:function(){return{bgImg:"https://mhb.hanyujingyun.cn/images/personalBg.png"}},computed:{sessionKey:function(){return this.$store.state.sessionKey},plateform:function(){return this.$store.state.plateform}},methods:{toback:function(){this.$emit("back")},toPersonalInfo:function(){this.$store.commit("setIsShowPesonalInfo",!0),this.sessionKey?this.$store.commit("setIsShowPesonalInfo",!0):wxLogin.toLogin(this)}},components:{}};e.default=n},bfba:function(t,e,a){"use strict";var n=a("c9ef"),i=a.n(n);i.a},c33b:function(t,e,a){var n=a("61c0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("cc26da00",n,!0,{sourceMap:!1,shadowMode:!1})},c788:function(t,e,a){"use strict";var n=a("c33b"),i=a.n(n);i.a},c9ef:function(t,e,a){var n=a("f14d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("ac10986a",n,!0,{sourceMap:!1,shadowMode:!1})},cdb4:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"YY-button assistant-box row-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")}}},[a("actionIcon",{staticClass:"action-icon",attrs:{iconClass:t.isPlaying?"icon-zanting":"icon-bofang"}}),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getSeconds(t.audioData?t.audioData.duration:0))+"秒")]),t._t("default")],2)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},cfe1:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mantra-item[data-v-0d1c644b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row;flex-flow:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?16?% %?16?%;height:%?128?%;border-radius:%?4?%}.mantra-item .title[data-v-0d1c644b]{margin-left:%?18?%;max-width:%?440?%;max-height:%?96?%;line-height:%?48?%;overflow:hidden}.mantra-item .action-icon[data-v-0d1c644b]{font-size:%?46?%}.mantra-item .toDocText[data-v-0d1c644b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mantra-item .toDocText .action-icon[data-v-0d1c644b]{font-size:%?46?%;margin-left:%?16?%}',""])},d3bf:function(t,e,a){"use strict";a.r(e);var n=a("2e77"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},d6d6:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.card[data-v-24c51782]{width:100%;height:%?64?%;padding:%?16?%;margin-bottom:%?20?%;cursor:pointer;position:relative}.card.else[data-v-24c51782]{height:%?150?%}.card.x2[data-v-24c51782]{height:%?128?%}.card.x3[data-v-24c51782]{height:%?191.9?%}',""])},d77d:function(t,e,a){"use strict";a.r(e);var n=a("3179"),i=a("1334");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("bfba");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"06d52697",null,!1,n["a"],o);e["default"]=c.exports},d8bd:function(t,e,a){"use strict";a.r(e);var n=a("2473"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},d944:function(t,e,a){"use strict";var n=a("2dad"),i=a.n(n);i.a},f14d:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.QA-card[data-v-06d52697]{padding:%?16?%;width:100%;margin:0 auto;margin-bottom:%?16?%}.QA-card .questions[data-v-06d52697]{padding:%?16?%;border-bottom:%?1?% solid #eee}.QA-card .questions[data-v-06d52697]:nth-child(2){border-bottom:none}.QA-card .questions .car-header[data-v-06d52697]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.QA-card .questions .car-header .userImg[data-v-06d52697]{height:%?50?%;width:%?50?%;float:left}.QA-card .questions .car-header .user-name[data-v-06d52697]{line-height:%?50?%;display:inline-block;margin-left:%?16?%}.QA-card .questions .car-header .action-icon[data-v-06d52697]{font-size:%?28?%}.QA-card .questions .card-content[data-v-06d52697]{padding:%?16?%;text-align:left}.QA-card .questions .card-content .txt[data-v-06d52697]{margin:%?8?% 0 0 %?66?%;line-height:%?40?%}.QA-card .answer[data-v-06d52697]{padding:%?16?%}.QA-card .answer .car-header[data-v-06d52697]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.QA-card .answer .car-header .userImg[data-v-06d52697]{height:%?50?%;width:%?50?%;float:left}.QA-card .answer .car-header .user-name[data-v-06d52697]{line-height:%?50?%;display:inline-block;margin-left:%?16?%}.QA-card .answer .car-header .action-icon[data-v-06d52697]{font-size:%?28?%}.QA-card .answer .card-content[data-v-06d52697]{padding:%?16?% %?16?% %?16?% %?82?%;text-align:left}.QA-card .answer .card-content .txt[data-v-06d52697]{margin:%?8?% 0 0 %?66?%;line-height:%?40?%}.QA-card .card-footer[data-v-06d52697]{border-top:1px solid;padding:%?16?% 0 0 %?16?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.QA-card .card-footer .action-icon[data-v-06d52697]{font-size:%?30?%;line-height:%?30?%;margin-left:%?8?%}',""])},f5df:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.video-shower[data-v-e921ee34]{width:100%;position:relative}.video-shower .img-wap[data-v-e921ee34]{width:100%;height:%?400?%;overflow:hidden}.video-shower .img-wap .video-image[data-v-e921ee34]{width:100%}.video-shower .play-icon[data-v-e921ee34]{width:%?100?%;height:%?100?%;background-size:cover;display:inline-block;position:absolute;left:50%;margin-left:%?-50?%;top:50%;margin-top:%?-50?%;z-index:10}.video-shower .play-icon .action-icon[data-v-e921ee34]{font-size:%?88?%;line-height:%?88?%}.grid-2.video-card .img-wap[data-v-e921ee34]{height:%?192?%}',""])},f782:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5176")),s=n(a("3cde")),o=(a("2f01"),n(a("8522"))),r={props:{qdata:{type:Object},from:{type:String}},data:function(){var t=[{name:"collect"}],e=[{name:"share"}];return{icons:t,shareIcons:e,showAnswer:!1,cardData:this.qdata}},computed:{plateform:function(){return this.$store.state.plateform},shareConfig:function(){return this.$store.state.shareConfig},isShowAnswer:function(){return this.$store.state.isShowAnswer},qaDetailData:function(){return this.$store.state.answerData}},methods:{toDetail:function(t){this.$emit("toDetail",t)},palyAnswer:function(){this.handleIconByAPI("view"),this.cardData.answerAudio?this.showAnswer?(this.Audio.pause(),this.showAnswer=!1):(this.Audio.src=this.cardData.answerAudio.sq,this.Audio.play(),this.showAnswer=!0):(this.$store.commit("setIsShowAnswer",!0),this.$store.commit("setAnswerData",this.cardData))},deleteQa:function(){uni.request({url:this.APIURL+"/classic/question/delete",data:{id:this.cardData.questionId},method:"post",success:function(t){var e=t.data;sucBack(e)}})},handleIconByAPI:function(t,e){var a=this;uni.request({url:this.APIURL+"/classic/question/behavior",data:{target:this.cardData.questionId,type:"question",operation:t},method:"post",header:{SessionKey:uni.getStorageSync("session_key")},success:function(t){var n=t.data;"suc"==n.result?e&&e(n):n.msg.indexOf("登录")>-1&&a.failHand()}})},failHand:function(){var t=this;localStorage.removeItem("lihan_session_key"),localStorage.removeItem("lihan_timestamp"),uni.removeStorageSync("session_key"),"mp"==this.plateform?uni.showModal({title:"登录提示",content:"您现在未登录，请登录后再操作",confirmText:"去登录",confirmColor:"#C3BEB4",success:function(t){t.confirm?window.location.reload():t.cancel}}):t.$store.commit("setIsShowRestor",!0)},onShare:function(){var t={title:this.cardData.questionContent,desc:this.cardData.questionContent,link:window.location.origin+"/#/pages/QA/QAdetail?curId="+this.cardData.questionId+"&app=false&back=true",imgUrl:this.cardData.questionImages?this.cardData.questionImages[0]:"https://mhb.hanyujingyun.cn/image/wenda.png",success:function(){}};this.WX.updateAppMessageShareData(t),this.WX.updateTimelineShareData(t),this.shareConfig.push(t),this.$store.commit("setShareConfig",this.shareConfig)},onCollect:function(){this.cardData.is_collect=0==this.cardData.is_collect?1:0,this.$emit("onCollect")}},watch:{isShowAnswer:function(t){t||this.qaDetailData.questionId==this.cardData.questionId&&(this.cardData.is_collect=this.qaDetailData.is_collect,this.cardData=(0,i.default)({},this.cardData))}},components:{YYbutton:s.default,operateIconRroup:o.default}};e.default=r}}]);