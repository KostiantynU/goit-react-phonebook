"use strict";(self.webpackChunkgoit_react_phonebook=self.webpackChunkgoit_react_phonebook||[]).push([[10],{2190:function(n,e,t){var a=t(9434),r=t(2946),i=t(3058),o=t(4226),c=t(3329);e.Z=function(){var n=(0,a.v9)(r.AD),e=(0,a.I0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.nv,{children:"Find contacts by name"}),(0,c.jsx)(o.Vs,{onChange:function(n){return e((0,i.M6)(n.target.value.toLowerCase().trim()))},value:n,$formadd:"90%"})]})}},8641:function(n,e,t){t.d(e,{Z:function(){return R}});var a,r,i,o,c,d,s,l=t(2791),u=t(9434),m=t(3230),h=t(2946),p=t(6725),x=t(3244),b=t(9439),g=t(168),f=t(5867),N=f.ZP.li(a||(a=(0,g.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.2rem;\n  margin: 0.2rem;\n  border: 1px solid rgb(46, 191, 145);\n  border-radius: 8px;\n\n  &:hover {\n    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n  }\n  /* overflow: hidden;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%) translateX(-110%) skew(-30deg);\n    width: 120%;\n    height: 120%;\n    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n    transition: 500ms;\n    pointer-events: none;\n  }\n  &:hover::after {\n    transform: translateY(-50%) translateX(-8%) skew(-30deg);\n  } */\n"]))),v=f.ZP.span(r||(r=(0,g.Z)(["\n  font-weight: 600;\n"]))),j=(0,f.ZP)(v)(i||(i=(0,g.Z)(["\n  font-weight: 500;\n"]))),y=t(4226),Z=t(5705),C=f.ZP.form(o||(o=(0,g.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  /* position: absolute;\n  left: 0;\n  top: -50%; */\n"]))),w=(0,f.ZP)(y.Rj)(c||(c=(0,g.Z)(["\n  width: 300px;\n  margin: 0;\n  margin-bottom: 0;\n"]))),k=(0,f.ZP)(y.lt).attrs((function(n){return{$padding:n.$padding||"0.3rem"}}))(d||(d=(0,g.Z)(["\n  background: rgb(131, 96, 195);\n  margin: 0;\n  padding: ",";\n  color: black;\n  &:hover {\n    background: rgb(131, 96, 195);\n  }\n"])),(function(n){return n.$padding})),P=(0,f.ZP)(k)(s||(s=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  color: white;\n"]))),A=t(3329),E=function(n){var e=n.handleChangeEditOpen,t=n.contactId,a=(0,u.v9)(h.a1),r=(0,u.I0)(),i=a.find((function(n){return n._id===t})),o=(0,Z.TA)({initialValues:{contactName:i.contactName,phoneNumber:i.phoneNumber},validate:function(n){var e={};if(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(n.contactName)||(e.contactName="Invalid name"),!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(n.phoneNumber))return e},onSubmit:function(n){var i={id:t,contactName:n.contactName,phoneNumber:n.phoneNumber};if(a.some((function(n){return n.contactName.toLowerCase()===i.contactName.toLowerCase()&&n.phoneNumber===i.phoneNumber})))return o.handleReset(),alert("".concat(i.contactName," is already in list!"));r((0,m.Tk)(i)),o.handleReset(),e()}});return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"absolute",left:"0",top:"-90%",width:"100%",height:"100%",display:"flex",alignItems:"center",borderRadius:"8px",background:"linear-gradient(310deg, rgb(46, 191, 145), rgb(131, 96, 195))"},children:(0,A.jsxs)(C,{onSubmit:o.handleSubmit,children:[(0,A.jsx)(w,{id:"contactName",name:"contactName",type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.contactName,$formadd:"300px",placeholder:"Enter new name"}),(0,A.jsx)(w,{id:"phoneNumber",name:"phoneNumber",type:"tel",title:"Phone number may contains \\'+\\' and numbers",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.phoneNumber,$formadd:"300px",placeholder:"Enter new number"}),o.touched.phoneNumber&&o.errors.phoneNumber?(0,A.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,A.jsx)(y.Mj,{children:o.errors.phoneNumber})}):null,(0,A.jsx)(k,{$padding:"5px",type:"submit",children:"Change"}),(0,A.jsx)(P,{type:"button",onClick:e,children:"X"})]})})})},I=t(7520);var B=function(n){var e=n.contactName,t=n.phoneNumber,a=n.id,r=n.favorite,i=(0,u.I0)(),o=(0,l.useState)(!1),c=(0,b.Z)(o,2),d=c[0],s=c[1],p=function(){s((function(n){return!n}))},x=(0,u.v9)(h.xU);return(0,A.jsxs)(N,{children:[(0,A.jsxs)(v,{children:[e," :"]})," ",(0,A.jsx)(j,{children:t}),r?(0,A.jsx)(I.Yqy,{}):(0,A.jsx)(I.iqB,{}),(0,A.jsx)(y.lt,{type:"button",onClick:p,children:"Edit"}),(0,A.jsx)(y.lt,{type:"button",onClick:function(){return i((0,m.Mr)(a))},children:x?"Deleting":"Delete"}),d&&(0,A.jsx)(E,{handleChangeEditOpen:p,contactId:a})]})};var R=function(){var n=(0,u.v9)(h.a1),e=(0,u.v9)(h.xU),t=(0,u.v9)(h.N8),a=(0,u.v9)(h.AD),r=n.filter((function(n){return n.contactName.toLowerCase().includes(a)})),i=(0,u.I0)();return(0,l.useEffect)((function(){i((0,m.IF)())}),[i]),(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,A.jsxs)(x.UR,{children:["Some error hapenned: ",t]})}),e&&(0,A.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,A.jsx)(x.zW,{children:"Loading contacts..."})}),!e&&(0,A.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.length?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.LZ,{children:r.map((function(n){var e=n.contactName,t=n._id,a=n.phoneNumber;n.favorite;return(0,A.jsx)(B,{contactName:e,phoneNumber:a,id:t},t)}))})}):(0,A.jsx)("p",{children:"Your list of contacts is empty!"})})]})}},3244:function(n,e,t){t.d(e,{Dx:function(){return s},LZ:function(){return l},UR:function(){return m},zW:function(){return u}});var a,r,i,o,c=t(168),d=t(5867),s=d.ZP.h2(a||(a=(0,c.Z)(["\n  margin: 0.5rem;\n"]))),l=d.ZP.ul(r||(r=(0,c.Z)(["\n  position: relative;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 18px;\n  list-style: disc;\n"]))),u=d.ZP.p(i||(i=(0,c.Z)(["\n  background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));\n"]))),m=d.ZP.span(o||(o=(0,c.Z)(["\n  color: rgb(189, 4, 75);\n"])))},3010:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var a=t(5705),r=t(9434),i=t(6725),o=t(2946),c=t(3230),d=t(4226),s=t(3329);var l,u,m,h,p=function(){var n=(0,r.v9)(o.a1),e=(0,r.I0)(),t=(0,a.TA)({initialValues:{contactName:"",phoneNumber:""},validate:function(n){var e={};return n.contactName?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(n.contactName)||(e.contactName="Invalid contactName"):e.contactName="Required",n.phoneNumber?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(n.phoneNumber)||(e.phoneNumber="Invalid phoneNumber"):e.phoneNumber="Required",e},onSubmit:function(a){var r={contactName:a.contactName,phoneNumber:a.phoneNumber};if(n.some((function(n){return n.contactName.toLowerCase().includes(r.contactName.toLowerCase())})))return t.handleReset(),alert("".concat(r.contactName," is already in list!"));e((0,c.Bq)(r)),t.handleReset()}});return(0,s.jsx)(d.tW,{onSubmit:t.handleSubmit,children:(0,s.jsxs)(d.ZC,{children:[(0,s.jsx)(d.__,{htmlFor:"contactName",children:"Name"}),(0,s.jsx)(d.Rj,{id:"name",name:"contactName",type:"text",title:"ContactName may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.contactName,$formadd:"300px"}),t.touched.contactName&&t.errors.contactName?(0,s.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsx)(d.Mj,{children:t.errors.contactName})}):null,(0,s.jsx)(d.__,{htmlFor:"phoneNumber",children:"Number"}),(0,s.jsx)(d.RT,{id:"number",name:"phoneNumber",type:"tel",title:"Phone number may contains \\'+\\' and numbers",required:!0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phoneNumber,$formadd:"300px"}),t.touched.phoneNumber&&t.errors.phoneNumber?(0,s.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsx)(d.Mj,{children:t.errors.phoneNumber})}):null,(0,s.jsx)(d.wp,{type:"submit",children:"Submit"})]})})},x=t(8641),b=t(2190),g=t(168),f=t(5867),N=f.ZP.div(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n"]))),v=f.ZP.div(u||(u=(0,g.Z)(["\n  width: 400px;\n  padding: 5px;\n"]))),j=f.ZP.div(m||(m=(0,g.Z)(["\n  flex-grow: 2;\n"]))),y=f.ZP.h1(h||(h=(0,g.Z)(["\n  margin: 0.2rem;\n"]))),Z=t(3244);var C=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,s.jsx)(y,{children:"Phonebook"}),(0,s.jsxs)(N,{children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(Z.Dx,{children:"Add contact"}),(0,s.jsx)(p,{})]}),(0,s.jsxs)(j,{children:[(0,s.jsx)(Z.Dx,{children:"Contacts"}),(0,s.jsx)(b.Z,{}),(0,s.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsx)(x.Z,{})})]})]})]})})}},2946:function(n,e,t){t.d(e,{AD:function(){return a},N8:function(){return i},a1:function(){return r},xU:function(){return o}});var a=function(n){return n.contacts.filter},r=function(n){return n.contacts.phonebook.items},i=function(n){return n.contacts.phonebook.isError},o=function(n){return n.contacts.phonebook.selectIsLoading}}}]);
//# sourceMappingURL=10.ec8f0998.chunk.js.map