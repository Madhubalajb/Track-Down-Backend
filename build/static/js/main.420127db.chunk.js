(this["webpackJsonptrack-down"]=this["webpackJsonptrack-down"]||[]).push([[0],{39:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(13),i=n.n(s),o=(n(39),n(9)),u=n(65),j=n(66),l=n(33),d=n(69),b=n(67),h=n(68),O=n(70),p=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(t){e.habit_month(t),function(e){s(e.target.value)}(t)};return Object(a.jsxs)(b.a,{size:"md",show:e.show,onHide:e.close,centered:!0,children:[Object(a.jsx)(b.a.Header,{closeButton:!0,children:Object(a.jsx)(b.a.Title,{children:"Habit Tracker"})}),Object(a.jsx)(b.a.Body,{children:Object(a.jsxs)(h.a,{onSubmit:e.submit,children:[Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:"1"})," Take an Habit"]}),Object(a.jsx)(h.a.Control,{type:"text",placeholder:"What are you gonna build ?",onChange:e.habit_name,required:!0}),Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:"2"})," Choose a month"]}),Object(a.jsxs)(u.a,{className:"months",children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a.Check,{type:"radio",value:"January",label:"January",checked:"January"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"February",label:"February",checked:"February"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"March",label:"March",checked:"March"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"April",label:"April",checked:"April"===c,onChange:i})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a.Check,{type:"radio",value:"May",label:"May",checked:"May"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"June",label:"June",checked:"June"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"July",label:"July",checked:"July"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"August",label:"August",checked:"August"===c,onChange:i})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a.Check,{type:"radio",value:"September",label:"September",checked:"September"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"October",label:"October",checked:"October"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"November",label:"November",checked:"November"===c,onChange:i}),Object(a.jsx)(h.a.Check,{type:"radio",value:"December",label:"December",checked:"December"===c,onChange:i})]})]}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{type:"submit",children:"Track Down"})})]})})]})},x=n(23),f=n(7),m=n.n(f),g=n(11),v=n(12),k=n.n(v),y="/api/habits",w=null,C={setToken:function(e){w="bearer ".concat(e)},getData:function(){var e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(y);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(g.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,k.a.post(y,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(g.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,k.a.delete("".concat(y,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(g.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:w}},e.next=3,k.a.put("".concat(y,"/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},S=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(e){var t=0;return e.map((function(e,n){e&&t++})),Object(a.jsx)(a.Fragment,{children:t})};return 0===e.habit_activity.length?Object(a.jsx)("div",{children:Object(a.jsx)("center",{className:"nothing",children:Object(a.jsx)("p",{children:"You haven't added anything to track! :("})})}):Object(a.jsx)(a.Fragment,{children:e.habit_activity.map((function(e,t){return Object(a.jsx)(d.a,{className:"activity-card",id:t,children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsxs)(d.a.Title,{children:[Object(a.jsx)("span",{children:e.habit_name}),Object(a.jsx)("i",{className:"material-icons",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this?!")&&C.deleteData(t));var t},children:"delete"})]}),Object(a.jsxs)(d.a.Subtitle,{children:[Object(a.jsx)("span",{children:e.habit_month}),Object(a.jsxs)("span",{className:"count",children:["No of days done - ",i(e.habit_track),"/",e.habit_track.length]})]}),Object(a.jsxs)("div",{className:"days",children:[e.habit_track.map((function(t,n){return Object(a.jsx)(O.a,{id:n+1,style:{"background-color":!0===t?"turquoise":"#FFEB3B"},onClick:function(){return function(e,t){var n=[];(n=0===c.length?Object(x.a)(e):Object(x.a)(c)).map((function(e,a){a===t&&(n[a]=!n[a]),n[a]=n[a]})),s(n)}(e.habit_track,n)},children:n+1})})),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{className:"save",onClick:function(){return function(e){var t={habit_track:c};C.updateData(e,t),s([])}(e.id)},children:"Save"})})]})]})})}))})},N=function(e){return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(O.a,{onClick:e.login,children:"Login"}),Object(a.jsxs)(b.a,{id:"loginModal",show:e.show,onHide:e.loginHide,children:[Object(a.jsx)(b.a.Header,{closeButton:!0,children:"Log In"}),Object(a.jsx)(b.a.Body,{children:Object(a.jsxs)(h.a,{onSubmit:e.loginSubmit,children:[Object(a.jsx)(h.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),Object(a.jsx)(h.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{type:"submit",children:"Login"})})]})})]})]})},D=function(e){return Object(a.jsxs)("div",{className:"signup",children:[Object(a.jsx)(O.a,{onClick:e.signup,children:"Signup"}),Object(a.jsxs)(b.a,{id:"signupModal",show:e.show,onHide:e.signupHide,children:[Object(a.jsx)(b.a.Header,{closeButton:!0,children:"Sign Up"}),Object(a.jsx)(b.a.Body,{children:Object(a.jsxs)(h.a,{onSubmit:e.signupSubmit,children:[Object(a.jsx)(h.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),Object(a.jsx)(h.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),Object(a.jsx)(h.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{type:"submit",children:"SignUp"})})]})})]})]})},_=function(e){return null===e.msg?null:e.msg},A={login:function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J={signup:function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(r.useState)(""),b=Object(o.a)(d,2),h=b[0],p=b[1],x=Object(r.useState)(""),f=Object(o.a)(x,2),v=f[0],k=f[1],y=Object(r.useState)(""),w=Object(o.a)(y,2),S=w[0],H=w[1],B=Object(r.useState)(""),F=Object(o.a)(B,2),M=F[0],T=F[1],q=Object(r.useState)(""),I=Object(o.a)(q,2),L=I[0],U=I[1],P=function(e){return k(e.target.value)},z=function(e){return H(e.target.value)},E=function(){p(""),k(""),H("")};Object(r.useEffect)((function(){var e=window.localStorage.getItem("logged-trackDown-User");if(e){var t=JSON.parse(e);T(t),C.setToken(t.token)}}),[]);var W=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(!1),e.next=4,A.login({username:v,password:S}).then((function(e){window.localStorage.setItem("logged-trackDown-User",JSON.stringify(e)),C.setToken(e.token),T(e),E(),G(Object(a.jsxs)("div",{id:"snackbar",children:["Hello ",e.username,"!!"]}))})).catch((function(e){E(),G(Object(a.jsx)("div",{id:"snackbar",children:"Sorry, something went wrong. Couldn't login"}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(!1),e.next=4,J.signup({name:h,username:v,password:S}).then((function(e){E(),G(Object(a.jsxs)("div",{id:"snackbar",children:["Added user ",e.username]}))})).catch((function(e){E(),G(Object(a.jsx)("div",{id:"snackbar",children:"Sorry, something went wrong. Couldn't save user"}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){U(e),setTimeout((function(){U("")}),6e3)};return""===M?Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{msg:L}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(N,{login:function(){return c(!0)},show:n,loginHide:function(){return c(!1)},username:P,pwd:z,loginSubmit:W}),Object(a.jsx)(D,{signup:function(){return l(!0)},show:u,signupHide:function(){return l(!1)},name:function(e){return p(e.target.value)},username:P,pwd:z,signupSubmit:Y})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{msg:L}),Object(a.jsxs)(j.a,{className:"afterLogin",children:[Object(a.jsx)("span",{className:"username",children:M.username}),Object(a.jsx)(O.a,{onClick:function(){T(""),G(Object(a.jsxs)("div",{id:"snackbar",children:["Bye ",M.username,", will miss you!"]})),window.localStorage.removeItem("logged-trackDown-User"),A.setToken("")},children:"Logout"})]})]})},B=function(){var e={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31},t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),b=Object(o.a)(i,2),h=b[0],O=b[1],x=Object(r.useState)(""),f=Object(o.a)(x,2),m=f[0],g=f[1],v=Object(r.useState)([]),k=Object(o.a)(v,2),y=k[0],w=k[1];Object(r.useEffect)((function(){C.getData().then((function(e){return w(e)}))}));return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(H,{}),Object(a.jsxs)(j.a,{className:"main-row",children:[Object(a.jsxs)(l.a,{sm:2,children:[Object(a.jsx)(d.a,{className:"form-card",children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("p",{children:"Add a new habit to track"}),Object(a.jsx)("center",{children:Object(a.jsx)("i",{className:"material-icons",title:"Add Habit",onClick:function(){return s(!0)},children:"add_circle"})})]})}),Object(a.jsx)(p,{show:c,close:function(){return s(!1)},habit_name:function(e){return O(e.target.value)},habit_month:function(e){return g(e.target.value)},submit:function(t){t.preventDefault(),new Promise((function(t,n){for(var a=[],r=1;r<=e[m];r++)a.push(!1);0!==a.length&&t(a)})).then((function(e){var t={habit_name:h,habit_month:m,habit_track:e};C.addData(t),O(""),g(""),s(!1)}))}})]}),Object(a.jsx)(l.a,{sm:10,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(S,{daysInMonth:e,habit_activity:y})})})]})]})};var F=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(B,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(62);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),M()}},[[63,1,2]]]);
//# sourceMappingURL=main.420127db.chunk.js.map