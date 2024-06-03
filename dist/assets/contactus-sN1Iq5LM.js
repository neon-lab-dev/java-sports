import{a as d,A as x,i as p,j as e,S as n}from"./index-Ufe3u8P4.js";import{c as h,e as f,l as u}from"./Location on-k5Vn3cZ7.js";import{u as j}from"./index.esm-uzWbYVzh.js";import{A as r,E as g,P as N}from"./AppFormErrorLine-srPN97nr.js";const b="data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.1243%203.02698C8.76035%203.02698%202.79102%208.99631%202.79102%2016.3603C2.79102%2023.7243%208.76035%2029.6936%2016.1243%2029.6936C23.4883%2029.6936%2029.4577%2023.7243%2029.4577%2016.3603C29.4577%208.99631%2023.4883%203.02698%2016.1243%203.02698ZM19.5723%2021.6936L15.1817%2017.303C14.931%2017.0523%2014.791%2016.7136%2014.791%2016.3603V9.69364C14.791%208.95764%2015.3883%208.36031%2016.1243%208.36031C16.8603%208.36031%2017.4577%208.95764%2017.4577%209.69364V15.8083L21.4577%2019.8083C21.9777%2020.3283%2021.9777%2021.1736%2021.4577%2021.6936C20.9377%2022.2136%2020.0923%2022.2136%2019.5723%2021.6936Z'%20fill='%23EE3F4C'/%3e%3c/svg%3e",v=t=>new Promise((i,a)=>{d.post(`${x.contact}`,t,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(l=>{i(l.data)}).catch(l=>{a(l.response.data.message||"Something went wrong, please try again")})}),S=()=>{const{register:t,handleSubmit:i,formState:{errors:a},reset:l}=j(),{isPending:c,mutate:m}=p({mutationFn:v,onError:s=>{n.fire({icon:"error",title:"Oops...",text:s})},onSuccess:s=>{n.fire({icon:"success",title:"Success",text:s.message}),l()}}),o=s=>{m(s)};return e.jsxs("div",{className:" bg-white",children:[e.jsx("div",{className:"flex justify-center p-6",children:e.jsx("span",{className:"text-4xl font-600",children:"Contact US"})}),e.jsxs("div",{className:"flex justify-center max-sm:flex-col p-10 max-sm:p-3",children:[e.jsxs("div",{className:"flex  flex-col bg-black gap-10 p-10",children:[e.jsx("span",{className:"text-white text-2xl",children:"Corprate Office"}),e.jsxs("div",{className:"flex flex-col gap-20",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{src:h,alt:"call"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white",children:"+91 933 421 9079"}),e.jsx("span",{className:"text-white",children:"+91 870 009 8127"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:b,alt:"clock"}),e.jsx("span",{className:"text-white",children:"10am to 6pm, all days"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:f,alt:"email"}),e.jsx("span",{className:"text-white",children:"info@javasports.in"})]}),e.jsxs("div",{className:"flex items-start max-w-[300px]",children:[e.jsx("img",{src:u,alt:"location"}),e.jsx("p",{className:"text-white text-[12px]",children:"Java Sports Pvt Ltd Ground & First Floor, Chak Bairiya, Karanpur, Illahibagh, Near Illahibagh Petrol Pump, Patna Gaya Road Patna - 800007 Bihar"})]})]})]}),e.jsxs("form",{onSubmit:i(o),className:" bg-grey/1 py-8 px-16 max-sm:px-4 flex flex-col gap-5",children:[e.jsx("span",{className:"text-3xl font-500 ",children:"Write to us"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"user",className:"text-sm font-700 font-Lato ",children:"Name"}),e.jsx("input",{className:"p-2 border-none rounded-xl",type:"text",placeholder:"Enter Name",...t("full_name",{required:!0})}),a.full_name&&e.jsx(r,{message:"Name is required"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"user",className:"text-sm font-700 font-Lato ",children:"Email"}),e.jsx("input",{className:" pr-[200px] max-sm:pr-1 p-2 border-none rounded-xl",type:"email",placeholder:"Enter your email",...t("email",{required:!0,validate:s=>g.test(s)||"Invalid email"})}),a.email&&e.jsx(r,{message:a.email.message})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"user",className:"text-sm font-700 font-Lato ",children:"Phone"}),e.jsx("input",{className:"p-2  border-none rounded-xl",type:"text",placeholder:"Enter your phone number",...t("phoneNo",{required:!0,validate:s=>N.test(s)||"Enter a valid indian number"})}),a.phoneNo&&e.jsx(r,{message:a.phoneNo.message})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"user",className:"text-sm font-700 font-Lato ",children:"Message"}),e.jsx("input",{className:"p-2  border-none rounded-xl pb-40 ",type:"text",placeholder:"Write your message here",...t("message",{required:!0})})]}),a.message&&e.jsx(r,{message:"Message is required"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"bg-black text-white px-16 py-2 rounded-3xl",children:c?"Sending...":"Send"})})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"text-4xl font-700 p-6",children:" View On Map "})}),e.jsxs("div",{className:"flex justify-center p-10",children:[e.jsx("div",{className:"max-lg:hidden",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin",height:"500",width:"1000",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0",title:"JavaSport"})}),e.jsx("div",{className:"lg:hidden",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin",height:"300",width:"300",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0",title:"JavaSport"})})]})]})};export{S as default};