"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[8143],{"./components/slider/slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>slider_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),themes=__webpack_require__("./themes/index.ts");const StyledSlider=styled_components_browser_esm.Ay.input.attrs((props=>({type:"range",disabled:props.isDisabled})))`
  width: ${props=>props.theme.avatarEditorBody.slider.width};
  margin: ${props=>props.theme.avatarEditorBody.slider.margin};
  background: ${props=>props.theme.avatarEditorBody.slider.runnableTrack.focusBackground};

  border-radius: ${props=>props.theme.avatarEditorBody.slider.runnableTrack.borderRadius};

  -webkit-appearance: none;

  ${props=>props.withPouring&&styled_components_browser_esm.AH`
      background-image: ${props.isDisabled?"linear-gradient(#A6DCF2, #A6DCF2)":"linear-gradient(#2da7db, #2da7db)"};
    `}

  background-size: ${props=>`${props.sizeProp} 100%`};
  ${({theme})=>"rtl"===theme.interfaceDirection&&"background-position-x: right;"}

  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    border: ${props=>props.theme.avatarEditorBody.slider.runnableTrack.border};
    border-radius: ${props=>props.theme.avatarEditorBody.slider.runnableTrack.borderRadius};
    width: ${props=>props.theme.avatarEditorBody.slider.runnableTrack.width};
    height: ${props=>props.runnableTrackHeight?props.runnableTrackHeight:props.theme.avatarEditorBody.slider.runnableTrack.height};
    cursor: ${props=>props.isDisabled?"default":"pointer"};
  }

  &::-webkit-slider-thumb {
    margin-top: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.marginTop};
    width: ${props=>props.thumbWidth?props.thumbWidth:props.theme.avatarEditorBody.slider.sliderThumb.width};
    height: ${props=>props.thumbHeight?props.thumbHeight:props.theme.avatarEditorBody.slider.sliderThumb.height};

    background: ${props=>props.isDisabled?props.theme.avatarEditorBody.slider.sliderThumb.disabledBackground:props.theme.avatarEditorBody.slider.sliderThumb.background};

    border-width: ${props=>props.thumbBorderWidth?props.thumbBorderWidth:props.theme.avatarEditorBody.slider.sliderThumb.borderWidth};

    border-style: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.borderStyle};

    border-color: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.borderColor};

    border-radius: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.height};
    cursor: ${props=>props.isDisabled?"default":"pointer"};
    -webkit-appearance: none;
    -webkit-box-shadow: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.boxShadow};
    box-shadow: ${props=>props.theme.avatarEditorBody.slider.sliderThumb.boxShadow};
  }

  &::-moz-range-thumb {
    width: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.width};
    height: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.height};
    background: ${props=>props.isDisabled?props.theme.avatarEditorBody.slider.sliderThumb.disabledBackground:props.theme.avatarEditorBody.slider.sliderThumb.background};
    border: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.border};
    border-radius: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.borderRadius};
    cursor: ${props=>props.isDisabled?"default":"pointer"};
    -moz-box-shadow: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.boxShadow};
    box-shadow: ${props=>props.theme.avatarEditorBody.slider.rangeThumb.boxShadow};
  }

  &::-ms-track {
    background: ${props=>props.theme.avatarEditorBody.slider.track.background};
    border-color: ${props=>props.theme.avatarEditorBody.slider.track.borderColor};
    border-width: ${props=>props.theme.avatarEditorBody.slider.track.borderWidth};
    color: ${props=>props.theme.avatarEditorBody.slider.track.color};
    width: ${props=>props.theme.avatarEditorBody.slider.track.width};
    height: ${props=>props.theme.avatarEditorBody.slider.track.height};
    cursor: ${props=>props.isDisabled?"default":"pointer"};
  }

  &::-ms-fill-lower {
    background: ${props=>props.theme.avatarEditorBody.slider.fillLower.background};
    border: ${props=>props.theme.avatarEditorBody.slider.fillLower.border};
    border-radius: ${props=>props.theme.avatarEditorBody.slider.fillLower.borderRadius};
  }

  &::-ms-fill-upper {
    background: ${props=>props.theme.avatarEditorBody.slider.fillUpper.background};
    border: ${props=>props.theme.avatarEditorBody.slider.fillUpper.border};
    border-radius: ${props=>props.theme.avatarEditorBody.slider.fillUpper.borderRadius};
  }

  &::-ms-thumb {
    width: ${props=>props.theme.avatarEditorBody.slider.thumb.width};
    height: ${props=>props.theme.avatarEditorBody.slider.thumb.height};
    background: ${props=>props.theme.avatarEditorBody.slider.thumb.background};
    border: ${props=>props.theme.avatarEditorBody.slider.thumb.border};
    border-radius: ${props=>props.theme.avatarEditorBody.slider.thumb.borderRadius};
    cursor: ${props=>props.isDisabled?"default":"pointer"};
    margin-top: ${props=>props.theme.avatarEditorBody.slider.thumb.marginTop};
    /*Needed to keep the Edge thumb centred*/
    box-shadow: ${props=>props.theme.avatarEditorBody.slider.thumb.boxShadow};
  }

  &:focus::-ms-fill-lower {
    background: ${props=>props.theme.avatarEditorBody.slider.fillLower.focusBackground};
  }

  &:focus::-ms-fill-upper {
    background: ${props=>props.theme.avatarEditorBody.slider.fillUpper.focusBackground};
  }
`;StyledSlider.defaultProps={theme:themes.C6};styled_components_browser_esm.Ay.div`
  background: red;
`;const StyledSliderTheme=(0,styled_components_browser_esm.Ay)(StyledSlider)`
  background-image: ${props=>props.withPouring&&(props.theme.isBase&&`linear-gradient( ${props.$currentColorScheme?.main?.accent}, ${props.$currentColorScheme?.main?.accent})`||!props.theme.isBase&&"linear-gradient(#FFFFFF, #FFFFFF)")};

  &::-webkit-slider-thumb {
    background: ${props=>props.theme.isBase&&props.$currentColorScheme?.main?.accent||!props.theme.isBase&&"#FFFFFF"};
    box-shadow: ${props=>!props.theme.isBase&&"0px 3px 12px rgba(0, 0, 0, 0.25); !important"};
  }

  &:hover {
    background-image: ${props=>props.withPouring&&(props.theme.isBase&&`linear-gradient( ${props.$currentColorScheme?.main?.accent}, ${props.$currentColorScheme?.main?.accent})`||!props.theme.isBase&&"linear-gradient(#FFFFFF, #FFFFFF)")};
  }

  ${props=>props.isDisabled&&styled_components_browser_esm.AH`
      opacity: 0.32;
    `}
`;StyledSliderTheme.defaultProps={theme:themes.C6};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Slider=props=>{const{id,className,onChange,min,max,step,value,withPouring,style,isDisabled=!1,thumbBorderWidth,thumbHeight,thumbWidth,runnableTrackHeight}=props,defaultTheme=(0,react.useContext)(styled_components_browser_esm.Dx),currentColorScheme=defaultTheme?.currentColorScheme,[size,setSize]=(0,react.useState)("0%");(0,react.useEffect)((()=>{setSize(100*(value-min)/(max-min)+"%")}),[max,min,value]);return(0,jsx_runtime.jsx)(StyledSliderTheme,{...props,isDisabled,disabled:isDisabled,style,id,className,min,max,step,value,sizeProp:value&&withPouring?size:"0%",withPouring,onChange:e=>onChange?.(e),thumbBorderWidth,thumbHeight,thumbWidth,runnableTrackHeight,$currentColorScheme:currentColorScheme,"data-testid":"slider"})};Slider.displayName="Slider";try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string"}},thumbWidth:{defaultValue:null,description:"Sets the width of the input thumb",name:"thumbWidth",required:!1,type:{name:"string"}},thumbHeight:{defaultValue:null,description:"Sets the height of the input thumb",name:"thumbHeight",required:!1,type:{name:"string"}},thumbBorderWidth:{defaultValue:null,description:"Sets the border width of the input thumb",name:"thumbBorderWidth",required:!1,type:{name:"string"}},runnableTrackHeight:{defaultValue:null,description:"Sets the height of the runnableTrack for the input",name:"runnableTrackHeight",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The change event is triggered when the elelment's value is modified",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},min:{defaultValue:null,description:"Determines min range value",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"Determines max range value",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"Specifies the increment/decrement step size",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"Default input value",name:"value",required:!0,type:{name:"number"}},withPouring:{defaultValue:null,description:"Sets the background color of the runnableTrack",name:"withPouring",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Disables the input",name:"isDisabled",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Accepts css",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"components/slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}try{Slider.displayName="Slider",__function.__docgenInfo={description:"",displayName:"Slider",props:{id:{defaultValue:null,description:"Accepts id",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Accepts class",name:"className",required:!1,type:{name:"string | undefined"}},thumbWidth:{defaultValue:null,description:"Sets the width of the input thumb",name:"thumbWidth",required:!1,type:{name:"string | undefined"}},thumbHeight:{defaultValue:null,description:"Sets the height of the input thumb",name:"thumbHeight",required:!1,type:{name:"string | undefined"}},thumbBorderWidth:{defaultValue:null,description:"Sets the border width of the input thumb",name:"thumbBorderWidth",required:!1,type:{name:"string | undefined"}},runnableTrackHeight:{defaultValue:null,description:"Sets the height of the runnableTrack for the input",name:"runnableTrackHeight",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"The change event is triggered when the elelment's value is modified",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},min:{defaultValue:null,description:"Determines min range value",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"Determines max range value",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"Specifies the increment/decrement step size",name:"step",required:!1,type:{name:"number | undefined"}},value:{defaultValue:null,description:"Default input value",name:"value",required:!0,type:{name:"number"}},withPouring:{defaultValue:null,description:"Sets the background color of the runnableTrack",name:"withPouring",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:null,description:"Disables the input",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"Accepts css",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"components/slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}const slider_stories={title:"Components/Slider",component:Slider,parameters:{docs:{description:{component:"Components/Slider"}},design:{type:"figma",url:"https://www.figma.com/file/ZiW5KSwb4t7Tj6Nz5TducC/UI-Kit-DocSpace-1.0.0?type=design&node-id=505-4112&mode=design&t=TBNCKMQKQMxr44IZ-0"}}},Template=({...args})=>{const[value,setValue]=(0,react.useState)(0);return(0,jsx_runtime.jsx)("div",{style:{width:"400px",height:"50px"},children:(0,jsx_runtime.jsx)(Slider,{...args,value,onChange:e=>{const target=e.target;setValue(+target.value)},min:0,max:100})})};Template.displayName="Template";const Default={render:args=>(0,jsx_runtime.jsx)(Template,{...args}),args:{min:0,max:5,value:0,step:.1,withPouring:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <Template {...args} />,\n  args: {\n    min: 0,\n    max: 5,\n    value: 0,\n    step: 0.1,\n    withPouring: false\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=components-slider-slider-stories.9c7d140b.iframe.bundle.js.map