import{a3 as z,a4 as B,a5 as D,a6 as T,r as c,a7 as V,j as e,a8 as R,a9 as $,aa as C,ab as O,ac as F,u as U,ad as q,ae as H,af as W,ag as _,ah as G,ai as J,aj as K,h as Q}from"./index-C2cS_aTe.js";import{u as X,F as Y,T as k}from"./TextField-gG14BLDK.js";import{I as Z}from"./IconButton-CfPPW5H7.js";function ee(a){return z("MuiInputAdornment",a)}const A=B("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var I;const te=(a,s)=>{const{ownerState:t}=a;return[s.root,s[`position${C(t.position)}`],t.disablePointerEvents===!0&&s.disablePointerEvents,s[t.variant]]},ae=a=>{const{classes:s,disablePointerEvents:t,hiddenLabel:l,position:i,size:d,variant:m}=a,f={root:["root",t&&"disablePointerEvents",i&&`position${C(i)}`,m,l&&"hiddenLabel",d&&`size${C(d)}`]};return O(f,ee,s)},se=D("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:te})(T(({theme:a})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(a.vars||a).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${A.positionStart}&:not(.${A.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),ne=c.forwardRef(function(s,t){const l=V({props:s,name:"MuiInputAdornment"}),{children:i,className:d,component:m="div",disablePointerEvents:f=!1,disableTypography:x=!1,position:g,variant:b,...y}=l,n=X()||{};let p=b;b&&n.variant,n&&!p&&(p=n.variant);const u={...l,hiddenLabel:n.hiddenLabel,size:n.size,disablePointerEvents:f,position:g,variant:p},j=ae(u);return e.jsx(Y.Provider,{value:null,children:e.jsx(se,{as:m,ownerState:u,className:R(j.root,d),ref:t,...y,children:typeof i=="string"&&!x?e.jsx($,{color:"textSecondary",children:i}):e.jsxs(c.Fragment,{children:[g==="start"?I||(I=e.jsx("span",{className:"notranslate",children:"​"})):null,i]})})})}),ie=F(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),oe=F(e.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");function de(){const a=U(),s=q(),t=H(o=>o.business),[l,i]=c.useState({email:(t==null?void 0:t.email)||"",password:(t==null?void 0:t.password)||""}),[d,m]=c.useState(""),[f,x]=c.useState(""),[g,b]=c.useState(!1),[y,n]=c.useState(!1),{email:p,password:u}=l;function j(o){const{name:v,value:h}=o.target;i(w=>({...w,[v]:h})),v==="email"&&h&&E(h)&&x(""),v==="password"&&h&&N(h)&&m("")}const L=async o=>{var w,P;o.preventDefault();const v=E(p),h=N(u);if(v&&h){n(!0);try{const r=await J({email:p,password:u});console.log(r,"business---"),r!=null&&r.data&&(s(K({email:p,password:u})),a("/create-business/details")),n(!1)}catch(r){n(!1),console.log(r,"error-----------"),Q.error(((P=(w=r==null?void 0:r.response)==null?void 0:w.data)==null?void 0:P.message)??"An error occurred. Please try again.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#e74c3c",color:"#FFFFFF"}})}n(!1)}};function E(o){return o?(x(""),!0):(x("Email is required."),!1)}function N(o=u){return o.length<8?(m("Password must be at least 8 characters long."),!1):(m(""),!0)}const S=()=>{b(!g)},M=()=>{a("/")};return c.useEffect(()=>{i({email:t==null?void 0:t.email,password:t==null?void 0:t.password})},[t]),e.jsxs("div",{className:"h-100vh create-business-div",children:[e.jsxs("div",{className:"row h-100 justify-content-center",children:[e.jsx("div",{className:"d-none d-md-block left-portion col-md-5 h-100 p-0",children:e.jsx("img",{src:"/images/login.jpg",alt:"Login",className:"w-100 h-100 object-fit-cover"})}),e.jsxs("div",{className:"col-12 col-md-7 d-flex flex-column align-items-center right-portion h-100 p-4",children:[e.jsx("div",{className:"back-button-container",children:e.jsx("button",{className:"btn btn-dark",onClick:M,children:e.jsx("i",{className:"bi bi-arrow-left"})})}),e.jsx("div",{className:"col-12 text-start mb-4",children:e.jsxs("h1",{className:"fw-bold title-text",children:[e.jsx("span",{className:"title-main",children:"Add"})," ",e.jsx("br",{}),e.jsx("span",{className:"title-highlight",children:"Authentication Details"})]})}),e.jsxs(W,{className:"mb-3 w-sm-100 w-100 ",validated:!1,noValidate:!1,children:[e.jsx(k,{fullWidth:!0,required:!0,label:"Email",name:"email",value:l.email,onChange:j,error:f,helperText:f,variant:"filled",className:"my-2"}),e.jsx(k,{required:!0,fullWidth:!0,label:"Password",className:"my-2",type:g?"text":"password",variant:"filled",name:"password",value:l.password,onChange:j,error:!!d,helperText:d,InputProps:{endAdornment:e.jsx(ne,{position:"end",children:e.jsx(Z,{onClick:S,edge:"end",children:g?e.jsx(ie,{}):e.jsx(oe,{})})})}}),e.jsx("div",{className:"col-12 text-center mt-4",children:y?e.jsx(_,{variant:"primary"}):e.jsx(G,{className:"w-100 submit-button",onClick:L,variant:"contained",type:"submit",children:"save & next"})})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .h-100vh {
          height: 100vh;
        }
        .left-portion {
          background-color: #f5f5f5;
        }
        .right-portion {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }
        .back-button-container {
          position: absolute;
          top: 1rem;
          left: 1rem;
          margin-top: 0.5rem;
          margin-left: 0.5rem;
        }
        .title-text {
          text-align: left;
        }
        .title-main {
          color: black;
        }
        .title-highlight {
          color: #105193;
        }
        .btn-primary {
          background-color: #105193;
          border-color: #105193;
        }
        .btn-primary:hover {
          background-color: #107d93;
          border-color: #107d93;
        }
        @media (max-width: 768px) {
          .right-portion {
            padding: 1rem;
          }
          .back-button-container {
            margin-top: 0.75rem;
            margin-left: 0.75rem;
          }
        }
        @media (max-width: 576px) {
          .right-portion {
            padding: 0.5rem;
          }
          .back-button-container {
            margin-top: 1rem;
            margin-left: 1rem;
          }
        }
      `})]})}export{de as default};
