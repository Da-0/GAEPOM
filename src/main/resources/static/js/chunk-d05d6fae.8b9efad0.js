(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d05d6fae"],{"0565":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":s[0],"is-success":i},message:s}},"b-field",e.$attrs,!1),[a("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))],1)]}}])})},i=[],l=a("7bb1"),n={components:{ValidationProvider:l["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},r=n,c=a("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);t["a"]=o.exports},a5e2:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"insertuser"},[a("insertusercom")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer",attrs:{autocomplete:"off"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("div",{staticClass:"container is-max-desktop"},[a("div",{staticClass:"notification is-accent",attrs:{align:"center"}},[a("h1",[a("strong",[e._v("가입 정보 입력")])]),a("br"),a("BInputWithValidation",{attrs:{rules:"required|id-char|id-minmax:6,15",label:"ID",placeholder:"아이디",size:"is-medium",align:"left",rounded:""},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}}),a("BInputWithValidation",{attrs:{rules:"required|pw-char|pw-minmax:6,15",label:"Password",autocomplete:"new-password",type:"password",placeholder:"비밀번호",size:"is-medium",align:"left",rounded:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("BInputWithValidation",{attrs:{rules:"required|name-char|name-minmax:2,4",label:"Name",placeholder:"이름",size:"is-medium",align:"left",rounded:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("BInputWithValidation",{attrs:{rules:"required|numeric|max:2",label:"Age",placeholder:"나이",size:"is-medium",align:"left",rounded:""},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),a("BInputWithValidation",{attrs:{rules:"required|email|max:30",type:"email",label:"Email",placeholder:"이메일",size:"is-medium",align:"left",rounded:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("BInputWithValidation",{attrs:{rules:"required|phonenum-char|max:13",label:"PhoneNumber",placeholder:"전화번호",size:"is-medium",align:"left",rounded:""},model:{value:e.phonenum,callback:function(t){e.phonenum=t},expression:"phonenum"}}),a("BInputWithValidation",{attrs:{rules:"required|max:25",label:"Address",placeholder:"예시) 경기도 고양시 일산서구(시군구까지)",size:"is-medium",align:"left",rounded:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("BSeletWithValidation",{attrs:{rules:"required",label:"Position",placeholder:"희망직무",size:"is-medium",align:"left",rounded:""},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}},[a("option",{attrs:{value:"개발자"}},[e._v("개발자")]),a("option",{attrs:{value:"기획자"}},[e._v("기획자")]),a("option",{attrs:{value:"디자이너"}},[e._v("디자이너")])]),"개발자"===e.position?a("BCheckboxesWithValidation",{attrs:{rules:"required",label:"Stack"}},[a("b-checkbox",{attrs:{"native-value":"Java"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Java")]),a("b-checkbox",{attrs:{"native-value":"Python"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Python")]),a("b-checkbox",{attrs:{"native-value":"JavaScript"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("JavaScript")]),a("b-checkbox",{attrs:{"native-value":"C"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("C")]),a("b-checkbox",{attrs:{"native-value":"R"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("R")]),a("b-checkbox",{attrs:{"native-value":"SQL"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("SQL")])],1):"기획자"===e.position?a("BCheckboxesWithValidation",{attrs:{rules:"required",label:"Stack"}},[a("b-checkbox",{attrs:{"native-value":"Gloo maps"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Gloo maps")]),a("b-checkbox",{attrs:{"native-value":"Plectica"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Plectica")]),a("b-checkbox",{attrs:{"native-value":"Trello"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Trello")]),a("b-checkbox",{attrs:{"native-value":"Axure"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Axure")]),a("b-checkbox",{attrs:{"native-value":"OVEN"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("OVEN")]),a("b-checkbox",{attrs:{"native-value":"Power Mockup"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Power Mockup")])],1):"디자이너"===e.position?a("BCheckboxesWithValidation",{attrs:{rules:"required",label:"Stack"}},[a("b-checkbox",{attrs:{"native-value":"Sketch"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Sketch")]),a("b-checkbox",{attrs:{"native-value":"Figma"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Figma")]),a("b-checkbox",{attrs:{"native-value":"Photoshop"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Photoshop")]),a("b-checkbox",{attrs:{"native-value":"Adobe XD"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Adobe XD")]),a("b-checkbox",{attrs:{"native-value":"Framer X"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Framer X")]),a("b-checkbox",{attrs:{"native-value":"Illustrator"},model:{value:e.stacklist,callback:function(t){e.stacklist=t},expression:"stacklist"}},[e._v("Illustrator")])],1):e._e(),a("b-field",{attrs:{label:"User-Image",align:"left"}},[a("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}})]),a("br"),a("br"),a("div",{staticClass:"buttons"},[a("button",{staticClass:"button is-success",on:{click:function(t){return s(e.submitUser)}}},[a("span",[e._v("회원가입")])]),a("button",{staticClass:"button",on:{click:e.resetForm}},[a("span",[e._v("재입력")])])])],1)])]}}])})},n=[],r=(a("b0c0"),a("7bb1")),c=a("fb3a"),o=a("0565"),u=a("eed9"),d=a("a18c"),p=a("bc3a"),v=a.n(p),b={components:{ValidationObserver:r["a"],BSeletWithValidation:c["a"],BInputWithValidation:o["a"],BCheckboxesWithValidation:u["a"]},data:function(){return{userid:"",password:"",name:"",age:"",email:"",phonenum:"",address:"",position:"",stacklist:[],file:""}},methods:{submitUser:function(){var e=new FormData;e.append("userId",this.userid),e.append("password",this.password),e.append("name",this.name),e.append("age",this.age),e.append("email",this.email),e.append("phoneNum",this.phonenum),e.append("address",this.address),e.append("position",this.position),e.append("stacklist",this.stacklist),e.append("file",this.file),v.a.post("http://localhost:80/insertuser",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){alert("개폼 회원가입 완료")})).catch((function(){alert("개폼 회원가입 실패")})),d["a"].push({name:"insertusercheck"})},resetForm:function(){var e=this;this.userid="",this.password="",this.name="",this.age="",this.email="",this.phonenum="",this.address="",this.position="",this.stacklist=[],this.file="",requestAnimationFrame((function(){e.$refs.observer.reset()}))},handleFileUpload:function(){this.file=this.$refs.file.files[0]}}},m=b,k=a("2877"),h=Object(k["a"])(m,l,n,!1,null,null,null),f=h.exports,x={name:"insertuser",components:{insertusercom:f}},_=x,V=Object(k["a"])(_,s,i,!1,null,null,null);t["default"]=V.exports},b0c0:function(e,t,a){var s=a("83ab"),i=a("9bf2").f,l=Function.prototype,n=l.toString,r=/^\s*function ([^ (]*)/,c="name";s&&!(c in l)&&i(l,c,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(e){return""}}})},eed9:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"block"},[e._t("default"),a("p",{staticClass:"has-text-danger"},[e._v(e._s(s[0]))])],2)]}}],null,!0)})},i=[],l=a("7bb1"),n={components:{ValidationProvider:l["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""}}},r=n,c=a("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);t["a"]=o.exports},fb3a:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":s[0],"is-success":i},message:s}},"b-field",e.$attrs,!1),[a("b-select",{attrs:{placeholder:"Select a subject"},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2)],1)]}}],null,!0)})},i=[],l=a("7bb1"),n={components:{ValidationProvider:l["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},r=n,c=a("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-d05d6fae.8b9efad0.js.map