(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vlog-addGroup"],{"06a5":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("4d89")),o={props:["showImg","videoId"],data:function(){return{isLoading:!0}},computed:{},methods:{playVideo:function(t){this.$store.commit("setCurVedio",t),this.$store.commit("setIsVideoShow",!0)},viewoHeight:function(){var t=this.$refs.videoPlayer;return 3*t/4+"px"},onLoaded:function(){this.isLoading=!1}},components:{lazyImage:a.default}};n.default=o},1321:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.video-card[data-v-58e2098b]{text-align:left;margin-bottom:%?20?%}.video-card .video-image[data-v-58e2098b]{width:100%}.video-card .info .title[data-v-58e2098b]{padding:%?20?% %?32?%}.video-card .info .title .inner[data-v-58e2098b]{display:block;height:%?50?%;overflow:hidden}.video-card .info .discription[data-v-58e2098b]{font-weight:400}.video-card .info .discription .text[data-v-58e2098b]{width:100%;overflow:hidden;text-overflow:ellipsis}.video-card .info .actionbox[data-v-58e2098b]{padding-bottom:%?20?%;text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.video-card.grid-2[data-v-58e2098b]{-webkit-box-flex:0;-webkit-flex:0 0 50%;flex:0 0 50%}.video-card.grid-2[data-v-58e2098b]:nth-child(2n){padding-left:%?6.9?%}.video-card.grid-2[data-v-58e2098b]:nth-child(2n-1){padding-right:%?6.9?%}.video-card.full[data-v-58e2098b]{background:#fff;padding-left:0!important;padding-right:0!important;padding-left:0!important;padding-left:0!important;-webkit-box-flex:0;-webkit-flex:0 0 100%;flex:0 0 100%}.video-card.full[data-v-58e2098b]:first-child{padding-top:0}.factional-icon[data-v-58e2098b]{margin-left:%?20?%}',""])},"18e2":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"video-card clearfix",class:t.extraClass},["full"==t.extraClass?e("videoShower",{attrs:{showImg:t.vdata.images?t.vdata.images.list:t.defaultVideoImg,videoId:t.vdata.id}}):e("videoShower",{attrs:{showImg:t.vdata.images?t.vdata.images.hot:t.defaultVideoImg,videoId:t.vdata.id}}),e("v-uni-view",{staticClass:"info foren-bg"},[e("v-uni-view",{staticClass:"dark-text T3 title"},[e("v-uni-text",{staticClass:"inner"},[t._v(t._s(t.vdata.title))])],1),"full"==t.extraClass?e("v-uni-view",{staticClass:"actionbox"},[e("operateIconRroup",{attrs:{iconLists:t.icons,actionData:t.vdata,type:"video",from:"videoList",quotePage:"video"},on:{onShare:function(n){arguments[0]=n=t.$handleEvent(n),t.onShare.apply(void 0,arguments)},onCollect:function(n){arguments[0]=n=t.$handleEvent(n),t.$emit("onCollect")}}})],1):t._e()],1)],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"1fdf":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.base-title[data-v-7166d052]{margin-top:%?16?%;height:%?88?%;padding:0 %?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row;flex-flow:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.base-title .title[data-v-7166d052]{line-height:%?88?%}',""])},"25b2":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{name:{type:String},isSlot:{type:Boolean}},data:function(){return{isExpand:!1}},methods:{choose:function(){this.$emit("onChoose")}}};n.default=i},"27c4":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{ref:"videoPlayer",staticClass:"video-shower",style:{height:t.viewoHeight()},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.playVideo(t.videoId)}}},[e("v-uni-view",{staticClass:"img-wap"},[e("lazyImage",{staticClass:"video-image",attrs:{realSrc:t.showImg,placeholdSrc:t.defaultVideoImg,mode:"aspectFit"},on:{loaded:function(n){arguments[0]=n=t.$handleEvent(n),t.onLoaded.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"mark-bg mark"}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"play-icon fg-text"},[e("actionIcon",{attrs:{iconClass:"icon-bofang"}})],1)],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"33bc":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"indexPage addgroup lightTheme"},[e("v-uni-view",{staticClass:"col-item flex-center content"},[e("v-uni-image",{staticClass:"qr-image",attrs:{src:"https://mhb.hanyujingyun.cn/erweima/zunshengyin.svg"}}),e("v-uni-view",{staticClass:"text-center dark-text"},[t._v("微信扫描上方二维码加入")]),e("v-uni-button",{staticClass:"page-btn assistant-box assistant-text",attrs:{type:"button"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toBack.apply(void 0,arguments)}}},[t._v("返回课程")]),e("v-uni-button",{staticClass:"page-btn assistant-trspbox border",attrs:{type:"button"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toHome.apply(void 0,arguments)}}},[t._v("回到首页")])],1)],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"47cf":function(t,n,e){"use strict";e.r(n);var i=e("c610"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},4994:function(t,n,e){var i=e("ef51");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2d1e7b42",i,!0,{sourceMap:!1,shadowMode:!1})},5533:function(t,n,e){var i=e("1fdf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("16e04b8e",i,!0,{sourceMap:!1,shadowMode:!1})},"57d2":function(t,n,e){"use strict";var i=e("9478"),a=e.n(i);a.a},"63b6c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("6762"),e("2fdb");var i={name:"skeleton",props:{bgcolor:{type:String,value:"#FFF"},selector:{type:String,value:"skeleton"},loading:{type:String,value:"spin"}},data:function(){return{loadingAni:["spin","chiaroscuro"],systemInfo:{},skeletonRectLists:[],skeletonCircleLists:[],skeletonWhiteRectLists:[],skeletonWhiteCircleLists:[]}},computed:{},methods:{getIndex:function(t){return t},attachedAction:function(){var t=uni.getSystemInfoSync();this.systemInfo={width:t.windowWidth,height:t.windowHeight},this.loading=this.loadingAni.includes(this.loading)?this.loading:"spin"},readyAction:function(){var t=this;uni.createSelectorQuery().selectAll(".".concat(this.selector)).boundingClientRect().exec(function(t){}),setTimeout(function(){t.rectHandle(),t.radiusHandle(),t.rectWhiteHandle(),t.radiusWhiteHandle()},550)},rectHandle:function(){var t=this;uni.createSelectorQuery().selectAll(".".concat(this.selector,"-rect")).boundingClientRect().exec(function(n){t.skeletonRectLists=n[0]})},radiusHandle:function(){var t=this;uni.createSelectorQuery().selectAll(".".concat(this.selector,"-radius")).boundingClientRect().exec(function(n){t.skeletonCircleLists=n[0]})},rectWhiteHandle:function(){var t=this;uni.createSelectorQuery().selectAll(".".concat(this.selector,"-rect-white")).boundingClientRect().exec(function(n){t.skeletonWhiteRectLists=n[0]})},radiusWhiteHandle:function(){var t=this;uni.createSelectorQuery().selectAll(".".concat(this.selector,"-radius-white")).boundingClientRect().exec(function(n){t.skeletonWhiteCircleLists=n[0]})}}};n.default=i},"66f28":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("afc2")),o=i(e("8522")),r={props:{extraClass:{value:String,default:"full"},vdata:{value:Object}},data:function(){var t=[{name:"collect"},{name:"share"}];return{icons:t}},computed:{shareConfig:function(){return this.$store.state.shareConfig}},methods:{onShare:function(){var t={title:this.vdata.title,desc:this.vdata.description||this.vdata.title,link:window.location.origin+"/#/pages/video/videoDetail?curId="+this.vdata.id+"&autoplay=true&app=false&back=false",imgUrl:this.vdata.images&&this.vdata.images.last?this.vdata.images.last:"https://mhb.hanyujingyun.cn/image/video.png",success:function(){}};this.WX.updateAppMessageShareData(t),this.WX.updateTimelineShareData(t),this.shareConfig.push(t),this.$store.commit("setShareConfig",this.shareConfig)}},watch:{},components:{videoShower:a.default,operateIconRroup:o.default}};n.default=r},7852:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"skeletonWrp",style:{width:t.systemInfo.width+"px",height:t.systemInfo.height+"px",backgroundColor:t.bgcolor,position:"absolute",left:0,top:0,zIndex:9998,overflow:"hidden"}},[t._l(t.skeletonRectLists,function(n,i){return e("v-uni-view",{key:i+"a",class:["chiaroscuro"==t.loading?"chiaroscuro":""],style:{width:n.width+"px",height:n.height+"px",position:"absolute",left:n.left+"px",top:n.top+"px"}})}),t._l(t.skeletonCircleLists,function(n,i){return e("v-uni-view",{key:i+"b",class:"chiaroscuro"==t.loading?"chiaroscuro ":"",style:{width:n.width+"px",height:n.height+"px",borderRadius:n.width+"px",position:"absolute",left:n.left+"px",top:n.top+"px"}})}),t._l(t.skeletonWhiteRectLists,function(n,i){return e("v-uni-view",{key:i+"c",class:["chiaroscuro"==t.loading?"chiaroscuro white":""],style:{width:n.width+"px",height:n.height+"px",position:"absolute",left:n.left+"px",top:n.top+"px"}})}),t._l(t.skeletonWhiteCircleLists,function(n,i){return e("v-uni-view",{key:i+"d",class:"chiaroscuro"==t.loading?"chiaroscuro white":"",style:{width:n.width+"px",height:n.height+"px",borderRadius:n.width+"px",position:"absolute",left:n.left+"px",top:n.top+"px"}})}),"spin"==t.loading?e("v-uni-view",{staticClass:"spinbox"},[e("v-uni-view",{staticClass:"spin"})],1):t._e()],2)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"785b":function(t,n,e){"use strict";e.r(n);var i=e("06a5"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"7a34":function(t,n,e){var i=e("a212");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1d0b7c1a",i,!0,{sourceMap:!1,shadowMode:!1})},"80ef":function(t,n,e){"use strict";var i=e("7a34"),a=e.n(i);a.a},8402:function(t,n,e){"use strict";e.r(n);var i=e("18e2"),a=e("b830");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("57d2");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"58e2098b",null,!1,i["a"],r);n["default"]=c.exports},"91b5":function(t,n,e){"use strict";var i=e("bac1"),a=e.n(i);a.a},9478:function(t,n,e){var i=e("1321");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("6ea48305",i,!0,{sourceMap:!1,shadowMode:!1})},"9c60":function(t,n,e){"use strict";e.r(n);var i=e("7852"),a=e("d97e");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("be24");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"cd618b94",null,!1,i["a"],r);n["default"]=c.exports},a0c6:function(t,n,e){"use strict";e.r(n);var i=e("dda4"),a=e("ed18");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("bbe9");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7166d052",null,!1,i["a"],r);n["default"]=c.exports},a212:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.addgroup .content[data-v-553e7420]{margin-top:%?256?%;padding:%?32?%}.addgroup .page-btn[data-v-553e7420]{margin-top:%?32?%;width:100%}.addgroup .page-btn[data-v-553e7420]:after{border:none}',""])},afc2:function(t,n,e){"use strict";e.r(n);var i=e("27c4"),a=e("785b");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("91b5");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e921ee34",null,!1,i["a"],r);n["default"]=c.exports},b830:function(t,n,e){"use strict";e.r(n);var i=e("66f28"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},bac1:function(t,n,e){var i=e("f5df");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1f1a7214",i,!0,{sourceMap:!1,shadowMode:!1})},bbe9:function(t,n,e){"use strict";var i=e("5533"),a=e.n(i);a.a},be24:function(t,n,e){"use strict";var i=e("4994"),a=e.n(i);a.a},c1f7:function(t,n,e){"use strict";e.r(n);var i=e("33bc"),a=e("47cf");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("80ef");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"553e7420",null,!1,i["a"],r);n["default"]=c.exports},c610:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("8402")),i(e("a0c6")),i(e("9c60"));var a={data:function(){return{}},computed:{},mounted:function(){},methods:{toHome:function(){uni.redirectTo({url:"/pages/h5/index"})},toBack:function(){uni.navigateBack()}},watch:{},components:{}};n.default=a},d97e:function(t,n,e){"use strict";e.r(n);var i=e("63b6c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},dda4:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"base-title foren-bg"},[e("v-uni-view",{staticClass:"dark-text title"},[t._v(t._s(t.name)),t.isSlot?t._t("default"):t._e()],2),e("v-uni-view",{staticClass:"assistant-text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.choose.apply(void 0,arguments)}}},[e("actionIcon",{staticClass:"action-icon",attrs:{iconClass:"icon-rightArrow",extraClass:"down"}})],1)],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},ed18:function(t,n,e){"use strict";e.r(n);var i=e("25b2"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},ef51:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \t.skeletonWrp{\n\t\theight: 100%;\n\t} */.spinbox[data-v-cd618b94]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:100%;z-index:9999}.spin[data-v-cd618b94]{display:inline-block;width:%?64?%;height:%?64?%}.spin[data-v-cd618b94]:after{content:" ";display:block;width:%?46?%;height:%?46?%;margin:%?1?%;border-radius:50%;border:%?5?% solid #409eff;border-color:#409eff transparent #409eff transparent;-webkit-animation:spin-data-v-cd618b94 1.2s linear infinite;animation:spin-data-v-cd618b94 1.2s linear infinite}@-webkit-keyframes spin-data-v-cd618b94{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-cd618b94{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.chiaroscuro[data-v-cd618b94]{width:100%;height:100%;background:#e4e4e4;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:blink-data-v-cd618b94;animation-name:blink-data-v-cd618b94;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.chiaroscuro.white[data-v-cd618b94]{background:#fff}@-webkit-keyframes blink-data-v-cd618b94{0%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes blink-data-v-cd618b94{0%{opacity:.4}50%{opacity:1}to{opacity:.4}}@-webkit-keyframes flush-data-v-cd618b94{0%{left:-100%}50%{left:0}to{left:100%}}@keyframes flush-data-v-cd618b94{0%{left:-100%}50%{left:0}to{left:100%}}.shine[data-v-cd618b94]{-webkit-animation:flush-data-v-cd618b94 2s linear infinite;animation:flush-data-v-cd618b94 2s linear infinite;position:absolute;top:0;bottom:0;width:100%;background:-webkit-linear-gradient(right,hsla(0,0%,100%,0),hsla(0,0%,100%,.85) 50%,hsla(0,0%,100%,0));background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.85) 50%,hsla(0,0%,100%,0))}',""])},f5df:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.video-shower[data-v-e921ee34]{width:100%;position:relative}.video-shower .img-wap[data-v-e921ee34]{width:100%;height:%?400?%;overflow:hidden}.video-shower .img-wap .video-image[data-v-e921ee34]{width:100%}.video-shower .play-icon[data-v-e921ee34]{width:%?100?%;height:%?100?%;background-size:cover;display:inline-block;position:absolute;left:50%;margin-left:%?-50?%;top:50%;margin-top:%?-50?%;z-index:10}.video-shower .play-icon .action-icon[data-v-e921ee34]{font-size:%?88?%;line-height:%?88?%}.grid-2.video-card .img-wap[data-v-e921ee34]{height:%?192?%}',""])}}]);