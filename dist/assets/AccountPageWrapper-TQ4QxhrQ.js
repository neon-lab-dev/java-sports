import{o as i,e as x,r as p,K as a,j as e,M as m}from"./index-bzqS1RBf.js";import{A as d}from"./AppProductsYouMightLike-803HFPll.js";import"./AppProductSlider-EeKsXPkq.js";import"./AppCard-plZIjm0g.js";import"./splitString-ALOqQ-EN.js";import"./getPriceAfterDiscount-VUBNXaOO.js";const j=({children:l})=>{const[s,t]=i(),{user:o}=x(r=>r.user);return p.useEffect(()=>{a.includes(s.get("tab"))||t({tab:"account-dashboard"})},[s,t]),e.jsxs("div",{className:"w-full flex flex-col gap-6",children:[e.jsx("div",{className:"bg-white w-full flex flex-col gap-12",children:e.jsxs("section",{className:"lg:wrapper xl:w-[90%] 2xl:w-[80%] flex items-center justify-center flex-col pt-4 gap-3 sm:gap-6 ",children:[e.jsxs("h1",{className:"font-600 text-2xl sm:text-3xl lg:text-4xl",children:["Welcome, ",o.full_name]}),e.jsxs("div",{className:"flex justify-between w-full gap-8 border-t border-opacity-50 border-grey-light pb-12 pt-6 sm:pt-12",children:[e.jsx("div",{className:"flex-col hidden lg:flex border-grey-light border-x border-opacity-50 w-64 min-w-64 h-max sticky top-4",children:a.map((r,c)=>e.jsxs("button",{onClick:()=>t({tab:r}),className:`px-4 py-4 border-grey-light border-opacity-50 font-500 font-Lato ${r===s.get("tab")?"bg-primary text-white":""} ${c===0?" border-y":"border-b"}`,children:[m(r)," "]},r))}),e.jsx("div",{className:"flex-grow max-w-full",children:l})]})]})}),e.jsx(d,{})]})};export{j as default};
