webpackJsonp([1],{C4Rm:function(I,e){},Mxba:function(I,e){},NHnr:function(I,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var g=t("7+uW"),i={render:function(){var I=this.$createElement,e=this._self._c||I;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")({name:"App"},i,!1,function(I){t("C4Rm")},null,null).exports,a=t("/ocq"),n=t("mtWM"),r=t.n(n),s={data:function(){return{currentUser:"",loggedIn:!1}},created:function(){var I,e,t=this;I=function(I){r()({method:"get",url:"https://local-text.nl/server/users/"+I.userId,headers:{token:I.userToken}}).then(function(I){t.currentUser=I.data,t.loggedIn=!0}).catch(function(I){console.log(I),(I.status=401)&&(localStorage.removeItem("token"),L.push({name:"Welcome"}))})},(e=JSON.parse(localStorage.getItem("token")))&&I(e)}},C={name:"Welcome",mixins:[s],data:function(){return{text:"",textFound:!1,errors:[],user:"",login:!1}},created:function(){var I=this;if("geolocation"in navigator){var e=void 0,t=function(I){console.error(I)},g=function(e,t){r()({method:"get",url:"https://local-text.nl/server/nearest-texts/"+e+"/"+t}).then(function(e){I.text=e.data,I.textFound=!0}).catch(function(e){I.errors.push(e)})};navigator.geolocation.getCurrentPosition(function I(i){g((e=i).coords.latitude,e.coords.longitude),console.log(i),console.log("test"),navigator.geolocation.getCurrentPosition(I,t)},t)}else console.log("Geolocation not available...");if(localStorage.getItem("token")){var i=JSON.parse(localStorage.getItem("token"));r()({method:"get",url:"https://local-text.nl/server/users/"+i.userId,headers:{token:i.userToken}}).then(function(e){I.user=e.data}).catch(function(e){I.errors.push(e)}),localStorage.getItem("token")&&(this.login=!0)}}},c={render:function(){var I=this,e=I.$createElement,t=I._self._c||e;return t("div",[t("div",{staticClass:"welcome-container"},[I._m(0),I._v(" "),t("div",{staticClass:"nearest-text-container"},[I.textFound?I._e():t("p",[I._v("... looking for text ...")]),I._v(" "),I.text?t("p"):I._e(),I._l(I.text,function(e){return t("div",[t("p",[I._v(I._s(e.title))]),I._v(" "),t("br"),I._v(" "),t("small",[I._v(I._s(Math.floor(1e3*e.distance))+" meters away")])])}),I._v(" "),t("p")],2),I._v(" "),I.login?t("div",{staticClass:"logoutButton"},[t("router-link",{attrs:{to:{name:"User"}}},[I._v("User")])],1):I._e()]),I._v(" "),t("div",{staticClass:"bottom-container"},[t("div",{staticClass:"routes"},[t("router-link",{staticClass:"routes__button routes__register-button",attrs:{to:{name:"Register"}}},[I._v("register")]),I._v(" "),t("router-link",{staticClass:"routes__button routes__login-button",attrs:{to:{name:"Login"}}},[I._v("login")])],1)])])},staticRenderFns:[function(){var I=this.$createElement,e=this._self._c||I;return e("div",{staticClass:"logo-container"},[e("img",{attrs:{src:t("cH+4"),alt:""}}),this._v(" "),e("p",{staticClass:"logo-container__sub-title"},[this._v("virtual graffiti...")])])}]};var u=t("VU/8")(C,c,!1,function(I){t("Mxba")},"data-v-4f70db27",null).exports,A={name:"Login",mixins:[s],data:function(){return{}},methods:{doLogout:function(){localStorage.removeItem("token"),L.push({name:"Welcome"})}}},l={render:function(){var I=this,e=I.$createElement,t=I._self._c||e;return t("div",[t("router-link",{attrs:{to:{name:"Welcome"}}},[I._v("To Homepage")]),I._v(" "),t("br"),t("br"),I._v(" "),t("h4",[I._v(I._s(I.currentUser.username))]),I._v(" "),t("br"),t("br"),I._v(" "),t("div",{staticClass:"logoutButton"},[t("button",{on:{click:function(e){I.doLogout()}}},[I._v("logout")])])],1)},staticRenderFns:[]};var j=t("VU/8")(A,l,!1,function(I){t("QYuj")},null,null).exports,N=t("mvHQ"),M=t.n(N),m={name:"Login",data:function(){return{username:null,password:"",errors:[]}},methods:{doLogin:function(){var I=this;this.errors=[],this.username||this.errors.push("Username is required."),this.password?r()({method:"post",url:"https://local-text.nl/server/register",data:{username:this.username,password:this.password}}).then(function(e){r()({method:"post",url:"https://local-text.nl/server/login",data:{username:I.username,password:I.password}}).then(function(I){localStorage.setItem("token",M()(I.data.data.token)),L.push({name:"Welcome"})}).catch(function(I){})}).catch(function(I){}):this.errors.push("Password is required.")}}},D={render:function(){var I=this,e=I.$createElement,t=I._self._c||e;return t("div",[t("router-link",{attrs:{to:{name:"Welcome"}}},[I._v("To Homepage")]),I._v(" "),t("br"),t("br"),I._v(" "),t("h4",[I._v("Register")]),I._v(" "),t("br"),t("br"),I._v(" "),I.errors.length?t("div",[t("ul",I._l(I.errors,function(e){return t("li",[I._v(I._s(e))])}))]):I._e(),I._v(" "),t("form",{on:{submit:function(e){return e.preventDefault(),I.doLogin(e)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:I.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:I.username},on:{input:function(e){e.target.composing||(I.username=e.target.value)}}}),I._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:I.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:I.password},on:{input:function(e){e.target.composing||(I.password=e.target.value)}}}),I._v(" "),t("button",{attrs:{id:"login-button"}},[I._v("register new user")])])],1)},staticRenderFns:[]};var d=t("VU/8")(m,D,!1,function(I){t("Xy1h")},null,null).exports,T={name:"Login",data:function(){return{username:"",password:"",error:""}},methods:{doLogin:function(){var I=this;r()({method:"post",url:"https://local-text.nl/server/login",data:{username:this.username,password:this.password}}).then(function(e){I.error="",localStorage.setItem("token",M()(e.data.data.token)),L.push({name:"Welcome"})}).catch(function(e){I.error="",I.error=e.response.data})}}},x={render:function(){var I=this,e=I.$createElement,t=I._self._c||e;return t("div",[t("router-link",{attrs:{to:{name:"Welcome"}}},[I._v("To Homepage")]),I._v(" "),t("br"),t("br"),I._v(" "),t("h4",[I._v("Login")]),I._v(" "),t("br"),t("br"),I._v(" "),I.error?t("div",[t("p",[I._v(I._s(I.error.message))])]):I._e(),I._v(" "),t("form",{on:{submit:function(e){return e.preventDefault(),I.doLogin(e)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:I.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:I.username},on:{input:function(e){e.target.composing||(I.username=e.target.value)}}}),I._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:I.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:I.password},on:{input:function(e){e.target.composing||(I.password=e.target.value)}}}),I._v(" "),t("button",{attrs:{id:"login-button"}},[I._v("login")])])],1)},staticRenderFns:[]};var p=t("VU/8")(T,x,!1,function(I){t("Ufi8")},null,null).exports;g.a.use(a.a);var P=new a.a({mode:"history",routes:[{path:"/",name:"Welcome",component:u},{path:"/user",name:"User",component:j,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:d},{path:"/login",name:"Login",component:p}]});P.beforeEach(function(I,e,t){I.matched.some(function(I){return I.meta.requiresAuth})?localStorage.getItem("token")?t():t({path:"/login"}):t()});var L=P;g.a.config.productionTip=!1,new g.a({el:"#app",router:L,components:{App:o},template:"<App/>"})},QYuj:function(I,e){},Ufi8:function(I,e){},Xy1h:function(I,e){},"cH+4":function(I,e){I.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAxOTcgMTE1IiB3aWR0aD0iMTk3IiBoZWlnaHQ9IjExNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNC41NSAtMC41M0wxMS4yMSAtMC41M0wxMS4yMSAzNi44TDQuNTUgMzYuOEw0LjU1IC0wLjUzWiIgaWQ9ImoyOVRieXNDY0siPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjcuMjEgNDEuMTRMMjcuMjEgNDcuOEwtMC4xMiA0Ny44TC0wLjEyIDQxLjE0TDI3LjIxIDQxLjE0WiIgaWQ9ImVNOUd3R25UMiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik00Mi41NSA5LjhMNDkuMjEgOS44TDQ5LjIxIDM3LjE0TDQyLjU1IDM3LjE0TDQyLjU1IDkuOFoiIGlkPSJmMUw1b0VTMHpsIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY0Ljg4IDQxLjE0TDY0Ljg4IDQ3LjhMMzcuNTUgNDcuOEwzNy41NSA0MS4xNEw2NC44OCA0MS4xNFoiIGlkPSJhMUhYb09pVlBJIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY5Ljg4IDMxLjgzTDYzLjIxIDMxLjgzTDYzLjIxIDEwLjQ3TDY5Ljg4IDEwLjQ3TDY5Ljg4IDMxLjgzWiIgaWQ9ImhxcXllSUwwNiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik00Mi41NSA2LjQ3TDQyLjU1IC0wLjJMNjkuODggLTAuMkw2OS44OCA2LjQ3TDQyLjU1IDYuNDdaIiBpZD0iZGlRaVJhUWgxIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTg2LjU1IDkuOEw5My4yMSA5LjhMOTMuMjEgMzcuMTRMODYuNTUgMzcuMTRMODYuNTUgOS44WiIgaWQ9ImozV0JWRmZINjMiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTA4Ljg4IDQwLjhMMTA4Ljg4IDQ3LjQ3TDgxLjU1IDQ3LjQ3TDgxLjU1IDQwLjhMMTA4Ljg4IDQwLjhaIiBpZD0iYVBsMkpibkZPIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTg2LjU1IDYuMTRMODYuNTUgLTAuNTNMMTEzLjg4IC0wLjUzTDExMy44OCA2LjE0TDg2LjU1IDYuMTRaIiBpZD0iYzJSYkdaMG9KcCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjYuNTUgOS4xNEwxMzMuMjEgOS4xNEwxMzMuMjEgMzYuNDdMMTI2LjU1IDM2LjQ3TDEyNi41NSA5LjE0WiIgaWQ9ImExekJRbXh1cEgiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTUzLjg4IDQ3LjE0TDE0Ny4yMSA0Ny4xNEwxNDcuMjEgOS44TDE1My44OCA5LjhMMTUzLjg4IDQ3LjE0WiIgaWQ9ImoxZWV6eTZiSCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjYuNTUgNS44TDEyNi41NSAtMC44NkwxNTMuODggLTAuODZMMTUzLjg4IDUuOEwxMjYuNTUgNS44WiIgaWQ9ImQxZW40MUJPR0MiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTY3Ljg4IC0wLjUzTDE3NC41NSAtMC41M0wxNzQuNTUgMzYuOEwxNjcuODggMzYuOEwxNjcuODggLTAuNTNaIiBpZD0iYzY4bDIyYXFCcSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xOTAuNTUgNDEuMTRMMTkwLjU1IDQ3LjhMMTYzLjIxIDQ3LjhMMTYzLjIxIDQxLjE0TDE5MC41NSA0MS4xNFoiIGlkPSJjNHFFWjVlOXRaIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY2LjU1IDExNi44TDU5Ljg4IDExNi44TDU5Ljg4IDc5LjQ3TDY2LjU1IDc5LjQ3TDY2LjU1IDExNi44WiIgaWQ9ImFiUE5tV0FlIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTQzLjg4IDc1LjE0TDQzLjg4IDY4LjQ3TDcxLjIxIDY4LjQ3TDcxLjIxIDc1LjE0TDQzLjg4IDc1LjE0WiIgaWQ9ImM3MEp2NkkxRnMiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODUuMjEgNzguOEw5MS44OCA3OC44TDkxLjg4IDEwNi4xNEw4NS4yMSAxMDYuMTRMODUuMjEgNzguOFoiIGlkPSJiMUtrTVZhdWgiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTA3LjU1IDEwOS44TDEwNy41NSAxMTYuNDdMODAuMjEgMTE2LjQ3TDgwLjIxIDEwOS44TDEwNy41NSAxMDkuOFoiIGlkPSJiYjhUZVI3OG0iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODUuMjEgNzUuMTRMODUuMjEgNjguNDdMMTEyLjU1IDY4LjQ3TDExMi41NSA3NS4xNEw4NS4yMSA3NS4xNFoiIGlkPSJkNDBPdU83TGsiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNOTYuODggOTUuOEw5Ni44OCA4OS4xNEwxMDcuMjEgODkuMTRMMTA3LjIxIDk1LjhMOTYuODggOTUuOFoiIGlkPSJjMWQ0UmUybG5hIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyNC43OSA3MC40M0wxMzEuMjMgNjguN0wxMzYuNzYgODkuMzNMMTMwLjMyIDkxLjA2TDEyNC43OSA3MC40M1oiIGlkPSJiZTZnNzB3cG4iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTU2LjIxIDcwLjQzTDE0OS43NyA2OC43TDE0NC4yNCA4OS4zM0wxNTAuNjggOTEuMDZMMTU2LjIxIDcwLjQzWiIgaWQ9ImJtQjlVZmg4TCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQuNzkgMTE0LjAxTDEzMS4yMyAxMTUuNzNMMTM2Ljc2IDk1LjFMMTMwLjMyIDkzLjM4TDEyNC43OSAxMTQuMDFaIiBpZD0iYTJSZUxBZzYxbSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNTYuMjEgMTE0LjAxTDE0OS43NyAxMTUuNzNMMTQ0LjI0IDk1LjFMMTUwLjY4IDkzLjM4TDE1Ni4yMSAxMTQuMDFaIiBpZD0iYmduaDJ3QmIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTc1LjU1IDExNi44TDE4Mi4yMSAxMTYuOEwxODIuMjEgNzkuNDdMMTc1LjU1IDc5LjQ3TDE3NS41NSAxMTYuOFoiIGlkPSJhNHQ5dVMxNnpnIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE5OC4yMSA3NS4xNEwxOTguMjEgNjguNDdMMTcwLjg4IDY4LjQ3TDE3MC44OCA3NS4xNEwxOTguMjEgNzUuMTRaIiBpZD0iYWtXVU1ZTVh2Ij48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8Zz48Zz48Zz48Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqMjlUYnlzQ2NLIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmY1NzU3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZU05R3dHblQyIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZjFMNW9FUzB6bCIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ExSFhvT2lWUEkiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNocXF5ZUlMMDYiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkaVFpUmFRaDEiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqM1dCVkZmSDYzIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmY1NzU3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYVBsMkpibkZPIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYzJSYkdaMG9KcCIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ExekJRbXh1cEgiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNqMWVlenk2YkgiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkMWVuNDFCT0dDIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYzY4bDIyYXFCcSIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2M0cUVaNWU5dFoiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhYlBObVdBZSIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2M3MEp2NkkxRnMiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNiMUtrTVZhdWgiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZjU3NTciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNiYjhUZVI3OG0iIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNkNDBPdU83TGsiIG9wYWNpdHk9IjEiIGZpbGw9IiM0NzQ3NDciIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjMWQ0UmUybG5hIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYmU2Zzcwd3BuIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYm1COVVmaDhMIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYTJSZUxBZzYxbSIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2Jnbmgyd0JiIiBvcGFjaXR5PSIxIiBmaWxsPSIjNDc0NzQ3IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYTR0OXVTMTZ6ZyIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmNTc1NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2FrV1VNWU1YdiIgb3BhY2l0eT0iMSIgZmlsbD0iIzQ3NDc0NyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT4KICAgIDwvZz48L2c+PC9nPjwvZz4KPC9zdmc+"}},["NHnr"]);
//# sourceMappingURL=app.1657bacaa26ebafb9d27.js.map