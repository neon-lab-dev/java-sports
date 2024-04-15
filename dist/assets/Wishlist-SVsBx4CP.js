import{c as L,h as b,u as N,i as C,_ as c,j as e,L as d,g as _,s as k,d as A,e as S}from"./index-5Ys8rys4.js";import{r as D,c as p,d as I}from"./getPriceAfterDiscount-2_bQuwC3.js";import{C as E,n as u}from"./AppCard-7iXpsIyq.js";import{C as P,s as W}from"./splitString-Giqzgmm0.js";import{A as $}from"./AppProductsYouMightLike-IWqm98AE.js";import{A as m}from"./AppEmpty-uvk09d_C.js";import{n as q}from"./nothing-6Rl4v_2G.js";import"./AppProductSlider-mz5z6ruc.js";const F="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='27'%20height='27'%20rx='13.5'%20fill='white'/%3e%3crect%20x='0.5'%20y='0.5'%20width='27'%20height='27'%20rx='13.5'%20stroke='%23D9DDE1'/%3e%3cmask%20id='mask0_1171_3564'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='2'%20y='2'%20width='24'%20height='24'%3e%3crect%20x='2'%20y='2'%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1171_3564)'%3e%3cpath%20d='M10.4%2019.0004L9%2017.6004L12.6%2014.0004L9%2010.4254L10.4%209.02539L14%2012.6254L17.575%209.02539L18.975%2010.4254L15.375%2014.0004L18.975%2017.6004L17.575%2019.0004L14%2015.4004L10.4%2019.0004Z'%20fill='%23999999'/%3e%3c/g%3e%3c/svg%3e",M=({productId:t})=>{var l,n;const o=L(),r="  w-[300px]  max-xl:w-[280px] rounded-2xl bg-white p-6 border ",x="bg-grey/1 w-[25w  0px] h-[240px] max-xl:w-[230px] rounded-2xl my-2 p-8 flex justify-center items-center  ",h=b(),{data:s,isLoading:g,isError:f}=N({queryKey:["product",t],queryFn:()=>I(t)}),j=()=>{const v=[..._("cartItems",[]).filter(y=>y.id!==s.product._id),{id:s.product._id,product:s.product._id,quantity:1,color:s.product.color,size:W(s.product.size)[0],name:s.product.name,image:s.product.images[0].url,side:s.product.sub_category2==="Gloves"?"Left":void 0,productCode:s.product.productCode,price:p(s==null?void 0:s.product.baseprice,s==null?void 0:s.product.discountedpercent),basePrice:s.product.baseprice}];k("cartItems",v),c.success(`Added ${s.product.name} to cart!`),o(A())},{mutate:w,isPending:a}=C({mutationFn:i=>D(i),onSuccess:()=>{c.success(`Removed ${s.product.name} from wishlist!`),h.invalidateQueries({queryKey:["user"]})},onError:i=>{c.error(i)}});return g?e.jsx(E,{className:"h-full"}):f?null:e.jsxs("article",{className:`${r} card-shadow`,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-Lato font-700 text-xs text-grey-light",children:"Java Sports"}),e.jsx("button",{disabled:a,onClick:()=>{w(s.product._id)},className:"cursor-pointer",children:a?e.jsx(P,{size:26,color:"#00B553"}):e.jsx("img",{src:F,alt:"Wishlist"})})]}),e.jsx(d,{to:`/product/${s.product._id}`,className:`${x} overflow-hidden group`,children:e.jsx("img",{src:((n=(l=s.product)==null?void 0:l.images[0])==null?void 0:n.url)||u,alt:s.product.name,onError:i=>i.currentTarget.src=u,className:"w-full h-full object-contain object-center group-hover:scale-105 transition-all"})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(d,{to:`/product/${s.product._id}`,className:"font-Lato font-700 text-[16px] hover:underline hover:text-blue transition-all",children:s.product.name.split(" ").slice(0,4).join(" ")}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("ul",{className:"flex  items-center gap-2",children:[e.jsx("li",{className:"font-Lato font-700 text-lg",children:e.jsxs("span",{children:["₹",p(s==null?void 0:s.product.baseprice,s==null?void 0:s.product.discountedpercent)]})}),e.jsx("li",{className:"font-Lato font-500 text-sm line-through",children:e.jsxs("span",{children:["₹",s.product.baseprice]})}),e.jsx("li",{className:"font-Lato font-700 text-[13px] text-green-400",children:e.jsxs("span",{children:[s.product.discountedpercent||0,"% off"]})})]})}),e.jsx("button",{onClick:j,className:"bg-primary/2 text-white font-500 text-lg  p-1 rounded",children:"Move to Cart"})]})]})},T="/assets/forgot-password-Ej7nusJ_.svg",O=()=>{const{user:t,isAuthenticated:o}=S(r=>r.user);return o?t.wishlist.length===0?e.jsx(m,{text:"Your wishlist is empty",img:q,btnText:"Continue Shopping",to:"/"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"wrapper flex flex-col gap-4 pt-6",children:[e.jsxs("span",{className:"font-700 font-Lato text-2xl",children:["Wishlist- ",t.wishlist.length," items"]}),e.jsx("div",{className:" bg-white flex max-lg:justify-center pb-10",children:t.wishlist.length>0&&e.jsx("div",{className:"bg-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 ",children:t.wishlist.map(r=>e.jsx(M,{productId:r.product},r._id))})})]})}),e.jsx("div",{className:"m-6"}),e.jsx($,{})]})}):e.jsx(m,{btnText:"Login",text:"Please login to view your wishlist",to:"/login",img:T})};export{O as default};
