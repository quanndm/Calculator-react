(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(_,e,t){},13:function(_,e,t){"use strict";t.r(e);var a=t(1),s=t.n(a),r=t(4),c=t.n(r),n=(t(11),t(5)),i=t(0),l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{})})};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},2:function(_,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}));var a={ADD:"ADD",THEME:"THEME",CALC:"CALC",DELETE:"DELETE"},s=[{display:"C",action:a.DELETE,class:"btn__op"},{display:"(",action:a.ADD,class:"btn__op"},{display:"(",action:a.ADD,class:"btn__op"},{display:"/",action:a.ADD,class:"btn__op"},{display:"7",action:a.ADD,class:""},{display:"8",action:a.ADD,class:""},{display:"9",action:a.ADD,class:""},{display:"x",action:a.ADD,class:"btn__op"},{display:"4",action:a.ADD,class:""},{display:"5",action:a.ADD,class:""},{display:"6",action:a.ADD,class:""},{display:"-",action:a.ADD,class:"btn__op"},{display:"1",action:a.ADD,class:""},{display:"2",action:a.ADD,class:""},{display:"3",action:a.ADD,class:""},{display:"+",action:a.ADD,class:"btn__op"},{display:"\u2600\ufe0f",action:a.THEME,class:""},{display:"0",action:a.ADD,class:""},{display:".",action:a.ADD,class:""},{display:"=",action:a.CALC,class:"btn__op"}]},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_learn_laptrinh_web_ReactJS_lab_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),Calculator=function Calculator(){var btnsRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),expRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(D_learn_laptrinh_web_ReactJS_lab_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){Array.from(btnsRef.current.querySelectorAll("button")).forEach((function(_){return _.style.height=_.offsetWidth+"px"}))}),[]);var btnClick=function btnClick(item){var expDiv=expRef.current;switch(item.action){case _assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__.a.THEME:document.body.classList.toggle("dark");break;case _assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__.a.ADD:addAnimSpan(item.display);var operator="x"!==item.display?item.display:"*";setExpression(expression+operator);break;case _assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__.a.DELETE:expDiv.parentNode.querySelectorAll("div:last-child").innerHTML="",expDiv.innerHTML="",setExpression("");break;case _assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__.a.CALC:if(expression.trim().length<=0)return;expDiv.parentNode.querySelector("div:last-child").remove();var cloneNode=expDiv.cloneNode(!0);expDiv.parentNode.appendChild(cloneNode);var transform="translateY(".concat(-(expDiv.offsetHeight+10),"px) scale(.4)");try{var res=eval(expression);setExpression(res.toString()),setTimeout((function(){cloneNode.style.transform=transform,expDiv.innerHTML="",addAnimSpan(Math.floor(1e8*res)/1e8)}),200)}catch(error){alert(error),setTimeout((function(){cloneNode.style.transform=transform,cloneNode.innerHTML="Syntax error"}),200)}}},addAnimSpan=function(_){var e=expRef.current,t=document.createElement("span");t.innerHTML=_,t.style.opacity="0",e.appendChild(t);var a=t.offsetWidth+"px";t.style.width="0",setTimeout((function(){t.style.opacity="1",t.style.width=a}),100)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator__result",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref:expRef,className:"calculator__result__exp"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"calculator__result__exp"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref:btnsRef,className:"calculator__btns",children:_assets_btnConfig__WEBPACK_IMPORTED_MODULE_2__.b.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:_.class,onClick:function(){return btnClick(_)},children:_.display},e)}))})]})};__webpack_exports__.a=Calculator}},[[13,1,2]]]);
//# sourceMappingURL=main.97ff6b9d.chunk.js.map