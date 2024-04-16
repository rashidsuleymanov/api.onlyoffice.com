"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[406],{"./components/error-container/ErrorContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ErrorContainer_stories});var react=__webpack_require__("../../node_modules/react/index.js"),components_text=__webpack_require__("./components/text/index.tsx"),components_button=__webpack_require__("./components/button/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),enums=__webpack_require__("./enums/index.ts");const StyledWrapper=styled_components_browser_esm.Ay.div`
  @media ${utils.Hw} {
    ${props=>!props.isResizable&&"display: none"};

    ${props=>props.isMobile&&props.isResizable&&styled_components_browser_esm.AH`
        display: flex;
        background-color: ${props.theme.header.backgroundColor};
        height: ${props.theme.header.height};
        position: fixed;
        top: 0;
        width: 100%;
        align-content: center;
        text-align: center;
        img {
          height: 24px;
          margin: auto;
        }
      `}
  }
`;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DocspaceLogo=({className,isResizable=!1})=>{const theme=(0,styled_components_browser_esm.DP)(),[size,setSize]=(0,react.useState)(window.innerWidth),onResize=()=>{setSize(window.innerWidth)};react.useEffect((()=>(isResizable&&window.addEventListener("resize",onResize),()=>{window.removeEventListener("resize",onResize)})),[isResizable]);const isMobile=size<=utils.Ej.mobile,logoSize=isResizable&&isMobile?enums.RX.LightSmall:enums.RX.LoginPage,logo=(0,utils.D1)(logoSize,!theme.isBase);return(0,jsx_runtime.jsx)(StyledWrapper,{isMobile,isResizable,logo:!!logo,children:logo&&(0,jsx_runtime.jsx)("img",{src:logo,className:(0,utils.xW)("logo-wrapper",className),alt:""})})};DocspaceLogo.displayName="DocspaceLogo";const docspace_logo_DocspaceLogo=DocspaceLogo;try{DocspaceLogo.displayName="DocspaceLogo",DocspaceLogo.__docgenInfo={description:"",displayName:"DocspaceLogo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isResizable:{defaultValue:{value:"false"},description:"",name:"isResizable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/docspace-logo/DocspaceLogo.tsx#DocspaceLogo"]={docgenInfo:DocspaceLogo.__docgenInfo,name:"DocspaceLogo",path:"components/docspace-logo/DocspaceLogo.tsx#DocspaceLogo"})}catch(__react_docgen_typescript_loader_error){}try{DocspaceLogo.displayName="DocspaceLogo",__function.__docgenInfo={description:"",displayName:"DocspaceLogo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isResizable:{defaultValue:{value:!1},description:"",name:"isResizable",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/docspace-logo/DocspaceLogo.tsx#DocspaceLogo"]={docgenInfo:DocspaceLogo.__docgenInfo,name:"DocspaceLogo",path:"components/docspace-logo/DocspaceLogo.tsx#DocspaceLogo"})}catch(__react_docgen_typescript_loader_error){}var Headline=__webpack_require__("./components/headline/Headline.tsx"),themes=__webpack_require__("./themes/index.ts");const StyledErrorContainer=styled_components_browser_esm.Ay.div`
  background: ${props=>props.theme.errorContainer.background};
  cursor: default;
  width: ${props=>props.isEditor?"100%":"auto"};
  height: "100%";

  ${props=>props.isEditor&&styled_components_browser_esm.AH`
      position: absolute;
    `}
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 100px;
  border: 0;
  box-sizing: border-box;

  .error_description_link {
    color: #2da7db;
    font-size: ${props=>props.theme.getCorrectFontSize("13px")};
    font-weight: 600;
  }

  #container {
    position: relative;
    margin: 64px 16px 48px 16px;
  }

  #header {
    font-weight: 700;
    font-size: ${props=>props.theme.getCorrectFontSize("23px")};
    line-height: 28px;
    margin: 8px 0 20px 0;
    text-align: center;
  }

  #text {
    font-weight: 600;
    font-size: ${props=>props.theme.getCorrectFontSize("14px")};
    line-height: 16px;
    text-align: center;
    margin-bottom: 24px;
    max-width: 560px;
    padding: 0;
  }

  #button-container {
    width: 320px;
    margin-top: 24px;
  }

  #customized-text {
    color: ${props=>props.theme.errorContainer.bodyText};
  }

  @media ${utils.L_} {
    body {
      padding: 24px 24px 0 24px;
    }
  }

  @media ${utils.Hw} {
    padding-top: 80px;

    body {
      padding: 18px 18px 0 18px;
    }

    #header {
      margin-top: 12px;
    }

    #container {
      margin: 12px 16px 36px 16px;
    }

    #button-container {
      width: 100%;
    }

    #button {
      width: 100%;
    }
  }

  #background {
    width: 100%;
    height: auto;
    -webkit-animation: fadein_background 1s;
    -moz-animation: fadein_background 1s;
    -ms-animation: fadein_background 1s;
    -o-animation: fadein_background 1s;
    animation: fadein_background 1s;
  }

  @keyframes fadein_background {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein_background {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein_background {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein_background {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  #birds {
    position: absolute;
    left: 56.8%;
    top: 27.4%;
    width: 35%;
    height: 33.7%;
    z-index: 1;
    -webkit-animation: fadein_birds 1s;
    -moz-animation: fadein_birds 1s;
    -ms-animation: fadein_birds 1s;
    -o-animation: fadein_birds 1s;
    animation: fadein_birds 1s;
  }

  @keyframes fadein_birds {
    from {
      opacity: 0;
      left: 56.8%;
      top: 0;
    }

    to {
      opacity: 1;
      left: 56.8%;
      top: 27.4%;
    }
  }

  @-moz-keyframes fadein_birds {
    from {
      opacity: 0;
      left: 56.8%;
      top: 0;
    }

    to {
      opacity: 1;
      left: 56.8%;
      top: 27.4%;
    }
  }

  @-webkit-keyframes fadein_birds {
    from {
      opacity: 0;
      left: 56.8%;
      top: 0;
    }

    to {
      opacity: 1;
      left: 56.8%;
      top: 27.4%;
    }
  }

  @-ms-keyframes fadein_birds {
    from {
      opacity: 0;
      left: 56.8%;
      top: 0;
    }

    to {
      opacity: 1;
      left: 56.8%;
      top: 27.4%;
    }
  }

  #mountain-left {
    position: absolute;
    left: 10.66%;
    top: 63.01%;
    width: 25.46%;
    height: 35.61%;
    z-index: 2;
    -webkit-animation: fadein_mountain-left 1s;
    -moz-animation: fadein_mountain-left 1s;
    -ms-animation: fadein_mountain-left 1s;
    -o-animation: fadein_mountain-left 1s;
    animation: fadein_mountain-left 1s;
  }

  @keyframes fadein_mountain-left {
    from {
      opacity: 0;
      left: 10.66%;
      top: 90.4%;
    }

    to {
      opacity: 1;
      left: 10.66%;
      top: 63.01%;
    }
  }

  @-moz-keyframes fadein_mountain-left {
    from {
      opacity: 0;
      left: 10.66%;
      top: 90.4%;
    }

    to {
      opacity: 1;
      left: 10.66%;
      top: 63.01%;
    }
  }

  @-webkit-keyframes fadein_mountain-left {
    from {
      opacity: 0;
      left: 10.66%;
      top: 90.4%;
    }

    to {
      opacity: 1;
      left: 10.66%;
      top: 63.01%;
    }
  }

  @-ms-keyframes fadein_mountain-left {
    from {
      opacity: 0;
      left: 10.66%;
      top: 90.4%;
    }

    to {
      opacity: 1;
      left: 10.66%;
      top: 63.01%;
    }
  }

  #mountain-right {
    position: absolute;
    left: 58.66%;
    top: 54.79%;
    width: 30.66%;
    height: 44.38%;
    z-index: 3;
    -webkit-animation: fadein_mountain-right 1s;
    -moz-animation: fadein_mountain-right 1s;
    -ms-animation: fadein_mountain-right 1s;
    -o-animation: fadein_mountain-right 1s;
    animation: fadein_mountain-right 1s;
  }

  @keyframes fadein_mountain-right {
    from {
      opacity: 0;
      left: 58.66%;
      top: 82.19%;
    }

    to {
      opacity: 1;
      left: 58.66%;
      top: 54.79%;
    }
  }

  @-moz-keyframes fadein_mountain-right {
    from {
      opacity: 0;
      left: 58.66%;
      top: 82.19%;
    }

    to {
      opacity: 1;
      left: 58.66%;
      top: 54.79%;
    }
  }

  @-webkit-keyframes fadein_mountain-right {
    from {
      opacity: 0;
      left: 58.66%;
      top: 82.19%;
    }

    to {
      opacity: 1;
      left: 58.66%;
      top: 54.79%;
    }
  }

  @-ms-keyframes fadein_mountain-right {
    from {
      opacity: 0;
      left: 58.66%;
      top: 82.19%;
    }

    to {
      opacity: 1;
      left: 58.66%;
      top: 54.79%;
    }
  }

  #mountain-center {
    position: absolute;
    left: 24.8%;
    top: 45.47%;
    width: 48.53%;
    height: 66.3%;
    z-index: 5;
    -webkit-animation: fadein_mountain-center 1s;
    -moz-animation: fadein_mountain-center 1s;
    -ms-animation: fadein_mountain-center 1s;
    -o-animation: fadein_mountain-center 1s;
    animation: fadein_mountain-center 1s;
  }

  @keyframes fadein_mountain-center {
    from {
      opacity: 0;
      left: 24.8%;
      top: 72.87%;
    }

    to {
      opacity: 1;
      left: 24.8%;
      top: 45.47%;
    }
  }

  @-moz-keyframes fadein_mountain-center {
    from {
      opacity: 0;
      left: 24.8%;
      top: 72.87%;
    }

    to {
      opacity: 1;
      left: 24.8%;
      top: 45.47%;
    }
  }

  @-webkit-keyframes fadein_mountain-center {
    from {
      opacity: 0;
      left: 24.8%;
      top: 72.87%;
    }

    to {
      opacity: 1;
      left: 24.8%;
      top: 45.47%;
    }
  }

  @-ms-keyframes fadein_mountain-center {
    from {
      opacity: 0;
      left: 24.8%;
      top: 72.87%;
    }

    to {
      opacity: 1;
      left: 24.8%;
      top: 45.47%;
    }
  }

  #white-cloud-behind {
    position: absolute;
    left: 57.33%;
    top: 63.01%;
    width: 8.4%;
    height: 7.39%;
    z-index: 4;
    -webkit-animation:
      fadein_white-cloud-behind 1s ease-in,
      move_white-cloud-behind 1s linear 1s infinite alternate;
    -moz-animation:
      fadein_white-cloud-behind 1s ease-in,
      move_white-cloud-behind 1s linear 1s infinite alternate;
    -ms-animation:
      fadein_white-cloud-behind 1s ease-in,
      move_white-cloud-behind 1s linear 1s infinite alternate;
    -o-animation:
      fadein_white-cloud-behind 1s ease-in,
      move_white-cloud-behind 1s linear 1s infinite alternate;
    animation:
      fadein_white-cloud-behind 1s ease-in,
      move_white-cloud-behind 1s linear 1s infinite alternate;
  }

  @keyframes fadein_white-cloud-behind {
    from {
      opacity: 0;
      left: 57.33%;
      top: 90.41%;
    }

    to {
      opacity: 1;
      left: 57.33%;
      top: 63.01%;
    }
  }

  @-moz-keyframes fadein_white-cloud-behind {
    from {
      opacity: 0;
      left: 57.33%;
      top: 90.41%;
    }

    to {
      opacity: 1;
      left: 57.33%;
      top: 63.01%;
    }
  }

  @-webkit-keyframes fadein_white-cloud-behind {
    from {
      opacity: 0;
      left: 57.33%;
      top: 90.41%;
    }

    to {
      opacity: 1;
      left: 57.33%;
      top: 63.01%;
    }
  }

  @-ms-keyframes fadein_white-cloud-behind {
    from {
      opacity: 0;
      left: 57.33%;
      top: 90.41%;
    }

    to {
      opacity: 1;
      left: 57.33%;
      top: 63.01%;
    }
  }

  @keyframes move_white-cloud-behind {
    from {
      top: 63.01%;
    }

    to {
      top: 64.65%;
    }
  }

  @-moz-keyframes move_white-cloud-behind {
    from {
      top: 63.01%;
    }

    to {
      top: 64.65%;
    }
  }

  @-webkit-keyframes move_white-cloud-behind {
    from {
      top: 63.01%;
    }

    to {
      top: 64.65%;
    }
  }

  @-ms-keyframes move_white-cloud-behind {
    from {
      top: 63.01%;
    }

    to {
      top: 64.65%;
    }
  }

  #white-cloud-center {
    position: absolute;
    left: 31.33%;
    top: 73.97%;
    width: 9.86%;
    height: 9.04%;
    z-index: 6;
    -webkit-animation:
      fadein_white-cloud-center 1s ease-in,
      move_white-cloud-center 1s linear 1s infinite alternate;
    -moz-animation:
      fadein_white-cloud-center 1s ease-in,
      move_white-cloud-center 1s linear 1s infinite alternate;
    -ms-animation:
      fadein_white-cloud-center 1s ease-in,
      move_white-cloud-center 1s linear 1s infinite alternate;
    -o-animation:
      fadein_white-cloud-center 1s ease-in,
      move_white-cloud-center 1s linear 1s infinite alternate;
    animation:
      fadein_white-cloud-center 1s ease-in,
      move_white-cloud-center 1s linear 1s infinite alternate;
  }

  @keyframes fadein_white-cloud-center {
    from {
      opacity: 0;
      left: 31.33%;
      top: 101.36%;
    }

    to {
      opacity: 1;
      left: 31.33%;
      top: 73.97%;
    }
  }

  @-moz-keyframes fadein_white-cloud-center {
    from {
      opacity: 0;
      left: 31.33%;
      top: 101.36%;
    }

    to {
      opacity: 1;
      left: 31.33%;
      top: 73.97%;
    }
  }

  @-webkit-keyframes fadein_white-cloud-center {
    from {
      opacity: 0;
      left: 31.33%;
      top: 101.36%;
    }

    to {
      opacity: 1;
      left: 31.33%;
      top: 73.97%;
    }
  }

  @-ms-keyframes fadein_white-cloud-center {
    from {
      opacity: 0;
      left: 31.33%;
      top: 101.36%;
    }

    to {
      opacity: 1;
      left: 31.33%;
      top: 73.97%;
    }
  }

  @keyframes move_white-cloud-center {
    from {
      top: 73.97%;
    }

    to {
      top: 72.32%;
    }
  }

  @-moz-keyframes move_white-cloud-center {
    from {
      top: 73.97%;
    }

    to {
      top: 72.32%;
    }
  }

  @-webkit-keyframes move_white-cloud-center {
    from {
      top: 73.97%;
    }

    to {
      top: 72.32%;
    }
  }

  @-ms-keyframes move_white-cloud-center {
    from {
      top: 73.97%;
    }

    to {
      top: 72.32%;
    }
  }

  #white-cloud-left {
    position: absolute;
    left: -0.66%;
    top: 80.82%;
    width: 24%;
    height: 21.91%;
    z-index: 7;
    -webkit-animation: fadein_white-cloud-left 1s ease-in;
    -moz-animation: fadein_white-cloud-left 1s ease-in;
    -ms-animation: fadein_white-cloud-left 1s ease-in;
    -o-animation: fadein_white-cloud-left 1s ease-in;
    animation: fadein_white-cloud-left 1s ease-in;
  }

  @keyframes fadein_white-cloud-left {
    from {
      opacity: 0;
      left: -14%;
      top: 80.82%;
    }

    to {
      opacity: 1;
      left: -0.66%;
      top: 80.82%;
    }
  }

  @-moz-keyframes fadein_white-cloud-left {
    from {
      opacity: 0;
      left: -14%;
      top: 80.82%;
    }

    to {
      opacity: 1;
      left: -0.66%;
      top: 80.82%;
    }
  }

  @-webkit-keyframes fadein_white-cloud-left {
    from {
      opacity: 0;
      left: -14%;
      top: 80.82%;
    }

    to {
      opacity: 1;
      left: -0.66%;
      top: 80.82%;
    }
  }

  @-ms-keyframes fadein_white-cloud-left {
    from {
      opacity: 0;
      left: -14%;
      top: 80.82%;
    }

    to {
      opacity: 1;
      left: -0.66%;
      top: 80.82%;
    }
  }

  #white-cloud-right {
    position: absolute;
    left: 81.33%;
    top: 86.3%;
    width: 21.33%;
    height: 19.17%;
    z-index: 8;
    -webkit-animation: fadein_white-cloud-right 1s ease-in;
    -moz-animation: fadein_white-cloud-right 1s ease-in;
    -ms-animation: fadein_white-cloud-right 1s ease-in;
    -o-animation: fadein_white-cloud-right 1s ease-in;
    animation: fadein_white-cloud-right 1s ease-in;
  }

  @keyframes fadein_white-cloud-right {
    from {
      opacity: 0;
      left: 94.66%;
      top: 86.3%;
    }

    to {
      opacity: 1;
      left: 81.33%;
      top: 86.3%;
    }
  }

  @-moz-keyframes fadein_white-cloud-right {
    from {
      opacity: 0;
      left: 94.66%;
      top: 86.3%;
    }

    to {
      opacity: 1;
      left: 81.33%;
      top: 86.3%;
    }
  }

  @-webkit-keyframes fadein_white-cloud-right {
    from {
      opacity: 0;
      left: 94.66%;
      top: 86.3%;
    }

    to {
      opacity: 1;
      left: 81.33%;
      top: 86.3%;
    }
  }

  @-ms-keyframes fadein_white-cloud-right {
    from {
      opacity: 0;
      left: 94.66%;
      top: 86.3%;
    }

    to {
      opacity: 1;
      left: 81.33%;
      top: 86.3%;
    }
  }

  #blue-cloud-left {
    position: absolute;
    left: 0;
    top: 43.83%;
    width: 8.4%;
    height: 6.57%;
    z-index: 9;
    -webkit-animation: fadein_blue-cloud-left 1s ease-in;
    -moz-animation: fadein_blue-cloud-left 1s ease-in;
    -ms-animation: fadein_blue-cloud-left 1s ease-in;
    -o-animation: fadein_blue-cloud-left 1s ease-in;
    animation: fadein_blue-cloud-left 1s ease-in;
  }

  @keyframes fadein_blue-cloud-left {
    from {
      opacity: 0;
      left: -13.33%;
      top: 43.83%;
    }

    to {
      opacity: 1;
      left: 0;
      top: 43.83%;
    }
  }

  @-moz-keyframes fadein_blue-cloud-left {
    from {
      opacity: 0;
      left: -13.33%;
      top: 43.83%;
    }

    to {
      opacity: 1;
      left: 0;
      top: 43.83%;
    }
  }

  @-webkit-keyframes fadein_blue-cloud-left {
    from {
      opacity: 0;
      left: -13.33%;
      top: 43.83%;
    }

    to {
      opacity: 1;
      left: 0;
      top: 43.83%;
    }
  }

  @-ms-keyframes fadein_blue-cloud-left {
    from {
      opacity: 0;
      left: -13.33%;
      top: 43.83%;
    }

    to {
      opacity: 1;
      left: 0;
      top: 43.83%;
    }
  }

  #blue-cloud-right {
    position: absolute;
    left: 87.33%;
    top: 24.65%;
    width: 11.33%;
    height: 9.04%;
    z-index: 1;
    -webkit-animation: fadein_blue-cloud-right 1s ease-in;
    -moz-animation: fadein_blue-cloud-right 1s ease-in;
    -ms-animation: fadein_blue-cloud-right 1s ease-in;
    -o-animation: fadein_blue-cloud-right 1s ease-in;
    animation: fadein_blue-cloud-right 1s ease-in;
  }

  @keyframes fadein_blue-cloud-right {
    from {
      opacity: 0;
      left: 100.66%;
      top: 24.65%;
    }

    to {
      opacity: 1;
      left: 87.33%;
      top: 24.65%;
    }
  }

  @-moz-keyframes fadein_blue-cloud-right {
    from {
      opacity: 0;
      left: 100.66%;
      top: 24.65%;
    }

    to {
      opacity: 1;
      left: 87.33%;
      top: 24.65%;
    }
  }

  @-webkit-keyframes fadein_blue-cloud-right {
    from {
      opacity: 0;
      left: 100.66%;
      top: 24.65%;
    }

    to {
      opacity: 1;
      left: 87.33%;
      top: 24.65%;
    }
  }

  @-ms-keyframes fadein_blue-cloud-right {
    from {
      opacity: 0;
      left: 100.66%;
      top: 24.65%;
    }

    to {
      opacity: 1;
      left: 87.33%;
      top: 24.65%;
    }
  }

  #baloon {
    position: absolute;
    left: 25.33%;
    top: 13.69%;
    width: 12.26%;
    height: 38.08%;
    z-index: 11;
    -webkit-animation:
      fadein_baloon 1s,
      move_baloon 1s linear 1s infinite alternate;
    -moz-animation:
      fadein_baloon 1s,
      move_baloon 1s linear 1s infinite alternate;
    -ms-animation:
      fadein_baloon 1s,
      move_baloon 1s linear 1s infinite alternate;
    -o-animation:
      fadein_baloon 1s,
      move_baloon 1s linear 1s infinite alternate;
    animation:
      fadein_baloon 1s,
      move_baloon 1s linear 1s infinite alternate;
  }

  @keyframes fadein_baloon {
    from {
      left: 25.33%;
      top: 8.21%;
    }

    to {
      left: 25.33%;
      top: 13.69%;
    }
  }

  @-moz-keyframes fadein_baloon {
    from {
      left: 25.33%;
      top: 8.21%;
    }

    to {
      left: 25.33%;
      top: 13.69%;
    }
  }

  @-webkit-keyframes fadein_baloon {
    from {
      left: 25.33%;
      top: 8.21%;
    }

    to {
      left: 25.33%;
      top: 13.69%;
    }
  }

  @-ms-keyframes fadein_baloon {
    from {
      left: 25.33%;
      top: 8.21%;
    }

    to {
      left: 25.33%;
      top: 13.69%;
    }
  }

  @keyframes move_baloon {
    from {
      top: 13.69%;
    }

    to {
      top: 15.34%;
    }
  }

  @-moz-keyframes move_baloon {
    from {
      top: 13.69%;
    }

    to {
      top: 15.34%;
    }
  }

  @-webkit-keyframes move_baloon {
    from {
      top: 13.69%;
    }

    to {
      top: 15.34%;
    }
  }

  @-ms-keyframes move_baloon {
    from {
      top: 13.69%;
    }

    to {
      top: 15.34%;
    }
  }
`;StyledErrorContainer.defaultProps={theme:themes.C6};const ErrorContainer_styled=StyledErrorContainer,ErrorContainer=props=>{const{headerText,bodyText,buttonText,onClickButton,children,customizedBodyText,isPrimaryButton=!0,isEditor=!1,...rest}=props;return(0,jsx_runtime.jsxs)(ErrorContainer_styled,{...rest,isEditor,"data-testid":"ErrorContainer",children:[(0,jsx_runtime.jsx)(docspace_logo_DocspaceLogo,{isResizable:!0}),(0,jsx_runtime.jsxs)("div",{id:"container",children:[(0,jsx_runtime.jsx)("svg",{id:"background",width:"753",height:"361",viewBox:"0 0 753 361",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M605.159 329.5L502.298 335.217C254.439 335.217 356.184 345.596 268.916 345.596C179.954 345.596 145.188 350.392 79.3741 349.916C17.1668 345.596 -36.4313 231.143 31.8546 171.934C109.509 90.4003 120.656 5.02279e-06 254.764 0C357.493 -3.84752e-06 383.499 65.6633 577.897 46.6555C712.51 33.4934 779.566 260.925 742.919 335.217C713.53 394.796 605.159 329.5 605.159 329.5Z",fill:"#E9F7FF"})}),(0,jsx_runtime.jsxs)("svg",{id:"birds",width:"263",height:"123",viewBox:"0 0 263 123",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M53.0374 0C52.4644 0 52 0.457978 52 1.02292C52 1.58787 52.4644 2.04584 53.0374 2.04584C57.1445 2.04584 60.1955 5.68928 61.3682 9.2816C61.5035 9.70858 61.9047 10 62.3585 10C62.8124 10 63.2137 9.70875 63.3489 9.28152L63.3492 9.28052C64.4188 5.99204 67.0823 2.04584 70.9626 2.04584C71.5356 2.04584 72 1.58787 72 1.02292C72 0.457978 71.5356 0 70.9626 0C66.9479 0 64.0346 3.08772 62.3445 6.38386C60.4819 2.8992 57.243 0 53.0374 0Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M27.193 29C26.5341 29 26 29.5496 26 30.2275C26 30.9054 26.5341 31.455 27.193 31.455C31.9162 31.455 35.4248 35.8271 36.7734 40.1379C36.929 40.6503 37.3905 41 37.9123 41C38.4343 41 38.8957 40.6505 39.0512 40.1378L39.0516 40.1366C40.2816 36.1905 43.3447 31.455 47.807 31.455C48.4659 31.455 49 30.9054 49 30.2275C49 29.5496 48.4659 29 47.807 29C43.1901 29 39.8397 32.7053 37.8962 36.6606C35.7542 32.479 32.0294 29 27.193 29Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M0 6.97439C0 6.43625 0.473705 6 1.05805 6C3.80222 6 5.62553 7.54675 6.702 8.93327C6.89487 9.18168 7.06749 9.4293 7.22099 9.66845C7.36273 9.43672 7.52095 9.19713 7.6963 8.95671C8.68661 7.59887 10.39 6 12.9419 6C13.5263 6 14 6.43625 14 6.97439C14 7.51254 13.5263 7.94879 12.9419 7.94879C11.4534 7.94879 10.3046 8.87553 9.45294 10.0433C9.03994 10.6096 8.73563 11.1828 8.53414 11.6183C8.43406 11.8346 8.361 12.0133 8.31384 12.1353C8.2903 12.1962 8.27331 12.2428 8.26273 12.2725L8.25168 12.3041L8.25017 12.3084C8.1147 12.7189 7.70352 13 7.23768 13C6.77235 13 6.36174 12.72 6.22581 12.3103L6.22539 12.3091C6.22529 12.3088 6.22518 12.3084 7.23768 12.0256L6.22539 12.3091L6.22407 12.3052L6.21337 12.2749C6.203 12.246 6.18614 12.2004 6.16254 12.1403C6.11528 12.0201 6.04139 11.8434 5.93891 11.6292C5.73262 11.198 5.41731 10.6292 4.98064 10.0667C4.09627 8.92764 2.82976 7.94879 1.05805 7.94879C0.473705 7.94879 0 7.51254 0 6.97439Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M250.058 116C249.474 116 249 116.436 249 116.974C249 117.513 249.474 117.949 250.058 117.949C251.83 117.949 253.096 118.928 253.981 120.067C254.417 120.629 254.733 121.198 254.939 121.629C255.041 121.843 255.115 122.02 255.163 122.14C255.176 122.174 255.187 122.203 255.196 122.228C255.203 122.246 255.209 122.262 255.213 122.275L255.224 122.305L255.225 122.308L256.238 122.026C255.225 122.308 255.225 122.308 255.225 122.308L255.226 122.31",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M250.058 116C252.802 116 254.626 117.547 255.702 118.933L250.058 116Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M255.702 118.933C255.895 119.182 256.068 119.429 256.221 119.668L255.702 118.933Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M256.221 119.668C256.363 119.437 256.521 119.197 256.696 118.957L256.221 119.668Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M256.696 118.957C257.687 117.599 259.39 116 261.942 116L256.696 118.957Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M261.942 116C262.526 116 263 116.436 263 116.974L261.942 116Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M263 116.974C263 117.513 262.526 117.949 261.942 117.949L263 116.974Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M261.942 117.949C260.453 117.949 259.305 118.876 258.453 120.043L261.942 117.949Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M258.453 120.043C258.04 120.61 257.736 121.183 257.534 121.618L258.453 120.043Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M257.534 121.618C257.434 121.835 257.361 122.013 257.314 122.135L257.534 121.618Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M257.314 122.135C257.29 122.196 257.273 122.243 257.263 122.272L257.314 122.135Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M257.263 122.272L257.252 122.304L257.263 122.272Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M257.252 122.304L257.25 122.308L257.252 122.304Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M257.25 122.308C257.115 122.719 256.704 123 256.238 123L257.25 122.308Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M256.238 123C255.772 123 255.362 122.719 255.226 122.31L256.238 123Z",fill:"#BADAF4"}),(0,jsx_runtime.jsx)("path",{d:"M255.226 122.31C255.226 122.31 255.226 122.31 255.226 122.31V122.31Z",fill:"#BADAF4"})]}),(0,jsx_runtime.jsxs)("svg",{id:"mountain-left",width:"191",height:"130",viewBox:"0 0 191 130",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100.787 5.63419L179.184 110.875C181.935 114.568 190.942 119.551 190.942 119.551C190.942 119.551 148.016 118.255 88.8323 126.895C29.6489 135.535 0 119.234 0 119.234C0 119.234 3.8778 114.47 6.75659 110.778L88.8323 5.53793C91.5955 1.99477 98.1152 2.04727 100.787 5.63419Z",fill:"#E1C6C6"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.5 5.53794C121 36.912 127.5 87.412 159 119.234C159 119.234 148.016 118.255 88.8323 126.895C29.6489 135.535 0 119.234 0 119.234C0 119.234 3.8778 114.47 6.75659 110.778L88.8323 5.53794C91.5955 1.99478 92.828 1.95102 95.5 5.53794Z",fill:"#E6CECE"}),(0,jsx_runtime.jsx)("path",{d:"M108.5 33.912C113 28.412 120.893 33.1437 120 30.912C119 28.412 110.66 17.004 108.5 14.412L99.5 3.41202C95.5 -1.08798 90 0.412003 85 7.41202L78.5 15.912C74.5 20.9261 66.5 32.912 66.5 32.912C77.5 22.912 82.1015 32.5223 87 27.912C95.5 19.912 102.003 41.8522 108.5 33.912Z",fill:"white"})]}),(0,jsx_runtime.jsxs)("svg",{id:"mountain-right",width:"230",height:"162",viewBox:"0 0 230 162",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M129.056 6.27931L222.861 131.807C226.153 136.213 229.641 144.1 229.641 144.1C229.641 144.1 208.905 171.748 121.642 156.196C34.3791 140.644 0.251465 156.196 0.251465 156.196C0.251465 156.196 13.0994 136.095 16.544 131.692L114.751 6.16449C118.058 1.93832 125.859 2.00093 129.056 6.27931Z",fill:"#B59C9C"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M129.056 6.27931C143.5 57.412 184.124 100.94 206 150.412C206 150.412 208.905 171.748 121.642 156.196C34.3791 140.644 0.251465 156.196 0.251465 156.196C0.251465 156.196 13.0994 136.095 16.544 131.692L114.751 6.16449C118.058 1.93832 125.859 2.00093 129.056 6.27931Z",fill:"#BCA7A7"}),(0,jsx_runtime.jsx)("path",{d:"M109 39.912C105.361 43.8211 104 29.9121 95.5 28.912C95.5 28.912 96.2357 26.3398 98.1979 23.9575L114.845 3.03197C117.929 -0.71246 124.826 -0.603776 127.724 3.23494L145.223 26.4121C146.136 27.6214 151.854 34.2395 151.018 35.484C144 35.484 138.674 23.9041 132 31.412C124 40.412 122.5 25.412 109 39.912Z",fill:"white"})]}),(0,jsx_runtime.jsxs)("svg",{id:"mountain-center",width:"364",height:"242",viewBox:"0 0 364 242",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M196.843 8.54528L345.932 200.731C351.165 207.476 363.298 222.596 363.298 222.596C363.298 222.596 293.315 257.164 180.564 230.372C67.8133 203.579 5.17395 215.997 5.17395 215.997C5.17395 215.997 12.5485 207.296 18.0231 200.555L174.108 8.36949C179.363 1.89911 191.762 1.99498 196.843 8.54528Z",fill:"#FAE0D2"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M192 5.77758C251.837 82.912 281 186.912 333.923 232.532C333.923 232.532 270.851 252.836 174.108 232.532C77.3655 212.228 0.854004 219.14 0.854004 219.14C58.5157 151.11 117.888 75.0012 174.108 5.77758C179.363 -0.6928 186.919 -0.772726 192 5.77758Z",fill:"#FFE9DD"}),(0,jsx_runtime.jsx)("path",{d:"M147.732 91.7013C137.365 88.6773 149.808 61.2481 120 72.912C112.211 69.8585 151.512 30.5027 168.9 9.16558C177.108 -0.263733 185.748 -4.83696 196.98 7.46215C213.582 28.4184 249.705 64.8585 245.5 71.412C223.9 62.3926 252.154 99.9491 217.284 78.6262C204.756 70.9655 202.164 59.7336 196.98 59.7336C191.796 59.7336 186.18 76.1494 173.652 76.1494C161.124 76.1494 158.1 94.7252 147.732 91.7013Z",fill:"white"})]}),(0,jsx_runtime.jsx)("svg",{id:"white-cloud-behind",width:"63",height:"27",viewBox:"0 0 63 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M62.0283 26.8523H1.63598C1.08018 25.5954 0.771484 24.2047 0.771484 22.7419C0.771484 17.8782 4.18439 13.8116 8.74599 12.8063C10.407 5.47421 16.9629 0 24.7974 0C30.5416 0 35.5985 2.94278 38.5427 7.40298C40.0926 6.52762 41.883 6.02808 43.79 6.02808C49.6918 6.02808 54.4762 10.8124 54.4762 16.7142C54.4762 17.3503 54.4206 17.9734 54.314 18.579C54.5181 18.5615 54.7246 18.5526 54.9332 18.5526C58.8995 18.5526 62.1148 21.768 62.1148 25.7343C62.1148 26.1146 62.0853 26.488 62.0283 26.8523Z",fill:"white"})}),(0,jsx_runtime.jsx)("svg",{id:"white-cloud-center",width:"74",height:"33",viewBox:"0 0 74 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.3357 32.1895H1.03496C0.369565 30.6847 0 29.0198 0 27.2686C0 21.4458 4.08587 16.5773 9.54695 15.3738C11.5355 6.59599 19.3841 0.0423584 28.7634 0.0423584C35.6403 0.0423584 41.6943 3.5654 45.219 8.90507C47.0746 7.8571 49.218 7.25906 51.5011 7.25906C58.5666 7.25906 64.2943 12.9868 64.2943 20.0523C64.2943 20.8138 64.2278 21.5598 64.1002 22.2847C64.3445 22.2639 64.5918 22.2532 64.8415 22.2532C69.5899 22.2532 73.4392 26.1026 73.4392 30.851C73.4392 31.3063 73.4038 31.7533 73.3357 32.1895Z",fill:"white"})}),(0,jsx_runtime.jsx)("svg",{id:"white-cloud-left",width:"180",height:"80",viewBox:"0 0 180 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M178.952 79.5991H3.02637C1.08826 75.6491 0 71.2064 0 66.5096C0 50.0768 13.3215 36.7553 29.7543 36.7553C31.2286 36.7553 32.6778 36.8625 34.0946 37.0696C39.0926 15.8192 58.1735 0 80.9492 0C103.664 0 122.703 15.7345 127.763 36.8987C138.074 38.9576 146.476 46.3064 150.02 55.9956C152.586 54.8778 155.42 54.2579 158.398 54.2579C169.998 54.2579 179.401 63.6613 179.401 75.2609C179.401 76.7482 179.246 78.1993 178.952 79.5991Z",fill:"white"})}),(0,jsx_runtime.jsx)("svg",{id:"white-cloud-right",width:"160",height:"70",viewBox:"0 0 160 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M159.613 69.9674H2.25259C0.80436 66.6922 0 63.0686 0 59.2571C0 46.584 8.89278 35.9879 20.7787 33.3685C25.1067 14.2638 42.189 0 62.6028 0C77.5701 0 90.7464 7.6678 98.4179 19.2894C102.457 17.0086 107.122 15.707 112.091 15.707C127.468 15.707 139.935 28.1732 139.935 43.5511C139.935 45.2085 139.79 46.8321 139.512 48.4099C140.044 48.3645 140.582 48.3413 141.126 48.3413C151.46 48.3413 159.838 56.7193 159.838 67.0541C159.838 68.0451 159.761 69.0181 159.613 69.9674Z",fill:"white"})}),(0,jsx_runtime.jsx)("svg",{id:"blue-cloud-left",width:"63",height:"24",viewBox:"0 0 63 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M62.1979 23.7708H0C0.135632 10.6194 10.8389 0 24.0224 0C32.5025 0 39.9564 4.3938 44.2317 11.029C45.7258 10.4393 47.3539 10.1152 49.0576 10.1152C56.3201 10.1152 62.2074 16.0026 62.2074 23.265C62.2074 23.4344 62.2042 23.603 62.1979 23.7708Z",fill:"#D0E7F9"})}),(0,jsx_runtime.jsx)("svg",{id:"blue-cloud-right",width:"85",height:"33",viewBox:"0 0 85 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.011907 32.1712H84.4586C83.3204 14.213 68.3946 0 50.1493 0C37.9859 0 27.2979 6.31668 21.1866 15.8486C19.6727 15.3875 18.0658 15.1394 16.401 15.1394C7.34299 15.1394 0 22.4824 0 31.5404C0 31.7516 0.00399277 31.9619 0.011907 32.1712Z",fill:"#D0E7F9"})}),(0,jsx_runtime.jsxs)("svg",{id:"baloon",width:"92",height:"139",viewBox:"0 0 92 139",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M4.75806 61.9671L46.4736 135.739M46.4736 135.739L22.9019 80.111M46.4736 135.739L27.6538 37.7754M46.4736 135.739L65.2374 37.7754M46.4736 135.739L70.4214 80.111M46.4736 135.739L88.5652 61.9671M46.4736 135.739V56.3512",stroke:"#CBE4F6"}),(0,jsx_runtime.jsx)("path",{d:"M40.1818 126.334H52.2776V135.43C52.2776 137.087 50.9345 138.43 49.2776 138.43H43.1818C41.5249 138.43 40.1818 137.087 40.1818 135.43V126.334Z",fill:"#BCA7A7"}),(0,jsx_runtime.jsx)("rect",{x:"39.3177",y:"125.47",width:"13.8239",height:"1.72798",fill:"#CBE4F6"}),(0,jsx_runtime.jsx)("rect",{x:"41.9097",y:"128.926",width:"1.72798",height:"6.91193",fill:"#E1C6C6"}),(0,jsx_runtime.jsx)("rect",{x:"45.3657",y:"128.926",width:"1.72798",height:"6.91193",fill:"#E1C6C6"}),(0,jsx_runtime.jsx)("rect",{x:"48.8217",y:"128.926",width:"1.72798",height:"6.91193",fill:"#E1C6C6"}),(0,jsx_runtime.jsx)("circle",{cx:"46",cy:"46",r:"46",fill:"#D0E7F9"}),(0,jsx_runtime.jsx)("ellipse",{cx:"46",cy:"46",rx:"30",ry:"46",fill:"#E9F7FF"}),(0,jsx_runtime.jsx)("ellipse",{cx:"46",cy:"46",rx:"12",ry:"46",fill:"#D0E7F9"})]})]}),headerText&&(0,jsx_runtime.jsx)(Headline.A,{id:"header",type:"header",children:headerText}),bodyText&&(0,jsx_runtime.jsx)(components_text.E,{id:"text",children:bodyText}),customizedBodyText&&(0,jsx_runtime.jsx)(components_text.E,{id:"customized-text",fontWeight:600,fontSize:"13px",children:customizedBodyText}),buttonText&&onClickButton&&(0,jsx_runtime.jsx)("div",{id:"button-container",children:(0,jsx_runtime.jsx)(components_button.$,{id:"button",scale:!0,label:buttonText,onClick:onClickButton,size:components_button.M.normal,primary:isPrimaryButton})}),children]})};ErrorContainer.displayName="ErrorContainer";const error_container_ErrorContainer=ErrorContainer;try{ErrorContainer.displayName="ErrorContainer",ErrorContainer.__docgenInfo={description:"",displayName:"ErrorContainer",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},bodyText:{defaultValue:null,description:"",name:"bodyText",required:!1,type:{name:"string"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},isPrimaryButton:{defaultValue:null,description:"",name:"isPrimaryButton",required:!1,type:{name:"boolean"}},customizedBodyText:{defaultValue:null,description:"",name:"customizedBodyText",required:!1,type:{name:"string"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"VoidFunction"}},isEditor:{defaultValue:null,description:"",name:"isEditor",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/error-container/ErrorContainer.tsx#ErrorContainer"]={docgenInfo:ErrorContainer.__docgenInfo,name:"ErrorContainer",path:"components/error-container/ErrorContainer.tsx#ErrorContainer"})}catch(__react_docgen_typescript_loader_error){}try{ErrorContainer.displayName="ErrorContainer",__function.__docgenInfo={description:"",displayName:"ErrorContainer",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},bodyText:{defaultValue:null,description:"",name:"bodyText",required:!1,type:{name:"string | undefined"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!1,type:{name:"string | undefined"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string | undefined"}},isPrimaryButton:{defaultValue:null,description:"",name:"isPrimaryButton",required:!1,type:{name:"boolean | undefined"}},customizedBodyText:{defaultValue:null,description:"",name:"customizedBodyText",required:!1,type:{name:"string | undefined"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"VoidFunction | undefined"}},isEditor:{defaultValue:null,description:"",name:"isEditor",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/error-container/ErrorContainer.tsx#ErrorContainer"]={docgenInfo:ErrorContainer.__docgenInfo,name:"ErrorContainer",path:"components/error-container/ErrorContainer.tsx#ErrorContainer"})}catch(__react_docgen_typescript_loader_error){}const ErrorContainer_stories={title:"Components/ErrorContainer",component:error_container_ErrorContainer},Default={args:{bodyText:"Try again later",buttonText:"Go back",headerText:"Some error has happened",customizedBodyText:"Customized body"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    bodyText: "Try again later",\n    buttonText: "Go back",\n    headerText: "Some error has happened",\n    customizedBodyText: "Customized body"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/button/Button.enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ButtonSize});let ButtonSize=function(ButtonSize){return ButtonSize.extraSmall="extraSmall",ButtonSize.small="small",ButtonSize.normal="normal",ButtonSize.medium="medium",ButtonSize}({})},"./components/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button_Button,M:()=>Button_enums.M});var Button_enums=__webpack_require__("./components/button/Button.enums.ts"),react=__webpack_require__("../../node_modules/react/index.js"),loader=__webpack_require__("./components/loader/index.tsx"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const activeCss=styled_components_browser_esm.AH`
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
  font-size: ${props=>props.theme.getCorrectFontSize((props=>props.theme.button.fontSize[props.size||Button_enums.M.normal])(props))};

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
  `));try{ButtonWrapper.displayName="ButtonWrapper",ButtonWrapper.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement>) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ButtonWrapper.displayName="ButtonWrapper",StyledComponent.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | undefined) & (string | ((instance: HTMLButtonElement | null) => void) | RefObject<...>)) | null"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"getBaseTheme()"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.styled.tsx#ButtonWrapper"]={docgenInfo:ButtonWrapper.__docgenInfo,name:"ButtonWrapper",path:"components/button/Button.styled.tsx#ButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}const ButtonTheme=(0,react.forwardRef)(((props,ref)=>{const defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme;return(0,jsx_runtime.jsx)(StyledThemeButton,{...props,ref,$currentColorScheme:currentColorScheme})}));ButtonTheme.displayName="ButtonTheme";const Button_theme=ButtonTheme;try{ButtonTheme.displayName="ButtonTheme",ButtonTheme.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}try{ButtonTheme.displayName="ButtonTheme",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"ButtonTheme",props:{isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},$currentColorScheme:{defaultValue:null,description:"",name:"$currentColorScheme",required:!1,type:{name:"TColorScheme | undefined"}},interfaceDirection:{defaultValue:null,description:"",name:"interfaceDirection",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.theme.tsx#ButtonTheme"]={docgenInfo:ButtonTheme.__docgenInfo,name:"ButtonTheme",path:"components/button/Button.theme.tsx#ButtonTheme"})}catch(__react_docgen_typescript_loader_error){}const Button_Button=react.forwardRef(((props,ref)=>{const{isLoading,icon,label,primary}=props;return(0,jsx_runtime.jsxs)(Button_theme,{...props,ref,"data-testid":"button",children:[isLoading&&(0,jsx_runtime.jsx)(loader.a,{className:"loader",color:"",size:"20px",type:loader.R.track,label,primary:primary||!1}),(0,jsx_runtime.jsxs)("div",{className:"button-content not-selectable",children:[icon&&(0,jsx_runtime.jsx)("div",{className:"icon",children:icon}),label]})]})}));Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button_Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'}]}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Button text",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},primary:{defaultValue:null,description:"Sets the button primary",name:"primary",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the button.\nThe normal size equals 36px and 40px in height on the Desktop and Touchcreen devices.",name:"size",required:!1,type:{name:"ButtonSize | undefined"}},scale:{defaultValue:null,description:"Scales the width of the button to 100%",name:"scale",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Icon node element",name:"icon",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"Button tab index",name:"tabIndex",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Accepts CSS style",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},isHovered:{defaultValue:null,description:"Sets the button to show a hovered state",name:"isHovered",required:!1,type:{name:"boolean | undefined"}},disableHover:{defaultValue:null,description:"Disable hover effect",name:"disableHover",required:!1,type:{name:"boolean | undefined"}},isClicked:{defaultValue:null,description:"Sets the button to show a clicked state",name:"isClicked",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Sets the button to show a disabled state",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:"Sets a button to show a loader icon",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"Sets the minimal button width",name:"minWidth",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"Sets the action initiated upon clicking the button",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) | undefined"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLButtonElement> | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/heading/Heading.enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>HeadingLevel,u:()=>HeadingSize});let HeadingLevel=function(HeadingLevel){return HeadingLevel[HeadingLevel.h1=1]="h1",HeadingLevel[HeadingLevel.h2=2]="h2",HeadingLevel[HeadingLevel.h3=3]="h3",HeadingLevel[HeadingLevel.h4=4]="h4",HeadingLevel[HeadingLevel.h5=5]="h5",HeadingLevel[HeadingLevel.h6=6]="h6",HeadingLevel}({}),HeadingSize=function(HeadingSize){return HeadingSize.xsmall="xsmall",HeadingSize.small="small",HeadingSize.medium="medium",HeadingSize.large="large",HeadingSize.xlarge="xlarge",HeadingSize}({})},"./components/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./utils/index.ts"),themes=__webpack_require__("./themes/index.ts");const styleCss=styled_components_browser_esm.AH`
  font-size: ${props=>props.theme.getCorrectFontSize((props=>props.theme.heading.fontSize[props.size])(props))};
  font-weight: ${props=>props.theme.heading.fontWeight};

  color: ${props=>props.colorProp||props.theme.heading.color};
  ${props=>props.isInline&&styled_components_browser_esm.AH`
      display: inline-block;
    `};
`,StyledHeading=styled_components_browser_esm.Ay.h1`
  ${styleCss};

  ${utils.Pj};

  ${utils.h0};
`;StyledHeading.defaultProps={theme:themes.C6};const Heading_styled=StyledHeading;var Heading_enums=__webpack_require__("./components/heading/Heading.enums.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const HeadingPure=({level=Heading_enums.F.h1,color,className="",size=Heading_enums.u.large,...rest})=>(0,jsx_runtime.jsx)(Heading_styled,{className:`${className} not-selectable`,as:`h${level}`,colorProp:color,"data-testid":"heading",size,...rest});HeadingPure.displayName="HeadingPure";const Heading=react.memo(HeadingPure);try{HeadingPure.displayName="HeadingPure",HeadingPure.__docgenInfo={description:"",displayName:"HeadingPure",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},level:{defaultValue:{value:"HeadingLevel.h1"},description:"The heading level. It corresponds to the number after the 'H' for the DOM tag. Sets the level for semantic accuracy and accessibility.",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},color:{defaultValue:null,description:"Specifies the headline color",name:"color",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean"}},isInline:{defaultValue:null,description:"Sets the 'display: inline-block' property",name:"isInline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"HeadingSize.large"},description:"Sets the size of headline",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},className:{defaultValue:{value:""},description:"Accepts css class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/heading/Heading.tsx#HeadingPure"]={docgenInfo:HeadingPure.__docgenInfo,name:"HeadingPure",path:"components/heading/Heading.tsx#HeadingPure"})}catch(__react_docgen_typescript_loader_error){}try{HeadingPure.displayName="HeadingPure",HeadingPure.__docgenInfo={description:"",displayName:"HeadingPure",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},level:{defaultValue:{value:"HeadingLevel.h1"},description:"The heading level. It corresponds to the number after the 'H' for the DOM tag. Sets the level for semantic accuracy and accessibility.",name:"level",required:!1,type:{name:"HeadingLevel | undefined"}},color:{defaultValue:null,description:"Specifies the headline color",name:"color",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:null,description:"Disables word wrapping",name:"truncate",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:null,description:"Sets the 'display: inline-block' property",name:"isInline",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"HeadingSize.large"},description:"Sets the size of headline",name:"size",required:!1,type:{name:"HeadingSize | undefined"}},className:{defaultValue:{value:""},description:"Accepts css class",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/heading/Heading.tsx#HeadingPure"]={docgenInfo:HeadingPure.__docgenInfo,name:"HeadingPure",path:"components/heading/Heading.tsx#HeadingPure"})}catch(__react_docgen_typescript_loader_error){}},"./components/heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DZ:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.D,Fm:()=>_Heading_enums__WEBPACK_IMPORTED_MODULE_1__.F,u:()=>_Heading_enums__WEBPACK_IMPORTED_MODULE_1__.u});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/heading/Heading.tsx"),_Heading_enums__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/heading/Heading.enums.ts")},"./components/headline/Headline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>headline_Headline});__webpack_require__("../../node_modules/react/index.js");var utils=__webpack_require__("./utils/index.ts"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts"),heading=__webpack_require__("./components/heading/index.tsx");const size={header:"28px",menu:"23px",content:"18px"},weight={header:600,menu:"bold",content:"bold"},StyledHeading=(0,styled_components_browser_esm.Ay)(heading.DZ)`
  margin: 0;
  line-height: 50px;
  font-size: ${props=>props.theme.getCorrectFontSize(props.fontSize?props.fontSize:size[props.headlineType])};
  font-weight: ${props=>weight[props.headlineType]};
  color: ${props=>props.color?props.color:props.theme.color};
  ${utils.h0}
  @media ${utils.n5} {
    ${props=>"content"===props.headlineType&&`font-size: ${props.theme.getCorrectFontSize("18px")}`};
  }
`;StyledHeading.defaultProps={theme:themes.C6};const Headline_styled=StyledHeading;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Headline=({id,color,isInline=!1,level=1,title,truncate=!1,type,children,className})=>(0,jsx_runtime.jsx)(Headline_styled,{id,level,title,color,headlineType:type,truncate,isInline,className:(0,utils.xW)("headline-heading",className),children});Headline.displayName="Headline";const headline_Headline=Headline;try{Headline.displayName="Headline",Headline.__docgenInfo={description:"",displayName:"Headline",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"6"},{value:"1"},{value:"3"},{value:"4"},{value:"5"}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"",name:"isInline",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"header"'},{value:'"menu"'},{value:'"content"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"components/headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}try{Headline.displayName="Headline",__function.__docgenInfo={description:"",displayName:"Headline",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},level:{defaultValue:{value:1},description:"",name:"level",required:!1,type:{name:"2 | 6 | 1 | 3 | 4 | 5 | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},truncate:{defaultValue:{value:!1},description:"",name:"truncate",required:!1,type:{name:"boolean | undefined"}},isInline:{defaultValue:{value:!1},description:"",name:"isInline",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HeadlineType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"components/headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-error-container-ErrorContainer-stories.afa2b6ce.iframe.bundle.js.map