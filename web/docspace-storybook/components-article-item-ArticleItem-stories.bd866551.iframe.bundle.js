"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[1870],{"./components/article-item/ArticleItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconWithBadge:()=>IconWithBadge,IconWithInitialText:()=>IconWithInitialText,IconWithoutBadge:()=>IconWithoutBadge,ItemIsEndOfBlock:()=>ItemIsEndOfBlock,ItemWithBadgeIcon:()=>ItemWithBadgeIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArticleItem_stories});__webpack_require__("../../node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),catalog_folder_reacturl=__webpack_require__("../../public/images/catalog.folder.react.svg?url");const catalog_guest_reacturl_namespaceObject=__webpack_require__.p+"images/catalog.guest.react.svg?hash=c1c8964f1be27a6d7b20",catalog_trash_reacturl_namespaceObject=__webpack_require__.p+"images/catalog.trash.react.svg?hash=3dca3e858f4b338dd175";var themes=__webpack_require__("./themes/index.ts"),react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js"),components_text=__webpack_require__("./components/text/index.tsx"),badge=__webpack_require__("./components/badge/index.tsx"),main=__webpack_require__("../../node_modules/react-device-detect/main.js"),utils=__webpack_require__("./utils/index.ts");const badgeWithoutText=styled_components_browser_esm.AH`
  position: absolute;

  top: ${props=>props.theme.catalogItem.badgeWithoutText.position};
  right: ${props=>props.theme.catalogItem.badgeWithoutText.position};
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: ${props.theme.catalogItem.badgeWithoutText.position};
      right: auto;
    `}
  border-radius: 1000px;

  background-color: ${props=>props.theme.catalogItem.badgeWithoutText.backgroundColor};

  width: ${props=>props.theme.catalogItem.badgeWithoutText.size} !important;
  min-width: ${props=>props.theme.catalogItem.badgeWithoutText.size} !important;
  height: ${props=>props.theme.catalogItem.badgeWithoutText.size} !important;
  min-height: ${props=>props.theme.catalogItem.badgeWithoutText.size} !important;

  margin: 0 !important;
`,StyledArticleItemHeaderContainer=styled_components_browser_esm.Ay.div`
  width: 100%;

  height: 24px;

  padding: 7px 12px 4px;

  box-sizing: border-box;

  margin-top: ${props=>props.isFirstHeader?"0":"8px"};

  .catalog-item__header-text {
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #a3a9ae;
  }

  @media ${utils.n5} {
    padding: ${props=>props.showText?"0px 9px 12px":"4px 12px 19px"};

    margin-top: ${props=>props.isFirstHeader?"0":"16px"};

    ${props=>!props.showText&&styled_components_browser_esm.AH`
        display: flex;
        justify-content: center;

        .catalog-item__header-text {
          width: 20px;

          line-height: 1px;
          height: 1px;

          background: #d0d5da;
        }
      `}
  }
`,StyledArticleItemBadgeWrapper=styled_components_browser_esm.Ay.div`
  z-index: 3;

  margin-left: ${props=>props.theme.catalogItem.badgeWrapper.marginLeft};
  margin-right: ${props=>props.theme.catalogItem.badgeWrapper.marginRight};

  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      margin-right: ${props.theme.catalogItem.badgeWrapper.marginLeft};
      margin-left: ${props.theme.catalogItem.badgeWrapper.marginRight};
    `}

  div {
    display: flex;
    align-items: center;
  }

  @media ${utils.n5} {
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${props=>props.theme.catalogItem.badgeWrapper.tablet.width};
    min-width: ${props=>props.theme.catalogItem.badgeWrapper.tablet.width};
    height: ${props=>props.theme.catalogItem.badgeWrapper.tablet.height};
    margin-right: ${props=>props.theme.catalogItem.badgeWrapper.tablet.marginRight};
  }

  ${props=>!props.showText&&badgeWithoutText}

  .catalog-item__badge {
    display: flex;
    align-items: center;
    justify-content: center;

    //width: ${props=>props.theme.catalogItem.badgeWrapper.size};
    min-width: ${props=>props.theme.catalogItem.badgeWrapper.size};
    height: ${props=>props.theme.catalogItem.badgeWrapper.size};
    min-height: ${props=>props.theme.catalogItem.badgeWrapper.size};

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${props=>props.theme.catalogItem.badgeWrapper.size};

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        line-height: 16px;
      }
    }
  }
`;StyledArticleItemBadgeWrapper.defaultProps={theme:themes.C6};const StyledArticleItemInitialText=(0,styled_components_browser_esm.Ay)(components_text.E)`
  position: absolute;
  top: 2px;
  left: 0;
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: auto;
      right: 0;
    `}
  text-align: center;
  width: ${props=>props.theme.catalogItem.initialText.width};
  line-height: ${props=>props.theme.catalogItem.initialText.lineHeight};
  max-height: ${props=>props.theme.catalogItem.initialText.lineHeight};
  color: ${props=>props.theme.catalogItem.initialText.color};
  font-size: ${props=>props.theme.catalogItem.initialText.fontSize};
  font-weight: ${props=>props.theme.catalogItem.initialText.fontWeight};
  pointer-events: none;

  @media ${utils.n5} {
    width: ${props=>props.theme.catalogItem.initialText.tablet.width};
    line-height: ${props=>props.theme.catalogItem.initialText.tablet.lineHeight};
    font-size: ${props=>props.theme.catalogItem.initialText.tablet.fontSize};
  }
`;StyledArticleItemInitialText.defaultProps={theme:themes.C6};const StyledArticleItemText=(0,styled_components_browser_esm.Ay)(components_text.E)`
  width: ${props=>props.theme.catalogItem.text.width};

  margin-left: ${props=>props.theme.catalogItem.text.marginLeft};

  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      margin-left: 0;
      margin-right: ${props.theme.catalogItem.text.marginLeft};
    `}

  line-height: ${props=>props.theme.catalogItem.text.lineHeight};

  z-index: 1;

  align-items: center;

  pointer-events: none;

  color: ${props=>props.isActive?props.theme.catalogItem.text.isActiveColor:props.theme.catalogItem.text.color};

  font-size: ${props=>props.theme.catalogItem.text.fontSize};
  font-weight: ${props=>props.theme.catalogItem.text.fontWeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${utils.n5} {
    margin-left: ${props=>props.theme.catalogItem.text.tablet.marginLeft};
    line-height: ${props=>props.theme.catalogItem.text.tablet.lineHeight};
    font-size: ${props=>props.theme.catalogItem.text.tablet.fontSize};
    font-weight: ${props=>props.theme.catalogItem.text.tablet.fontWeight};
  }
`;StyledArticleItemText.defaultProps={theme:themes.C6};const StyledArticleItemImg=styled_components_browser_esm.Ay.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  pointer-events: none;

  height: ${props=>props.theme.catalogItem.img.svg.height};

  .icon > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: ${props=>props.theme.catalogItem.img.svg.width};
    height: ${props=>props.theme.catalogItem.img.svg.height};
    path,
    circle {
      fill: ${props=>props.isActive?props.theme.catalogItem.img.svg.isActiveFill:props.theme.catalogItem.img.svg.fill};
    }
  }

  @media ${utils.n5} {
    height: ${props=>props.theme.catalogItem.img.svg.tablet.height};
    svg {
      width: ${props=>props.theme.catalogItem.img.svg.tablet.width};
      height: ${props=>props.theme.catalogItem.img.svg.tablet.height};
    }
  }
`;StyledArticleItemImg.defaultProps={theme:themes.C6};const draggingSiblingCss=styled_components_browser_esm.AH`
  background: ${props=>props.theme.dragAndDrop.background} !important;

  &:hover {
    background: ${props=>props.theme.dragAndDrop.acceptBackground} !important;
  }
`,StyledArticleItemSibling=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;

  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components_browser_esm.AH`
      left: auto;
      right: 0;
    `}

  width: 100%;
  height: 100%;

  border-radius: 3px;

  min-height: ${props=>props.theme.catalogItem.container.height};
  max-height: ${props=>props.theme.catalogItem.container.height};

  background-color: ${props=>props.isActive&&props.theme.catalogItem.sibling.active.background};

  ${!main.Fr&&styled_components_browser_esm.AH`
    &:hover {
      background-color: ${props=>props.theme.catalogItem.sibling.hover.background};
    }
  `}

  @media ${utils.n5} {
    min-height: ${props=>props.theme.catalogItem.container.tablet.height};
    max-height: ${props=>props.theme.catalogItem.container.tablet.height};
  }

  ${props=>props.isDragging&&draggingSiblingCss}

  ${props=>props.isDragActive&&styled_components_browser_esm.AH`
      background: ${props.theme.dragAndDrop.acceptBackground} !important;
    `}
`;StyledArticleItemSibling.defaultProps={theme:themes.C6};const StyledArticleItemContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: ${props=>props.showText?"space-between":"center"};
  align-items: center;

  min-width: ${props=>props.theme.catalogItem.container.width};
  min-height: ${props=>props.theme.catalogItem.container.height};
  max-height: ${props=>props.theme.catalogItem.container.height};

  position: relative;
  box-sizing: border-box;

  padding: ${props=>props.showText&&props.theme.catalogItem.container.padding};
  margin-bottom: ${props=>props.isEndOfBlock&&props.theme.catalogItem.container.marginBottom};

  cursor: pointer;

  @media ${utils.n5} {
    min-height: ${props=>props.theme.catalogItem.container.tablet.height};
    max-height: ${props=>props.theme.catalogItem.container.tablet.height};

    padding: ${props=>props.showText&&props.theme.catalogItem.container.tablet.padding};
    margin-bottom: ${props=>props.isEndOfBlock&&props.theme.catalogItem.container.tablet.marginBottom};
  }

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .catalog-item__icon {
    display: none;
  }

  .catalog-item__icon:target {
    display: flex;
  }

  .catalog-item__icon {
    svg {
      path {
        fill: ${props=>props.theme.catalogItem.trashIconFill};
      }
    }
  }

  :hover {
    .catalog-item__icon {
      display: flex;
    }
  }
`;StyledArticleItemContainer.defaultProps={theme:themes.C6};const StyledArticleItemTheme=(0,styled_components_browser_esm.Ay)(StyledArticleItemContainer)`
  ${StyledArticleItemText} {
    color: ${props=>props.isActive&&props.theme.isBase&&props.$currentColorScheme?.main?.accent};

    &:hover {
      color: ${props=>props.isActive&&props.theme.isBase&&props.$currentColorScheme?.main?.accent};
    }
  }

  ${StyledArticleItemImg} {
    svg {
      path {
        fill: ${props=>props.isActive&&props.theme.isBase&&props.$currentColorScheme?.main?.accent} !important;
      }
      circle {
        fill: ${props=>props.isActive&&props.theme.isBase&&props.$currentColorScheme?.main?.accent} !important;
      }
    }

    &:hover {
      svg {
        path {
          fill: ${props=>props.isActive&&props.theme.isBase&&props.$currentColorScheme?.main?.accent} !important;
        }
      }
    }
  }
`;StyledArticleItemTheme.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const getInitial=text=>text.substring(0,1).toUpperCase(),ArticleItemPure=props=>{const{className,id,style,icon,text,showText=!1,onClick,onDrop,isEndOfBlock=!1,isActive=!1,isDragging=!1,isDragActive=!1,showInitial=!1,showBadge=!1,labelBadge,iconBadge,onClickBadge,isHeader=!1,isFirstHeader=!1,folderId,badgeTitle,$currentColorScheme}=props,onClickAction=e=>{onClick?.(e,id)},onMouseDown=e=>{1===e.button&&onClickAction(e)},onClickBadgeAction=e=>{e.stopPropagation(),onClickBadge?.(id)},onMouseUpAction=()=>{isDragging&&onDrop?.(id,text)};return isHeader?(0,jsx_runtime.jsx)(StyledArticleItemHeaderContainer,{showText,isFirstHeader,children:(0,jsx_runtime.jsx)(components_text.E,{className:"catalog-item__header-text",truncate:!0,noSelect:!0,children:showText?text:""})}):(0,jsx_runtime.jsxs)(StyledArticleItemTheme,{className,style,showText,isEndOfBlock,isActive,"data-testid":"article-item",$currentColorScheme,children:[(0,jsx_runtime.jsx)(StyledArticleItemSibling,{id:folderId,isActive,isDragging,isDragActive,onClick:onClickAction,onMouseUp:onMouseUpAction,onMouseDown}),(0,jsx_runtime.jsxs)(StyledArticleItemImg,{isActive,children:[(0,jsx_runtime.jsx)(react_svg_esm.k,{className:"icon",src:icon}),!showText&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showInitial&&(0,jsx_runtime.jsx)(StyledArticleItemInitialText,{children:getInitial(text)}),showBadge&&!iconBadge&&(0,jsx_runtime.jsx)(StyledArticleItemBadgeWrapper,{onClick:onClickBadgeAction,showText})]})]}),showText&&(0,jsx_runtime.jsx)(StyledArticleItemText,{isActive,noSelect:!0,children:text}),showBadge&&showText&&(0,jsx_runtime.jsx)(StyledArticleItemBadgeWrapper,{showText,onClick:onClickBadgeAction,title:badgeTitle,children:iconBadge?(0,jsx_runtime.jsx)(react_svg_esm.k,{className:"catalog-item__icon",src:iconBadge}):(0,jsx_runtime.jsx)(badge.E,{className:"catalog-item__badge",label:labelBadge})})]})};try{ArticleItemPure.displayName="ArticleItemPure",ArticleItemPure.__docgenInfo={description:"",displayName:"ArticleItemPure",props:{className:{defaultValue:null,description:"Accepts className",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:"Catalog item icon",name:"icon",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"Catalog item text",name:"text",required:!0,type:{name:"string"}},showText:{defaultValue:null,description:"Sets the catalog item to display text",name:"showText",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Invokes a function upon clicking on a catalog item",name:"onClick",required:!1,type:{name:"((id?: string) => void)"}},onDrop:{defaultValue:null,description:"Invokes a function upon dragging and dropping a catalog item",name:"onDrop",required:!1,type:{name:"((id?: string, text?: string) => void) | undefined"}},showInitial:{defaultValue:null,description:"Tells when the catalog item should display initial on icon, text should be hidden",name:"showInitial",required:!1,type:{name:"boolean"}},isEndOfBlock:{defaultValue:null,description:"Sets the catalog item as end of block",name:"isEndOfBlock",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"Sets catalog item active",name:"isActive",required:!1,type:{name:"boolean"}},isDragging:{defaultValue:null,description:"Sets the catalog item available for drag`n`drop",name:"isDragging",required:!1,type:{name:"boolean"}},isDragActive:{defaultValue:null,description:"Sets the catalog item active for drag`n`drop",name:"isDragActive",required:!1,type:{name:"boolean"}},showBadge:{defaultValue:null,description:"Sets the catalog item to display badge",name:"showBadge",required:!1,type:{name:"boolean"}},labelBadge:{defaultValue:null,description:"Label in catalog item badge",name:"labelBadge",required:!1,type:{name:"string | number"}},iconBadge:{defaultValue:null,description:"Sets custom badge icon",name:"iconBadge",required:!1,type:{name:"string"}},onClickBadge:{defaultValue:null,description:"Invokes a function upon clicking on the catalog item badge",name:"onClickBadge",required:!1,type:{name:"((id?: string) => void)"}},isHeader:{defaultValue:null,description:"Sets the catalog item to be displayed as a header",name:"isHeader",required:!1,type:{name:"boolean"}},isFirstHeader:{defaultValue:null,description:"Disables margin top for catalog item header",name:"isFirstHeader",required:!1,type:{name:"boolean"}},folderId:{defaultValue:null,description:"Accepts folder id",name:"folderId",required:!1,type:{name:"string"}},badgeTitle:{defaultValue:null,description:"",name:"badgeTitle",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/article-item/ArticleItem.tsx#ArticleItemPure"]={docgenInfo:ArticleItemPure.__docgenInfo,name:"ArticleItemPure",path:"components/article-item/ArticleItem.tsx#ArticleItemPure"})}catch(__react_docgen_typescript_loader_error){}try{ArticleItemPure.displayName="ArticleItemPure",ArticleItemPure.__docgenInfo={description:"",displayName:"ArticleItemPure",props:{className:{defaultValue:null,description:"Accepts className",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},icon:{defaultValue:null,description:"Catalog item icon",name:"icon",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"Catalog item text",name:"text",required:!0,type:{name:"string"}},showText:{defaultValue:null,description:"Sets the catalog item to display text",name:"showText",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Invokes a function upon clicking on a catalog item",name:"onClick",required:!1,type:{name:"((id?: string | undefined) => void) | undefined"}},onDrop:{defaultValue:null,description:"Invokes a function upon dragging and dropping a catalog item",name:"onDrop",required:!1,type:{name:"((id?: string | undefined, text?: string | undefined) => void) | undefined"}},showInitial:{defaultValue:null,description:"Tells when the catalog item should display initial on icon, text should be hidden",name:"showInitial",required:!1,type:{name:"boolean | undefined"}},isEndOfBlock:{defaultValue:null,description:"Sets the catalog item as end of block",name:"isEndOfBlock",required:!1,type:{name:"boolean | undefined"}},isActive:{defaultValue:null,description:"Sets catalog item active",name:"isActive",required:!1,type:{name:"boolean | undefined"}},isDragging:{defaultValue:null,description:"Sets the catalog item available for drag`n`drop",name:"isDragging",required:!1,type:{name:"boolean | undefined"}},isDragActive:{defaultValue:null,description:"Sets the catalog item active for drag`n`drop",name:"isDragActive",required:!1,type:{name:"boolean | undefined"}},showBadge:{defaultValue:null,description:"Sets the catalog item to display badge",name:"showBadge",required:!1,type:{name:"boolean | undefined"}},labelBadge:{defaultValue:null,description:"Label in catalog item badge",name:"labelBadge",required:!1,type:{name:"string | number | undefined"}},iconBadge:{defaultValue:null,description:"Sets custom badge icon",name:"iconBadge",required:!1,type:{name:"string | undefined"}},onClickBadge:{defaultValue:null,description:"Invokes a function upon clicking on the catalog item badge",name:"onClickBadge",required:!1,type:{name:"((id?: string | undefined) => void) | undefined"}},isHeader:{defaultValue:null,description:"Sets the catalog item to be displayed as a header",name:"isHeader",required:!1,type:{name:"boolean | undefined"}},isFirstHeader:{defaultValue:null,description:"Disables margin top for catalog item header",name:"isFirstHeader",required:!1,type:{name:"boolean | undefined"}},folderId:{defaultValue:null,description:"Accepts folder id",name:"folderId",required:!1,type:{name:"string | undefined"}},badgeTitle:{defaultValue:null,description:"",name:"badgeTitle",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/article-item/ArticleItem.tsx#ArticleItemPure"]={docgenInfo:ArticleItemPure.__docgenInfo,name:"ArticleItemPure",path:"components/article-item/ArticleItem.tsx#ArticleItemPure"})}catch(__react_docgen_typescript_loader_error){}const ArticleItem_stories={title:"Components/ArticleItem",component:ArticleItemPure,parameters:{docs:{description:{component:"Display catalog item. Can show only icon. If is it end of block - adding margin bottom."}},design:{type:"figma",url:"https://www.figma.com/file/ZiW5KSwb4t7Tj6Nz5TducC/UI-Kit-DocSpace-1.0.0?type=design&node-id=474-2027&mode=design&t=TBNCKMQKQMxr44IZ-0"}}},CatalogWrapper=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.theme.catalogItem.container.background};
  padding: 15px;
`;CatalogWrapper.defaultProps={theme:themes.C6};const Template=args=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"250px"},children:(0,jsx_runtime.jsx)(ArticleItemPure,{...args,onClick:()=>{},onClickBadge:()=>{}})});Template.displayName="Template";const Default={render:args=>(0,jsx_runtime.jsx)(Template,{...args}),args:{icon:catalog_folder_reacturl,text:"Documents",showText:!0,showBadge:!0,isEndOfBlock:!1,labelBadge:"2"}},OnlyIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_folder_reacturl,text:"My documents",showText:!1,showBadge:!1})});OnlyIcon.displayName="OnlyIcon";const IconWithoutBadge={render:()=>(0,jsx_runtime.jsx)(OnlyIcon,{})},OnlyIconWithBadge=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_guest_reacturl_namespaceObject,text:"My documents",showText:!1,showBadge:!0})});OnlyIconWithBadge.displayName="OnlyIconWithBadge";const IconWithBadge={render:()=>(0,jsx_runtime.jsx)(OnlyIconWithBadge,{})},InitialIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_folder_reacturl,text:"Documents",showText:!1,showBadge:!1,showInitial:!0,onClick:()=>{}})});InitialIcon.displayName="InitialIcon";const IconWithInitialText={render:()=>(0,jsx_runtime.jsx)(InitialIcon,{})},WithBadgeIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"250px"},children:(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_folder_reacturl,text:"My documents",showText:!0,showBadge:!0,iconBadge:catalog_trash_reacturl_namespaceObject})});WithBadgeIcon.displayName="WithBadgeIcon";const ItemWithBadgeIcon={render:()=>(0,jsx_runtime.jsx)(WithBadgeIcon,{})},TwoItem=()=>(0,jsx_runtime.jsxs)(CatalogWrapper,{style:{width:"250px"},children:[(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_folder_reacturl,text:"My documents",showText:!0,showBadge:!0,onClick:()=>{},isEndOfBlock:!0,labelBadge:3,onClickBadge:()=>{}}),(0,jsx_runtime.jsx)(ArticleItemPure,{icon:catalog_folder_reacturl,text:"Some text",showText:!0,showBadge:!0,onClick:()=>{},iconBadge:catalog_trash_reacturl_namespaceObject,onClickBadge:()=>{}})]});TwoItem.displayName="TwoItem";const ItemIsEndOfBlock={render:()=>(0,jsx_runtime.jsx)(TwoItem,{})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Template {...args} />,\n  args: {\n    icon: CatalogFolderReactSvgUrl,\n    text: "Documents",\n    showText: true,\n    showBadge: true,\n    isEndOfBlock: false,\n    labelBadge: "2"\n  }\n}',...Default.parameters?.docs?.source}}},IconWithoutBadge.parameters={...IconWithoutBadge.parameters,docs:{...IconWithoutBadge.parameters?.docs,source:{originalSource:"{\n  render: () => <OnlyIcon />\n}",...IconWithoutBadge.parameters?.docs?.source}}},IconWithBadge.parameters={...IconWithBadge.parameters,docs:{...IconWithBadge.parameters?.docs,source:{originalSource:"{\n  render: () => <OnlyIconWithBadge />\n}",...IconWithBadge.parameters?.docs?.source}}},IconWithInitialText.parameters={...IconWithInitialText.parameters,docs:{...IconWithInitialText.parameters?.docs,source:{originalSource:"{\n  render: () => <InitialIcon />\n}",...IconWithInitialText.parameters?.docs?.source}}},ItemWithBadgeIcon.parameters={...ItemWithBadgeIcon.parameters,docs:{...ItemWithBadgeIcon.parameters?.docs,source:{originalSource:"{\n  render: () => <WithBadgeIcon />\n}",...ItemWithBadgeIcon.parameters?.docs?.source}}},ItemIsEndOfBlock.parameters={...ItemIsEndOfBlock.parameters,docs:{...ItemIsEndOfBlock.parameters?.docs,source:{originalSource:"{\n  render: () => <TwoItem />\n}",...ItemIsEndOfBlock.parameters?.docs?.source}}};const __namedExportsOrder=["Default","IconWithoutBadge","IconWithBadge","IconWithInitialText","ItemWithBadgeIcon","ItemIsEndOfBlock"]},"./components/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts"),utils=__webpack_require__("./utils/index.ts"),components_text=__webpack_require__("./components/text/index.tsx");const hoveredCss=styled_components_browser_esm.AH`
  cursor: pointer;
  border-color: ${props=>props.backgroundColor?props.backgroundColor:props.theme.badge.backgroundColor};
`,highCss=styled_components_browser_esm.AH`
  cursor: default;
  padding: 3px 10px;
  border-radius: 6px;

  p {
    font-size: 13px;
    font-weight: 400;
  }
`,noBorderCss=styled_components_browser_esm.AH`
  border: none;
  border-radius: 6px;
`,StyledBadge=styled_components_browser_esm.Ay.div`
  display: ${props=>props.label||"0"!==props.label?"flex":"none"};
  align-items: center;
  justify-content: center;
  border: ${props=>props.theme.badge.border};

  border-radius: ${props=>props.borderRadius};
  width: fit-content;
  padding: ${props=>props.theme.badge.padding};

  height: ${props=>props.height};

  line-height: ${props=>props.lineHeight};

  overflow: ${props=>props.theme.badge.overflow};
  flex-shrink: 0;

  border: ${props=>props.border};

  ${props=>"high"===props.type&&noBorderCss}
  &:hover {
    ${props=>!props.noHover&&hoveredCss};
  }

  ${props=>!props.noHover&&props.isHovered&&hoveredCss};

  @media ${utils.n5} {
    ${({isVersionBadge})=>isVersionBadge&&"width: auto;"}
  }
`;StyledBadge.defaultProps={theme:themes.C6};const StyledInner=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.backgroundColor?props.backgroundColor:props.theme.badge.backgroundColor};

  border-radius: ${props=>props.borderRadius};

  max-width: ${props=>props.maxWidth};

  padding: ${props=>props.padding};
  text-align: center;
  user-select: none;

  line-height: ${props=>props.compact?"0.8":"1.5"};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props=>"high"===props.type&&highCss}
`;StyledInner.defaultProps={theme:themes.C6};const StyledText=(0,styled_components_browser_esm.Ay)(components_text.E)`
  color: ${props=>props.color?props.color:props.theme.badge.color} !important;
  border-radius: ${props=>props.borderRadius};
`;StyledText.defaultProps={theme:themes.C6};const StyledBadgeTheme=(0,styled_components_browser_esm.Ay)(StyledBadge)((({$currentColorScheme,isVersionBadge,backgroundColor,color,theme,isPaidBadge,isMutedBadge,noHover})=>$currentColorScheme&&!isVersionBadge&&styled_components_browser_esm.AH`
    ${StyledText} {
      color: ${color||isPaidBadge?theme?.badge.color:$currentColorScheme?.text?.accent} !important;
    }

    ${StyledInner} {
      background-color: ${isMutedBadge?theme?.badge.disableBackgroundColor:backgroundColor||$currentColorScheme?.main?.accent};

      &:hover {
        ${!noHover&&styled_components_browser_esm.AH`
          background-color: ${isMutedBadge?theme?.badge.disableBackgroundColor:backgroundColor||$currentColorScheme?.main?.accent};
        `}
      }
    }

    &:hover {
      ${!noHover&&styled_components_browser_esm.AH`
        border-color: ${isMutedBadge?theme?.badge.disableBackgroundColor:backgroundColor||$currentColorScheme?.main?.accent};
      `}
    }
  `));var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BadgeTheme=(0,react.forwardRef)(((props,ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsx)(StyledBadgeTheme,{...props,ref,$currentColorScheme:currentColorScheme||{}})}));BadgeTheme.displayName="BadgeTheme";try{BadgeTheme.displayName="BadgeTheme",BadgeTheme.__docgenInfo={description:"",displayName:"BadgeTheme",props:{label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string | number"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:null,description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"CSS padding",name:"padding",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean"}},noHover:{defaultValue:null,description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:"enum",value:[{value:'"high"'}]}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/Badge.theme.tsx#BadgeTheme"]={docgenInfo:BadgeTheme.__docgenInfo,name:"BadgeTheme",path:"components/badge/Badge.theme.tsx#BadgeTheme"})}catch(__react_docgen_typescript_loader_error){}try{BadgeTheme.displayName="BadgeTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"BadgeTheme",props:{label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string | number | undefined"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:null,description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},borderRadius:{defaultValue:null,description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string | undefined"}},padding:{defaultValue:null,description:"CSS padding",name:"padding",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:null,description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string | undefined"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:null,description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:'"high" | undefined'}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean | undefined"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean | undefined"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean | undefined"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/Badge.theme.tsx#BadgeTheme"]={docgenInfo:BadgeTheme.__docgenInfo,name:"BadgeTheme",path:"components/badge/Badge.theme.tsx#BadgeTheme"})}catch(__react_docgen_typescript_loader_error){}const Badge=props=>{const{onClick,fontSize,color,fontWeight,backgroundColor,borderRadius,padding,maxWidth,height,type,compact,isHovered,border,label}=props,onClickAction=react.useCallback((e=>{onClick&&(e.preventDefault(),onClick(e))}),[onClick]);return(0,jsx_runtime.jsx)(BadgeTheme,{...props,isHovered,onClick:onClickAction,border,height,children:(0,jsx_runtime.jsx)(StyledInner,{backgroundColor,borderRadius,padding,type,compact,maxWidth,"data-testid":"badge",children:(0,jsx_runtime.jsx)(StyledText,{textAlign:"center",fontWeight,borderRadius,color,fontSize,children:label})})})};Badge.displayName="Badge",Badge.defaultProps={label:0,fontSize:"11px",fontWeight:800,borderRadius:"11px",padding:"0px 5px",maxWidth:"50px",isHovered:!1,noHover:!1};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:{value:"0"},description:"Label",name:"label",required:!1,type:{name:"string | number"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"11px"},description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:{value:"800"},description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"11px"},description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"0px 5px"},description:"CSS padding",name:"padding",required:!1,type:{name:"string"}},maxWidth:{defaultValue:{value:"50px"},description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:{value:"false"},description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean"}},noHover:{defaultValue:{value:"false"},description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:"enum",value:[{value:'"high"'}]}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Badge",__function.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:{value:0},description:"Label",name:"label",required:!1,type:{name:"string | number | undefined"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"11px"},description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:{value:800},description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},borderRadius:{defaultValue:{value:"11px"},description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string | undefined"}},padding:{defaultValue:{value:"0px 5px"},description:"CSS padding",name:"padding",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:{value:"50px"},description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string | undefined"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:{value:!1},description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:{value:!1},description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:'"high" | undefined'}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean | undefined"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean | undefined"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean | undefined"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./components/badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Badge__WEBPACK_IMPORTED_MODULE_0__.E});var _Badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/badge/Badge.tsx");try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:{value:"0"},description:"Label",name:"label",required:!1,type:{name:"string | number"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"11px"},description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:{value:"800"},description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"11px"},description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"0px 5px"},description:"CSS padding",name:"padding",required:!1,type:{name:"string"}},maxWidth:{defaultValue:{value:"50px"},description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:{value:"false"},description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean"}},noHover:{defaultValue:{value:"false"},description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:"enum",value:[{value:'"high"'}]}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"components/badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Badge",__function.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:{value:0},description:"Label",name:"label",required:!1,type:{name:"string | number | undefined"}},backgroundColor:{defaultValue:null,description:"CSS background-color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"CSS color",name:"color",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"11px"},description:"CSS font-size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:{value:800},description:"CSS font-weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},borderRadius:{defaultValue:{value:"11px"},description:"CSS border-radius",name:"borderRadius",required:!1,type:{name:"string | undefined"}},padding:{defaultValue:{value:"0px 5px"},description:"CSS padding",name:"padding",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:{value:"50px"},description:"CSS max-width",name:"maxWidth",required:!1,type:{name:"string | undefined"}},lineHeight:{defaultValue:null,description:"CSS line-height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"onClick event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:{value:!1},description:"Sets hovered state and link effects",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:{value:!1},description:"Disables hover styles",name:"noHover",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"Type Badge",name:"type",required:!1,type:{name:'"high" | undefined'}},compact:{defaultValue:null,description:"Compact badge",name:"compact",required:!1,type:{name:"boolean | undefined"}},border:{defaultValue:null,description:"Border badge",name:"border",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},isVersionBadge:{defaultValue:null,description:"",name:"isVersionBadge",required:!1,type:{name:"boolean | undefined"}},isMutedBadge:{defaultValue:null,description:"",name:"isMutedBadge",required:!1,type:{name:"boolean | undefined"}},isPaidBadge:{defaultValue:null,description:"",name:"isPaidBadge",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"components/badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/Text.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,s:()=>StyledAutoDirSpan});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./themes/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./utils/index.ts");const styleCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
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
`,__WEBPACK_DEFAULT_EXPORT__=StyledText},"./components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,c:()=>TextPure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Text_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/Text.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextPure=({title,tag,as,fontSize="13px",fontWeight,color,textAlign="left",onClick,dir,children,...rest})=>{const isAutoDir="auto"===dir,dirProp=isAutoDir?{}:{dir};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.A,{fontSizeProp:fontSize,fontWeightProp:fontWeight,colorProp:color,textAlign,as:!as&&tag?tag:as,title,"data-testid":"text",onClick,...dirProp,...rest,children:isAutoDir?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_styled__WEBPACK_IMPORTED_MODULE_1__.s,{dir:"auto",children}):children})};TextPure.displayName="TextPure";const Text=react__WEBPACK_IMPORTED_MODULE_0__.memo(TextPure);Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",__function.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"Sets the tag through which the component is rendered",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},tag:{defaultValue:null,description:"Accepts the tag id",name:"tag",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"Sets background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Specifies the text color",name:"color",required:!1,type:{name:"string | undefined"}},display:{defaultValue:null,description:"Sets the 'display' property",name:"display",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"13px"},description:"Sets the font size",name:"fontSize",required:!1,type:{name:"string | undefined"}},fontWeight:{defaultValue:null,description:"Sets the font weight",name:"fontWeight",required:!1,type:{name:"string | number | undefined"}},isBold:{defaultValue:null,description:"Sets font weight value to bold",name:"isBold",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display?: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},isItalic:{defaultValue:null,description:"Sets the font style",name:"isItalic",required:!1,type:{name:"boolean | undefined"}},lineHeight:{defaultValue:null,description:"Sets the line height",name:"lineHeight",required:!1,type:{name:"string | undefined"}},noSelect:{defaultValue:null,description:"Disables text selection",name:"noSelect",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:{value:"left"},description:"Sets the 'text-align' property",name:"textAlign",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Sets the class name",name:"className",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./components/text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/text/Text.tsx")},"../../public/images/catalog.folder.react.svg?url":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"images/catalog.folder.react.svg?hash=9e5b6bc4f156ba25986a"}}]);
//# sourceMappingURL=components-article-item-ArticleItem-stories.bd866551.iframe.bundle.js.map