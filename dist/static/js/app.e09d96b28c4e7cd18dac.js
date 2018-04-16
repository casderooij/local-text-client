webpackJsonp([1],{"08HE":function(I,g){},NHnr:function(I,g,i){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var C=i("7+uW"),t={render:function(){var I=this,g=I.$createElement,C=I._self._c||g;return C("div",{attrs:{id:"app"}},[C("div",{staticClass:"page-header"},[C("div",{staticClass:"page-header__logo-container"},[C("router-link",{attrs:{to:{name:"Welcome"}}},[C("img",{staticClass:"logo-svg",attrs:{src:i("cH+4"),alt:"local-text logo"},on:{click:function(g){I.menu=!1}}})])],1),I._v(" "),C("div",{staticClass:"page-header__menu-button-container"},[C("div",{staticClass:"line"},[C("svg",{attrs:{width:"100%"}},[C("line",{staticStyle:{stroke:"#474747","stroke-width":"5"},attrs:{x1:"10%",y1:"50%",x2:"90%",y2:"50%"}})])]),I._v(" "),C("div",{staticClass:"menu-button",on:{click:function(g){I.menu=!0}}},[I._v("menu")])])]),I._v(" "),C("transition",{attrs:{name:"slide-menu"}},[I.menu?C("div",{staticClass:"menu-container"},[C("div",{staticClass:"menu-container__heading"},[C("div",{staticClass:"menu-container__title",on:{click:function(g){I.menu=!1}}},[I._v("menu")]),I._v(" "),C("div",{staticClass:"menu-container__close-container"},[C("img",{staticClass:"close-svg",attrs:{src:i("mq5u"),alt:"menu close"},on:{click:function(g){I.menu=!1}}})])]),I._v(" "),C("div",{staticClass:"menu-horizontal-line"},[C("svg",{attrs:{width:"100%",height:"100%"}},[C("line",{staticStyle:{stroke:"#fff","stroke-width":"2"},attrs:{x1:"15%",y1:"50%",x2:"85%",y2:"50%"}})])]),I._v(" "),C("div",{staticClass:"menu-routes-container"},[C("router-link",{staticClass:"route-link",attrs:{to:{name:"Login"}}},[C("div",{on:{click:function(g){I.menu=!1}}},[I._v("login")])]),I._v(" "),C("router-link",{staticClass:"route-link",attrs:{to:{name:"Register"}}},[C("div",{on:{click:function(g){I.menu=!1}}},[I._v("register new user")])])],1),I._v(" "),C("div",{staticClass:"menu-horizontal-line"},[C("svg",{attrs:{width:"100%",height:"100%"}},[C("line",{staticStyle:{stroke:"#fff","stroke-width":"2"},attrs:{x1:"15%",y1:"50%",x2:"85%",y2:"50%"}})])]),I._v(" "),C("div",{staticClass:"menu-routes-container"},[C("router-link",{staticClass:"route-link",attrs:{to:{name:"Map"}}},[C("div",{on:{click:function(g){I.menu=!1}}},[I._v("show map")])])],1)]):I._e()]),I._v(" "),C("router-view")],1)},staticRenderFns:[]};var e=i("VU/8")({name:"App",data:function(){return{menu:!1}}},t,!1,function(I){i("TrKO")},null,null).exports,a=i("/ocq"),o=i("mtWM"),A=i.n(o),n={data:function(){return{currentUser:"",loggedIn:!1}},created:function(){var I,g,i=this;I=function(I){A()({method:"get",url:"https://local-text.nl/server/users/"+I.userId,headers:{token:I.userToken}}).then(function(I){i.currentUser=I.data,i.loggedIn=!0}).catch(function(I){console.log(I),(I.status=401)&&(localStorage.removeItem("token"),z.push({name:"Welcome"}))})},(g=JSON.parse(localStorage.getItem("token")))&&I(g)}},s={name:"Welcome",mixins:[n],data:function(){return{text:null,textFound:!1,errors:[],user:"",login:!1}},created:function(){var I=this;if("geolocation"in navigator){var g=void 0,i=function(I){console.error(I)},C=function(g,i){A()({method:"get",url:"https://local-text.nl/server/nearest-texts/"+g+"/"+i}).then(function(g){I.text=g.data,I.textFound=!0}).catch(function(g){I.errors.push(g)})};navigator.geolocation.getCurrentPosition(function I(t){C((g=t).coords.latitude,g.coords.longitude),console.log(t),console.log("test"),navigator.geolocation.getCurrentPosition(I,i)},i)}else console.log("Geolocation not available...");if(localStorage.getItem("token")){var t=JSON.parse(localStorage.getItem("token"));A()({method:"get",url:"https://local-text.nl/server/users/"+t.userId,headers:{token:t.userToken}}).then(function(g){I.user=g.data}).catch(function(g){I.errors.push(g)}),localStorage.getItem("token")&&(this.login=!0)}}},c={render:function(){var I=this,g=I.$createElement,i=I._self._c||g;return i("div",[i("div",{staticClass:"welcome-container"},[i("div",{staticClass:"nearest-text-container"},[I.textFound?I._e():i("p",[I._v("... looking for text ...")]),I._v(" "),I.text?i("div",[i("p",[I._v(I._s(I.text[0].title))]),I._v(" "),i("br"),I._v(" "),i("small",[I._v(I._s(Math.floor(1e3*I.text[0].distance))+" meters away")])]):I._e()]),I._v(" "),I.login?i("div",{staticClass:"logoutButton"},[i("router-link",{attrs:{to:{name:"User"}}},[I._v("User")])],1):I._e()])])},staticRenderFns:[]};var l=i("VU/8")(s,c,!1,function(I){i("vrwG")},"data-v-73a8d4fa",null).exports,r={name:"Login",mixins:[n],methods:{doLogout:function(){localStorage.removeItem("token"),z.push({name:"Welcome"})}}},j={render:function(){var I=this,g=I.$createElement,i=I._self._c||g;return i("div",[i("router-link",{attrs:{to:{name:"Welcome"}}},[I._v("To Homepage")]),I._v(" "),i("br"),i("br"),I._v(" "),i("h4",[I._v(I._s(I.currentUser.username))]),I._v(" "),i("br"),i("br"),I._v(" "),i("div",{staticClass:"logoutButton"},[i("button",{on:{click:function(g){I.doLogout()}}},[I._v("logout")])])],1)},staticRenderFns:[]};var M=i("VU/8")(r,j,!1,function(I){i("wnVF")},null,null).exports,u=i("mvHQ"),N=i.n(u),m={name:"Login",data:function(){return{username:null,password:"",errors:[]}},methods:{doLogin:function(){var I=this;this.errors=[],this.username||this.errors.push("Username is required."),this.password?A()({method:"post",url:"https://local-text.nl/server/register",data:{username:this.username,password:this.password}}).then(function(g){A()({method:"post",url:"https://local-text.nl/server/login",data:{username:I.username,password:I.password}}).then(function(I){localStorage.setItem("token",N()(I.data.data.token)),z.push({name:"Welcome"})}).catch(function(I){})}).catch(function(I){}):this.errors.push("Password is required.")}}},d={render:function(){var I=this,g=I.$createElement,i=I._self._c||g;return i("div",[i("router-link",{attrs:{to:{name:"Welcome"}}},[I._v("To Homepage")]),I._v(" "),i("br"),i("br"),I._v(" "),i("h4",[I._v("Register")]),I._v(" "),i("br"),i("br"),I._v(" "),I.errors.length?i("div",[i("ul",I._l(I.errors,function(g){return i("li",[I._v(I._s(g))])}))]):I._e(),I._v(" "),i("form",{on:{submit:function(g){return g.preventDefault(),I.doLogin(g)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:I.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:I.username},on:{input:function(g){g.target.composing||(I.username=g.target.value)}}}),I._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:I.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:I.password},on:{input:function(g){g.target.composing||(I.password=g.target.value)}}}),I._v(" "),i("button",{attrs:{id:"login-button"}},[I._v("register new user")])])],1)},staticRenderFns:[]};var D=i("VU/8")(m,d,!1,function(I){i("Xy1h")},null,null).exports,G={name:"Login",data:function(){return{username:"",password:"",error:""}},methods:{doLogin:function(){var I=this;A()({method:"post",url:"https://local-text.nl/server/login",data:{username:this.username,password:this.password}}).then(function(g){I.error="",localStorage.setItem("token",N()(g.data.data.token)),z.push({name:"Welcome"})}).catch(function(g){I.error="",I.error=g.response.data})}}},w={render:function(){var I=this,g=I.$createElement,i=I._self._c||g;return i("div",{staticClass:"login-container"},[i("h2",{staticClass:"login-title"},[I._v("login")]),I._v(" "),I.error?i("div",[i("p",{staticClass:"login-error"},[I._v(I._s(I.error.message))])]):I._e(),I._v(" "),i("form",{staticClass:"login-form",on:{submit:function(g){return g.preventDefault(),I.doLogin(g)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:I.username,expression:"username"}],staticClass:"login-input",attrs:{placeholder:"username",type:"text",name:"username"},domProps:{value:I.username},on:{input:function(g){g.target.composing||(I.username=g.target.value)}}}),I._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:I.password,expression:"password"}],staticClass:"login-input",attrs:{placeholder:"password",type:"password",name:"password"},domProps:{value:I.password},on:{input:function(g){g.target.composing||(I.password=g.target.value)}}}),I._v(" "),i("button",{staticClass:"login-button",attrs:{id:"login-button"}},[I._v("go")])])])},staticRenderFns:[]};var x=i("VU/8")(G,w,!1,function(I){i("08HE")},"data-v-3c3caf91",null).exports;C.a.use(a.a);var P=new a.a({mode:"history",routes:[{path:"/",name:"Welcome",component:l},{path:"/user",name:"User",component:M,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:D},{path:"/login",name:"Login",component:x}]});P.beforeEach(function(I,g,i){I.matched.some(function(I){return I.meta.requiresAuth})?localStorage.getItem("token")?i():i({path:"/login"}):i()});var z=P;C.a.config.productionTip=!1,new C.a({el:"#app",router:z,components:{App:e},template:"<App/>"})},TrKO:function(I,g){},Xy1h:function(I,g){},"cH+4":function(I,g){I.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMTk3IDExNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNC41NSAtMC41M0wxMS4yMSAtMC41M0wxMS4yMSAzNi44TDQuNTUgMzYuOEw0LjU1IC0wLjUzWiIgaWQ9ImoyOVRieXNDY0siPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjcuMjEgNDEuMTRMMjcuMjEgNDcuOEwtMC4xMiA0Ny44TC0wLjEyIDQxLjE0TDI3LjIxIDQxLjE0WiIgaWQ9ImVNOUd3R25UMiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik00Mi41NSA5LjhMNDkuMjEgOS44TDQ5LjIxIDM3LjE0TDQyLjU1IDM3LjE0TDQyLjU1IDkuOFoiIGlkPSJmMUw1b0VTMHpsIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY0Ljg4IDQxLjE0TDY0Ljg4IDQ3LjhMMzcuNTUgNDcuOEwzNy41NSA0MS4xNEw2NC44OCA0MS4xNFoiIGlkPSJhMUhYb09pVlBJIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY5Ljg4IDMxLjgzTDYzLjIxIDMxLjgzTDYzLjIxIDEwLjQ3TDY5Ljg4IDEwLjQ3TDY5Ljg4IDMxLjgzWiIgaWQ9ImhxcXllSUwwNiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik00Mi41NSA2LjQ3TDQyLjU1IC0wLjJMNjkuODggLTAuMkw2OS44OCA2LjQ3TDQyLjU1IDYuNDdaIiBpZD0iZGlRaVJhUWgxIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTg2LjU1IDkuOEw5My4yMSA5LjhMOTMuMjEgMzcuMTRMODYuNTUgMzcuMTRMODYuNTUgOS44WiIgaWQ9ImozV0JWRmZINjMiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTA4Ljg4IDQwLjhMMTA4Ljg4IDQ3LjQ3TDgxLjU1IDQ3LjQ3TDgxLjU1IDQwLjhMMTA4Ljg4IDQwLjhaIiBpZD0iYVBsMkpibkZPIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTg2LjU1IDYuMTRMODYuNTUgLTAuNTNMMTEzLjg4IC0wLjUzTDExMy44OCA2LjE0TDg2LjU1IDYuMTRaIiBpZD0iYzJSYkdaMG9KcCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjYuNTUgOS4xNEwxMzMuMjEgOS4xNEwxMzMuMjEgMzYuNDdMMTI2LjU1IDM2LjQ3TDEyNi41NSA5LjE0WiIgaWQ9ImExekJRbXh1cEgiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTUzLjg4IDQ3LjE0TDE0Ny4yMSA0Ny4xNEwxNDcuMjEgOS44TDE1My44OCA5LjhMMTUzLjg4IDQ3LjE0WiIgaWQ9ImoxZWV6eTZiSCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjYuNTUgNS44TDEyNi41NSAtMC44NkwxNTMuODggLTAuODZMMTUzLjg4IDUuOEwxMjYuNTUgNS44WiIgaWQ9ImQxZW40MUJPR0MiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTY3Ljg4IC0wLjUzTDE3NC41NSAtMC41M0wxNzQuNTUgMzYuOEwxNjcuODggMzYuOEwxNjcuODggLTAuNTNaIiBpZD0iYzY4bDIyYXFCcSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xOTAuNTUgNDEuMTRMMTkwLjU1IDQ3LjhMMTYzLjIxIDQ3LjhMMTYzLjIxIDQxLjE0TDE5MC41NSA0MS4xNFoiIGlkPSJjNHFFWjVlOXRaIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY2LjU1IDExNi44TDU5Ljg4IDExNi44TDU5Ljg4IDc5LjQ3TDY2LjU1IDc5LjQ3TDY2LjU1IDExNi44WiIgaWQ9ImFiUE5tV0FlIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTQzLjg4IDc1LjE0TDQzLjg4IDY4LjQ3TDcxLjIxIDY4LjQ3TDcxLjIxIDc1LjE0TDQzLjg4IDc1LjE0WiIgaWQ9ImM3MEp2NkkxRnMiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODUuMjEgNzguOEw5MS44OCA3OC44TDkxLjg4IDEwNi4xNEw4NS4yMSAxMDYuMTRMODUuMjEgNzguOFoiIGlkPSJiMUtrTVZhdWgiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTA3LjU1IDEwOS44TDEwNy41NSAxMTYuNDdMODAuMjEgMTE2LjQ3TDgwLjIxIDEwOS44TDEwNy41NSAxMDkuOFoiIGlkPSJiYjhUZVI3OG0iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODUuMjEgNzUuMTRMODUuMjEgNjguNDdMMTEyLjU1IDY4LjQ3TDExMi41NSA3NS4xNEw4NS4yMSA3NS4xNFoiIGlkPSJkNDBPdU83TGsiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNOTYuODggOTUuOEw5Ni44OCA4OS4xNEwxMDcuMjEgODkuMTRMMTA3LjIxIDk1LjhMOTYuODggOTUuOFoiIGlkPSJjMWQ0UmUybG5hIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyNC43OSA3MC40M0wxMzEuMjMgNjguN0wxMzYuNzYgODkuMzNMMTMwLjMyIDkxLjA2TDEyNC43OSA3MC40M1oiIGlkPSJiZTZnNzB3cG4iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTU2LjIxIDcwLjQzTDE0OS43NyA2OC43TDE0NC4yNCA4OS4zM0wxNTAuNjggOTEuMDZMMTU2LjIxIDcwLjQzWiIgaWQ9ImJtQjlVZmg4TCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQuNzkgMTE0LjAxTDEzMS4yMyAxMTUuNzNMMTM2Ljc2IDk1LjFMMTMwLjMyIDkzLjM4TDEyNC43OSAxMTQuMDFaIiBpZD0iYTJSZUxBZzYxbSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNTYuMjEgMTE0LjAxTDE0OS43NyAxMTUuNzNMMTQ0LjI0IDk1LjFMMTUwLjY4IDkzLjM4TDE1Ni4yMSAxMTQuMDFaIiBpZD0iYmduaDJ3QmIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTc1LjU1IDExNi44TDE4Mi4yMSAxMTYuOEwxODIuMjEgNzkuNDdMMTc1LjU1IDc5LjQ3TDE3NS41NSAxMTYuOFoiIGlkPSJhNHQ5dVMxNnpnIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE5OC4yMSA3NS4xNEwxOTguMjEgNjguNDdMMTcwLjg4IDY4LjQ3TDE3MC44OCA3NS4xNEwxOTguMjEgNzUuMTRaIiBpZD0iYWtXVU1ZTVh2Ij48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8Zz48Zz48Zz48Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqMjlUYnlzQ2NLIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZU05R3dHblQyIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmY1NzU3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZjFMNW9FUzB6bCIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ExSFhvT2lWUEkiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNocXF5ZUlMMDYiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkaVFpUmFRaDEiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqM1dCVkZmSDYzIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYVBsMkpibkZPIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmY1NzU3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYzJSYkdaMG9KcCIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ExekJRbXh1cEgiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqMWVlenk2YkgiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkMWVuNDFCT0dDIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYzY4bDIyYXFCcSIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2M0cUVaNWU5dFoiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhYlBObVdBZSIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2M3MEp2NkkxRnMiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNiMUtrTVZhdWgiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNiYjhUZVI3OG0iIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkNDBPdU83TGsiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjMWQ0UmUybG5hIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYmU2Zzcwd3BuIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYm1COVVmaDhMIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYTJSZUxBZzYxbSIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2Jnbmgyd0JiIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYTR0OXVTMTZ6ZyIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2FrV1VNWU1YdiIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz48L2c+PC9nPjwvZz4KPC9zdmc+"},mq5u:function(I,g){I.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDEwOS4zMzMzMyAxMDUuMzMzMzMiCiAgIHdpZHRoPSIxMDAlIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNiI+PGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGgyMCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aAogICAgICAgICBpZD0icGF0aDE4IgogICAgICAgICBkPSJtIDI5LjEzMTksNTUuNTA4MTEgNC44MjkzNiwxLjI5MDY2IDQuMTQ2MzEsLTE1LjQzMjA0IC00LjgyOTM1LC0xLjI5MDY2IHoiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDI2IgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoMjQiCiAgICAgICAgIGQ9Ik0gMCwwIEggODIgViA3OSBIIDAgWiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMzYiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGgKICAgICAgICAgaWQ9InBhdGgzNCIKICAgICAgICAgZD0ibSA1Mi42OTcwNCw1NS41MDgxMSAtNC44MjkzNiwxLjI5MDY2IC00LjE0NjMxLC0xNS40MzIwNCA0LjgyOTM2LC0xLjI5MDY2IHoiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDQyIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoNDAiCiAgICAgICAgIGQ9Ik0gMCwwIEggODIgViA3OSBIIDAgWiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTIiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGgKICAgICAgICAgaWQ9InBhdGg1MCIKICAgICAgICAgZD0ibSAyOS4xMzE5LDIyLjkxMTYyIDQuODI5MzYsLTEuMjkwNjYgNC4xNDYzMSwxNS40MzIwNCAtNC44MjkzNSwxLjI5MDY2IHoiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDU4IgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoNTYiCiAgICAgICAgIGQ9Ik0gMCwwIEggODIgViA3OSBIIDAgWiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNjgiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGgKICAgICAgICAgaWQ9InBhdGg2NiIKICAgICAgICAgZD0iTSA1Mi42OTcwNCwyMi45MTE2MiA0Ny44Njc2OCwyMS42MjA5NiA0My43MjEzNywzNy4wNTMgNDguNTUwNzMsMzguMzQzNjYgWiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNzQiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGgKICAgICAgICAgaWQ9InBhdGg3MiIKICAgICAgICAgZD0iTSAwLDAgSCA4MiBWIDc5IEggMCBaIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLDAsMTA1LjMzMzMzKSIKICAgICBpZD0iZzEwIj48ZwogICAgICAgaWQ9ImcxMiIgLz48ZwogICAgICAgaWQ9ImcxNCI+PGcKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMjApIgogICAgICAgICBpZD0iZzE2Ij48ZwogICAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDI2KSIKICAgICAgICAgICBpZD0iZzIyIj48cGF0aAogICAgICAgICAgICAgaWQ9InBhdGgyOCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDI0LjEzMTksMzUuMDc2MDcgaCAxOC45NzU2NyB2IDI2LjcyMjcgSCAyNC4xMzE5IFoiIC8+PC9nPjwvZz48L2c+PGcKICAgICAgIGlkPSJnMzAiPjxnCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDM2KSIKICAgICAgICAgaWQ9ImczMiI+PGcKICAgICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg0MikiCiAgICAgICAgICAgaWQ9ImczOCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoNDQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAzOC43MjEzNywzNS4wNzYwNyBoIDE4Ljk3NTY3IHYgMjYuNzIyNyBIIDM4LjcyMTM3IFoiIC8+PC9nPjwvZz48L2c+PGcKICAgICAgIGlkPSJnNDYiPjxnCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDUyKSIKICAgICAgICAgaWQ9Imc0OCI+PGcKICAgICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1OCkiCiAgICAgICAgICAgaWQ9Imc1NCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoNjAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAyNC4xMzE5LDE2LjYyMDk2IGggMTguOTc1NjcgdiAyNi43MjI3IEggMjQuMTMxOSBaIiAvPjwvZz48L2c+PC9nPjxnCiAgICAgICBpZD0iZzYyIj48ZwogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg2OCkiCiAgICAgICAgIGlkPSJnNjQiPjxnCiAgICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNzQpIgogICAgICAgICAgIGlkPSJnNzAiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDc2IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMzguNzIxMzcsMTYuNjIwOTYgaCAxOC45NzU2NyB2IDI2LjcyMjcgSCAzOC43MjEzNyBaIiAvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="},vrwG:function(I,g){},wnVF:function(I,g){}},["NHnr"]);
//# sourceMappingURL=app.e09d96b28c4e7cd18dac.js.map