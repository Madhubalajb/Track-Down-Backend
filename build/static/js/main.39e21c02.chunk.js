(this["webpackJsonptrack-down"]=this["webpackJsonptrack-down"]||[]).push([[0],{35:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(10),u=a.n(s),i=(a(35),a(11)),o=a(61),b=a(65),h=a(63),j=a(64),l=a(62),d=a(66),O=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],u=function(t){e.habit_month(t),function(e){s(e.target.value)}(t)};return Object(n.jsxs)(h.a,{size:"md",show:e.show,onHide:e.close,centered:!0,children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{children:"Habit Tracker"})}),Object(n.jsx)(h.a.Body,{children:Object(n.jsxs)(j.a,{onSubmit:e.submit,children:[Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{children:"1"})," Take an Habit"]}),Object(n.jsx)(j.a.Control,{type:"text",placeholder:"What are you gonna build ?",onChange:e.habit_name,required:!0}),Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{children:"2"})," Choose a month"]}),Object(n.jsxs)(o.a,{className:"months",children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a.Check,{type:"radio",value:"January",label:"January",checked:"January"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"February",label:"February",checked:"February"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"March",label:"March",checked:"March"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"April",label:"April",checked:"April"===r,onChange:u})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a.Check,{type:"radio",value:"May",label:"May",checked:"May"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"June",label:"June",checked:"June"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"July",label:"July",checked:"July"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"August",label:"August",checked:"August"===r,onChange:u})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a.Check,{type:"radio",value:"September",label:"September",checked:"September"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"October",label:"October",checked:"October"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"November",label:"November",checked:"November"===r,onChange:u}),Object(n.jsx)(j.a.Check,{type:"radio",value:"December",label:"December",checked:"December"===r,onChange:u})]})]}),Object(n.jsx)("center",{children:Object(n.jsx)(d.a,{type:"submit",children:"Track Down"})})]})})]})},p=function(e){for(var t=[],a=1;a<=e.daysInMonth[e.monthName];a++)t.push(Object(n.jsx)(d.a,{className:"dayOfMonth",id:a,children:a},a));return Object(n.jsx)(o.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("center",{children:Object(n.jsx)("h5",{children:e.monthName})}),Object(n.jsx)("div",{className:"days",children:t.map((function(e,t){return Object(n.jsx)("span",{children:e},t)}))})]})})},x=a(9),m=a.n(x),v=a(13),y=a(14),f=a.n(y),k="/api/habits",C={getData:function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(k);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(v.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(k,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(v.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(k,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(v.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(k,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},g=function(){var e={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31},t=Object(c.useState)(!1),a=Object(i.a)(t,2),r=a[0],s=a[1],u=Object(c.useState)(""),h=Object(i.a)(u,2),j=h[0],l=h[1],d=Object(c.useState)(""),x=Object(i.a)(d,2),m=x[0],v=x[1],y=Object(c.useState)([]),f=Object(i.a)(y,2),k=f[0],g=f[1];return Object(n.jsx)(o.a,{children:Object(n.jsxs)("center",{children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Body,{children:[Object(n.jsx)("p",{children:"Add a new habit to track"}),Object(n.jsx)("center",{children:Object(n.jsx)("i",{className:"material-icons",title:"Add Habit",onClick:function(){return s(!0)},children:"add_circle"})})]})}),Object(n.jsx)(O,{show:r,close:function(){return s(!1)},habit_name:function(e){return l(e.target.value)},habit_month:function(e){return v(e.target.value)},submit:function(t){t.preventDefault();for(var a=[],n=1;n<=e[m];n++)a.push(!1);g(a);var c={habit_name:j,habit_month:m,habit_track:k};C.addData(c),l(""),v(""),g([]),s(!1)}}),Object(n.jsx)(p,{monthName:m,daysInMonth:e})]})})};var w=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(g,{})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(58);u.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),J()}},[[59,1,2]]]);
//# sourceMappingURL=main.39e21c02.chunk.js.map