import{n as Le,r as s,u as ea,j as e,o as j,A as Fe,h as Y,p as aa,k as Ne,q as Ve,P as Ee,s as E,t as De,v as ta,w as Ge,F as ve,x as sa,E as ra,y as la,z as oa,M as ae,D as ia,G as _e,I as He,H as na,J as de,K as ca,N as da,O as ma,Q as Oe,S as pa,T as ha,U as xa,V as ua,W as ga,f as Te,B as Ye,L as fa,R as ba,c as Na,X as va,g as ja,d as ya,e as wa,i as Ca,Y as ka,l as Sa,m as Da}from"./index-C2cS_aTe.js";import{S as Fa}from"./ShareButtonHome-CcQECwA-.js";import{C as Ze,g as Xe}from"./cropper.utils-Bi71bAPE.js";import{p as je}from"./s3url-Bvh-UOT4.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ea=Le("EyeOff",La);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ra=Le("Eye",Pa);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Aa=Le("Share2",Ma);function $a({fetchFreeList:F}){const[y,B]=s.useState(!1),[u,w]=s.useState(!1),[V,O]=s.useState([]),I=ea(),[C,l]=s.useState(!1),[d,c]=s.useState({name:"",brandName:"",password:"",category:"",logo:null,address:{buildingName:"",streetName:"",landMark:"",district:"",state:"",pinCode:""},contactDetails:{primaryNumber:"",secondaryNumber:"",whatsAppNumber:"",primaryCountryCode:"",secondaryCountryCode:"",whatsappCountryCode:"",email:"",website:""},description:"",enconnectUrl:"",images:null}),[b,P]=s.useState(null),[K,U]=s.useState([]),[ee,t]=s.useState(!1),[o,R]=s.useState({}),k=()=>{const r={};return d.name.trim()||(r.name="Name is required."),d.brandName.trim()||(r.brandName="Brand Name is required."),(!d.images||d.images.length===0)&&(r.images="At least one image is required."),["buildingName","streetName","landMark","district","state","pinCode"].forEach(p=>{d.address[p].trim()||(r[`address.${p}`]=`${p} is required.`)}),d.password.trim()?d.password.length<6&&(r.password="Password must be at least 6 characters long."):r.password="Password is required.",name==="confirmPassword"&&(c(p=>({...p,confirmPassword:value})),value!==d.password?updatedErrors.confirmPassword="Passwords do not match.":delete updatedErrors.confirmPassword),d.category||(r.category="Category is required."),(!d.contactDetails.primaryNumber.trim()||isNaN(d.contactDetails.primaryNumber)||d.contactDetails.primaryNumber.length!==10)&&(r["contactDetails.primaryNumber"]="Primary number must be a valid 10-digit number."),(!d.contactDetails.whatsAppNumber.trim()||isNaN(d.contactDetails.whatsAppNumber)||d.contactDetails.whatsAppNumber.length!==10)&&(r["contactDetails.whatsAppNumber"]="WhatsApp number must be a valid 10-digit number."),(!d.contactDetails.email.trim()||!/\S+@\S+\.\S+/.test(d.contactDetails.email))&&(r["contactDetails.email"]="Valid email is required."),(!d.contactDetails.website.trim()||!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(d.contactDetails.website))&&(r["contactDetails.website"]="Valid website URL is required."),d.description.trim()||(r.description="Description is required."),R(r),Object.keys(r).length===0},S=async r=>{const{name:n,value:p,files:_}=r.target;if(_){if(n==="logo"){const D=_[0],q=new FileReader;q.onload=function(M){P(M.target.result),Z(D),l(!0)},q.readAsDataURL(D)}if(n==="images"){const D=Array.from(_),q=await Promise.all(D==null?void 0:D.map(M=>je(M,"freelist")));c(M=>({...M,images:q==null?void 0:q.map(se=>se.accessLink)})),U(D==null?void 0:D.map(M=>URL.createObjectURL(M)))}return}let z={...o};if(n.includes(".")){const[D,q]=n.split(".");c(M=>({...M,[D]:{...M[D],[q]:p}})),p.trim()?delete z[n]:z[n]=`${q} is required.`}else c(D=>({...D,[n]:p})),p.trim()?delete z[n]:z[n]=`${n} is required.`;(n==="contactDetails.primaryNumber"||n==="contactDetails.whatsAppNumber")&&(p.trim()&&!isNaN(p)&&p.length===10?delete z[n]:z[n]=`${n==="contactDetails.primaryNumber"?"Primary number":"WhatsApp number"} must be a valid 10-digit number.`),R(z)},[G,Z]=s.useState(null),[L,T]=s.useState({x:0,y:0}),[te,oe]=s.useState(1),[me,X]=s.useState(null),h=async()=>{try{const{fileUrl:r,blob:n}=await Xe(b,me);P(r),c(z=>({...z,logo:r})),l(!1);const p=new File([n],(G==null?void 0:G.name)||"cropped-logo.png",{type:n.type}),_=await je(p,"freelist");c(z=>({...z,logo:_.accessLink})),Z(p)}catch(r){console.error("Error cropping image:",r)}},W=async r=>{if(r.preventDefault(),!k()){Y.error("Please fix the errors in the form.");return}try{(await aa(d)).success?(Y.success("Listing created successfully!"),c({name:"",brandName:"",logo:null,address:{buildingName:"",streetName:"",landMark:"",district:"",state:"",pinCode:""},contactDetails:{primaryNumber:"",secondaryNumber:"",whatsAppNumber:"",primaryCountryCode:"",secondaryCountryCode:"",whatsappCountryCode:"",email:"",website:""},description:"",enconnectUrl:"",images:null}),F(),w(!1)):Y.error("Failed to create listing.")}catch(n){console.error("Error submitting form:",n),Y.error("An unexpected error occurred.")}},xe=r=>{U(n=>n.filter((p,_)=>_!==r))};return s.useEffect(()=>{(async()=>{var n;try{const p=await Ne();O((n=p==null?void 0:p.data)==null?void 0:n.data)}catch(p){console.error("Error fetching categories:",p)}finally{setLoading(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fixed-buttons d-md-block",children:[e.jsx(j.button,{className:"btn-advertise",onClick:()=>I("/create-business"),whileHover:{x:-5},whileTap:{scale:.95},children:"Create Profile"}),e.jsx("br",{})," ",e.jsx(j.button,{className:"btn-listing",onClick:()=>w(!0),whileHover:{x:-5},whileTap:{scale:.95},children:"Free Listing"})]}),e.jsx("div",{className:`modal fade ${y?"show":""}`,style:{display:y?"block":"none"},tabIndex:-1}),e.jsx("div",{className:`modal fade ${u?"show":""}`,style:{display:u?"block":"none"},tabIndex:-1,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsx("h5",{className:"modal-title fw-bold",children:"Create Free Listing"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>w(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("form",{onSubmit:W,children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("input",{type:"text",name:"name",className:`form-control ${o.name?"is-invalid":""}`,placeholder:"Your Name",value:d.name,onChange:S}),o.name&&e.jsx("div",{className:"invalid-feedback",children:o.name})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("input",{type:"text",name:"brandName",className:`form-control ${o.brandName?"is-invalid":""}`,placeholder:"Brand Name",value:d.brandName,onChange:S}),o.brandName&&e.jsx("div",{className:"invalid-feedback",children:o.brandName})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("input",{type:"email",name:"contactDetails.email",className:`form-control ${o["contactDetails.email"]?"is-invalid":""}`,placeholder:"Email",value:d.contactDetails.email,onChange:S}),o["contactDetails.email"]&&e.jsx("div",{className:"invalid-feedback",children:o["contactDetails.email"]})]}),e.jsxs("div",{className:"col-md-6 position-relative",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:ee?"text":"password",name:"password",className:`form-control ${o.password?"is-invalid":""}`,placeholder:"Password",value:d.password,onChange:S}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>t(!ee),children:ee?e.jsx(Ea,{size:20}):e.jsx(Ra,{size:20})})]}),o.password&&e.jsx("div",{className:"invalid-feedback",children:o.password})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsxs("select",{name:"category",className:`form-control ${o.category?"is-invalid":""}`,value:d.category,onChange:r=>{c(n=>({...n,category:r.target.value}))},children:[e.jsx("option",{value:"",children:"Select Category"}),V==null?void 0:V.map((r,n)=>e.jsx("option",{value:r._id,children:r.name},n))]}),o.category&&e.jsx("div",{className:"invalid-feedback",children:o.category})]}),["primaryNumber","secondaryNumber","whatsAppNumber","website"].map(r=>e.jsxs("div",{className:"col-md-6",children:[e.jsx("input",{type:r.includes("Number")?"tel":"url",name:`contactDetails.${r}`,className:`form-control ${o[`contactDetails.${r}`]?"is-invalid":""}`,placeholder:r.replace(/([A-Z])/g," $1").trim(),value:d.contactDetails[r],onChange:S}),o[`contactDetails.${r}`]&&e.jsx("div",{className:"invalid-feedback",children:o[`contactDetails.${r}`]})]},r)),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Logo"}),e.jsx("input",{type:"file",name:"logo",className:"form-control",accept:"image/*",onChange:S}),b&&e.jsx("img",{src:b,alt:"Logo Preview",className:"img-thumbnail mt-2",style:{width:"100px"}})]}),["buildingName","streetName","landMark","district","state","pinCode"].map(r=>e.jsxs("div",{className:"col-md-6",children:[e.jsx("input",{type:"text",name:`address.${r}`,className:`form-control ${o[`address.${r}`]?"is-invalid":""}`,placeholder:r.replace(/([A-Z])/g," $1").trim(),value:d.address[r],onChange:S}),o[`address.${r}`]&&e.jsx("div",{className:"invalid-feedback",children:o[`address.${r}`]})]},r)),e.jsxs("div",{className:"col-12",children:[e.jsx("textarea",{name:"description",className:`form-control ${o.description?"is-invalid":""}`,rows:4,placeholder:"Business Description",value:d.description,onChange:S}),o.description&&e.jsx("div",{className:"invalid-feedback",children:o.description})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Images (5 max)"}),e.jsx("input",{type:"file",name:"images",className:"form-control",accept:"image/*",multiple:!0,onChange:S}),e.jsx("div",{className:"d-flex gap-2 flex-wrap mt-2",children:K==null?void 0:K.map((r,n)=>e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{src:r,alt:`Preview ${n+1}`,className:"img-thumbnail",style:{width:"100px",height:"100px",objectFit:"cover"}}),e.jsx("button",{type:"button",className:"position-absolute top-0 start-100 translate-middle badge bg-danger border-0",onClick:()=>xe(n),style:{width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",cursor:"pointer"},children:"X"})]},n))})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("input",{type:"url",name:"enconnectUrl",className:`form-control ${o.enconnectUrl?"is-invalid":""}`,placeholder:"Auxxbay Profile URL",value:d.enconnectUrl,onChange:S}),o.enconnectUrl&&e.jsx("div",{className:"invalid-feedback",children:o.enconnectUrl})]}),e.jsx("div",{className:"col-12",children:e.jsx("button",{type:"submit",className:"btn btn-submit w-100",children:"Submit"})})]})})})]})})}),e.jsx(Fe,{children:C&&G&&e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:e.jsx("div",{className:"modal-dialog modal-lg",role:"document",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Crop Your Logo"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>l(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("div",{className:"cropper-container position-relative",style:{height:"400px"},children:e.jsx(Ze,{image:b,crop:L,zoom:te,aspect:1,onCropChange:T,onZoomChange:oe,onCropComplete:(r,n)=>X(n)})})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"mx-2 btn-primary",variant:"contained",color:"primary",onClick:h,children:"Save Crop"}),e.jsx("button",{className:"btn btn-danger",variant:"filled",color:"warning",onClick:()=>l(!1),children:"Cancel"})]})]})})})}),(y||u)&&e.jsx("div",{className:"modal-backdrop fade show",onClick:()=>{B(!1),w(!1)}}),e.jsx("style",{jsx:!0,children:`
        .fixed-buttons {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 20px; /* For desktop screens */
        }

        .btn-submit {
          background: linear-gradient(to right, #e72693, #ff7e2b);
        }

        .btn-advertise,
        .btn-listing {
          border: none;
          color: white;
          padding: 10px 8px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px 0 0 8px;
          width: 40px;
          transition: all 0.3s ease;
          writing-mode: vertical-lr;
          text-orientation: mixed;
          height: 130px;
          margin-top: 20px;
        }

        .btn-advertise {
          background-color: #e72693;
        }

        .btn-listing {
          background-color: #ff7e2b;
        }

        @media (max-width: 768px) {
          .fixed-buttons {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 0px; /* For desktop screens */
          }

          .btn-advertise,
          .btn-listing {
            border: none;
            color: white;
            padding: 10px 8px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            border-radius: 8px 0 0 8px;
            width: 40px;
            transition: all 0.3s ease;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            height: 130px;
            margin-top: 20px;
          }

          .fixed-buttons br {
            display: block; /* Ensure the line break applies only on smaller screens */
          }
        }

        .btn-listing {
          background-color: #ff7e2b;
        }

        .modal-content {
          border-radius: 15px;
          border: none;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          padding: 1.5rem;
        }

        .modal-body {
          padding: 1.5rem;
        }

        .form-control {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
          border-color: #0066ff;
        }

        .btn-primary {
          background-color: #0066ff;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 500;
        }

        .btn-primary:hover {
          background-color: #0052cc;
        }
      `})]})}const Ke=({loading:F,categoryData:y,visibleCategories:B,loadMoreCategories:u,totalCategoryData:w})=>{const[V,O]=s.useState(!1),[I,C]=s.useState(window.innerWidth<=768);s.useEffect(()=>{const c=()=>{C(window.innerWidth<=768)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const l=async()=>{O(!0),await u(),O(!1)},d={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4}}};return e.jsxs("section",{id:"category",className:"cat-section bg-white",children:[e.jsx("div",{className:"container-fluid px-4",children:e.jsxs("div",{className:"cat-grid",children:[y.map((c,b)=>e.jsx(j.div,{className:"cat-grid-item",variants:d,initial:"hidden",animate:"visible",whileHover:{scale:1.05},children:e.jsx(Ve,{to:`/category/${c._id}`,className:"text-decoration-none",children:e.jsx("div",{className:"cat-card",children:e.jsxs("div",{className:"cat-card-body",children:[e.jsx("div",{className:"cat-icon-wrapper",children:e.jsx("img",{src:c.image&&c.image.length>0?c.image:Ee,alt:c.name,className:"cat-icon"})}),e.jsx("h3",{className:"cat-title",children:c.name})]})})})},c._id)),B<w&&e.jsx(j.div,{className:"cat-grid-item",onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx("div",{className:"cat-card cat-view-more",children:e.jsx("div",{className:"cat-card-body",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cat-icon-wrapper",children:e.jsx("i",{className:"bi bi-plus-lg cat-plus-icon"})}),e.jsx("h3",{className:"cat-title",children:"View More"})]})})})})]})}),e.jsx("style",{children:`
          .cat-section {
            padding: 20px 0;
          }

          .cat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 15px;
            padding: 10px;
          }

          .cat-grid-item {
            display: flex;
            justify-content: center;
          }

          .cat-card {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            border: 1px solid #eee;
          }

          .cat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .cat-card-body {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px;
          }

          .cat-icon-wrapper {
            width: 40px;
            height: 40px;
            background: #f8f9fa;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
          }

          .cat-icon {
            width: 30px;
            height: 30px;
            object-fit: contain;
            border-radius: 4px;
          }

          .cat-plus-icon {
            font-size: 20px;
            color: #666;
          }

          .cat-title {
            font-size: 0.75rem;
            font-weight: 500;
            color: #333;
            text-align: center;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            max-width: 100%;
          }

          .cat-view-more {
            border: 1px dashed #ddd;
            background: #fcfcfc;
          }

          .cat-view-more:hover {
            background: #f8f9fa;
          }

          .cat-spinner {
            border: 2px solid #f3f3f3;
            border-top: 2px solid #3498db;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            .cat-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }

            .cat-card {
              width: 90px;
              height: 90px;
            }

            .cat-icon-wrapper {
              width: 35px;
              height: 35px;
            }

            .cat-icon {
              width: 25px;
              height: 25px;
            }

            .cat-title {
              font-size: 0.7rem;
            }
          }
        `})]})};Ke.propTypes={loading:E.bool.isRequired,categoryData:E.array.isRequired,visibleCategories:E.number.isRequired,loadMoreCategories:E.func.isRequired};const Ba=["places"],Je=({bannerData:F,onSearch:y,setLocation:B,setSerachItem:u})=>{const[w,V]=s.useState(""),[O,I]=s.useState(!0),[C,l]=s.useState("fade-in"),d=s.useCallback(()=>{y(w),u(!!w)},[w,y]);return s.useEffect(()=>{let c=window.scrollY;const b=()=>{const P=window.scrollY;if(window.innerWidth<768){I(!0),l("fade-in");return}P<=200?(I(!0),l("fade-in")):P>c?(l("fade-out-up"),setTimeout(()=>I(!1),300)):(I(!0),l("fade-in")),c=P};return window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)}},[]),e.jsxs("div",{id:"home",className:"home-section",children:[e.jsxs("div",{className:"banner-sectionn relative",children:[e.jsx("div",{className:"banner-overlay relative",children:e.jsx(De,{controls:!1,className:"",children:F&&F.length>0?F.map(c=>{var b;return e.jsx(De.Item,{className:"banner-item",children:e.jsx("img",{className:"banner-imageIndex h-full object-cover rounded-lg",src:((b=c==null?void 0:c.image)==null?void 0:b.length)>0?c==null?void 0:c.image:Ee,alt:"Banner slide"})},`key-${c==null?void 0:c._id}`)}):e.jsx(De.Item,{className:"banner-item",children:e.jsx("img",{className:"banner-imageIndex h-full object-cover rounded-lg",src:"/images/placeholder.jpg",alt:"Default slide"})})})}),e.jsxs("div",{className:"banner-content absolute top-2/2 left-2/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center",children:[e.jsx("h1",{className:"text-2xl md:text-4xl font-bold",children:"Your Digital Platform for Growing Your Business"}),e.jsxs("div",{className:`search-bar flex flex-col sm:flex-row gap-2 justify-center items-center ${C}`,children:[e.jsx("div",{className:"location-autocomplete",children:e.jsx(ta,{setLocation:B,libraries:Ba})}),e.jsxs("div",{className:"search-input-group flex items-center border-2 border-white rounded-md overflow-hidden",children:[e.jsx("input",{type:"text",placeholder:"Search for any service...",value:w,onInput:c=>V(c.target.value),className:"p-2 outline-none",style:{backgroundColor:"rgba(76, 75, 75, 0.3)",backdropFilter:"blur(8px)",borderRadius:"4px",border:"none"}}),e.jsx("button",{onClick:d,className:"bg-orange-500 p-3.5 text-white",children:e.jsx("i",{className:"bi bi-search"})})]})]})]})]}),e.jsx("style",{children:`
        .fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease, transform 0.3s ease;
}

/* For fade-out effect with upward movement */
.fade-out-up {
  opacity: 0;
  transform: translateY(-20px); /* Moves it upwards */
  transition: opacity 0.8s ease, transform 0.3s ease;
}
        `})]})};Je.propTypes={bannerData:E.arrayOf(E.shape({_id:E.string.isRequired,image:E.string})),onSearch:E.func.isRequired,setLocation:E.func.isRequired};const Qe=({loading:F,businessData:y,visibleBusiness:B,totalBusinessData:u,loadMoreBusiness:w,scroll:V,searchItem:O})=>{console.log(O,"kkkkkkkkkk:");const[I,C]=s.useState(!1),[l,d]=s.useState(null),c=t=>t&&t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),b=async(t,o,R)=>{t.preventDefault();const k=await la({...o,businessId:R});return k!=null&&k.data?(Y.success("Form submitted successfully!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#38a20e",color:"#FFFFFF"}}),!0):(Y.success("Failed submission failed!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#aa0808",color:"#FFFFFF"}}),!1)},P=t=>[...Array(5)].map((o,R)=>e.jsx(oa,{size:12,className:R<Math.floor(t)?"text-warning":"text-muted"},R)),K=(t,o)=>{const k=t||"+91";window.open(`https://wa.me/${k}${o}`,"_blank")},U=t=>{const o=`tel:${String(t).replace(/\s/g,"")}`;window.location.href=o},ee=(t,o)=>{t.preventDefault(),d(o),C(!0)};return e.jsxs("section",{className:"home-spot h-auto mb-2",ref:V,children:[e.jsxs("div",{className:"container py-5",id:"business",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("h1",{className:"fw-bold mb-3",children:"Discover the Top Profiles"}),e.jsx("p",{className:"text-muted mx-auto",style:{maxWidth:"800px"},children:"Explore the most popular profile listings in your area through our local profile directory listing, highly rated by locals and visitors alike. Our platform makes it easy to find top-rated profiles based on customer reviews and expert recommendations."})]}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 g-lg-4 g-0",children:[(y==null?void 0:y.length)>0?y.map(t=>{var o,R,k,S,G,Z;return e.jsx("div",{className:"col mb-4",children:e.jsx(Ve,{to:(o=t==null?void 0:t.selectedPlan)!=null&&o.isPremium?`/profile/premium/${c(t==null?void 0:t.businessName)}/${t==null?void 0:t._id}`:`/profile/${c(t==null?void 0:t.businessName)}/${t==null?void 0:t._id}`,className:"text-decoration-none",children:e.jsxs("div",{className:"card  h-100 border-0 shadow-xl btn-parent rounded-4 hover-card",children:[e.jsxs("div",{className:"px-4 pb-4 position-relative",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"custom-font-size small text-muted",children:((R=t==null?void 0:t.category)==null?void 0:R.name)||"News & Media"}),e.jsx("h5",{className:"card-title h6 fw-bold text-dark mt-2",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",minHeight:"40px",paddingRight:"45%"},children:t==null?void 0:t.businessName}),e.jsxs("p",{className:"card-text text-muted small mb-0",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",paddingRight:"45%"},children:[(k=t==null?void 0:t.address)==null?void 0:k.buildingName," ",(S=t==null?void 0:t.address)==null?void 0:S.city," ",(G=t==null?void 0:t.address)==null?void 0:G.landMark]})]}),e.jsx("div",{className:"position-absolute bg-white shadow-sm",style:{width:"130px",height:"130px",right:"20px",top:"-45px",borderRadius:"12px",padding:"6px",overflow:"hidden"},children:e.jsx("div",{className:"w-100 h-100 position-relative",children:e.jsx("img",{src:(t==null?void 0:t.logo)||Ee,alt:t==null?void 0:t.businessName,className:"position-absolute",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})})}),e.jsx("div",{className:"position-absolute bg-white px-2 py-1 rounded-pill shadow-sm",style:{right:"35px",top:"100px",zIndex:1},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center",children:[P((t==null?void 0:t.rating)||0),e.jsx("span",{className:"ms-1 small fw-medium",children:(t==null?void 0:t.rating)||"0.0"})]})})]}),e.jsx("div",{className:" p-3",children:e.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[e.jsxs("button",{className:"btn btn-success btn-sm flex-1 d-flex align-items-center justify-content-center gap-2",onClick:L=>{var T;L.preventDefault(),U((T=t==null?void 0:t.contactDetails)==null?void 0:T.primaryNumber)},children:[e.jsx(Ge,{})," ",((Z=t==null?void 0:t.contactDetails)==null?void 0:Z.primaryNumber)??""]}),e.jsxs("button",{className:"btn btn-outline-success btn-sm flex-1 d-flex align-items-center justify-content-center gap-2",onClick:L=>{var T,te;L.preventDefault(),K((T=t==null?void 0:t.contactDetails)==null?void 0:T.whatsappCountryCode,(te=t==null?void 0:t.contactDetails)==null?void 0:te.whatsAppNumber)},children:[e.jsx(ve,{})," WhatsApp"]}),e.jsxs("button",{className:"btn btn-enquiry btn-sm flex-1 d-flex align-items-center justify-content-center gap-2",onClick:L=>{L.preventDefault(),ee(L,t)},children:[e.jsx(sa,{})," Send Enquiry"]})]})})]})})},t._id)}):e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"  h-100 border-0  rounded-4 overflow-visible",children:e.jsxs("div",{className:"px-4  py-3 text-center",children:[e.jsx("h5",{className:"card-title h6 text-dark",children:"Profile not found"}),e.jsx("p",{className:"card-text text-muted",children:"No business profiles available at the moment."})]})})}),!O&&B<u&&e.jsx("div",{className:"col",children:e.jsx("div",{className:"cardd h-100 border-0 shadow-xl rounded-4 overflow-visible hover-card d-flex align-items-center justify-content-center cursor-pointer",onClick:w,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"card-title h6 fw-bold text-dark ",children:"View More"}),e.jsx("i",{className:"bi bi-arrow-right fs-4"})]})})})]})]}),l&&e.jsx(ra,{show:I,handleFormSubmit:b,onHide:()=>{C(!1),d(null)},businessName:l.businessName,businessId:l._id}),e.jsx("style",{children:`

        .cardd{
        height:80%;
        }
          .col {
            animation: fadeInUp 0.5s ease-out;
            animation-fill-mode: both;
          }
          .col:nth-child(3n+1) { animation-delay: 0.1s; }
          .col:nth-child(3n+2) { animation-delay: 0.2s; }
          .col:nth-child(3n+3) { animation-delay: 0.3s; }

          .hover-card {
            transition: all 0.3s ease;
            background: white;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }
          .text-warning {
            color: #ffc107 !important;
          }
          .overflow-visible {
            overflow: visible !important;
          }
          
          .btn-enquiry{
          background:linear-gradient(to right, #e72693, #ff7e2b ); 
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .btn-crd{
          padding:20px
          
          }

          @media (max-width: 575px) {
            .card {
              font-size: 0.9rem;
            }
            .card .position-absolute {
              width: 80px;
              right: 0px;
              top: 0px;
            }
            .card-title.h6 {
              font-size: 1rem;
            }
            .card-text {
              font-size: 0.75rem;
            }
            .col {
              margin-bottom: 1rem;
            }
            .row-cols-2 {
              margin-bottom: 1rem;
            }
            .col .card {
              margin-bottom: 0.5rem;
            }
            .card .position-absolute {
              width: 60px;
              top: 0px;
              right: 0px;
            }
            .card img {
              width: 100%;
              height: auto;
            }
          }
          .cursor-pointer {
            cursor: pointer;
          }

          .card .btn-sm {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          @media (max-width: 575px) {
            .card .btn-sm {
              font-size: 0.6rem;
              padding: 0.2rem 0.4rem;
            }
          }

          .modal-content {
            border-radius: 1rem;
            border: none;
          }

          .form-control {
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
          }

          .form-control:focus {
            box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
          }

          .btn-parent{
          display:flex;
          flex-direction: column;
          justify-content:end;
          
          }
          @media (max-width: 1200px) {
          .custom-font-size {
           font-size: 12px; /* Default font size for larger screens */
          }
        }

          @media (max-width: 370px) {
         .custom-font-size {
          font-size: 9px; /* Smaller font size for screens under 370px */
        }
}
          
        `})]})};Qe.propTypes={loading:E.bool.isRequired,businessData:E.array.isRequired,visibleBusiness:E.number.isRequired,totalBusinessData:E.number.isRequired,loadMoreBusiness:E.func.isRequired,scroll:E.object};const Ia=({freelist:F,fetchFreeList:y,freeListPage:B,setFreeListPage:u,freeListTotalCount:w,renderStars:V,handleEnquiryClick:O})=>{var x,J,H,ce,Pe,Re,Me,Ae,$e,Be,Ie,ze,qe,Ue;const[I,C]=s.useState(!1),[l,d]=s.useState(null),[c,b]=s.useState(null),[P,K]=s.useState([]),[U,ee]=s.useState(F??[]);s.useEffect(()=>{F&&ee(a=>[...a,...F])},[F]);const t=a=>{d(a),C(!0)},o=(a,i)=>{const A=a||"+91";window.open(`https://wa.me/${A}${i}`,"_blank")},R=a=>{const i=`tel:${String(a).replace(/\s/g,"")}`;window.location.href=i},k=()=>{C(!1)},S=()=>{u(B+1)},[G,Z]=s.useState(!1),[L,T]=s.useState({email:"",password:""}),[te,oe]=s.useState(""),[me,X]=s.useState(!1),[h,W]=s.useState({name:"",brandName:"",contactDetails:{email:"",primaryNumber:"",secondaryNumber:"",whatsAppNumber:"",website:""},category:"",password:"",address:{buildingName:"",streetName:"",landMark:"",district:"",state:"",pinCode:""},description:"",enconnectUrl:"",logo:"",images:[]}),xe=a=>{T(i=>({...i,email:a||""})),Z(!0)},r=()=>Z(!1),n=a=>{const{name:i,value:g}=a.target;T(A=>({...A,[i]:g}))},p=async a=>{a.preventDefault();const i=await ua(L);i.success===!0&&(W(i.data),oe(i.data._id),Y.success("login success"),console.log(h,"Login Successful!"),Z(!1),X(!0)),r()},[_,z]=s.useState({}),[D,q]=s.useState([]),[M,se]=s.useState(null),[ie,ne]=s.useState(null),[ue,re]=s.useState(!1),[ye,we]=s.useState({x:0,y:0}),[ge,Ce]=s.useState(1),[ke,Se]=s.useState(null),N=async a=>{const{name:i,value:g,files:A}=a.target;if(a.target.type==="file"){if(i==="logo"){const f=A[0],$=new FileReader;$.onload=function(Q){se(Q.target.result),ne(f),re(!0)},$.readAsDataURL(f)}if(i==="images"){const f=Array.from(A),$=await Promise.all(f==null?void 0:f.map(Q=>je(Q,"freelist")));W(Q=>({...Q,images:$==null?void 0:$.map(le=>le.accessLink)})),q(f==null?void 0:f.map(Q=>URL.createObjectURL(Q)))}}else if(i.startsWith("contactDetails.")){const f=i.split(".")[1];W($=>({...$,contactDetails:{...$.contactDetails,[f]:g}}))}else if(i.startsWith("address.")){const f=i.split(".")[1];W($=>({...$,address:{...$.address,[f]:g}}))}else W(f=>({...f,[i]:g}))},fe=async()=>{try{const{fileUrl:a,blob:i}=await Xe(M,ke);se(a),W(f=>({...f,logo:a})),re(!1);const g=new File([i],(ie==null?void 0:ie.name)||"cropped-logo.png",{type:i.type}),A=await je(g,"freelist");W(f=>({...f,logo:A.accessLink})),ne(g)}catch(a){console.error("Error cropping image:",a)}},be=async a=>{a.preventDefault(),(await ga(te,h)).success===!0&&(Y.success("Business Updated successfully!"),C(!1),y(),X(!1)),r()};s.useEffect(()=>{(async()=>{var i;try{const g=await Ne();K((i=g==null?void 0:g.data)==null?void 0:i.data)}catch(g){console.error("Error fetching categories:",g)}finally{setLoading(!1)}})()},[]);const v=a=>{q(i=>i.filter((g,A)=>A!==a)),W(i=>({...i,images:i.images.filter((g,A)=>A!==a)}))},m=a=>{navigator.clipboard.writeText(window.location.href+"business-page/"+a).then(()=>{Y.success("Link copied to clipboard!"),setTimeout(()=>setToastMessage(""),2e3)})};return e.jsxs("section",{className:"home-spot h-auto mb-2",children:[e.jsxs("div",{className:"container py-5",id:"freelist",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("h1",{className:"fw-bold mb-3",children:"Find & Connect with Local Businesses – Absolutely Free!"}),e.jsx("p",{className:"text-muted mx-auto",style:{maxWidth:"800px"},children:"Find various businesses near you from the free profile listing directory. Top-rated services can be discovered through genuine customer reviews and recommendations from the community. No fees, no fuss; simply unhindered access to the best local businesses around you!"})]}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 g-lg-4 g-0",children:[(U==null?void 0:U.length)>0?U==null?void 0:U.map(a=>{var i,g,A,f,$,Q;return e.jsx("div",{className:"col mb-4",children:e.jsxs("div",{className:"card h-100 border-0 shadow-xl btn-parent rounded-4 hover-card",onClick:()=>t(a),children:[e.jsxs("div",{className:"px-4 pb-4 position-relative",children:[e.jsxs("div",{children:[e.jsx("div",{className:"custom-font-size small text-muted",children:(a==null?void 0:a.brandName)||"No Brand Name"}),e.jsx("h5",{className:"card-title h6 fw-bold text-dark mt-2",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",minHeight:"40px",paddingRight:"45%"},children:a==null?void 0:a.name}),e.jsxs("p",{className:"card-text text-muted small mb-0",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",paddingRight:"45%"},children:[(i=a==null?void 0:a.address)==null?void 0:i.buildingName,","," ",(g=a==null?void 0:a.address)==null?void 0:g.streetName,","," ",(A=a==null?void 0:a.address)==null?void 0:A.district,","," ",(f=a==null?void 0:a.address)==null?void 0:f.state," -"," ",($=a==null?void 0:a.address)==null?void 0:$.pinCode]})]}),e.jsx("div",{className:"position-absolute bg-white shadow-sm",style:{width:"130px",height:"130px",right:"20px",top:"-45px",borderRadius:"12px",padding:"6px",overflow:"hidden"},children:e.jsx("div",{className:"w-100 h-100 position-relative",children:e.jsx("img",{src:(a==null?void 0:a.logo)||"PlaceholderImageURL",alt:a==null?void 0:a.name,className:"position-absolute",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})})})]}),e.jsx("div",{className:"p-3",children:e.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[e.jsxs("button",{className:"btn btn-success btn-sm flex-1 d-flex align-items-center justify-content-center gap-2",onClick:le=>{var pe;le.preventDefault(),le.stopPropagation(),R((pe=a==null?void 0:a.contactDetails)==null?void 0:pe.primaryNumber)},children:[e.jsx(Ge,{})," ",((Q=a==null?void 0:a.contactDetails)==null?void 0:Q.primaryNumber)||"N/A"]}),e.jsxs("button",{className:"btn btn-outline-success btn-sm flex-1 d-flex align-items-center justify-content-center gap-2",onClick:le=>{var pe,We;le.preventDefault(),le.stopPropagation(),o((pe=a==null?void 0:a.contactDetails)==null?void 0:pe.whatsappCountryCode,(We=a==null?void 0:a.contactDetails)==null?void 0:We.whatsAppNumber)},children:[e.jsx(ve,{})," WhatsApp"]})]})})]})},a._id)}):e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"text-center",children:"No profiles available."})}),8*B<w&&e.jsx("div",{className:"col",children:e.jsx("div",{className:"cardd h-100 border-0 shadow-xl rounded-4 overflow-visible hover-card d-flex align-items-center justify-content-center cursor-pointer",onClick:S,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"card-title h6 fw-bold text-dark ",children:"View More"}),e.jsx("i",{className:"bi bi-arrow-right fs-4"})]})})})]})]}),e.jsx(Fe,{children:I&&e.jsx(ae,{show:I,onHide:k,size:"lg",centered:!0,children:e.jsxs(j.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},transition:{type:"spring",damping:20,stiffness:300},className:"modal-content bg-gradient-to-br from-gray-100 to-gray-200",children:[e.jsx(ae.Body,{className:"p-4",children:e.jsxs(ia,{className:"g-0",children:[e.jsx(_e,{md:8,children:e.jsxs(j.div,{className:"pe-4",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[e.jsxs("div",{className:"d-flex mb-4",children:[e.jsx(j.div,{className:"me-4",whileHover:{scale:1.05,rotate:5},transition:{type:"spring",stiffness:300},children:l.logo&&e.jsx(He,{src:l.logo||"/placeholder.svg",alt:`${l.brandName} logo`,width:120,height:120,className:"border-4 border-amber-400 rounded-lg shadow-lg"})}),e.jsx("div",{className:"flex-grow-1",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start position-relative",children:[e.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[e.jsx("p",{className:"mb-0 text-gray-600",children:(l==null?void 0:l.categoryName)||"N/A"}),e.jsx("h2",{className:"h5 mt-4 pt-2 mb-2 text-emerald-600 fw-bold",children:l.name}),e.jsxs("p",{className:"mb-0 text-gray-600",children:[e.jsx(na,{className:"me-2 inline-block text-amber-500",size:16}),e.jsx("strong",{children:"Brand Name:"})," ",l.brandName||"N/A"]})]}),e.jsxs("div",{className:"position-absolute top-0 end-0 d-flex",children:[e.jsx(de,{style:{fontSize:"30px",fontWeight:"bold",color:"#6b7280",transition:"color 0.3s ease-in-out"},variant:"link",onClick:()=>m(l._id),className:"p-0 me-3 text-blue-500 hover:text-blue-700 transition-all",children:e.jsx(Aa,{})}),e.jsx(de,{style:{fontSize:"30px",fontWeight:"bold",color:"#6b7280",transition:"color 0.3s ease-in-out"},variant:"link",onClick:()=>{var a;return xe((a=l==null?void 0:l.contactDetails)==null?void 0:a.email)},className:"p-0 me-3 text-blue-500 hover:text-blue-700 transition-all",children:e.jsx(ca,{size:22})}),e.jsx(de,{variant:"link",onClick:k,style:{fontSize:"30px",fontWeight:"bold",color:"#6b7280",transition:"color 0.3s ease-in-out"},onMouseEnter:a=>a.target.style.color="#374151",onMouseLeave:a=>a.target.style.color="#6b7280",children:"×"})]})]})})]}),e.jsxs(j.div,{className:"mb-4 p-3 bg-white rounded-lg shadow-md",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},whileHover:{boxShadow:"0 8px 15px rgba(0,0,0,0.1)"},children:[e.jsx("h5",{className:"mb-3 text-emerald-600",children:"Description"}),e.jsx("p",{className:"text-gray-700 mb-0",children:l.description||"No description available."})]}),l.images&&l.images.length>0&&e.jsxs(j.div,{className:"mb-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[e.jsx("h5",{className:"mb-3 text-emerald-600 text-sm",children:"Gallery"}),e.jsx("div",{className:"d-flex flex-wrap gap-3 p-3 border rounded-lg bg-white overflow-auto",style:{maxHeight:"250px"},children:(x=l==null?void 0:l.images)==null?void 0:x.map((a,i)=>e.jsx(j.div,{className:"rounded-lg overflow-hidden shadow-md cursor-pointer",style:{width:"22%",aspectRatio:"1 / 1",minWidth:"80px"},whileHover:{scale:1.05,boxShadow:"0 8px 15px rgba(0,0,0,0.1)",rotate:5},transition:{type:"spring",stiffness:300},onClick:()=>b(a),children:e.jsx(He,{src:a||"/placeholder.svg",alt:`${l.name} image ${i+1}`,width:200,height:200,className:"w-100 h-100 hover-scale transition-all",style:{objectFit:"cover"}})},i))})]})]})}),e.jsx(_e,{md:4,children:e.jsxs(j.div,{className:"h-100 border",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[e.jsxs(j.div,{className:"mb-4 p-3 rounded-lg shadow-md bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300",whileHover:{boxShadow:"0 8px 15px rgba(0,0,0,0.1)",scale:1.02},children:[e.jsxs("h5",{className:"mb-2 fw-bold text-sm text-amber-700 d-flex align-items-center",children:[e.jsx(da,{className:"me-2 text-amber-500",size:14})," ","Address"]}),e.jsxs("p",{className:"mb-0 text-xs text-gray-700",children:[e.jsx(ma,{className:"me-2 text-amber-500 inline-block",size:12}),e.jsxs("strong",{children:[l.address.buildingName,","]})," ",e.jsx("br",{}),l.address.streetName,", ",e.jsx("br",{}),l.address.district,","," ",l.address.state," -",e.jsxs("strong",{children:[" ",l.address.pinCode]})]})]}),e.jsxs(j.div,{className:"mb-4 p-3 rounded-lg shadow-md bg-gradient-to-r from-emerald-100 to-emerald-200",whileHover:{boxShadow:"0 8px 15px rgba(0,0,0,0.1)",scale:1.02},children:[e.jsx("h5",{className:"mb-2 text-sm text-emerald-700",children:"Contact Details"}),e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(he,{icon:e.jsx(Oe,{className:"text-blue-500",size:12}),label:"Primary",value:`${l.contactDetails.primaryCountryCode} ${l.contactDetails.primaryNumber}`}),l.contactDetails.secondaryNumber&&e.jsx(he,{icon:e.jsx(Oe,{className:"text-indigo-500",size:12}),label:"Secondary",value:`${l.contactDetails.secondaryCountryCode} ${l.contactDetails.secondaryNumber}`}),e.jsx(he,{icon:e.jsx(ve,{className:"text-green-500",size:12}),label:"WhatsApp",value:`${l.contactDetails.whatsappCountryCode} ${l.contactDetails.whatsAppNumber}`}),e.jsx(he,{icon:e.jsx(pa,{className:"text-red-500",size:12}),label:"Email",value:l.contactDetails.email}),l.contactDetails.website&&e.jsx(he,{icon:e.jsx(ha,{className:"text-purple-500",size:12}),label:"Website",value:e.jsx("a",{href:l.contactDetails.website,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-purple-600 hover:text-purple-700 hover:underline text-xs",children:l.contactDetails.website})})]})]}),l.enconnectUrl&&e.jsxs(j.div,{className:"p-3 rounded-lg shadow-md bg-gradient-to-r from-purple-100 to-purple-200",whileHover:{boxShadow:"0px 8px 15px rgba(0,0,0,0.1)",scale:1.02},children:[e.jsxs("h5",{className:"mb-2 text-sm text-purple-700 d-flex align-items-center",children:[e.jsx(xa,{className:"me-2 text-purple-500",size:12})," ","Auxxbay URL"]}),e.jsx(j.a,{href:l.enconnectUrl,target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none text-break text-purple-600 hover:text-purple-700 hover:underline d-flex align-items-center text-xs",whileHover:{x:5},children:l.enconnectUrl})]})]})})]})}),e.jsx("div",{className:"d-flex justify-content-center p-3",children:e.jsx(j.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(de,{variant:"outline-secondary",onClick:k,className:"px-4 py-2 rounded-full shadow-sm bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400",children:"Close"})})})]})})}),e.jsx(ae,{show:c,children:c&&e.jsx(j.div,{className:"position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center  bg-opacity-75",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>b(null),children:e.jsxs(j.div,{className:"position-relative bg-white p-3 rounded-3 shadow-lg d-flex flex-column align-items-center",initial:{scale:.8},animate:{scale:1},exit:{scale:.8},onClick:a=>a.stopPropagation(),style:{width:"480px",height:"480px"},children:[e.jsx("button",{className:"position-absolute top-0 end-0 translate-middle p-2 border-0 rounded-circle bg-white shadow-sm",onClick:()=>b(null),style:{width:"35px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("i",{className:"bi bi-x-lg text-dark fs-6"})}),e.jsx("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden rounded-3 border",children:e.jsx("img",{src:c||"/placeholder.svg",alt:"Expanded image",className:"w-100 h-100 object-cover rounded-3"})})]})})}),e.jsxs(ae,{show:G,onHide:r,centered:!0,children:[e.jsx(ae.Header,{closeButton:!0,children:e.jsx(ae.Title,{children:"Edit Details"})}),e.jsx(ae.Body,{children:e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"Enter Email",value:L.email,readOnly:!0,disabled:!0,style:{pointerEvents:"none",backgroundColor:"#f3f4f6"}})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsx("input",{type:"password",name:"password",className:"form-control",placeholder:"Enter Password",value:L.password,onChange:n,required:!0})]}),e.jsxs("div",{className:"text-end",children:[e.jsx(de,{variant:"secondary",onClick:r,className:"me-2",children:"Cancel"}),e.jsx(de,{type:"submit",variant:"primary",children:"Submit"})]})]})})]}),e.jsx(ae,{show:ue,children:e.jsx(Fe,{children:ue&&ie&&e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",children:e.jsx("div",{className:"modal-dialog modal-lg",role:"document",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Crop Your Logo"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>re(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("div",{className:"cropper-container position-relative",style:{height:"400px"},children:e.jsx(Ze,{image:M,crop:ye,zoom:ge,aspect:1,onCropChange:we,onZoomChange:Ce,onCropComplete:(a,i)=>Se(i)})})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"mx-2 btn-primary",variant:"contained",color:"primary",onClick:fe,children:"Save Crop"}),e.jsx("button",{className:"btn btn-danger",variant:"filled",color:"warning",onClick:()=>re(!1),children:"Cancel"})]})]})})})})}),e.jsx(ae,{show:me,onHide:()=>X(!1),children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-xl",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header border-0",children:[e.jsx("h5",{className:"modal-title fw-bold",children:"Edit Free Listing"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>X(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsx("form",{onSubmit:be,children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",className:"form-control",placeholder:"Your Name",value:h.name||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Brand Name"}),e.jsx("input",{type:"text",name:"brandName",className:"form-control",placeholder:"Brand Name",value:h.brandName||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",name:"contactDetails.email",className:"form-control",placeholder:"Email",value:((J=h.contactDetails)==null?void 0:J.email)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Primary Number"}),e.jsx("input",{type:"tel",name:"contactDetails.primaryNumber",className:"form-control",placeholder:"Primary Number",value:((H=h.contactDetails)==null?void 0:H.primaryNumber)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Secondary Number"}),e.jsx("input",{type:"tel",name:"contactDetails.secondaryNumber",className:"form-control",placeholder:"Secondary Number",value:((ce=h.contactDetails)==null?void 0:ce.secondaryNumber)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"WhatsApp Number"}),e.jsx("input",{type:"tel",name:"contactDetails.whatsAppNumber",className:"form-control",placeholder:"WhatsApp Number",value:((Pe=h.contactDetails)==null?void 0:Pe.whatsAppNumber)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Website"}),e.jsx("input",{type:"url",name:"contactDetails.website",className:"form-control",placeholder:"Website",value:((Re=h.contactDetails)==null?void 0:Re.website)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Category"}),e.jsxs("select",{name:"category",className:`form-control ${_.category?"is-invalid":""}`,value:((Me=h.category)==null?void 0:Me._id)||"",onChange:a=>{W(i=>({...i,category:P.find(g=>g._id===a.target.value)||null}))},children:[e.jsx("option",{value:"",children:"Select Category"}),P==null?void 0:P.map((a,i)=>e.jsx("option",{value:a._id,children:a.name},i))]}),_.category&&e.jsx("div",{className:"invalid-feedback",children:_.category})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Building Name"}),e.jsx("input",{type:"text",name:"address.buildingName",className:"form-control",placeholder:"Building Name",value:((Ae=h.address)==null?void 0:Ae.buildingName)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Street Name"}),e.jsx("input",{type:"text",name:"address.streetName",className:"form-control",placeholder:"Street Name",value:(($e=h.address)==null?void 0:$e.streetName)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Landmark"}),e.jsx("input",{type:"text",name:"address.landMark",className:"form-control",placeholder:"Landmark",value:((Be=h.address)==null?void 0:Be.landMark)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"District"}),e.jsx("input",{type:"text",name:"address.district",className:"form-control",placeholder:"District",value:((Ie=h.address)==null?void 0:Ie.district)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"State"}),e.jsx("input",{type:"text",name:"address.state",className:"form-control",placeholder:"State",value:((ze=h.address)==null?void 0:ze.state)||"",onChange:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Pin Code"}),e.jsx("input",{type:"text",name:"address.pinCode",className:"form-control",placeholder:"Pin Code",value:((qe=h.address)==null?void 0:qe.pinCode)||"",onChange:N})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Business Description"}),e.jsx("textarea",{name:"description",className:"form-control",rows:4,placeholder:"Business Description",value:h.description||"",onChange:N})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Logo"}),e.jsx("input",{type:"file",name:"logo",className:"form-control",accept:"image/*",onChange:N})]}),h.logo&&e.jsx("div",{className:"mb-3",children:e.jsx("img",{src:h.logo,alt:"Current Logo",style:{maxWidth:"150px",maxHeight:"150px",objectFit:"contain"}})}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Images (5 max)"}),e.jsx("input",{type:"file",name:"images",className:"form-control",accept:"image/*",multiple:!0,onChange:N}),e.jsx("div",{className:"d-flex gap-2 flex-wrap mt-2",children:(Ue=h==null?void 0:h.images)==null?void 0:Ue.map((a,i)=>e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{src:a,alt:`Preview ${i+1}`,className:"img-thumbnail",style:{width:"100px",height:"100px",objectFit:"cover"}}),e.jsx("button",{type:"button",className:"position-absolute top-0 start-100 translate-middle badge bg-danger border-0",onClick:()=>v(i),style:{width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",cursor:"pointer"},children:"X"})]},i))})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Auxxbay URL"}),e.jsx("input",{type:"url",name:"enconnectUrl",className:"form-control",placeholder:"Auxxbay URL",value:h.enconnectUrl||"",onChange:N})]}),e.jsx("div",{className:"col-12",children:e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Update Listing"})})]})})})]})})}),e.jsx("style",{children:`
      .hover-scale {
        transition: transform 0.3s ease;
      }

      .hover-scale:hover {
        transform: scale(1.05);
      }

      .hover-opacity-100:hover {
        opacity: 1 !important;
      }

      .hover-underline:hover {
        text-decoration: underline !important;
      }

      .transition-all {
        transition: all 0.3s ease;
      }

      `})]})},he=({icon:F,label:y,value:B})=>e.jsxs(j.p,{className:"mb-1 d-flex align-items-center flex-wrap",whileHover:{x:5,color:"#059669"},children:[e.jsx("span",{className:"me-2",children:F}),e.jsxs("strong",{children:[y,":"]})," ",e.jsx("span",{className:"ms-1 fs-14 text-gray-700 text-break",style:{wordBreak:"break-word",whiteSpace:"normal"},children:B})]});function _a(){const[F,y]=s.useState(0),B={centerMode:!0,centerPadding:"50px",slidesToShow:3,autoplay:!0,autoplaySpeed:3e3,arrows:!1,infinite:!0,speed:500,afterChange:v=>y(v),responsive:[{breakpoint:768,settings:{slidesToShow:1,centerMode:!1}}]},[u,w]=s.useState({lat:"",lon:""}),[V,O]=s.useState([]),[I,C]=s.useState(!1),[l,d]=s.useState([]),[c,b]=s.useState([]),[P,K]=s.useState(0),[U,ee]=s.useState(0),[t,o]=s.useState(!0),[R,k]=s.useState(!1),[S,G]=s.useState(!1),[Z,L]=s.useState(!1),[T,te]=s.useState([]),[oe,me]=s.useState(21),[X,h]=s.useState(8),[W,xe]=s.useState(8),r=s.useRef(null);s.useRef(!0);const[n,p]=s.useState([{rating:"",name:"",review:""}]);s.useEffect(()=>{(async()=>{var m,x,J;try{const H=await ja({page:ya,limit:wa});te((m=H==null?void 0:H.data)==null?void 0:m.data)}catch(H){Y.error(((J=(x=H==null?void 0:H.response)==null?void 0:x.data)==null?void 0:J.message)??"An error occurred. Please try again.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#e74c3c",color:"#FFFFFF"}})}})()},[S]);const _=async v=>{var m,x,J,H;v.preventDefault();try{L(!0),(x=(m=n==null?void 0:n.name)==null?void 0:m.trim())!=null&&x.length?(await Ca(n),k(!1),G(!S)):Y.warning("Please enter your name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#d2e500",color:"#FFFFFF"}})}catch(ce){L(!0),Y.error(((H=(J=ce==null?void 0:ce.response)==null?void 0:J.data)==null?void 0:H.message)??"An error occurred. Please try again.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",style:{backgroundColor:"#e74c3c",color:"#FFFFFF"}})}L(!1)},[z,D]=s.useState([]),[q,M]=s.useState(0),[se,ie]=s.useState(1),ne=async()=>{var v,m;try{const x=await ka(se,W,"",u);x&&x.data&&(D((v=x.data)==null?void 0:v.data),M((m=x==null?void 0:x.data)==null?void 0:m.totalCount))}catch(x){console.error("Error fetching freelist:",x)}};s.useEffect(()=>{ne()},[u,se]);const ue=()=>{window.open(`https://wa.me/${9074306855}`,"_blank")};s.useEffect(()=>{(async()=>{try{o(!0);const m=await Te(Ye,X,"",u);b(m.data.data),K(m.data.totalCount)}catch(m){console.error("Error fetching data:",m)}finally{o(!1)}})(),r.current&&u.lat&&u.lon&&r.current.scrollIntoView({behavior:"smooth",block:"start"})},[u]),s.useEffect(()=>{(async()=>{var m;try{C(!0);const x=await Ne(1,oe);O(x.data.data),ee((m=x==null?void 0:x.data)==null?void 0:m.totalCount)}catch(x){C(!1),console.error("Error fetching data:",x)}finally{C(!1)}})()},[]),s.useEffect(()=>{(async()=>{const m=await Sa();d(m==null?void 0:m.data)})()},[]);const[re,ye]=s.useState(2),we=async()=>{C(!0);const v=await Ne(re,21);ye(re+1),me(m=>m+21),O(m=>[...m,...v.data.data]),C(!1)},[ge,Ce]=s.useState(2),ke=async()=>{o(!0);const v=await Da(ge,9,"",u);Ce(ge+1),h(m=>m+10),b(m=>[...m,...v.data.data]),o(!1)},Se=v=>{const{name:m,value:x}=v.target;p(J=>({...J,[m]:x}))},N=s.useCallback(async v=>{try{o(!0);const m=await Te(Ye,X,v,u);b(m.data.data),window.location.href="/#business"}catch(m){console.log(m)}finally{o(!1)}},[u,X]),[fe,be]=s.useState(!1);return e.jsxs(fa,{title:"Home",navClass:"home",onSearch:N,searchItem:fe,setSerachItem:be,setLocation:w,children:[e.jsx(Je,{setSerachItem:be,bannerData:l,onSearch:N,setLocation:w}),e.jsx(Ke,{categoryData:V,loadMoreCategories:we,loading:I,visibleCategories:oe,totalCategoryData:U}),e.jsx(Qe,{searchItem:fe,scroll:r,businessData:c,loadMoreBusiness:ke,loading:t,visibleBusiness:X,totalBusinessData:P}),e.jsx(Ia,{freeListPage:se,setFreeListPage:ie,freelist:z,freeListTotalCount:q,fetchFreeList:ne}),e.jsx(ba,{currentSlide:F,review:n,reviews:T,setVisible:k,settings:B}),e.jsx(Na,{visible:R,setVisible:k,review:n,setReview:p,handleInputChange:Se,handleReviewSubmit:_,reviewLoading:Z}),e.jsx($a,{fetchFreeList:ne}),e.jsx(va,{}),e.jsx("button",{className:"btn btn-success rounded-circle p-2 border-0 text-white position-fixed",style:{right:"26px",bottom:"72px",zIndex:1050},onClick:ue,children:e.jsx(ve,{size:28})}),e.jsx(Fa,{}),e.jsx("a",{href:"#",className:"btn btn-lg btn-bottom btn-lg-square back-to-top",children:e.jsx("i",{className:"bi bi-arrow-up"})})]})}export{_a as default};
