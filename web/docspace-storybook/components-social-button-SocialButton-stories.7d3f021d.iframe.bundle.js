"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[1746],{"./components/social-button/SocialButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SocialButton_stories});var share_google_reacturl=__webpack_require__("../../public/images/share.google.react.svg?url"),share_linkedin_reacturl=__webpack_require__("../../public/images/share.linkedin.react.svg?url"),react=__webpack_require__("../../node_modules/react/index.js"),fast_deep_equal_react=__webpack_require__("../../node_modules/fast-deep-equal/react.js"),fast_deep_equal_react_default=__webpack_require__.n(fast_deep_equal_react),react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js"),components_text=__webpack_require__("./components/text/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ButtonWrapper=({isDisabled,noHover,isConnect,...props})=>(0,jsx_runtime.jsx)("button",{type:"button",...props});ButtonWrapper.displayName="ButtonWrapper";const StyledSocialButton=(0,styled_components_browser_esm.Ay)(ButtonWrapper).attrs((props=>({disabled:props.isDisabled?"disabled":"",tabIndex:props.tabIndex,isConnect:props.isConnect})))`
  font-family: ${props=>props.theme.fontFamily};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: ${props=>props.theme.socialButton.fontWeight};
  text-decoration: ${props=>props.theme.socialButton.textDecoration};
  padding: ${props=>props.theme.socialButton.padding};

  width: ${props=>props.theme.socialButton.width};
  height: ${props=>"base"===props.size?props.theme.socialButton.height:props.theme.socialButton.heightSmall};
  text-align: ${props=>props.theme.socialButton.textAlign};
  border: ${props=>props.isConnect?props.theme.socialButton.borderConnect:props.theme.socialButton.border};
  border-radius: ${props=>props.theme.socialButton.borderRadius};

  touch-callout: none;
  -o-touch-callout: none;
  -moz-touch-callout: none;
  -webkit-touch-callout: none;

  stroke: ${props=>props.theme.socialButton.stroke};

  &:focus {
    outline: ${props=>props.theme.socialButton.outline};
  }

  ${props=>props.$iconOptions&&props.$iconOptions.color&&styled_components_browser_esm.AH`
      svg path {
        fill: ${props.$iconOptions.color};
      }
    `}

  ${props=>props.isDisabled?styled_components_browser_esm.AH`
     
          background: ${({theme})=>theme.socialButton.disableBackgroundColor};
          color: ${({theme})=>theme.socialButton.disableColor};

          ${props.theme.isBase&&styled_components_browser_esm.AH`
              svg path {
                opacity: 60%;
              }
            `}
          ${!props.theme.isBase&&styled_components_browser_esm.AH`
              svg path {
                fill: ${props.theme.socialButton.disabledSvgColor};
              }
            `}}
        `:styled_components_browser_esm.AH`
          background: ${({theme})=>props.isConnect?theme.socialButton.connectBackground:theme.socialButton.background};

          ${()=>!props.noHover&&styled_components_browser_esm.AH`
              :hover,
              :active {
                cursor: pointer;

                .social_button_text {
                  color: ${({theme})=>!props.isConnect&&theme.socialButton.text.hoverColor};
                }
              }

              :hover {
                background: ${({theme})=>props.isConnect?theme.socialButton.hoverConnectBackground:theme.socialButton.hoverBackground};

                border: ${props.isConnect?props.theme.socialButton.hoverConnectBorder:props.theme.socialButton.hoverBorder};
              }

              :active {
                background: ${({theme})=>props.isConnect?theme.socialButton.activeConnectBackground:theme.socialButton.activeBackground};
                border: ${props.isConnect?props.theme.socialButton.activeConnectBorder:props.theme.socialButton.activeBorder};
              }
            `}
        `};

  .iconWrapper > div {
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .social_button_text {
    position: relative;
    pointer-events: none;
    color: ${props=>props.isConnect?props.theme.socialButton.text.connectColor:props.theme.socialButton.text.color};
    width: ${props=>props.theme.socialButton.text.width};
    height: ${props=>props.theme.socialButton.text.height};
    font-family: Roboto, ${props=>props.theme.fontFamily};
    font-style: normal;
    font-weight: ${props=>props.theme.socialButton.text.fontWeight};
    font-size: ${props=>props.theme.socialButton.text.fontSize};
    line-height: ${props=>props.theme.socialButton.text.lineHeight};
    letter-spacing: ${props=>props.theme.socialButton.text.letterSpacing};
    user-select: none;
    overflow: ${props=>props.theme.socialButton.text.overflow};
    text-overflow: ${props=>props.theme.socialButton.text.textOverflow};
    white-space: ${props=>props.theme.socialButton.text.whiteSpace};

    ${props=>"rtl"===props.theme.interfaceDirection?styled_components_browser_esm.AH`
            padding-left: 16px;
          `:styled_components_browser_esm.AH`
            padding-right: 16px;
          `}
  }

  svg {
    // margin: ${props=>props.theme.socialButton.svg.margin};
    width: ${props=>props.theme.socialButton.svg.width};
    height: ${props=>props.theme.socialButton.svg.height};
    min-width: ${props=>props.theme.socialButton.svg.minWidth};
    min-height: ${props=>props.theme.socialButton.svg.minHeight};

    path {
      fill: ${props=>props.isConnect&&props.theme.socialButton.svg.fill};
      fill: ${props=>!props.theme.isBase&&!props.isConnect&&"#FFFFFF"};
    }
  }

  .social-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    gap: 16px;
  }
`;StyledSocialButton.defaultProps={theme:themes.C6};const SocialButton_styled=StyledSocialButton;try{SocialButtonstyled.displayName="SocialButtonstyled",SocialButtonstyled.__docgenInfo={description:"",displayName:"SocialButtonstyled",props:{isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"Accepts tabindex prop",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Sets the image size. Contains the small and the basic size options",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'}]}},noHover:{defaultValue:null,description:"",name:"noHover",required:!0,type:{name:"boolean"}},isConnect:{defaultValue:null,description:"Changes the button style if the user is connected to the social network account",name:"isConnect",required:!1,type:{name:"boolean"}},$iconOptions:{defaultValue:null,description:"Accepts the icon options",name:"$iconOptions",required:!1,type:{name:"IconOptions"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/social-button/SocialButton.styled.tsx#SocialButtonstyled"]={docgenInfo:SocialButtonstyled.__docgenInfo,name:"SocialButtonstyled",path:"components/social-button/SocialButton.styled.tsx#SocialButtonstyled"})}catch(__react_docgen_typescript_loader_error){}try{SocialButtonstyled.displayName="SocialButtonstyled",StyledComponent.__docgenInfo={description:"",displayName:"SocialButtonstyled",props:{isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},tabIndex:{defaultValue:null,description:"Accepts tabindex prop",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Sets the image size. Contains the small and the basic size options",name:"size",required:!0,type:{name:"SocialButtonSize"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!0,type:{name:"boolean"}},isConnect:{defaultValue:null,description:"Changes the button style if the user is connected to the social network account",name:"isConnect",required:!1,type:{name:"boolean | undefined"}},$iconOptions:{defaultValue:null,description:"Accepts the icon options",name:"$iconOptions",required:!1,type:{name:"IconOptions | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/social-button/SocialButton.styled.tsx#SocialButtonstyled"]={docgenInfo:SocialButtonstyled.__docgenInfo,name:"SocialButtonstyled",path:"components/social-button/SocialButton.styled.tsx#SocialButtonstyled"})}catch(__react_docgen_typescript_loader_error){}const SocialButton=(0,react.memo)((props=>{const{label="",size="base",IconComponent,tabIndex=-1,iconName="SocialButtonGoogleIcon",isConnect=!1,isDisabled=!1,noHover=!1,...otherProps}=props;return(0,jsx_runtime.jsx)(SocialButton_styled,{"data-testid":"social-button",size,noHover,tabIndex,isConnect,isDisabled,...otherProps,children:(0,jsx_runtime.jsxs)("div",{"data-url":props["data-url"],"data-providername":props["data-providername"],className:"social-button-container",children:[IconComponent?(0,jsx_runtime.jsx)(IconComponent,{className:"iconWrapper"}):(0,jsx_runtime.jsx)(react_svg_esm.k,{className:"iconWrapper",src:iconName}),label&&(0,jsx_runtime.jsx)(components_text.E,{as:"div",className:"social_button_text",children:label})]})})}),fast_deep_equal_react_default());SocialButton.displayName="SocialButton";try{SocialButton.displayName="SocialButton",SocialButton.__docgenInfo={description:"",displayName:"SocialButton",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Button icon",name:"iconName",required:!1,type:{name:"string"}},IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"Accepts tabindex prop",name:"tabIndex",required:!1,type:{name:"number"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},isConnect:{defaultValue:null,description:"Changes the button style if the user is connected to the social network account",name:"isConnect",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Sets the image size. Contains the small and the basic size options",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'}]}},$iconOptions:{defaultValue:null,description:"Accepts the icon options",name:"$iconOptions",required:!1,type:{name:"IconOptions"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/social-button/SocialButton.tsx#SocialButton"]={docgenInfo:SocialButton.__docgenInfo,name:"SocialButton",path:"components/social-button/SocialButton.tsx#SocialButton"})}catch(__react_docgen_typescript_loader_error){}try{SocialButton.displayName="SocialButton",SocialButton.__docgenInfo={description:"",displayName:"SocialButton",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!1,type:{name:"string | undefined"}},iconName:{defaultValue:null,description:"Button icon",name:"iconName",required:!1,type:{name:"string | undefined"}},IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Accepts tabindex prop",name:"tabIndex",required:!1,type:{name:"number | undefined"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean | undefined"}},isConnect:{defaultValue:null,description:"Changes the button style if the user is connected to the social network account",name:"isConnect",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Sets the image size. Contains the small and the basic size options",name:"size",required:!1,type:{name:"SocialButtonSize | undefined"}},$iconOptions:{defaultValue:null,description:"Accepts the icon options",name:"$iconOptions",required:!1,type:{name:"IconOptions | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},onClick:{defaultValue:null,description:"Sets a callback function that is triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/social-button/SocialButton.tsx#SocialButton"]={docgenInfo:SocialButton.__docgenInfo,name:"SocialButton",path:"components/social-button/SocialButton.tsx#SocialButton"})}catch(__react_docgen_typescript_loader_error){}const SocialButton_stories={title:"Components/SocialButtons",component:SocialButton,parameters:{docs:{description:{component:"Button is used for sign up with help social networks"}}},argTypes:{onClick:{action:"onClick"},iconName:{control:{type:"select"},options:[share_google_reacturl,share_linkedin_reacturl]}}},Default={args:{label:"Base SocialButton",iconName:share_google_reacturl,isDisabled:!1,style:{maxWidth:"250px"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Base SocialButton",\n    iconName: ShareGoogleReactSvgUrl,\n    isDisabled: false,\n    style: {\n      maxWidth: "250px"\n    }\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/text/Text.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,s:()=>StyledAutoDirSpan});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./themes/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./utils/index.ts");const styleCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  font-size: ${props=>props.fontSizeProp&&props.fontSizeProp};
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
  width: inherit;
  max-width: inherit;
`,__WEBPACK_DEFAULT_EXPORT__=StyledText},"./components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,c:()=>TextPure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Text_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/Text.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextPure=({title,tag,as,fontSize="13px",fontWeight,color,textAlign="left",onClick,dir,children,...rest})=>{const isAutoDir="auto"===dir,dirProp=isAutoDir?{}:{dir};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.A,{fontSizeProp:fontSize,fontWeightProp:fontWeight,colorProp:color,textAlign,as:!as&&tag?tag:as,title,"data-testid":"text",onClick,...dirProp,...rest,children:isAutoDir?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.s,{dir:"auto",children}):children})};TextPure.displayName="TextPure";const Text=react__WEBPACK_IMPORTED_MODULE_0__.memo(TextPure);Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",__function.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string | undefined"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean | undefined"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/text/Text.tsx")},"../../node_modules/fast-deep-equal/react.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);
//# sourceMappingURL=components-social-button-SocialButton-stories.7d3f021d.iframe.bundle.js.map