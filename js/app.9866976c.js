(function(e){function t(t){for(var o,r,c=t[0],i=t[1],s=t[2],b=0,u=[];b<c.length;b++)r=c[b],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(u.length)u.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(o=!1)}o&&(l.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={app:0},l=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2e6c":function(e,t,a){"use strict";a("8e2d")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n=Object(o["h"])("div",null,"Doing Works Koei Tecmo Won't",-1);function l(e,t,a,l,r,c){const i=Object(o["E"])("q-toolbar-title"),s=Object(o["E"])("q-toolbar"),d=Object(o["E"])("q-header"),b=Object(o["E"])("Home"),u=Object(o["E"])("q-page-container"),j=Object(o["E"])("q-footer"),p=Object(o["E"])("q-layout");return Object(o["x"])(),Object(o["e"])(p,{view:"hHH lpR fFf"},{default:Object(o["J"])(()=>[Object(o["j"])(d,{elevated:"",class:"bg-primary text-white",color:"yellow-2"},{default:Object(o["J"])(()=>[Object(o["j"])(s,null,{default:Object(o["J"])(()=>[Object(o["j"])(i,null,{default:Object(o["J"])(()=>[Object(o["i"])(" Sun Translator System ")]),_:1})]),_:1})]),_:1}),Object(o["j"])(u,null,{default:Object(o["J"])(()=>[Object(o["j"])(b)]),_:1}),Object(o["j"])(j,{elevated:"",class:"q-pa-md text-center bg-grey-8 text-white"},{default:Object(o["J"])(()=>[n]),_:1})]),_:1})}const r={class:"row justify-center"};function c(e,t,a,n,l,c){const i=Object(o["E"])("FileUpload"),s=Object(o["E"])("InputContainers"),d=Object(o["E"])("q-btn"),b=Object(o["E"])("q-page-sticky");return Object(o["x"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",r,[Object(o["j"])(i)]),Object(o["j"])(s),Object(o["j"])(b,{position:"bottom-right",offset:[18,18]},{default:Object(o["J"])(()=>[Object(o["j"])(d,{fab:"",icon:"save",color:"orange-8",onClick:t[0]||(t[0]=e=>c.exportJSON())})]),_:1})],64)}const i={class:"row q-my-md"};function s(e,t,a,n,l,r){const c=Object(o["E"])("q-file"),s=Object(o["E"])("q-btn");return Object(o["x"])(),Object(o["g"])("div",i,[Object(o["j"])(c,{modelValue:l.file,"onUpdate:modelValue":[t[0]||(t[0]=e=>l.file=e),t[1]||(t[1]=e=>r.validateFile())],label:"Pick one file",filled:"",style:{"max-width":"300px","min-width":"200px"}},null,8,["modelValue"]),Object(o["j"])(s,{disabled:void 0==l.file,class:"q-ml-md",onClick:t[2]||(t[2]=e=>r.onFileUpload()),label:"Upload"},null,8,["disabled"]),Object(o["j"])(s,{disabled:void 0==l.file,class:"q-ml-md",onClick:t[3]||(t[3]=e=>r.onFileClear()),style:{background:"#ff3838",color:"white"},label:"Clear"},null,8,["disabled"])])}var d=a("3d20"),b=a.n(d),u={name:"FileUpload",data(){return{file:void 0,jsonFile:void 0,something:void 0,store:void 0,uploaded:!1}},methods:{onFileUpload(){let e=!1;if(this.uploaded?b.a.fire({title:"File exist",text:"You are currently editing a file. Reupload?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(t=>{t.isConfirmed&&(e=!0)}):e=!0,e){let e=new FileReader;e.onload=e=>{let t=e.target.result.trim();","==t[t.length-1]&&(t=`[${t.slice(0,-1)}]`),this.$store.dispatch("clearTranslated"),this.$store.dispatch("setFile",JSON.parse(t)),this.$store.dispatch("setFileName",this.file.name)},e.readAsText(this.file),this.uploaded=!0}},onFileClear(){b.a.fire({title:"Are you sure?",text:"All unsaved changes will be removed.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&(this.file=void 0,this.uploaded=!1,this.$store.dispatch("clearFile"),this.$store.dispatch("clearTranslated"))})},validateFile(){"application/json"!=this.file.type&&(b.a.fire({title:"File not supported",text:"Please upload JSON file only"}),this.file=void 0)}}},j=a("6b0d"),p=a.n(j),O=a("7d53"),m=a("9c40"),f=a("93dc"),h=a.n(f);const v=p()(u,[["render",s]]);var y=v;h()(u,"components",{QFile:O["a"],QBtn:m["a"]});const g={class:"row justify-center"};function x(e,t,a,n,l,r){const c=Object(o["E"])("TranslationBlock"),i=Object(o["E"])("q-card-section"),s=Object(o["E"])("q-card");return Object(o["x"])(),Object(o["g"])("div",g,[(Object(o["x"])(!0),Object(o["g"])(o["a"],null,Object(o["D"])(r.blocks,e=>(Object(o["x"])(),Object(o["e"])(s,{class:"card q-my-sm",key:e.id},{default:Object(o["J"])(()=>[Object(o["j"])(i,null,{default:Object(o["J"])(()=>[Object(o["j"])(c,{detail:e},null,8,["detail"])]),_:2},1024)]),_:2},1024))),128))])}const E={key:0,class:"q-ml-md"},_={class:"q-mt-sm"};function w(e,t,a,n,l,r){const c=Object(o["E"])("q-chip"),i=Object(o["E"])("q-btn"),s=Object(o["E"])("q-input");return Object(o["x"])(),Object(o["g"])(o["a"],null,[Object(o["i"])(" Row: "),Object(o["j"])(c,{dense:""},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.row),1)]),_:1}),Object(o["h"])("div",null,[Object(o["j"])(c,{color:"primary","text-color":"white",icon:"perm_identity"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.disp_name),1)]),_:1})]),Object(o["h"])("div",null,[Object(o["i"])(" Type: "),Object(o["j"])(c,{color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.cmd),1)]),_:1}),l.param2?(Object(o["x"])(),Object(o["g"])("span",E,"Expression:")):Object(o["f"])("",!0),l.param2?(Object(o["x"])(),Object(o["e"])(c,{key:1,color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.param2),1)]),_:1})):Object(o["f"])("",!0)]),Object(o["j"])(s,{modelValue:l.param4,"onUpdate:modelValue":t[1]||(t[1]=e=>l.param4=e),label:"JP",type:"textarea",readonly:"","input-style":{resize:"none"},rows:"4"},{after:Object(o["J"])(()=>[Object(o["j"])(i,{round:"",dense:"",flat:"",icon:"content_copy",onClick:t[0]||(t[0]=e=>r.copyToClipboard())})]),_:1},8,["modelValue"]),Object(o["j"])(s,{modelValue:l.translated,"onUpdate:modelValue":t[2]||(t[2]=e=>l.translated=e),label:"EN",type:"textarea","input-style":{resize:"none"},placeholder:"Insert translation ...",rows:"4"},null,8,["modelValue"]),Object(o["h"])("div",_,[Object(o["i"])(" Miscellaneous: "),l.name?(Object(o["x"])(),Object(o["e"])(c,{key:0,dense:"",color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(" name: "+Object(o["G"])(l.name),1)]),_:1})):Object(o["f"])("",!0),l.param1?(Object(o["x"])(),Object(o["e"])(c,{key:1,dense:"",color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.param1),1)]),_:1})):Object(o["f"])("",!0),l.param3?(Object(o["x"])(),Object(o["e"])(c,{key:2,dense:"",color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.param3),1)]),_:1})):Object(o["f"])("",!0),l.targets?(Object(o["x"])(),Object(o["e"])(c,{key:3,dense:"",color:"grey","text-color":"white"},{default:Object(o["J"])(()=>[Object(o["i"])(Object(o["G"])(l.targets),1)]),_:1})):Object(o["f"])("",!0)])],64)}var T={name:"TranslationBlock",props:["detail"],data(){return{id:this.detail.id,cmd:this.detail.cmd,row:this.detail.row,disp_name:this.detail.disp_name,name:this.detail.name,param1:this.detail.param[0][0],param2:this.detail.param[0][1],param3:this.detail.param[0][2],param4:this.detail.param[0][3],targets:this.detail.targets,translated:""}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.param4)}},watch:{translated(e){this.$store.dispatch("setTranslated",{id:this.id,value:e})}}},J=a("b047"),S=a("27f9");const C=p()(T,[["render",w]]);var F=C;h()(T,"components",{QChip:J["a"],QInput:S["a"],QBtn:m["a"]});var N={name:"InputContainers",components:{TranslationBlock:F},computed:{blocks(){return this.$store.state.untranslatedJSON}}},k=(a("2e6c"),a("f09f")),q=a("a370");const A=p()(N,[["render",x],["__scopeId","data-v-5ee47b79"]]);var L=A;h()(N,"components",{QCard:k["a"],QCardSection:q["a"]});var Q={name:"Home",components:{FileUpload:y,InputContainers:L},methods:{exportJSON(){let e=this.$store.state.translatedJSON,t=e.map(e=>{let t=void 0==e.param[0][0]?"":e.param[0][0],a=void 0==e.param[0][1]?"":e.param[0][1],o=void 0==e.param[0][2]?"":e.param[0][2],n=void 0==e.param[0][3]?"":e.param[0][3];return{cmd:e.cmd,row:e.row,disp_name:e.disp_name,name:e.name,param:[[t,a,o,n]],targets:e.targets}}),a="";t.forEach(e=>{a+=JSON.stringify(e)+",\n"});let o="data:text/json;charset=utf-8,"+encodeURIComponent(a),n=document.createElement("a");n.setAttribute("href",o),n.setAttribute("download",this.$store.state.fileName.slice(0,-5)+"_translated.json"),n.click()}}},B=a("de5e");const I=p()(Q,[["render",c]]);var R=I;h()(Q,"components",{QPageSticky:B["a"],QBtn:m["a"]});var P={name:"LayoutDefault",components:{Home:R}},U=a("4d5a"),$=a("e359"),V=a("65c6"),G=a("6ac5"),D=a("09e3"),H=a("7ff0");const M=p()(P,[["render",l]]);var Y=M;h()(P,"components",{QLayout:U["a"],QHeader:$["a"],QToolbar:V["a"],QToolbarTitle:G["a"],QPageContainer:D["a"],QFooter:H["a"]});var z=a("6605");const W=[{path:"/",name:"Home",component:R}],K=Object(z["a"])({history:Object(z["b"])(),routes:W});var X=K,Z=a("5502"),ee=Object(Z["a"])({state:{untranslatedJSON:void 0,translatedJSON:void 0,fileName:void 0},mutations:{SET_FILE(e,t){let a=1;t.forEach(e=>{e.id=a,a++}),e.untranslatedJSON=t,e.translatedJSON=t},CLEAR_FILE(e){e.untranslatedJSON=void 0},SET_TRANSLATED(e,t){let a=t.id,o=t.value;e.translatedJSON.map(e=>{e.id==a&&(e.param[0][3]=o)})},CLEAR_TRANSLATED(e){e.translatedJSON=void 0},SET_FILE_NAME(e,t){e.fileName=t}},actions:{setFile({commit:e},t){e("SET_FILE",t)},clearFile({commit:e}){e("CLEAR_FILE")},clearTranslated({commit:e}){e("CLEAR_TRANSLATED")},setTranslated({commit:e},t){e("SET_TRANSLATED",t)},setFileName({commit:e},t){e("SET_FILE_NAME",t)}}}),te=a("b05d"),ae=a("7962"),oe=(a("0ca9"),a("e54f"),{config:{},plugins:{}});Object(ae["a"])("primary","#ff8b17"),Object(o["d"])(Y).use(te["a"],oe).use(ee).use(X).mount("#app")},"8e2d":function(e,t,a){}});
//# sourceMappingURL=app.9866976c.js.map