import{r as h,j as e,c as ee,e as P,f as se,h as M,i as D,_ as j,k as te,l as ae,m as E,R as N,g as le,s as ie,d as re,S as ne,n as ce,o as T,p as B,u as oe,q as de}from"./index-658m9aEm.js";import{C as _,h as $,c as C}from"./cross-zn-Suy1L.js";import{S as me}from"./slick-theme-IO9bJQTj.js";import{r as xe,e as he,c as L,w as fe,d as ue}from"./getPriceAfterDiscount-D7uklYvO.js";import{g as m}from"./getSizeDetailsSIzeAndSide-oE1eJOVg.js";import{u as ge}from"./index.esm-7UVMojb0.js";import pe from"./NotFound-mcT5Z3G2.js";const R="data:image/svg+xml,%3csvg%20width='21'%20height='22'%20viewBox='0%200%2021%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='path-1-inside-1_1331_4067'%20fill='white'%3e%3cpath%20d='M1%200H18C19.6569%200%2021%201.34315%2021%203V19C21%2020.6569%2019.6569%2022%2018%2022H1V0Z'/%3e%3c/mask%3e%3cpath%20d='M1%200H18C19.6569%200%2021%201.34315%2021%203V19C21%2020.6569%2019.6569%2022%2018%2022H1V0Z'%20fill='white'/%3e%3cpath%20d='M1%20-1H18C20.2091%20-1%2022%200.790861%2022%203H20C20%201.89543%2019.1046%201%2018%201H1V-1ZM22%2019C22%2021.2091%2020.2091%2023%2018%2023H1V21H18C19.1046%2021%2020%2020.1046%2020%2019H22ZM1%2022V0V22ZM18%20-1C20.2091%20-1%2022%200.790861%2022%203V19C22%2021.2091%2020.2091%2023%2018%2023V21C19.1046%2021%2020%2020.1046%2020%2019V3C20%201.89543%2019.1046%201%2018%201V-1Z'%20fill='%23424453'%20mask='url(%23path-1-inside-1_1331_4067)'/%3e%3cpath%20d='M1.23807%2021.5023L1.00425%200.496224L1.28084%200.496224L1.49805%2021.501L1.23807%2021.5023Z'%20fill='white'%20stroke='%23424453'/%3e%3cmask%20id='path-4-inside-2_1331_4067'%20fill='white'%3e%3cpath%20d='M7.5%205.5498L12.4498%2010.4996L7.5%2015.4493L2.55025%2010.4996L7.5%205.5498Z'/%3e%3c/mask%3e%3cpath%20d='M12.4498%2010.4996L13.1569%2011.2067L13.864%2010.4996L13.1569%209.79245L12.4498%2010.4996ZM6.79289%206.25691L11.7426%2011.2067L13.1569%209.79245L8.20711%204.8427L6.79289%206.25691ZM11.7426%209.79245L6.79289%2014.7422L8.20711%2016.1564L13.1569%2011.2067L11.7426%209.79245Z'%20fill='black'%20mask='url(%23path-4-inside-2_1331_4067)'/%3e%3c/svg%3e",je=({img:s,show:i,cursorPosition:r={x:0,y:0}})=>{const c=h.useRef(null),[n,x]=h.useState({width:0,height:0});return h.useEffect(()=>{c.current&&x({width:c.current.offsetWidth,height:c.current.offsetHeight})},[]),e.jsx("div",{ref:c,className:`absolute hidden lg:block top-0 right-4 w-full h-full max-h-[80vh] z-[999] bg-white shadow-lg border-2 border-gray-300 border-opacity-40 rounded-lg transition-all overflow-hidden ${i?"scale-100":"scale-0"}`,children:e.jsx("img",{src:s,alt:"preview",className:"w-full h-full object-contain absolute scale-[3]",style:{transition:"transform 0.5s ease-in-out",transformOrigin:"top left",top:`-${r.y/100*n.height*2}px`,left:`-${r.x/100*n.width*2}px`}})})},F=(s,i=",")=>typeof s=="number"?[s.toString()]:s.split(i).filter(r=>r).map(r=>r.trim()),be=({product:s})=>{var I,q;const i=ee();let r=h.useRef(null);const{user:c}=P(a=>a.user),[n,x]=h.useState(!1),o=h.useRef(null),[u,g]=h.useState(0),[t,p]=h.useState({size:s.sizes[0].size,quantity:1,color:F(s.Availablecolor)[0],side:["Gloves","Leg Guard","Thigh Pad","Inner ThighPad","Arm Guard"].includes(s==null?void 0:s.sub_category2)?s.sizes.filter(a=>a.size===s.sizes[0].size).map(a=>a.side)[0]:void 0}),v=a=>{a?t.quantity<m(s.sizes,t.size,t.side).stock?p(l=>({...l,quantity:l.quantity+1})):j.error(`Only ${m(s.sizes,t.size,t.side).stock} items are available in stock for this size!`):t.quantity>1&&p(l=>({...l,quantity:l.quantity-1}))},d=()=>{N.event({category:"Cart Items",action:`Added ${s.name} to cart with id ${s._id}`});const f=[...le("cartItems",[]).filter(w=>w.id!==s._id),{id:s._id,product:s._id,quantity:t.quantity,color:t.color,size:t.size,name:s.name,image:s.images[0].url,side:t.side,price:L(m(s.sizes,t.size,t.side).basePrice,m(s.sizes,t.size,t.side).discountedPercent),basePrice:m(s.sizes,t.size,t.side).basePrice}];ie("cartItems",f),j.success(`Added ${s.name} to cart!`),i(re())},[z,G]=h.useState({x:0,y:0}),O=a=>{const l=a.target.getBoundingClientRect(),f=a.clientX-l.left,w=a.clientY-l.top,J=f/l.width*100,U=w/l.height*100;G({x:J,y:U})},{isAuthenticated:Q}=P(a=>a.user),S=se(),K=()=>{N.event({category:"Buy Now",action:`Clicked on Buy Now for product with id ${s._id}`}),Q?S("/checkout",{state:{orderItems:[{id:s._id,product:s._id,quantity:t.quantity,color:t.color,size:t.size,name:s.name,side:t.side,image:s.images[0].url,price:L(m(s.sizes,t.size,t.side).basePrice,m(s.sizes,t.size,t.side).discountedPercent),basePrice:m(s.sizes,t.size,t.side).basePrice}],from:"product"}}):ne.fire({icon:"error",title:"Oops...",text:"Please login to place an order!",confirmButtonText:"Login"}).then(a=>{a.isConfirmed&&S("/login?redirect=/product/"+s._id)})},b=c==null?void 0:c.wishlist.filter(a=>a.product===s._id).length,X=M(),{mutate:Y,isPending:y}=D({mutationFn:a=>b?xe(a):he(a),onSuccess:()=>{j.success(`${b?"Removed":"Added"} ${s.name} ${b?"from":"to"} wishlist!`),X.invalidateQueries({queryKey:["user"]})},onError:a=>{j.error(a)}}),A=()=>{b?N.event({category:"Wishlist",action:`Removed ${s.name} from wishlist with id ${s._id}`}):N.event({category:"Wishlist",action:`Added ${s.name} to wishlist with id ${s._id}`}),Y(s._id)};return h.useEffect(()=>{p(a=>({...a,quantity:1,side:["Gloves","Leg Guard","Thigh Pad","Inner ThighPad","Arm Guard"].includes(s==null?void 0:s.sub_category2)?s.sizes.filter(l=>l.size===s.sizes[0].size).map(l=>l.side)[0]:void 0}))},[t.size]),h.useEffect(()=>{p(a=>({...a,quantity:1}))},[t.side]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 pt-8",children:[e.jsxs("div",{className:"border-2 border-[#E4E4E4] rounded-md p-4 gap-2 sm:gap-4 justify-center items-start w-full relative hidden sm:flex max-h-[80vh]",children:[e.jsx("div",{className:"flex flex-col gap-5",children:s.images.map((a,l)=>l>3?null:e.jsx("div",{className:`w-24 h-24 aspect-square border-2 rounded-md p-3 border-opacity-40 ${u===l?"border-black":"border-[#E4E4E4]"}`,onMouseEnter:()=>g(l),children:e.jsx("img",{loading:"lazy",src:a.url,className:"w-full h-full object-center object-contain"})},l))}),e.jsx("div",{className:"h-full w-full mx-auto flex items-center justify-center overflow-hidden p-3",children:e.jsxs("div",{className:"w-full flex items-center justify-center relative overflow-hidden max-h-full",children:[e.jsx("img",{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onMouseMove:O,ref:o,src:s.images[u].url,className:"object-center object-contain max-h-96 h-full w-full lg:max-h-[calc(80vh-4rem)] border-2 border-white hover:border-[#e4e4e464] rounded-md "}),e.jsx("div",{className:"h-32 w-32 bg-gray-400 bg-opacity-0 lg:bg-opacity-40 absolute transition-opacity",style:{top:`${z.y}%`,left:`${z.x}%`,transform:"translate(-50%, -50%)",pointerEvents:"none",opacity:n?1:0}})]})}),e.jsx("button",{onClick:A,disabled:y,className:"absolute top-2 right-2 cursor-pointer",children:y?e.jsx(_,{size:26,color:"#00B553"}):e.jsx("img",{src:b?C:$,alt:"Wishlist",className:"w-7 h-7 sm:w-8 sm:h-8 hover:text-primary`"})})]}),e.jsx("div",{className:"w-full sm:hidden",children:e.jsx(me,{ref:a=>r=a,dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,lazyLoad:"ondemand",className:"flex w-full",children:s.images.map((a,l)=>e.jsxs("div",{className:"w-full relative p-4 px-12 rounded-lg border-2 border-[#E4E4E4] ",children:[e.jsx("button",{onClick:A,disabled:y,className:"absolute top-4 right-4 cursor-pointer",children:y?e.jsx(_,{size:26,color:"#00B553"}):e.jsx("img",{src:b?C:$,alt:"Wishlist",className:"w-7 h-7 sm:w-8 sm:h-8 hover:text-primary`"})}),e.jsx("button",{onClick:()=>r.slickNext(),className:"absolute top-1/2 right-2  transform -translate-y-1/2",children:e.jsx("img",{src:R,alt:"next slide"})}),e.jsx("button",{onClick:()=>r.slickPrev(),className:"absolute top-1/2 left-2 transform rotate-180 -translate-y-1/2",children:e.jsx("img",{src:R,alt:"next slide"})}),e.jsx("img",{src:a.url,className:"w-full min-h-64 h-64 object-center object-contain"})]},l))})}),e.jsxs("div",{className:"flex flex-col gap-4 relative",children:[e.jsx(je,{img:s.images[u].url,show:n,cursorPosition:z}),e.jsx("h1",{className:"text-2xl lg:text-3xl font-[600]",children:s.name}),e.jsxs("div",{className:"flex flex-col gap-1 text-base sm:text-lg",children:[e.jsxs("span",{className:"text-primary text-xs sm:text-sm font-500",children:["Special Price"," "]}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsxs("span",{className:"text-neutral-black text-2xl lg:text-3xl font-500",children:["₹",Number(L(m(s.sizes,t.size,t.side).basePrice,m(s.sizes,t.size,t.side).discountedPercent))*t.quantity]}),e.jsxs("span",{className:"text-[#999999] line-through",children:["₹",Number(m(s.sizes,t.size,t.side).basePrice)*t.quantity]}),e.jsxs("span",{className:"text-[#00B553] font-500",children:[m(s.sizes,t.size,t.side).discountedPercent??0,"% off"]})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2",children:[e.jsx("span",{className:"font-500 text-neutral-black text-xl",children:"Size"}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:s.sizes.filter((a,l,f)=>f.findIndex(w=>w.size===a.size)===l).map((a,l)=>e.jsx("button",{onClick:()=>p(f=>({...f,size:a.size})),className:`px-4 sm:px-5 py-1.5 sm:py-2 border-2 border-[#E4E4E4] rounded-md font-500 ${t.size===a.size?"border-primary text-primary":"border-[#E4E4E4] text-neutral-black"}`,children:a.size},l))})]}),e.jsx("hr",{}),["Gloves","Leg Guard","Thigh Pad","Inner ThighPad","Arm Guard"].includes(s==null?void 0:s.sub_category2)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2",children:[e.jsx("span",{className:"font-500 text-neutral-black text-xl",children:"Side"}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:(q=(I=s.sizes.filter(a=>a.size===t.size))==null?void 0:I.map(a=>a.side))==null?void 0:q.map((a,l)=>e.jsx("button",{onClick:()=>p(f=>({...f,side:a})),className:`px-4 sm:px-5 py-1.5 sm:py-2 border-2 border-[#E4E4E4] rounded-md font-500 ${t.side===a?"border-primary text-primary":"border-[#E4E4E4] text-neutral-black"}`,children:a},l))})]}),e.jsx("hr",{})]}),e.jsxs("div",{className:"flex gap-2 sm:gap-6 flex-col lg:flex-row",children:[e.jsxs("div",{className:"font-[600] text-lg sm:text-xl flex flex-col gap-2",children:[e.jsx("span",{children:"Quantity"}),m(s.sizes,t.size,t.side).stock>0?e.jsxs("div",{className:"flex p-1 items-center justify-center w-max border-grey/1 border-2 rounded-md",children:[e.jsx("button",{className:"px-3 w-full h-full",onClick:()=>v(!1),children:e.jsx("img",{src:te,alt:"remove"})}),e.jsx("span",{className:"border-x-2 border-grey/1 px-4 min-w-[60px] text-center",children:t.quantity}),e.jsx("button",{onClick:()=>v(!0),className:"px-3 w-full h-full",children:e.jsx("img",{src:ae,alt:"add"})})]}):e.jsx("span",{className:"text-primary",children:"Out of stock"})]}),s.color&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end hidden md:block"}),e.jsx("hr",{className:" bg-grey-light opacity-50 md:hidden"}),e.jsxs("div",{className:"font-[600] text-lg sm:text-xl flex flex-col gap-2",children:[e.jsx("span",{children:"Color"}),e.jsxs("div",{className:"flex gap-3",children:[F(s.Availablecolor).map((a,l)=>e.jsx("button",{onClick:()=>p(f=>({...f,color:a})),className:`w-8 h-8 rounded-full ${t.color===a?"border-black border-[2.5px]":"border-[#E4E4E4] border-2"} `,style:{backgroundColor:a}},l))," "]})]})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"font-500 text-neutral-black text-xl",children:"About the Product"}),e.jsx("p",{className:"text-neutral-black",children:s.description.split(`
`).map((a,l)=>e.jsxs(E.Fragment,{children:[a,e.jsx("br",{})]},l))})]}),e.jsx("hr",{}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx("span",{className:"font-500 text-neutral-black text-xl",children:"Shipping Details"})}),e.jsx("button",{onClick:K,disabled:m(s.sizes,t.size,t.side).stock<1,className:"bg-primary text-white py-3 rounded-md mt-2 disabled:opacity-50",children:"Buy Now"}),e.jsx("button",{disabled:m(s.sizes,t.size,t.side).stock<1,onClick:d,className:"rounded-md border-2 border-grey-dark py-3 disabled:opacity-50",children:"Add to Cart"})]})]})},V=({product:s})=>e.jsx("div",{className:"flex flex-col gap-2 max-w-4xl",children:e.jsx("span",{className:"text-base sm:text-lg",children:s.keyFeatures.split(`
`).map((i,r)=>e.jsxs(E.Fragment,{children:[i,e.jsx("br",{})]},r))})}),we=({product:s})=>e.jsx("div",{className:"flex flex-col gap-2 max-w-4xl",children:e.jsx("span",{className:"text-base sm:text-lg",children:s.specification.split(`
`).map((i,r)=>e.jsxs(E.Fragment,{children:[i,e.jsx("br",{})]},r))})}),k="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M36%2013.7793H22.26L18%200L13.74%2013.7793H0L11.1%2022.2828L6.9%2036L18%2027.4965L29.1%2036L24.84%2022.2207L36%2013.7793Z'%20fill='%23FFCE31'/%3e%3c/svg%3e",W="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.3623%209.33389L14.4712%209.68621H14.84H22.5101L16.2584%2014.415L15.9788%2014.6265L16.0823%2014.9615L18.4591%2022.6493L12.3041%2017.9341L12%2017.7012L11.6959%2017.9341L5.5351%2022.6538L7.87809%2015.0016L7.97977%2014.6695L7.70407%2014.4583L1.47486%209.68621H9.16H9.52877L9.63769%209.33389L12%201.69282L14.3623%209.33389Z'%20fill='white'%20stroke='%23333333'/%3e%3c/svg%3e",ve="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='%2388D7FA'/%3e%3cpath%20d='M18.0007%209.33289C18.3562%209.33289%2018.6673%209.46623%2018.934%209.73289C19.2007%209.99956%2019.334%2010.3107%2019.334%2010.6662V11.9996C19.334%2012.0773%2019.3255%2012.1607%2019.3087%2012.2496C19.2918%2012.3384%2019.2669%2012.4218%2019.234%2012.4996L17.234%2017.1996C17.134%2017.4218%2016.9673%2017.6107%2016.734%2017.7662C16.5007%2017.9218%2016.2562%2017.9996%2016.0007%2017.9996H10.6673C10.3007%2017.9996%209.98687%2017.8691%209.72598%2017.6082C9.4651%2017.3473%209.33443%2017.0333%209.33398%2016.6662V9.88289C9.33398%209.70511%209.37021%209.53578%209.44265%209.37489C9.5151%209.214%209.61221%209.07223%209.73398%208.94956L13.3507%205.34956C13.5173%205.194%2013.7147%205.09956%2013.9427%205.06623C14.1707%205.03289%2014.39%205.07178%2014.6007%205.18289C14.8118%205.294%2014.9647%205.44956%2015.0593%205.64956C15.154%205.84956%2015.1733%206.05511%2015.1173%206.26623L14.3673%209.33289H18.0007ZM6.66732%2017.9996C6.30065%2017.9996%205.98687%2017.8691%205.72598%2017.6082C5.4651%2017.3473%205.33443%2017.0333%205.33398%2016.6662V10.6662C5.33398%2010.2996%205.46465%209.98578%205.72598%209.72489C5.98732%209.464%206.3011%209.33334%206.66732%209.33289C7.03398%209.33289%207.34798%209.46356%207.60932%209.72489C7.87065%209.98623%208.0011%2010.3%208.00065%2010.6662V16.6662C8.00065%2017.0329%207.87021%2017.3469%207.60932%2017.6082C7.34843%2017.8696%207.03443%2018%206.66732%2017.9996Z'%20fill='%2300618C'/%3e%3c/svg%3e",H=({review:s,showBorder:i})=>{const r=()=>{j.success("Thanks for your feedback")};return e.jsxs("div",{className:`flex flex-col gap-3 lg:p-6 pb-4 sm:pb-5 ${i?"border-b-2 border-[#D9D9D9]":""}`,children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("img",{src:s.avatar||ce,alt:"star",className:"w-9 h-9 sm:h-12 sm:w-12 rounded-full object-cover object-center"}),e.jsx("span",{className:"text-xl sm:text-2xl font-500",children:s.name||"Anonymous"})]}),e.jsxs("div",{className:"flex items-center text-sm gap-6",children:[e.jsx("span",{children:s.date}),e.jsx("span",{children:s.time})]}),e.jsx("div",{className:"flex gap-1",children:Array(5).fill().map((c,n)=>e.jsx("img",{src:n<s.rating?k:W,alt:"star",className:"h-5 sm:h-6"},n))}),e.jsx("p",{className:"font-Lato text-black text-sm sm:text-base leading-6 lg:w-[80%]",children:s.comment}),e.jsxs("button",{onClick:r,className:"flex gap-3 items-center hover:opacity-60 transition-all",children:[e.jsx("img",{src:ve,alt:"thumbsup",className:"scale-90 sm:scale-100"}),e.jsx("span",{className:"text-[#47617A] text-sm sm:text-base",children:"Was Helpful"})]})]})},ye=({setIsWritingAReview:s})=>{const{productId:i}=T();P(d=>d.user);const r=M(),{register:c,handleSubmit:n,watch:x,formState:{errors:o},reset:u,setValue:g}=ge(),t=d=>{p({...d,productId:i})},{mutate:p,isPending:v}=D({mutationFn:d=>fe(d),onError:d=>{j.error(d)},onSuccess:()=>{j.success("Review submitted successfully"),s(!1),u(),r.invalidateQueries({queryKey:["product",i]})}});return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>s(!1),className:"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur"}),e.jsxs("form",{onSubmit:n(t),onClick:d=>d.stopPropagation(),className:"h-max p-6 sm:px-12 sm:py-8  w-max max-h-[80vh] max-w-[95%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-white overflow-x-scroll rounded-lg",children:[e.jsx("button",{type:"reset",onClick:()=>{s(!1),u()},className:"fixed top-4 right-4 sm:top-6 sm:right-6",children:e.jsx("img",{src:C,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("span",{className:"font-600 text-2xl",children:"Write a review"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{children:"Rate the product"}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map(d=>e.jsx("button",{type:"button",role:"button",onClick:()=>g("rating",d),children:e.jsx("img",{src:x("rating")>=d?k:W,alt:"star",className:"h-5"})},d))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"comment",children:"Write the Comments :"}),e.jsx("textarea",{id:"comment",className:"border-2 border-[#E4E4E4] rounded-md p-3 max-w-full h-36 sm:h-44 outline-none resize-none w-[700px]",placeholder:"Write your comments here",...c("comment",{required:!0,minLength:10})}),o.comment&&e.jsx("span",{className:"text-primary text-xs",children:"This comment is too short."})]}),e.jsx("button",{disabled:!!o.comment,type:"submit",className:"bg-black text-white py-2.5 rounded-md self-end px-12 sm:px-24 disabled:opacity-50",children:v?"Submitting...":"Submit"})]})]})]})},Ne=({reviews:s})=>{const[i,r]=h.useState(!1),[c,n]=h.useState(!1);return h.useEffect(()=>{i||c?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[i,c]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col-reverse xl:flex-col gap-3 flex-grow",children:[e.jsxs("div",{className:"flex gap-2 sm:gap-12 self-end flex-col w-full mt-6 sm:flex-row justify-center xl:justify-end",children:[e.jsx("button",{onClick:()=>r(!0),disabled:s.length===0,className:"bg-transparent w-full sm:w-auto sm:px-12 disabled:opacity-50 py-3 rounded-md text-[#007DBC] border-2 border-[#007DBC] font-[700]",children:"View all reviews"}),e.jsx("button",{onClick:()=>n(!0),className:"py-3 w-full sm:w-auto sm:px-16 rounded-md bg-[#007DBC] text-white font-[700]",children:"Write a review"})]}),e.jsxs("div",{className:"flex flex-col gap-3 sm:gap-8 max-w-4xl my-auto",children:[s.map((x,o)=>o>1?null:e.jsx(H,{review:x,showBorder:o!==s.length-1},o)),s.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 h-full",children:[e.jsx("span",{className:"text-2xl font-500",children:"No reviews yet"}),e.jsx("span",{className:"text-lg text-center",children:"Be the first to review this product"})]})]})]}),i&&e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>r(!1),className:"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur"}),e.jsxs("div",{className:"h-max p-6 sm:px-12 sm:py-8 max-h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-white overflow-x-scroll rounded-lg  w-[80vw] max-w-4xl",children:[e.jsx("button",{onClick:()=>r(!1),className:"fixed top-4 right-4 sm:top-6 sm:right-6",children:e.jsx("img",{src:C,alt:""})}),e.jsx("div",{className:"flex flex-col gap-3 sm:gap-8 max-w-4xl my-auto",children:s.map((x,o)=>e.jsx(H,{review:x,showBorder:o!==s.length-1},o))})]})]}),c&&e.jsx(ye,{setIsWritingAReview:n})]})},Ce=({product:s})=>{const{reviews:i}=s,r=()=>(i.reduce((o,u)=>o+u.rating,0)/i.length).toFixed(2),c=n=>i.filter(o=>o.rating===n).length/i.length*100;return e.jsx("div",{className:"flex flex-col xl:flex-row gap-12 h-full w-full",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col xs:flex-row xl:flex-col gap-3 sm:gap-6 justify-center xl:justify-start",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[e.jsxs("div",{className:"flex gap-3 items-center justify-center",children:[e.jsx("img",{src:k,alt:"star"}),e.jsx("span",{className:"text-2xl font-500",children:isNaN(r())?0:r()})]}),e.jsxs("span",{className:"text-lg",children:[i.length," Reviews"]})]}),e.jsx("hr",{className:"xs:hidden xl:block"}),e.jsx("hr",{className:"hidden xs:block xl:hidden h-44 self-center w-[0.5px] bg-[#D9D9D9]"}),e.jsx("div",{className:"flex flex-col gap-3 flex-grow mx-auto xs:m-0 xs:flex-grow-0",children:[5,4,3,2,1].map(n=>e.jsxs("div",{className:"flex gap-3 justify-center items-center self-end text-xl",children:[e.jsx("img",{src:k,alt:"star",className:"h-7"}),e.jsx("span",{children:n}),e.jsx("div",{className:"relative h-2 w-48 bg-[#D9D9D9] rounded-md",children:e.jsx("span",{className:"absolute top-0 left-0 h-full bg-[#FFCE31] rounded-md",style:{width:`${c(n)}%`}})})]},n))})]}),e.jsx("hr",{className:"xl:hidden"}),e.jsx("hr",{className:"hidden xl:block h-96 self-center w-[0.5px] bg-[#D9D9D9]"}),e.jsx(Ne,{reviews:i})]})})},ke=({product:s})=>{var c;const[i]=B(),r=((c=Z.find(n=>n.key===i.get("activeTab")))==null?void 0:c.Component)||V;return e.jsx("section",{className:"bg-white py-12",children:e.jsx("div",{className:"wrapper",children:e.jsx(r,{product:s})})})},Z=[{key:"key-features",Component:V},{key:"specifications",Component:we},{key:"customer-reviews",Component:Ce}],qe=()=>{const{productId:s}=T(),[i,r]=B(),c=g=>{r({activeTab:g})},{data:n,isLoading:x,isError:o,error:u}=oe({queryKey:["product",s],queryFn:()=>ue(s)});return x?e.jsx(de,{}):o?e.jsx(pe,{}):e.jsxs("div",{className:"flex flex-col gap-2 pb-8",children:[e.jsx("section",{className:"bg-white pb-8",children:e.jsx("div",{className:"wrapper",children:n.product?e.jsx(be,{product:n.product}):e.jsx("span",{children:"Product not found"})})}),e.jsx("div",{className:"flex justify-evenly py-2",children:Z.map(({key:g},t)=>e.jsx("button",{onClick:()=>c(g),className:`text-center text-sm sm:text-lg capitalize font-[600] ${!i.get("activeTab")&&t===0||i.get("activeTab")===g?"text-black":"text-grey-dark"}`,children:g.split("-").join(" ")},t))}),e.jsx(ke,{product:n.product})]})};export{Z as TABS,qe as default};
