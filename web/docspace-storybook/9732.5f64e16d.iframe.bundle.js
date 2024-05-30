"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[9732],{"./components/box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box_Box});__webpack_require__("../../node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts");const StyledBox=styled_components_browser_esm.Ay.div`
  ${props=>props.alignContent&&`align-content: ${props.alignContent};`}

  ${props=>props.alignItems&&`align-items: ${props.alignItems};`}
  
  ${props=>props.alignSelf&&`align-self: ${props.alignSelf};`}
  
  ${props=>props.backgroundProp&&`background: ${props.backgroundProp};`}
  ${props=>props.borderProp&&((borderProp,interfaceDirection="ltr")=>{const styles=[];return"string"==typeof borderProp?`border: ${borderProp};`:(borderProp.style&&styles.push(`border-style: ${(0,utils.cK)(borderProp.style,interfaceDirection)};`),borderProp.width&&styles.push(`border-width: ${(0,utils.cK)(borderProp.width,interfaceDirection)};`),borderProp.color&&styles.push(`border-color: ${(0,utils.cK)(borderProp.color,interfaceDirection)};`),borderProp.radius&&styles.push(`border-radius: ${(0,utils.L2)(borderProp.radius,interfaceDirection)};`),styles.join("\n"))})(props.borderProp,props.theme.interfaceDirection)}
  box-sizing: border-box;

  ${props=>props.displayProp&&`display: ${props.displayProp};`}

  ${props=>props.flexBasis&&`flex-basis: ${props.flexBasis};`}
  
  ${props=>props.flexDirection&&`flex-direction: ${props.flexDirection};`}
  
  ${props=>props.flexProp&&`flex: ${props.flexProp};`}
  
  ${props=>props.flexWrap&&`flex-wrap: ${props.flexWrap};`}
  
  ${props=>props.gridArea&&`grid-area: ${props.gridArea};`}
  
  ${props=>props.heightProp&&`height: ${props.heightProp};`}
  ${props=>props.justifyContent&&`justify-content: ${props.justifyContent};`}
  
  ${props=>props.justifyItems&&`justify-items: ${props.justifyItems};`}
  
  ${props=>props.justifySelf&&`justify-self: ${props.justifySelf};`}
  ${props=>props.marginProp&&`margin: ${(0,utils.cK)(props.marginProp,props.theme.interfaceDirection)};`}
  outline: none;

  ${props=>props.overflowProp&&`overflow: ${props.overflowProp};`}
  ${props=>props.paddingProp&&`padding: ${(0,utils.cK)(props.paddingProp,props.theme.interfaceDirection)};`}
  ${props=>props.textAlign&&`text-align: ${(0,utils.nz)(props.textAlign,props.theme.interfaceDirection)};`}
  
  ${props=>props.widthProp&&`width: ${props.widthProp};`}
`;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function Box_Box(props){const{as}=props;return(0,jsx_runtime.jsx)(StyledBox,{...props,as:as||"div","data-testid":"box"})}Box_Box.displayName="Box",Box_Box.defaultProps={displayProp:"block"};try{Box_Box.displayName="Box",Box_Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"Sets the tag through which to render the component",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},alignContent:{defaultValue:null,description:"Sets the distribution of space between and around content items\nalong a flexbox's cross-axis or a grid's block axis",name:"alignContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"Sets the align-self value on all direct children as a group.\nIn Flexbox, it controls the alignment of items on the Cross Axis.\nIn Grid Layout, it controls the alignment of items on the Block Axis\nwithin their grid area.",name:"alignItems",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"Overrides a grid or flex item's align-items value. In Grid,\nit aligns the item inside the grid area. In Flexbox, it aligns\nthe item on the cross axis.",name:"alignSelf",required:!1,type:{name:"string"}},backgroundProp:{defaultValue:null,description:"Sets all background style properties at once, such as color,\nimage, origin and size, or repeat method.",name:"backgroundProp",required:!1,type:{name:"string"}},borderProp:{defaultValue:null,description:"Sets the element's border. It sets the values of border-width,\nborder-style, and border-color.",name:"borderProp",required:!1,type:{name:"string | { style: string; width: string; color: string; radius?: string; }"}},displayProp:{defaultValue:{value:"block"},description:"Sets whether the element is treated as a block or inline element and\nthe layout used for its children, such as flow layout, grid or flex.",name:"displayProp",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"Sets the initial main size of the flex item. It sets the size of the content\nbox unless otherwise set with box-sizing.",name:"flexBasis",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"Sets how flex items are placed in the flex container defining the main axis and\nthe direction (normal or reversed)",name:"flexDirection",required:!1,type:{name:"string"}},flexProp:{defaultValue:null,description:"Sets how the flex item will grow or shrink to fit the space available in its\nflex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",name:"flexProp",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"Sets whether flex items are forced onto one line or can wrap onto multiple lines.\nIf wrapping is allowed, it sets the direction that lines are stacked.",name:"flexWrap",required:!1,type:{name:"string"}},gridArea:{defaultValue:null,description:"Is a shorthand property for grid-row-start, grid-column-start, grid-row-end and\ngrid-column-end, specifying the size of the grid item and location within the grid by\ncontributing a line, a span, or nothing (automatic) to its grid placement,\nThereby specifying the edges of its grid area.",name:"gridArea",required:!1,type:{name:"string"}},heightProp:{defaultValue:null,description:"Defines the height of the border of the element area.",name:"heightProp",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around content items along\nthe main-axis of a flex container, and the inline axis of a grid container",name:"justifyContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"Defines the default justify-self for all items of the box, giving them all\na default way of justifying each box along the appropriate axis.",name:"justifyItems",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"Sets the way the box is justified inside its alignment container along the appropriate axis.",name:"justifySelf",required:!1,type:{name:"string"}},marginProp:{defaultValue:null,description:"Sets the margin area on all four sides of an element. It is a shorthand for margin-top,\nmargin-right, margin-bottom, and margin-left.",name:"marginProp",required:!1,type:{name:"string"}},overflowProp:{defaultValue:null,description:"Sets what to do when an element's content is too big to fit in its block formatting context.",name:"overflowProp",required:!1,type:{name:"string"}},paddingProp:{defaultValue:null,description:"Sets the padding area on all four sides of the element. It is a shorthand for padding-top,\npadding-right, padding-bottom, and padding-left",name:"paddingProp",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"Sets the horizontal alignment of a block element or table-cell box.\nThis means it works like vertical-align but in the horizontal direction",name:"textAlign",required:!1,type:{name:"string"}},widthProp:{defaultValue:null,description:"Defines the border width of the element area.",name:"widthProp",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/box/Box.tsx#Box"]={docgenInfo:Box_Box.__docgenInfo,name:"Box",path:"components/box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}try{Box_Box.displayName="Box",Box_Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"Sets the tag through which to render the component",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},alignContent:{defaultValue:null,description:"Sets the distribution of space between and around content items\nalong a flexbox's cross-axis or a grid's block axis",name:"alignContent",required:!1,type:{name:"string | undefined"}},alignItems:{defaultValue:null,description:"Sets the align-self value on all direct children as a group.\nIn Flexbox, it controls the alignment of items on the Cross Axis.\nIn Grid Layout, it controls the alignment of items on the Block Axis\nwithin their grid area.",name:"alignItems",required:!1,type:{name:"string | undefined"}},alignSelf:{defaultValue:null,description:"Overrides a grid or flex item's align-items value. In Grid,\nit aligns the item inside the grid area. In Flexbox, it aligns\nthe item on the cross axis.",name:"alignSelf",required:!1,type:{name:"string | undefined"}},backgroundProp:{defaultValue:null,description:"Sets all background style properties at once, such as color,\nimage, origin and size, or repeat method.",name:"backgroundProp",required:!1,type:{name:"string | undefined"}},borderProp:{defaultValue:null,description:"Sets the element's border. It sets the values of border-width,\nborder-style, and border-color.",name:"borderProp",required:!1,type:{name:"string | { style: string; width: string; color: string; radius?: string | undefined; } | undefined"}},displayProp:{defaultValue:{value:"block"},description:"Sets whether the element is treated as a block or inline element and\nthe layout used for its children, such as flow layout, grid or flex.",name:"displayProp",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Sets the initial main size of the flex item. It sets the size of the content\nbox unless otherwise set with box-sizing.",name:"flexBasis",required:!1,type:{name:"string | undefined"}},flexDirection:{defaultValue:null,description:"Sets how flex items are placed in the flex container defining the main axis and\nthe direction (normal or reversed)",name:"flexDirection",required:!1,type:{name:"string | undefined"}},flexProp:{defaultValue:null,description:"Sets how the flex item will grow or shrink to fit the space available in its\nflex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",name:"flexProp",required:!1,type:{name:"string | undefined"}},flexWrap:{defaultValue:null,description:"Sets whether flex items are forced onto one line or can wrap onto multiple lines.\nIf wrapping is allowed, it sets the direction that lines are stacked.",name:"flexWrap",required:!1,type:{name:"string | undefined"}},gridArea:{defaultValue:null,description:"Is a shorthand property for grid-row-start, grid-column-start, grid-row-end and\ngrid-column-end, specifying the size of the grid item and location within the grid by\ncontributing a line, a span, or nothing (automatic) to its grid placement,\nThereby specifying the edges of its grid area.",name:"gridArea",required:!1,type:{name:"string | undefined"}},heightProp:{defaultValue:null,description:"Defines the height of the border of the element area.",name:"heightProp",required:!1,type:{name:"string | undefined"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around content items along\nthe main-axis of a flex container, and the inline axis of a grid container",name:"justifyContent",required:!1,type:{name:"string | undefined"}},justifyItems:{defaultValue:null,description:"Defines the default justify-self for all items of the box, giving them all\na default way of justifying each box along the appropriate axis.",name:"justifyItems",required:!1,type:{name:"string | undefined"}},justifySelf:{defaultValue:null,description:"Sets the way the box is justified inside its alignment container along the appropriate axis.",name:"justifySelf",required:!1,type:{name:"string | undefined"}},marginProp:{defaultValue:null,description:"Sets the margin area on all four sides of an element. It is a shorthand for margin-top,\nmargin-right, margin-bottom, and margin-left.",name:"marginProp",required:!1,type:{name:"string | undefined"}},overflowProp:{defaultValue:null,description:"Sets what to do when an element's content is too big to fit in its block formatting context.",name:"overflowProp",required:!1,type:{name:"string | undefined"}},paddingProp:{defaultValue:null,description:"Sets the padding area on all four sides of the element. It is a shorthand for padding-top,\npadding-right, padding-bottom, and padding-left",name:"paddingProp",required:!1,type:{name:"string | undefined"}},textAlign:{defaultValue:null,description:"Sets the horizontal alignment of a block element or table-cell box.\nThis means it works like vertical-align but in the horizontal direction",name:"textAlign",required:!1,type:{name:"string | undefined"}},widthProp:{defaultValue:null,description:"Defines the border width of the element area.",name:"widthProp",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/box/Box.tsx#Box"]={docgenInfo:Box_Box.__docgenInfo,name:"Box",path:"components/box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"Sets the tag through which to render the component",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},alignContent:{defaultValue:null,description:"Sets the distribution of space between and around content items\nalong a flexbox's cross-axis or a grid's block axis",name:"alignContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"Sets the align-self value on all direct children as a group.\nIn Flexbox, it controls the alignment of items on the Cross Axis.\nIn Grid Layout, it controls the alignment of items on the Block Axis\nwithin their grid area.",name:"alignItems",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"Overrides a grid or flex item's align-items value. In Grid,\nit aligns the item inside the grid area. In Flexbox, it aligns\nthe item on the cross axis.",name:"alignSelf",required:!1,type:{name:"string"}},backgroundProp:{defaultValue:null,description:"Sets all background style properties at once, such as color,\nimage, origin and size, or repeat method.",name:"backgroundProp",required:!1,type:{name:"string"}},borderProp:{defaultValue:null,description:"Sets the element's border. It sets the values of border-width,\nborder-style, and border-color.",name:"borderProp",required:!1,type:{name:"string | { style: string; width: string; color: string; radius?: string; }"}},displayProp:{defaultValue:{value:"block"},description:"Sets whether the element is treated as a block or inline element and\nthe layout used for its children, such as flow layout, grid or flex.",name:"displayProp",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"Sets the initial main size of the flex item. It sets the size of the content\nbox unless otherwise set with box-sizing.",name:"flexBasis",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"Sets how flex items are placed in the flex container defining the main axis and\nthe direction (normal or reversed)",name:"flexDirection",required:!1,type:{name:"string"}},flexProp:{defaultValue:null,description:"Sets how the flex item will grow or shrink to fit the space available in its\nflex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",name:"flexProp",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"Sets whether flex items are forced onto one line or can wrap onto multiple lines.\nIf wrapping is allowed, it sets the direction that lines are stacked.",name:"flexWrap",required:!1,type:{name:"string"}},gridArea:{defaultValue:null,description:"Is a shorthand property for grid-row-start, grid-column-start, grid-row-end and\ngrid-column-end, specifying the size of the grid item and location within the grid by\ncontributing a line, a span, or nothing (automatic) to its grid placement,\nThereby specifying the edges of its grid area.",name:"gridArea",required:!1,type:{name:"string"}},heightProp:{defaultValue:null,description:"Defines the height of the border of the element area.",name:"heightProp",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around content items along\nthe main-axis of a flex container, and the inline axis of a grid container",name:"justifyContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"Defines the default justify-self for all items of the box, giving them all\na default way of justifying each box along the appropriate axis.",name:"justifyItems",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"Sets the way the box is justified inside its alignment container along the appropriate axis.",name:"justifySelf",required:!1,type:{name:"string"}},marginProp:{defaultValue:null,description:"Sets the margin area on all four sides of an element. It is a shorthand for margin-top,\nmargin-right, margin-bottom, and margin-left.",name:"marginProp",required:!1,type:{name:"string"}},overflowProp:{defaultValue:null,description:"Sets what to do when an element's content is too big to fit in its block formatting context.",name:"overflowProp",required:!1,type:{name:"string"}},paddingProp:{defaultValue:null,description:"Sets the padding area on all four sides of the element. It is a shorthand for padding-top,\npadding-right, padding-bottom, and padding-left",name:"paddingProp",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"Sets the horizontal alignment of a block element or table-cell box.\nThis means it works like vertical-align but in the horizontal direction",name:"textAlign",required:!1,type:{name:"string"}},widthProp:{defaultValue:null,description:"Defines the border width of the element area.",name:"widthProp",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"Sets the tag through which to render the component",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},alignContent:{defaultValue:null,description:"Sets the distribution of space between and around content items\nalong a flexbox's cross-axis or a grid's block axis",name:"alignContent",required:!1,type:{name:"string | undefined"}},alignItems:{defaultValue:null,description:"Sets the align-self value on all direct children as a group.\nIn Flexbox, it controls the alignment of items on the Cross Axis.\nIn Grid Layout, it controls the alignment of items on the Block Axis\nwithin their grid area.",name:"alignItems",required:!1,type:{name:"string | undefined"}},alignSelf:{defaultValue:null,description:"Overrides a grid or flex item's align-items value. In Grid,\nit aligns the item inside the grid area. In Flexbox, it aligns\nthe item on the cross axis.",name:"alignSelf",required:!1,type:{name:"string | undefined"}},backgroundProp:{defaultValue:null,description:"Sets all background style properties at once, such as color,\nimage, origin and size, or repeat method.",name:"backgroundProp",required:!1,type:{name:"string | undefined"}},borderProp:{defaultValue:null,description:"Sets the element's border. It sets the values of border-width,\nborder-style, and border-color.",name:"borderProp",required:!1,type:{name:"string | { style: string; width: string; color: string; radius?: string | undefined; } | undefined"}},displayProp:{defaultValue:{value:"block"},description:"Sets whether the element is treated as a block or inline element and\nthe layout used for its children, such as flow layout, grid or flex.",name:"displayProp",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Sets the initial main size of the flex item. It sets the size of the content\nbox unless otherwise set with box-sizing.",name:"flexBasis",required:!1,type:{name:"string | undefined"}},flexDirection:{defaultValue:null,description:"Sets how flex items are placed in the flex container defining the main axis and\nthe direction (normal or reversed)",name:"flexDirection",required:!1,type:{name:"string | undefined"}},flexProp:{defaultValue:null,description:"Sets how the flex item will grow or shrink to fit the space available in its\nflex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",name:"flexProp",required:!1,type:{name:"string | undefined"}},flexWrap:{defaultValue:null,description:"Sets whether flex items are forced onto one line or can wrap onto multiple lines.\nIf wrapping is allowed, it sets the direction that lines are stacked.",name:"flexWrap",required:!1,type:{name:"string | undefined"}},gridArea:{defaultValue:null,description:"Is a shorthand property for grid-row-start, grid-column-start, grid-row-end and\ngrid-column-end, specifying the size of the grid item and location within the grid by\ncontributing a line, a span, or nothing (automatic) to its grid placement,\nThereby specifying the edges of its grid area.",name:"gridArea",required:!1,type:{name:"string | undefined"}},heightProp:{defaultValue:null,description:"Defines the height of the border of the element area.",name:"heightProp",required:!1,type:{name:"string | undefined"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around content items along\nthe main-axis of a flex container, and the inline axis of a grid container",name:"justifyContent",required:!1,type:{name:"string | undefined"}},justifyItems:{defaultValue:null,description:"Defines the default justify-self for all items of the box, giving them all\na default way of justifying each box along the appropriate axis.",name:"justifyItems",required:!1,type:{name:"string | undefined"}},justifySelf:{defaultValue:null,description:"Sets the way the box is justified inside its alignment container along the appropriate axis.",name:"justifySelf",required:!1,type:{name:"string | undefined"}},marginProp:{defaultValue:null,description:"Sets the margin area on all four sides of an element. It is a shorthand for margin-top,\nmargin-right, margin-bottom, and margin-left.",name:"marginProp",required:!1,type:{name:"string | undefined"}},overflowProp:{defaultValue:null,description:"Sets what to do when an element's content is too big to fit in its block formatting context.",name:"overflowProp",required:!1,type:{name:"string | undefined"}},paddingProp:{defaultValue:null,description:"Sets the padding area on all four sides of the element. It is a shorthand for padding-top,\npadding-right, padding-bottom, and padding-left",name:"paddingProp",required:!1,type:{name:"string | undefined"}},textAlign:{defaultValue:null,description:"Sets the horizontal alignment of a block element or table-cell box.\nThis means it works like vertical-align but in the horizontal direction",name:"textAlign",required:!1,type:{name:"string | undefined"}},widthProp:{defaultValue:null,description:"Defines the border width of the element area.",name:"widthProp",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./components/toast/Toast.enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ToastType});let ToastType=function(ToastType){return ToastType.success="success",ToastType.error="error",ToastType.warning="warning",ToastType.info="info",ToastType}({})},"./components/toast/Toast.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Bj:()=>StyledIconButton,Vq:()=>StyledCloseWrapper,hh:()=>IconWrapper,jx:()=>StyledDiv});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_toastify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react-toastify/dist/react-toastify.esm.mjs"),_themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./themes/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./utils/index.ts"),_icon_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/icon-button/index.tsx");const StyledToastContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.N9)`
  z-index: ${props=>props.theme.toast.zIndex};
  -webkit-transform: translateZ(9999px);
  position: fixed;
  padding: ${props=>props.theme.toast.padding};
  width: ${props=>props.theme.toast.width};
  box-sizing: border-box;
  color: ${props=>props.theme.toast.color};
  top: ${props=>`${parseInt(props.theme.toast.top,10)+props.$topOffset}px`};
  right: ${props=>props.theme.toast.right};
  ${props=>"rtl"===props.theme.interfaceDirection&&styled_components__WEBPACK_IMPORTED_MODULE_4__.AH`
      left: ${props.theme.toast.right};
      right: auto;
    `}
  margin-top: ${props=>props.theme.toast.marginTop};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  .Toastify__toast-body {
    overflow-wrap: anywhere;
    margin: auto 0;
    -ms-flex: 1;
    flex: 1;
  }

  .Toastify__close-button {
    color: ${props=>props.theme.toast.closeButton.color};
    font-weight: ${props=>props.theme.toast.closeButton.fontWeight};
    font-size: ${props=>props.theme.toast.closeButton.fontSize};
    background: ${props=>props.theme.toast.closeButton.background};
    outline: none;
    border: none;
    padding: ${props=>props.theme.toast.closeButton.padding};
    cursor: pointer;
    opacity: ${props=>props.theme.toast.closeButton.opacity};
    transition: ${props=>props.theme.toast.closeButton.transition};
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button:focus,
  .Toastify__close-button:hover {
    opacity: ${props=>props.theme.toast.closeButton.hoverOpacity};
  }

  @keyframes SlideIn {
    from {
      transform: translate3d(150%, 0, 0);
      ${props=>"rtl"===props.theme.interfaceDirection&&styled_components__WEBPACK_IMPORTED_MODULE_4__.AH`
          transform: translate3d(-150%, 0, 0);
        `}
    }

    50% {
      visibility: hidden;
      transform: translate3d(0, 0, 0);
    }
  }

  .SlideIn {
    animation: SlideIn 0.7s ease-out;
  }

  @keyframes SlideOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .SlideOut {
    animation: SlideOut 0.3s ease-out both;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  .Toastify__toast--success {
    background-color: ${props=>props.theme.toast.active.success};
    border: ${props=>props.theme.toast.border.success};

    &:hover {
      background-color: ${props=>props.theme.toast.hover.success};
    }
  }

  .Toastify__toast--error {
    background-color: ${props=>props.theme.toast.active.error};
    border: ${props=>props.theme.toast.border.error};

    &:hover {
      background-color: ${props=>props.theme.toast.hover.error};
    }
  }

  .Toastify__toast--info {
    background-color: ${props=>props.theme.toast.active.info};
    border: ${props=>props.theme.toast.border.info};

    &:hover {
      background-color: ${props=>props.theme.toast.hover.info};
    }
  }

  .Toastify__toast--warning {
    background-color: ${props=>props.theme.toast.active.warning};
    border: ${props=>props.theme.toast.border.warning};

    &:hover {
      background-color: ${props=>props.theme.toast.hover.warning};
    }
  }

  .Toastify__toast {
    box-sizing: border-box;
    margin-bottom: ${props=>props.theme.toast.main.marginBottom};
    box-shadow: ${props=>props.theme.toast.main.boxShadow};
    display: flex;
    justify-content: space-between;
    max-height: ${props=>props.theme.toast.main.maxHeight};
    overflow: ${props=>props.theme.toast.main.overflow};
    cursor: pointer;

    border-radius: ${props=>props.theme.toast.main.borderRadius};
    -moz-border-radius: ${props=>props.theme.toast.main.borderRadius};
    -webkit-border-radius: ${props=>props.theme.toast.main.borderRadius};
    color: ${props=>props.theme.toast.main.color};
    margin: ${props=>props.theme.toast.main.margin};
    padding: ${props=>props.theme.toast.main.padding};
    min-height: ${props=>props.theme.toast.main.minHeight};
    font: normal 12px ${props=>props.theme.fontFamily};
    width: ${props=>props.theme.toast.main.width};
    right: ${props=>props.theme.toast.main.right};

    transition: ${props=>props.theme.toast.main.transition};

    @media ${_utils__WEBPACK_IMPORTED_MODULE_2__.n5} {
      // TODO: Discuss the behavior of notifications on mobile devices
      position: absolute;

      &:nth-child(1) {
        z-index: 3;
        top: 0px;
      }
      &:nth-child(2) {
        z-index: 2;
        top: 8px;
      }
      &:nth-child(3) {
        z-index: 1;
        top: 16px;
      }
    }
  }

  .Toastify__toast-body {
    display: flex;
    align-items: center;
  }

  @media ${_utils__WEBPACK_IMPORTED_MODULE_2__.n5} {
    right: 16px;
    ${props=>"rtl"===props.theme.interfaceDirection&&styled_components__WEBPACK_IMPORTED_MODULE_4__.AH`
        left: 16px;
        right: auto;
      `}
  }

  @media only screen and (${_utils__WEBPACK_IMPORTED_MODULE_2__.Hw}) {
    left: 0;
    margin: auto;
    right: 0;
    width: 100%;
    max-width: calc(100% - 32px);

    @keyframes SlideIn {
      from {
        transform: translate3d(0, -150%, 0);
      }

      50% {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;StyledToastContainer.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_1__.C6};const __WEBPACK_DEFAULT_EXPORT__=StyledToastContainer,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  align-self: start;
  display: flex;
  svg {
    width: ${props=>props.theme.toastr.svg.width};
    min-width: ${props=>props.theme.toastr.svg.minWidth};
    height: ${props=>props.theme.toastr.svg.height};
    min-height: ${props=>props.theme.toastr.svg.minHeight};
  }

  .toastr_success {
    path {
      fill: ${props=>props.theme.toastr.svg.color.success};
    }
  }
  .toastr_error {
    path {
      fill: ${props=>props.theme.toastr.svg.color.error};
    }
  }
  .toastr_warning {
    path {
      fill: ${props=>props.theme.toastr.svg.color.warning};
    }
  }
  .toastr_info {
    path {
      fill: ${props=>props.theme.toastr.svg.color.info};
    }
  }
`;IconWrapper.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_1__.C6};const StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  margin: 0 15px;

  .toast-title {
    font-weight: ${props=>props.theme.toastr.title.fontWeight};
    margin: ${props=>props.theme.toastr.title.margin};
    margin-bottom: ${props=>props.theme.toastr.title.marginBottom};
    line-height: ${props=>props.theme.toastr.title.lineHeight};

    color: ${props=>props.theme.toastr.title.color[props.type]};
    font-size: ${props=>props.theme.toastr.title.fontSize};
  }

  .toast-text {
    line-height: ${props=>props.theme.toastr.text.lineHeight};
    align-self: center;
    font-size: ${props=>props.theme.toastr.text.fontSize};
    color: ${props=>props.theme.toastr.text.color};
    word-break: break-word;
  }
`;StyledDiv.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_1__.C6};const StyledCloseWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  .closeButton {
    opacity: 0.5;
    padding-top: 2px;
    &:hover {
      opacity: 1;
    }
  }
`,StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(_icon_button__WEBPACK_IMPORTED_MODULE_3__.K)`
  svg {
    path {
      fill: ${props=>props.theme.toastr.closeButtonColor};
    }
  }
`;StyledIconButton.defaultProps={theme:_themes__WEBPACK_IMPORTED_MODULE_1__.C6}},"./components/toast/Toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Toast});var react=__webpack_require__("../../node_modules/react/index.js"),react_toastify_esm=__webpack_require__("../../node_modules/react-toastify/dist/react-toastify.esm.mjs"),main=__webpack_require__("../../node_modules/react-device-detect/main.js"),Toast_styled=__webpack_require__("./components/toast/Toast.styled.ts"),portal=__webpack_require__("./components/portal/index.ts");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Slide=(0,react_toastify_esm.nk)({enter:"SlideIn",exit:"SlideOut"}),Toast=props=>{const[offset,setOffset]=(0,react.useState)(0),isServer=(()=>{const[isServer,setIsServer]=(0,react.useState)(!0);return(0,react.useEffect)((()=>{setIsServer(!1)}),[]),isServer})(),onResize=(0,react.useCallback)((event=>{if(window.visualViewport){const topOffset=event.target.innerHeight-window.visualViewport.height;setOffset(topOffset)}}),[]);(0,react.useEffect)((()=>(main.XF&&window.addEventListener("resize",onResize),()=>{window.removeEventListener("resize",onResize)})),[onResize]);const{className,style,isSSR}=props,element=(0,jsx_runtime.jsx)(Toast_styled.Ay,{containerId:"toast-container",className,draggable:!0,position:"top-right",toastClassName:context=>{switch(context?.type){case"success":return"Toastify__toast Toastify__toast--success";case"error":return"Toastify__toast Toastify__toast--error";case"info":return"Toastify__toast Toastify__toast--info";case"warning":return"Toastify__toast Toastify__toast--warning";default:return"Toastify__toast"}},rtl:!0,hideProgressBar:!0,newestOnTop:!0,pauseOnFocusLoss:!1,style,icon:!1,transition:Slide,onClick:()=>{const documentElement=document.getElementsByClassName("Toastify__toast");if(documentElement.length>1)for(let i=0;i<documentElement.length;i+=1){documentElement[i].style.setProperty("position","static")}},$topOffset:offset,"data-testid":"toast"});if(isServer&&isSSR)return null;const rootElement=document?.getElementById("root");return(0,jsx_runtime.jsx)(portal.Z,{element,appendTo:rootElement||void 0,visible:!0})};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"Title inside a toast",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Sets the color and icon of the toast",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},data:{defaultValue:null,description:"Any components or data inside a toast",name:"data",required:!1,type:{name:"string"}},withCross:{defaultValue:null,description:"If false: toast disappeared after clicking on any area of toast. If true: toast disappeared after clicking on close button",name:"withCross",required:!1,type:{name:"boolean"}},timeout:{defaultValue:null,description:"Time (in milliseconds) for showing your toast. Setting in 0 let you to show toast constantly until clicking on it",name:"timeout",required:!1,type:{name:"number"}},isSSR:{defaultValue:null,description:"",name:"isSSR",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"components/toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}try{Toast.displayName="Toast",__function.__docgenInfo={description:"",displayName:"Toast",props:{className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts css style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"Title inside a toast",name:"title",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"Sets the color and icon of the toast",name:"type",required:!1,type:{name:"ToastType | undefined"}},data:{defaultValue:null,description:"Any components or data inside a toast",name:"data",required:!1,type:{name:"string | undefined"}},withCross:{defaultValue:null,description:"If false: toast disappeared after clicking on any area of toast. If true: toast disappeared after clicking on close button",name:"withCross",required:!1,type:{name:"boolean | undefined"}},timeout:{defaultValue:null,description:"Time (in milliseconds) for showing your toast. Setting in 0 let you to show toast constantly until clicking on it",name:"timeout",required:!1,type:{name:"number | undefined"}},isSSR:{defaultValue:null,description:"",name:"isSSR",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"components/toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}},"./components/toast/sub-components/Toastr.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>toastr});var _path,react=__webpack_require__("../../node_modules/react/index.js"),react_toastify_esm=__webpack_require__("../../node_modules/react-toastify/dist/react-toastify.esm.mjs"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const check_toast_react=function SvgChecktoastreact(props){return react.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 8c0-.242-.014-.48-.042-.715l1.678-1.678A8 8 0 1111.799.958l-1.498 1.499A6 6 0 1014 8zm.207-3.793l-6.5 6.5a1 1 0 01-1.414 0l-3-3 1.414-1.414L7 8.585l5.793-5.792 1.414 1.414z",fill:"#333"})))};var info_toast_react_path,danger_toast_react=__webpack_require__("../../public/images/danger.toast.react.svg");function info_toast_react_extends(){return info_toast_react_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},info_toast_react_extends.apply(this,arguments)}const info_toast_react=function SvgInfotoastreact(props){return react.createElement("svg",info_toast_react_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),info_toast_react_path||(info_toast_react_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8c0-2.22 1.207-4.16 3-5.197V.582A8.003 8.003 0 008 16 8 8 0 0011 .582v2.22A6 6 0 112 8zm6-8h.087-.174H8zM7 1v2h2V1H7zm0 3v8h2V4H7z",fill:"#333"})))};var cross_reacturl=__webpack_require__("../../public/images/cross.react.svg?url"),common_icons_style=__webpack_require__("./utils/common-icons-style.ts"),cookie=__webpack_require__("./utils/cookie.ts"),components_text=__webpack_require__("./components/text/index.tsx"),box=__webpack_require__("./components/box/index.tsx"),Toast_styled=__webpack_require__("./components/toast/Toast.styled.ts"),Toast_enums=__webpack_require__("./components/toast/Toast.enums.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const getTitle=type=>{const cookieLang=(0,cookie.Ri)("asc_language"),lang="en-US"===cookieLang||"en-GB"===cookieLang?"en":cookieLang,commonKeys=window.i18n&&Object.getOwnPropertyNames(window.i18n.loaded).filter((k=>k.indexOf(`${lang}/Common.json`)>-1))||[];if(0===commonKeys.length)return;const key=1===commonKeys.length?commonKeys[0]:commonKeys[1];return window.i18n.loaded[key].data[type]},StyledCheckToastIcon=(0,styled_components_browser_esm.Ay)(check_toast_react)`
  ${common_icons_style.A}
`,StyledDangerToastIcon=(0,styled_components_browser_esm.Ay)(danger_toast_react.A)`
  ${common_icons_style.A}
`,StyledInfoToastIcon=(0,styled_components_browser_esm.Ay)(info_toast_react)`
  ${common_icons_style.A}
`,Icon=({type,size})=>type===Toast_enums.C.success?(0,jsx_runtime.jsx)(StyledCheckToastIcon,{size,className:"toastr_icon toastr_success"}):type===Toast_enums.C.error?(0,jsx_runtime.jsx)(StyledDangerToastIcon,{size,className:"toastr_icon toastr_error"}):type===Toast_enums.C.warning?(0,jsx_runtime.jsx)(StyledDangerToastIcon,{size,className:"toastr_icon toastr_warning"}):(0,jsx_runtime.jsx)(StyledInfoToastIcon,{size,className:"toastr_icon toastr_info"}),CloseButton=({closeToast})=>(0,jsx_runtime.jsx)(Toast_styled.Vq,{children:(0,jsx_runtime.jsx)(Toast_styled.Bj,{className:"closeButton",onClick:closeToast,iconName:cross_reacturl,size:12})});CloseButton.displayName="CloseButton";const notify=(type,data,title,timeout=5e3,withCross=!1,centerPosition=!1)=>(0,react_toastify_esm.oR)((0,jsx_runtime.jsxs)(box.a,{displayProp:"flex",alignItems:"center",children:[(0,jsx_runtime.jsx)(Toast_styled.hh,{children:(0,jsx_runtime.jsx)(Icon,{size:common_icons_style.r.medium,type})}),(0,jsx_runtime.jsxs)(Toast_styled.jx,{type,children:[title&&(0,jsx_runtime.jsx)(components_text.E,{className:"toast-title",children:title}),"string"==typeof data?data&&(0,jsx_runtime.jsx)(components_text.E,{className:"toast-text",children:data}):data]})]}),{data,type,closeOnClick:!withCross,closeButton:withCross&&(0,jsx_runtime.jsx)(CloseButton,{}),autoClose:0!==timeout&&(timeout<750?5e3:timeout||5e3),position:centerPosition?"top-center":void 0,containerId:"toast-container"});const toastr={clear:function clear(){return react_toastify_esm.oR.dismiss()},error:function error(data,title,timeout,withCross,centerPosition){let message="";return"string"==typeof data?message=data:data&&"object"==typeof data&&("response"in data||"statusText"in data||"message"in data)?message=data?.response?.data?.error?.message||data?.statusText||data?.message:react.isValidElement(data)&&(message=data),notify(Toast_enums.C.error,message,title||getTitle("Warning")||"",timeout||5e3,withCross,centerPosition)},info:function info(data,title,timeout,withCross,centerPosition){return notify(Toast_enums.C.info,data,title||getTitle("Info")||"",timeout||5e3,withCross,centerPosition)},success:function success(data,title,timeout,withCross,centerPosition){return notify(Toast_enums.C.success,data,title||getTitle("Done")||"",timeout||5e3,withCross,centerPosition)},warning:function warning(data,title,timeout,withCross,centerPosition){return notify(Toast_enums.C.warning,data,title||getTitle("Alert")||"",timeout||5e3,withCross,centerPosition)}}},"../../public/images/danger.toast.react.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgDangertoastreact(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.395 2.543c1.151-2.016 4.058-2.016 5.21 0l4.553 7.969c1.143 2-.301 4.488-2.605 4.488H11v-2h1.554a1 1 0 00.868-1.496L8.868 3.535a1 1 0 00-1.737 0l-4.553 7.969A1 1 0 003.446 13h1.553v2H3.446C1.142 15-.302 12.512.84 10.512l4.554-7.97zM6.999 15v-2h2v2H7zm0-3V6h2v6H7z",fill:"#333"})))}},"../../public/images/cross.react.svg?url":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"images/cross.react.svg?hash=ee82e72a2e3a9d86d4d8"}}]);
//# sourceMappingURL=9732.5f64e16d.iframe.bundle.js.map