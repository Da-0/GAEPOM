(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d8df7c6"],{a15b:function(e,t,a){"use strict";var o=a("23e7"),n=a("44ad"),l=a("fc6a"),i=a("a640"),s=[].join,c=n!=Object,r=i("join",",");o({target:"Array",proto:!0,forced:c||!r},{join:function(e){return s.call(l(this),void 0===e?",":e)}})},c427:function(e,t,a){"use strict";var o=a("bc3a"),n=a.n(o);t["a"]=n.a.create({baseURL:"http://localhost:80",headers:{"Content-type":"application/json"}})},f4a3:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"insertproject"},[a("hostproject")],1)},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container is-max-desktop"},[a("div",{staticClass:"notification is-accent"},[e._m(0),a("section",{staticClass:"mt-6 mb-5"},[a("b-field",{attrs:{label:"프로젝트주제",align:"left"}},[a("b-input",{attrs:{maxlength:"20",required:""},model:{value:e.pjTitle,callback:function(t){e.pjTitle=t},expression:"pjTitle"}})],1),a("b-field",{attrs:{label:"프로젝트를 간단히 설명해 주세요.",align:"left"}},[a("b-input",{attrs:{maxlength:"20",required:""},model:{value:e.pjDescription,callback:function(t){e.pjDescription=t},expression:"pjDescription"}})],1),a("b-field",{attrs:{label:"프로젝트 예상 기간",align:"left"}},[a("b-datepicker",{attrs:{placeholder:"클릭해 기간을 선택하세요.",range:"",required:"","mobile-native:":"",true:""},model:{value:e.pjDuration,callback:function(t){e.pjDuration=t},expression:"pjDuration"}})],1),a("b-field",{attrs:{label:"지역",align:"left"}},[a("b-select",{attrs:{expanded:""},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}},[a("option",{attrs:{value:"서울"}},[e._v("서울")]),a("option",{attrs:{value:"경기"}},[e._v("경기")]),a("option",{attrs:{value:"인천"}},[e._v("인천")]),a("option",{attrs:{value:"대전"}},[e._v("대전")]),a("option",{attrs:{value:"광주"}},[e._v("광주")]),a("option",{attrs:{value:"부산"}},[e._v("부산")]),a("option",{attrs:{value:"제주"}},[e._v("제주")]),a("option",{attrs:{value:"울산"}},[e._v("울산")]),a("option",{attrs:{value:"대구"}},[e._v("대구")]),a("option",{attrs:{value:"세종"}},[e._v("세종")]),a("option",{attrs:{value:"충북"}},[e._v("충북")]),a("option",{attrs:{value:"충남"}},[e._v("충남")]),a("option",{attrs:{value:"전북"}},[e._v("전북")]),a("option",{attrs:{value:"전남"}},[e._v("전남")]),a("option",{attrs:{value:"경북"}},[e._v("경북")]),a("option",{attrs:{value:"경남"}},[e._v("경남")])])],1),a("b-field",{attrs:{label:"프로젝트 사용 툴",align:"left"}},[a("b-checkbox",{attrs:{"native-value":"Eclipse"},model:{value:e.pjTools,callback:function(t){e.pjTools=t},expression:"pjTools"}},[e._v(" Eclipse ")]),a("b-checkbox",{attrs:{"native-value":"IntelliJ"},model:{value:e.pjTools,callback:function(t){e.pjTools=t},expression:"pjTools"}},[e._v(" IntelliJ ")]),a("b-checkbox",{attrs:{"native-value":"VS Code"},model:{value:e.pjTools,callback:function(t){e.pjTools=t},expression:"pjTools"}},[e._v(" VS Code ")]),a("b-checkbox",{attrs:{"native-value":"Jupyter Notebook"},model:{value:e.pjTools,callback:function(t){e.pjTools=t},expression:"pjTools"}},[e._v(" Jupyter Notebook ")])],1),a("b-field",{attrs:{label:"프로젝트 분류",align:"left"}},[a("b-select",{attrs:{expanded:""},model:{value:e.pjCategory,callback:function(t){e.pjCategory=t},expression:"pjCategory"}},[a("option",{attrs:{value:"모바일앱"}},[e._v("모바일앱 ")]),a("option",{attrs:{value:"웹앱"}},[e._v("웹앱")]),a("option",{attrs:{value:"데이터사이언스"}},[e._v("데이터사이언스")]),a("option",{attrs:{value:"게임개발"}},[e._v("게임개발")])])],1),a("b-field",{attrs:{label:"프로젝트 사용언어",align:"left"}},[a("b-checkbox",{attrs:{"native-value":"Java"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" Java ")]),a("b-checkbox",{attrs:{"native-value":"Python"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" Python ")]),a("b-checkbox",{attrs:{"native-value":"C++"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" C++ ")]),a("b-checkbox",{attrs:{"native-value":"JavaScript"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" JavaScript ")]),a("b-checkbox",{attrs:{"native-value":"Vue"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" Vue ")]),a("b-checkbox",{attrs:{"native-value":"React"},model:{value:e.pjLang,callback:function(t){e.pjLang=t},expression:"pjLang"}},[e._v(" React ")])],1),a("b-field",{attrs:{label:"프로젝트 DBMS",align:"left"}},[a("b-checkbox",{attrs:{"native-value":"ORACLE"},model:{value:e.pjDbms,callback:function(t){e.pjDbms=t},expression:"pjDbms"}},[e._v(" ORACLE ")]),a("b-checkbox",{attrs:{"native-value":"MySQL"},model:{value:e.pjDbms,callback:function(t){e.pjDbms=t},expression:"pjDbms"}},[e._v(" MySQL ")]),a("b-checkbox",{attrs:{"native-value":"MariaDB"},model:{value:e.pjDbms,callback:function(t){e.pjDbms=t},expression:"pjDbms"}},[e._v(" MariaDB ")]),a("b-checkbox",{attrs:{"native-value":"MongoDB"},model:{value:e.pjDbms,callback:function(t){e.pjDbms=t},expression:"pjDbms"}},[e._v(" MongoDB ")]),a("b-checkbox",{attrs:{"native-value":"PostgreSQL"},model:{value:e.pjDbms,callback:function(t){e.pjDbms=t},expression:"pjDbms"}},[e._v(" PostgreSQL ")])],1),a("b-field",{attrs:{label:"모집 인원",align:"left"}},[a("b-input",{attrs:{placeholder:"최소 1명이상",type:"number",min:"1",max:"100",required:""},model:{value:e.needNum,callback:function(t){e.needNum=t},expression:"needNum"}})],1),a("b-field",{attrs:{label:"모집 직무",align:"left"}},[a("b-checkbox",{attrs:{"native-value":"개발자"},model:{value:e.needPosi,callback:function(t){e.needPosi=t},expression:"needPosi"}},[e._v(" 개발자 ")]),a("b-checkbox",{attrs:{"native-value":"기획자"},model:{value:e.needPosi,callback:function(t){e.needPosi=t},expression:"needPosi"}},[e._v(" 기획자 ")]),a("b-checkbox",{attrs:{"native-value":"디자이너"},model:{value:e.needPosi,callback:function(t){e.needPosi=t},expression:"needPosi"}},[e._v(" 디자이너 ")]),a("b-checkbox",{attrs:{"native-value":"퍼블리셔"},model:{value:e.needPosi,callback:function(t){e.needPosi=t},expression:"needPosi"}},[e._v(" 퍼블리셔 ")])],1),a("b-field",{attrs:{label:"우대사항",align:"left"}},[a("b-input",{attrs:{maxlength:"30",required:""},model:{value:e.preference,callback:function(t){e.preference=t},expression:"preference"}})],1),a("b-field",{attrs:{label:"모집 기간",align:"left"}},[a("b-datepicker",{attrs:{placeholder:"클릭해 기간을 선택하세요.",range:"","mobile-native:":"",true:""},model:{value:e.recDuration,callback:function(t){e.recDuration=t},expression:"recDuration"}})],1)],1),a("b-button",{attrs:{type:"is-primary",outlined:"",position:"is-centered",size:"is-large"},on:{click:e.addProjectRec}},[e._v("모집글 생성완료")])],1),a("div",{staticClass:"container is-max-desktop pt-5"})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[a("strong",[e._v("프로젝트 모집글 만들기")])])}],s=(a("a15b"),a("c427")),c={name:"AddProject",data:function(){return{loginUser:JSON.parse(sessionStorage.getItem("user")).userId,userId:"",pjTitle:"",pjDescription:"",pjDuration:[],pjTools:[],pjLang:[],pjDbms:[],needNum:"",needPosi:[],location:"",preference:"",recStatus:0,recDuration:[],recSeq:"",pjCategory:""}},methods:{addProjectRec:function(){var e=this;this.needPosi=this.needPosi.join(),this.recDuration=this.recDuration.join("-"),s["a"].post("/recruit/createrec?userId="+this.loginUser,{needNum:this.needNum,needPosi:this.needPosi,location:this.location,preference:this.preference,recDuration:this.recDuration}).then((function(t){console.log("==========add=========="),console.warn(t),console.warn(t.data),e.recSeq=t.data.recSeq,console.log("==========add=========="),console.log(e.recSeq),e.pjTools=e.pjTools.join(),e.pjLang=e.pjLang.join(),e.pjDbms=e.pjDbms.join(),e.pjDuration=e.pjDuration.join("-");var a={userId:{userId:e.loginUser},pjTitle:e.pjTitle,pjDescription:e.pjDescription,pjDuration:e.pjDuration,pjTools:e.pjTools,pjLang:e.pjLang,pjDbms:e.pjDbms,pjCategory:e.pjCategory,recSeq:{recSeq:e.recSeq}};s["a"].post("/recruit/createpj?userId="+e.loginUser,a).then((function(e){console.log("==========add=========="),console.warn(e),console.warn(e.data),console.log("==========add==========")})).catch((function(e){console.warn("ERROR!!!!! : ",e)}))})).catch((function(e){console.warn("ERROR!!!!! : ",e)}))}},mounted:function(){}},r=c,p=a("2877"),u=Object(p["a"])(r,l,i,!1,null,null,null),v=u.exports,b={name:"insertproject",components:{hostproject:v}},d=b,j=Object(p["a"])(d,o,n,!1,null,null,null);t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-9d8df7c6.a34532da.js.map