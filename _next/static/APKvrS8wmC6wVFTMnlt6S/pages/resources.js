(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{X09Y:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return n("bzLx")}])},bzLx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var i=n("hGi/"),a=n("q1tI"),r=n.n(a),s=n("8Kt/"),o=n.n(s),c=n("uUQD"),l=n("uQod"),u=n("vcXL"),d=n.n(u),f=n("nOHt"),p=n("ofer"),g=n("iae6"),m=n("R/WZ"),h=n("q1BZ"),y=Object(m.a)((function(e){return{root:{padding:e.spacing(h.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",justifySelf:"center",alignSelf:"center",marginTop:"2em"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.BIG),width:"inherit",textAlign:"center"},description:{justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.SMALL),width:"inherit",textAlign:"center",fontSize:"1.5em",color:h.b.NEUTRAL_COLOR.neutralSecondary},container:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 20em)",gridGap:"1em",justifyContent:"flex-start",justifyItems:"flex-start",alignItems:"flex-start",width:"99vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.BIG)}}})),b=n("TL9f"),S=r.a.createElement;function j(e){Object(i.a)(e);var t=y(),n=Object(c.d)("resources",[]),a=Object(c.c)({endpoint:"https://api.github.com/users/DaxSoft/repos",onSuccess:function(e){n.set(e)},onError:function(e){issues.data=n.get()},startInit:n.get()},"GET",d.a);Object(f.useRouter)();return S("div",{className:t.root},S(p.a,{variant:"h3",className:t.title},"Repositories"),S(p.a,{variant:"body1",className:t.description},"This pages makes a request from Github's API. ",S("br",null),"Where it gets the repositories from my account and display here."," ",S("br",null),"It checks if exists a documentation available from the description of the repo. ",S("br",null),"The description needs to have '#docs'."),S(p.a,{variant:"button"},"Click upon the repository to go to the documentation!"),S("div",{className:t.container},a.loading.isOn()?S(g.a,{color:"secondary",style:{justifySelf:"center",alignSelf:"center"}}):Array.isArray(a.data)&&a.data.length>0&&a.data.map((function(e,t){if(function(e){var t=e.description;return/(\#doc(s)?\s?)/gim.test(t)}(e))return S(b.a,{key:t,title:e.name,href:"/resources/project?id=".concat(e.name),description:e.description,stars:e.stargazers_count,fork:e.forks_count,data:e})}))))}var v=Object(m.a)((function(e){return{root:{padding:e.spacing(h.a.SPACING.BIG),display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"100vw",justifySelf:"center",alignSelf:"center",marginTop:"2em"},title:{justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.BIG),width:"inherit",textAlign:"center"},description:{justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.SMALL),width:"inherit",textAlign:"center",fontSize:"1.5em",color:h.b.NEUTRAL_COLOR.neutralSecondary},container:{display:"grid",gridTemplateRows:"max-content",gridGap:"1em",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center",width:"99vw",justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.BIG)},label:{justifySelf:"center",alignSelf:"center",padding:e.spacing(h.a.SPACING.BIG),width:"inherit",textAlign:"center"}}})),I=r.a.createElement;function w(e){Object(i.a)(e);var t=v(),n=Object(c.d)("resources",[]),a=Object(c.c)({endpoint:"https://api.github.com/users/DaxSoft/repos",onSuccess:function(e){n.set(e)},onError:function(e){issues.data=n.get()},startInit:n.get()},"GET",d.a);Object(f.useRouter)();return I("div",{className:t.root},I(p.a,{variant:"h3",className:t.title},"Repositories"),I(p.a,{variant:"body1",className:t.description},"This pages makes a request from Github's API. ",I("br",null),"Where it gets the repositories from my account and display here."," ",I("br",null),"It checks if exists a documentation available from the description of the repo. ",I("br",null),"The description needs to have '#docs'."),I(p.a,{variant:"button",className:t.label},"Click upon the repository to go to the documentation!"),I("div",{className:t.container},a.loading.isOn()?I(g.a,{color:"secondary",style:{justifySelf:"center",alignSelf:"center"}}):Array.isArray(a.data)&&a.data.length>0&&a.data.map((function(e,t){if(function(e){var t=e.description;return/(\#doc(s)?\s?)/gim.test(t)}(e))return I(b.a,{key:t,title:e.name,href:"/resources/project?id=".concat(e.name),description:e.description,stars:e.stargazers_count,fork:e.forks_count,data:e})}))))}var G=r.a.createElement,A=function(e){return Object(i.a)(e),G("div",null,G(l.a,null),G(j,null))},N=function(e){return Object(i.a)(e),G("div",null,G(l.b,null),G(w,null))};function O(e){Object(i.a)(e);var t=Object(c.f)({},[.95,1.5]),n=Object(c.b)().inClient;return G("div",null,G(o.a,null,G("title",null,"Michael Willian | Resources"),G("meta",{name:"robots",content:"index, follow"})),n&&("landscape"===t.orientation?G(A,null):G(N,null)))}}},[["X09Y",0,2,1,3,4,5,7]]]);