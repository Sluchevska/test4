(this.webpackJsonpmodal=this.webpackJsonpmodal||[]).push([[0],{18:function(t,n,e){},23:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var a,r,c,i,o,s,d,l=e(1),u=e.n(l),b=e(9),p=e.n(b),h=(e(18),e(12)),m=e(4),j=e(5),x=e(7),f=e(6),g=e(10),O=e(2),v=e(3),C=v.a.label(a||(a=Object(O.a)(["\nfont-weight: 700;\nfont-style: italic;\nfont-size: 17px;\nmargin-right:5px;\n"]))),y=v.a.input(r||(r=Object(O.a)(["\nmargin-right: 5px;\npadding: 5px;\n\nborder-radius: 5px;\nbox-shadow: 1px 2px 3px rgb(85, 42, 85);\n"]))),w=v.a.button(c||(c=Object(O.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),S=e(0),k=function(t){Object(x.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.handleChange=function(n){t.setState(Object(g.a)({},n.currentTarget.name,n.currentTarget.value))},t.handleSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(j.a)(e,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(S.jsx)(C,{children:"Name"}),Object(S.jsx)(y,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(S.jsx)(C,{children:"Number"}),Object(S.jsx)(y,{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(S.jsx)(w,{type:"submit",children:"Add contact"})]})})}}]),e}(l.Component),A=v.a.span(i||(i=Object(O.a)(["\nfont-weight: 500;\nfont-style: italic;\nfont-size: 17px;\n"]))),z=v.a.button(o||(o=Object(O.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),J=v.a.ul(s||(s=Object(O.a)(["\nmargin-top: 40px;\npadding-right:40px;\n"]))),D=v.a.li(d||(d=Object(O.a)(["\n\nlist-style:none;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\nmargin-bottom:5px;\n\n"])));var L,N,T,F=function(t){var n=t.contacts,e=t.onRemove;return Object(S.jsx)(J,{children:n.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(S.jsxs)(D,{name:a,number:r,children:[Object(S.jsxs)(A,{children:[a,": "]}),Object(S.jsxs)(A,{children:[r," "]}),Object(S.jsxs)(z,{type:"button",onClick:function(){return e(n)},children:[" ","Delete contact"]})]},n)}))})},I=function(t){var n=t.value,e=t.onChange;return Object(S.jsxs)("label",{children:[Object(S.jsx)(C,{children:"Find contact by name"}),Object(S.jsx)(y,{type:"text",value:n,onChange:e})]})},M=v.a.div(L||(L=Object(O.a)(["\nmargin: 20px;\n\n background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));\npadding: 10px;\nwidth: 700px;\nbox-shadow: 5px 6px 9px rgb(85, 42, 85);\n border-radius: 5px;\n text-align: center;\n\n\n\n"]))),R=v.a.h1(N||(N=Object(O.a)(["\nfont-style: italic;\n\n\n\n"]))),Z=v.a.h2(T||(T=Object(O.a)(["\nfont-style: italic;\nmargin-top:46px;\n\n\n\n"]))),q=(e(23),e(24).v4),B=function(t){Object(x.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(n){var e=n.name,a=n.number,r=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),c=t.state.contacts.find((function(t){return t.number===a}));if(r)alert("".concat(e," is already in contacts"));else if(c)alert("This number ".concat(a," is already in contacts"));else{var i={id:q(),name:e,number:a};t.setState((function(t){return{contacts:[i].concat(Object(h.a)(t.contacts))}}))}},t.changeFilter=function(n){t.setState({filter:n.currentTarget.value})},t.getVisibleContacts=function(){var n=t.state,e=n.filter,a=n.contacts,r=e.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(j.a)(e,[{key:"componentDidUpdate",value:function(t,n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.state.filter;return Object(S.jsxs)(M,{children:[Object(S.jsx)(R,{children:"Phonebook"}),Object(S.jsx)(k,{onSubmit:this.addContact}),Object(S.jsx)(Z,{children:"Contacts"}),Object(S.jsx)(I,{value:t,onChange:this.changeFilter}),Object(S.jsx)(F,{contacts:this.getVisibleContacts(),onRemove:this.deleteContact})]})}}]),e}(u.a.Component);p.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(B,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.867949f4.chunk.js.map