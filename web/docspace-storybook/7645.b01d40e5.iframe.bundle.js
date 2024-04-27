"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[7645],{"./components/checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox,M:()=>CheckboxPure});var _rect,_rect2,react=__webpack_require__("../../node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const checkbox_indeterminate_react=function SvgCheckboxindeterminatereact(props){return react.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_rect||(_rect=react.createElement("rect",{x:.5,y:.5,width:15,height:15,rx:2.5,fill:"#fff",stroke:"#D0D5DA"})),_rect2||(_rect2=react.createElement("rect",{x:3,y:3,width:10,height:10,rx:2,fill:"#333"})))};var checkbox_checked_react_rect,_path;function checkbox_checked_react_extends(){return checkbox_checked_react_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},checkbox_checked_react_extends.apply(this,arguments)}const checkbox_checked_react=function SvgCheckboxcheckedreact(props){return react.createElement("svg",checkbox_checked_react_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),checkbox_checked_react_rect||(checkbox_checked_react_rect=react.createElement("rect",{x:.5,y:.5,width:15,height:15,rx:2.5,fill:"#fff",stroke:"#D0D5DA"})),_path||(_path=react.createElement("path",{d:"M7.98 11.635a1.3 1.3 0 01-1.807 0l-2.799-2.73a1.224 1.224 0 010-1.762 1.3 1.3 0 011.806 0l1.668 1.626a.33.33 0 00.456 0l4.515-4.404a1.3 1.3 0 011.807 0c.24.233.374.55.374.88 0 .331-.134.648-.374.882l-5.647 5.508z",fill:"#333"})))};var checkbox_react_rect;function checkbox_react_extends(){return checkbox_react_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},checkbox_react_extends.apply(this,arguments)}const checkbox_react=function SvgCheckboxreact(props){return react.createElement("svg",checkbox_react_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),checkbox_react_rect||(checkbox_react_rect=react.createElement("rect",{x:.5,y:.5,width:15,height:15,rx:2.5,fill:"#fff",stroke:"#D0D5DA"})))};var components_text=__webpack_require__("./components/text/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts");const StyledLabel=styled_components_browser_esm.Ay.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;

  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .checkbox {
    margin-right: 12px;
    ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
        margin-right: 0;
        margin-left: 12px;
      `}
    overflow: visible;
    outline: none;
  }

  svg {
    ${props=>props.hasError&&styled_components_browser_esm.AH`
        rect {
          stroke: ${props.theme.checkbox.errorColor} !important;
        }
        path {
          fill: ${props.theme.checkbox.errorColor} !important;
        }
      `}
    ${props=>props.isIndeterminate||props.isDisabled?!props.isDisabled&&styled_components_browser_esm.AH`
            rect {
              fill: ${props.theme.checkbox.fillColor};
              stroke: ${props.theme.checkbox.borderColor};
            }
            }
            rect:last-child {
              fill: ${props.theme.checkbox.indeterminateColor};
              stroke: ${props.theme.checkbox.fillColor};
            }
          `:styled_components_browser_esm.AH`
            rect {
              fill: ${props.theme.checkbox.fillColor};
              stroke: ${props.theme.checkbox.borderColor};
            }
            path {
              fill: ${props.theme.checkbox.arrowColor};
            }
            &:focus {
              outline: none;
              rect {
                stroke: ${props.theme.checkbox.focusColor};
              }
            }
          `}

    ${props=>props.isDisabled&&!props.isIndeterminate?styled_components_browser_esm.AH`
            rect {
              fill: ${props.theme.checkbox.disableFillColor};
              stroke: ${props.theme.checkbox.disableBorderColor};
            }
            path {
              fill: ${props.theme.checkbox.disableArrowColor};
            }
          `:props.isDisabled&&styled_components_browser_esm.AH`
            rect {
              fill: ${props.theme.checkbox.disableFillColor};
              stroke: ${props.theme.checkbox.disableBorderColor};
            }
            rect:last-child {
              fill: ${props.theme.checkbox.disableIndeterminateColor};
            }
          `}
  }
  &:hover {
    ${props=>props.isDisabled?styled_components_browser_esm.AH`
            cursor: not-allowed;
          `:props.isIndeterminate?styled_components_browser_esm.AH`
          cursor: pointer;
          rect:nth-child(1) {
              stroke: ${props.theme.checkbox.hoverBorderColor};
            }
          rect:last-child {
              fill: ${props.theme.checkbox.hoverIndeterminateColor};
            `:styled_components_browser_esm.AH`
              cursor: pointer;

              rect:nth-child(1) {
                stroke: ${props.theme.checkbox.hoverBorderColor};
              }
            `}
  }

  &:active {
    ${props=>props.isDisabled?styled_components_browser_esm.AH`
            cursor: not-allowed;
          `:props.isIndeterminate?styled_components_browser_esm.AH`
          cursor: pointer;
          rect:nth-child(1) {
              stroke: ${props.theme.checkbox.pressedBorderColor};
              fill: ${props.theme.checkbox.pressedFillColor};
            }
          rect:last-child {
              fill: ${props.theme.checkbox.hoverIndeterminateColor};
            `:styled_components_browser_esm.AH`
              cursor: pointer;

              rect:nth-child(1) {
                stroke: ${props.theme.checkbox.pressedBorderColor};
                fill: ${props.theme.checkbox.pressedFillColor};
              }
            `}
  }

  .wrapper {
    display: inline-block;
  }

  .checkbox-text {
    color: ${props=>props.isDisabled?props.theme.text.disableColor:props.hasError?props.theme.checkbox.errorColor:props.theme.text.color};
    margin-top: -2px;
  }

  .help-button {
    display: inline-block;

    ${({theme})=>"rtl"===theme.interfaceDirection?"margin-right: 4px;":"margin-left: 4px;"}
  }
`;StyledLabel.defaultProps={theme:themes.C6};const HiddenInput=styled_components_browser_esm.Ay.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RenderCheckboxIcon=({isChecked,isIndeterminate,tabIndex})=>isIndeterminate?(0,jsx_runtime.jsx)(checkbox_indeterminate_react,{tabIndex,className:"checkbox not-selectable"}):isChecked?(0,jsx_runtime.jsx)(checkbox_checked_react,{tabIndex,className:"checkbox not-selectable"}):(0,jsx_runtime.jsx)(checkbox_react,{tabIndex,className:"checkbox not-selectable"}),CheckboxPure=({id,className,style,label,value,title,truncate=!1,hasError=!1,onChange,isChecked=!1,isIndeterminate=!1,isDisabled,name,tabIndex=-1,helpButton,...rest})=>{const[checked,setChecked]=react.useState(isChecked),ref=react.useRef(null),prevProps=react.useRef({indeterminate:!1,prevChecked:isChecked});react.useEffect((()=>{prevProps.current.indeterminate!==isIndeterminate&&ref.current&&(prevProps.current.indeterminate=isIndeterminate||!1,ref.current.indeterminate=isIndeterminate||!1),prevProps.current.prevChecked!==isChecked&&(setChecked(isChecked),prevProps.current.prevChecked=isChecked)}),[isIndeterminate,isChecked,checked]);return(0,jsx_runtime.jsxs)(StyledLabel,{id,style,isDisabled:isDisabled||!1,isIndeterminate:isIndeterminate||!1,className,title,hasError:hasError||!1,"data-testid":"checkbox",children:[(0,jsx_runtime.jsx)(HiddenInput,{name,type:"checkbox",checked,disabled:isDisabled,ref,value,onChange:e=>{isDisabled&&e.preventDefault(),e.stopPropagation(),setChecked(e.target.checked),onChange?.(e)},tabIndex:-1,...rest}),(0,jsx_runtime.jsx)(RenderCheckboxIcon,{tabIndex:tabIndex||0,isChecked:checked||!1,isIndeterminate:isIndeterminate||!1}),(0,jsx_runtime.jsxs)("div",{className:"wrapper",children:[label&&(0,jsx_runtime.jsx)(components_text.E,{as:"span",title,truncate,className:"checkbox-text",children:label}),helpButton&&(0,jsx_runtime.jsx)("span",{className:"help-button",onClick:e=>e.preventDefault(),children:helpButton})]})]})};CheckboxPure.displayName="CheckboxPure",CheckboxPure.displayName="CheckboxPure";const Checkbox=react.memo(CheckboxPure);try{CheckboxPure.displayName="CheckboxPure",CheckboxPure.__docgenInfo={description:"",displayName:"CheckboxPure",props:{id:{defaultValue:null,description:"Used as HTML id property",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Used as HTML `name` property",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Value of the input",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label of the input",name:"label",required:!1,type:{name:"string"}},isChecked:{defaultValue:{value:"false"},description:"Sets the checked state of the checkbox",name:"isChecked",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"The state is displayed as a rectangle in the checkbox when set to true",name:"isIndeterminate",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Disables the Checkbox input",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Is triggered whenever the CheckboxInput is clicked",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"false"},description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},helpButton:{defaultValue:null,description:"Renders the help button",name:"helpButton",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:"-1"},description:"Checkbox tab index",name:"tabIndex",required:!1,type:{name:"number"}},hasError:{defaultValue:{value:"false"},description:"Notifies if the error occurs",name:"hasError",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/checkbox/Checkbox.tsx#CheckboxPure"]={docgenInfo:CheckboxPure.__docgenInfo,name:"CheckboxPure",path:"components/checkbox/Checkbox.tsx#CheckboxPure"})}catch(__react_docgen_typescript_loader_error){}try{CheckboxPure.displayName="CheckboxPure",__function.__docgenInfo={description:"",displayName:"CheckboxPure",props:{id:{defaultValue:null,description:"Used as HTML id property",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"Used as HTML `name` property",name:"name",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"Value of the input",name:"value",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Label of the input",name:"label",required:!1,type:{name:"string | undefined"}},isChecked:{defaultValue:{value:!1},description:"Sets the checked state of the checkbox",name:"isChecked",required:!1,type:{name:"boolean | undefined"}},isIndeterminate:{defaultValue:{value:!1},description:"The state is displayed as a rectangle in the checkbox when set to true",name:"isIndeterminate",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Disables the Checkbox input",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Is triggered whenever the CheckboxInput is clicked",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:{value:!1},description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},helpButton:{defaultValue:null,description:"Renders the help button",name:"helpButton",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:-1},description:"Checkbox tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},hasError:{defaultValue:{value:!1},description:"Notifies if the error occurs",name:"hasError",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/checkbox/Checkbox.tsx#CheckboxPure"]={docgenInfo:CheckboxPure.__docgenInfo,name:"CheckboxPure",path:"components/checkbox/Checkbox.tsx#CheckboxPure"})}catch(__react_docgen_typescript_loader_error){}},"./components/checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>_Checkbox__WEBPACK_IMPORTED_MODULE_0__.S});var _Checkbox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/checkbox/Checkbox.tsx")},"./components/context-menu-button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>_ContextMenuButton_enums__WEBPACK_IMPORTED_MODULE_1__.R,V:()=>_ContextMenuButton__WEBPACK_IMPORTED_MODULE_0__.V});var _ContextMenuButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/context-menu-button/ContextMenuButton.tsx"),_ContextMenuButton_enums__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/context-menu-button/ContextMenuButton.enums.ts")},"./components/row/Row.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Row});var react=__webpack_require__("../../node_modules/react/index.js"),main=__webpack_require__("../../node_modules/react-device-detect/main.js"),device=__webpack_require__("./utils/device.ts"),components_checkbox=__webpack_require__("./components/checkbox/index.tsx"),context_menu_button=__webpack_require__("./components/context-menu-button/index.tsx"),context_menu=__webpack_require__("./components/context-menu/index.tsx"),loader=__webpack_require__("./components/loader/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts");const StyledRow=styled_components_browser_esm.Ay.div`
  cursor: default;
  position: relative;
  min-height: ${props=>props.theme.row.minHeight};
  width: ${props=>props.theme.row.width};
  border-bottom: ${props=>props.withoutBorder?"none":"2px solid transparent"};

  ${props=>!props.withoutBorder&&styled_components_browser_esm.AH`
      ::after {
        position: absolute;
        display: block;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: ${props.theme.row.borderBottom};
        content: "";
      }
    `}

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: flex-start;
  align-items: center;
  align-content: center;

  .row-progress-loader {
    ${({theme})=>"rtl"===theme.interfaceDirection?"margin-right: 9px;":"margin-left: 9px;"}
    padding: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    min-width: 32px;
  }

  ${props=>"modern"===props.mode&&styled_components_browser_esm.AH`
      .checkbox {
        display: ${props.checked?"flex":"none"};

        padding: ${(0,utils.cK)("10px 1px 10px 8px",props.theme.interfaceDirection)};
        ${"rtl"===props.theme.interfaceDirection?styled_components_browser_esm.AH`
              margin-right: -4px;
            `:styled_components_browser_esm.AH`
              margin-left: -4px;
            `}

        @media ${utils.n5} {
          ${"rtl"===props.theme.interfaceDirection?styled_components_browser_esm.AH`
                margin-right: -6px;
              `:styled_components_browser_esm.AH`
                margin-left: -6px;
              `}
        }
      }

      .styled-element {
        display: ${props.checked?"none":"flex"};
      }
    `}
`;StyledRow.defaultProps={theme:themes.C6};const StyledContent=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-basis: 100%;

  min-width: ${props=>props.theme.row.minWidth};

  @media ${utils.n5} {
    white-space: nowrap;
    overflow: ${props=>props.theme.row.overflow};
    text-overflow: ${props=>props.theme.row.textOverflow};
    height: ${props=>props.theme.rowContent.height};
  }
`;StyledContent.defaultProps={theme:themes.C6};const StyledCheckbox=styled_components_browser_esm.Ay.div`
  display: flex;
  flex: 0 0 16px;
  height: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;

  min-width: 41px;
  width: 41px;
  ${props=>"modern"===props.mode&&!main.Fr&&styled_components_browser_esm.AH`
      :hover {
        .checkbox {
          display: flex;
          opacity: 1;
          user-select: none;
        }
        .styled-element {
          display: none;
        }
      }
    `}
`,StyledElement=styled_components_browser_esm.Ay.div`
  flex: 0 0 auto;
  display: flex;
  ${({theme})=>"rtl"===theme.interfaceDirection?`\n      margin-left: ${theme.row.element.marginRight};\n      margin-right: ${theme.row.element.marginLeft};\n        `:`\n      margin-right: ${theme.row.element.marginRight};\n      margin-left: ${theme.row.element.marginLeft};\n        `}
  user-select: none;

  .react-svg-icon svg {
    margin-top: 4px;
  }
  /* .react-svg-icon.is-edit svg {
    margin: 4px 0 0 28px;
  } */
`;StyledElement.defaultProps={theme:themes.C6};const StyledContentElement=styled_components_browser_esm.Ay.div`
  margin-top: 0px;
  user-select: none;

  ${props=>"rtl"===props.theme.interfaceDirection?styled_components_browser_esm.AH`
          margin-right: 24px;
        `:styled_components_browser_esm.AH`
          margin-left: 24px;
        `}

  :empty, :has(.badges__quickButtons:empty) {
    display: none;
  }
`,StyledOptionButton=styled_components_browser_esm.Ay.div`
  display: flex;
  width: ${props=>props.spacerWidth&&props.spacerWidth};
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  .expandButton > div:first-child {
    padding: ${({theme})=>(0,utils.cK)(theme.row.optionButton.padding,theme.interfaceDirection)};

    ${({theme})=>"rtl"===theme.interfaceDirection?"margin-left: 0px;":"margin-right: 0px;"}

    @media ${utils.L_} {
      ${({theme})=>"rtl"===theme.interfaceDirection?"margin-left: -1px;":"margin-right: -1px;"}
    }
    @media ${utils.Hw} {
      ${({theme})=>"rtl"===theme.interfaceDirection?"padding-right: 10px;":"padding-left: 10px;"}
    }
  }

  //margin-top: -1px;
  @media ${utils.n5} {
    margin-top: unset;
  }
`;StyledOptionButton.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Row=props=>{const{checked,children,contentElement,contextButtonSpacerWidth="26px",data,element,indeterminate,onSelect,onRowClick,onContextClick,getContextModel,isRoom,withoutBorder=!1,contextTitle,badgesComponent,isArchive,mode="default",inProgress,rowContextClose,className,badgeUrl,isDisabled}=props,cm=(0,react.useRef)(null),row=(0,react.useRef)(null),renderCheckbox=Object.prototype.hasOwnProperty.call(props,"checked"),renderElement=Object.prototype.hasOwnProperty.call(props,"element"),renderContentElement=Object.prototype.hasOwnProperty.call(props,"contentElement"),contextData=data?.contextOptions?data:props,renderContext=Object.prototype.hasOwnProperty.call(contextData,"contextOptions")&&contextData&&contextData.contextOptions&&contextData.contextOptions.length>0,changeCheckbox=()=>{onSelect?.(!checked,data)},onContextMenu=e=>{onContextClick?.(2===e.button),cm.current?.menuRef.current||row.current&&row.current.click(),cm.current&&cm.current.show(e)};let contextMenuHeader={title:"",icon:"",avatar:"",color:""};react.isValidElement(children)&&children.props.item&&(contextMenuHeader={icon:children.props.item.icon,avatar:children.props.item.avatar,title:children.props.item.title?children.props.item.title:children.props.item.displayName||"",color:children.props.item.logo?.color});return(0,jsx_runtime.jsxs)(StyledRow,{ref:row,mode,onContextMenu,withoutBorder,"data-testid":"row",checked,className,children:[inProgress?(0,jsx_runtime.jsx)(loader.a,{className:"row-progress-loader",type:loader.R.oval,size:"16px"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["default"===mode&&renderCheckbox&&(0,jsx_runtime.jsx)(StyledCheckbox,{mode,className:"not-selectable",children:(0,jsx_runtime.jsx)(components_checkbox.S,{className:"checkbox",isChecked:checked,isIndeterminate:indeterminate,onChange:changeCheckbox,isDisabled})}),"modern"===mode&&renderCheckbox&&renderElement&&(0,jsx_runtime.jsxs)(StyledCheckbox,{className:"not-selectable styled-checkbox-container",mode,children:[(0,jsx_runtime.jsx)(StyledElement,{onClick:()=>{main.Fr&&onSelect?.(!0,data)},className:"styled-element",children:element}),(0,jsx_runtime.jsx)(components_checkbox.S,{className:"checkbox",isChecked:checked,isIndeterminate:indeterminate,onChange:changeCheckbox,isDisabled})]}),"default"===mode&&renderElement&&(0,jsx_runtime.jsx)(StyledElement,{onClick:onRowClick,className:"styled-element",children:element})]}),(0,jsx_runtime.jsx)(StyledContent,{onClick:onRowClick,className:"row_content",children}),(0,jsx_runtime.jsxs)(StyledOptionButton,{className:"row_context-menu-wrapper",spacerWidth:contextButtonSpacerWidth,children:[badgesComponent&&badgesComponent,renderContentElement&&(0,jsx_runtime.jsx)(StyledContentElement,{children:contentElement}),renderContext?(0,jsx_runtime.jsx)(context_menu_button.V,{isFill:!0,className:"expandButton",getData:()=>(onContextClick?.(),contextData.contextOptions||[]),directionX:"right",displayType:context_menu_button.R.toggle,onClick:onContextMenu,title:contextTitle}):(0,jsx_runtime.jsx)("div",{className:"expandButton",children:" "}),(0,jsx_runtime.jsx)(context_menu.t,{getContextModel,model:contextData.contextOptions||[],ref:cm,header:contextMenuHeader,withBackdrop:(0,device.Fr)(),onHide:rowContextClose,isRoom,isArchive,badgeUrl})]})]})};Row.displayName="Row";try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{checked:{defaultValue:null,description:"Required for hosting the Checkbox component. Its location is always fixed in the first position.\nIf there is no value, the occupied space is distributed among the other child elements.",name:"checked",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays the child elements",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"Required for displaying a certain element in the row",name:"contentElement",required:!1,type:{name:"ReactNode"}},contextButtonSpacerWidth:{defaultValue:null,description:"Sets the width of the ContextMenuButton component.",name:"contextButtonSpacerWidth",required:!1,type:{name:"string"}},contextOptions:{defaultValue:null,description:"Required for hosting the ContextMenuButton component. It is always located near the right border of the container,\nregardless of the contents of the child elements. If there is no value, the occupied space is distributed among the other child elements.",name:"contextOptions",required:!1,type:{name:"ContextMenuModel[]"}},data:{defaultValue:null,description:"Current row item information.",name:"data",required:!1,type:{name:"TData"}},element:{defaultValue:null,description:"In case Checkbox component is specified, it is located in a fixed order,\notherwise it is located in the first position. If there is no value, the occupied space is distributed among the other child elements.",name:"element",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"If true, this state is shown as a rectangle in the checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"Sets a callback function that is triggered when a row element is selected. Returns data value.",name:"onSelect",required:!1,type:{name:"((checked: boolean, data?: TData) => void)"}},onRowClick:{defaultValue:null,description:"Sets a callback function that is triggered when any element except the checkbox and context menu is clicked.",name:"onRowClick",required:!0,type:{name:"() => void"}},onContextClick:{defaultValue:null,description:"Function that is invoked on clicking the icon button in the context-menu",name:"onContextClick",required:!1,type:{name:"((value?: boolean) => void)"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},inProgress:{defaultValue:null,description:"Displays the loader",name:"inProgress",required:!1,type:{name:"boolean"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"(() => ContextMenuModel[])"}},mode:{defaultValue:null,description:"Changes the row mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"modern"'},{value:'"default"'}]}},withoutBorder:{defaultValue:null,description:"Removes the borders",name:"withoutBorder",required:!1,type:{name:"boolean"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean"}},contextTitle:{defaultValue:null,description:"",name:"contextTitle",required:!1,type:{name:"string"}},badgesComponent:{defaultValue:null,description:"",name:"badgesComponent",required:!1,type:{name:"ReactNode"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean"}},rowContextClose:{defaultValue:null,description:"",name:"rowContextClose",required:!1,type:{name:"(() => void)"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Disables checkbox",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/row/Row.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"components/row/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}try{Row.displayName="Row",__function.__docgenInfo={description:"",displayName:"Row",props:{checked:{defaultValue:null,description:"Required for hosting the Checkbox component. Its location is always fixed in the first position.\nIf there is no value, the occupied space is distributed among the other child elements.",name:"checked",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays the child elements",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},contentElement:{defaultValue:null,description:"Required for displaying a certain element in the row",name:"contentElement",required:!1,type:{name:"ReactNode"}},contextButtonSpacerWidth:{defaultValue:null,description:"Sets the width of the ContextMenuButton component.",name:"contextButtonSpacerWidth",required:!1,type:{name:"string | undefined"}},contextOptions:{defaultValue:null,description:"Required for hosting the ContextMenuButton component. It is always located near the right border of the container,\nregardless of the contents of the child elements. If there is no value, the occupied space is distributed among the other child elements.",name:"contextOptions",required:!1,type:{name:"ContextMenuModel[] | undefined"}},data:{defaultValue:null,description:"Current row item information.",name:"data",required:!1,type:{name:"TData | undefined"}},element:{defaultValue:null,description:"In case Checkbox component is specified, it is located in a fixed order,\notherwise it is located in the first position. If there is no value, the occupied space is distributed among the other child elements.",name:"element",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},indeterminate:{defaultValue:null,description:"If true, this state is shown as a rectangle in the checkbox",name:"indeterminate",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"Sets a callback function that is triggered when a row element is selected. Returns data value.",name:"onSelect",required:!1,type:{name:"((checked: boolean, data?: TData | undefined) => void) | undefined"}},onRowClick:{defaultValue:null,description:"Sets a callback function that is triggered when any element except the checkbox and context menu is clicked.",name:"onRowClick",required:!0,type:{name:"() => void"}},onContextClick:{defaultValue:null,description:"Function that is invoked on clicking the icon button in the context-menu",name:"onContextClick",required:!1,type:{name:"((value?: boolean | undefined) => void) | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},inProgress:{defaultValue:null,description:"Displays the loader",name:"inProgress",required:!1,type:{name:"boolean | undefined"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"(() => ContextMenuModel[]) | undefined"}},mode:{defaultValue:null,description:"Changes the row mode",name:"mode",required:!1,type:{name:"TMode | undefined"}},withoutBorder:{defaultValue:null,description:"Removes the borders",name:"withoutBorder",required:!1,type:{name:"boolean | undefined"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean | undefined"}},contextTitle:{defaultValue:null,description:"",name:"contextTitle",required:!1,type:{name:"string | undefined"}},badgesComponent:{defaultValue:null,description:"",name:"badgesComponent",required:!1,type:{name:"ReactNode"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean | undefined"}},rowContextClose:{defaultValue:null,description:"",name:"rowContextClose",required:!1,type:{name:"(() => void) | undefined"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"Disables checkbox",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/row/Row.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"components/row/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=7645.b01d40e5.iframe.bundle.js.map