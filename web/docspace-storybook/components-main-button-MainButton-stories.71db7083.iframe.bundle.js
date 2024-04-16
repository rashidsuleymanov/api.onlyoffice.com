"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[1410],{"./components/main-button/MainButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MainButton_stories});var catalog_folder_reacturl=__webpack_require__("../../public/images/catalog.folder.react.svg?url"),react=__webpack_require__("../../node_modules/react/index.js"),react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js");const triangle_navigation_down_reacturl_namespaceObject=__webpack_require__.p+"images/triangle.navigation.down.react.svg?hash=45902b4d6fe83d9dac4b";var components_text=__webpack_require__("./components/text/index.tsx"),context_menu=__webpack_require__("./components/context-menu/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts");const hoveredCss=styled_components_browser_esm.AH`
  background-color: ${props=>props.theme.mainButton.hoverBackgroundColor};
  cursor: pointer;
`,clickCss=styled_components_browser_esm.AH`
  background-color: ${props=>props.theme.mainButton.clickBackgroundColor};
  cursor: pointer;
`,notDisableStyles=styled_components_browser_esm.AH`
  &:hover {
    ${hoveredCss}
  }

  &:active {
    ${clickCss}
  }
`,notDropdown=styled_components_browser_esm.AH`
  &:after {
    display: none;
  }
`,GroupMainButton=styled_components_browser_esm.Ay.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
`,StyledMainButton=styled_components_browser_esm.Ay.div`
  ${utils.h0}

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  box-sizing: border-box;

  background-color: ${props=>props.isDisabled?`${props.theme.mainButton.disableBackgroundColor}`:`${props.theme.mainButton.backgroundColor}`};

  padding: ${props=>props.theme.mainButton.padding};
  border-radius: ${props=>props.theme.mainButton.borderRadius};
  -moz-border-radius: ${props=>props.theme.mainButton.borderRadius};
  -webkit-border-radius: ${props=>props.theme.mainButton.borderRadius};
  line-height: ${props=>props.theme.mainButton.lineHeight};
  border-radius: 3px;

  ${props=>!props.isDisabled&&notDisableStyles}

  ${props=>!props.isDropdown&&notDropdown}

  & > svg {
    display: block;
    margin: ${props=>props.theme.mainButton.svg.margin};
    height: ${props=>props.theme.mainButton.svg.height};
  }

  .main-button_text {
    display: inline;
    font-size: ${props=>props.theme.getCorrectFontSize(props.theme.mainButton.fontSize)};
    font-weight: ${props=>props.theme.mainButton.fontWeight};
    color: ${props=>props.isDisabled?props.theme.mainButton.textColorDisabled:props.theme.mainButton.textColor};
  }

  .main-button_img {
    svg {
      padding-bottom: 1px;
      path {
        fill: #fff;
      }
    }
  }
`;StyledMainButton.defaultProps={theme:themes.C6};const disableStyles=styled_components_browser_esm.AH`
  opacity: 0.6;

  &:hover {
    opacity: 0.6;
    cursor: default;
  }

  &:active {
    opacity: 0.6;
    cursor: default;
    filter: none;
  }
`,StyledThemeMainButton=(0,styled_components_browser_esm.Ay)(StyledMainButton)((({$currentColorScheme,isDisabled,theme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    background-color: ${$currentColorScheme.main?.accent};

    &:hover {
      background-color: ${$currentColorScheme.main?.accent};
      opacity: 0.85;
      cursor: pointer;
    }

    &:active {
      background-color: ${$currentColorScheme.main?.accent};
      opacity: 1;
      filter: ${theme.isBase?"brightness(90%)":"brightness(82%)"};
      cursor: pointer;
    }

    .main-button_text {
      color: ${$currentColorScheme.text?.accent};
    }

    .main-button_img svg path {
      fill: ${$currentColorScheme.text?.accent};
    }

    ${isDisabled&&`\n    ${disableStyles}\n    `}
  `));var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const MainButtonTheme=(0,react.forwardRef)(((props,ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsx)(StyledThemeMainButton,{...props,ref,$currentColorScheme:currentColorScheme})}));MainButtonTheme.displayName="MainButtonTheme";const MainButton_theme=MainButtonTheme;try{MainButtonTheme.displayName="MainButtonTheme",MainButtonTheme.__docgenInfo={description:"",displayName:"MainButtonTheme",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},text:{defaultValue:null,description:"Button text",name:"text",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isDropdown:{defaultValue:null,description:"Activates a drop-down list for MainButton",name:"isDropdown",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onAction",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},opened:{defaultValue:null,description:"Opens DropDown",name:"opened",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},model:{defaultValue:null,description:"Data model menu",name:"model",required:!0,type:{name:"ContextMenuModel[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button/MainButton.theme.tsx#MainButtonTheme"]={docgenInfo:MainButtonTheme.__docgenInfo,name:"MainButtonTheme",path:"components/main-button/MainButton.theme.tsx#MainButtonTheme"})}catch(__react_docgen_typescript_loader_error){}try{MainButtonTheme.displayName="MainButtonTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"MainButtonTheme",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},text:{defaultValue:null,description:"Button text",name:"text",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isDropdown:{defaultValue:null,description:"Activates a drop-down list for MainButton",name:"isDropdown",required:!1,type:{name:"boolean | undefined"}},onAction:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onAction",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},opened:{defaultValue:null,description:"Opens DropDown",name:"opened",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},model:{defaultValue:null,description:"Data model menu",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button/MainButton.theme.tsx#MainButtonTheme"]={docgenInfo:MainButtonTheme.__docgenInfo,name:"MainButtonTheme",path:"components/main-button/MainButton.theme.tsx#MainButtonTheme"})}catch(__react_docgen_typescript_loader_error){}const MainButton=props=>{const{text,model,isDropdown,isDisabled,onAction,opened}=props,{id,...rest}=props,ref=(0,react.useRef)(null),menuRef=(0,react.useRef)(null),[isOpen,setIsOpen]=(0,react.useState)(opened||!1);return(0,jsx_runtime.jsx)(GroupMainButton,{...rest,ref,"data-testid":"main-button",children:(0,jsx_runtime.jsxs)(MainButton_theme,{...rest,id,onClick:e=>{isDisabled?(e=>{e.preventDefault()})(e):isDropdown?((e,isOpenProp)=>{if(!menuRef.current)return;const menu=menuRef.current;isOpenProp?menu.show(e):menu.hide(e),setIsOpen(isOpenProp)})(e,!isOpen):onAction?.(e)},children:[(0,jsx_runtime.jsx)(components_text.E,{className:"main-button_text",children:text}),isDropdown&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(react_svg_esm.k,{className:"main-button_img",src:triangle_navigation_down_reacturl_namespaceObject}),(0,jsx_runtime.jsx)(context_menu.t,{model,containerRef:ref,ref:menuRef})]})]})})};MainButton.displayName="MainButton",MainButton.defaultProps={text:"Button",isDisabled:!1,isDropdown:!0};try{MainButton.displayName="MainButton",MainButton.__docgenInfo={description:"",displayName:"MainButton",props:{text:{defaultValue:{value:"Button"},description:"Button text",name:"text",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isDropdown:{defaultValue:{value:"true"},description:"Activates a drop-down list for MainButton",name:"isDropdown",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onAction",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},opened:{defaultValue:null,description:"Opens DropDown",name:"opened",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},model:{defaultValue:null,description:"Data model menu",name:"model",required:!0,type:{name:"ContextMenuModel[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button/MainButton.tsx#MainButton"]={docgenInfo:MainButton.__docgenInfo,name:"MainButton",path:"components/main-button/MainButton.tsx#MainButton"})}catch(__react_docgen_typescript_loader_error){}try{MainButton.displayName="MainButton",__function.__docgenInfo={description:"",displayName:"MainButton",props:{text:{defaultValue:{value:"Button"},description:"Button text",name:"text",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:{value:!1},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isDropdown:{defaultValue:{value:!0},description:"Activates a drop-down list for MainButton",name:"isDropdown",required:!1,type:{name:"boolean | undefined"}},onAction:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onAction",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},opened:{defaultValue:null,description:"Opens DropDown",name:"opened",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},model:{defaultValue:null,description:"Data model menu",name:"model",required:!0,type:{name:"ContextMenuModel[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button/MainButton.tsx#MainButton"]={docgenInfo:MainButton.__docgenInfo,name:"MainButton",path:"components/main-button/MainButton.tsx#MainButton"})}catch(__react_docgen_typescript_loader_error){}const MainButton_stories={title:"Components/MainButton",component:MainButton,parameters:{docs:{description:{component:"Components/MainButton"}}}},Default={args:{isDisabled:!1,isDropdown:!0,text:"Actions",model:[{key:0,label:"New document",icon:catalog_folder_reacturl},{key:1,label:"New spreadsheet",icon:catalog_folder_reacturl},{key:2,label:"New presentation",icon:catalog_folder_reacturl},{key:3,label:"Master form",icon:catalog_folder_reacturl,items:[{key:4,label:"From blank"},{key:5,label:"From an existing text file"}]},{key:6,label:"New folder",icon:catalog_folder_reacturl},{key:7,isSeparator:!0},{key:8,label:"Upload",icon:catalog_folder_reacturl}],style:{maxWidth:"210px"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    isDisabled: false,\n    isDropdown: true,\n    text: "Actions",\n    model: itemsModel,\n    style: {\n      maxWidth: "210px"\n    }\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/text/Text.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,s:()=>StyledAutoDirSpan});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./themes/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./utils/index.ts");const styleCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  font-size: ${props=>props.fontSizeProp&&props.theme.getCorrectFontSize(props.fontSizeProp)};
  outline: 0 !important;
  margin: 0;
  font-weight: ${props=>props.fontWeightProp?props.fontWeightProp:props.isBold?700:props.theme.text.fontWeight};

  ${props=>props.isItalic&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      font-style: italic;
    `}
  ${props=>props.backgroundColor&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      background-color: ${props.backgroundColor};
    `}
  ${props=>props.isInline?styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
          display: inline-block;
        `:props.display&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
          display: ${props.display};
        `}
  ${props=>props.lineHeight&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      line-height: ${props.lineHeight};
    `}
`,StyledText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.p`
  ${styleCss};

  ${_utils__WEBPACK_IMPORTED_MODULE_1__.Pj};

  ${props=>props.noSelect&&_utils__WEBPACK_IMPORTED_MODULE_1__.h0}
`;StyledText.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_0__.C6};const StyledAutoDirSpan=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span`
  display: inherit;
  white-space: inherit;
  overflow: inherit;
  text-overflow: inherit;
  pointer-events: none;
`,__WEBPACK_DEFAULT_EXPORT__=StyledText},"./components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,c:()=>TextPure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Text_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/Text.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextPure=({title,tag,as,fontSize="13px",fontWeight,color,textAlign="left",onClick,dir,children,...rest})=>{const isAutoDir="auto"===dir,dirProp=isAutoDir?{}:{dir};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.A,{fontSizeProp:fontSize,fontWeightProp:fontWeight,colorProp:color,textAlign,as:!as&&tag?tag:as,title,"data-testid":"text",onClick,...dirProp,...rest,children:isAutoDir?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.s,{dir:"auto",children}):children})};TextPure.displayName="TextPure";const Text=react__WEBPACK_IMPORTED_MODULE_0__.memo(TextPure);Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",__function.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string | undefined"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean | undefined"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/text/Text.tsx")},"../../public/images/catalog.folder.react.svg?url":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"images/catalog.folder.react.svg?hash=9e5b6bc4f156ba25986a"}}]);
//# sourceMappingURL=components-main-button-MainButton-stories.71db7083.iframe.bundle.js.map