(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bce35ef2","chunk-2d0aad94"],{1384:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectTracking"},[a("h1",[t._v("This is projectTracking page")]),a("TrackingList",{attrs:{msg:"리스트 출력"}})],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"TrackingList"},[a("router-link",{attrs:{tag:"a",to:"/projectTrackingInsert"}},[t._v("이동")]),a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[a("div",{staticClass:"columns"}),a("div",{staticClass:"row columns is-multiline",attrs:{id:"app"}},t._l(t.trackings,(function(e,s){return a("div",{key:s,staticClass:"column is-4"},[a("div",{staticClass:"card large"},[t._m(0,!0),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t._m(1,!0),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4 no-padding"},[a("router-link",{attrs:{tag:"td",to:{name:"ProjectTrackingDetail",params:{track:e}}}},[t._v(t._s(e.project.pjTitle))])],1),a("p",[a("span",{staticClass:"title is-6"},[a("a",{attrs:{href:"http://twitter.com/${card.user.handle}"}},[t._v(" "+t._s(e.project.userId.userId)+" ")])])]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.project.pjCategory))])])]),a("div",{staticClass:"content"},[t._v(" "+t._s(e.project.pjDescription)+" "),t._m(2,!0)])])])])})),0)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-16by9"},[a("img",{attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-icon"},[a("span",{staticClass:"icon-twitter"})])}],n={name:"TrackingList",data:function(){return{trackings:[]}},methods:{trackList:function(){var t=this;this.axios.get("/gettrackinglistaxios").then((function(e){t.trackings=e.data,console.log("==========list=========="),console.log(e),console.log(t.trackings),console.log("==========list==========")})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.trackList()}},c=n,l=a("2877"),p=Object(l["a"])(c,o,i,!1,null,null,null),u=p.exports,d={name:"ProjectTracking",components:{TrackingList:u}},m=d,g=Object(l["a"])(m,s,r,!1,null,null,null);e["default"]=g.exports},a607:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProjectTrackingInsert"},[a("AddTracking")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AddTracking"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjTitle,expression:"project.pjTitle"}],attrs:{type:"text",placeholder:"프로젝트 제목을 입력합니다."},domProps:{value:t.project.pjTitle},on:{input:function(e){e.target.composing||t.$set(t.project,"pjTitle",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDescription,expression:"project.pjDescription"}],attrs:{type:"text",placeholder:"프로젝트 설명을 입력합니다."},domProps:{value:t.project.pjDescription},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDescription",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDuration,expression:"project.pjDuration"}],attrs:{type:"text",placeholder:"yyyy-mm-dd~yyyy-mm-dd"},domProps:{value:t.project.pjDuration},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDuration",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjTools,expression:"project.pjTools"}],attrs:{type:"text",placeholder:"사용하는 툴을 입력합니다."},domProps:{value:t.project.pjTools},on:{input:function(e){e.target.composing||t.$set(t.project,"pjTools",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjLang,expression:"project.pjLang"}],attrs:{type:"text",placeholder:"사용하는 언어를 입력합니다."},domProps:{value:t.project.pjLang},on:{input:function(e){e.target.composing||t.$set(t.project,"pjLang",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDbms,expression:"project.pjDbms"}],attrs:{type:"text",placeholder:"사용하는 DB를 입력합니다."},domProps:{value:t.project.pjDbms},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDbms",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stage,expression:"stage"}],attrs:{type:"text",placeholder:"개발 단계를 입력합니다."},domProps:{value:t.stage},on:{input:function(e){e.target.composing||(t.stage=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.issue,expression:"issue"}],attrs:{type:"text",placeholder:"개발시 이슈를 입력합니다."},domProps:{value:t.issue},on:{input:function(e){e.target.composing||(t.issue=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.output,expression:"output"}],attrs:{type:"text",placeholder:"프로젝트 결과를 입력합니다."},domProps:{value:t.output},on:{input:function(e){e.target.composing||(t.output=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.trackImage,expression:"trackImage"}],attrs:{type:"text",placeholder:"이미지를 첨부합니다."},domProps:{value:t.trackImage},on:{input:function(e){e.target.composing||(t.trackImage=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.trackLink,expression:"trackLink"}],attrs:{type:"text",placeholder:"git주소 등 링크를 입력합니다."},domProps:{value:t.trackLink},on:{input:function(e){e.target.composing||(t.trackLink=e.target.value)}}}),a("br"),a("button",{on:{click:t.addTracking}},[t._v("프로젝트 트레킹 생성")])])},i=[],n=a("1384"),c={name:"AddTracking",data:function(){return{project:[],stage:"",issue:"",output:"",trackImage:"",trackLink:""}},methods:{addTracking:function(){var t=this;this.axios.post("/insertprojecttracking",{stage:this.stage,issue:this.issue,output:this.output,trackImage:this.trackImage,trackLink:this.trackLink,project:this.project}).then((function(e){console.log("==========add=========="),console.warn(e),console.warn(e.data),console.log("==========add=========="),t.$router.push(n["default"])})).catch((function(t){console.warn("ERROR!!!!! : ",t)}))},showProject:function(){var t=this;this.axios.get("/project/getproject",{params:{projectId:2}}).then((function(e){t.project=e.data})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.showProject()}},l=c,p=a("2877"),u=Object(p["a"])(l,o,i,!1,null,null,null),d=u.exports,m={name:"ProjectTrackingInsert",components:{AddTracking:d}},g=m,v=Object(p["a"])(g,s,r,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-bce35ef2.5de80712.js.map