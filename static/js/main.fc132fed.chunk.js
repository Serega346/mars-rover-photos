(this.webpackJsonpnasap=this.webpackJsonpnasap||[]).push([[0],{11:function(e,a,t){e.exports={main:"style_main__GDDUR",h1:"style_h1__1Kl_x",roverCard:"style_roverCard__2qWXZ",roverPhoto:"style_roverPhoto__3bwHw",roverName:"style_roverName__rzL_W"}},12:function(e,a,t){e.exports={roverInfo:"style_roverInfo__353TM",roverImage:"style_roverImage__17eRQ",roverName:"style_roverName__3dqwA",item:"style_item__32ZUV"}},13:function(e,a,t){e.exports={date:"style_date__1oA6C",camera:"style_camera__1F6lr",opt:"style_opt__2buHA",select:"style_select__32Pgm",marsImage:"style_marsImage__2Iys9",imgContainer:"style_imgContainer__1d5jH",container:"style_container__1d454"}},20:function(e,a,t){e.exports={header:"style_header__1TIqF",h1:"style_h1__13wUp",btn:"style_btn__1zvbG"}},45:function(e,a,t){e.exports={bg:"style_bg__3YAOO"}},49:function(e,a,t){e.exports={footer:"style_footer__1FpCg"}},50:function(e,a,t){e.exports=t(85)},55:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),m=t.n(l),c=t(14),o=t(5),s=(t(55),t(86)),i=t(87),u=t(46),E=t(45),p=t.n(E),d=t(15),_=t(19),v=t.n(_),h={Curiosity:[["FHAZ","Front Hazard Avoidance Camera"],["RHAZ","Rear Hazard Avoidance Camera"],["MAST","Mast Camera"],["CHEMCAM","Chemistry and Camera Complex"],["MAHLI","Mars Hand Lens Imager"],["MARDI","Mars Descent Imager"],["NAVCAM","Navigation Camera"]],Opportunity:[["FHAZ","Front Hazard Avoidance Camera"],["RHAZ","Rear Hazard Avoidance Camera"],["NAVCAM","Navigation Camera"],["PANCAM","Panoramic Camera"],["MINITES","Miniature Thermal Emission Spectrometer (Mini-TES)"]],Spirit:[["FHAZ","Front Hazard Avoidance Camera"],["RHAZ","Rear Hazard Avoidance Camera"],["NAVCAM","Navigation Camera"],["PANCAM","Panoramic Camera"],["MINITES","Miniature Thermal Emission Spectrometer (Mini-TES)"]]},N=t(12),g=t.n(N),y=function(e){var a=Object(n.useState)({}),t=Object(d.a)(a,2),l=t[0],m=t[1];return Object(n.useEffect)((function(){v.a.get("https://api.nasa.gov/mars-photos/api/v1/manifests/".concat(e.name,"?api_key=").concat("3MvuFhk7D2AtdeDy0jYVlSeNE0RqSvtNqUipvT6q")).then((function(e){return m(e.data.photo_manifest)}))}),[e.name]),r.a.createElement("div",{className:g.a.roverInfo},r.a.createElement("h1",{className:g.a.roverName},e.name),r.a.createElement("img",{src:"".concat(e.name,".jpg"),alt:e.name,className:g.a.roverImage}),r.a.createElement("div",null,r.a.createElement("div",{className:g.a.item},"Status",r.a.createElement("span",null,l.status)),r.a.createElement("div",{className:g.a.item},"Launch date",r.a.createElement("span",null,new Date(l.launch_date).toLocaleDateString())),r.a.createElement("div",{className:g.a.item},"Landing date",r.a.createElement("span",null,new Date(l.landing_date).toLocaleDateString())),r.a.createElement("div",{className:g.a.item},"Max date",r.a.createElement("span",null,new Date(l.max_date).toLocaleDateString())),r.a.createElement("div",{className:g.a.item},"Total photos",r.a.createElement("span",null,l.total_photos))))},C=t(88),f=t(13),A=t.n(f),x=function(e){var a=Object(n.useState)("2015-05-05"),t=Object(d.a)(a,2),l=t[0],m=t[1],c=Object(n.useState)("Any"),o=Object(d.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)([]),E=Object(d.a)(u,2),p=E[0],_=E[1],N=h[e.name].map((function(e){return r.a.createElement("option",{key:e,value:e[0],className:A.a.opt},e[1])}));Object(n.useEffect)((function(){v.a.get("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(e.name,"/photos?").concat("earth_date="+l).concat("Any"!==s?"&camera="+s.toLowerCase():"","&api_key=").concat("3MvuFhk7D2AtdeDy0jYVlSeNE0RqSvtNqUipvT6q")).then((function(e){return _(e.data.photos)})).catch((function(e){console.error("Error")}))}),[l,s,e.name]);var g=p.map((function(e){return r.a.createElement("div",{key:e.id,className:A.a.imgContainer},r.a.createElement("img",{src:e.img_src,alt:"mars",className:A.a.marsImage}),r.a.createElement("div",null,r.a.createElement("p",null,"This photo was taken on ",e.sol," sol (",new Date(e.earth_date).toLocaleDateString(),") on ",e.camera.full_name)))}));return r.a.createElement("div",{className:A.a.container},r.a.createElement("form",null,r.a.createElement("input",{className:A.a.date,type:"date",value:l,onChange:function(e){m(e.target.value)}}),r.a.createElement(C.a.Control,{as:"select",className:A.a.select,onChange:function(e){i(e.target.value)}},r.a.createElement("option",null,"Any"),N)),r.a.createElement("div",null,g))},S=function(e){return r.a.createElement("div",{className:p.a.bg},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{xl:3,lg:3,md:4,sm:12,xs:12},r.a.createElement(y,{name:e.name})),r.a.createElement(u.a,{xl:9,lg:9,md:8,sm:12,xs:12},r.a.createElement(x,{name:e.name})))))},b=t(47),M=t(20),I=t.n(M),H=function(e){return r.a.createElement("header",{className:I.a.header},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{xl:5,lg:5,md:5,sm:7,xs:12},r.a.createElement("h1",{className:I.a.h1},"Mars Explorer"),r.a.createElement("button",{onClick:function(){b.scroller.scrollTo("main",{duration:800,delay:0,smooth:"easeInOutQuint"})},className:I.a.btn},"Explore")))))},O=t(11),j=t.n(O),D=function(e){return r.a.createElement("main",{className:"".concat(j.a.main," main")},r.a.createElement(s.a,null,r.a.createElement("h1",{className:j.a.h1},"Choose a Rover to Explore"),r.a.createElement(i.a,null,r.a.createElement(u.a,{xl:4,lg:4,md:4,sm:6,xs:12},r.a.createElement(c.b,{to:"/spirit"},r.a.createElement("div",{className:j.a.roverCard},r.a.createElement("img",{className:j.a.roverPhoto,src:"Spirit.jpg",alt:"Spirit"}),r.a.createElement("div",{className:j.a.roverName},r.a.createElement("p",null,"Spirit"))))),r.a.createElement(u.a,{xl:4,lg:4,md:4,sm:6,xs:12},r.a.createElement(c.b,{to:"/opportunity"},r.a.createElement("div",{className:j.a.roverCard},r.a.createElement("div",null,r.a.createElement("img",{className:j.a.roverPhoto,src:"Opportunity.jpg",alt:"Opportunity"})),r.a.createElement("div",{className:j.a.roverName},r.a.createElement("p",null,"Opportunity"))))),r.a.createElement(u.a,{xl:4,lg:4,md:4,sm:6,xs:12},r.a.createElement(c.b,{to:"/curiosity"},r.a.createElement("div",{className:j.a.roverCard},r.a.createElement("div",null,r.a.createElement("img",{className:j.a.roverPhoto,src:"Curiosity.jpg",alt:"Curiosity"})),r.a.createElement("div",{className:j.a.roverName},r.a.createElement("p",null,"Curiosity"))))))))},T=t(49),w=t.n(T),R=function(){return r.a.createElement("footer",{className:w.a.footer},"Made with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f"),"in Ukraine \xa9 2020 Serhii Khomyn")},k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement(D,null),r.a.createElement(R,null))};m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:k,exact:!0}),r.a.createElement(o.a,{path:"/curiosity"},r.a.createElement(S,{name:"Curiosity"})),r.a.createElement(o.a,{path:"/opportunity"},r.a.createElement(S,{name:"Opportunity"})),r.a.createElement(o.a,{path:"/spirit"},r.a.createElement(S,{name:"Spirit"}))))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.fc132fed.chunk.js.map