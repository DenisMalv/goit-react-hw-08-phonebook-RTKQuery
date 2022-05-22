"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[41],{41:function(t,n,e){e.r(n),e.d(n,{default:function(){return A}});var a,r=e(5861),c=e(885),s=e(7757),o=e.n(s),i=e(2791),u={contactForm:"contactForm_contactForm__f4X+T",contactForm__label:"contactForm_contactForm__label__OOrTm",contactForm__button:"contactForm_contactForm__button__t023A"},l=function(t,n){return n.find((function(n){return n.name===t}))},m=e(61),d=e(3902),_=e(5048),h=e(3329),x=function(){var t=(0,i.useState)(""),n=(0,c.Z)(t,2),e=n[0],a=n[1],s=(0,i.useState)(""),x=(0,c.Z)(s,2),p=x[0],b=x[1],f=(0,_.v9)(d.LP),v=(0,m.B8)(),j=(0,c.Z)(v,1)[0],F=(0,m.Mh)(f).data,g=void 0===F?[]:F,w=function(t){var n=t.currentTarget,e=n.name,r=n.value;switch(e){case"name":a(r);break;case"number":b(r)}},C=function(){var t=(0,r.Z)(o().mark((function t(n){var a,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a={name:e,number:p},!(r=l(e,g))){t.next=7;break}alert("".concat(r.name," is already in contacts")),t.next=9;break;case 7:return t.next=9,j({contact:a,token:f}).unwrap();case 9:N();case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),N=function(){a(""),b("")};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{className:u.contactForm,onSubmit:C,children:[(0,h.jsxs)("label",{className:u.contactForm__label,children:[(0,h.jsx)("span",{className:u.contactForm__text,children:"Name"}),(0,h.jsx)("input",{className:u.contactForm__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:w,placeholder:""})]}),(0,h.jsxs)("label",{className:u.contactForm__label,children:[(0,h.jsx)("span",{className:u.contactForm__text,children:"Number"}),(0,h.jsx)("input",{className:u.contactForm__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:p,onChange:w,placeholder:"+",required:!0})]}),(0,h.jsx)("button",{className:u.contactForm__button,type:"submit",children:"Add contact"})]})})},p="ContactList_contactList__UFVCg",b="ContactItem_contactList__item__BuwOu",f="ContactItem_contactList__text__b4K5M",v="ContactItem_contactList__button__Jo+tx",j=function(t){var n=t.id,e=t.name,a=t.number,s=(0,_.v9)(d.LP),i=(0,m.A8)(),u=(0,c.Z)(i,2),l=u[0],x=u[1].isLoading;return(0,h.jsxs)("li",{className:b,children:[(0,h.jsx)("span",{className:f,children:"".concat(e,": ").concat(a)}),(0,h.jsx)("button",{className:v,onClick:(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({id:n,token:s}).unwrap();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),disabled:x,children:"Delete"})]})},F=e(274),g=e(168),w=e(2499).Z.div(a||(a=(0,g.Z)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgb(128 128 128 / 23%);\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),C=e(8268),N=function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))},k=function(){var t=(0,_.v9)(C.B8),n=(0,_.v9)(d.LP),e=(0,m.Mh)(n),a=e.data,r=void 0===a?[]:a,c=e.isError,s=e.isFetching;return(0,h.jsxs)(h.Fragment,{children:[s&&(0,h.jsx)(w,{children:(0,h.jsx)(F.Z,{})}),c&&(0,h.jsx)("h1",{children:"Error 404 :D"}),0===N(r,t).length&&!s&&!c&&(0,h.jsx)("p",{style:{textAlign:"center",fontSize:24,fontWeight:700},children:"Contact not found"}),N(r,t).length>0&&(0,h.jsx)("ul",{className:p,children:N(r,t).map((function(t){var n=t.id,e=t.name,a=t.number;return(0,h.jsx)(j,{id:n,name:e,number:a},n)}))})]})},L="filter_label__nHxuJ",Z="filter_inputFilter__hPQUa",y=function(){var t=(0,_.v9)(C.B8),n=(0,_.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("label",{className:L,children:["Find by contact name",(0,h.jsx)("input",{className:Z,type:"text",value:t,onChange:function(t){n((0,C.W1)({text:t.currentTarget.value}))}})]})})},A=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"ContactsList"}),(0,h.jsx)(x,{}),(0,h.jsx)(y,{}),(0,h.jsx)(k,{})]})}}}]);
//# sourceMappingURL=41.b4ae9631.chunk.js.map