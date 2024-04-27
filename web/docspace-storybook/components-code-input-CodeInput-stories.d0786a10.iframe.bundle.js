"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[822],{"./components/code-input/CodeInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CodeInput_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts"),utils=__webpack_require__("./utils/index.ts");const InputWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
  input {
    height: 120px;
    width: 100px;
    display: block;
    background: ${props=>props.theme.codeInput.background};
    border: ${props=>props.theme.codeInput.border};
    color: ${props=>props.theme.codeInput.color};
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 4px;
    text-align: center;
    font-size: 72px;

    @media ${utils.n5} {
      height: 76px;
      width: 64px;
      font-size: 48px;
    }

    @media ${utils.Hw} {
      height: 48px;
      width: 40px;
      font-size: 32px;
    }

    &:last-child {
      margin: 0;
    }
  }

  input:focus {
    border: 1px solid #5299e0;
    outline: none;
  }

  input:disabled {
    color: ${props=>props.theme.codeInput.disabledColor};
    background: ${props=>props.theme.codeInput.disabledBackground};
    border: ${props=>props.theme.codeInput.disabledBorder};
    outline: none;
  }

  hr {
    width: 24px;
    height: 1px;
    background: ${props=>props.theme.codeInput.lineColor};
    border: none;
    margin: 0 16px;

    @media ${utils.Hw} {
      margin: 0 4px;
    }
  }
  :placeholder-shown {
    direction: ltr;
  }
`;InputWrapper.defaultProps={theme:themes.C6};const CodeInput_styled=InputWrapper;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CodeInput=props=>{const{onSubmit,onChange,isDisabled,...rest}=props,inputsRef=(0,react.useRef)([]);(0,react.useEffect)((()=>{inputsRef.current&&inputsRef.current[0].focus()}),[]);const onEnter=()=>{if(inputsRef.current){const code=inputsRef.current.map((input=>input.value)).join("");6===code.length&&onSubmit?.(code)}},handleOnChange=e=>{e.target.value.match("^[A-Za-z0-9]*$")?(onChange?.(),null!==e.target.nextElementSibling&&("HR"===e.target.nextElementSibling.nodeName&&e.target.nextElementSibling.nextElementSibling.focus(),e.target.nextElementSibling.focus())):e.target.value="",onEnter()},handleOnKeyDown=e=>{const{key}=e,target=e.target;if("Backspace"===key)if(onChange?.(),""===target.value&&null!==target.previousElementSibling){if(null!==target.previousElementSibling){if("HR"===target.previousElementSibling.nodeName){const prev=target.previousElementSibling.previousElementSibling;prev?.focus()}target.previousElementSibling.focus(),e.preventDefault()}}else target.value=""},handleOnFocus=e=>{e.target.select()},handleOnPaste=e=>{const value=e.clipboardData.getData("Text");if(value.match("^[A-Za-z0-9]*$"))for(let i=0;i<6&&i<value.length;i+=1)inputsRef.current&&(inputsRef.current[i].value=value.charAt(i),null!==inputsRef.current[i].nextElementSibling&&inputsRef.current[i].nextElementSibling.focus());onEnter(),e.preventDefault()},elements=[];for(let i=0;i<6;i+=1)3===i&&elements.push((0,jsx_runtime.jsx)("hr",{},"InputCode-line")),elements.push((0,jsx_runtime.jsx)("input",{onChange:handleOnChange,onKeyDown:handleOnKeyDown,onFocus:handleOnFocus,onPaste:handleOnPaste,ref:el=>{el&&(inputsRef.current[i]=el)},maxLength:1,disabled:isDisabled},`InputCode-${i}`));return(0,jsx_runtime.jsx)(CodeInput_styled,{...rest,"data-testid":"code-input",children:elements})};CodeInput.displayName="CodeInput",CodeInput.defaultProps={isDisabled:!1};try{CodeInput.displayName="CodeInput",CodeInput.__docgenInfo={description:"",displayName:"CodeInput",props:{onSubmit:{defaultValue:null,description:"Sets a callback function that is triggered when the enter is pressed",name:"onSubmit",required:!0,type:{name:"(code: string) => void"}},onChange:{defaultValue:null,description:"Sets a callback function that is triggered on the onChange event",name:"onChange",required:!1,type:{name:"(() => void)"}},isDisabled:{defaultValue:{value:"false"},description:"Sets the code input to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/code-input/CodeInput.tsx#CodeInput"]={docgenInfo:CodeInput.__docgenInfo,name:"CodeInput",path:"components/code-input/CodeInput.tsx#CodeInput"})}catch(__react_docgen_typescript_loader_error){}try{CodeInput.displayName="CodeInput",__function.__docgenInfo={description:"",displayName:"CodeInput",props:{onSubmit:{defaultValue:null,description:"Sets a callback function that is triggered when the enter is pressed",name:"onSubmit",required:!0,type:{name:"(code: string) => void"}},onChange:{defaultValue:null,description:"Sets a callback function that is triggered on the onChange event",name:"onChange",required:!1,type:{name:"(() => void) | undefined"}},isDisabled:{defaultValue:{value:!1},description:"Sets the code input to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/code-input/CodeInput.tsx#CodeInput"]={docgenInfo:CodeInput.__docgenInfo,name:"CodeInput",path:"components/code-input/CodeInput.tsx#CodeInput"})}catch(__react_docgen_typescript_loader_error){}const CodeInput_stories={title:"Components/CodeInput",component:CodeInput,parameters:{docs:{description:{component:"Used to display an code input."}}}},Default={args:{onSubmit:()=>{}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    onSubmit: () => {}\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=components-code-input-CodeInput-stories.d0786a10.iframe.bundle.js.map