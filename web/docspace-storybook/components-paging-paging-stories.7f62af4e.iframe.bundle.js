"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[8665],{"./components/paging/paging.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>paging_stories});var react=__webpack_require__("../../node_modules/react/index.js"),components_button=__webpack_require__("./components/button/index.tsx"),combobox=__webpack_require__("./components/combobox/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts"),utils=__webpack_require__("./utils/index.ts");const StyledPaging=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .prev-button,
  .next-button {
    font-size: 13px;
    line-height: 20px;
    padding: 6px 28px;
  }

  .prev-button {
    max-width: 111px;
  }

  .next-button {
    max-width: 86px;
  }

  @media ${utils.n5} {
    .prev-button,
    .next-button {
      font-size: 14px;
    }

    .prev-button {
      max-width: 115px;
      height: 40px;
    }

    .next-button {
      max-width: 89px;
      height: 40px;
    }
  }

  & > button {
    ${({theme})=>"rtl"===theme.interfaceDirection?`margin-left: ${theme.paging.button.marginRight};`:`margin-right: ${theme.paging.button.marginRight};`}
  }
`;StyledPaging.defaultProps={theme:themes.C6};const StyledOnPage=styled_components_browser_esm.Ay.div`
  width: 125px;

  @media ${utils.n5} {
    width: 125px;
    height: 40px;
  }

  ${({theme})=>"rtl"===theme.interfaceDirection?`\n        margin-right: ${theme.paging.comboBox.marginLeft};\n        margin-left: ${theme.paging.comboBox.marginRight};\n      `:`\n        margin-left: ${theme.paging.comboBox.marginLeft};\n        margin-right: ${theme.paging.comboBox.marginRight};\n      `}

  .hideDisabled {
    padding: 0;

    @media ${utils.n5} {
      .combo-button-label {
        font-size: 14px;
      }
    }

    .combo-button {
      padding-left: 14px;

      .combo-button-label {
        margin-right: 0;
      }

      .combo-buttons_arrow-icon {
        margin-right: 4px;
      }

      @media ${utils.n5} {
        height: 40px;
      }
    }

    div[disabled] {
      display: none;
    }
  }

  @media ${utils.Hw} {
    display: none;
  }
`;StyledOnPage.defaultProps={theme:themes.C6};const StyledPage=styled_components_browser_esm.Ay.div`
  width: 83px;
  ${({theme})=>"rtl"===theme.interfaceDirection?`margin-left: ${theme.paging.page.marginRight};`:`margin-right: ${theme.paging.page.marginRight};`}

  .manualWidth {
    padding: 0;

    @media ${utils.n5} {
      .combo-button-label {
        font-size: 14px;
      }
    }

    .combo-button {
      padding-left: 14px;

      .combo-button-label {
        margin-right: 0;
      }

      .combo-buttons_arrow-icon {
        margin-right: 4px;
      }

      @media ${utils.n5} {
        height: 40px;
      }
    }

    .dropdown-container {
      width: ${props=>props.theme.paging.page.width};
    }
  }
`;StyledPage.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Paging=props=>{const{previousLabel,nextLabel,previousAction,nextAction,pageItems,countItems,openDirection,disablePrevious=!1,disableNext=!1,disableHover=!1,selectedPageItem,selectedCountItem,id,className,style,showCountItem=!0,onSelectPage,onSelectCount}=props,setDropDownMaxHeight=pageItems&&pageItems.length>6?{dropDownMaxHeight:200}:{};return(0,jsx_runtime.jsxs)(StyledPaging,{id,className,style,children:[(0,jsx_runtime.jsx)(components_button.$,{className:"prev-button not-selectable",size:components_button.M.small,scale:!0,label:previousLabel,onClick:previousAction,isDisabled:disablePrevious,disableHover}),pageItems&&(0,jsx_runtime.jsx)(StyledPage,{children:(0,jsx_runtime.jsx)(combobox.a3,{isDisabled:disablePrevious&&disableNext,className:"manualWidth",directionY:openDirection,options:pageItems,onSelect:option=>{onSelectPage?.(option)},scaledOptions:pageItems.length<6,selectedOption:selectedPageItem,...setDropDownMaxHeight})}),(0,jsx_runtime.jsx)(components_button.$,{className:"next-button not-selectable",size:components_button.M.small,scale:!0,label:nextLabel,onClick:nextAction,isDisabled:disableNext,disableHover}),showCountItem?countItems&&(0,jsx_runtime.jsx)(StyledOnPage,{children:(0,jsx_runtime.jsx)(combobox.a3,{className:"hideDisabled",directionY:openDirection,directionX:"right",options:countItems,scaledOptions:!0,onSelect:option=>{onSelectCount?.(option)},selectedOption:selectedCountItem})}):null]})};Paging.displayName="Paging";try{Paging.displayName="Paging",Paging.__docgenInfo={description:"",displayName:"Paging",props:{previousLabel:{defaultValue:null,description:"Label for the previous button",name:"previousLabel",required:!0,type:{name:"string"}},nextLabel:{defaultValue:null,description:"Label for the next button",name:"nextLabel",required:!0,type:{name:"string"}},previousAction:{defaultValue:null,description:"Action for the previous button",name:"previousAction",required:!0,type:{name:"(e?: MouseEvent<Element, MouseEvent> | undefined) => Promise<void>"}},nextAction:{defaultValue:null,description:"Action for the next button",name:"nextAction",required:!0,type:{name:"(e?: MouseEvent<Element, MouseEvent> | undefined) => Promise<void>"}},disablePrevious:{defaultValue:null,description:"Sets previous button disabled",name:"disablePrevious",required:!0,type:{name:"boolean"}},disableNext:{defaultValue:null,description:"Sets the next button disabled",name:"disableNext",required:!0,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disables the hover action for buttons",name:"disableHover",required:!0,type:{name:"boolean"}},selectedPageItem:{defaultValue:null,description:"Initial value for pageItems",name:"selectedPageItem",required:!0,type:{name:"TOption"}},selectedCountItem:{defaultValue:null,description:"Initial value for countItems",name:"selectedCountItem",required:!0,type:{name:"TOption"}},onSelectPage:{defaultValue:null,description:"Sets a callback function that is triggered when the page is selected",name:"onSelectPage",required:!0,type:{name:"(option: TOption) => Promise<void>"}},onSelectCount:{defaultValue:null,description:"Sets a callback function that is triggered when the page items are selected",name:"onSelectCount",required:!0,type:{name:"(option: TOption) => Promise<void>"}},pageItems:{defaultValue:null,description:"Paging combo box items",name:"pageItems",required:!0,type:{name:"TOption[]"}},countItems:{defaultValue:null,description:"Items per page combo box items",name:"countItems",required:!0,type:{name:"TOption[]"}},openDirection:{defaultValue:null,description:"Indicates opening direction of combo box",name:"openDirection",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"both"'}]}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!0,type:{name:"CSSProperties"}},showCountItem:{defaultValue:null,description:"Displays a combobox with the number of items per page",name:"showCountItem",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/paging/Paging.tsx#Paging"]={docgenInfo:Paging.__docgenInfo,name:"Paging",path:"components/paging/Paging.tsx#Paging"})}catch(__react_docgen_typescript_loader_error){}try{Paging.displayName="Paging",__function.__docgenInfo={description:"",displayName:"Paging",props:{previousLabel:{defaultValue:null,description:"Label for the previous button",name:"previousLabel",required:!0,type:{name:"string"}},nextLabel:{defaultValue:null,description:"Label for the next button",name:"nextLabel",required:!0,type:{name:"string"}},previousAction:{defaultValue:null,description:"Action for the previous button",name:"previousAction",required:!0,type:{name:"(e?: MouseEvent<Element, MouseEvent> | undefined) => Promise<void>"}},nextAction:{defaultValue:null,description:"Action for the next button",name:"nextAction",required:!0,type:{name:"(e?: MouseEvent<Element, MouseEvent> | undefined) => Promise<void>"}},disablePrevious:{defaultValue:null,description:"Sets previous button disabled",name:"disablePrevious",required:!0,type:{name:"boolean"}},disableNext:{defaultValue:null,description:"Sets the next button disabled",name:"disableNext",required:!0,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disables the hover action for buttons",name:"disableHover",required:!0,type:{name:"boolean"}},selectedPageItem:{defaultValue:null,description:"Initial value for pageItems",name:"selectedPageItem",required:!0,type:{name:"TOption"}},selectedCountItem:{defaultValue:null,description:"Initial value for countItems",name:"selectedCountItem",required:!0,type:{name:"TOption"}},onSelectPage:{defaultValue:null,description:"Sets a callback function that is triggered when the page is selected",name:"onSelectPage",required:!0,type:{name:"(option: TOption) => Promise<void>"}},onSelectCount:{defaultValue:null,description:"Sets a callback function that is triggered when the page items are selected",name:"onSelectCount",required:!0,type:{name:"(option: TOption) => Promise<void>"}},pageItems:{defaultValue:null,description:"Paging combo box items",name:"pageItems",required:!0,type:{name:"TOption[]"}},countItems:{defaultValue:null,description:"Items per page combo box items",name:"countItems",required:!0,type:{name:"TOption[]"}},openDirection:{defaultValue:null,description:"Indicates opening direction of combo box",name:"openDirection",required:!0,type:{name:'"top" | "bottom" | "both"'}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!0,type:{name:"CSSProperties"}},showCountItem:{defaultValue:null,description:"Displays a combobox with the number of items per page",name:"showCountItem",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/paging/Paging.tsx#Paging"]={docgenInfo:Paging.__docgenInfo,name:"Paging",path:"components/paging/Paging.tsx#Paging"})}catch(__react_docgen_typescript_loader_error){}const paging_stories={title:"Components/Paging",component:Paging,parameters:{docs:{description:{component:"Paging is used to navigate med content pages"}}},argTypes:{onSelectPage:{action:"onSelectPage"},onSelectCount:{action:"onSelectCount"},previousAction:{action:"onPrevious"}}},countItems=[{key:25,label:"25 per page"},{key:50,label:"50 per page"},{key:100,label:"100 per page"}],Template=({nextAction,previousAction,onSelectPage,onSelectCount,...args})=>{const pageItems=(count=>{const pageItems=[];for(let i=1;i<=count;i+=1)pageItems.push({key:i,label:`${i} of ${count}`});return pageItems})(200),[selectedPageItem,setSelectedPageItems]=(0,react.useState)(pageItems[0]);(0,react.useEffect)((()=>{setSelectedPageItems(pageItems[0])}),[pageItems]);return(0,jsx_runtime.jsx)("div",{style:{height:"100px"},children:(0,jsx_runtime.jsx)(Paging,{...args,pageItems,style:{justifyContent:"center",alignItems:"center"},countItems,previousAction:async()=>{previousAction(),(()=>{const currentPage=pageItems.filter((item=>item.key===selectedPageItem.key-1));currentPage[0]&&setSelectedPageItems(currentPage[0])})()},nextAction:async()=>{(()=>{const currentPage=pageItems.filter((item=>item.key===selectedPageItem.key+1));currentPage[0]&&setSelectedPageItems(currentPage[0])})(),nextAction()},onSelectPage:a=>onSelectPage(a),onSelectCount:a=>onSelectCount(a),selectedPageItem,selectedCountItem:(count=25,countItems.filter((item=>item.key===count)))[0]})});var count};Template.displayName="Template";const Default={render:args=>(0,jsx_runtime.jsx)(Template,{...args}),args:{previousLabel:"Previous",nextLabel:"Next",disablePrevious:!1,disableNext:!1,openDirection:"bottom",selectedCountItem:{key:100,label:"100 per page"},selectedPageItem:{key:1,label:"1 of 10"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Template {...args} />,\n  args: {\n    previousLabel: "Previous",\n    nextLabel: "Next",\n    disablePrevious: false,\n    disableNext: false,\n    openDirection: "bottom",\n    selectedCountItem: {\n      key: 100,\n      label: "100 per page"\n    },\n    selectedPageItem: {\n      key: 1,\n      label: "1 of 10"\n    }\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/button/Button.enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ButtonSize});let ButtonSize=function(ButtonSize){return ButtonSize.extraSmall="extraSmall",ButtonSize.small="small",ButtonSize.normal="normal",ButtonSize.medium="medium",ButtonSize}({})},"./components/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button_Button,M:()=>Button_enums.M});var Button_enums=__webpack_require__("./components/button/Button.enums.ts"),react=__webpack_require__("../../node_modules/react/index.js"),loader=__webpack_require__("./components/loader/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const activeCss=styled_components_browser_esm.AH`
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
  `));try{ButtonWrapper.displayName="ButtonWrapper",ButtonWrapper.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement>) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ButtonWrapper.displayName="ButtonWrapper",StyledComponent.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | undefined) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}const ButtonTheme=(0,react.forwardRef)(((props,ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsx)(StyledThemeButton,{...props,ref,$currentColorScheme:currentColorScheme})}));ButtonTheme.displayName="ButtonTheme";const Button_theme=ButtonTheme;try{ButtonTheme.displayName="ButtonTheme",ButtonTheme.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}try{ButtonTheme.displayName="ButtonTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}const Button_Button=react.forwardRef(((props,ref)=>{const{isLoading,icon,label,primary}=props;return(0,jsx_runtime.jsxs)(Button_theme,{...props,ref,"data-testid":"button",children:[isLoading&&(0,jsx_runtime.jsx)(loader.a,{className:"loader",color:"",size:"20px",type:loader.R.track,label,primary:primary||!1}),(0,jsx_runtime.jsxs)("div",{className:"button-content not-selectable",children:[icon&&(0,jsx_runtime.jsx)("div",{className:"icon",children:icon}),label]})]})}));Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button_Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/combobox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a3:()=>_ComboBox__WEBPACK_IMPORTED_MODULE_0__.a,dF:()=>_Combobox_enums__WEBPACK_IMPORTED_MODULE_2__.d});var _ComboBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/combobox/ComboBox.tsx"),_Combobox_enums__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./components/combobox/sub-components/ComboButton.tsx"),__webpack_require__("./components/combobox/Combobox.enums.ts"));try{ComboButton.displayName="ComboButton",ComboButton.__docgenInfo={description:"",displayName:"ComboButton",props:{noBorder:{defaultValue:{value:"false"},description:"",name:"noBorder",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},withOptions:{defaultValue:{value:"true"},description:"",name:"withOptions",required:!1,type:{name:"boolean"}},optionsLength:{defaultValue:null,description:"",name:"optionsLength",required:!1,type:{name:"number"}},withAdvancedOptions:{defaultValue:{value:"false"},description:"",name:"withAdvancedOptions",required:!1,type:{name:"boolean"}},innerContainer:{defaultValue:null,description:"",name:"innerContainer",required:!1,type:{name:"ReactNode"}},innerContainerClassName:{defaultValue:{value:"innerContainer"},description:"",name:"innerContainerClassName",required:!1,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"ComboBoxSize.content"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"middle"'},{value:'"big"'},{value:'"huge"'},{value:'"content"'}]}},scaled:{defaultValue:{value:"false"},description:"",name:"scaled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},comboIcon:{defaultValue:null,description:"",name:"comboIcon",required:!1,type:{name:"string"}},fillIcon:{defaultValue:null,description:"",name:"fillIcon",required:!1,type:{name:"boolean"}},modernView:{defaultValue:{value:"false"},description:"",name:"modernView",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"-1"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"TCombobox"}},plusBadgeValue:{defaultValue:null,description:"",name:"plusBadgeValue",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/combobox/index.tsx#ComboButton"]={docgenInfo:ComboButton.__docgenInfo,name:"ComboButton",path:"components/combobox/index.tsx#ComboButton"})}catch(__react_docgen_typescript_loader_error){}try{ComboButton.displayName="ComboButton",__function.__docgenInfo={description:"",displayName:"ComboButton",props:{noBorder:{defaultValue:{value:!1},description:"",name:"noBorder",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:!1},description:"",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},withOptions:{defaultValue:{value:!0},description:"",name:"withOptions",required:!1,type:{name:"boolean | undefined"}},optionsLength:{defaultValue:null,description:"",name:"optionsLength",required:!1,type:{name:"number | undefined"}},withAdvancedOptions:{defaultValue:{value:!1},description:"",name:"withAdvancedOptions",required:!1,type:{name:"boolean | undefined"}},innerContainer:{defaultValue:null,description:"",name:"innerContainer",required:!1,type:{name:"ReactNode"}},innerContainerClassName:{defaultValue:{value:"innerContainer"},description:"",name:"innerContainerClassName",required:!1,type:{name:"string | undefined"}},isOpen:{defaultValue:{value:!1},description:"",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"ComboBoxSize.content"},description:"",name:"size",required:!1,type:{name:"ComboBoxSize | undefined"}},scaled:{defaultValue:{value:!1},description:"",name:"scaled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},comboIcon:{defaultValue:null,description:"",name:"comboIcon",required:!1,type:{name:"string | undefined"}},fillIcon:{defaultValue:null,description:"",name:"fillIcon",required:!1,type:{name:"boolean | undefined"}},modernView:{defaultValue:{value:!1},description:"",name:"modernView",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:{value:-1},description:"",name:"tabIndex",required:!1,type:{name:"number | undefined"}},isLoading:{defaultValue:{value:!1},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"TCombobox | undefined"}},plusBadgeValue:{defaultValue:null,description:"",name:"plusBadgeValue",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/combobox/index.tsx#ComboButton"]={docgenInfo:ComboButton.__docgenInfo,name:"ComboButton",path:"components/combobox/index.tsx#ComboButton"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/fast-deep-equal/react.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);
//# sourceMappingURL=components-paging-paging-stories.7f62af4e.iframe.bundle.js.map