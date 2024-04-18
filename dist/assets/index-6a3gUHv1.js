import{j as e,c as g,L as x,d as h,e as f,f as j,R as w,g as p,S as y,r as d}from"./index-bzqS1RBf.js";import{a as m,r as b,C as v,g as N,b as k,c as C}from"./CartPageSkeleton-mfYdLRhq.js";import{c as I,d as D}from"./getPriceAfterDiscount-VUBNXaOO.js";import{e as P}from"./empty-carts-0MuVGJuQ.js";import{u as A}from"./useQueries-Fshzjw89.js";import{A as S}from"./AppEmpty-lm7pqbRT.js";const L=({text:t,subText:n=""})=>e.jsxs("span",{className:"font-[600] text-lg sm:text-xl",children:[t,":"," ",n&&e.jsx("span",{className:"text-[#666666] font-400 text-base sm:text-lg",children:n})]}),F="data:image/svg+xml,%3csvg%20width='14'%20height='17'%20viewBox='0%200%2014%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2010.2231H0V7.77865H6V0.445312H8V7.77865H14V10.2231H8V17.5564H6V10.2231Z'%20fill='%231C1B1F'/%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20width='14'%20height='4'%20viewBox='0%200%2014%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.00195312%203.22179V0.777344H14.002V3.22179H0.00195312Z'%20fill='%231C1B1F'/%3e%3c/svg%3e",i=(t=0)=>new Date(Date.now()+t*24*60*60*1e3).toLocaleDateString("en-US",{month:"long",day:"numeric",weekday:"long"}),V=({item:t,setCartItems:n,cartItems:c})=>{const l=g(),{isError:r,isLoading:a,data:s}=t;if(a||r)return null;const o=c.find(u=>u.id===t.data.product._id).quantity||1;return e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 shadow p-3 rounded-md",children:[e.jsx(x,{to:`/product/${s.product._id}`,className:"h-60 bg-grey/1 rounded-lg p-2 lg:h-64 object-contain object-center sm:max-w-none md:w-96 lg:max-w-72 xl:max-w-none sm:w-64 lg:w-[400px] group",children:e.jsx("img",{src:s.product.images[0].url,alt:s.product.name,className:"w-full h-full object-contain object-center group-hover:scale-105 transition-all"})}),e.jsxs("div",{className:"flex flex-col gap-2 sm:gap-3 sm:justify-between xl:p-3 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex justify-between gap-6",children:[e.jsx(x,{to:`/product/${s.product._id}`,className:"hover:underline",children:e.jsx(L,{text:"Product",subText:s.product.name})}),e.jsxs("span",{className:"text-[#666666] font-400 text-base min-w-max hidden 3xl:inline pt-1",children:["Delivery by ",i(2)," "]}),e.jsxs("span",{className:"text-[#666666] font-400 text-base min-w-max hidden lg:inline 3xl:hidden pt-0.5",children:["Delivery by ",i(2).split(",")[0],e.jsx("br",{})," ",i(2).split(",")[1]," "]})]}),e.jsxs("div",{className:"font-[600] text-lg sm:text-xl flex flex-col gap-2",children:[e.jsxs("span",{className:"flex items-end gap-2",children:["Quantity:",s.product.stock<1&&e.jsx("span",{className:"text-primary text-sm font-400",children:"(Out of stock)"})]}),e.jsxs("div",{className:"flex items-center justify-center w-max border-grey/1 border-2 rounded-md",children:[e.jsx("button",{className:"px-3 w-full h-full",onClick:()=>{m({productId:s.product._id,isToIncrease:!1,setCartItems:n,stock:s.product.stock})},children:e.jsx("img",{src:H,alt:"remove"})}),e.jsx("span",{className:"border-x-2 border-grey/1 px-4 min-w-[60px] text-center",children:o}),e.jsx("button",{onClick:()=>{m({productId:s.product._id,isToIncrease:!0,setCartItems:n,stock:s.product.stock})},className:"px-3 w-full h-full",children:e.jsx("img",{src:F,alt:"add"})})]})]}),e.jsxs("div",{className:"flex gap-3 my-1 items-center",children:[e.jsxs("span",{className:"text-xs sm:text-sm line-through font-400  text-grey-dark",children:["₹",(s.product.baseprice*o).toFixed(2)]}),e.jsxs("span",{className:"text-base xs:text-lg font-600 text-black",children:["₹",(I(s.product.baseprice,s.product.discountedpercent)*o).toFixed(2)]}),e.jsxs("span",{className:"text-xs xs:text-base sm:text-lg font-600 text-green-500",children:[s.product.discountedpercent||0,"% off"]})]})]}),e.jsxs("span",{className:"text-[#666666] font-400 text-sm sm:text-base lg:hidden",children:["Delivery by ",i(2)," "]}),e.jsx("button",{onClick:()=>{b({productId:s.product._id,setCartItems:n}),l(h())},className:"rounded px-3 py-1.5 sm:max-w-72 w-full min-w-40 bg-transparent border-2 border-grey-dark text-black",children:"Remove"})]})]})},T=()=>{const{isAuthenticated:t}=f(l=>l.user),n=j(),c=()=>{w.event({category:"Cart",action:"Clicked on Place Order"}),t?n("/checkout",{state:{orderItems:p("cartItems",[]),from:"cart"}}):y.fire({icon:"error",title:"Oops...",text:"Please login to place an order!",confirmButtonText:"Login"}).then(l=>{l.isConfirmed&&n("/login?redirect=/checkout")})};return e.jsx("button",{onClick:c,className:"rounded text-center px-3 py-2  sm:p-3 w-full h-full mt-6 xl:mt-0 text-base sm:text-lg block uppercase font-600 min-w-40 bg-primary text-white  disabled:opacity-45 lg:max-w-none",children:"Place Order"})},_=({totalAmount:t,totalItems:n,finalAmount:c,discountAmount:l})=>{const r="flex justify-between text-base sm:text-lg gap-6 min-w-max w-full";return e.jsxs("div",{className:"shadow-md border border-gray-200 border-opacity-40 sticky xl:top-4 rounded-md px-4 py-5 sm:p-6 bg-white h-fit flex  flex-col gap-3 text-gray-700 sm:min-w-96 min-h-80 justify-center",children:[e.jsx("span",{className:"uppercase text-xl font-600 text-black",children:"Price Details"}),e.jsx("hr",{}),e.jsxs("div",{className:r,children:[e.jsxs("span",{children:["Price (",n," items)"]}),e.jsxs("span",{children:["₹",t]})]}),e.jsxs("div",{className:r,children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{className:"text-green-400 text-[17px]",children:[" - ₹",l]})]}),e.jsxs("div",{className:r,children:[e.jsx("span",{children:"Delivery Charges"}),e.jsx("span",{className:"text-green-400 text-[17px]",children:"Free"})]}),e.jsx("hr",{}),e.jsxs("div",{className:r+" font-700",children:[e.jsx("span",{children:"Total Amount"}),e.jsxs("span",{children:["₹",c]})]}),e.jsx("hr",{}),e.jsxs("span",{className:"text-sm text-grey-dark",children:["You will save ₹",l," on this order"]}),e.jsx("div",{className:"",children:e.jsx(T,{})})]})},M=()=>{const[t,n]=d.useState(p("cartItems",[])),[c,l]=d.useState(!0),r=A({queries:t.map(a=>({queryKey:["product",a.id],queryFn:()=>D(a.id)}))});return d.useEffect(()=>{r.every(a=>!a.isLoading)&&l(!1)},[r]),c?e.jsx(v,{}):e.jsx(e.Fragment,{children:t.length>0?e.jsx("div",{className:"bg-white py-6 flex items-center justify-center",children:e.jsxs("section",{className:"flex flex-col xl:flex-row gap-12 2xl:mx-32 wrapper xl:w-[95%] xl:m-[0_auto] xl:max-w-fit",children:[e.jsx("div",{className:"flex flex-col gap-6 sm:gap-12 flex-grow",children:e.jsx("div",{className:"flex flex-col gap-4",children:r.map((a,s)=>e.jsx(V,{item:a,cartItems:t,setCartItems:n},s))})}),r.every(a=>a.isSuccess)&&e.jsx(_,{totalAmount:N(r.map(a=>a.data.product),t),discountAmount:k(r.map(a=>a.data.product),t),totalItems:t.length,finalAmount:C(r.map(a=>a.data.product),t)})]})}):e.jsx(S,{btnText:"Continue Shopping",text:"Your cart is empty",to:"/",img:P})})};export{M as default};
