import{j as e,r as a}from"./index.6739016d.js";import"./index.919b8666.js";const i=[{title:"Solutions",items:[{name:"AutoShop",link:"/autoshop"},{name:"Box",link:"/box"}]},{title:"Company",items:[{name:"Privacy Policy",link:"/privacy"}]}],s=new Date().getFullYear();function c(){return e.jsx("footer",{className:"mt-10 px-8 pt-20",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 justify-between gap-4 md:grid-cols-2",children:[e.jsx(a.Typography,{variant:"h4",className:"mb-6",children:"Everything Intelligence"}),e.jsx("div",{className:"grid grid-cols-3 justify-between gap-4",children:i.map(({title:n,items:t})=>e.jsxs("ul",{children:[e.jsx(a.Typography,{variant:"small",color:"blue-gray",className:"mb-3 font-medium opacity-40",children:n}),t.map(r=>e.jsx("li",{children:e.jsx(a.Typography,{as:"a",href:r.link||"#",color:"gray",className:"py-1.5 font-normal transition-colors hover:text-blue-gray-900",children:r.name})},r.name))]},n))})]}),e.jsxs("div",{className:"mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between",children:[e.jsxs("div",{className:"text-center md:text-start",children:[e.jsx(a.Typography,{variant:"h4",color:"blue-gray",className:"mb-2",children:"Everything Intelligence . Innovate Shopping"}),e.jsx(a.Typography,{color:"gray",className:"font-normal",children:'"Transforming the retail experience through innovative technologies, our vision is to pioneer and elevate shopping by seamlessly integrating cutting-edge solutions, artificial intelligence, and data-driven insights to create personalized, efficient, and delightful consumer journeys."'})]}),e.jsxs(a.Typography,{color:"gray",className:"text-center font-normal",children:["© ",s," Everything Intelligence All Right Reserved."]})]})]})})}export{c as default};