import{_ as c,o as p,c as m,p as x,a as P,b as s,d as _,r as u,w as b,v as g,t as h,e as v,f,g as y}from"../chunks/vendor-bd802837.js";const $={name:"FooterComponent"},w=o=>(x("data-v-28a1cbd2"),o=o(),P(),o),V=w(()=>s("div",{class:"attribution fs-200"},[_(" Challenge by "),s("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),_(". Coded by "),s("a",{href:"https://github.com/evrendev",target:"_blank"},"Evren Yeniev"),_(". ")],-1)),F=[V];function T(o,e,a,n,r,d){return p(),m("footer",null,F)}const S=c($,[["render",T],["__scopeId","data-v-28a1cbd2"]]),k={name:"HeaderComponent",setup(){let o=u(1);return{theme:o,changeTheme:()=>{let a=document.querySelector("body");a.className="",a.classList.add(`theme${o.value}`)}}}},j={class:"flex justify-content-space-between align-items-flex-end"},E=s("div",null,[s("h1",{class:"fs-700"},"calc")],-1),K={class:"theme-changer flex align-items-flex-end"},I=s("h3",{class:"fs-200"},"THEME",-1),N={class:"option-group"},D=s("div",{class:"labels flex justify-content-space-between"},[s("span",{class:"fs-200"},"1"),s("span",{class:"fs-200"},"2"),s("span",{class:"fs-200"},"3")],-1),R={class:"inputs flex justify-content-space-between"},A=s("label",{for:"theme1",class:"fs-200"},null,-1),B=s("label",{for:"theme2",class:"fs-200"},null,-1),H=s("label",{for:"theme3",class:"fs-200"},null,-1);function M(o,e,a,n,r,d){return p(),m("header",j,[E,s("div",null,[s("div",K,[I,s("div",N,[D,s("div",R,[b(s("input",{type:"radio",name:"theme",id:"theme1",value:"1","onUpdate:modelValue":e[0]||(e[0]=t=>n.theme=t),onChange:e[1]||(e[1]=(...t)=>n.changeTheme&&n.changeTheme(...t))},null,544),[[g,n.theme]]),A,b(s("input",{type:"radio",name:"theme",id:"theme2",value:"2","onUpdate:modelValue":e[2]||(e[2]=t=>n.theme=t),onChange:e[3]||(e[3]=(...t)=>n.changeTheme&&n.changeTheme(...t))},null,544),[[g,n.theme]]),B,b(s("input",{type:"radio",name:"theme",id:"theme3",value:"3","onUpdate:modelValue":e[4]||(e[4]=t=>n.theme=t),onChange:e[5]||(e[5]=(...t)=>n.changeTheme&&n.changeTheme(...t))},null,544),[[g,n.theme]]),H])])])])])}const U=c(k,[["render",M]]),L={name:"DisplayComponent",props:{display:{type:String,value:null}}},q={class:"display fs-900"};function O(o,e,a,n,r,d){return p(),m("section",q,h(a.display),1)}const Y=c(L,[["render",O]]),z={name:"KeypadComponent",emits:["numericValue","processValue"],setup(o,{emit:e}){return{processPressed:r=>{e("processValue",r)},numPressed:r=>{e("numericValue",r)}}}},G={class:"keypad fs-800"},J={class:"flex justify-content-space-between align-items-flex-center"},Q={class:"flex justify-content-space-between align-items-flex-center"},W={class:"flex justify-content-space-between align-items-flex-center"},X={class:"flex justify-content-space-between align-items-flex-center"},Z={class:"flex justify-content-space-between align-items-flex-center"};function ee(o,e,a,n,r,d){return p(),m("section",G,[s("div",J,[s("button",{onClick:e[0]||(e[0]=t=>n.numPressed(7))},"7"),s("button",{onClick:e[1]||(e[1]=t=>n.numPressed(8))},"8"),s("button",{onClick:e[2]||(e[2]=t=>n.numPressed(9))},"9"),s("button",{onClick:e[3]||(e[3]=t=>n.processPressed("del")),class:"fs-600 keys-200 text-200"},"DEL")]),s("div",Q,[s("button",{onClick:e[4]||(e[4]=t=>n.numPressed(4))},"4"),s("button",{onClick:e[5]||(e[5]=t=>n.numPressed(5))},"5"),s("button",{onClick:e[6]||(e[6]=t=>n.numPressed(6))},"6"),s("button",{onClick:e[7]||(e[7]=t=>n.processPressed("+"))},"+")]),s("div",W,[s("button",{onClick:e[8]||(e[8]=t=>n.numPressed(1))},"1"),s("button",{onClick:e[9]||(e[9]=t=>n.numPressed(2))},"2"),s("button",{onClick:e[10]||(e[10]=t=>n.numPressed(3))},"3"),s("button",{onClick:e[11]||(e[11]=t=>n.processPressed("-"))},"-")]),s("div",X,[s("button",{onClick:e[12]||(e[12]=t=>n.numPressed("."))},"."),s("button",{onClick:e[13]||(e[13]=t=>n.numPressed(0))},"0"),s("button",{onClick:e[14]||(e[14]=t=>n.processPressed("/"))},"/"),s("button",{onClick:e[15]||(e[15]=t=>n.processPressed("*"))},"x")]),s("div",Z,[s("button",{onClick:e[16]||(e[16]=t=>n.processPressed("reset")),class:"w-2x fs-600 keys-200 text-200"},"RESET"),s("button",{onClick:e[17]||(e[17]=t=>n.processPressed("=")),class:"w-2x fs-600 keys-400 text-400"},"=")])])}const ne=c(z,[["render",ee]]);const se={name:"App",components:{FooterComponent:S,HeaderComponent:U,DisplayComponent:Y,KeypadComponent:ne},setup(){let o=u("0"),e=u("0"),a=u(null),n=u("0"),r=u(!1);const d={"+":()=>(parseFloat(o.value)*10+parseFloat(e.value)*10)/10,"-":()=>parseFloat(o.value)-parseFloat(e.value),"/":()=>{if(parseFloat(e.value)==0){r.value=!0,o.value=0;return}return parseFloat(o.value)/parseFloat(e.value)},"*":()=>parseFloat(o.value)*parseFloat(e.value),"=":()=>o.value};return{numericKeyPressed:l=>{if(a.value){const i=/\./g.test(e.value);e.value+=i&&l=="."||!i&&parseInt(e.value)==0&&l=="0"?"":l,n.value=e.value}else{const i=/\./g.test(o.value);o.value+=i&&l=="."||!i&&parseInt(o.value)==0&&l=="0"?"":l,n.value=o.value}},processKeyPressed:l=>{(l=="+"||l=="-"||l=="*"||l=="/"||l=="=")&&!a.value?(e.value=0,a.value=l):(l=="+"||l=="-"||l=="*"||l=="/"||l=="=")&&a.value?(o.value=d[a.value](),e.value="0",a.value=l):l=="del"&&a.value&&e.value!="0"?e.value=`${e.value}`.slice(0,-1):l=="del"&&!a.value&&o.value!="0"?o.value=`${o.value}`.slice(0,-1):l=="reset"&&(o.value="0",e.value="0",r.value=!1,a.value=null),n.value=r.value?"ERROR":e.value.toString()!="0"?e.value.toString():o.value.toString()},display:n}}};function te(o,e,a,n,r,d){const t=f("header-component"),C=f("display-component"),l=f("keypad-component"),i=f("footer-component");return p(),m("main",null,[v(t),v(C,{display:n.display},null,8,["display"]),v(l,{onNumericValue:n.numericKeyPressed,onProcessValue:n.processKeyPressed},null,8,["onNumericValue","onProcessValue"]),v(i)])}const oe=c(se,[["render",te]]),le=y(oe);le.mount("#app");