import{u as Y,ad as W,ae as Z,r as t,j as e,ah as p,ak as N,aj as z}from"./index--xT2dYYS.js";import{C as _,g as G}from"./cropper.utils-Be0evqXR.js";import{p as H}from"./s3url-BAoJwaSP.js";import{T as J}from"./TextField-Cje00f8t.js";const V=()=>{const g=Y(),y=W(),o=Z(a=>a.business),[c,h]=t.useState((o==null?void 0:o.logo)||""),[x,C]=t.useState(null),[r,b]=t.useState((o==null?void 0:o.businessName)||""),[f,j]=t.useState(!1),[l,d]=t.useState({logo:null,name:null}),[i,w]=t.useState(null),[v,L]=t.useState(null),[k,B]=t.useState({x:0,y:0}),[E,S]=t.useState(1),[I,A]=t.useState(null),[D,m]=t.useState(!1),F=a=>{const n=a.target.files[0];if(n){d(u=>({...u,logo:null}));const s=new FileReader;s.onload=function(u){L(u.target.result),m(!0)},s.onerror=function(){console.error("Error reading file:",s.error)},s.readAsDataURL(n)}},R=(a,n)=>{A(n)},q=async()=>{try{const{fileUrl:a,blob:n}=await G(v,I);C(a),h(a),m(!1);const s=new File([n],(i==null?void 0:i.name)||"cropped-logo.png",{type:n.type});w(s)}catch(a){console.error("Error cropping image:",a)}},P=()=>{document.getElementById("ImageLogo").click()},U=async a=>{a.preventDefault();let n=!1;if(r||(d(s=>({...s,name:"Business name is required."})),n=!0),!i&&!c&&(d(s=>({...s,logo:"Business logo is required."})),n=!0),!n){d({});try{j(!0);let s=null;i&&(s=await H(i,"Landing")),y(z({businessName:r,...s&&{logo:s.accessLink}})),g("/create-business/contact")}catch(s){console.error("An error occurred during submission",s)}finally{j(!1)}}};t.useEffect(()=>{d(a=>({...a,name:null}))},[r]);const T=()=>g("/create-business");return t.useEffect(()=>{h(o==null?void 0:o.logo),b(o==null?void 0:o.businessName)},[o]),e.jsxs("div",{className:"business-details-page",children:[D&&e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:e.jsx("div",{className:"modal-dialog modal-lg",role:"document",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Crop Your Image"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>m(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("div",{className:"cropper-container position-relative",style:{height:"400px"},children:e.jsx(_,{image:v,crop:k,zoom:E,aspect:1,onCropChange:B,onZoomChange:S,onCropComplete:R})})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx(p,{className:"mx-2",variant:"contained",color:"primary",onClick:q,children:"Save Crop"}),e.jsx(p,{variant:"filled",color:"warning",onClick:()=>m(!1),children:"Cancel"})]})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsx("div",{className:"col-12 col-md-6 p-5",children:e.jsxs("div",{className:"form-container",children:[e.jsx("button",{className:"btn btn-dark w-auto mb-4",onClick:T,children:e.jsx("i",{className:"bi bi-arrow-left"})}),e.jsxs("h2",{className:"fw-bold text-start mb-4",children:[e.jsx("span",{style:{color:"#000000"},children:"Enter Your"})," Business Details"]}),e.jsx("div",{className:"input-group mb-4 mt-2 w-100",children:e.jsx(J,{fullWidth:!0,required:!0,label:"Business Name (8 words)",id:"businessName",variant:"filled",name:"businessName",autoComplete:"businessName",value:r,onChange:a=>b(a.target.value),error:N(r,8),helperText:N(r,8)?"exceeded the limit":""})}),(l==null?void 0:l.name)&&e.jsx("div",{className:"text-danger mb-4",children:l==null?void 0:l.name}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"ImageLogo",className:"form-label",children:["Upload Business Logo*",e.jsx("span",{style:{color:"grey"},children:" (Ratio 1 : 1)"})]}),e.jsx("input",{type:"file",id:"ImageLogo",style:{display:"none"},onChange:F}),e.jsx("div",{onClick:P,className:"logo-upload p-4 text-center",style:{cursor:"pointer"},children:f?e.jsx("div",{className:"spinner-border text-primary",role:"status"}):c||x?e.jsx("img",{src:x??c,alt:"Business Logo",width:"100",className:"img-thumbnail"}):e.jsxs("div",{children:[e.jsx("img",{src:"/images/add_image.png",width:"50",alt:"Add Logo"}),e.jsx("div",{children:"Add Logo"})]})})]}),(l==null?void 0:l.logo)&&e.jsx("div",{className:"text-danger mb-4",children:l==null?void 0:l.logo}),e.jsx("div",{className:"text-center",children:e.jsx(p,{disabled:f,onClick:U,variant:"contained",className:"w-100 submit-button",type:"submit",children:"save & next"})})]})}),e.jsx("div",{className:"col-12 col-md-6 p-5 left-portion vh-100  ",children:e.jsxs("div",{className:"business-preview",children:[e.jsx("div",{className:"text-center mb-4",children:e.jsx("h3",{className:"fw-bold",children:"Business Name Preview"})}),e.jsxs("div",{className:"preview-content text-center",children:[c?e.jsx("img",{src:c,alt:"Business Logo",width:"120"}):e.jsx("div",{className:"logo-placeholder",children:"No Logo Uploaded"}),e.jsx("h4",{className:"mt-4 text-uppercase",children:r||"Your Business Name"})]})]})})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{V as default};
