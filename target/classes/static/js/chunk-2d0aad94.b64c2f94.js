(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad94"],{1384:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"projectTracking"},[r("h1",[t._v("This is projectTracking page")]),r("TrackingList",{attrs:{msg:"리스트 출력"}})],1)},e=[],s=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"TrackingList"},[r("router-link",{attrs:{tag:"a",to:"/projectTrackingInsert"}},[t._v("이동")]),r("h4",[t._v(t._s(t.msg))]),r("table",{attrs:{border:"1"}},[t._m(0),t._l(t.trackings,(function(n,a){return r("tr",{key:a},[r("router-link",{attrs:{tag:"td",to:{name:"ProjectTrackingDetail",params:{track:n}}}},[t._v(t._s(n.project.pjTitle))]),r("td",[t._v(t._s(n.project.pjCategory))]),r("td",[t._v(t._s(n.project.pjDuration))]),r("td",[t._v(t._s(n.trackImage))])],1)}))],2)],1)},c=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("tr",[r("th",[t._v("제목")]),r("th",[t._v("카테고리")]),r("th",[t._v("기간")]),r("th",[t._v("이미지")])])}],i={name:"TrackingList",props:{msg:String},data:function(){return{trackings:[]}},methods:{trackList:function(){var t=this;this.axios.get("/gettrackinglistaxios").then((function(n){t.trackings=n.data,console.log("==========list=========="),console.log(n),console.log(t.trackings),console.log("==========list==========")})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.trackList()}},o=i,l=r("2877"),g=Object(l["a"])(o,s,c,!1,null,null,null),u=g.exports,k={name:"ProjectTracking",components:{TrackingList:u}},_=k,p=Object(l["a"])(_,a,e,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0aad94.b64c2f94.js.map