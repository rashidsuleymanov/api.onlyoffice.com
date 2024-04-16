"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[9521],{"./components/main-button-mobile/MainButtonMobile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MainButtonMobile_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const mobile_actions_folder_reacturl_namespaceObject=__webpack_require__.p+"images/mobile.actions.folder.react.svg?hash=a9fff6eef044f59c2d01",mobile_actions_remove_reacturl_namespaceObject=__webpack_require__.p+"images/mobile.actions.remove.react.svg?hash=8cb356bde378299be670",mobile_star_reacturl_namespaceObject=__webpack_require__.p+"images/mobile.star.react.svg?hash=be219e9d1217f75108db";var main=__webpack_require__("../../node_modules/react-device-detect/main.js"),button_alert_react=__webpack_require__("../../public/images/button.alert.react.svg"),utils=__webpack_require__("./utils/index.ts"),scrollbar=__webpack_require__("./components/scrollbar/index.tsx"),backdrop=__webpack_require__("./components/backdrop/index.tsx"),FloatingButton=__webpack_require__("./components/floating-button/FloatingButton.tsx"),FloatingButton_enums=__webpack_require__("./components/floating-button/FloatingButton.enums.ts"),themes=__webpack_require__("./themes/index.ts"),drop_down=__webpack_require__("./components/drop-down/index.tsx"),drop_down_item=__webpack_require__("./components/drop-down-item/index.tsx");const StyledFloatingButton=(0,styled_components_browser_esm.Ay)(FloatingButton.r)`
  position: relative;
  z-index: 1010;
  background: ${props=>props.theme.mainButtonMobile.buttonColor};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .circle__background {
    background: ${props=>props.theme.mainButtonMobile.buttonColor};
  }

  .circle__mask + div {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      padding-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${props=>0===props.percent&&styled_components_browser_esm.AH`
      .circle__mask {
        clip: none;
      }

      .circle__fill {
        animation: none;
        transform: none;
        background: none !important;
      }
    `}

  .circle__mask .circle__fill {
    background-color: ${props=>props.theme.mainButtonMobile.circleBackground};
  }

  svg {
    path {
      fill: ${props=>props.theme.mainButtonMobile.iconFill};
    }
  }
`;StyledFloatingButton.defaultProps={theme:themes.C6};const mobileDropDown=styled_components_browser_esm.AH`
  @media ${utils.Hw} {
    width: ${props=>props.theme.mainButtonMobile.dropDown.mobile.width};
  }

  right: ${props=>props.theme.mainButtonMobile.dropDown.mobile.right};
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: ${props.theme.mainButtonMobile.dropDown.mobile.right};
      right: unset;
    `}
  bottom: ${props=>props.theme.mainButtonMobile.dropDown.mobile.bottom};

  .dialog-background-scroll {
    background: ${props=>props.theme.backgroundColor} !important;
  }
  .section-scroll {
    background: ${props=>props.theme.mainButtonMobile.buttonOptions.backgroundColor};
  }
`,StyledRenderItem=styled_components_browser_esm.Ay.div`
  background: ${props=>props.theme.backgroundColor};
`,StyledDropDown=(0,styled_components_browser_esm.Ay)(drop_down.C)`
  position: ${props=>props.theme.mainButtonMobile.dropDown.position};
  width: ${props=>props.theme.mainButtonMobile.dropDown.width};
  max-width: calc(100vw - 48px);

  ${props=>"rtl"===props.theme.interfaceDirection?styled_components_browser_esm.AH`
          left: ${props.theme.mainButtonMobile.dropDown.right};
        `:styled_components_browser_esm.AH`
          right: ${props.theme.mainButtonMobile.dropDown.right};
        `}
  bottom: ${props=>props.theme.mainButtonMobile.dropDown.bottom};

  z-index: ${props=>props.theme.mainButtonMobile.dropDown.zIndex};
  height: auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0px;

  @media ${utils.n5} {
    height: ${props=>props.heightProp};
  }

  @media ${utils.Hw} {
    ${mobileDropDown}
  }

  .section-scroll,
  .scroll-body {
    ${({theme})=>"rtl"===theme.interfaceDirection?"padding-left: 0px !important;":"padding-right: 0px !important;"}
  }

  .separator-wrapper {
    padding: 12px 24px;
  }

  .is-separator {
    height: 1px !important;
    width: calc(100% - 48px);
    padding: 0 !important;
    margin: 12px 24px !important;
    background-color: ${props=>props.theme.mainButtonMobile.dropDown.separatorBackground};
  }

  .drop-down-item-button {
    color: ${props=>props.theme.mainButtonMobile.dropDown.buttonColor};

    svg {
      path[fill] {
        fill: ${props=>props.theme.mainButtonMobile.dropDown.buttonColor};
      }

      path[stroke] {
        stroke: ${props=>props.theme.mainButtonMobile.dropDown.buttonColor};
      }
    }

    &:hover {
      background-color: ${props=>main.Fr?props.theme.mainButtonMobile.buttonOptions.backgroundColor:props.theme.mainButtonMobile.dropDown.hoverButtonColor};
    }
  }

  .action-mobile-button {
    width: 100%;
    background-color: ${props=>props.theme.mainButtonMobile.dropDown.backgroundActionMobile};
    border-radius: 3px;
    font-size: ${props=>props.theme.getCorrectFontSize("13px")};
    display: block;
  }
`;StyledDropDown.defaultProps={theme:themes.C6};const StyledDropDownItem=(0,styled_components_browser_esm.Ay)(drop_down_item.H)`
  padding: 6px 23px;

  .drop-down-icon {
    height: 22px;
  }
`,StyledButtonOptions=styled_components_browser_esm.Ay.div`
  padding: 16px 0;
  background-color: ${props=>props.withoutButton?props.theme.mainButtonMobile.buttonWrapper.background:props.theme.mainButtonMobile.buttonOptions.backgroundColor};
  color: ${props=>props.theme.mainButtonMobile.buttonOptions.color};
`;StyledButtonOptions.defaultProps={theme:themes.C6};const StyledContainerAction=styled_components_browser_esm.Ay.div`
  padding: 16px 0px;

  .sublevel {
    ${({theme})=>"rtl"===theme.interfaceDirection?"padding-right: 48px;":"padding-left: 48px;"}
  }
`,StyledButtonWrapper=styled_components_browser_esm.Ay.div`
  padding: 0 24px 34px;

  display: ${props=>props.isOpenButton?"none":"block"};
  background-color: ${props=>props.isUploading?props.theme.mainButtonMobile?.buttonWrapper.uploadingBackground:props.theme.mainButtonMobile?.buttonWrapper.background};
`;StyledButtonWrapper.defaultProps={theme:themes.C6};const StyledProgressContainer=styled_components_browser_esm.Ay.div`
  display: ${props=>props.isUploading?"flex":"none"};
  flex-direction: column;
  background-color: ${props=>props.isUploading?props.theme.mainButtonMobile?.buttonWrapper.uploadingBackground:props.theme.mainButtonMobile?.buttonWrapper.background};
  cursor: default;
  padding: 0 24px 34px;
`;StyledProgressContainer.defaultProps={theme:themes.C6},StyledButtonWrapper.defaultProps={theme:themes.C6};const StyledProgressBarContainer=styled_components_browser_esm.Ay.div`
  display: ${props=>props.isUploading?"flex":"none"};

  align-items: center;

  flex-wrap: wrap;

  width: 100%;

  box-sizing: border-box;

  height: 60px;
  padding-top: 26px;

  .progress-container {
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: space-between;

    .progress-header {
      width: 50%;

      line-height: 16px;

      color: ${props=>props.theme.mainButtonMobile.textColor};
      &:hover {
        cursor: pointer;
      }
    }

    .progress_info-container {
      width: 50%;

      display: flex;
      align-items: center;

      .progress_count {
        width: calc(100% - 26px);

        line-height: 16px;
        color: ${props=>props.theme.mainButtonMobile.textColor};

        text-align: right;
        margin-right: 12px;
        ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
            margin-left: 12px;
            margin-right: 0px;
          `}
      }

      .progress_icon {
        svg {
          path {
            fill: ${props=>props.theme.mainButtonMobile.bar.icon};
          }
        }
      }
    }
  }
`;StyledProgressBarContainer.defaultProps={theme:themes.C6};const StyledMobileProgressBar=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 4px;
  background-color: ${props=>props.theme.mainButtonMobile.mobileProgressBarBackground};
  border-radius: 2px;
  margin-top: 14px;
`;StyledMobileProgressBar.defaultProps={theme:themes.C6};const StyledBar=styled_components_browser_esm.Ay.div`
  width: ${props=>props.uploadPercent}%;
  height: 4px;
  opacity: 1;
`,StyledAlertIcon=styled_components_browser_esm.Ay.div`
  position: absolute;
  z-index: 1010;
  width: 12px;
  height: 12px;
  top: 10px;
  ${props=>"rtl"===props.theme.interfaceDirection?"left: 10px;":"right: 10px;"}
`;StyledBar.defaultProps={theme:themes.C6};const StyledProgressBarTheme=(0,styled_components_browser_esm.Ay)(StyledBar)((({$currentColorScheme,theme,error})=>$currentColorScheme&&styled_components_browser_esm.AH`
    background: ${error?theme.mainButtonMobile.bar.errorBackground:theme.isBase?$currentColorScheme?.main?.accent:"#FFFFFF"};
  `));var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SubmenuItem=({option,toggle,noHover,recalculateHeight,openedSubmenuKey,setOpenedSubmenuKey})=>{const[isOpenSubMenu,setIsOpenSubMenu]=(0,react.useState)(!1);(0,react.useLayoutEffect)((()=>{recalculateHeight()}),[isOpenSubMenu,recalculateHeight]),(0,react.useEffect)((()=>{openedSubmenuKey!==option.key&&setIsOpenSubMenu(!1)}),[openedSubmenuKey,option.key]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledDropDownItem,{id:option.id,label:option.label,className:`${option.className} ${option.isSeparator&&"is-separator"}`,onClick:()=>{setOpenedSubmenuKey(option.key),setIsOpenSubMenu((v=>!v))},icon:option.icon?option.icon:"",isActive:isOpenSubMenu,isSubMenu:!0,noHover},option.key),isOpenSubMenu&&option.items?.map((item=>(0,jsx_runtime.jsx)(StyledDropDownItem,{id:item.id,label:item.label,className:`${item.className} sublevel`,onClick:()=>{toggle(!1),setIsOpenSubMenu(!1),item.onClick?.({action:item.action})},icon:item.icon?item.icon:"",withoutIcon:item.withoutIcon,noHover},item.key)))]},`mobile-submenu-${option.key}`)};SubmenuItem.displayName="SubmenuItem";const sub_components_SubmenuItem=SubmenuItem;try{SubmenuItem.displayName="SubmenuItem",SubmenuItem.__docgenInfo={description:"",displayName:"SubmenuItem",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"ActionOption"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"(value: boolean) => void"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!0,type:{name:"boolean"}},recalculateHeight:{defaultValue:null,description:"",name:"recalculateHeight",required:!0,type:{name:"() => void"}},openedSubmenuKey:{defaultValue:null,description:"",name:"openedSubmenuKey",required:!0,type:{name:"string"}},setOpenedSubmenuKey:{defaultValue:null,description:"",name:"setOpenedSubmenuKey",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/sub-components/SubmenuItem.tsx#SubmenuItem"]={docgenInfo:SubmenuItem.__docgenInfo,name:"SubmenuItem",path:"components/main-button-mobile/sub-components/SubmenuItem.tsx#SubmenuItem"})}catch(__react_docgen_typescript_loader_error){}try{SubmenuItem.displayName="SubmenuItem",__function.__docgenInfo={description:"",displayName:"SubmenuItem",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"ActionOption"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"(value: boolean) => void"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!0,type:{name:"boolean"}},recalculateHeight:{defaultValue:null,description:"",name:"recalculateHeight",required:!0,type:{name:"() => void"}},openedSubmenuKey:{defaultValue:null,description:"",name:"openedSubmenuKey",required:!0,type:{name:"string"}},setOpenedSubmenuKey:{defaultValue:null,description:"",name:"setOpenedSubmenuKey",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/sub-components/SubmenuItem.tsx#SubmenuItem"]={docgenInfo:SubmenuItem.__docgenInfo,name:"SubmenuItem",path:"components/main-button-mobile/sub-components/SubmenuItem.tsx#SubmenuItem"})}catch(__react_docgen_typescript_loader_error){}var icon_button=__webpack_require__("./components/icon-button/index.tsx"),components_text=__webpack_require__("./components/text/index.tsx");const ProgressBarMobile=({label,status,percent,open,onCancel,icon,onClickAction,hideButton,error})=>{const uploadPercent=percent>100?100:percent,defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsxs)(StyledProgressBarContainer,{isUploading:open,children:[(0,jsx_runtime.jsxs)("div",{className:"progress-container",children:[(0,jsx_runtime.jsx)(components_text.E,{className:"progress-header",fontSize:"14px",onClick:()=>{onClickAction?.(),hideButton?.()},truncate:!0,children:label}),(0,jsx_runtime.jsxs)("div",{className:"progress_info-container",children:[(0,jsx_runtime.jsx)(components_text.E,{className:"progress_count",fontSize:"13px",truncate:!0,children:status}),(0,jsx_runtime.jsx)(icon_button.K,{className:"progress_icon",onClick:onCancel,iconName:icon,size:14})]})]}),(0,jsx_runtime.jsx)(StyledMobileProgressBar,{children:(0,jsx_runtime.jsx)(StyledProgressBarTheme,{$currentColorScheme:currentColorScheme,uploadPercent,error})})]})};ProgressBarMobile.displayName="ProgressBarMobile";try{ProgressBarMobile.displayName="ProgressBarMobile",ProgressBarMobile.__docgenInfo={description:"",displayName:"ProgressBarMobile",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},onClickAction:{defaultValue:null,description:"The function called after the progress header is clicked",name:"onClickAction",required:!1,type:{name:"(() => void)"}},hideButton:{defaultValue:null,description:"The function that facilitates hiding the button",name:"hideButton",required:!1,type:{name:"(() => void)"}},error:{defaultValue:null,description:"Changes the progress bar color, if set to true",name:"error",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/sub-components/ProgressBar.tsx#ProgressBarMobile"]={docgenInfo:ProgressBarMobile.__docgenInfo,name:"ProgressBarMobile",path:"components/main-button-mobile/sub-components/ProgressBar.tsx#ProgressBarMobile"})}catch(__react_docgen_typescript_loader_error){}try{ProgressBarMobile.displayName="ProgressBarMobile",__function.__docgenInfo={description:"",displayName:"ProgressBarMobile",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string | undefined"}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},onClickAction:{defaultValue:null,description:"The function called after the progress header is clicked",name:"onClickAction",required:!1,type:{name:"(() => void) | undefined"}},hideButton:{defaultValue:null,description:"The function that facilitates hiding the button",name:"hideButton",required:!1,type:{name:"(() => void) | undefined"}},error:{defaultValue:null,description:"Changes the progress bar color, if set to true",name:"error",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/sub-components/ProgressBar.tsx#ProgressBarMobile"]={docgenInfo:ProgressBarMobile.__docgenInfo,name:"ProgressBarMobile",path:"components/main-button-mobile/sub-components/ProgressBar.tsx#ProgressBarMobile"})}catch(__react_docgen_typescript_loader_error){}const StyledButtonAlertIcon=(0,styled_components_browser_esm.Ay)(button_alert_react.A)`
  cursor: pointer;
  vertical-align: top !important;
  ${utils.Ww};
`,MainButtonMobile=props=>{const{className,style,opened,actionOptions,progressOptions,buttonOptions,percent,withoutButton,manualWidth,isOpenButton,onClose,alert,withMenu,onClick,onAlertClick,withAlertClick,dropdownStyle}=props,[isOpen,setIsOpen]=(0,react.useState)(opened),[isUploading,setIsUploading]=(0,react.useState)(!1),[height,setHeight]=(0,react.useState)(window.innerHeight-48+"px"),[openedSubmenuKey,setOpenedSubmenuKey]=(0,react.useState)(""),divRef=(0,react.useRef)(null),ref=(0,react.useRef)(null),dropDownRef=(0,react.useRef)(null),scrollElem=(0,react.useRef)(null),currentPosition=(0,react.useRef)(null),prevPosition=(0,react.useRef)(null),buttonBackground=(0,react.useRef)(!1);(0,react.useEffect)((()=>{setIsOpen(opened)}),[opened]);const setButtonBackground=react.useCallback((()=>{buttonBackground.current=!0,scrollElem.current&&scrollElem.current.classList.remove("dialog-background-scroll")}),[]),scrollChangingBackground=react.useCallback((()=>{if(scrollElem.current){currentPosition.current=scrollElem.current.scrollTop;const scrollHeight=scrollElem.current.scrollHeight;currentPosition<prevPosition?(scrollHeight=>{buttonBackground||document.getElementsByClassName("section-scroll")[0].classList.add("dialog-background-scroll"),currentPosition.current&&currentPosition.current<scrollHeight/3&&(buttonBackground.current=!1)})(scrollHeight):currentPosition.current&&prevPosition.current&&currentPosition.current>0&&currentPosition.current>prevPosition.current&&setButtonBackground(),prevPosition.current=currentPosition.current}}),[setButtonBackground]);(0,react.useEffect)((()=>{if(main.un)return scrollElem.current=document.getElementsByClassName("section-scroll")[0],scrollElem.current&&0===scrollElem.current.scrollTop&&scrollElem.current.classList.add("dialog-background-scroll"),scrollElem.current.addEventListener("scroll",scrollChangingBackground),()=>{scrollElem.current&&scrollElem.current.removeEventListener("scroll",scrollChangingBackground)}}),[scrollChangingBackground]);const recalculateHeight=react.useCallback((()=>{if(divRef.current){const h=divRef?.current?.getBoundingClientRect()?.height||window.innerHeight;h>=window.innerHeight?setHeight(window.innerHeight-48+"px"):setHeight(`${h}px`)}}),[]);(0,react.useLayoutEffect)((()=>{if(divRef.current){const{height:h}=divRef.current.getBoundingClientRect();setHeight(`${h}px`)}}),[isOpen]),(0,react.useLayoutEffect)((()=>{recalculateHeight()}),[isOpen,isOpenButton,isUploading,recalculateHeight]),(0,react.useEffect)((()=>(window.addEventListener("resize",recalculateHeight),()=>{window.removeEventListener("resize",recalculateHeight)})),[recalculateHeight]);const toggle=value=>(isOpenButton&&onClose&&onClose(),setIsOpen(value));react.useEffect((()=>{if(progressOptions){const openProgressOptions=progressOptions.filter((option=>option.open));setIsUploading(openProgressOptions.length>0)}}),[progressOptions]);const noHover=main.Fr,children=(0,jsx_runtime.jsxs)(StyledRenderItem,{ref:divRef,children:[(0,jsx_runtime.jsx)(StyledContainerAction,{children:actionOptions?.map((option=>option.items?(0,jsx_runtime.jsx)(sub_components_SubmenuItem,{option,toggle,noHover,recalculateHeight,openedSubmenuKey,setOpenedSubmenuKey},option.key):(0,jsx_runtime.jsx)(StyledDropDownItem,{id:option.id,label:option.label,className:(0,utils.xW)([option.className,option.isSeparator?"is-separator":""])||"",onClick:()=>{toggle(!1),option.onClick?.({action:option.action})},icon:option.icon?option.icon:"",noHover},option.key)))}),(0,jsx_runtime.jsx)(StyledProgressContainer,{isUploading,children:progressOptions&&progressOptions.map((option=>(0,jsx_runtime.jsx)(ProgressBarMobile,{label:option.label,icon:option.icon||"",className:option.className,percent:option.percent||0,status:option.status,open:option.open||!1,onCancel:option.onCancel,onClickAction:option.onClick,hideButton:()=>toggle(!1),error:option.error},option.key)))}),buttonOptions&&(0,jsx_runtime.jsx)(StyledButtonOptions,{withoutButton,children:buttonOptions.map((option=>option.isSeparator?(0,jsx_runtime.jsx)("div",{className:"separator-wrapper",children:(0,jsx_runtime.jsx)("div",{className:"is-separator"})},option.key):(0,jsx_runtime.jsx)(StyledDropDownItem,{id:option.id,className:"drop-down-item-button "+(option.isSeparator?"is-separator":""),label:option.label,onClick:option.onClick,icon:option.icon?option.icon:""},option.key)))})]});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(backdrop.z,{zIndex:210,visible:isOpen||!1,onClick:e=>{const target=e.target;isOpen&&ref.current&&ref.current.contains(target)||toggle(!1)}}),(0,jsx_runtime.jsxs)("div",{ref,className,style:{zIndex:""+(isOpen?"211":"201"),...style},"data-testid":"main-button-mobile",children:[(0,jsx_runtime.jsx)(StyledFloatingButton,{icon:isOpen?FloatingButton_enums.b.minus:FloatingButton_enums.b.plus,onClick:e=>{withMenu?toggle(!isOpen):onClick?.(e)},percent}),(0,jsx_runtime.jsx)(StyledDropDown,{style:dropdownStyle,open:isOpen,withBackdrop:!1,manualWidth:manualWidth||"400px",directionY:"top",directionX:"right",fixedDirection:!0,heightProp:height,isDefaultMode:!1,className:"mainBtnDropdown",children:main.Fr?(0,jsx_runtime.jsx)(scrollbar.Ze,{style:{position:"absolute"},scrollclass:"section-scroll",ref:dropDownRef,children}):children}),alert&&!isOpen&&(0,jsx_runtime.jsx)(StyledAlertIcon,{children:(0,jsx_runtime.jsx)(StyledButtonAlertIcon,{onClick:()=>{withAlertClick&&onAlertClick?.()},size:utils.rF.small})})]})]})};MainButtonMobile.defaultProps={withMenu:!0};try{MainButtonMobile.displayName="MainButtonMobile",MainButtonMobile.__docgenInfo={description:"",displayName:"MainButtonMobile",props:{style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},actionOptions:{defaultValue:null,description:"Drop down items options",name:"actionOptions",required:!1,type:{name:"ActionOption[]"}},progressOptions:{defaultValue:null,description:"Displays progress bar components",name:"progressOptions",required:!1,type:{name:"ProgressOption[]"}},buttonOptions:{defaultValue:null,description:"Menu that opens by clicking on the button",name:"buttonOptions",required:!1,type:{name:"ButtonOption[]"}},onUploadClick:{defaultValue:null,description:"The function called after the button is clicked",name:"onUploadClick",required:!1,type:{name:"(() => void)"}},withButton:{defaultValue:null,description:"Displays button inside the drop down",name:"withButton",required:!1,type:{name:"boolean"}},isOpenButton:{defaultValue:null,description:"Opens a menu on clicking the button. Used with buttonOptions",name:"isOpenButton",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The button name in the drop down",name:"title",required:!1,type:{name:"string"}},percent:{defaultValue:null,description:"Loading indicator",name:"percent",required:!1,type:{name:"number"}},sectionWidth:{defaultValue:null,description:"Width section",name:"sectionWidth",required:!1,type:{name:"number"}},manualWidth:{defaultValue:null,description:"Specifies the exact width of the drop down component",name:"manualWidth",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},opened:{defaultValue:null,description:"Sets the dropdown to open",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Closes the drop down",name:"onClose",required:!1,type:{name:"(() => void)"}},onAlertClick:{defaultValue:null,description:"If you need open upload panel when clicking on alert button",name:"onAlertClick",required:!1,type:{name:"(() => void)"}},withAlertClick:{defaultValue:null,description:"Enables alert click",name:"withAlertClick",required:!1,type:{name:"boolean"}},withMenu:{defaultValue:{value:"true"},description:"Enables the submenu",name:"withMenu",required:!1,type:{name:"boolean"}},withoutButton:{defaultValue:null,description:"",name:"withoutButton",required:!1,type:{name:"boolean"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/MainButtonMobile.tsx#MainButtonMobile"]={docgenInfo:MainButtonMobile.__docgenInfo,name:"MainButtonMobile",path:"components/main-button-mobile/MainButtonMobile.tsx#MainButtonMobile"})}catch(__react_docgen_typescript_loader_error){}try{MainButtonMobile.displayName="MainButtonMobile",__function.__docgenInfo={description:"",displayName:"MainButtonMobile",props:{style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},actionOptions:{defaultValue:null,description:"Drop down items options",name:"actionOptions",required:!1,type:{name:"ActionOption[] | undefined"}},progressOptions:{defaultValue:null,description:"Displays progress bar components",name:"progressOptions",required:!1,type:{name:"ProgressOption[] | undefined"}},buttonOptions:{defaultValue:null,description:"Menu that opens by clicking on the button",name:"buttonOptions",required:!1,type:{name:"ButtonOption[] | undefined"}},onUploadClick:{defaultValue:null,description:"The function called after the button is clicked",name:"onUploadClick",required:!1,type:{name:"(() => void) | undefined"}},withButton:{defaultValue:null,description:"Displays button inside the drop down",name:"withButton",required:!1,type:{name:"boolean | undefined"}},isOpenButton:{defaultValue:null,description:"Opens a menu on clicking the button. Used with buttonOptions",name:"isOpenButton",required:!1,type:{name:"boolean | undefined"}},title:{defaultValue:null,description:"The button name in the drop down",name:"title",required:!1,type:{name:"string | undefined"}},percent:{defaultValue:null,description:"Loading indicator",name:"percent",required:!1,type:{name:"number | undefined"}},sectionWidth:{defaultValue:null,description:"Width section",name:"sectionWidth",required:!1,type:{name:"number | undefined"}},manualWidth:{defaultValue:null,description:"Specifies the exact width of the drop down component",name:"manualWidth",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},opened:{defaultValue:null,description:"Sets the dropdown to open",name:"opened",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Closes the drop down",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onAlertClick:{defaultValue:null,description:"If you need open upload panel when clicking on alert button",name:"onAlertClick",required:!1,type:{name:"(() => void) | undefined"}},withAlertClick:{defaultValue:null,description:"Enables alert click",name:"withAlertClick",required:!1,type:{name:"boolean | undefined"}},withMenu:{defaultValue:{value:!0},description:"Enables the submenu",name:"withMenu",required:!1,type:{name:"boolean | undefined"}},withoutButton:{defaultValue:null,description:"",name:"withoutButton",required:!1,type:{name:"boolean | undefined"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-button-mobile/MainButtonMobile.tsx#MainButtonMobile"]={docgenInfo:MainButtonMobile.__docgenInfo,name:"MainButtonMobile",path:"components/main-button-mobile/MainButtonMobile.tsx#MainButtonMobile"})}catch(__react_docgen_typescript_loader_error){}const MainButtonMobile_stories={title:"Components/MainButtonMobile",component:MainButtonMobile,tags:["autodocs"],parameters:{docs:{}}},StyledWrapper=styled_components_browser_esm.Ay.div`
  width: 500px;
  height: 600px;

  ${props=>props.isAutoDocs&&styled_components_browser_esm.AH`
      width: calc(100% + 40px);
      height: 500px;
      position: relative;
      margin: 0 0 -20px -20px;
    `}
`,Template=({...args})=>{const[isOpenUploads,setIsOpenUploads]=(0,react.useState)(!1),[isOpenOperations,setIsOpenOperations]=(0,react.useState)(!1),[isOpenButton,setIsOpenButton]=(0,react.useState)(!1),[opened,setOpened]=(0,react.useState)(null),[isUploading,setIsUploading]=(0,react.useState)(!1),[initialState,setInitialState]=(0,react.useState)({uploads:0,operations:0});const[state,dispatch]=(0,react.useReducer)((function reducer(state,action){return"start"===action.type?10===state.uploads&&7===state.operations?(setIsUploading(!1),{...state,uploads:state.uploads,operations:state.operations}):{...state,uploads:10!==state.uploads?state.uploads+1:state.uploads,operations:7!==state.operations?state.operations+1:state.operations}:state}),initialState);(0,react.useEffect)((()=>{if(setOpened(null),isUploading){const id=setInterval((()=>{dispatch({type:"start"})}),1e3);return()=>clearInterval(id)}}),[dispatch,isUploading]);const uploadPercent=state.uploads/10*100,operationPercent=state.operations/7*100,progressOptions=[{key:"1",label:"Uploads",icon:mobile_actions_remove_reacturl_namespaceObject,percent:uploadPercent,status:`${state.uploads}/10`,open:isOpenUploads,onCancel:()=>setIsOpenUploads(!1)},{key:"2",label:"Other operations",icon:mobile_actions_remove_reacturl_namespaceObject,percent:operationPercent,status:"3 files not loaded",open:isOpenOperations,onCancel:()=>setIsOpenOperations(!1),error:!0}],[isMobile,setIsMobile]=(0,react.useState)(window.innerWidth<1245);(0,react.useEffect)((()=>{const handleResize=()=>{setIsMobile(window.innerWidth<1025)};return window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}}),[]);const isAutoDocs="undefined"!=typeof window&&window?.location?.href.includes("docs"),{interfaceDirection}=(0,styled_components_browser_esm.DP)(),actionOptions=[{key:"1",label:"New document",icon:mobile_actions_folder_reacturl_namespaceObject},{key:"2",label:"New presentation",icon:mobile_actions_folder_reacturl_namespaceObject},{key:"3",label:"New spreadsheet",icon:mobile_actions_folder_reacturl_namespaceObject},{key:"4",label:"New folder",icon:mobile_actions_folder_reacturl_namespaceObject}],buttonOptions=[{key:"1",label:"Import point",icon:mobile_star_reacturl_namespaceObject,onClick:()=>setIsOpenButton(!1)},{key:"2",label:"Import point",icon:mobile_star_reacturl_namespaceObject,onClick:()=>setIsOpenButton(!1)},{key:"3",label:"Import point",isSeparator:!0},{key:"4",label:"Import point",icon:mobile_star_reacturl_namespaceObject,onClick:()=>setIsOpenButton(!1)}];return(0,jsx_runtime.jsx)(StyledWrapper,{isAutoDocs,isMobile,children:(0,jsx_runtime.jsx)(MainButtonMobile,{...args,style:{position:"absolute",bottom:"26px",left:"rtl"===interfaceDirection?"44px":"unset",right:"rtl"!==interfaceDirection?"44px":"unset"},actionOptions,dropdownStyle:{position:"absolute",bottom:"25px",left:"rtl"===interfaceDirection?"60px":"unset",right:"rtl"!==interfaceDirection?"60px":"unset"},progressOptions,buttonOptions,onUploadClick:()=>{setInitialState({uploads:0,operations:0}),setIsUploading(!0),setIsOpenUploads(!0),setIsOpenOperations(!0),setIsOpenButton(!0)},withButton:!0,isOpenButton,title:"Upload",percent:uploadPercent,opened:opened||!1})})};Template.displayName="Template";const Default={render:args=>(0,jsx_runtime.jsx)(Template,{...args}),args:{title:"Upload",percent:0,opened:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Template {...args} />,\n  args: {\n    title: "Upload",\n    percent: 0,\n    opened: false\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/icon-button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton_IconButton});var react=__webpack_require__("../../node_modules/react/index.js"),react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts");const StyledOuter=styled_components_browser_esm.Ay.div`
  width: ${props=>props.size?`${props.size}px`:"20px"};
  height: ${props=>props.size?`${props.size}px`:"20px"};
  cursor: ${props=>props.isDisabled||!props.isClickable?"default":"pointer"};
  line-height: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${props=>props.isStroke&&styled_components_browser_esm.AH`
      svg {
        &:not(:root) {
          width: 100%;
          height: 100%;
        }
        path {
          stroke: ${props.color||props.theme.iconButton.color};
        }
      }
      &:hover {
        svg {
          path {
            stroke: ${props.isDisabled?props.theme.iconButton.color:props.color||props.theme.iconButton.hoverColor};
          }
        }
      }
    `}

  ${props=>props.isFill&&!props.isStroke&&styled_components_browser_esm.AH`
      svg {
        &:not(:root) {
          width: 100%;
          height: 100%;
        }
        path {
          fill: ${props.color||props.theme.iconButton.color};
        }
      }
      &:hover {
        svg {
          path {
            fill: ${props.isDisabled?props.theme.iconButton.color:props.color||props.theme.iconButton.hoverColor};
          }
        }
      }
    `}
`;StyledOuter.defaultProps={theme:themes.C6};const IconButton_styled=StyledOuter;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconButton_IconButton=({iconName,iconHoverName,iconClickName,iconNode,color,hoverColor,clickColor,isDisabled=!1,isFill=!0,isClickable=!1,className,size=25,title,id,style,dataTip="",isStroke=!1,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp,onClick,...rest})=>{const[currentIconName,setCurrentIconName]=react.useState(iconName),[currentIconColor,setCurrentIconColor]=react.useState(iconName);return react.useEffect((()=>{setCurrentIconName(iconName),setCurrentIconColor(color||"")}),[iconName,color]),(0,jsx_runtime.jsx)(IconButton_styled,{className,size,title,isDisabled,onMouseEnter:e=>{isDisabled||("ontouchstart"in document.documentElement?(setCurrentIconName(iconName),setCurrentIconColor(hoverColor||color)):(setCurrentIconName(iconHoverName||iconName),setCurrentIconColor(hoverColor||color)),onMouseEnter?.(e))},onMouseLeave:e=>{isDisabled||(setCurrentIconName(iconName),setCurrentIconColor(color),onMouseLeave?.(e))},onMouseDown:e=>{isDisabled||("ontouchstart"in document.documentElement?(setCurrentIconName(iconName),setCurrentIconColor(clickColor||color)):(setCurrentIconName(iconClickName||iconName),setCurrentIconColor(clickColor||color)),onMouseDown?.(e))},onMouseUp:e=>{if(!isDisabled)switch(e.nativeEvent.button){case 1:"ontouchstart"in document.documentElement?(setCurrentIconName(iconName),setCurrentIconColor(hoverColor||color)):(setCurrentIconName(iconHoverName||iconName),setCurrentIconColor(hoverColor||color)),onMouseUp?.(e);break;case 2:onMouseUp?.(e)}},onClick:e=>{isDisabled||onClick?.(e)},isClickable:"function"==typeof onClick||isClickable,"data-tip":dataTip,"data-event":"click focus","data-for":id,id,style,color:currentIconColor,isFill,iconName,"data-testid":"icon-button",isStroke,...rest,children:iconNode||(0,jsx_runtime.jsx)(react_svg_esm.k,{className:"icon-button_svg not-selectable",src:currentIconName||""})})};IconButton_IconButton.displayName="IconButton";try{IconButton_IconButton.displayName="IconButton",IconButton_IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"Sets component class",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Icon color",name:"color",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"25"},description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType"}},isFill:{defaultValue:{value:"true"},description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean"}},isStroke:{defaultValue:{value:"false"},description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isClickable:{defaultValue:{value:"false"},description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},id:{defaultValue:null,description:"Sets component id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},dataTip:{defaultValue:{value:""},description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Data when user hover on icon",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:IconButton_IconButton.__docgenInfo,name:"IconButton",path:"components/icon-button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}try{IconButton_IconButton.displayName="IconButton",__function.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"Sets component class",name:"className",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Icon color",name:"color",required:!1,type:{name:"string | undefined"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string | undefined"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:25},description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType | undefined"}},isFill:{defaultValue:{value:!0},description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean | undefined"}},isStroke:{defaultValue:{value:!1},description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:!1},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isClickable:{defaultValue:{value:!1},description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean | undefined"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string | undefined"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string | undefined"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},id:{defaultValue:null,description:"Sets component id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dataTip:{defaultValue:{value:""},description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Data when user hover on icon",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:IconButton_IconButton.__docgenInfo,name:"IconButton",path:"components/icon-button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"Sets component class",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Icon color",name:"color",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"25"},description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType"}},isFill:{defaultValue:{value:"true"},description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean"}},isStroke:{defaultValue:{value:"false"},description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isClickable:{defaultValue:{value:"false"},description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},id:{defaultValue:null,description:"Sets component id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},dataTip:{defaultValue:{value:""},description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Data when user hover on icon",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/icon-button/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/icon-button/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}try{IconButton.displayName="IconButton",__function.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"Sets component class",name:"className",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Icon color",name:"color",required:!1,type:{name:"string | undefined"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string | undefined"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:25},description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType | undefined"}},isFill:{defaultValue:{value:!0},description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean | undefined"}},isStroke:{defaultValue:{value:!1},description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:!1},description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isClickable:{defaultValue:{value:!1},description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean | undefined"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string | undefined"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string | undefined"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},id:{defaultValue:null,description:"Sets component id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dataTip:{defaultValue:{value:""},description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Data when user hover on icon",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/icon-button/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/icon-button/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/Text.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,s:()=>StyledAutoDirSpan});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./themes/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./utils/index.ts");const styleCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
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
`,__WEBPACK_DEFAULT_EXPORT__=StyledText},"./components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,c:()=>TextPure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Text_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/Text.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextPure=({title,tag,as,fontSize="13px",fontWeight,color,textAlign="left",onClick,dir,children,...rest})=>{const isAutoDir="auto"===dir,dirProp=isAutoDir?{}:{dir};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.A,{fontSizeProp:fontSize,fontWeightProp:fontWeight,colorProp:color,textAlign,as:!as&&tag?tag:as,title,"data-testid":"text",onClick,...dirProp,...rest,children:isAutoDir?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.s,{dir:"auto",children}):children})};TextPure.displayName="TextPure";const Text=react__WEBPACK_IMPORTED_MODULE_0__.memo(TextPure);Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",__function.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string | undefined"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean | undefined"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/text/Text.tsx")}}]);
//# sourceMappingURL=components-main-button-mobile-MainButtonMobile-stories.3997b288.iframe.bundle.js.map