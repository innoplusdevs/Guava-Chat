(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var n=a(37),s=a(38),c=a(14),r=a(42),i=a(41),l=a(6),u=a(5),o=a.n(u),j=a(39),b=a.n(j),d=(a(48),a(40)),m=a(0),h=Object(d.io)();function p(){var e=new Date;return("0"+e.getHours()).substr(-2,2)+":"+("0"+e.getMinutes()).substr(-2,2)}var O=function(){var e=Object(u.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(u.useState)([]),c=Object(l.a)(s,2),r=c[0],i=c[1];h.on("chat message",(function(e){i(e)}));var o;return r.length&&(o=Object(m.jsx)(N,{allMessages:r,userId:h.id})),a?Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("div",{className:"contacts",children:Object(m.jsx)(g,{})}),Object(m.jsx)("div",{className:"chat",children:o}),Object(m.jsx)(v,{parentCallback:function(e){e&&h.emit("chat message",e,a,h.id,p())}})]}):Object(m.jsx)(I,{setUsername:n})},v=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onTrigger=function(e){s.props.parentCallback(s.state.value),s.setState({value:""}),e.preventDefault()},s.state={value:""},s.handleChange=s.handleChange.bind(Object(c.a)(s)),s.onTrigger=s.onTrigger.bind(Object(c.a)(s)),s}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),e.preventDefault()}},{key:"handleEnter",value:function(e){"Enter"===e.code&&e.ctrlKey&&(e.preventDefault(),this.props.parentCallback(e.target.value.trim(/(\s|\n|\r)/)),this.setState({value:""}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("form",{id:"form",onSubmit:this.onTrigger,children:[Object(m.jsx)("textarea",{id:"input",placeholder:"Your message",autoComplete:"off",type:"text",value:this.state.value,onChange:this.handleChange,onKeyUp:function(t){return e.handleEnter(t)}}),Object(m.jsx)("button",{id:"sendButton"})]})}}]),a}(o.a.Component),g=function(){var e=Object(u.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return h.on("user join",(function(e){n(e)})),Object(m.jsx)(x,{contacts:a})};function x(e){var t=e.contacts.map((function(e){var t=Object(l.a)(e,3),a=t[0],n=t[2];return Object(m.jsx)(f,{value:a,time:n},a)}));return Object(m.jsxs)("ul",{id:"Contacts-List",children:[" ",t," "]})}function f(e){var t=e.value.trim(" ")[0].toUpperCase();return Object(m.jsxs)("li",{className:"people",children:[Object(m.jsx)("div",{className:"PeopleImage",children:t}),Object(m.jsx)("div",{className:"PeopleInfo",children:Object(m.jsxs)("span",{children:[Object(m.jsxs)("p",{className:"PeopleName",children:[" ",e.value]}),Object(m.jsxs)("p",{className:"People-Date",children:[" ",e.time," "]})]})})]})}function N(e){var t=e.allMessages,a=e.userId,n=t.map((function(e){var t=Object(l.a)(e,4),n=t[0],s=t[1],c=t[2],r=t[3];return Object(m.jsx)(C,{value:n,activePeople:s,messageId:c,userId:a,time:r},n)}));return Object(m.jsxs)("ul",{id:"messages",children:[" ",n," "]})}function C(e){var t,a=e.activePeople[0].trim(" ")[0].toUpperCase();return t=e.messageId===e.userId?"Me":"Other",Object(m.jsxs)("li",{className:t,children:["Other"===t&&Object(m.jsx)("div",{className:"PeopleImage",children:a}),Object(m.jsxs)("span",{children:[Object(m.jsx)("p",{className:"Message-User item",children:e.activePeople}),Object(m.jsx)("p",{className:"Text item",children:e.value}),Object(m.jsx)("p",{className:"Message-Date",children:e.time})]})]})}var I=function(e){var t=e.setUsername,a=Object(u.useState)(""),n=Object(l.a)(a,2),s=n[0],c=n[1];return Object(m.jsxs)("div",{className:"Login",children:[Object(m.jsx)("h1",{children:"Guava Chat"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.length<1||s.length>10?document.getElementById("LoginError").className="Show":(sessionStorage.setItem("username",s),h.emit("user join",s,p()),t(s))},className:"LoginForm",children:[Object(m.jsx)("input",{className:"LoginInput",type:"text",placeholder:"Your username",autoComplete:"off",onChange:function(e){e.preventDefault(),c(e.target.value),document.getElementById("LoginError").className="Hide"},value:s}),Object(m.jsx)("button",{className:"LoginSubmit",type:"submit",children:"Login"})]}),Object(m.jsx)("span",{id:"LoginError",className:"Hide",children:"*Username must be between one and ten characters"})]})};b.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))},48:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.72814830.chunk.js.map