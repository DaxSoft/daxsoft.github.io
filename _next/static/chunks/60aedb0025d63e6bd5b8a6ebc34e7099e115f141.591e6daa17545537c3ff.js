(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"469l":function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a.n(i),s=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("HR5l");var d=function(t,e){var a=o.a.memo(o.a.forwardRef((function(e,a){return o.a.createElement(c.a,Object(r.a)({ref:a},e),t)})));return a.muiName=c.a.muiName,a}(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var m=i.forwardRef((function(t,e){var a=t.alt,o=t.children,l=t.classes,c=t.className,m=t.component,f=void 0===m?"div":m,u=t.imgProps,g=t.sizes,p=t.src,h=t.srcSet,v=t.variant,b=void 0===v?"circle":v,y=Object(n.a)(t,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(t){var e=t.src,a=t.srcSet,r=i.useState(!1),n=r[0],o=r[1];return i.useEffect((function(){if(e||a){o(!1);var t=!0,r=new Image;return r.src=e,r.srcSet=a,r.onload=function(){t&&o("loaded")},r.onerror=function(){t&&o("error")},function(){t=!1}}}),[e,a]),n}({src:p,srcSet:h}),w=p||h,j=w&&"error"!==x;return O=j?i.createElement("img",Object(r.a)({alt:a,src:p,srcSet:h,sizes:g,className:l.img},u)):null!=o?o:w&&a?a[0]:i.createElement(d,{className:l.fallback}),i.createElement(f,Object(r.a)({className:Object(s.a)(l.root,l.system,l[b],c,!j&&l.colorDefault),ref:e},y),O)}));e.a=Object(l.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:t.palette.background.default,backgroundColor:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[600]},circle:{},rounded:{borderRadius:t.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},IFCi:function(t,e,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=(a("17x9"),a("iuhU")),s=a("H2TA"),l=a("NqtD"),c=i.forwardRef((function(t,e){var a=t.anchorOrigin,s=void 0===a?{vertical:"top",horizontal:"right"}:a,c=t.badgeContent,d=t.children,m=t.classes,f=t.className,u=t.color,g=void 0===u?"default":u,p=t.component,h=void 0===p?"span":p,v=t.invisible,b=t.max,y=void 0===b?99:b,O=t.overlap,x=void 0===O?"rectangle":O,w=t.showZero,j=void 0!==w&&w,R=t.variant,S=void 0===R?"standard":R,C=Object(n.a)(t,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),N=v;null==v&&(0===c&&!j||null==c&&"dot"!==S)&&(N=!0);var I="";return"dot"!==S&&(I=c>y?"".concat(y,"+"):c),i.createElement(h,Object(r.a)({className:Object(o.a)(m.root,f),ref:e},C),d,i.createElement("span",{className:Object(o.a)(m.badge,m["".concat(s.horizontal).concat(Object(l.a)(s.vertical),"}")],m["anchorOrigin".concat(Object(l.a)(s.vertical)).concat(Object(l.a)(s.horizontal)).concat(Object(l.a)(x))],"default"!==g&&m["color".concat(Object(l.a)(g))],N&&m.invisible,"dot"===S&&m.dot)},I))}));e.a=Object(s.a)((function(t){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorError:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},TL9f:function(t,e,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("IFCi"),o=a("469l"),s=a("Z3vd"),l=a("ofer"),c=a("csfp"),d=a("R/WZ"),m=a("q1BZ"),f=Object(d.a)((function(t){return{root:{display:"grid",padding:t.spacing(m.a.SPACING.SMALL),borderRadius:"1em",gridTemplateColumns:"13em 5em",justifyContent:"space-between",justifyItems:"flex-start",alignItems:"center",boxShadow:m.b.BOX_SHADOW.light(),transition:"all .3s ease-in","&:hover":{boxShadow:m.b.BOX_SHADOW.float()}},button:{justifySelf:"center",alignSelf:"center",width:"max-content",height:"max-content"},badge:{width:"24px",height:"24px"},description:{width:"13em",textAlign:"left",color:m.b.NEUTRAL_COLOR.neutralSecondary,fontSize:".8rem",textTransform:"none"},col:{display:"grid",gridTemplateColumns:"16px 3em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"center",gridGap:".5rem"},icon:{width:"12px",height:"12px"},row:{display:"grid",gridTemplateRows:"max-content",gridGap:".5rem",justifyContent:"space-evenly",justifyItems:"flex-start",alignItems:"flex-start"}}})),u=a("uiHc"),g=a.n(u),p=a("m2JE"),h=a.n(p),v=n.a.createElement;e.a=function(t){var e=t.title,a=t.href,r=t.stars,n=t.fork,d=t.description,m=t.onClick,u=t.data,p=f(),b="function"===typeof m;return v(i.a,{badgeContent:v(o.a,{src:"/github.png",className:p.badge}),overlap:"circle"},v(s.a,{className:p.button,href:b?"/todo":a,onClick:function(){return b?m(u):{}}},v("div",{className:p.root},v("div",{className:p.row},v(l.a,{variant:"button",noWrap:!0},e),v(c.a,{arrow:!0,title:d},v(l.a,{className:p.description,variant:"subtitle1",noWrap:!0},d))),v("div",{className:p.row},v("div",{className:p.col},v(g.a,{className:p.icon}),v(l.a,{variant:"caption",style:{fontSize:".8rem"}},r)),v("div",{className:p.col},v(h.a,{className:p.icon}),v(l.a,{variant:"caption",style:{fontSize:".8rem"}},n))))))}},m2JE:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("q1tI")),i=(0,r(a("8/g6")).default)(n.default.createElement("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}),"Repeat");e.default=i},uiHc:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("q1tI")),i=(0,r(a("8/g6")).default)(n.default.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Grade");e.default=i}}]);