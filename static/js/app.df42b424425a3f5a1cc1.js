webpackJsonp([1],{"2Lio":function(t,e){},Abdq:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("2Lio")},null,null).exports,a=n("/ocq"),s=n("BO1k"),l=n.n(s),u=n("aozt"),c=n.n(u),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("link",{attrs:{rel:"stylesheet",href:"https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css"}}),t._v(" "),n("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[n("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.open=!t.open}},slot:"left"},[n("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n\t  我的第一个vue网站\n\t  "),n("mu-menu",{attrs:{slot:"right"},slot:"right"},[n("mu-button",{attrs:{flat:""}},[t._v("欢迎：vivi")]),t._v(" "),n("mu-list",{attrs:{slot:"content"},slot:"content"},[n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-content",[n("mu-list-item-title",[t._v("我的")])],1)],1),t._v(" "),n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-content",[n("mu-list-item-title",[t._v("退出")])],1)],1)],1)],1)],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:t.docked,right:"right"===t.position},on:{"update:open":function(e){t.open=e}}},[n("mu-list",[n("mu-list-item",{attrs:{button:"",to:"/"}},[n("router-link",{attrs:{to:"/"}},[n("mu-list-item-title",[t._v("首页")])],1)],1),t._v(" "),n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-title",[t._v("捐赠我们")])],1),t._v(" "),n("mu-list-item",{attrs:{button:"",to:"/aboutus"}},[n("router-link",{attrs:{to:"/aboutus"}},[n("mu-list-item-title",[t._v("关于我们")])],1)],1),t._v(" "),n("mu-list-item",{attrs:{button:""},on:{click:function(e){t.open=!1}}},[n("mu-list-item-title",[t._v("关闭")])],1)],1)],1)],1)},staticRenderFns:[]},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"footer"}},[this._v("\n\t© 2018 VIVI Group Inc. All Rights Reserved \n")])},staticRenderFns:[]};var v={name:"layout",components:{"v-header":n("VU/8")({name:"gheader",data:function(){return{docked:!1,open:!1,position:"left"}}},d,!1,null,null,null).exports,"v-footer":n("VU/8")({name:"gfooter"},m,!1,function(t){n("RhQ1")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout"}},[e("v-header"),this._v(" "),this._t("default"),this._v(" "),e("v-footer")],2)},staticRenderFns:[]},f=n("VU/8")(v,p,!1,null,null,null).exports,h={name:"index",components:{"v-layout":f},data:function(){return{imgList:[],getImgUrl:"http://my.weixin.com/index.php/api-getad",videoList:[],getVideoUrl:"http://my.weixin.com/index.php/api-getVideo",refreshing:!1,loading:!1,loadedAll:!1,page:1,limit:15}},created:function(){this.getCarouselImg(),this.getVideo()},methods:{getCarouselImg:function(){var t=this;c.a.get(t.getImgUrl).then(function(e){t.imgList=e.data})},getVideo:function(){var t=this;c.a.get(t.getVideoUrl,{params:{p:t.page,l:t.limit}}).then(function(e){if(e.data.length>0){if(t.videoList.length>0){var n=!0,i=!1,o=void 0;try{for(var r,a=l()(e.data);!(n=(r=a.next()).done);n=!0){var s=r.value;t.videoList.push(s)}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}}else t.videoList=e.data;t.page++}else t.loadedAll=!0,alert("已经到底啦！")})},load:function(){this.loading=!0;var t=this;setTimeout(function(){t.getVideo(),t.loading=!1},2e3)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("mu-carousel",t._l(t.imgList,function(t){return n("mu-carousel-item",[n("img",{attrs:{src:t.a_url}})])})),t._v(" "),n("mu-paper",{staticClass:"demo-loadmore-wrap",attrs:{"z-depth":1}},[n("mu-container",{ref:"container",staticClass:"demo-loadmore-content"},[n("mu-load-more",{attrs:{refreshing:t.refreshing,loading:t.loading,"loading-text":"数据加载中，请稍后...","loaded-all":t.loadedAll},on:{load:t.load}},[n("mu-grid-list",{staticClass:"gridlist-demo",attrs:{cols:5}},t._l(t.videoList,function(e,i){return n("mu-grid-tile",{key:i},[n("router-link",{attrs:{to:"/detail/"+e.v_id}},[n("img",{attrs:{src:e.v_preview_url}})]),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.v_name))]),t._v(" "),n("mu-button",{attrs:{slot:"action",icon:""},slot:"action"},[n("mu-icon",{attrs:{value:"star_border"}})],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(h,_,!1,function(t){n("UxBd")},null,null).exports,b={name:"detail",components:{"v-layout":f}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("v-layout",[this._v("\n\tdetail\n")])},staticRenderFns:[]},x=n("VU/8")(b,y,!1,null,null,null).exports,V={name:"aboutus",components:{"v-layout":f}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("p",[this._v("联系地址：福州市鼓楼区软件园G区")]),this._v(" "),e("p",[this._v("联系电话：110")])])},staticRenderFns:[]},k=n("VU/8")(V,U,!1,null,null,null).exports;i.a.use(a.a);var w=new a.a({routes:[{path:"/",name:"index",component:g},{path:"/detail/:id",name:"detail",component:x},{path:"/aboutus",name:"aboutus",component:k}]}),R=n("f81Q");n("Abdq");i.a.config.productionTip=!1,i.a.use(R.a),new i.a({el:"#app",router:w,components:{App:r},template:"<App/>"})},RhQ1:function(t,e){},UxBd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.df42b424425a3f5a1cc1.js.map