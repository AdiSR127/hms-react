(this["webpackJsonphms-react"]=this["webpackJsonphms-react"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(2),i=c(18),n=c.n(i),j=(c(40),c(17)),l=c(69),r=c(70),d=c(71),b=c(72),o=c(73),x=c(74),m=c(75),h=c(10),O=c(63),p=c(89),u=c(64),f=c(65),g=c(66),N=c(67),v=c(68),y=c.p+"static/media/staff.c96eacb4.webp",w=c.p+"static/media/Patients.0b6f242a.webp",k=c(16),S=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),i=c[0],n=c[1],l=function(){return n(!i)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{outline:e.boutline,color:e.bcolor,onClick:l,className:e.cname,children:e.buttonLabel}),Object(s.jsxs)(p.a,{isOpen:i,toggle:l,className:"title",centered:!0,children:[Object(s.jsx)(u.a,{toggle:l,children:"Choose the login type"}),Object(s.jsx)(f.a,{children:Object(s.jsxs)(g.a,{className:"text-center",children:[Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)("img",{src:w,alt:"patients",className:"m-img"})}),Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)("img",{src:y,alt:"patients",className:"m-img"})})]}),Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)(k.b,{to:"/patient_login",className:"btn btn-success",children:"Patients"})}),Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)(k.b,{to:"/staff_login",className:"btn btn-danger",children:"Staff"})})]})]})})]})]})},C=c.p+"static/media/medical-logo.26a5bc7d.png",_=(c(55),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1],n=function(){return i(!c)};return Object(s.jsx)("div",{children:Object(s.jsxs)(l.a,{color:"white",light:!0,expand:"lg",children:[Object(s.jsx)("img",{alt:"logo",src:C,href:"#home",className:"logo"}),Object(s.jsx)(r.a,{className:"text-decoration-none title",children:Object(s.jsxs)(k.b,{to:"/",children:["RAYS ",Object(s.jsx)("span",{className:"text-danger font-weight-bold",children:"Hospitals"})]})}),Object(s.jsx)(d.a,{onClick:n}),Object(s.jsxs)(b.a,{isOpen:c,navbar:!0,className:"text-center",children:[Object(s.jsx)(o.a,{className:"mr-auto",navbar:!0,children:Object(s.jsx)(P,{toggle:n})}),Object(s.jsx)(o.a,{className:"text-center",navbar:!0,children:Object(s.jsx)(A,{})})]})]})})}),P=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#home",id:"mitem",onClick:e.toggle,children:"Home"})}),Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#features",id:"mitem",onClick:e.toggle,children:"Features"})}),Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#about",id:"mitem",onClick:e.toggle,children:"About Us"})}),Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#contact",id:"mitem",onClick:e.toggle,children:"Contact Us"})})]})},A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{buttonLabel:"Login",boutline:!0,bcolor:"secondary"}),Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#social",id:"mitem",children:Object(s.jsx)(h.a,{icon:["fab","facebook-f"],size:"1x"})})}),Object(s.jsx)(x.a,{children:Object(s.jsx)(m.a,{href:"#social",id:"mitem",children:Object(s.jsx)(h.a,{icon:["fab","twitter"],size:"1x"})})})]})},z=c(76),L=c(77),D=c(32),H=c(78),I=c(79),R=c.p+"static/media/Hospital.97afabd0.webp",X=c.p+"static/media/Doctors.17853b42.webp",q=c.p+"static/media/Ambulance.07dbdfda.webp",T=c.p+"static/media/Medicines.1ae0233a.webp",E=c.p+"static/media/prescription.20eae949.webp",M=[{src:R,alt:"hospital",head:"Welcome To Hospital Management System!",text:"A Project By Group 56"},{src:X,alt:"doctors",head:"Staff/Patient Login Portal",text:Object(s.jsx)(S,{buttonLabel:"Click Here!",boutline:!1,bcolor:"primary",cname:"mt-2"})},{src:q,alt:"ambulance",head:"Live Ambulance Tracker",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})},{src:T,alt:"medicine",head:"Online Medicine Booking",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})},{src:E,alt:"prescription",head:"E-Prescription for Patients",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})}],Y=(c(56),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(0),l=Object(j.a)(n,2),r=l[0],d=l[1],b=function(){if(!c){var e=r===M.length-1?0:r+1;d(e)}},o=function(){if(!c){var e=0===r?M.length-1:r-1;d(e)}};return Object(s.jsxs)(z.a,{activeIndex:r,next:b,previous:o,children:[Object(s.jsx)(L.a,{items:M,activeIndex:r,onClickHandler:function(e){c||d(e)}}),M.map((function(e){return Object(s.jsxs)(D.a,{onExiting:function(){return i(!0)},onExited:function(){return i(!1)},children:[Object(s.jsx)("img",{src:e.src,alt:e.alt,className:"cimage"}),Object(s.jsx)(H.a,{captionHeader:e.head,captionText:e.text})]},e.src)})),Object(s.jsx)(I.a,{direction:"prev",directionText:"Previous",onClickHandler:o}),Object(s.jsx)(I.a,{direction:"next",directionText:"Next",onClickHandler:b})]})}),B=c(80),F=c(81),U=c(82),G=c(83),J=c.p+"static/media/login.9fc63e4f.png",W=c.p+"static/media/amb.22cf8dc3.png",K=c.p+"static/media/phar.0c92043e.png",Q=[{id:1,img:J,ftext:"Login Portal",but:Object(s.jsx)(S,{buttonLabel:"Click Here!",boutline:!1,bcolor:"success",cname:"rounded-pill"}),btext:"Login into the Patients, Doctors & Staff Accounts"},{id:2,img:W,ftext:"Ambulane Tracker",but:Object(s.jsxs)(O.a,{color:"success",className:"rounded-pill",children:["Soon ",Object(s.jsx)(h.a,{icon:["fas","clock"]})]}),btext:"Live tracking of all the ambulances in your city."},{id:3,img:K,ftext:"Online Pharmacy",but:Object(s.jsxs)(O.a,{color:"success",className:"rounded-pill",children:["Soon ",Object(s.jsx)(h.a,{icon:["fas","clock"]})]}),btext:"Buy prescribed medicines from our trusted suppliers online."}],V=(c(57),function(){return Object(s.jsx)("section",{id:"features",children:Object(s.jsxs)(g.a,{className:"feat",children:[Object(s.jsx)(N.a,{className:"mb-5 mt-4",children:Object(s.jsxs)(v.a,{size:"12",className:"text-center title pt-5",children:[Object(s.jsx)("h1",{children:"Features"}),Object(s.jsx)("hr",{})]})}),Object(s.jsx)(N.a,{children:Q.map((function(e){return Object(s.jsx)(v.a,{xs:"12",lg:"4",className:"px-4 pb-4",children:Object(s.jsx)(ee,{img:e.img,ftext:e.ftext,but:e.but,btext:e.btext})},e.id)}))})]})})}),Z=function(e){return Object(s.jsx)(B.a,{id:"card-side-front",className:"text-center",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(U.a,{className:"h4 font-weight-bold",children:e.text}),Object(s.jsx)(G.a,{bottom:!0,src:e.img,alt:"Card image cap",className:"cimg mx-auto"})]})})},$=function(e){return Object(s.jsx)(B.a,{id:"card-side-back",className:"text-center",children:Object(s.jsxs)(F.a,{className:"my-5",children:[Object(s.jsx)(U.a,{className:"ctext",children:e.text}),e.but]})})},ee=function(e){return Object(s.jsx)("div",{id:"card-cont",className:"unselect",children:Object(s.jsxs)("div",{id:"cbody",children:[Object(s.jsx)(Z,{img:e.img,text:e.ftext}),Object(s.jsx)($,{but:e.but,text:e.btext})]})})},te=c(84),ce=c.p+"static/media/Rishav.b8158312.jpeg",se=c.p+"static/media/Aditya.9b0ba92d.jpg",ae=c.p+"static/media/Yash.012d197d.jpg",ie=c.p+"static/media/Saurabh.0e570865.jpeg",ne=(c(58),function(){return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(N.a,{children:Object(s.jsxs)(v.a,{size:"12",className:"text-center title pt-4",children:[Object(s.jsx)("h1",{children:"About Us"}),Object(s.jsx)("hr",{})]})}),Object(s.jsxs)(N.a,{className:"mt-4",children:[Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)(je,{img:ce,init:"R",name:"ishav Bhardwaj",sap:"1000010909",roll:"180178012",mail:"mailto: bhardwajrishav89@gmail.com",tel:"tel: 06205109117"})}),Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)(je,{img:se,init:"A",name:"ditya Singh",sap:"1000010801",roll:"180178011",mail:"mailto: adiusingh127@gmail.com",tel:"tel: 08941847380"})})]}),Object(s.jsxs)(N.a,{className:"mb-4",children:[Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)(je,{img:ae,init:"Y",name:"ash Kushwaha",sap:"1000010515",roll:"180178045",mail:"mailto: yashkushwaha227@gmail.com",tel:"tel: 08630087043"})}),Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)(je,{img:ie,init:"S",name:"aurabh Bhandari",sap:"1000010636",roll:"180178004",mail:"mailto: saurabh20bhandari@gmail.com",tel:"tel: 08192992759"})})]})]})})}),je=function(e){return Object(s.jsx)(B.a,{className:"mb-3",id:"cid",children:Object(s.jsxs)(N.a,{className:"no-gutters",children:[Object(s.jsx)(v.a,{xs:"5",className:"my-auto",children:Object(s.jsx)("img",{src:e.img,className:"card-img img-fluid rounded-circle p-3",alt:"profile-pic"})}),Object(s.jsx)(v.a,{xs:"7",className:"text-center my-auto",children:Object(s.jsxs)(F.a,{children:[Object(s.jsxs)(U.a,{className:"h4 title",children:[Object(s.jsx)("span",{className:"text-danger font-weight-bold",children:e.init}),e.name]}),Object(s.jsxs)(te.a,{className:"text-center ctext",children:[Object(s.jsx)("b",{children:"SAP ID:"})," ",e.sap,Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"Roll No:"})," ",e.roll]}),Object(s.jsx)("div",{className:"text-muted ctext",children:Object(s.jsxs)(te.a,{children:[Object(s.jsxs)("a",{href:e.mail,children:[Object(s.jsx)(h.a,{icon:["fas","envelope"]})," Email"," . "]})," ",Object(s.jsxs)("a",{href:e.tel,children:[Object(s.jsx)(h.a,{icon:["fas","phone-alt"]})," Call"]})]})})]})})]})})},le=c(85),re=c(86),de=c(87),be=(c(59),function(){return Object(s.jsxs)("section",{id:"contact",children:[Object(s.jsx)(g.a,{children:Object(s.jsx)(N.a,{children:Object(s.jsxs)(v.a,{size:"12",className:"text-center title mb-5 mt-4",children:[Object(s.jsx)("h1",{children:"Contact Us"}),Object(s.jsx)("hr",{})]})})}),Object(s.jsx)("iframe",{title:"loc",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.3326332707416!2d78.07292901512345!3d30.398303081754904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d70603f128a5%3A0x359bb8f9c7797984!2sDIT%20University!5e0!3m2!1sen!2sin!4v1600617569122!5m2!1sen!2sin",className:"cmap"}),Object(s.jsx)(g.a,{className:"my-5 text-center",children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{xs:"12",lg:"4",children:Object(s.jsx)(xe,{})}),Object(s.jsx)(v.a,{xs:"12",lg:"8",children:Object(s.jsx)(oe,{})})]})})]})}),oe=function(){return Object(s.jsxs)(le.a,{action:"forms/contact.php",method:"post",className:"php-email-form",children:[Object(s.jsxs)(N.a,{form:!0,children:[Object(s.jsx)(v.a,{md:"6",children:Object(s.jsxs)(re.a,{children:[Object(s.jsx)(de.a,{required:!0,type:"text",className:"inp",name:"name",id:"name",placeholder:"Your Name"}),Object(s.jsx)("div",{className:"validate"})]})}),Object(s.jsx)(v.a,{md:"6",children:Object(s.jsxs)(re.a,{children:[Object(s.jsx)(de.a,{required:!0,type:"email",className:"inp",name:"email",id:"email",placeholder:"Your Email"}),Object(s.jsx)("div",{className:"validate"})]})})]}),Object(s.jsxs)(re.a,{children:[Object(s.jsx)(de.a,{required:!0,type:"text",className:"inp",name:"subject",id:"subject",placeholder:"Subject"}),Object(s.jsx)("div",{className:"validate"})]}),Object(s.jsxs)(re.a,{children:[Object(s.jsx)(de.a,{required:!0,type:"textarea",className:"tarea",name:"message",rows:"5",placeholder:"Message"}),Object(s.jsx)("div",{className:"validate"})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("div",{className:"loading",children:"Loading"}),Object(s.jsx)("div",{className:"error-message"}),Object(s.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(O.a,{type:"submit",id:"sbt-button",className:"ctext",children:"Send Message"})})]})},xe=function(){return Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fas","map"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Location:"}),Object(s.jsx)("p",{className:"ctext",children:"Mussoorie, Diversion Road, Makka Wala, Uttarakhand 248009"})]}),Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fas","envelope"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Email:"}),Object(s.jsx)("p",{className:"ctext",children:"contact.us@rays.med"})]}),Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fas","phone-alt"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Call:"}),Object(s.jsx)("p",{className:"ctext",children:"+91 XXX XXX XXXX"})]})]})},me=(c(60),function(){return Object(s.jsx)("footer",{id:"footer",className:"mt-auto",children:Object(s.jsxs)(g.a,{className:"d-md-flex py-4",children:[Object(s.jsxs)("div",{className:"mr-md-auto text-center text-md-left",children:[Object(s.jsxs)("div",{className:"copyright",children:["\xa9 Copyright"," ",Object(s.jsx)("strong",{children:Object(s.jsx)("span",{children:"RAYSHopitals"})}),". All Rights Reserved"]}),Object(s.jsx)("div",{className:"credits",children:"Designed by Group 56"})]}),Object(s.jsxs)("div",{className:"social-links text-center text-md-right pt-3 pt-md-0",children:[Object(s.jsx)("a",{href:"#social",className:"twitter",children:Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fab","twitter"]})})}),Object(s.jsx)("a",{href:"#social",className:"facebook",children:Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fab","facebook-f"]})})}),Object(s.jsx)("a",{href:"#social",className:"instagram",children:Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fab","instagram"]})})}),Object(s.jsx)("a",{href:"#social",className:"google-plus",children:Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fab","skype"]})})}),Object(s.jsx)("a",{href:"#social",className:"linkedin",children:Object(s.jsx)("i",{children:Object(s.jsx)(h.a,{icon:["fab","linkedin-in"]})})})]})]})})}),he=c(19),Oe=c(33),pe=c(34);he.b.add(Oe.a,pe.a);var ue=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(_,{}),Object(s.jsx)(Y,{}),Object(s.jsx)(V,{}),Object(s.jsx)(ne,{}),Object(s.jsx)(be,{}),Object(s.jsx)(me,{})]})},fe=c(9),ge=c(88),Ne=(c(30),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(le.a,{className:"pt-4",method:"post",action:"forms/staff_login.php",children:[Object(s.jsxs)(re.a,{row:!0,children:[Object(s.jsx)(ge.a,{for:"s_id",sm:{size:2,offset:1},children:"Staff ID:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(de.a,{required:!0,type:"number",id:"s_id",name:"s_id",placeholder:"Staff ID"})})]}),Object(s.jsxs)(re.a,{row:!0,children:[Object(s.jsx)(ge.a,{for:"s_pass",sm:{size:2,offset:1},children:"Password:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(de.a,{required:!0,type:"password",id:"s_pass",name:"s_pass",placeholder:"Password"})})]}),Object(s.jsxs)(re.a,{row:!0,children:[Object(s.jsx)(ge.a,{for:"role",sm:{size:2,offset:1},children:"Role:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsxs)(v.a,{sm:"8",children:[Object(s.jsx)(re.a,{check:!0,children:Object(s.jsxs)(ge.a,{check:!0,children:[Object(s.jsx)(de.a,{type:"radio",name:"role",id:"doctor",value:"doc"})," Doctor"]})}),Object(s.jsx)(re.a,{check:!0,children:Object(s.jsxs)(ge.a,{check:!0,children:[Object(s.jsx)(de.a,{type:"radio",name:"role",id:"reception",value:"rep",defaultChecked:!0})," Receptionist"]})}),Object(s.jsx)(re.a,{check:!0,children:Object(s.jsxs)(ge.a,{check:!0,children:[Object(s.jsx)(de.a,{type:"radio",name:"role",id:"admin",value:"adm"})," Admin"]})})]})})]}),Object(s.jsx)(re.a,{row:!0,className:"text-center",children:Object(s.jsx)(v.a,{xs:"12",children:Object(s.jsx)(O.a,{color:"primary",className:"rounded-pill",children:"Sign In"})})})]})})}),ve=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(le.a,{className:"pt-4",method:"post",action:"forms/patient_login.php",children:[Object(s.jsxs)(re.a,{row:!0,children:[Object(s.jsx)(ge.a,{for:"p_id",sm:{size:2,offset:1},children:"Patient ID:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(de.a,{required:!0,type:"number",id:"p_id",name:"p_id",placeholder:"Patient ID"})})]}),Object(s.jsxs)(re.a,{row:!0,children:[Object(s.jsx)(ge.a,{for:"p_pass",sm:{size:2,offset:1},children:"Password:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(de.a,{required:!0,type:"password",id:"p_pass",name:"p_pass",placeholder:"Password"})})]}),Object(s.jsx)(re.a,{row:!0,className:"text-center",children:Object(s.jsx)(v.a,{xs:"12",children:Object(s.jsx)(O.a,{color:"primary",className:"rounded-pill",children:"Sign In"})})})]})})},ye=function(){return Object(s.jsxs)("div",{className:"ctext",children:[Object(s.jsx)("div",{className:"title_bar text-center bg-color text-white p-3 h1",children:"Staff Login"}),Object(s.jsx)("div",{className:"area",children:Object(s.jsx)(B.a,{id:"cust-cont",children:Object(s.jsx)(F.a,{children:Object(s.jsx)(Ne,{})})})})]})},we=function(){return Object(s.jsxs)("div",{className:"ctext",children:[Object(s.jsx)("div",{className:"title_bar text-center bg-color text-white p-3 h1",children:"Patient Login"}),Object(s.jsx)("div",{className:"area",children:Object(s.jsx)(B.a,{id:"cust-cont",children:Object(s.jsx)(F.a,{children:Object(s.jsx)(ve,{})})})})]})},ke=function(){return Object(s.jsx)(k.a,{children:Object(s.jsxs)(fe.d,{children:[Object(s.jsx)(fe.b,{exact:!0,path:"/",component:ue}),Object(s.jsx)(fe.b,{path:"/staff_login",component:ye}),Object(s.jsx)(fe.b,{path:"/patient_login",component:we}),Object(s.jsx)(fe.a,{exact:!0,to:"/"})]})})};c(61);n.a.render(Object(s.jsx)(ke,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.578f13f6.chunk.js.map