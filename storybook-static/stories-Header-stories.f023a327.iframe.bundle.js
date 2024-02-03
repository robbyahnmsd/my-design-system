"use strict";(self.webpackChunkmy_design_system=self.webpackChunkmy_design_system||[]).push([[758],{"./src/stories/Header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"Example/Header",component:__webpack_require__("./src/stories/Header.tsx").h,tags:["autodocs"],parameters:{layout:"fullscreen"}},LoggedIn={args:{user:{name:"Jane Doe"}}},LoggedOut={};LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",...LoggedIn.parameters?.docs?.source}}},LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}};let __namedExportsOrder=["LoggedIn","LoggedOut"]},"./src/stories/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Header}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");let Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ","\n  &:disabled {\n    ","\n  }\n  &:hover:not(:disabled) {\n    ","\n  }\n  &:active:not(:disabled) {\n    ","\n  }\n"])),{color:"#fff",fontWeight:"700",textAlign:"center",backgroundColor:"#742a2a",borderRadius:"9999px",display:"flex",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2.5rem",paddingRight:"2.5rem",":focus":{outline:0},cursor:"pointer"},{opacity:"0.75",cursor:"not-allowed"},{borderColor:"transparent",boxShadow:"0 0 0 1px rgba(0, 0, 0, 0.05)"},{borderColor:"transparent",boxShadow:"0 0 0 1px rgba(0, 0, 0, 0.05)"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let MyButton=_ref=>{let{label,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{type:"button",...rest,children:label})};try{MyButton.displayName="MyButton",MyButton.__docgenInfo={description:"",displayName:"MyButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyButton/index.tsx#MyButton"]={docgenInfo:MyButton.__docgenInfo,name:"MyButton",path:"src/components/MyButton/index.tsx#MyButton"})}catch(__react_docgen_typescript_loader_error){}let Header=_ref=>{let{user,onLogin,onLogout,onCreateAccount}=_ref;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(MyButton,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MyButton,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(MyButton,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}}}]);