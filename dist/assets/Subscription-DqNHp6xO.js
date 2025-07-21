import{u as z,ad as C,ae as E,r,j as e,aG as F,ag as L,aj as N,b8 as B,b9 as _,ba as A}from"./index--xT2dYYS.js";const q=()=>{const n=z(),o=C(),v=E(s=>s.business),[d,p]=r.useState(!0),[y,m]=r.useState(!1),[l,w]=r.useState([]);function k(s,i,a){m(!0);var c="6735fef4c124792981be3ffb";String(s)!=String(c)?(console.log("first",c,"free plan",s),o(N({selectedPlan:s})),o(B({name:a,price:i,plan:s})),n("/create-business/template")):(async()=>{var h,f,b,u,j,g;console.log("second"),o(N({selectedPlan:s}));const x={...v};x.selectedPlan=s;const t=await A(x),P=((h=t==null?void 0:t.data)==null?void 0:h._id)||((b=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:b._id),D=((u=t==null?void 0:t.data)==null?void 0:u.businessName)||((g=(j=t==null?void 0:t.data)==null?void 0:j.data)==null?void 0:g.businessName);t.success&&n(`/profile/${D}/${P}`)})(),m(!1)}const S=()=>n("/create-business/gallery");return r.useEffect(()=>{(async()=>{var i;try{const a=await _();w((i=a==null?void 0:a.data)==null?void 0:i.data)}catch(a){console.error("Error fetching categories:",a)}finally{p(!1)}})()},[]),d?e.jsx("div",{className:"h-100vh text-center ",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsxs("div",{className:"col-3 ",children:[" ",d&&e.jsx(F,{})]})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-100vh create-business-div",children:e.jsxs("div",{className:"row h-100 justify-content-center",children:[e.jsx("span",{style:{color:"grey"}}),e.jsx("div",{className:"d-none d-md-block left-portion p-0 col-md-5 h-100",children:e.jsx("img",{src:"/images/subscription.jpg",alt:"",className:"w-100 h-100"})}),e.jsxs("div",{className:"col-12 col-md-7 row justify-content-center h-100 p-3 p-md-5 right-portion",children:[e.jsx("div",{className:"col-12 text-start",children:e.jsx("button",{className:"btn btn-dark w-auto float-start",onClick:S,children:e.jsx("i",{className:"bi bi-arrow-left"})})}),e.jsxs("div",{className:"row justify-content-center",children:[e.jsx("div",{className:"col-12 text-center",children:e.jsx("h1",{className:"fw-bold",children:"Add Subscriptions"})}),e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"row justify-content-center",children:l==null?void 0:l.map((s,i)=>e.jsx("div",{className:"col-12 col-md-6 mb-4",children:e.jsx("div",{className:"card br-20 b-theme2 shadow-lg border-0 overflow-hidden",children:e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"col-12 text-center mb-3",children:e.jsx("span",{className:"fw-bold fs-20 text-dark",children:s==null?void 0:s.plan})}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mt-2 mb-2",children:[e.jsxs("div",{className:"price-section",children:[e.jsxs("h5",{className:"fs-16 text-muted text-decoration-line-through mb-0",style:{color:"gray"},children:["₹",s==null?void 0:s.actualAmount]}),e.jsxs("h2",{className:"fw-bold fs-28 mt-0 text-primary mb-0",children:["₹",s==null?void 0:s.amount]})]}),e.jsx("div",{className:"validity-section text-end",children:e.jsxs("span",{className:"text-dark fw-bold fs-16",children:["Validity"," ",e.jsxs("span",{style:{color:"blue"},children:[s==null?void 0:s.validity," year"]})]})})]}),e.jsx("div",{className:"col-12 mt-4",children:s==null?void 0:s.description.map((a,c)=>e.jsxs("div",{className:"d-flex align-items-center mt-2",children:[e.jsx("span",{className:"subscription-tick bg-light text-success me-2",children:e.jsx("i",{className:"bi bi-check"})}),e.jsx("span",{className:"fs-14 text-dark",children:a})]},c))}),e.jsx("div",{className:"mt-4 text-center",children:y?e.jsx(L,{variant:"primary"}):e.jsx("button",{className:"btn w-100 text-white py-2 fw-bold",onClick:()=>k(s._id,s.amount,s.plan),style:{backgroundColor:"#5b7ee8"},children:"Choose Plan"})})]})})},i))})})]})]})]})}),e.jsx("style",{children:`.card {
  border-radius: 20px;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.br-20 {
  border-radius: 20px;
}

.b-theme2 {
  background-color: #f8f9fa;
}

.fs-20 {
  font-size: 20px; /* Smaller title font */
}

.fs-28 {
  font-size: 28px; /* Reduced font size for amount */
}

.fs-16 {
  font-size: 16px; /* Font size for validity */
}

.fs-14 {
  font-size: 14px; /* Font size for description text */
}

.text-primary {
  color: #5b7ee8;
}

.text-dark {
  color: #343a40;
}

.text-muted {
  color: #6c757d;
}

.fw-medium {
  font-weight: 500;
}

.fw-bold {
  font-weight: 700;
}

.price-section {
  text-align: left;
}

.validity-section {
  text-align: right;
}

.subscription-tick {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
  color: #28a745;
}

.btn {
  border-radius: 10px;
  font-weight: 600;
  background-color: #5b7ee8;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #4a6fca;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.me-2 {
  margin-right: 0.5rem;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-content-between {
  justify-content: space-between;
}
`})]})};export{q as default};
