"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[7593],{"./components/button/Button.enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ButtonSize});let ButtonSize=function(ButtonSize){return ButtonSize.extraSmall="extraSmall",ButtonSize.small="small",ButtonSize.normal="normal",ButtonSize.medium="medium",ButtonSize}({})},"./components/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button_Button,M:()=>Button_enums.M});var Button_enums=__webpack_require__("./components/button/Button.enums.ts"),react=__webpack_require__("../../node_modules/react/index.js"),loader=__webpack_require__("./components/loader/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const activeCss=styled_components_browser_esm.AH`
  background-color: ${props=>props.primary?props.theme.button.backgroundColor.primaryActive:props.theme.button.backgroundColor.baseActive};

  color: ${props=>props.primary?props.theme.button.color.primaryActive:props.theme.button.color.baseActive};

  ${props=>props.primary?styled_components_browser_esm.AH`
          border: ${props.theme.button.border.primaryActive};
          box-sizing: ${props.theme.button.boxSizing};
        `:styled_components_browser_esm.AH`
          border: ${props.theme.button.border.baseActive};
          box-sizing: ${props.theme.button.boxSizing};
        `}

  .btnIcon {
    svg {
      path {
        fill: ${props=>props.primary?props.theme.button.color.primaryActive:props.theme.button.color.baseActive};
      }
    }
  }
`,hoverCss=styled_components_browser_esm.AH`
  background-color: ${props=>props.primary?props.theme.button.backgroundColor.primaryHover:props.theme.button.backgroundColor.baseHover};

  color: ${props=>props.primary?props.theme.button.color.primaryHover:props.theme.button.color.baseHover};

  ${props=>props.primary?styled_components_browser_esm.AH`
          border: ${props.theme.button.border.primaryHover};
          box-sizing: ${props.theme.button.boxSizing};
        `:styled_components_browser_esm.AH`
          border: ${props.theme.button.border.baseHover};
          box-sizing: ${props.theme.button.boxSizing};
        `}

  .btnIcon {
    svg {
      path {
        fill: ${props=>props.primary?props.theme.button.color.primaryHover:props.theme.button.color.baseHover};
      }
    }
  }
`,disableCss=styled_components_browser_esm.AH`
  background-color: ${props=>props.primary?props.theme.button.backgroundColor.primaryDisabled:props.theme.button.backgroundColor.baseDisabled};

  color: ${props=>props.primary?props.theme.button.color.primaryDisabled:props.theme.button.color.baseDisabled};

  ${props=>props.primary?styled_components_browser_esm.AH`
          border: ${props.theme.button.border.primaryDisabled};
          box-sizing: ${props.theme.button.boxSizing};
        `:styled_components_browser_esm.AH`
          border: ${props.theme.button.border.baseDisabled};
          box-sizing: ${props.theme.button.boxSizing};
        `}

  .btnIcon {
    svg {
      path {
        fill: ${props=>props.primary?props.theme.button.color.primaryDisabled:props.theme.button.color.baseDisabled};
      }
    }
  }
`,ButtonWrapper=react.forwardRef((({primary,scale,size,isHovered,isClicked,isDisabled,disableHover,isLoading,label,minWidth,...props},ref)=>(0,jsx_runtime.jsx)("button",{ref,type:"button",...props})));ButtonWrapper.displayName="ButtonWrapper";const StyledButton=(0,styled_components_browser_esm.Ay)(ButtonWrapper).attrs((props=>({disabled:props.isDisabled||props.isLoading?"disabled":"",tabIndex:props.tabIndex})))`
  position: relative;
  direction: ${props=>props?.interfaceDirection&&"rtl"};
  height: ${props=>(props=>props.theme.button.height[props.size||Button_enums.M.normal])(props)};
  font-size: ${props=>(props=>props.theme.button.fontSize[props.size||Button_enums.M.normal])(props)};

  color: ${props=>props.primary?props.theme.button.color.primary:props.theme.button.color.base};

  background-color: ${props=>props.primary?props.theme.button.backgroundColor.primary:props.theme.button.backgroundColor.base};

  border: ${props=>props.primary?props.theme.button.border.primary:props.theme.button.border.base};

  ${props=>props.scale&&"width: 100%;"};
  min-width: ${props=>props.minWidth&&props.minWidth};

  padding: ${props=>`${props.theme.button.padding[props.size||Button_enums.M.normal]}`};

  cursor: ${props=>props.isDisabled||props.isLoading?"default !important":"pointer"};

  font-family: ${props=>props.theme.fontFamily};
  margin: ${props=>props.theme.button.margin};
  display: ${props=>props.theme.button.display};
  font-weight: ${props=>props.theme.button.fontWeight};
  text-align: ${props=>props.theme.button.textAlign};
  text-decoration: ${props=>props.theme.button.textDecoration};
  vertical-align: ${props=>props.theme.button.topVerticalAlign};
  border-radius: ${props=>props.theme.button.borderRadius};
  -moz-border-radius: ${props=>props.theme.button.borderRadius};
  -webkit-border-radius: ${props=>props.theme.button.borderRadius};

  ${utils.h0};

  stroke: ${props=>props.theme.button.stroke};
  overflow: ${props=>props.theme.button.overflow};
  text-overflow: ${props=>props.theme.button.textOverflow};
  white-space: ${props=>props.theme.button.whiteSpace};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${props=>!props.isDisabled&&!props.isLoading&&(props.isHovered?hoverCss:!props.disableHover&&styled_components_browser_esm.AH`
          &:hover {
            ${hoverCss}
          }
        `)}

  ${props=>!props.isDisabled&&!props.isLoading&&(props.isClicked?activeCss:styled_components_browser_esm.AH`
          &:active {
            ${activeCss}
          }
        `)}

  ${props=>(props.isDisabled||props.isLoading)&&disableCss}

  &:focus {
    outline: ${props=>props.theme.button.outline};
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    background-color: transparent;
  }

  .button-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    visibility: ${props=>props.isLoading?"hidden":"visible"};
  }

  .icon {
    width: auto;
    display: flex;
    align-items: center;
  }
`;StyledButton.defaultProps={theme:themes.C6};const themeActiveCss=styled_components_browser_esm.AH`
  border-color: ${props=>props.$currentColorScheme?.main?.buttons};

  background: ${props=>props.primary&&props.$currentColorScheme?.main?.buttons};

  opacity: ${props=>!props.isDisabled&&"1"};

  filter: ${props=>props.primary&&(props.theme.isBase?"brightness(90%)":"brightness(82%)")};

  color: ${props=>props.$currentColorScheme?.text?.buttons};
`,themeHoverCss=styled_components_browser_esm.AH`
  border-color: ${props=>props.$currentColorScheme?.main?.buttons};

  background: ${props=>props.primary&&props.$currentColorScheme?.main?.buttons};

  opacity: ${props=>props.primary&&!props.isDisabled&&"0.85"};

  color: ${props=>props.primary&&props.$currentColorScheme?.text?.buttons};
`;StyledButton.defaultProps={theme:themes.C6};const StyledThemeButton=(0,styled_components_browser_esm.Ay)(StyledButton)((({primary,$currentColorScheme,isDisabled,isLoading,isClicked,isHovered,disableHover,title})=>$currentColorScheme&&!title&&styled_components_browser_esm.AH`
    ${primary&&styled_components_browser_esm.AH`
      background: ${$currentColorScheme.main?.buttons};
      opacity: ${isDisabled&&"0.6"};
      border: ${"1px solid"} ${$currentColorScheme.main?.buttons};
      color: ${$currentColorScheme.text?.buttons};

      .loader {
        svg {
          color: ${$currentColorScheme.text?.buttons};
        }
        background-color: ${$currentColorScheme.main?.buttons};
      }
    `}

    ${!isDisabled&&!isLoading&&(isHovered&&primary?themeHoverCss:!disableHover&&primary&&styled_components_browser_esm.AH`
          &:hover,
          &:focus {
            ${themeHoverCss}
          }
        `)}

    ${!isDisabled&&!isLoading&&(isClicked?primary&&themeActiveCss:primary&&styled_components_browser_esm.AH`
          &:active {
            ${themeActiveCss}
          }
        `)}
  `));try{ButtonWrapper.displayName="ButtonWrapper",ButtonWrapper.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement>) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ButtonWrapper.displayName="ButtonWrapper",StyledComponent.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | undefined) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}const ButtonTheme=(0,react.forwardRef)(((props,ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsx)(StyledThemeButton,{...props,ref,$currentColorScheme:currentColorScheme})}));ButtonTheme.displayName="ButtonTheme";const Button_theme=ButtonTheme;try{ButtonTheme.displayName="ButtonTheme",ButtonTheme.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}try{ButtonTheme.displayName="ButtonTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}const Button_Button=react.forwardRef(((props,ref)=>{const{isLoading,icon,label,primary}=props;return(0,jsx_runtime.jsxs)(Button_theme,{...props,ref,"data-testid":"button",children:[isLoading&&(0,jsx_runtime.jsx)(loader.a,{className:"loader",color:"",size:"20px",type:loader.R.track,label,primary:primary||!1}),(0,jsx_runtime.jsxs)("div",{className:"button-content not-selectable",children:[icon&&(0,jsx_runtime.jsx)("div",{className:"icon",children:icon}),label]})]})}));Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button_Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/toggle-content/ToggleContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ToggleContent});var _path,react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const arrow_content_react=function SvgArrowcontentreact(props){return react.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.42 4.32c.53-.45 1.361-.422 1.854.063L8 9.036l4.726-4.653c.493-.485 1.323-.513 1.855-.062a1.13 1.13 0 01.068 1.696l-5.687 5.6A1.372 1.372 0 018 12c-.365 0-.713-.139-.962-.383l-5.687-5.6a1.129 1.129 0 01.068-1.696z",fill:"#333"})))};var utils=__webpack_require__("./utils/index.ts"),heading=__webpack_require__("./components/heading/index.tsx"),themes=__webpack_require__("./themes/index.ts");const StyledContainer=styled_components_browser_esm.Ay.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .toggle-container {
    display: inline-block;
  }

  .span-toggle-content {
    cursor: pointer;
    user-select: none;

    display: grid;
    grid-template-columns: ${props=>props.enableToggle?"16px 1fr":"1fr"};
    grid-column-gap: 9px;
    max-width: 660px;

    svg {
      ${props=>!props.enableToggle&&styled_components_browser_esm.AH`
          display: none;
        `}

      path {
        fill: ${props=>props.theme.toggleContent.iconColor};
      }
    }
  }

  .arrow-toggle-content {
    margin: auto 0;
    transform: ${props=>props.isOpen&&props.theme.toggleContent.transform};
  }

  .heading-toggle-content {
    display: inline-block;
    height: ${props=>props.theme.toggleContent.headingHeight};
    line-height: ${props=>props.theme.toggleContent.headingHeight};
    box-sizing: border-box;
    font-style: normal;

    ${props=>props.enableToggle?styled_components_browser_esm.AH`
            &:hover {
              border-bottom: ${props.theme.toggleContent.hoverBorderBottom};
            }
          `:styled_components_browser_esm.AH`
            cursor: default;
          `}
  }
`;StyledContainer.defaultProps={theme:themes.C6};const StyledContent=styled_components_browser_esm.Ay.div`
  color: ${props=>props.theme.toggleContent.childrenContent.color};
  padding-top: ${props=>props.theme.toggleContent.childrenContent.paddingTop};
  display: ${props=>props.isOpen?"block":"none"};
`;StyledContent.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledArrowContentIcon=(0,styled_components_browser_esm.Ay)(arrow_content_react)`
  ${utils.Ww}
`,ToggleContent=({isOpen=!1,children,className,id,label,style,enableToggle=!1})=>{const[open,setOpen]=react.useState(isOpen);return react.useEffect((()=>{setOpen(isOpen)}),[isOpen]),(0,jsx_runtime.jsxs)(StyledContainer,{className,isOpen:open,id,style,enableToggle,"data-testid":"toggle-content",children:[(0,jsx_runtime.jsx)("div",{className:"toggle-container",children:(0,jsx_runtime.jsxs)("span",{className:"span-toggle-content",onClick:()=>{enableToggle&&setOpen((s=>!s))},children:[(0,jsx_runtime.jsx)(StyledArrowContentIcon,{className:"arrow-toggle-content",size:utils.rF.medium}),(0,jsx_runtime.jsx)(heading.DZ,{className:"heading-toggle-content",level:2,size:heading.u.small,isInline:!0,children:label})]})}),(0,jsx_runtime.jsx)(StyledContent,{isOpen:open,children})]})};ToggleContent.displayName="ToggleContent";try{ToggleContent.displayName="ToggleContent",ToggleContent.__docgenInfo={description:"",displayName:"ToggleContent",props:{children:{defaultValue:null,description:"Displays the child elements",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"Displays the component's state",name:"isOpen",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Sets the header label",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The change event is triggered when the element's value is modified",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},enableToggle:{defaultValue:{value:"false"},description:"Enables/disables toggle",name:"enableToggle",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/toggle-content/ToggleContent.tsx#ToggleContent"]={docgenInfo:ToggleContent.__docgenInfo,name:"ToggleContent",path:"components/toggle-content/ToggleContent.tsx#ToggleContent"})}catch(__react_docgen_typescript_loader_error){}try{ToggleContent.displayName="ToggleContent",__function.__docgenInfo={description:"",displayName:"ToggleContent",props:{children:{defaultValue:null,description:"Displays the child elements",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},isOpen:{defaultValue:{value:!1},description:"Displays the component's state",name:"isOpen",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Sets the header label",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The change event is triggered when the element's value is modified",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},enableToggle:{defaultValue:{value:!1},description:"Enables/disables toggle",name:"enableToggle",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/toggle-content/ToggleContent.tsx#ToggleContent"]={docgenInfo:ToggleContent.__docgenInfo,name:"ToggleContent",path:"components/toggle-content/ToggleContent.tsx#ToggleContent"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=7593.b7fd12d7.iframe.bundle.js.map