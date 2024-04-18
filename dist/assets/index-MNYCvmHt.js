import{o as N,j as e,n as C,f as k,C as H,a4 as b,r as p,L as V,u as I}from"./index-b-_rudxH.js";import{A as P,C as j}from"./AppCard-ohdYU63q.js";import F from"./NotFound-sJ2FQM6J.js";import{n as A}from"./nothing-6Rl4v_2G.js";import{f as U}from"./getPriceAfterDiscount-Sx6R9LUK.js";import"./cross-rZil7XD9.js";const O=({options:s,type:a,onChange:t})=>{const[l]=N();return e.jsxs("div",{className:"flex flex-col gap-1 font-Lato",children:[e.jsxs("span",{className:"text-lg font-700",children:[a[0].toUpperCase()+a.slice(1),":"]}),e.jsx("div",{className:"flex flex-col",children:s.map((c,i)=>e.jsxs("div",{className:"flex gap-3 font-500",children:[e.jsx("input",{checked:c===decodeURI(l.get("size")),onChange:g=>{t(g.target.checked?c:"")},className:"accent-black",type:"checkbox",id:c}),e.jsx("label",{htmlFor:c,children:c})]},i))})]})},T=[{label:"All",value:"all"},{label:"4 stars & above",value:"4"},{label:"3 stars & above",value:"3"},{label:"2 stars & above",value:"2"}],_=({value:s,setValue:a})=>e.jsxs("div",{className:"flex flex-col gap-1 font-Lato",children:[e.jsx("span",{className:"text-lg font-700",children:"Customer Reviews:"}),e.jsx("div",{className:"flex flex-col",children:T.map(({label:t,value:l},c)=>e.jsxs("div",{className:"flex gap-3 font-500",children:[e.jsx("input",{checked:l===s,onChange:()=>{a(l)},className:"accent-black",type:"checkbox",id:l}),e.jsx("label",{htmlFor:l,children:t})]},c))})]}),E=({min:s,max:a,value:t,setValue:l})=>e.jsxs("div",{className:"flex flex-col gap-1 font-Lato",children:[e.jsxs("div",{className:"text-lg font-700 flex gap-3 items-center",children:[e.jsx("span",{children:"Price Range:"}),e.jsx("span",{className:"text-base font-600 opacity-60",children:t!=="all"&&`₹${t}+`})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:t==="all",onChange:c=>{l(c.target.checked?"all":s)},type:"checkbox",id:"all",className:"accent-black"}),e.jsx("label",{htmlFor:"all",children:"All"})]}),e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsxs("span",{children:["₹",s]}),e.jsxs("span",{children:["₹",a]})]}),e.jsx("input",{value:t==="all"?s:t,onChange:c=>l(c.target.value),type:"range",min:s,max:a,className:"accent-primary/2 range-field"})]})]}),M=({options:s})=>{const{category:a,type:t="All"}=C(),l=k(),c=H();return e.jsxs("div",{className:"flex flex-col gap-1 font-Lato",children:[e.jsx("span",{className:"text-lg font-700",children:"Product Type:"}),e.jsx("div",{className:"flex flex-col",children:s.map(({label:i},g)=>e.jsxs("div",{className:"flex gap-3 font-500",children:[e.jsx("input",{checked:i===decodeURI(t),onChange:()=>{l(`/${a}/${i}${c.search}`)},className:"accent-black",type:"checkbox",id:i}),e.jsx("label",{htmlFor:i,children:i})]},g))})]})},z=(s,a=300)=>{let t;return function(...l){clearTimeout(t),t=setTimeout(()=>{s.apply(this,l)},a)}},Z=(s,a)=>{const t=b.find(c=>c.label===s);if(!t)return null;if(t.filters)return t.filters;const l=t.dropdowns.find(c=>c.label===a);return l&&l.filters?l.filters:null},y=({types:s})=>{const{type:a,category:t}=C(),l=H(),c=k(),[i,g]=N(),[h,u]=p.useState(null),x={customerReviews:i.get("customerReviews")||"all",priceRange:i.get("priceRange")||"all",size:i.get("size")||void 0},[d,r]=p.useState(x),v=p.useCallback(z(n=>{r(o=>({...o,priceRange:n}))}),[]);return p.useEffect(()=>{var o;if(a&&(a.toLowerCase()==="all"||((o=s==null?void 0:s.dropdowns)==null?void 0:o.filter(m=>m.label===decodeURI(a)).length)>0))return r(x);r(m=>({...m,type:[a]}))},[a,l.pathname]),p.useEffect(()=>{const n=Z(decodeURI(t),decodeURI(a));u(n)},[t,a]),p.useEffect(()=>{const n=Object.keys(d).reduce((o,m)=>(d[m]!=null&&(o[m]=d[m]),o),{});g(n)},[d]),e.jsxs("div",{className:"border-2 p-3 flex flex-col gap-2 rounded-md min-w-64 lg:min-w-fit 2xl:min-w-64",children:[s.dropdowns&&s.dropdowns.length>0&&e.jsx(M,{options:s.dropdowns.map(n=>({label:n.label}))}),h&&Object.keys(h).map(n=>e.jsx(O,{options:h[n],type:n,onChange:o=>{r(m=>({...m,size:o}))}})),e.jsx(E,{min:0,max:2500,value:d.priceRange,setValue:n=>{r(o=>({...o,priceRange:n})),v(n)}}),e.jsx(_,{value:d.customerReviews,setValue:n=>r(o=>({...o,customerReviews:n}))}),e.jsx("button",{onClick:()=>{c(l.pathname),r({customerReviews:"all",priceRange:"all",size:void 0})},className:"text-white font-Lato font-800 bg-black p-2 rounded-md mt-3",children:"Reset All"})]})},L="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_399_1442'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_399_1442)'%3e%3cpath%20d='M11%2022.8429V16.6077H13V18.6861H21V20.7645H13V22.8429H11ZM3%2020.7645V18.6861H9V20.7645H3ZM7%2016.6077V14.5293H3V12.4508H7V10.3724H9V16.6077H7ZM11%2014.5293V12.4508H21V14.5293H11ZM15%2010.3724V4.13721H17V6.21562H21V8.29402H17V10.3724H15ZM3%208.29402V6.21562H13V8.29402H3Z'%20fill='%23333333'/%3e%3c/g%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20width='20'%20height='15'%20viewBox='0%200%2020%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_399_1425)'%3e%3cpath%20d='M15.4626%207.77171C15.4008%207.83375%2015.3517%207.90737%2015.3183%207.98837C15.2848%208.06937%2015.2677%208.15617%2015.2678%208.2438C15.2679%208.33143%2015.2852%208.41818%2015.3189%208.4991C15.3525%208.58002%2015.4018%208.65352%2015.4638%208.71541C15.5258%208.7773%2015.5995%208.82636%2015.6805%208.8598C15.7615%208.89324%2015.8483%208.91039%2015.9359%208.91028C16.0235%208.91018%2016.1103%208.89281%2016.1912%208.85918C16.2721%208.82555%2016.3456%208.7763%2016.4075%208.71427L19.7969%205.30655C19.8588%205.24468%2019.9079%205.17121%2019.9414%205.09035C19.9749%205.00948%2019.9922%204.92281%2019.9922%204.83528C19.9922%204.74774%2019.9749%204.66107%2019.9414%204.5802C19.9079%204.49934%2019.8588%204.42587%2019.7969%204.364L16.4075%200.975366C16.2812%200.860352%2016.1155%200.798256%2015.9447%200.80191C15.7739%200.805564%2015.611%200.874688%2015.4897%200.995C15.3684%201.11531%2015.298%201.27762%2015.293%201.44838C15.2879%201.61915%2015.3487%201.78533%2015.4626%201.91258L17.7179%204.16785L7.03305%204.16785C6.85634%204.16785%206.68687%204.23805%206.56192%204.363C6.43697%204.48795%206.36677%204.65742%206.36677%204.83413C6.36677%205.01084%206.43697%205.18031%206.56192%205.30526C6.68687%205.43021%206.85634%205.50041%207.03305%205.50041L17.7179%205.50041L15.4626%207.77171Z'%20fill='%23424453'/%3e%3cpath%20d='M4.53693%2014.6373C4.59885%2014.5755%204.64796%2014.502%204.68147%2014.4211C4.71498%2014.3403%204.73223%2014.2536%204.73223%2014.166C4.73223%2014.0785%204.71498%2013.9918%204.68147%2013.911C4.64796%2013.8301%204.59885%2013.7566%204.53693%2013.6948L2.28166%2011.4395H12.9665C13.054%2011.4395%2013.1407%2011.4223%2013.2215%2011.3888C13.3023%2011.3553%2013.3758%2011.3062%2013.4377%2011.2443C13.4995%2011.1825%2013.5486%2011.109%2013.5821%2011.0282C13.6156%2010.9474%2013.6328%2010.8607%2013.6328%2010.7732C13.6328%2010.6857%2013.6156%2010.5991%2013.5821%2010.5182C13.5486%2010.4374%2013.4995%2010.364%2013.4377%2010.3021C13.3758%2010.2402%2013.3023%2010.1911%2013.2215%2010.1577C13.1407%2010.1242%2013.054%2010.1069%2012.9665%2010.1069H2.28166L4.53693%207.8448C4.59882%207.78291%204.64792%207.70944%204.68141%207.62858C4.7149%207.54771%204.73214%207.46105%204.73214%207.37352C4.73214%207.286%204.7149%207.19933%204.68141%207.11847C4.64792%207.0376%204.59882%206.96413%204.53693%206.90224C4.47504%206.84035%204.40157%206.79126%204.32071%206.75777C4.23985%206.72427%204.15318%206.70703%204.06565%206.70703C3.97813%206.70703%203.89146%206.72427%203.8106%206.75777C3.72974%206.79126%203.65627%206.84035%203.59438%206.90224L0.203455%2010.297C0.0793438%2010.4218%200.00967789%2010.5907%200.00967789%2010.7667C0.00967789%2010.9428%200.0793438%2011.1116%200.203455%2011.2365L3.59438%2014.6373C3.65625%2014.6992%203.72972%2014.7484%203.81058%2014.7819C3.89145%2014.8154%203.97812%2014.8326%204.06565%2014.8326C4.15319%2014.8326%204.23986%2014.8154%204.32073%2014.7819C4.40159%2014.7484%204.47506%2014.6992%204.53693%2014.6373Z'%20fill='%23424453'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_399_1425'%3e%3crect%20width='19.983'%20height='14.03'%20fill='white'%20transform='translate(0.0078125%200.799805)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$=({setShowFilters:s,options:a,sortBy:t,setSortBy:l})=>e.jsxs("div",{className:"flex justify-between items-center font-700 text-[18px] font-Lato",children:[e.jsxs("button",{onClick:()=>s(c=>!c),className:"flex gap-3 items-center lg:hidden",children:[e.jsx("span",{className:"",children:"Filters"}),e.jsx("img",{src:L,alt:""})]}),e.jsxs("button",{className:"gap-3 items-center hidden lg:flex",children:[e.jsx("span",{className:"",children:"Filters"}),e.jsx("img",{src:L,alt:""})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"max-lg:rotate-90 hidden xs:inline",src:B,alt:""}),e.jsx("span",{className:"hidden xs:inline",children:"Sort by"}),e.jsx("select",{id:"sort-by",value:t,onChange:c=>l(c.target.value),className:"bg-gray-50 border border-gray-300 p-1 text-base cursor-pointer outline-none rounded-md",children:a.map((c,i)=>e.jsx("option",{className:"font-500 text-base cursor-pointer",value:c,children:c},i))})]})]}),D="/assets/503-ah6smXsg.svg",q="data:image/svg+xml,%3csvg%20width='16'%20height='13'%20viewBox='0%200%2016%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2012.5L0%206.5L6%200.5L7.4%201.95L3.85%205.5H16V7.5H3.85L7.4%2011.05L6%2012.5Z'%20fill='%231C1B1F'/%3e%3c/svg%3e",G=()=>e.jsx("section",{className:"bg-white",children:e.jsxs("div",{className:"wrapper flex flex-col items-center justify-center pt-8 pb-12 gap-5",children:[e.jsxs(V,{to:"/",className:"flex gap-2 px-2 py-1 sm:gap-3 sm:px-3 sm:py-2 items-center self-start bg-grey/1 rounded-md border-2 border-[#999999]",children:[e.jsx("img",{src:q,alt:"Go Back"}),e.jsx("span",{children:"Back to Home"})]}),e.jsx("img",{src:D,alt:"Not Found",className:"h-full w-full max-h-[70vh] max-w-full"})]})}),J=(s,a)=>!s||!s.length||!a?s:a==="Low to High price"?s.sort((t,l)=>t.baseprice-l.baseprice):a==="High to low price"?s.sort((t,l)=>l.baseprice-t.baseprice):s,R=["Most Relevant","Low to High price","High to low price"],K=()=>{var n,o,m;const[s,a]=p.useState(!1),[t]=N(),l=t.get("priceRange"),c=t.get("size"),[i,g]=p.useState(R[0]),{category:h,type:u}=C(),x=b.filter(({label:f})=>f===decodeURI(h))[0],{isLoading:d,data:r,isError:v}=I({queryKey:["allFilteredProducts",{type:u,category:h,priceRange:l,size:c}],queryFn:()=>{var f,w;return U({category:x.queryAs,categoryType:((w=(f=x==null?void 0:x.dropdowns)==null?void 0:f.filter(S=>S.label===decodeURI(u))[0])==null?void 0:w.queryAs)||"all",mainCategoryLabel:x.type,priceRange:l==="all"?0:l||0,size:c==="all"?null:c})}});return x?v?e.jsx(G,{}):e.jsx("div",{className:"bg-white py-6 overflow-hidden",children:e.jsxs("section",{className:"wrapper max-w-[1500px]",children:[e.jsx($,{setShowFilters:a,options:R,sortBy:i,setSortBy:g}),e.jsxs("div",{className:"flex gap-5 mt-4 sm:mt-6",children:[e.jsx("div",{className:"hidden lg:block",children:e.jsx(y,{types:x})}),e.jsx("div",{className:`lg:hidden z-40 absolute bg-white transition-transform ${s?"translate-x-0":"-translate-x-[100vw]"}`,children:e.jsx(y,{types:x})}),((n=r==null?void 0:r.products)==null?void 0:n.length)===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 h-[400px] w-full",children:[e.jsx("img",{src:A,className:"h-36"}),e.jsx("h2",{className:"font-Jakarta font-500 text-lg sm:text-xl",children:"No products found"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 lg:gap-8 sm:grid-cols-2 mx-auto xl:grid-cols-3 3xl:grid-cols-4 w-full sm:w-max h-fit",children:[((o=r==null?void 0:r.products)==null?void 0:o.length)>0&&((m=J(r==null?void 0:r.products,i))==null?void 0:m.map((f,w)=>e.jsx(P,{product:f,className:"w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"},`items-${w}`))),d&&e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"}),e.jsx(j,{className:"w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"}),e.jsx(j,{className:"w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"}),e.jsx(j,{className:"w-full max-w-[280px] mx-auto sm:min-w-[48%] md:min-w-[300px] xl:min-w-[275px] 2xl:min-w-[300px]"})]})]})]})]})}):e.jsx(F,{})},te=()=>{const{category:s}=C();return b.some(({label:t})=>t===decodeURI(s))?e.jsx(K,{}):e.jsx(F,{})};export{te as default};
