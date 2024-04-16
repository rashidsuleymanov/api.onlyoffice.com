"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[1548],{"./components/context-menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>ContextMenu_ContextMenu});var react=__webpack_require__("../../node_modules/react/index.js"),CSSTransition=__webpack_require__("../../node_modules/react-transition-group/esm/CSSTransition.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),main=__webpack_require__("../../node_modules/react-device-detect/main.js"),arrow_left_reacturl=__webpack_require__("../../public/images/arrow-left.react.svg?url"),utils=__webpack_require__("./utils/index.ts"),components_portal=__webpack_require__("./components/portal/index.ts"),backdrop=__webpack_require__("./components/backdrop/index.tsx"),components_text=__webpack_require__("./components/text/index.tsx"),avatar=__webpack_require__("./components/avatar/index.tsx"),icon_button=__webpack_require__("./components/icon-button/index.tsx"),room_icon=__webpack_require__("./components/room-icon/index.tsx"),themes=__webpack_require__("./themes/index.ts");const styledTabletView=styled_components_browser_esm.AH`
  position: fixed;
  width: ${props=>props.theme.newContextMenu.devices.tabletWidth};
  max-width: ${props=>props.theme.newContextMenu.devices.tabletWidth};
  max-height: ${props=>props.theme.newContextMenu.devices.maxHeight};
  left: ${props=>props.articleWidth?`${props.articleWidth}px`:props.theme.newContextMenu.devices.left};
  right: ${props=>props.theme.newContextMenu.devices.right};
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: ${props.theme.newContextMenu.devices.right};
      right: ${props.articleWidth?`${props.articleWidth}px`:props.theme.newContextMenu.devices.left};
    `}
  bottom: ${props=>props.theme.newContextMenu.devices.bottom};
  margin: ${props=>props.theme.newContextMenu.devices.margin};
`,styledMobileView=styled_components_browser_esm.AH`
  position: fixed;
  width: ${props=>props.theme.newContextMenu.devices.mobileWidth};
  max-width: ${props=>props.theme.newContextMenu.devices.mobileWidth};
  max-height: ${props=>props.theme.newContextMenu.devices.maxHeight};
  left: ${props=>props.theme.newContextMenu.devices.left};
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: 0;
      right: ${props.theme.newContextMenu.devices.left};
    `}
  bottom: ${props=>props.theme.newContextMenu.devices.bottom};
  border-radius: ${props=>props.theme.newContextMenu.mobileBorderRadius};
`,SubMenuItem=styled_components_browser_esm.Ay.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    margin-right: 12px;
  }

  & label {
    position: static;
  }

  & > a {
    flex-grow: 1;
  }

  &:hover {
    background-color: ${props=>props.noHover?props.theme.dropDownItem.backgroundColor:props.theme.dropDownItem.hoverBackgroundColor};
  }
`,StyledContextMenu=styled_components_browser_esm.Ay.div`
  .p-contextmenu {
    position: absolute;
    background: ${props=>props.theme.newContextMenu.background};
    border: ${props=>props.theme.newContextMenu.border};
    border-radius: ${props=>props.theme.newContextMenu.borderRadius};
    -moz-border-radius: ${props=>props.theme.newContextMenu.borderRadius};
    -webkit-border-radius: ${props=>props.theme.newContextMenu.borderRadius};
    box-shadow: ${props=>props.theme.newContextMenu.boxShadow};
    -moz-box-shadow: ${props=>props.theme.newContextMenu.boxShadow};
    -webkit-box-shadow: ${props=>props.theme.newContextMenu.boxShadow};
    padding: ${props=>props.theme.newContextMenu.padding};

    @media ${utils.n5} {
      ${props=>props.changeView&&styledTabletView}
    }

    @media ${utils.Hw} {
      ${props=>props.changeView&&styledMobileView}
    }
  }

  .contextmenu-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${props=>props.theme.menuItem.header.height};
    max-height: ${props=>props.theme.menuItem.header.height};
    border-bottom: ${props=>props.theme.menuItem.header.borderBottom};
    margin: 0;
    margin-bottom: ${props=>props.theme.menuItem.header.marginBottom};
    padding: ${props=>props.theme.menuItem.mobile.padding};

    cursor: default;

    box-sizing: border-box;
    background: none;
    outline: 0 !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    .icon-wrapper {
      display: flex;
      align-items: center;
      width: ${props=>props.isRoom?"32px":props.theme.menuItem.iconWrapper.header.width};
      min-width: ${props=>props.isRoom?"32px":props.theme.menuItem.iconWrapper.header.width};
      height: ${props=>props.isRoom?"32px":props.theme.menuItem.iconWrapper.header.height};
      min-height: ${props=>props.isRoom?"32px":props.theme.menuItem.iconWrapper.header.height};

      .drop-down-item_icon {
        display: flex;
        align-items: center;
        border-radius: 6px;
        ${props=>props.isRoom&&styled_components_browser_esm.AH`
            width: 100%;
            height: 100%;
          `}
      }

      svg {
        &:not(:root) {
          width: 100%;
          height: 100%;
        }
      }
    }

    .avatar-wrapper {
      min-width: 32px;
      box-sizing: border-box;
      margin-right: 8px;
      ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
          margin-right: 0px;
          margin-left: 8px;
        `}
    }

    .text {
      width: 100%;
      font-size: ${props=>props.theme.getCorrectFontSize(props.theme.menuItem.text.header.fontSize)};
      font-weight: 600;
      ${props=>props.isIconExist&&styled_components_browser_esm.AH`
          margin: ${({theme})=>(0,utils.cK)(theme.menuItem.text.margin,theme.interfaceDirection)};
        `}

      color: ${props=>props.theme.menuItem.text.color};
      text-align: ${({theme})=>"rtl"===theme.interfaceDirection?"right":"left"};
      text-transform: none;
      text-decoration: none;
      user-select: none;
    }
  }

  .p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .p-contextmenu .p-submenu-list {
    position: absolute;
    background: ${props=>props.theme.dropDown.background};
    border: ${props=>props.theme.dropDown.border};
    border-radius: ${props=>props.theme.dropDown.borderRadius};
    -moz-border-radius: ${props=>props.theme.dropDown.borderRadius};
    -webkit-border-radius: ${props=>props.theme.dropDown.borderRadius};
    box-shadow: ${props=>props.theme.dropDown.boxShadow};
    -moz-box-shadow: ${props=>props.theme.dropDown.boxShadow};
    -webkit-box-shadow: ${props=>props.theme.dropDown.boxShadow};
    padding: 4px 0px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 4px;
    ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
        margin-left: -4px;
      `}
    margin-top: -4px;
  }

  .p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    border: ${props=>props.theme.dropDownItem.border};
    margin: ${props=>props.theme.dropDownItem.margin};
    padding: ${props=>props.theme.dropDownItem.padding};
    font-family: ${props=>props.theme.fontFamily};
    font-style: normal;
    background: none;
    user-select: none;
    outline: 0 !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    font-weight: ${props=>props.theme.dropDownItem.fontWeight};
    font-size: ${props=>props.theme.getCorrectFontSize(props.theme.dropDownItem.fontSize)};
    color: ${props=>props.theme.dropDownItem.color};
    text-transform: none;

    -webkit-touch-callout: none;

    &:hover {
      background-color: ${props=>props.noHover?props.theme.dropDownItem.backgroundColor:props.theme.dropDownItem.hoverBackgroundColor};
    }

    &.p-disabled {
      color: ${props=>props.theme.dropDownItem.disableColor};

      &:hover {
        cursor: default;
        background-color: ${props=>props.theme.dropDownItem.hoverDisabledBackgroundColor};
      }
    }
  }

  .p-contextmenu .p-menuitem-text {
    line-height: 36px;
  }

  .p-contextmenu .p-menu-separator {
    border-bottom: ${props=>props.theme.menuItem.separator.borderBottom};
    cursor: default !important;
    margin: ${props=>props.theme.menuItem.separator.margin};
    height: ${props=>props.theme.menuItem.separator.height};
    width: ${props=>props.theme.menuItem.separator.width};
    &:hover {
      cursor: default !important;
    }
  }

  .p-contextmenu .p-menuitem {
    position: relative;
    margin: ${props=>props.theme.dropDownItem.margin};
  }

  .p-contextmenu .scroll-body .p-menuitem {
    margin-right: ${props=>`-${props.theme.scrollbar.paddingInlineEnd}`};

    @media ${utils.Hw} {
      margin-right: ${props=>`-${props.theme.scrollbar.paddingInlineEndMobile}`};
    }
  }

  .p-menuitem-icon {
    max-height: ${props=>props.theme.dropDownItem.lineHeight};

    width: 16px;
    height: 16px;

    & svg {
      height: 16px;
      width: 16px;
      ${props=>props.fillIcon&&styled_components_browser_esm.AH`
          path[fill],
          circle[fill],
          rect[fill] {
            fill: ${props.theme.dropDownItem.icon.color};
          }

          path[stroke],
          circle[stroke],
          rect[stroke] {
            stroke: ${props.theme.dropDownItem.icon.color};
          }
        `}
    }

    &.p-disabled {
      path[fill] {
        fill: ${props=>props.theme.dropDownItem.icon.disableColor};
      }

      path[stroke] {
        stroke: ${props=>props.theme.dropDownItem.icon.disableColor};
      }
    }

    margin-right: 8px;
    ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
        margin-right: 0px;
        margin-left: 8px;
      `}
  }

  .p-submenu-icon {
    margin-left: auto;
    padding-left: 8px;
    ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
        transform: scaleX(-1);
        margin-right: auto;
        margin-left: 0;
      `}
    path[fill] {
      fill: ${props=>props.theme.dropDownItem.icon.color};
    }

    path[stroke] {
      stroke: ${props=>props.theme.dropDownItem.icon.color};
    }
  }

  .p-contextmenu-enter {
    opacity: 0;
  }

  .p-contextmenu-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
`;StyledContextMenu.defaultProps={theme:themes.C6};var _g,_defs,react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js"),arrow_right_react=__webpack_require__("../../public/images/arrow.right.react.svg");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const arrow_outside_react=function SvgArrowoutsidereact(props){return react.createElement("svg",_extends({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_g||(_g=react.createElement("g",{clipPath:"url(#arrow_outside_react_svg__clip0_1282_5718)"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.828 2.171a1 1 0 011 1v4.95h-2V5.585l-4.657 4.657-1.414-1.414 4.657-4.657H3.88v-2h4.95z",fill:"#000"}))),_defs||(_defs=react.createElement("defs",null,react.createElement("clipPath",{id:"arrow_outside_react_svg__clip0_1282_5718"},react.createElement("path",{fill:"#fff",d:"M0 0h12v12H0z"})))))};var context_menu=__webpack_require__("./skeletons/context-menu/index.tsx"),scrollbar=__webpack_require__("./components/scrollbar/index.tsx"),toggle_button=__webpack_require__("./components/toggle-button/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SubMenu=props=>{const{onLeafClick,root,resetMenu,changeView,onMobileItemClick,onLoad}=props,[model,setModel]=(0,react.useState)(props?.model),[isLoading,setIsLoading]=(0,react.useState)(!1),[activeItem,setActiveItem]=(0,react.useState)(null),subMenuRef=(0,react.useRef)(null),theme=(0,styled_components_browser_esm.DP)(),onItemMouseEnter=(e,item)=>{item.disabled||(0,utils.v1)()||(0,utils.Fr)()?e.preventDefault():setActiveItem(item)},position=()=>{const parentItem=subMenuRef.current?.parentElement,containerOffset=utils.U9.getOffset(parentItem),viewport=utils.U9.getViewport(),subListWidth=subMenuRef.current?.offsetParent?subMenuRef.current.offsetWidth:utils.U9.getHiddenElementOuterWidth(subMenuRef.current),itemOuterWidth=utils.U9.getOuterWidth(parentItem?.children[0]),isRtl="rtl"===theme.interfaceDirection;if(subMenuRef.current){subMenuRef.current.style.top="0px";const submenuRects=subMenuRef.current.getBoundingClientRect();if(submenuRects.bottom>viewport.height){const submenuMargin=16,topOffset=submenuRects.bottom-viewport.height+submenuMargin;subMenuRef.current.style.top=-1*topOffset+"px"}isRtl?subListWidth<parseInt(`${containerOffset.left}`,10)?subMenuRef.current.style.left=-1*subListWidth+"px":subMenuRef.current.style.left=`${itemOuterWidth}px`:parseInt(`${containerOffset.left}`,10)+itemOuterWidth+subListWidth>viewport.width-utils.U9.calculateScrollbarWidth()?subMenuRef.current.style.left=-1*subListWidth+"px":subMenuRef.current.style.left=`${itemOuterWidth}px`}},isActive=()=>!!root||!resetMenu;(0,react.useEffect)((()=>{isActive()&&position()}));const renderSeparator=(index,style)=>(0,jsx_runtime.jsx)("li",{className:"p-menu-separator not-selectable",role:"separator",style},`separator_${index}`),renderMenuitem=(item,index,style)=>{if(item.disabled)return;const active=activeItem===item,className=(0,utils.xW)("p-menuitem",{"p-menuitem-active":active},item.className||""),linkClassName=(0,utils.xW)("p-menuitem-link","not-selectable",{"p-disabled":item.disabled||item.disableColor}),iconClassName=(0,utils.xW)("p-menuitem-icon",{"p-disabled":item.disabled||item.disableColor}),icon=item.icon&&(!item.icon.includes("images/")&&!item.icon.includes(".svg")||item.icon.includes("webplugins")?(0,jsx_runtime.jsx)("img",{src:item.icon,alt:"plugin icon",className:iconClassName||""}):(0,jsx_runtime.jsx)(react_svg_esm.k,{wrapper:"span",className:iconClassName||"",src:item.icon})),label=item.label&&(0,jsx_runtime.jsx)("span",{className:"p-menuitem-text not-selectable",children:item.label}),subMenuIcon=(item.items||item.onLoad)&&(0,jsx_runtime.jsx)(arrow_right_react.A,{className:"p-submenu-icon"}),subMenu=(item=>{const loaderItem={id:"link-loader-option",key:"link-loader",isLoader:!0,label:(0,jsx_runtime.jsx)(context_menu.G,{})};return item.items||item.onLoad?(0,jsx_runtime.jsx)(SubMenu,{model:item.onLoad?[loaderItem]:item.items||[],resetMenu:item!==activeItem,onLeafClick,onLoad:item.onLoad}):null})(item),dataKeys=Object.fromEntries(Object.entries(item).filter((el=>0===el[0].indexOf("data-")))),onClick=e=>{((e,item)=>{if(item.onLoad){if(e.preventDefault(),!(0,utils.Fr)()&&!(0,utils.v1)())return;return void((0,utils.Fr)()||(0,utils.v1)()?onMobileItemClick?.(e,item.onLoad):onLeafClick?.(e))}const{disabled,url,onClick,items,action}=item;disabled?e.preventDefault():(url||e.preventDefault(),onClick&&onClick({originalEvent:e,action,item}),items?e.stopPropagation():onLeafClick?.(e))})(e,item)};let content=(0,jsx_runtime.jsxs)("a",{href:item.url||"#",className:linkClassName||"",target:item.target,...dataKeys,onClick,role:"menuitem",children:[icon,label,subMenuIcon,item.isOutsideLink&&(0,jsx_runtime.jsx)(arrow_outside_react,{className:"p-submenu-icon"})]});if(item.template){const defaultContentOptions={onClick,className:linkClassName,labelClassName:"p-menuitem-text",iconClassName,subMenuIconClassName:"p-submenu-icon",element:content,props,active};content=utils.BF.getJSXElement(item.template,item,defaultContentOptions)}return item.withToggle?(0,jsx_runtime.jsxs)(SubMenuItem,{id:item.id,role:"none",className:className||"",style:{...item.style,...style},onMouseEnter:e=>onItemMouseEnter(e,item),children:[content,subMenu,(0,jsx_runtime.jsx)(toggle_button.f,{isChecked:item.checked||!1,onChange:onClick,noAnimation:!0})]},item.key):(0,jsx_runtime.jsxs)("li",{id:item.id,role:"none",className:className||"",style:{...item.style,...style},onMouseEnter:e=>onItemMouseEnter(e,item),children:[content,subMenu]},item.key)},renderItem=(data,idx)=>{let item=data&&"data"in data?null:data,index=idx,style={};return data&&"data"in data&&Array.isArray(data.data)&&(item=data.data[data.index]?data.data[data.index]:null,index=data.index,style=data.style),item?item.isSeparator||!("label"in item)?(0,jsx_runtime.jsx)(react.Fragment,{children:renderSeparator(index,style)},`fragment_${item.key}`):(0,jsx_runtime.jsx)(react.Fragment,{children:renderMenuitem(item,0,style)},`fragment_${item.key}`):null},className=(0,utils.xW)({"p-submenu-list":!root}),submenu=(()=>{if(model){if(changeView){const height=model.filter((item=>item&&!item.disabled)).map((item=>item?item.isSeparator?13:36:0)).reduce(((a,b)=>a+b)),viewport=utils.U9.getViewport(),listHeight=height+61>viewport.height-64?viewport.height-125:height+5;return(0,jsx_runtime.jsx)(scrollbar.Ze,{style:{height:listHeight},children:model.map(((item,index)=>!item||item?.disabled?null:renderItem(item,index)))})}return model.map(((item,index)=>item?.disabled?null:renderItem(item,index)))}return null})(),active=isActive();return(0,jsx_runtime.jsx)(CSSTransition.A,{nodeRef:subMenuRef,classNames:"p-contextmenusub",in:active,timeout:{enter:0,exit:0},unmountOnExit:!0,onEnter:async()=>{if(onLoad&&model&&model.length&&model[0].isLoader&&!isLoading){setIsLoading(!0);const res=await onLoad();setIsLoading(!1),res&&setModel(res)}position()},children:(0,jsx_runtime.jsx)("ul",{ref:subMenuRef,className:`${className} not-selectable`,children:submenu})})};SubMenu.displayName="SubMenu";try{SubMenu.displayName="SubMenu",SubMenu.__docgenInfo={description:"",displayName:"SubMenu",props:{model:{defaultValue:null,description:"",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},resetMenu:{defaultValue:null,description:"",name:"resetMenu",required:!1,type:{name:"boolean"}},onLeafClick:{defaultValue:null,description:"",name:"onLeafClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent> | ChangeEvent<HTMLInputElement>) => void)"}},onMobileItemClick:{defaultValue:null,description:"",name:"onMobileItemClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent> | ChangeEvent<HTMLInputElement>, loadFunc: () => Promise<ContextMenuModel[]>) => void)"}},changeView:{defaultValue:null,description:"",name:"changeView",required:!1,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(() => Promise<ContextMenuModel[]>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/sub-components/SubMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"components/context-menu/sub-components/SubMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}try{SubMenu.displayName="SubMenu",__function.__docgenInfo={description:"",displayName:"SubMenu",props:{model:{defaultValue:null,description:"",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},resetMenu:{defaultValue:null,description:"",name:"resetMenu",required:!1,type:{name:"boolean | undefined"}},onLeafClick:{defaultValue:null,description:"",name:"onLeafClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent> | ChangeEvent<HTMLInputElement>) => void) | undefined"}},onMobileItemClick:{defaultValue:null,description:"",name:"onMobileItemClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent> | ChangeEvent<HTMLInputElement>, loadFunc: () => Promise<ContextMenuModel[]>) => void) | undefined"}},changeView:{defaultValue:null,description:"",name:"changeView",required:!1,type:{name:"boolean | undefined"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(() => Promise<ContextMenuModel[]>) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/sub-components/SubMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"components/context-menu/sub-components/SubMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}const MobileSubMenu=props=>{const{onLeafClick,root,resetMenu,onLoad}=props,[submenu,setSubmenu]=(0,react.useState)(null),subMenuRef=(0,react.useRef)(null),position=react.useCallback((()=>{const parentItem=subMenuRef.current?.parentElement,containerOffset=utils.U9.getOffset(parentItem),viewport=utils.U9.getViewport(),subListWidth=subMenuRef.current?.offsetParent?subMenuRef.current.offsetWidth:utils.U9.getHiddenElementOuterWidth(subMenuRef.current),itemOuterWidth=utils.U9.getOuterWidth(parentItem?.children[0]);subMenuRef.current&&(subMenuRef.current.style.top="0px",parseInt(`${containerOffset.left}`,10)+itemOuterWidth+subListWidth>viewport.width-utils.U9.calculateScrollbarWidth()?subMenuRef.current.style.left=-1*subListWidth+"px":subMenuRef.current.style.left=`${itemOuterWidth}px`)}),[]),isActive=()=>!!root||!resetMenu;(0,react.useEffect)((()=>{isActive()&&position()}));const fetchSubMenu=react.useCallback((async()=>{const res=await(onLoad?.());res&&setSubmenu(res),position()}),[position,setSubmenu,onLoad]);(0,react.useEffect)((()=>{onLoad&&fetchSubMenu()}),[onLoad,fetchSubMenu]);const renderSeparator=(index,style)=>(0,jsx_runtime.jsx)("li",{className:"p-menu-separator not-selectable",role:"separator",style},`separator_${index}`),renderMenuitem=(item,index,style)=>{if(item.disabled)return;const className=(0,utils.xW)("p-menuitem",{"p-menuitem-active":!1},item?.className||""),linkClassName=(0,utils.xW)("p-menuitem-link","not-selectable",{"p-disabled":item.disabled||item.disableColor}),iconClassName=(0,utils.xW)("p-menuitem-icon",{"p-disabled":item.disabled||item.disableColor}),icon=item.icon&&(item.icon.includes("images/")?(0,jsx_runtime.jsx)(react_svg_esm.k,{wrapper:"span",className:iconClassName||"",src:item.icon}):(0,jsx_runtime.jsx)("img",{src:item.icon,alt:"plugin img",className:iconClassName||""})),label=item.label&&(0,jsx_runtime.jsx)("span",{className:"p-menuitem-text not-selectable",children:item.label}),subMenuIcon=item.items&&(0,jsx_runtime.jsx)(arrow_right_react.A,{className:"p-submenu-icon"}),dataKeys=Object.fromEntries(Object.entries(item).filter((el=>0===el[0].indexOf("data-"))));return(0,jsx_runtime.jsx)("li",{id:item.id,role:"none",className:className||"",style:{...item.style,...style},children:(0,jsx_runtime.jsxs)("a",{href:item.url||"#",className:linkClassName||"",target:item.target,...dataKeys,onClick:e=>{((e,item)=>{const{disabled,url,onClick,items,action}=item;disabled?e.preventDefault():(url||e.preventDefault(),onClick&&onClick({originalEvent:e,action,item}),items||onLeafClick(e))})(e,item)},role:"menuitem",children:[icon,label,subMenuIcon]})},item.key)},className=(0,utils.xW)({"p-submenu-list":!root}),active=isActive();return(0,jsx_runtime.jsx)(CSSTransition.A,{nodeRef:subMenuRef,classNames:"p-contextmenusub",in:active,timeout:{enter:0,exit:0},unmountOnExit:!0,children:(0,jsx_runtime.jsx)("ul",{ref:subMenuRef,className:`${className} not-selectable`,children:submenu?(model=>{if(model){const height=model.filter((item=>item&&!item.disabled)).map((item=>item?item.isSeparator?13:36:0)).reduce(((a,b)=>a+b)),viewport=utils.U9.getViewport(),listHeight=height+61>viewport.height-64?viewport.height-125:height+5;return(0,jsx_runtime.jsx)(scrollbar.Ze,{style:{height:listHeight},children:model.map(((item,index)=>item.disabled?null:((data,idx)=>{let item=data&&"data"in data?null:data,index=idx,style={};return data&&"data"in data&&Array.isArray(data.data)&&(item=data.data[data.index]?data.data[data.index]:null,index=data.index,style=data.style),item?item?.isSeparator||!("label"in item)?(0,jsx_runtime.jsx)(react.Fragment,{children:renderSeparator(index,style)},`fragment_${item.key}`):(0,jsx_runtime.jsx)(react.Fragment,{children:renderMenuitem(item,0,style)},`fragment_${item.key}`):null})(item,index)))})}return null})(submenu):(0,jsx_runtime.jsx)(context_menu.G,{})})})};MobileSubMenu.displayName="MobileSubMenu";try{MobileSubMenu.displayName="MobileSubMenu",MobileSubMenu.__docgenInfo={description:"",displayName:"MobileSubMenu",props:{onLeafClick:{defaultValue:null,description:"",name:"onLeafClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"boolean"}},resetMenu:{defaultValue:null,description:"",name:"resetMenu",required:!0,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(() => Promise<ContextMenuModel[]>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/sub-components/MobileSubMenu.tsx#MobileSubMenu"]={docgenInfo:MobileSubMenu.__docgenInfo,name:"MobileSubMenu",path:"components/context-menu/sub-components/MobileSubMenu.tsx#MobileSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{MobileSubMenu.displayName="MobileSubMenu",__function.__docgenInfo={description:"",displayName:"MobileSubMenu",props:{onLeafClick:{defaultValue:null,description:"",name:"onLeafClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"boolean | undefined"}},resetMenu:{defaultValue:null,description:"",name:"resetMenu",required:!0,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"(() => Promise<ContextMenuModel[]>) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/sub-components/MobileSubMenu.tsx#MobileSubMenu"]={docgenInfo:MobileSubMenu.__docgenInfo,name:"MobileSubMenu",path:"components/context-menu/sub-components/MobileSubMenu.tsx#MobileSubMenu"})}catch(__react_docgen_typescript_loader_error){}const ContextMenu_ContextMenu=react.forwardRef(((props,ref)=>{const[visible,setVisible]=react.useState(!1),[reshow,setReshow]=react.useState(!1),[resetMenu,setResetMenu]=react.useState(!1),[model,setModel]=react.useState(null),[changeView,setChangeView]=react.useState(!1),[showMobileMenu,setShowMobileMenu]=react.useState(!1),[onLoad,setOnLoad]=react.useState(void 0),[articleWidth,setArticleWidth]=react.useState(0),prevReshow=react.useRef(!1),menuRef=react.useRef(null),currentEvent=react.useRef(null),currentChangeEvent=react.useRef(null),theme=(0,styled_components_browser_esm.DP)(),{getContextModel,onShow,onHide,autoZIndex=!0,baseZIndex,leftOffset,rightOffset,containerRef,scaled,global,className,header,fillIcon=!0,isRoom,id,style,isArchive,ignoreChangeView,appendTo,withBackdrop,model:propsModel,badgeUrl}=props,onMenuClick=()=>{setResetMenu(!1)},onMenuMouseEnter=()=>{setResetMenu(!1)},show=react.useCallback((e=>{if(getContextModel){const m=(0,utils.Yf)(getContextModel());setModel(m)}e.stopPropagation(),e.preventDefault(),currentEvent.current=e,visible?(0,utils.Fr)()||(setReshow(!0),prevReshow.current=!0):(setVisible(!0),currentEvent.current&&onShow?.(currentEvent.current))}),[visible,onShow,getContextModel]),hide=react.useCallback((e=>{e instanceof Event?currentChangeEvent.current=e:currentEvent.current=e,onHide?.(e),setVisible(!1),setReshow(!1),prevReshow.current=!1,setChangeView(!1),setShowMobileMenu(!1),setArticleWidth(0)}),[onHide]);react.useEffect((()=>{visible&&prevReshow.current!==reshow&&(setVisible(!1),setReshow(!1),prevReshow.current=!1,setResetMenu(!0),setChangeView(!1),setArticleWidth(0),currentEvent.current&&show(currentEvent.current))}),[visible,reshow,show]);const onEnter=()=>{if(autoZIndex&&menuRef.current){const zIndex=baseZIndex||0;menuRef.current.style.zIndex=String(zIndex+utils.U9.generateZIndex())}currentChangeEvent.current&&(currentChangeEvent.current=null),currentEvent.current&&(event=>{if(event){const rects=containerRef?.current?.getBoundingClientRect(),currentLeftOffset=leftOffset??0,currentRightOffset=rightOffset??0;let left=rects?rects.left-currentLeftOffset-currentRightOffset:event.pageX+1,top=rects?rects.top:event.pageY+1;const width=menuRef.current&&menuRef.current.offsetParent?menuRef.current.offsetWidth:utils.U9.getHiddenElementOuterWidth(menuRef.current),height=menuRef.current&&menuRef.current.offsetParent?menuRef.current.offsetHeight:utils.U9.getHiddenElementOuterHeight(menuRef.current),viewport=utils.U9.getViewport();if("rtl"===theme.interfaceDirection&&!rects&&left>width&&(left=event.pageX-width+1),(0,utils.v1)()&&(height>483||main.XF&&window.innerHeight<window.innerWidth)){const article=document.getElementById("article-container");let currentArticleWidth=0;return article&&(currentArticleWidth=article.offsetWidth),setChangeView(!0),void setArticleWidth(currentArticleWidth)}if((0,utils.Fr)()&&(height>210||ignoreChangeView))return setChangeView(!0),void setArticleWidth(0);left+width-document.body.scrollLeft>viewport.width&&(left-=width),top+height-document.body.scrollTop>viewport.height&&(top-=height),left<document.body.scrollLeft&&(left=document.body.scrollLeft),top<document.body.scrollTop&&(top=document.body.scrollTop),containerRef&&(rects&&(top+=rects.height+4),menuRef.current&&(scaled&&rects&&(menuRef.current.style.width=`${rects.width}px`),menuRef.current.style.minWidth="210px")),menuRef.current&&(menuRef.current.style.left=`${left}px`,menuRef.current.style.top=`${top}px`)}})(currentEvent.current)},onExited=()=>{utils.U9.revertZIndex()},onLeafClick=e=>{setResetMenu(!0),hide(e),e.stopPropagation()},isOutsideClicked=react.useCallback((e=>{const target=e.target;return menuRef.current&&!(menuRef.current.isSameNode(target)||menuRef.current.contains(target))}),[]),documentClickListener=react.useCallback((e=>{isOutsideClicked(e)&&(hide(e),setResetMenu(!0))}),[setResetMenu,isOutsideClicked,hide]),documentContextMenuListener=react.useCallback((e=>{show(e)}),[show]),documentResizeListener=react.useCallback((e=>{visible&&hide(e)}),[visible,hide]),onEntered=()=>{window.addEventListener("resize",documentResizeListener),document.addEventListener("click",documentClickListener),document.addEventListener("mousedown",documentClickListener)},onExit=()=>{currentEvent.current=null,window.removeEventListener("resize",documentResizeListener),document.removeEventListener("click",documentClickListener),document.removeEventListener("mousedown",documentClickListener)};react.useEffect((()=>(global&&document.addEventListener("contextmenu",documentContextMenuListener),()=>{document.removeEventListener("contextmenu",documentContextMenuListener),document.removeEventListener("click",documentClickListener),document.removeEventListener("mousedown",documentClickListener),utils.U9.revertZIndex()})),[documentClickListener,documentContextMenuListener,global]),react.useEffect((()=>()=>{visible&&onHide&&(onHide(),setVisible(!1),setReshow(!1),prevReshow.current=!1,setChangeView(!1),setShowMobileMenu(!1),setArticleWidth(0)),window.removeEventListener("resize",documentResizeListener)}),[documentResizeListener,onHide,visible]);const onMobileItemClick=(e,loadFunc)=>{e.stopPropagation(),setShowMobileMenu(!0),loadFunc&&setOnLoad(loadFunc)},onBackClick=e=>{e.stopPropagation(),setShowMobileMenu(!1)};react.useImperativeHandle(ref,(()=>({show,hide,menuRef})),[hide,show]);const element=(()=>{const currentClassName=className&&(0,utils.xW)("p-contextmenu p-component",className)||"p-contextmenu p-component",isIconExist=!!header?.icon,isAvatarExist=header?.avatar,withHeader=!!header?.title,defaultIcon=!!header?.color;return(0,jsx_runtime.jsx)(StyledContextMenu,{changeView,articleWidth,isRoom,fillIcon,isIconExist,"data-testid":"context-menu",children:(0,jsx_runtime.jsx)(CSSTransition.A,{nodeRef:menuRef,classNames:"p-contextmenu",in:visible,timeout:{enter:250,exit:0},unmountOnExit:!0,onEnter,onEntered,onExit,onExited,children:(0,jsx_runtime.jsxs)("div",{ref:menuRef,id,className:currentClassName,style,onClick:onMenuClick,onMouseEnter:onMenuMouseEnter,children:[changeView&&withHeader&&(0,jsx_runtime.jsxs)("div",{className:"contextmenu-header",children:[isIconExist&&(showMobileMenu?(0,jsx_runtime.jsx)(icon_button.K,{className:"edit_icon",iconName:arrow_left_reacturl,onClick:onBackClick,size:16}):(0,jsx_runtime.jsx)("div",{className:"icon-wrapper",children:header.icon?(0,jsx_runtime.jsx)(room_icon.R,{title:header.title,isArchive,showDefault:defaultIcon,imgClassName:"drop-down-item_icon",imgSrc:header.icon,badgeUrl,color:header.color||""}):(0,jsx_runtime.jsx)(room_icon.R,{color:header.color||"",title:header.title,isArchive,showDefault:defaultIcon,badgeUrl})})),isAvatarExist&&(0,jsx_runtime.jsx)("div",{className:"avatar-wrapper",children:(0,jsx_runtime.jsx)(avatar.eu,{role:avatar.q2.none,source:header.avatar||"",size:avatar.Pf.min,className:"drop-down-item_avatar"})}),(0,jsx_runtime.jsx)(components_text.E,{className:"text",truncate:!0,dir:"auto",children:header.title})]}),showMobileMenu?(0,jsx_runtime.jsx)(MobileSubMenu,{root:!0,resetMenu,onLeafClick,onLoad}):(0,jsx_runtime.jsx)(SubMenu,{model:getContextModel?model||[]:propsModel,root:!0,resetMenu,onLeafClick,changeView,onMobileItemClick})]})})})})(),isMobileUtil=(0,utils.Fr)(),contextMenu=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[withBackdrop&&(0,jsx_runtime.jsx)(backdrop.z,{visible:visible&&(changeView||ignoreChangeView)||!1,withBackground:!0,withoutBlur:!1,zIndex:baseZIndex}),(0,jsx_runtime.jsx)(components_portal.Z,{element,appendTo})]}),root=document.getElementById("root");if(root&&isMobileUtil){return(0,jsx_runtime.jsx)(components_portal.Z,{element:contextMenu,appendTo:root})}return contextMenu}));ContextMenu_ContextMenu.displayName="ContextMenu";try{ContextMenu_ContextMenu.displayName="ContextMenu",ContextMenu_ContextMenu.__docgenInfo={description:"",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"Style class of the component",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Unique identifier of the element",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style of the component",name:"style",required:!1,type:{name:"CSSProperties"}},header:{defaultValue:null,description:"An object of header with icon and label",name:"header",required:!1,type:{name:"HeaderType"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"TGetContextMenuModel"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string"}},model:{defaultValue:null,description:"An array of menuitems",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},withBackdrop:{defaultValue:null,description:"Sets the context menu to be rendered with a backdrop",name:"withBackdrop",required:!1,type:{name:"boolean"}},appendTo:{defaultValue:null,description:"DOM element instance where the menu is mounted",name:"appendTo",required:!1,type:{name:"HTMLElement"}},global:{defaultValue:null,description:"Attaches the menu to document instead of a particular item",name:"global",required:!1,type:{name:"boolean"}},ignoreChangeView:{defaultValue:null,description:"Ignores changeView restrictions for rendering backdrop",name:"ignoreChangeView",required:!1,type:{name:"boolean"}},autoZIndex:{defaultValue:null,description:"Sets zIndex layering value automatically",name:"autoZIndex",required:!1,type:{name:"boolean"}},baseZIndex:{defaultValue:null,description:"Sets automatic layering management",name:"baseZIndex",required:!1,type:{name:"number"}},onShow:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is shown",name:"onShow",required:!1,type:{name:"((e: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void)"}},onHide:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is hidden",name:"onHide",required:!1,type:{name:"((e?: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void)"}},containerRef:{defaultValue:null,description:"Displays a reference to another component",name:"containerRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},scaled:{defaultValue:null,description:"Scales width by the container component",name:"scaled",required:!1,type:{name:"boolean"}},fillIcon:{defaultValue:null,description:"Fills the icons with default colors",name:"fillIcon",required:!1,type:{name:"boolean"}},leftOffset:{defaultValue:null,description:"Specifies the offset",name:"leftOffset",required:!1,type:{name:"number"}},rightOffset:{defaultValue:null,description:"",name:"rightOffset",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/ContextMenu.tsx#ContextMenu"]={docgenInfo:ContextMenu_ContextMenu.__docgenInfo,name:"ContextMenu",path:"components/context-menu/ContextMenu.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenu_ContextMenu.displayName="ContextMenu",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"Style class of the component",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique identifier of the element",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Inline style of the component",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},header:{defaultValue:null,description:"An object of header with icon and label",name:"header",required:!1,type:{name:"HeaderType | undefined"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"TGetContextMenuModel | undefined"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean | undefined"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean | undefined"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string | undefined"}},model:{defaultValue:null,description:"An array of menuitems",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},withBackdrop:{defaultValue:null,description:"Sets the context menu to be rendered with a backdrop",name:"withBackdrop",required:!1,type:{name:"boolean | undefined"}},appendTo:{defaultValue:null,description:"DOM element instance where the menu is mounted",name:"appendTo",required:!1,type:{name:"HTMLElement | undefined"}},global:{defaultValue:null,description:"Attaches the menu to document instead of a particular item",name:"global",required:!1,type:{name:"boolean | undefined"}},ignoreChangeView:{defaultValue:null,description:"Ignores changeView restrictions for rendering backdrop",name:"ignoreChangeView",required:!1,type:{name:"boolean | undefined"}},autoZIndex:{defaultValue:null,description:"Sets zIndex layering value automatically",name:"autoZIndex",required:!1,type:{name:"boolean | undefined"}},baseZIndex:{defaultValue:null,description:"Sets automatic layering management",name:"baseZIndex",required:!1,type:{name:"number | undefined"}},onShow:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is shown",name:"onShow",required:!1,type:{name:"((e: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void) | undefined"}},onHide:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is hidden",name:"onHide",required:!1,type:{name:"((e?: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement> | undefined) => void) | undefined"}},containerRef:{defaultValue:null,description:"Displays a reference to another component",name:"containerRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null> | undefined"}},scaled:{defaultValue:null,description:"Scales width by the container component",name:"scaled",required:!1,type:{name:"boolean | undefined"}},fillIcon:{defaultValue:null,description:"Fills the icons with default colors",name:"fillIcon",required:!1,type:{name:"boolean | undefined"}},leftOffset:{defaultValue:null,description:"Specifies the offset",name:"leftOffset",required:!1,type:{name:"number | undefined"}},rightOffset:{defaultValue:null,description:"",name:"rightOffset",required:!1,type:{name:"number | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<unknown> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/ContextMenu.tsx#ContextMenu"]={docgenInfo:ContextMenu_ContextMenu.__docgenInfo,name:"ContextMenu",path:"components/context-menu/ContextMenu.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:"",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"Style class of the component",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Unique identifier of the element",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style of the component",name:"style",required:!1,type:{name:"CSSProperties"}},header:{defaultValue:null,description:"An object of header with icon and label",name:"header",required:!1,type:{name:"HeaderType"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"TGetContextMenuModel"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string"}},model:{defaultValue:null,description:"An array of menuitems",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},withBackdrop:{defaultValue:null,description:"Sets the context menu to be rendered with a backdrop",name:"withBackdrop",required:!1,type:{name:"boolean"}},appendTo:{defaultValue:null,description:"DOM element instance where the menu is mounted",name:"appendTo",required:!1,type:{name:"HTMLElement"}},global:{defaultValue:null,description:"Attaches the menu to document instead of a particular item",name:"global",required:!1,type:{name:"boolean"}},ignoreChangeView:{defaultValue:null,description:"Ignores changeView restrictions for rendering backdrop",name:"ignoreChangeView",required:!1,type:{name:"boolean"}},autoZIndex:{defaultValue:null,description:"Sets zIndex layering value automatically",name:"autoZIndex",required:!1,type:{name:"boolean"}},baseZIndex:{defaultValue:null,description:"Sets automatic layering management",name:"baseZIndex",required:!1,type:{name:"number"}},onShow:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is shown",name:"onShow",required:!1,type:{name:"((e: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void)"}},onHide:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is hidden",name:"onHide",required:!1,type:{name:"((e?: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void)"}},containerRef:{defaultValue:null,description:"Displays a reference to another component",name:"containerRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},scaled:{defaultValue:null,description:"Scales width by the container component",name:"scaled",required:!1,type:{name:"boolean"}},fillIcon:{defaultValue:null,description:"Fills the icons with default colors",name:"fillIcon",required:!1,type:{name:"boolean"}},leftOffset:{defaultValue:null,description:"Specifies the offset",name:"leftOffset",required:!1,type:{name:"number"}},rightOffset:{defaultValue:null,description:"",name:"rightOffset",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/index.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"components/context-menu/index.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenu.displayName="ContextMenu",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"Style class of the component",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique identifier of the element",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Inline style of the component",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},header:{defaultValue:null,description:"An object of header with icon and label",name:"header",required:!1,type:{name:"HeaderType | undefined"}},getContextModel:{defaultValue:null,description:"Function that returns an object containing the elements of the context menu",name:"getContextModel",required:!1,type:{name:"TGetContextMenuModel | undefined"}},isRoom:{defaultValue:null,description:"",name:"isRoom",required:!1,type:{name:"boolean | undefined"}},isArchive:{defaultValue:null,description:"",name:"isArchive",required:!1,type:{name:"boolean | undefined"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string | undefined"}},model:{defaultValue:null,description:"An array of menuitems",name:"model",required:!0,type:{name:"ContextMenuModel[]"}},withBackdrop:{defaultValue:null,description:"Sets the context menu to be rendered with a backdrop",name:"withBackdrop",required:!1,type:{name:"boolean | undefined"}},appendTo:{defaultValue:null,description:"DOM element instance where the menu is mounted",name:"appendTo",required:!1,type:{name:"HTMLElement | undefined"}},global:{defaultValue:null,description:"Attaches the menu to document instead of a particular item",name:"global",required:!1,type:{name:"boolean | undefined"}},ignoreChangeView:{defaultValue:null,description:"Ignores changeView restrictions for rendering backdrop",name:"ignoreChangeView",required:!1,type:{name:"boolean | undefined"}},autoZIndex:{defaultValue:null,description:"Sets zIndex layering value automatically",name:"autoZIndex",required:!1,type:{name:"boolean | undefined"}},baseZIndex:{defaultValue:null,description:"Sets automatic layering management",name:"baseZIndex",required:!1,type:{name:"number | undefined"}},onShow:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is shown",name:"onShow",required:!1,type:{name:"((e: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement>) => void) | undefined"}},onHide:{defaultValue:null,description:"Specifies a callback function that is invoked when a popup menu is hidden",name:"onHide",required:!1,type:{name:"((e?: MouseEvent | Event | React.MouseEvent<...> | ChangeEvent<HTMLInputElement> | undefined) => void) | undefined"}},containerRef:{defaultValue:null,description:"Displays a reference to another component",name:"containerRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null> | undefined"}},scaled:{defaultValue:null,description:"Scales width by the container component",name:"scaled",required:!1,type:{name:"boolean | undefined"}},fillIcon:{defaultValue:null,description:"Fills the icons with default colors",name:"fillIcon",required:!1,type:{name:"boolean | undefined"}},leftOffset:{defaultValue:null,description:"Specifies the offset",name:"leftOffset",required:!1,type:{name:"number | undefined"}},rightOffset:{defaultValue:null,description:"",name:"rightOffset",required:!1,type:{name:"number | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<unknown> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/context-menu/index.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"components/context-menu/index.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}},"./components/room-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>RoomIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./themes/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/text/index.tsx"),_icon_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/icon-button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledIcon=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${props=>props.size};

  width: ${props=>props.size};

  .room-background {
    height: ${props=>props.size};

    width: ${props=>props.size};

    border-radius: ${props=>props.radius};
    vertical-align: middle;
    background: ${props=>props.isArchive?props.theme.roomIcon.backgroundArchive:`#${props.color}`};
    position: absolute;
    opacity: ${props=>props.theme.roomIcon.opacityBackground};
  }

  .room-title {
    font-size: ${props=>props.theme.getCorrectFontSize("14px")};
    font-weight: 700;
    line-height: 16px;
    color: ${props=>props.wrongImage&&props.theme.isBase?"#333333":"#ffffff"};
    position: relative;
    ${props=>!props.theme.isBase&&!props.isArchive&&styled_components__WEBPACK_IMPORTED_MODULE_5__.AH`
        color: ${`#${props.color}`};
      `};
  }

  .room-icon_badge {
    position: absolute;
    margin: 24px 0 0 24px;

    .room-icon-button {
      width: 12px;
      height: 12px;
      border: ${props=>`1px solid ${props.theme.backgroundColor}`};
      border-radius: 50%;

      svg {
        path {
          fill: ${props=>props.theme.backgroundColor};
        }
        rect {
          stroke: ${props=>props.theme.backgroundColor};
        }
      }
    }
  }
`;StyledIcon.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_1__.C6};const RoomIcon=({title,isArchive=!1,color,size="32px",radius="6px",showDefault,imgClassName,imgSrc,badgeUrl,onBadgeClick,className})=>{const[correctImage,setCorrectImage]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!0),titleWithoutSpaces=title?.replace(/\s+/g," ").trim(),indexAfterLastSpace=titleWithoutSpaces?.lastIndexOf(" "),secondCharacter=titleWithoutSpaces&&-1!==indexAfterLastSpace?titleWithoutSpaces[indexAfterLastSpace+1]:"",roomTitle=title&&(title[0]+secondCharacter).toUpperCase(),prefetchImage=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!imgSrc)return;const img=new Image;img.src=imgSrc,img.onerror=()=>{setCorrectImage(!1)}}),[imgSrc]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{prefetchImage()}),[prefetchImage]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledIcon,{color,size,radius,isArchive,wrongImage:!correctImage,className,"data-testid":"room-icon",children:[showDefault||!correctImage?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"room-background"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_text__WEBPACK_IMPORTED_MODULE_2__.E,{className:"room-title",children:roomTitle})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:imgClassName,src:imgSrc,alt:"room icon"}),badgeUrl&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"room-icon_badge",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_button__WEBPACK_IMPORTED_MODULE_3__.K,{onClick:onBadgeClick,iconName:badgeUrl,size:12,className:"room-icon-button",isFill:!0})})]})};RoomIcon.displayName="RoomIcon";try{RoomIcon.displayName="RoomIcon",RoomIcon.__docgenInfo={description:"",displayName:"RoomIcon",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isArchive:{defaultValue:{value:"false"},description:"",name:"isArchive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"32px"},description:"",name:"size",required:!1,type:{name:"string"}},radius:{defaultValue:{value:"6px"},description:"",name:"radius",required:!1,type:{name:"string"}},showDefault:{defaultValue:null,description:"",name:"showDefault",required:!0,type:{name:"boolean"}},imgClassName:{defaultValue:null,description:"",name:"imgClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!1,type:{name:"string"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string"}},onBadgeClick:{defaultValue:null,description:"",name:"onBadgeClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/room-icon/index.tsx#RoomIcon"]={docgenInfo:RoomIcon.__docgenInfo,name:"RoomIcon",path:"components/room-icon/index.tsx#RoomIcon"})}catch(__react_docgen_typescript_loader_error){}try{RoomIcon.displayName="RoomIcon",__function.__docgenInfo={description:"",displayName:"RoomIcon",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isArchive:{defaultValue:{value:!1},description:"",name:"isArchive",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"32px"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},radius:{defaultValue:{value:"6px"},description:"",name:"radius",required:!1,type:{name:"string | undefined"}},showDefault:{defaultValue:null,description:"",name:"showDefault",required:!0,type:{name:"boolean"}},imgClassName:{defaultValue:null,description:"",name:"imgClassName",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!1,type:{name:"string | undefined"}},badgeUrl:{defaultValue:null,description:"",name:"badgeUrl",required:!1,type:{name:"string | undefined"}},onBadgeClick:{defaultValue:null,description:"",name:"onBadgeClick",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/room-icon/index.tsx#RoomIcon"]={docgenInfo:RoomIcon.__docgenInfo,name:"RoomIcon",path:"components/room-icon/index.tsx#RoomIcon"})}catch(__react_docgen_typescript_loader_error){}},"./skeletons/context-menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ContextMenuSkeleton});__webpack_require__("../../node_modules/react/index.js");var utils=__webpack_require__("./utils/index.ts"),rectangle=__webpack_require__("./skeletons/rectangle/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts");const StyledContextMenu=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 32px;
  display: grid;
  grid-template-columns: 16px 1fr;
  grid-column-gap: 8px;
  justify-items: center;
  align-items: center;

  @media ${utils.n5} {
    padding: ${({theme})=>(0,utils.cK)("4px 12px 4px 16px",theme.interfaceDirection)};
    grid-column-gap: 0px;
  }

  .context-menu-rectangle {
    ${({theme})=>"rtl"===theme.interfaceDirection?styled_components_browser_esm.AH`
            margin-left: auto;
            margin-right: 8px;
          `:styled_components_browser_esm.AH`
            margin-right: auto;
            margin-left: 8px;
          `}
  }
`;StyledContextMenu.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ContextMenuSkeleton=({id,className,style,isRectangle,...rest})=>{const{title,backgroundColor,foregroundColor,backgroundOpacity,foregroundOpacity,speed,animate}=rest,isDesktopView=(0,utils.xl)();return(0,jsx_runtime.jsxs)(StyledContextMenu,{id,className,style,children:[(0,jsx_runtime.jsx)(rectangle.v,{className:"rectangle-content",title,width:"16px",height:"16px",borderRadius:"3px",backgroundColor,foregroundColor,backgroundOpacity,foregroundOpacity,speed,animate}),(0,jsx_runtime.jsx)(rectangle.v,{className:"context-menu-rectangle",title,width:isDesktopView?"97px":"102px",height:isDesktopView?"16px":"20px",borderRadius:"3px",backgroundColor,foregroundColor,backgroundOpacity,foregroundOpacity,speed,animate})]})};ContextMenuSkeleton.displayName="ContextMenuSkeleton",ContextMenuSkeleton.defaultProps={id:void 0,className:void 0,style:void 0,isRectangle:!0};try{ContextMenuSkeleton.displayName="ContextMenuSkeleton",ContextMenuSkeleton.__docgenInfo={description:"",displayName:"ContextMenuSkeleton",props:{id:{defaultValue:{value:"undefined"},description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:{value:"undefined"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},isRectangle:{defaultValue:{value:"true"},description:"",name:"isRectangle",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"string"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},foregroundColor:{defaultValue:null,description:"",name:"foregroundColor",required:!1,type:{name:"string"}},backgroundOpacity:{defaultValue:null,description:"",name:"backgroundOpacity",required:!1,type:{name:"number"}},foregroundOpacity:{defaultValue:null,description:"",name:"foregroundOpacity",required:!1,type:{name:"number"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["skeletons/context-menu/index.tsx#ContextMenuSkeleton"]={docgenInfo:ContextMenuSkeleton.__docgenInfo,name:"ContextMenuSkeleton",path:"skeletons/context-menu/index.tsx#ContextMenuSkeleton"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenuSkeleton.displayName="ContextMenuSkeleton",__function.__docgenInfo={description:"",displayName:"ContextMenuSkeleton",props:{id:{defaultValue:{value:"undefined"},description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:{value:"undefined"},description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isRectangle:{defaultValue:{value:!0},description:"",name:"isRectangle",required:!1,type:{name:"boolean | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string | undefined"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"string | undefined"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},foregroundColor:{defaultValue:null,description:"",name:"foregroundColor",required:!1,type:{name:"string | undefined"}},backgroundOpacity:{defaultValue:null,description:"",name:"backgroundOpacity",required:!1,type:{name:"number | undefined"}},foregroundOpacity:{defaultValue:null,description:"",name:"foregroundOpacity",required:!1,type:{name:"number | undefined"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number | undefined"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["skeletons/context-menu/index.tsx#ContextMenuSkeleton"]={docgenInfo:ContextMenuSkeleton.__docgenInfo,name:"ContextMenuSkeleton",path:"skeletons/context-menu/index.tsx#ContextMenuSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./skeletons/rectangle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>RectangleSkeleton});__webpack_require__("../../node_modules/react/index.js");var react_content_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-content-loader/dist/react-content-loader.es.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./constants/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RectangleSkeleton=({title=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.title,x="0",y="0",width="100%",height="32px",borderRadius=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.borderRadius,backgroundColor=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.backgroundColor,foregroundColor=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.foregroundColor,backgroundOpacity=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.backgroundOpacity,foregroundOpacity=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.foregroundOpacity,speed=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.speed,animate=_constants__WEBPACK_IMPORTED_MODULE_1__.aK.animate,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_content_loader__WEBPACK_IMPORTED_MODULE_3__.Ay,{title,width,height,backgroundColor,foregroundColor,backgroundOpacity,foregroundOpacity,speed,animate,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x,y,rx:borderRadius,ry:borderRadius,width,height})});RectangleSkeleton.displayName="RectangleSkeleton";try{RectangleSkeleton.displayName="RectangleSkeleton",RectangleSkeleton.__docgenInfo={description:"",displayName:"RectangleSkeleton",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"string"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"string"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"32px"},description:"",name:"height",required:!1,type:{name:"string"}},borderRadius:{defaultValue:{value:"3"},description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"#000000"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},foregroundColor:{defaultValue:{value:"#000000"},description:"",name:"foregroundColor",required:!1,type:{name:"string"}},backgroundOpacity:{defaultValue:{value:"0.1"},description:"",name:"backgroundOpacity",required:!1,type:{name:"number"}},foregroundOpacity:{defaultValue:{value:"0.15"},description:"",name:"foregroundOpacity",required:!1,type:{name:"number"}},speed:{defaultValue:{value:"2"},description:"",name:"speed",required:!1,type:{name:"number"}},animate:{defaultValue:{value:"true"},description:"",name:"animate",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["skeletons/rectangle/index.tsx#RectangleSkeleton"]={docgenInfo:RectangleSkeleton.__docgenInfo,name:"RectangleSkeleton",path:"skeletons/rectangle/index.tsx#RectangleSkeleton"})}catch(__react_docgen_typescript_loader_error){}try{RectangleSkeleton.displayName="RectangleSkeleton",__function.__docgenInfo={description:"",displayName:"RectangleSkeleton",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"string | undefined"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"string | undefined"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:{value:"32px"},description:"",name:"height",required:!1,type:{name:"string | undefined"}},borderRadius:{defaultValue:{value:"3"},description:"",name:"borderRadius",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:{value:"#000000"},description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},foregroundColor:{defaultValue:{value:"#000000"},description:"",name:"foregroundColor",required:!1,type:{name:"string | undefined"}},backgroundOpacity:{defaultValue:{value:.1},description:"",name:"backgroundOpacity",required:!1,type:{name:"number | undefined"}},foregroundOpacity:{defaultValue:{value:.15},description:"",name:"foregroundOpacity",required:!1,type:{name:"number | undefined"}},speed:{defaultValue:{value:2},description:"",name:"speed",required:!1,type:{name:"number | undefined"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["skeletons/rectangle/index.tsx#RectangleSkeleton"]={docgenInfo:RectangleSkeleton.__docgenInfo,name:"RectangleSkeleton",path:"skeletons/rectangle/index.tsx#RectangleSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"../../public/images/arrow.right.react.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgArrowrightreact(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:12,height:13,viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.716 1.29a1.006 1.006 0 00-1.42.004 1.006 1.006 0 00-.005 1.418l3.57 3.576a1 1 0 01.001 1.413L3.29 11.287a1.006 1.006 0 00.005 1.417c.39.392 1.031.397 1.422.005l4.778-4.797.212-.212a1 1 0 000-1.413l-4.99-4.998z",fill:"#333"})))}}}]);
//# sourceMappingURL=1548.e033af3a.iframe.bundle.js.map