(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7frF":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},OPdE:function(e){e.exports=JSON.parse('[{"cover":{"src":"https://mir-s3-cdn-cf.behance.net/projects/404/b4783f83447083.Y3JvcCw2MjAsNDg1LDIxOCw2Nw.png","alt":"Sara Costureira - Website"},"href":"https://www.behance.net/gallery/83447083/Sara-Costureira-Website","statics":{"likes":19,"views":153}},{"cover":{"src":"https://mir-s3-cdn-cf.behance.net/projects/404/29fd1157733161.Y3JvcCwyNDgwLDE5MzksMCw2Nw.png","alt":"Vorum - W.I.P"},"href":"https://www.behance.net/gallery/57733161/Vorum-WIP","statics":{"likes":48,"views":372}}]')},Ol6B:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt");t.default=i},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Qe}));var n=a("hGi/"),r=a("q1tI"),i=a.n(r),o=a("8Kt/"),l=a.n(o),s=a("uUQD"),c=a("uQod"),d=a("ofer"),u=a("Z3vd"),m=a("Ff2n"),f=a("rePB"),g=a("wx14"),p=(a("17x9"),a("iuhU")),v=a("H2TA"),h=a("wpWl"),b=a("i8i4");function y(e){return e&&e.ownerDocument||document}var j=a("bfFb"),w=a("Ovef");function I(e){return e.substring(2).toLowerCase()}var N=function(e){var t=e.children,a=e.disableReactTree,n=void 0!==a&&a,i=e.mouseEvent,o=void 0===i?"onClick":i,l=e.onClickAway,s=e.touchEvent,c=void 0===s?"onTouchEnd":s,d=r.useRef(!1),u=r.useRef(null),m=r.useRef(!1),f=r.useRef(!1);r.useEffect((function(){return m.current=!0,function(){m.current=!1}}),[]);var g=r.useCallback((function(e){u.current=b.findDOMNode(e)}),[]),p=Object(j.a)(t.ref,g),v=Object(w.a)((function(e){var t=f.current;if(f.current=!1,m.current&&u.current)if(d.current)d.current=!1;else{var a;if(e.composedPath)a=e.composedPath().indexOf(u.current)>-1;else{var r=y(u.current);a=!(r.documentElement&&r.documentElement.contains(e.target))||u.current.contains(e.target)}a||!n&&t||l(e)}})),h=function(e){return function(a){f.current=!0;var n=t.props[e];n&&n(a)}},N={ref:p};return!1!==c&&(N[c]=h(c)),r.useEffect((function(){if(!1!==c){var e=I(c),t=y(u.current),a=function(){d.current=!0};return t.addEventListener(e,v),t.addEventListener("touchmove",a),function(){t.removeEventListener(e,v),t.removeEventListener("touchmove",a)}}}),[v,c]),!1!==o&&(N[o]=h(o)),r.useEffect((function(){if(!1!==o){var e=I(o),t=y(u.current);return t.addEventListener(e,v),function(){t.removeEventListener(e,v)}}}),[v,o]),r.createElement(r.Fragment,null,r.cloneElement(t,N))},S=a("NqtD"),O=a("x6Ns"),x=a("bqsI"),C=a("kKAo"),E=a("ye/S"),A=r.forwardRef((function(e,t){var a=e.action,n=e.classes,i=e.className,o=e.message,l=e.role,s=void 0===l?"alert":l,c=Object(m.a)(e,["action","classes","className","message","role"]);return r.createElement(C.a,Object(g.a)({role:s,square:!0,elevation:6,className:Object(p.a)(n.root,i),ref:t},c),r.createElement("div",{className:n.message},o),a?r.createElement("div",{className:n.action},a):null)})),G=Object(v.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(E.b)(e.palette.background.default,t);return{root:Object(g.a)({},e.typography.body2,Object(f.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(A),T=r.forwardRef((function(e,t){var a=e.action,n=e.anchorOrigin,i=(n=void 0===n?{vertical:"bottom",horizontal:"center"}:n).vertical,o=n.horizontal,l=e.autoHideDuration,s=void 0===l?null:l,c=e.children,d=e.classes,u=e.className,f=e.ClickAwayListenerProps,v=e.ContentProps,b=e.disableWindowBlurListener,y=void 0!==b&&b,j=e.message,I=e.onClose,C=e.onEnter,E=e.onEntered,A=e.onEntering,T=e.onExit,k=e.onExited,P=e.onExiting,L=e.onMouseEnter,B=e.onMouseLeave,R=e.open,D=e.resumeHideDuration,M=e.TransitionComponent,W=void 0===M?x.a:M,_=e.transitionDuration,F=void 0===_?{enter:h.b.enteringScreen,exit:h.b.leavingScreen}:_,H=e.TransitionProps,z=Object(m.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),U=r.useRef(),q=r.useState(!0),X=q[0],J=q[1],V=Object(w.a)((function(){I&&I.apply(void 0,arguments)})),Y=Object(w.a)((function(e){I&&null!=e&&(clearTimeout(U.current),U.current=setTimeout((function(){V(null,"timeout")}),e))}));r.useEffect((function(){return R&&Y(s),function(){clearTimeout(U.current)}}),[R,s,Y]);var Z=function(){clearTimeout(U.current)},K=r.useCallback((function(){null!=s&&Y(null!=D?D:.5*s)}),[s,D,Y]);return r.useEffect((function(){if(!y&&R)return window.addEventListener("focus",K),window.addEventListener("blur",Z),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",Z)}}),[y,K,R]),!R&&X?null:r.createElement(N,Object(g.a)({onClickAway:function(e){I&&I(e,"clickaway")}},f),r.createElement("div",Object(g.a)({className:Object(p.a)(d.root,d["anchorOrigin".concat(Object(S.a)(i)).concat(Object(S.a)(o))],u),onMouseEnter:function(e){L&&L(e),Z()},onMouseLeave:function(e){B&&B(e),K()},ref:t},z),r.createElement(W,Object(g.a)({appear:!0,in:R,onEnter:Object(O.a)((function(){J(!1)}),C),onEntered:E,onEntering:A,onExit:T,onExited:Object(O.a)((function(){J(!0)}),k),onExiting:P,timeout:F,direction:"top"===i?"down":"up"},H),c||r.createElement(G,Object(g.a)({message:j,action:a},v)))))})),k=Object(v.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},r={justifyContent:"flex-start"},i={top:24},o={bottom:24},l={right:24},s={left:24},c={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(g.a)({},t,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({},i,{},c))),anchorOriginBottomCenter:Object(g.a)({},a,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({},o,{},c))),anchorOriginTopRight:Object(g.a)({},t,{},n,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({left:"auto"},i,{},l))),anchorOriginBottomRight:Object(g.a)({},a,{},n,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({left:"auto"},o,{},l))),anchorOriginTopLeft:Object(g.a)({},t,{},r,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({right:"auto"},i,{},s))),anchorOriginBottomLeft:Object(g.a)({},a,{},r,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({right:"auto"},o,{},s)))}}),{flip:!1,name:"MuiSnackbar"})(T),P=a("R/WZ"),L=a("q1BZ"),B=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateRows:"max-content",gridGap:"2em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"flex-start",width:"99vw",marginTop:"2em"}}})),R=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"90vw",justifySelf:"center",alignSelf:"center"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.BIG),width:"inherit",textAlign:"center"},subtitle:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.SMALL),width:"inherit",textAlign:"center",fontSize:"1.5em",color:L.b.NEUTRAL_COLOR.neutralSecondary},container:{padding:e.spacing(L.a.SPACING.DEFAULT),display:"grid",gridTemplateRows:"max-content",gridGap:"2em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",justifySelf:"center",alignSelf:"center"},buttonAction:{width:"max-content",height:"max-content",background:L.b.linerGradient("19deg",[["#c23616","0%"],["#e84118","100%"]]),boxShadow:L.b.BOX_SHADOW.faded(6,"#e84118",.6),padding:e.spacing(L.a.SPACING.DEFAULT),color:L.b.NEUTRAL_COLOR.neutralLight,"&:hover":{boxShadow:L.b.BOX_SHADOW.faded(4,"#e84118",.8)},transition:"all .3s ease-in",borderRadius:"1em",marginTop:"1em"}}})),D=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"max-content",gridAutoFlow:"column",gridGap:"2em",justifyContent:"flex-start",alignItems:"flex-start",justifyItems:"flex-start",width:"90vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(2*L.a.SPACING.BIG,L.a.SPACING.BIG),marginTop:"2em"}}})),M=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",marginTop:"1em",justifySelf:"center",alignSelf:"center"},row:{display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"flex-start",padding:e.spacing(L.a.SPACING.BIG)},img:{width:"22em",height:"22em",borderRadius:"50%",justifySelf:"center",alignSelf:"center",objectFit:"cover"}}})),W=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",justifySelf:"center",alignSelf:"center",marginTop:"2em"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.BIG),width:"inherit",textAlign:"center"},rootCard:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 16em)",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"flex-start",alignItems:"flex-start",width:"inherit"},card:{display:"grid",gridTemplateRows:"max-content",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",borderRadius:"2em",boxShadow:"unset",transition:"all .3s ease-in","&:hover":{boxShadow:L.b.BOX_SHADOW.light()},width:"16em",padding:e.spacing(L.a.SPACING.DEFAULT),gridGap:"1em"},cardBody:{color:L.b.NEUTRAL_COLOR.neutralPrimary,width:"12em",textAlign:"center"},cardStack:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 34px)",gridGap:"1em",width:"16em",justifyContent:"center",justifyItems:"center",alignItems:"center"},cardIcon:{width:"32px",height:"32px",objectFit:"cover"}}})),_=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"max-content",gridAutoFlow:"column",gridGap:"2em",justifyContent:"flex-start",alignItems:"flex-start",justifyItems:"flex-start",width:"99vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(2*L.a.SPACING.BIG,L.a.SPACING.BIG),marginTop:"2em"}}})),F=i.a.createElement;function H(e){Object(n.a)(e);var t=R(),a=function(){var e=new Date,t=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return"".concat(a,"/").concat(t)}(),r=Object(s.a)(!0);return F("div",{className:t.root},F(d.a,{variant:"h2",className:t.title},F("strong",null,"IDEAS")," CAN CHANGE PEOPLE ",F("br",null),"AND PEOPLE CHANGES THE ",F("strong",null,"WORLD")),F(d.a,{variant:"body1",className:t.subtitle},"And today, ",F("strong",null,a),", ",F("br",null),"I will be the man that will help you achieve your ",F("strong",null,"idea!")),F("div",{className:t.container},F(u.a,{href:"mailto:dax-soft@live.com",variant:"contained",className:t.buttonAction,onClick:function(){return null}},"Ask me how!")),F(k,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r.isOn(),autoHideDuration:3e3,onClose:r.off,message:"Provisory Portfolio!"}))}var z=a("IFCi"),U=a("469l"),q=Object(P.a)((function(e){return{root:{display:"grid",padding:e.spacing(L.a.SPACING.SMALL),borderRadius:"1em",gridTemplateRows:"max-content",justifyContent:"center",justifyItems:"center",alignItems:"center",boxShadow:L.b.BOX_SHADOW.light(),transition:"all .3s ease-in","&:hover":{boxShadow:L.b.BOX_SHADOW.float()},width:"316px"},button:{justifySelf:"center",alignSelf:"center",width:"max-content",height:"max-content"},img:{width:"calc(316px - 2em)"},badge:{width:"24px",height:"24px"},description:{display:"grid",gridTemplateColumns:"max-content max-content",width:"inherit",justifyContent:"space-between",justifyItems:"flex-start",alignItems:"center",padding:e.spacing(L.a.SPACING.SMALL)},col:{display:"grid",gridTemplateColumns:"16px 3em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"center",gridGap:".5rem"},icon:{width:"12px",height:"12px"},row:{display:"grid",gridTemplateRows:"max-content",gridGap:".5rem",justifyContent:"space-evenly",justifyItems:"flex-start",alignItems:"flex-start"}}})),X=a("Ol6B"),J=a.n(X),V=a("7frF"),Y=a.n(V),Z=i.a.createElement,K=function(e){var t=e.title,a=e.img,n=e.likes,r=e.views,i=e.href,o=q();return Z(z.a,{badgeContent:Z(U.a,{src:"/behance.png",className:o.badge}),overlap:"circle"},Z("div",{className:o.root},Z(u.a,{className:o.button,target:"_blank",href:i,onClick:function(){return null}},Z("img",{src:a,className:o.img,alt:t})),Z("div",{className:o.description},Z("div",{className:o.row},Z(d.a,{variant:"h6",style:{fontSize:"1rem"}},t),Z(d.a,{variant:"caption",style:{fontSize:".8rem"}},"Michael Willian")),Z("div",{className:o.row},Z("div",{className:o.col},Z(J.a,{className:o.icon}),Z(d.a,{variant:"caption",style:{fontSize:".8rem"}},n)),Z("div",{className:o.col},Z(Y.a,{className:o.icon}),Z(d.a,{variant:"caption",style:{fontSize:".8rem"}},r))))))},Q=a("nz6D"),$=a("OPdE"),ee=i.a.createElement;function te(e){Object(n.a)(e);var t=D();return ee(Q.a,{vertical:!1,horizontal:!0,className:t.root},$.map((function(e,t){return ee(K,{key:t,href:e.href,likes:e.statics.likes,views:e.statics.views,img:e.cover.src,title:e.cover.alt})})))}var ae=i.a.createElement;function ne(e){Object(n.a)(e);var t=M(),a=(new Date).getFullYear();return ae("div",{className:t.root},ae("div",{className:t.row},ae(d.a,{variant:"h3"},"Who am I?"),ae(d.a,{variant:"h6"},"Michael Willian, ",a-1998," years old,"),ae(d.a,{variant:"body1"},"An self-taught developer and designer. ",ae("br",null),"I will strive to design and create solutions that can improve ",ae("br",null),"the quality of your life and time! ",ae("br",null),"For me, coding is more than a job, it's a hobby and a mission. ",ae("br",null),"My faith stands that with the power of programmation, ",ae("br",null)," ","I will can create a better perspective of life for someone!")),ae("img",{src:"/myself.png",alt:"Michael Willian Santos","aria-label":"My Self Portrait",className:t.img}))}var re=a("csfp"),ie=i.a.createElement,oe=function(e){Object(n.a)(e);var t=W();return ie("div",{className:t.card},ie(d.a,{variant:"h6"},"Frontend"),ie(d.a,{variant:"body2",className:t.cardBody},"The aspect visual is highly important to get more client for your business. Today is a requirement that your website stands responsive and dynamic to attend the overall public."),ie("div",{className:t.cardStack},ie(re.a,{title:"React"},ie(U.a,{src:"/react.png",alt:"react",className:t.cardIcon})),ie(re.a,{title:"Next.Js"},ie(U.a,{src:"/nextjs.png",alt:"nextjs",className:t.cardIcon})),ie(re.a,{title:"Pixi.Js"},ie(U.a,{src:"/pixijs.png",alt:"pixijs",className:t.cardIcon}))))},le=function(e){Object(n.a)(e);var t=W();return ie("div",{className:t.card},ie(d.a,{variant:"h6"},"Backend"),ie(d.a,{variant:"body2",className:t.cardBody},"What people can not see, they feel! It is important to maintain the performance in mind while have a look at the security of your application."),ie("div",{className:t.cardStack},ie(re.a,{title:"Node.JS"},ie(U.a,{src:"/nodejs.png",alt:"nodejs",className:t.cardIcon})),ie(re.a,{title:"Mongo.DB"},ie(U.a,{src:"/mongodb.png",alt:"mongodb",className:t.cardIcon})),ie(re.a,{title:"Git"},ie(U.a,{src:"/git.png",alt:"git",className:t.cardIcon}))))},se=function(e){Object(n.a)(e);var t=W();return ie("div",{className:t.card},ie(d.a,{variant:"h6"},"I do"),ie(d.a,{variant:"body2",className:t.cardBody},"I am a fullstack developer. For instance, I can help you in creating:",ie("br",null)),ie("div",{style:{justifySelf:"flex-start",alignSelf:"flex-start"}},ie(d.a,{variant:"caption"},ie("strong",null,"E-commerce")," ",ie("br",null),ie("strong",null,"Business & Corporation Website")," ",ie("br",null),ie("strong",null,"Portfolio & Landscape")," ",ie("br",null),ie("strong",null,"Dashboard Control")," ",ie("br",null),ie("strong",null,"Software with ElectronJS")," ",ie("br",null))))};function ce(e){Object(n.a)(e);var t=W();return ie("div",{className:t.root},ie(d.a,{variant:"h2",className:t.title},"What can I do for you?"),ie("div",{className:t.rootCard},ie(oe,null),ie(le,null),ie(se,null)))}var de=i.a.createElement,ue=function(e){Object(n.a)(e);var t=W();return de("div",{className:t.card},de(d.a,{variant:"h6"},"Search"),de(d.a,{variant:"body2",className:t.cardBody},"I will speak a lot with you about your needs. Then, creating a guideline for the project. I will start to search what is up on the market and how the concurrence works."))},me=function(e){Object(n.a)(e);var t=W();return de("div",{className:t.card},de(d.a,{variant:"h6"},"Design"),de(d.a,{variant:"body2",className:t.cardBody},"After searching. I will start to develop the project. From the code until the UI & UX (if you don't have one to use). Always making reports and seeking your feedback!"))},fe=function(e){Object(n.a)(e);var t=W();return de("div",{className:t.card},de(d.a,{variant:"h6"},"Test"),de(d.a,{variant:"body2",className:t.cardBody},"Before the product goes to the public, it needs to be tested! Here I will make every possible test to ensure that the project stands quality."))};function ge(e){Object(n.a)(e);var t=W();return de("div",{className:t.root},de(d.a,{variant:"h2",className:t.title},"How I work"),de("div",{className:t.rootCard},de(ue,null),de(me,null),de(fe,null)))}var pe=a("vcXL"),ve=a.n(pe),he=a("TL9f"),be=a("iae6"),ye=i.a.createElement;function je(e){Object(n.a)(e);var t=_(),a=Object(s.d)("github",[]),r=Object(s.c)({endpoint:"https://api.github.com/users/DaxSoft/repos",onSuccess:function(e){return a.set(e)},startInit:a.get(),onError:function(e){r.data=a.get()}},"GET",ve.a);return ye("div",null,r.loading.isOn()?ye(be.a,{style:{alignSelf:"center",justifySelf:"center"},color:"secondary"}):ye(Q.a,{vertical:!1,horizontal:!0,className:t.root},Array.isArray(r.data)&&r.data.length>0&&r.data.map((function(e,t){if(function(e){var t=e.forks,a=e.description;return!1===t||/(\#docs)/gim.test(a)}(e))return ye(he.a,{key:t,title:e.name,href:e.html_url,description:e.description,stars:e.stargazers_count,fork:e.forks_count})}))))}var we=i.a.createElement;function Ie(e){Object(n.a)(e);var t=B();return we("div",{className:t.root},we(H,null),we(te,null),we(ne,null),we(ce,null),we(je,null),we(ge,null))}var Ne=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateRows:"max-content",gridGap:"2em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"flex-start",width:"99vw",marginTop:"2em"}}})),Se=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",justifySelf:"center",alignSelf:"center"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.BIG),width:"inherit",textAlign:"center"},subtitle:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.SMALL),width:"inherit",textAlign:"center",fontSize:"1.5em",color:L.b.NEUTRAL_COLOR.neutralSecondary},container:{padding:e.spacing(L.a.SPACING.DEFAULT),display:"grid",gridTemplateRows:"max-content",gridGap:"2em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",justifySelf:"center",alignSelf:"center"},buttonAction:{width:"max-content",height:"max-content",background:L.b.linerGradient("19deg",[["#c23616","0%"],["#e84118","100%"]]),boxShadow:L.b.BOX_SHADOW.faded(6,"#e84118",.6),padding:e.spacing(L.a.SPACING.DEFAULT),color:L.b.NEUTRAL_COLOR.neutralLight,"&:hover":{boxShadow:L.b.BOX_SHADOW.faded(4,"#e84118",.8)},transition:"all .3s ease-in",borderRadius:"1em",marginTop:"1em"}}})),Oe=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"max-content",gridAutoFlow:"column",gridGap:"2em",justifyContent:"flex-start",alignItems:"flex-start",justifyItems:"flex-start",width:"90vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(2*L.a.SPACING.BIG,L.a.SPACING.BIG),marginTop:"2em"}}})),xe=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"2em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",marginTop:"1em",justifySelf:"center",alignSelf:"center"},row:{display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",padding:e.spacing(L.a.SPACING.BIG)},img:{width:"6em",height:"6em",borderRadius:"50%",justifySelf:"center",alignSelf:"center",objectFit:"cover"}}})),Ce=Object(P.a)((function(e){return{root:{padding:e.spacing(L.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",justifySelf:"center",alignSelf:"center",marginTop:"2em"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(L.a.SPACING.BIG),width:"inherit",textAlign:"center"},rootCard:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 16em)",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"flex-start",alignItems:"flex-start",width:"inherit"},card:{display:"grid",gridTemplateRows:"max-content",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",borderRadius:"2em",boxShadow:L.b.BOX_SHADOW.light(),width:"16em",padding:e.spacing(L.a.SPACING.DEFAULT),gridGap:"1em"},cardBody:{color:L.b.NEUTRAL_COLOR.neutralPrimary,width:"12em",textAlign:"center"},cardStack:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 34px)",gridGap:"1em",width:"16em",justifyContent:"center",justifyItems:"center",alignItems:"center"},cardIcon:{width:"32px",height:"32px",objectFit:"cover"}}})),Ee=Object(P.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"max-content",gridAutoFlow:"column",gridGap:"2em",justifyContent:"flex-start",alignItems:"flex-start",justifyItems:"flex-start",width:"99vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(2*L.a.SPACING.BIG,L.a.SPACING.BIG),marginTop:"2em"}}})),Ae=i.a.createElement;function Ge(e){Object(n.a)(e);var t=Se(),a=function(){var e=new Date,t=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return"".concat(a,"/").concat(t)}(),r=Object(s.a)(!0);return Ae("div",{className:t.root},Ae(d.a,{variant:"h6",className:t.title},Ae("strong",null,"IDEAS")," CAN CHANGE PEOPLE ",Ae("br",null),"AND PEOPLE CHANGES THE ",Ae("strong",null,"WORLD")),Ae(d.a,{variant:"body1",className:t.subtitle},"And today, ",Ae("strong",null,a),", ",Ae("br",null),"I will be the man that will help you achieve your ",Ae("strong",null,"idea!")),Ae("div",{className:t.container},Ae(u.a,{href:"mailto:dax-soft@live.com",variant:"contained",className:t.buttonAction,onClick:function(){return null}},"Ask me how!")),Ae(k,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r.isOn(),autoHideDuration:3e3,onClose:r.off,message:"Provisory Portfolio!"}))}var Te=i.a.createElement;function ke(e){Object(n.a)(e);var t=Oe();return Te(Q.a,{vertical:!1,horizontal:!0,className:t.root},$.map((function(e,t){return Te(K,{key:t,href:e.href,likes:e.statics.likes,views:e.statics.views,img:e.cover.src,title:e.cover.alt})})))}var Pe=i.a.createElement;function Le(e){Object(n.a)(e);var t=xe(),a=(new Date).getFullYear();return Pe("div",{className:t.root},Pe("div",{className:t.row},Pe(d.a,{variant:"h3"},"Who am I?"),Pe(d.a,{variant:"h6"},"Michael Willian, ",a-1998," years old,"),Pe("img",{src:"/myself.png",alt:"Michael Willian Santos","aria-label":"My Self Portrait",className:t.img}),Pe(d.a,{variant:"body1",style:{textAlign:"center"}},"An self-taught developer and designer. ",Pe("br",null),"I will strive to design and create solutions that can improve ",Pe("br",null),"the quality of your life and time! ",Pe("br",null),"For me, coding is more than a job, it's a hobby and a mission. ",Pe("br",null),"My faith stands that with the power of programmation, ",Pe("br",null)," ","I will can create a better perspective of life for someone!")))}var Be=i.a.createElement,Re=function(e){Object(n.a)(e);var t=Ce();return Be("div",{className:t.card},Be(d.a,{variant:"h6"},"Frontend"),Be(d.a,{variant:"body2",className:t.cardBody},"The aspect visual is highly important to get more client for your business. Today is a requirement that your website stands responsive and dynamic to attend the overall public."),Be("div",{className:t.cardStack},Be(re.a,{title:"React"},Be(U.a,{src:"/react.png",alt:"react",className:t.cardIcon})),Be(re.a,{title:"Next.Js"},Be(U.a,{src:"/nextjs.png",alt:"nextjs",className:t.cardIcon})),Be(re.a,{title:"Pixi.Js"},Be(U.a,{src:"/pixijs.png",alt:"pixijs",className:t.cardIcon}))))},De=function(e){Object(n.a)(e);var t=Ce();return Be("div",{className:t.card},Be(d.a,{variant:"h6"},"Backend"),Be(d.a,{variant:"body2",className:t.cardBody},"What people can not see, they feel! It is important to maintain the performance in mind while have a look at the security of your application."),Be("div",{className:t.cardStack},Be(re.a,{title:"Node.JS"},Be(U.a,{src:"/nodejs.png",alt:"nodejs",className:t.cardIcon})),Be(re.a,{title:"Mongo.DB"},Be(U.a,{src:"/mongodb.png",alt:"mongodb",className:t.cardIcon})),Be(re.a,{title:"Git"},Be(U.a,{src:"/git.png",alt:"git",className:t.cardIcon}))))},Me=function(e){Object(n.a)(e);var t=Ce();return Be("div",{className:t.card},Be(d.a,{variant:"h6"},"I do"),Be(d.a,{variant:"body2",className:t.cardBody},"I am a fullstack developer. For instance, I can help you in creating:",Be("br",null)),Be("div",{style:{justifySelf:"flex-start",alignSelf:"flex-start"}},Be(d.a,{variant:"caption"},Be("strong",null,"E-commerce")," ",Be("br",null),Be("strong",null,"Business & Corporation Website")," ",Be("br",null),Be("strong",null,"Portfolio & Landscape")," ",Be("br",null),Be("strong",null,"Dashboard Control")," ",Be("br",null),Be("strong",null,"Software with ElectronJS")," ",Be("br",null))))};function We(e){Object(n.a)(e);var t=Ce();return Be("div",{className:t.root},Be(d.a,{variant:"h2",className:t.title},"What can I do for you?"),Be("div",{className:t.rootCard},Be(Re,null),Be(De,null),Be(Me,null)))}var _e=i.a.createElement,Fe=function(e){Object(n.a)(e);var t=Ce();return _e("div",{className:t.card},_e(d.a,{variant:"h6"},"Search"),_e(d.a,{variant:"body2",className:t.cardBody},"I will speak a lot with you about your needs. Then, creating a guideline for the project. I will start to search what is up on the market and how the concurrence works."))},He=function(e){Object(n.a)(e);var t=Ce();return _e("div",{className:t.card},_e(d.a,{variant:"h6"},"Design"),_e(d.a,{variant:"body2",className:t.cardBody},"After searching. I will start to develop the project. From the code until the UI & UX (if you don't have one to use). Always making reports and seeking your feedback!"))},ze=function(e){Object(n.a)(e);var t=Ce();return _e("div",{className:t.card},_e(d.a,{variant:"h6"},"Test"),_e(d.a,{variant:"body2",className:t.cardBody},"Before the product goes to the public, it needs to be tested! Here I will make every possible test to ensure that the project stands quality."))};function Ue(e){Object(n.a)(e);var t=Ce();return _e("div",{className:t.root},_e(d.a,{variant:"h2",className:t.title},"How I work"),_e("div",{className:t.rootCard},_e(Fe,null),_e(He,null),_e(ze,null)))}var qe=i.a.createElement;function Xe(e){Object(n.a)(e);var t=Ee(),a=Object(s.d)("github",[]),r=Object(s.c)({endpoint:"https://api.github.com/users/DaxSoft/repos",onSuccess:function(e){return a.set(e)},startInit:a.get(),onError:function(e){r.data=a.get()}},"GET",ve.a);return qe("div",null,r.loading.isOn()?qe(be.a,{style:{alignSelf:"center",justifySelf:"center"},color:"secondary"}):qe(Q.a,{vertical:!1,horizontal:!0,className:t.root},Array.isArray(r.data)&&r.data.length>0&&r.data.map((function(e,t){if(function(e){var t=e.forks,a=e.description;return!1===t||/(\#docs)/gim.test(a)}(e))return qe(he.a,{key:t,title:e.name,href:e.html_url,description:e.description,stars:e.stargazers_count,fork:e.forks_count})}))))}var Je=i.a.createElement;function Ve(e){Object(n.a)(e);var t=Ne();return Je("div",{className:t.root},Je(Ge,null),Je(ke,null),Je(Le,null),Je(Xe,null),Je(We,null),Je(Ue,null))}var Ye=i.a.createElement,Ze=function(e){return Object(n.a)(e),Ye("div",null,Ye(c.a,null),Ye(Ie,null))},Ke=function(e){return Object(n.a)(e),Ye("div",null,Ye(c.b,null),Ye(Ve,null))};function Qe(e){Object(n.a)(e);var t=Object(s.f)({},[.95,1.5]),a=Object(s.b)().inClient;return Ye("div",null,Ye(l.a,null,Ye("title",null,"Michael Willian | Portf\xf3lio"),Ye("meta",{name:"robots",content:"index, follow"})),a&&("landscape"===t.orientation?Ye(Ze,null):Ye(Ke,null)))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,3,4,5,6,7]]]);