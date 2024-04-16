"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[1438],{"./components/color-theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J2:()=>ColorTheme,bk:()=>ThemeId});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts");const LoginContainer=styled_components_browser_esm.Ay.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 56px auto 0 auto;
  max-width: 960px;
  z-index: 0;

  margin-bottom: ${props=>props.isRegisterContainerVisible?"100px":"16px"};

  .remember-wrapper {
    max-width: 170px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buttonWrapper {
    margin-bottom: 8px;
    width: 100%;
  }

  @media ${utils.n5} {
    max-width: 480px;
  }

  @media ${utils.Hw} {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: calc(100% - 32px);
  }

  .socialButton {
    min-height: 40px;
  }

  .or-label,
  .login-or-access-text {
    min-height: 18px;
  }

  .login-or-access-text {
    text-transform: lowercase;
    color: ${props=>props.theme.login.orTextColor};
  }

  .recover-link {
    min-height: 19px;
    margin-top: 20px;
  }

  .greeting-title {
    width: 100%;
    max-width: 480px;
    padding-bottom: 32px;
    min-height: 32px;
    color: ${props=>props.theme.login.headerColor};

    @media ${utils.Hw} {
      padding-top: 32px;
    }
  }

  .more-label {
    padding-top: 18px;
  }

  .or-label {
    color: ${props=>props.theme.login.orTextColor};
    margin: 0 8px;
  }

  .line {
    display: flex;
    width: 100%;
    align-items: center;
    color: ${props=>props.theme.login.orLineColor};
    padding: 32px 0;
  }

  .line:before,
  .line:after {
    content: "";
    flex-grow: 1;
    background: ${props=>props.theme.login.orLineColor};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px;
  }

  .code-input-container {
    margin-top: 32px;
    text-align: center;
  }

  .not-found-code {
    margin-top: 32px;
  }

  .code-input-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-top: 16px;
    padding: 14px 12px;
    text-align: center;
    font-weight: 600;
    font-size: ${props=>props.theme.getCorrectFontSize("11px")};
    line-height: 12px;
    color: #333;
    svg {
      margin: 8px;
    }
  }

  .code-input-bar.warning {
    background: #f7e6be;
    margin-bottom: 16px;
  }

  .code-input-bar.error {
    background: #f7cdbe;
  }

  .auth-form-container {
    width: 100%;

    .field-body {
      input,
      .password-input > div {
        background: ${props=>props.theme.input.backgroundColor};
        color: ${props=>props.theme.input.color};
        //border-color: ${props=>props.theme.input.borderColor};
      }
    }

    .login-forgot-wrapper {
      margin-bottom: 14px;
      .login-checkbox-wrapper {
        display: flex;
        //align-items: center;

        .login-checkbox {
          display: flex;
          align-items: flex-start;

          svg {
            ${({theme})=>"rtl"===theme.interfaceDirection?"margin-left: 8px !important;":"margin-right: 8px !important;"}
            rect {
              fill: ${props=>props.theme.checkbox.fillColor};
              stroke: ${props=>props.theme.checkbox.borderColor};
            }

            path {
              fill: ${props=>props.theme.checkbox.arrowColor};
            }
          }

          .help-button {
            svg {
              path {
                fill: ${props=>props.theme.login.helpButton};
              }
            }
          }

          .checkbox-text {
            color: ${props=>props.theme.checkbox.arrowColor};
          }

          label {
            justify-content: center;
          }
        }

        .remember-helper-wrapper {
          display: flex;
          gap: 4px;
        }
      }

      .login-link {
        line-height: 18px;

        ${({theme})=>"rtl"===theme.interfaceDirection?"margin-right: auto;":"margin-left: auto;"}
      }
    }

    .login-button {
      margin-top: 8px;
    }

    .login-button-dialog {
      ${({theme})=>"rtl"===theme.interfaceDirection?"margin-left: 8px;":"margin-right: 8px;"}
    }

    .login-bottom-border {
      width: 100%;
      height: 1px;
      background: #eceef1;
    }

    .login-bottom-text {
      margin: 0 8px;
    }

    /* .login-or-access {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;

      & > :first-child {
        margin-top: 24px;
      }
    } */
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${props=>"invitation"===props.type?"26.56px":"44px"};
    padding-bottom: ${props=>"invitation"===props.type?"16px":"40px"};

    svg {
      path:last-child {
        fill: ${props=>props.theme.client.home.logoColor};
      }
    }

    @media ${utils.Hw} {
      display: none;
    }
  }

  .workspace-title {
    color: ${props=>props.theme.login.titleColor};
    margin-bottom: 16px;

    @media ${utils.Hw} {
      margin-top: 32px;
    }
  }

  .code-description {
    color: ${props=>props.theme.login.textColor};
  }
`;LoginContainer.defaultProps={theme:themes.C6};const sub_components_LoginContainer=LoginContainer;let ThemeId=function(ThemeId){return ThemeId.IconWrapper="iconWrapper",ThemeId.IconButton="iconButton",ThemeId.IconButtonPin="iconButtonPin",ThemeId.IconButtonMute="iconButtonMute",ThemeId.IndicatorFilterButton="indicatorFilterButton",ThemeId.FilterBlockItemTag="filterBlockItemTag",ThemeId.VersionBadge="versionBadge",ThemeId.LinkForgotPassword="linkForgotPassword",ThemeId.LoadingButton="loadingButton",ThemeId.InfoPanelToggle="infoPanelToggle",ThemeId.Link="link",ThemeId.IndicatorLoader="indicatorLoader",ThemeId.Progress="progress",ThemeId.SubmenuText="submenuText",ThemeId}({});var react=__webpack_require__("../../node_modules/react/index.js");const selectedItemTag=styled_components_browser_esm.AH`
  background: ${props=>props.theme.filterInput.filter.selectedItem.background};
  border-color: ${props=>props.theme.filterInput.filter.selectedItem.border};
`,StyledFilterBlockItemTag=styled_components_browser_esm.Ay.div`
  height: 28px;
  max-height: 28px;

  max-width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: ${props=>props.theme.filterInput.filter.border};
  border-radius: 16px;

  box-sizing: border-box;

  padding: 4px 15px;

  cursor: pointer;

  ${props=>props.isSelected&&selectedItemTag}

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;StyledFilterBlockItemTag.defaultProps={theme:themes.C6};const sub_components_StyledFilterBlockItemTag=StyledFilterBlockItemTag;sub_components_StyledFilterBlockItemTag.defaultProps={theme:themes.C6};const filterBlockItemTag=(0,styled_components_browser_esm.Ay)(sub_components_StyledFilterBlockItemTag)((({$currentColorScheme,isSelected})=>$currentColorScheme&&isSelected&&styled_components_browser_esm.AH`
    background: ${$currentColorScheme.main?.accent};
    border-color: ${$currentColorScheme.main?.accent};

    .filter-text {
      color: ${$currentColorScheme.text?.accent};
    }

    &:hover {
      background: ${$currentColorScheme.main?.accent};
      border-color: ${$currentColorScheme.main?.accent};
    }
  `));var common_icons_style=__webpack_require__("./utils/common-icons-style.ts"),icon_button=__webpack_require__("./components/icon-button/index.tsx");const StyledIcon=(0,styled_components_browser_esm.Ay)(icon_button.K)`
  ${common_icons_style.A}
`,iconButton=(0,styled_components_browser_esm.Ay)(StyledIcon)`
  ${utils.Ww}
  svg {
    path {
      fill: ${props=>(props.shared||props.locked||props.isFavorite||props.isEditing)&&props.$currentColorScheme?.main?.accent};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${props=>props.$currentColorScheme?.main?.accent};
      }
    }
  }
`,sub_components_StyledMuteIcon=(0,styled_components_browser_esm.Ay)(icon_button.K)`
  ${utils.Ww}

  svg {
    path:first-child {
      stroke: ${props=>props.theme.filesSection.rowView.pinColor};
    }
    path {
      fill: ${props=>props.theme.filesSection.rowView.pinColor};
    }
  }
`,IconButtonMuteTheme=(0,styled_components_browser_esm.Ay)(sub_components_StyledMuteIcon)`
  ${utils.Ww}
  svg {
    path:first-child {
      stroke: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
    }
    path {
      fill: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
    }
    rect {
      fill: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
      }
    }
  }
`;IconButtonMuteTheme.defaultProps={theme:themes.C6};const iconButtonMute=IconButtonMuteTheme,sub_components_StyledPinIcon=(0,styled_components_browser_esm.Ay)(icon_button.K)`
  ${utils.Ww}

  svg {
    path {
      fill: ${props=>props.theme.filesSection.rowView.pinColor};
    }
  }

  :hover {
    svg {
      path {
        fill: ${props=>props.theme.filesSection.rowView.pinColor};
      }
    }
  }
`,IconButtonPinTheme=(0,styled_components_browser_esm.Ay)(sub_components_StyledPinIcon)`
  margin-top: 2px;
  ${utils.Ww}
  svg {
    path {
      fill: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent};
      }
    }
  }
`;IconButtonPinTheme.defaultProps={theme:themes.C6};const iconButtonPin=IconButtonPinTheme,StyledIconWrapper=styled_components_browser_esm.Ay.div`
  width: 17px;
  display: flex;
  align-items: ${props=>props.isRoot?"center":"flex-end"};
  justify-content: center;

  svg {
    path {
      fill: ${props=>props.theme.navigation.icon.fill};
    }

    circle {
      stroke: ${props=>props.theme.navigation.icon.fill};
    }

    path:first-child {
      fill: none !important;
      stroke: ${props=>props.theme.navigation.icon.stroke};
    }
  }
`;StyledIconWrapper.defaultProps={theme:themes.C6};const sub_components_StyledIconWrapper=StyledIconWrapper,iconWrapper=(0,styled_components_browser_esm.Ay)(sub_components_StyledIconWrapper)((({$currentColorScheme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    svg {
      path:nth-child(2) {
        fill: ${$currentColorScheme.main?.accent};
      }
      circle {
        stroke: ${$currentColorScheme.main?.accent};
      }
    }
  `)),StyledIndicator=styled_components_browser_esm.Ay.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: ${props=>props.theme.filterInput.filter.indicatorColor};
  position: absolute;
  top: 25px;

  ${({theme})=>"rtl"===theme.interfaceDirection?"right: 25px;":"left: 25px;"}

  z-index: 10;
`;StyledIndicator.defaultProps={theme:themes.C6};const sub_components_StyledIndicator=StyledIndicator,indicatorFilterButton=(0,styled_components_browser_esm.Ay)(sub_components_StyledIndicator)((({$currentColorScheme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    background: ${$currentColorScheme.main?.accent};

    &:hover {
      background: ${$currentColorScheme.main?.accent};
    }
  `)),StyledWrapper=styled_components_browser_esm.Ay.div`
  #ipl-progress-indicator {
    position: fixed;
    z-index: 390;
    top: 0;

    ${({theme})=>"rtl"===theme.interfaceDirection?"right: -6px;":"left: -6px;"}
    width: 0%;
    height: 3px;
    -moz-border-radius: 1px;
    -webkit-border-radius: 1px;
    border-radius: 1px;

    @media ${utils.Hw} {
      top: 48px;
    }
  }
`;StyledWrapper.defaultProps={theme:themes.C6};const sub_components_StyledWrapper=StyledWrapper;sub_components_StyledWrapper.defaultProps={theme:themes.C6};const indicatorLoader=(0,styled_components_browser_esm.Ay)(sub_components_StyledWrapper)((({$currentColorScheme,theme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    #ipl-progress-indicator {
      background-color: ${theme.isBase?$currentColorScheme.main?.accent:"#FFFFFF"};

      &:hover {
        background-color: ${theme.isBase?$currentColorScheme.main?.accent:"#FFFFFF"};
      }
    }
  `));sub_components_StyledWrapper.defaultProps={theme:themes.C6};const infoPanelToggle=(0,styled_components_browser_esm.Ay)(sub_components_StyledWrapper)((({$currentColorScheme,isInfoPanelVisible})=>$currentColorScheme&&isInfoPanelVisible&&styled_components_browser_esm.AH`
    .info-panel-toggle-bg {
      path {
        fill: ${$currentColorScheme.main?.accent};
      }
      &:hover {
        path {
          fill: ${$currentColorScheme.main?.accent};
        }
      }
    }
  `));var Link_styled=__webpack_require__("./components/link/Link.styled.tsx");const styled_components_link=(0,styled_components_browser_esm.Ay)(Link_styled.A)`
  color: ${props=>props.$currentColorScheme?.main?.accent};

  &:hover {
    color: ${props=>!props.noHover&&props.$currentColorScheme?.main?.accent};
    text-decoration: underline;
  }
`,linkForgotPassword=(0,styled_components_browser_esm.Ay)(sub_components_LoginContainer)((({$currentColorScheme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    .login-link {
      color: ${$currentColorScheme?.main?.accent};
    }
  `)),sub_components_StyledCircleWrap=styled_components_browser_esm.Ay.div`
  width: 16px;
  height: 16px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
`,loadingButton=(0,styled_components_browser_esm.Ay)(sub_components_StyledCircleWrap)((({$currentColorScheme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    .circle__mask .circle__fill {
      background-color: ${$currentColorScheme.main?.accent} !important;
    }

    .loading-button {
      color: ${$currentColorScheme.main?.accent};
    }
  `)),StyledPreparationPortalProgress=styled_components_browser_esm.Ay.div`
  .preparation-portal_progress {
    display: flex;
    margin-bottom: 16px;
    position: relative;
    .preparation-portal_progress-bar {
      padding: 2px;
      box-sizing: border-box;
      border-radius: 6px;
      width: 100%;
      height: 24px;
      background-color: ${props=>props.theme.preparationPortalProgress.backgroundColor};
    }
    .preparation-portal_progress-line {
      border-radius: 5px;
      width: ${props=>props.percent}%;
      height: 20px;
      transition-property: width;
      transition-duration: 0.9s;
    }
    .preparation-portal_percent {
      position: absolute;
      font-size: ${props=>props.theme.getCorrectFontSize("14px")};
      font-weight: 600;
      color: ${props=>props.percent&&props.percent>50?props.theme.preparationPortalProgress.colorPercentBig:props.theme.preparationPortalProgress.colorPercentSmall};
      top: 2px;
      ${({theme})=>"rtl"===theme.interfaceDirection?"right: calc(50% - 9px);":"left: calc(50% - 9px);"}
    }
  }
`;StyledPreparationPortalProgress.defaultProps={theme:themes.C6};const sub_components_StyledPreparationPortalProgress=StyledPreparationPortalProgress;sub_components_StyledPreparationPortalProgress.defaultProps={theme:themes.C6};const progress=(0,styled_components_browser_esm.Ay)(sub_components_StyledPreparationPortalProgress)((({$currentColorScheme,theme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    .preparation-portal_progress-line {
      background: ${theme.isBase?$currentColorScheme.main?.accent:"#FFFFFF"};
    }
  `));var box=__webpack_require__("./components/box/index.tsx");const versionBadge=(0,styled_components_browser_esm.Ay)(box.a)((({$currentColorScheme,$isVersion})=>$currentColorScheme&&styled_components_browser_esm.AH`
    .version_badge-text {
      color: ${$isVersion&&$currentColorScheme.text?.accent};
    }
  `));var Text_styled=__webpack_require__("./components/text/Text.styled.ts");Text_styled.A.defaultProps={theme:themes.C6};const submenuText=(0,styled_components_browser_esm.Ay)(Text_styled.A)((({$currentColorScheme,isActive,theme})=>$currentColorScheme&&styled_components_browser_esm.AH`
    color: ${isActive&&theme.isBase&&$currentColorScheme.main?.accent} !important;

    &:hover {
      color: ${isActive&&theme.isBase&&$currentColorScheme.main?.accent} !important;
    }
  `));var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ColorTheme=(0,react.forwardRef)((({isVersion,themeId,hoverColor,...props},ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(()=>{switch(themeId){case ThemeId.FilterBlockItemTag:return(0,jsx_runtime.jsx)(filterBlockItemTag,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.IconButton:return(0,jsx_runtime.jsx)(iconButton,{...props,themeId,$currentColorScheme:currentColorScheme});case ThemeId.IconButtonMute:return(0,jsx_runtime.jsx)(iconButtonMute,{...props,themeId,$currentColorScheme:currentColorScheme});case ThemeId.IconButtonPin:return(0,jsx_runtime.jsx)(iconButtonPin,{...props,themeId,$currentColorScheme:currentColorScheme});case ThemeId.IconWrapper:return(0,jsx_runtime.jsx)(iconWrapper,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.IndicatorFilterButton:return(0,jsx_runtime.jsx)(indicatorFilterButton,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.IndicatorLoader:return(0,jsx_runtime.jsx)(indicatorLoader,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.InfoPanelToggle:return(0,jsx_runtime.jsx)(infoPanelToggle,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.LinkForgotPassword:return(0,jsx_runtime.jsx)(linkForgotPassword,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.LoadingButton:return(0,jsx_runtime.jsx)(loadingButton,{...props,$currentColorScheme:currentColorScheme,ref});case ThemeId.Progress:return(0,jsx_runtime.jsx)(progress,{...props,themeId:ThemeId.Progress,$currentColorScheme:currentColorScheme,ref});case ThemeId.VersionBadge:return(0,jsx_runtime.jsx)(versionBadge,{...props,$currentColorScheme:currentColorScheme});case ThemeId.Link:{const onClickAction=e=>{"onClick"in props&&props.onClick?.(e)};return(0,jsx_runtime.jsx)(styled_components_link,{...props,onClick:onClickAction,themeId:ThemeId.Link,$currentColorScheme:currentColorScheme})}case ThemeId.SubmenuText:return(0,jsx_runtime.jsx)(submenuText,{...props,$currentColorScheme:currentColorScheme});default:return null}})()}));ColorTheme.displayName="ColorTheme";try{ColorTheme.displayName="ColorTheme",ColorTheme.__docgenInfo={description:"",displayName:"ColorTheme",props:{themeId:{defaultValue:null,description:"",name:"themeId",required:!0,type:{name:"enum",value:[{value:'"iconWrapper"'},{value:'"iconButton"'},{value:'"iconButtonPin"'},{value:'"iconButtonMute"'},{value:'"indicatorFilterButton"'},{value:'"filterBlockItemTag"'},{value:'"versionBadge"'},{value:'"linkForgotPassword"'},{value:'"loadingButton"'},{value:'"infoPanelToggle"'},{value:'"link"'},{value:'"indicatorLoader"'},{value:'"progress"'},{value:'"submenuText"'}]}},shared:{defaultValue:null,description:"",name:"shared",required:!1,type:{name:"boolean"}},locked:{defaultValue:null,description:"",name:"locked",required:!1,type:{name:"boolean"}},isFavorite:{defaultValue:null,description:"",name:"isFavorite",required:!1,type:{name:"boolean"}},isEditing:{defaultValue:null,description:"",name:"isEditing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets component class\nAccepts class\nSets the class name",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Icon color\nLink color\nSpecifies the text color",name:"color",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType"}},isFill:{defaultValue:null,description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean"}},isStroke:{defaultValue:null,description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isClickable:{defaultValue:null,description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | ((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | ((e: MouseEvent<...>) => void) | ((e: MouseEvent<...>) => void)"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},id:{defaultValue:null,description:"Sets component id\nAccepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},dataTip:{defaultValue:null,description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Data when user hover on icon\nUsed as HTML `title` property\nTitle",name:"title",required:!1,type:{name:"string"}},isVersion:{defaultValue:null,description:"",name:"isVersion",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},isRoot:{defaultValue:null,description:"",name:"isRoot",required:!1,type:{name:"boolean"}},isInfoPanelVisible:{defaultValue:null,description:"",name:"isInfoPanelVisible",required:!1,type:{name:"boolean"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"TTheme"}},$isVersion:{defaultValue:null,description:"",name:"$isVersion",required:!1,type:{name:"boolean"}},noHover:{defaultValue:null,description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"Link font size\nSets the font size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"Link font weight\nSets the font weight",name:"fontWeight",required:!1,type:{name:"string | number"}},lineHeight:{defaultValue:null,description:"Line height of the link\nSets the line height",name:"lineHeight",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"Used as HTML `href` property",name:"href",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"Sets font weight\nSets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean"}},isSemitransparent:{defaultValue:null,description:"Sets the 'opacity' css-property to 0.5. Usually applied for the users with \"pending\" status",name:"isSemitransparent",required:!1,type:{name:"boolean"}},isTextOverflow:{defaultValue:null,description:"Activates or deactivates _text-overflow_ CSS property with ellipsis (' … ') value",name:"isTextOverflow",required:!1,type:{name:"boolean"}},rel:{defaultValue:null,description:"Used as HTML `rel` property",name:"rel",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"Used as HTML `tabindex` property",name:"tabIndex",required:!1,type:{name:"number"}},target:{defaultValue:null,description:"Specifies where the linked document will open once the link is clicked.",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},type:{defaultValue:null,description:"Link type",name:"type",required:!1,type:{name:"enum",value:[{value:'"page"'},{value:'"action"'}]}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string"}},enableUserSelect:{defaultValue:null,description:"Allows enabling UserSelect",name:"enableUserSelect",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:null,description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/color-theme/ColorTheme.tsx#ColorTheme"]={docgenInfo:ColorTheme.__docgenInfo,name:"ColorTheme",path:"components/color-theme/ColorTheme.tsx#ColorTheme"})}catch(__react_docgen_typescript_loader_error){}try{ColorTheme.displayName="ColorTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ColorTheme",props:{themeId:{defaultValue:null,description:"",name:"themeId",required:!0,type:{name:"ThemeId"}},shared:{defaultValue:null,description:"",name:"shared",required:!1,type:{name:"boolean | undefined"}},locked:{defaultValue:null,description:"",name:"locked",required:!1,type:{name:"boolean | undefined"}},isFavorite:{defaultValue:null,description:"",name:"isFavorite",required:!1,type:{name:"boolean | undefined"}},isEditing:{defaultValue:null,description:"",name:"isEditing",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Sets component class\nAccepts class\nSets the class name",name:"className",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Icon color\nLink color\nSpecifies the text color",name:"color",required:!1,type:{name:"string | undefined"}},hoverColor:{defaultValue:null,description:"Icon color on hover action",name:"hoverColor",required:!1,type:{name:"string | undefined"}},clickColor:{defaultValue:null,description:"Icon color on click action",name:"clickColor",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"Button height and width value",name:"size",required:!1,type:{name:"number | IconSizeType | undefined"}},isFill:{defaultValue:null,description:"Determines if icon fill is needed",name:"isFill",required:!1,type:{name:"boolean | undefined"}},isStroke:{defaultValue:null,description:"Determines if icon stroke is needed",name:"isStroke",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to present a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isClickable:{defaultValue:null,description:"Sets cursor value",name:"isClickable",required:!1,type:{name:"boolean | undefined"}},iconNode:{defaultValue:null,description:"Icon node",name:"iconNode",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!1,type:{name:"string | undefined"}},iconHoverName:{defaultValue:null,description:"Icon name on hover action",name:"iconHoverName",required:!1,type:{name:"string | undefined"}},iconClickName:{defaultValue:null,description:"Icon name on click action",name:"iconClickName",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets a button callback function triggered when the button is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | ((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | ((e: MouseEvent<...>) => void) | ((e: MouseEvent<...>) => void) | undefined"}},onMouseEnter:{defaultValue:null,description:"Sets a button callback function triggered when the cursor enters the area",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},onMouseDown:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves down",name:"onMouseDown",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseUp:{defaultValue:null,description:"Sets a button callback function triggered when the cursor moves up",name:"onMouseUp",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined"}},onMouseLeave:{defaultValue:null,description:"Sets a button callback function triggered when the cursor leaves the icon",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},id:{defaultValue:null,description:"Sets component id\nAccepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dataTip:{defaultValue:null,description:"The data-* attribute is used to store custom data private to the page or application. Required to display a tip over the hovered element",name:"dataTip",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Data when user hover on icon\nUsed as HTML `title` property\nTitle",name:"title",required:!1,type:{name:"string | undefined"}},isVersion:{defaultValue:null,description:"",name:"isVersion",required:!1,type:{name:"boolean | undefined"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},isRoot:{defaultValue:null,description:"",name:"isRoot",required:!1,type:{name:"boolean | undefined"}},isInfoPanelVisible:{defaultValue:null,description:"",name:"isInfoPanelVisible",required:!1,type:{name:"boolean | undefined"}},percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"TTheme"}},$isVersion:{defaultValue:null,description:"",name:"$isVersion",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:null,description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean | undefined"}},fontSize:{defaultValue:null,description:"Link font size\nSets the font size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"Link font weight\nSets the font weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},lineHeight:{defaultValue:null,description:"Line height of the link\nSets the line height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},href:{defaultValue:null,description:"Used as HTML `href` property",name:"href",required:!1,type:{name:"string | undefined"}},isBold:{defaultValue:null,description:"Sets font weight\nSets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isSemitransparent:{defaultValue:null,description:"Sets the 'opacity' css-property to 0.5. Usually applied for the users with \"pending\" status",name:"isSemitransparent",required:!1,type:{name:"boolean | undefined"}},isTextOverflow:{defaultValue:null,description:"Activates or deactivates _text-overflow_ CSS property with ellipsis (' … ') value",name:"isTextOverflow",required:!1,type:{name:"boolean | undefined"}},rel:{defaultValue:null,description:"Used as HTML `rel` property",name:"rel",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Used as HTML `tabindex` property",name:"tabIndex",required:!1,type:{name:"number | undefined"}},target:{defaultValue:null,description:"Specifies where the linked document will open once the link is clicked.",name:"target",required:!1,type:{name:"LinkTarget | undefined"}},type:{defaultValue:null,description:"Link type",name:"type",required:!1,type:{name:"LinkType | undefined"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string | undefined"}},enableUserSelect:{defaultValue:null,description:"Allows enabling UserSelect",name:"enableUserSelect",required:!1,type:{name:"boolean | undefined"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean | undefined"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:null,description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/color-theme/ColorTheme.tsx#ColorTheme"]={docgenInfo:ColorTheme.__docgenInfo,name:"ColorTheme",path:"components/color-theme/ColorTheme.tsx#ColorTheme"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=1438.839f3353.iframe.bundle.js.map