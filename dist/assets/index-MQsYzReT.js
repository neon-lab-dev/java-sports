import{j as e,a as j,A as w,u as x,L as g,b,R as N}from"./index-bzqS1RBf.js";import{S as y}from"./slick-theme-Qkmt0gy2.js";import{A as d}from"./AppProductSlider-EeKsXPkq.js";import{g as v,a as L,b as k}from"./getPriceAfterDiscount-VUBNXaOO.js";import"./AppCard-plZIjm0g.js";import"./splitString-ALOqQ-EN.js";const A="/assets/hero-bats-caw8UcAE.png",I="/assets/batsman-co_21fTg.png";function P({text:t,action:s}){return e.jsx("button",{onClick:s,className:"uppercase text-neutral-black bg-neutral-white px-4 py-2 lg:py-3 lg:px-6 text-xs sm:text-base text-Lato font-700",children:t})}const B=[{img:A,label:"JAVa sports",content:"All New Junior <br/> Cricket Bat Range!",ctaLabel:"explore now",ctaHref:"#top-rated-bats"},{img:I,label:"JAVa sports",content:"All New Junior <br/> Cricket Bat Range!",ctaLabel:"explore now",ctaHref:"#top-rated-bats"}],F=()=>{var t={infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0};const s=()=>{window.scrollBy({top:window.innerHeight*.6,behavior:"smooth"})};return e.jsx(y,{...t,children:B.map(({content:a,ctaLabel:c,ctaHref:l,img:n,label:o},r)=>e.jsxs("div",{className:"hero-slider h-[200px] sm:h-[250px] lg:h-[400px] relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0 w-full h-full",style:{background:"linear-gradient(180deg, #000000 0%, rgba(34, 34, 34, 0.2) 100%)"}}),e.jsxs("div",{className:"wrapper flex justify-between items-center h-full max-h-full",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10 ",children:[e.jsx("span",{className:"font-Lato text-xs sm:text-[1rem] xl:text-2xl font-700 text-white uppercase",children:o}),e.jsx("h1",{className:"text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max",dangerouslySetInnerHTML:{__html:a}}),e.jsx(P,{action:s,text:c})]}),e.jsx("picture",{className:"h-full z-10 min-w-fit ",children:e.jsx("img",{src:n,alt:"Banner Image",className:"w-[140px] sm:w-56 md:w-fit md:p-6 h-full object-contain object-center"})})]})]},r))})},S=()=>e.jsx("div",{className:"h-[200px] sm:h-[250px] lg:h-[400px] lg-light border",children:e.jsx(F,{})}),H="/assets/personalized-kit-ribmn41a.png",R=async()=>new Promise((t,s)=>{j.get(w.instagramPosts).then(a=>{var n;const l=((n=a==null?void 0:a.data)==null?void 0:n.data).sort((o,r)=>new Date(r.timestamp)-new Date(o.timestamp));t(l)}).catch(a=>{s(a.response.data.message||"Something went wrong, please try again")})}),z=()=>{const t="bg-neutral-white my-[18px] pb-[18px]",{data:s,isLoading:a,isError:c}=x({queryKey:["topRatedBats"],queryFn:v}),{data:l,isLoading:n,isError:o}=x({queryKey:["featuredProducts"],queryFn:L}),{data:r,isLoading:h,isError:u}=x({queryKey:["accessories"],queryFn:k}),{data:m,isLoading:f}=x({queryKey:["instaPosts"],queryFn:R});return e.jsxs(e.Fragment,{children:[e.jsx(S,{}),!c&&e.jsx("section",{className:`${t}`,children:e.jsxs("section",{className:"wrapper",children:[e.jsx("h2",{className:"font-Jakarta pt-[44px] text-[32px] font-500",children:"Top Rated Bats"}),e.jsx(d,{items:s==null?void 0:s.products,isLoading:a})]})}),!o&&e.jsx("section",{className:`${t}`,children:e.jsxs("section",{className:"wrapper",children:[e.jsx("h2",{className:"font-Jakarta pt-[44px] text-[32px] font-500",children:"Featured"}),e.jsx(d,{items:l==null?void 0:l.products,isLoading:n})]})}),e.jsx("section",{className:"h-[200px] xs:h-[250px] lg:h-[300px] xl:h-[400px] bg-neutral-white lg-light relative overflow-hidden",children:e.jsxs("div",{className:"wrapper flex justify-between items-center h-full max-h-full",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-8 z-10",children:[e.jsx("span",{className:"font-Lato text-xs sm:text-lg lg:text-2xl 2xl:text-3xl font-700 text-white uppercase",children:"Cricket Full Kit"}),e.jsxs("h1",{className:"text-white text-base uppercase text-Lato font-700 sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl min-w-max",children:["Something new",e.jsx("br",{})," is coming"]})]}),e.jsx("picture",{className:"h-full z-10 min-w-fit flex items-center justify-center",children:e.jsx("img",{src:H,alt:"Banner Image",className:"w-[140px] h-[140px] sm:w-56 md:w-fit md:p-6 xs:h-full object-contain object-center"})})]})}),!u&&e.jsx("section",{className:`${t}`,id:"top-rated-bats",children:e.jsxs("section",{className:"wrapper",children:[e.jsx("h2",{className:"font-Jakarta pt-[44px] text-[32px] font-500",children:"Batting Gears"}),e.jsx(d,{items:r==null?void 0:r.products,isLoading:h})]})}),e.jsx("section",{className:`${t}`,children:e.jsxs("section",{className:"wrapper flex flex-col items-center justify-center text-center font-Jakarta pt-6",children:[e.jsx("span",{className:"font-500 text-base sm:text-lg",children:"News Feed"}),e.jsx("span",{className:"font-700 text-2xl sm:text-3xl",children:"Instagram"}),e.jsx("span",{className:"text-base sm:text-xl my-2 sm:my-4 font-500",children:"Follow us on social media for more discounts & promotions"}),e.jsx(g,{to:"https://www.instagram.com/javasports_official/",target:"_blank",className:"font-Jakarta text-xl sm:text-2xl font-500 hover:underline transition-all",children:"@javasports"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 mt-6 md:grid-cols-3 w-full max-w-[250px] sm:max-w-[520px] md:max-w-[800px] lg:max-w-[900px] 2xl:max-w-[1200px]",children:f?e.jsx(e.Fragment,{children:Array(6).fill().map((i,p)=>e.jsx(b,{className:"w-full h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden group hover:scale-[1.01] transition-all rounded-md"},p))}):m==null?void 0:m.map((i,p)=>e.jsx(g,{onClick:()=>{N.event({category:"Instagram Post",action:`Clicked on Instagram Post with id ${i.id}`})},to:i.permalink,target:"_blank",className:"w-full h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden group hover:scale-105 transition-all rounded-md",children:e.jsx("img",{src:i.thumbnail_url||i.media_url,alt:"Instagram Post",className:"w-full h-full object-cover object-center rounded-md"})},p))})]})})]})};export{z as default};
