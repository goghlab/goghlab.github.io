import{j as e,r as n}from"./index.2ef751dd.js";import{r as a,R as o}from"./index.919b8666.js";import{T as m}from"./theme-provider.aeabd956.js";import{S as c,C as h}from"./Square3Stack3DIcon.bbe8aff7.js";function x({title:r,titleId:s,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},l),r?a.createElement("title",{id:s},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const g=a.forwardRef(x),f=g;function p({title:r,titleId:s,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},l),r?a.createElement("title",{id:s},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"}))}const j=a.forwardRef(p),w=j;function v({title:r,titleId:s,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},l),r?a.createElement("title",{id:s},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const M=a.forwardRef(v),N=M,b=[{title:"Login",href:"/astro-launch-ui/login"},{title:"Sign Up",href:"/astro-launch-ui/signup"}];function y(){const[r,s]=o.useState(!1),l={onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},t=b.map(({title:i,href:u})=>e.jsx("a",{href:u,children:e.jsx(n.MenuItem,{children:e.jsx(n.Typography,{variant:"paragraph",color:"blue-gray",className:"mb-1 font-normal",children:i})})},i));return e.jsxs(o.Fragment,{children:[e.jsxs(n.Menu,{open:r,handler:s,children:[e.jsx(n.MenuHandler,{children:e.jsx(n.Typography,{as:"a",href:"#",variant:"small",className:"font-normal outline-none focus:outline-none",children:e.jsxs(n.MenuItem,{...l,className:"hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full",children:[e.jsx(c,{className:"h-[18px] w-[18px]"})," Account"," ",e.jsx(h,{strokeWidth:2,className:`h-3 w-3 transition-transform ${r?"rotate-180":""}`})]})})}),e.jsx(n.MenuList,{...l,className:"hidden grid-cols-7 gap-3 overflow-visible lg:grid",children:e.jsx("ul",{className:"col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none",children:t})})]}),e.jsxs(n.MenuItem,{className:"flex items-center gap-2 text-blue-gray-900 lg:hidden",children:[e.jsx(c,{className:"h-[18px] w-[18px]"})," Account"," "]}),e.jsx("ul",{className:"ml-6 flex w-full flex-col gap-1 lg:hidden",children:t})]})}const k=[{title:"About Us",href:"/astro-launch-ui/about"},{title:"Landing Page",href:"/astro-launch-ui/landing"},{title:"404",href:"/astro-launch-ui/404"}];function L(){const[r,s]=o.useState(!1),l={onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},t=k.map(({title:i,href:u})=>e.jsx("a",{href:u,children:e.jsx(n.MenuItem,{children:e.jsx(n.Typography,{variant:"paragraph",color:"blue-gray",className:"mb-1 font-normal",children:i})})},i));return e.jsxs(o.Fragment,{children:[e.jsxs(n.Menu,{open:r,handler:s,children:[e.jsx(n.MenuHandler,{children:e.jsx(n.Typography,{as:"a",href:"#",variant:"small",className:"font-normal outline-none focus:outline-none",children:e.jsxs(n.MenuItem,{...l,className:"hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full",children:[e.jsx(c,{className:"h-[18px] w-[18px]"})," Pages"," ",e.jsx(h,{strokeWidth:2,className:`h-3 w-3 transition-transform ${r?"rotate-180":""}`})]})})}),e.jsx(n.MenuList,{...l,className:"hidden grid-cols-7 gap-3 overflow-visible lg:grid",children:e.jsx("ul",{className:"col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none",children:t})})]}),e.jsxs(n.MenuItem,{className:"flex items-center gap-2 text-blue-gray-900 lg:hidden",children:[e.jsx(c,{className:"h-[18px] w-[18px]"})," Pages"," "]}),e.jsx("ul",{className:"ml-6 flex w-full flex-col gap-1 lg:hidden",children:t})]})}function d(){return e.jsxs(n.List,{className:"mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1",children:[e.jsx(L,{}),e.jsx(y,{}),e.jsx(n.Typography,{as:"a",href:"https://www.creative-tim.com/learning-lab/astro/quick-start/astro-launch-ui/",variant:"small",color:"blue-gray",className:"font-normal",children:e.jsxs(n.ListItem,{className:"flex items-center gap-2 py-2 pr-4",children:[e.jsx(w,{className:"h-[18px] w-[18px]"}),"Docs"]})})]})}function T(){const[r,s]=o.useState(!1);return o.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&s(!1))},[]),e.jsx(m,{children:e.jsxs(n.Navbar,{className:"absolute mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10",children:[e.jsxs("div",{className:"flex items-center justify-between text-blue-gray-900",children:[e.jsx(n.Typography,{as:"a",href:"/astro-launch-ui/",variant:"h6",className:"mr-4 cursor-pointer py-1.5 lg:ml-2",children:"AstroLaunch UI"}),e.jsx("div",{className:"hidden lg:block",children:e.jsx(d,{})}),e.jsxs("div",{className:"hidden gap-2 lg:flex",children:[e.jsx("a",{href:"./login",children:e.jsx(n.Button,{variant:"text",size:"sm",color:"blue-gray",children:"Sign In"})}),e.jsx("a",{href:"/astro-launch-ui/signup",children:e.jsx(n.Button,{size:"sm",color:"dark",children:"Sign Up"})})]}),e.jsx(n.IconButton,{variant:"text",color:"blue-gray",className:"lg:hidden",onClick:()=>s(!r),children:r?e.jsx(N,{className:"h-6 w-6",strokeWidth:2}):e.jsx(f,{className:"h-6 w-6",strokeWidth:2})})]}),e.jsxs(n.Collapse,{open:r,children:[e.jsx(d,{}),e.jsxs("div",{className:"flex w-full flex-nowrap items-center gap-2 lg:hidden",children:[e.jsx("a",{href:"/astro-launch-ui/login",children:e.jsx(n.Button,{variant:"outlined",size:"sm",color:"dark",fullWidth:!0,children:"Sign In"})}),e.jsx("a",{href:"/astro-launch-ui/signup",children:e.jsx(n.Button,{size:"sm",fullWidth:!0,color:"dark",children:"Sign Up"})})]})]})]})})}export{T as E};