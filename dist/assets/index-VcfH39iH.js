import{j as e,p as x,u as i}from"./index-N6u_Fj9M.js";import{s as o}from"./getPriceAfterDiscount-x02UXBYM.js";import{C as r,A as m}from"./AppCard-kUSFiLIh.js";import{n as d}from"./nothing-9idlFvyp.js";import"./cross-_2eJSYim.js";const a=({text:s})=>e.jsx("div",{className:"bg-white",children:e.jsx("div",{className:"wrapper",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 w-full h-[400px]",children:[e.jsx("img",{src:d,className:"h-36"}),e.jsx("h2",{className:"font-Jakarta font-500 text-lg sm:text-xl",children:s})]})})}),N=()=>{const[s]=x(),{isLoading:c,isError:n,data:t,error:f}=i({queryKey:["search",s.get("q")],queryFn:()=>o(s.get("q"))});return s.get("q")?n?e.jsx(a,{text:"An error occurred, Try Again later"}):!c&&t.products.length===0?e.jsx(a,{text:"No results found"}):e.jsx("div",{className:"bg-white py-12",children:e.jsx("section",{className:"w-[90%] m-auto xs:w-[98%] lg:w-[90%] max-w-7xl",children:e.jsx(e.Fragment,{children:c?e.jsxs("div",{className:"flex flex-col gap-5 sm:gap-12 items-center justify-center",children:[e.jsxs("h1",{className:"text-2xl font-bold text-center",children:['Searching for "',s.get("q"),'"']}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})]}):e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-5 sm:gap-12 items-center justify-center",children:[e.jsxs("h1",{className:"text-2xl font-bold text-center",children:[t.products.length||0,' results found for "',s.get("q"),'"']}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center items-center",children:t.products.map(l=>e.jsx(m,{product:l},l._id))})]})})})})}):e.jsx(a,{text:"Please enter a product name to search"})};export{N as default};