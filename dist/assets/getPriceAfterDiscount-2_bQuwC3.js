import{a as n,A as r}from"./index-5Ys8rys4.js";const l=()=>new Promise((s,t)=>{n.get(`${r.getAllProducts}?page=1&sub_category=Bat`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(e=>{s(e.data)}).catch(e=>{t(e.response.data.message||"Something went wrong, please try again")})}),p=s=>new Promise((t,e)=>{n.get(`${r.getAProduct}/${s}`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(a=>{t(a.data)}).catch(a=>{e(a.response.data.message||"Something went wrong, please try again")})}),w=s=>new Promise((t,e)=>{n.put(`${r.review}`,s,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(a=>{t(a.data)}).catch(a=>{e(a.response.data.message||"Something went wrong, please try again")})}),u=({category:s,categoryType:t,mainCategoryLabel:e,priceRange:a,size:o})=>{const c=`${r.getAllProducts}?${t&&t.toLowerCase()==="all"?e:e==="category"?"sub_category":"sub_category2"}=${t&&t.toLowerCase()==="all"?s:t}&baseprice[gte]=${a}${o?`&size=${o==null?void 0:o.toLowerCase()}`:""}`;return new Promise((d,g)=>{n.get(c,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(i=>{d(i.data)}).catch(i=>{g(i.response.data.message||"Something went wrong, please try again")})})},m=s=>new Promise((t,e)=>{n.post(r.addToWishlist,{id:s},{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(a=>{t(a.data)}).catch(a=>{e(a.response.data.message||"Something went wrong, please try again")})}),C=s=>new Promise((t,e)=>{n.delete(`${r.removeFromWishlist}?id=${s}`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(a=>{t(a.data)}).catch(a=>{e(a.response.data.message||"Something went wrong, please try again")})}),P=()=>new Promise((s,t)=>{n.get(`${r.getAllProducts}?category=Helmets`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(e=>{s(e.data)}).catch(e=>{t(e.response.data.message||"Something went wrong, please try again")})}),y=()=>new Promise((s,t)=>{n.get(`${r.getAllProducts}?sub_category=Accessories`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(e=>{s(e.data)}).catch(e=>{t(e.response.data.message||"Something went wrong, please try again")})}),$=s=>new Promise((t,e)=>{n.get(`${r.getAllProducts}?keyword=${encodeURI(s)}`,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(a=>{t(a.data)}).catch(a=>{e(a.response.data.message||"Something went wrong, please try again")})}),A=(s,t=0)=>Number((Number(s)-Number(t)/100*Number(s)).toFixed(2));export{P as a,y as b,A as c,p as d,m as e,u as f,l as g,C as r,$ as s,w};
