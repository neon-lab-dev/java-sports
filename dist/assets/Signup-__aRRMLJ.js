import{f as j,o as N,r as g,i as b,j as s,L as d,y as v,_ as i}from"./index-bzqS1RBf.js";import{A as o,E as P,P as y,a as E}from"./AppFormErrorLine-lkRVhOg8.js";import{u as L}from"./index.esm-eTFdkjF2.js";import{e as m,a as x}from"./eye-q8GmH2cr.js";const I=()=>{const p=j(),[u]=N(),l=u.get("redirect"),[r,n]=g.useState({password:"password",confirmPassword:"password"}),{register:a,handleSubmit:h,watch:c,formState:{errors:t}}=L(),{isPending:f,mutate:w}=b({mutationFn:e=>v(e),onError:e=>{i.error(e)},onSuccess:e=>{i.success(e.message),p("/otp-verification",{state:{user:c()}})}});return s.jsxs("form",{onSubmit:h(e=>w(e)),className:"flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8",children:[s.jsx("h1",{className:"text-3xl text-center font-900",children:"Create Your Account"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"user-name",className:"text-sm font-700 font-Lato ",children:"Full Name"}),s.jsx("input",{className:"p-2 border-none rounded-xl",type:"text",placeholder:"Full name",...a("full_name",{validate:e=>e.length>3})}),t.full_name&&s.jsx(o,{message:"Name must be at least 3 characters long"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"email",className:"text-sm font-700 font-Lato",children:"Email"}),s.jsx("input",{className:"p-2 border-none rounded-xl",type:"Email",placeholder:"Email",...a("email",{validate:e=>P.test(e)})}),t.email&&s.jsx(o,{message:"Invalid Email"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"phone",className:"text-sm font-700 font-Lato",children:"Mobile No"}),s.jsx("input",{className:"p-2 border-none rounded-xl",type:"text",placeholder:"mobile number",...a("phoneNo",{validate:e=>y.test(e)})}),t.phoneNo&&s.jsx(o,{message:"Invalid Phone Number, Only Indian Phone Number is allowed"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"phone",className:"text-sm font-700 font-Lato",children:"Date of Birth"}),s.jsx("input",{className:"p-2 border-none rounded-xl",type:"date",max:new Date().toISOString().split("T")[0],...a("dob",{required:!0})}),t.dob&&s.jsx(o,{message:"Date of birth is required"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"",className:"text-sm font-700 font-Lato ",children:"Password"}),s.jsxs("div",{className:"relative w-full",children:[s.jsx("input",{className:"p-2 border-none rounded-xl w-full",type:r.password,placeholder:"Password",...a("password",{validate:e=>E.test(e)})}),s.jsx("button",{type:"button",className:"absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4",onClick:()=>n(e=>({...e,password:e.password==="password"?"text":"password"})),children:s.jsx("img",{src:r.password==="password"?m:x})})]}),t.password&&s.jsx(o,{message:"Password must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character",className:"w-[300px]"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{htmlFor:"confirm-password",className:"text-sm font-700 font-Lato w-full",children:"Confirm Password"}),s.jsxs("div",{className:"w-full relative",children:[s.jsx("input",{className:"p-2 border-none rounded-xl w-full",type:r.confirmPassword,placeholder:"Confirm Password",...a("confirm_password",{validate:e=>e===c("password")})}),s.jsx("button",{type:"button",className:"absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4",onClick:()=>n(e=>({...e,confirmPassword:e.confirmPassword==="password"?"text":"password"})),children:s.jsx("img",{src:r.confirmPassword==="password"?m:x})})]}),t.confirm_password&&s.jsx(o,{message:"Passwords do not match"})]}),s.jsxs("span",{className:"text-center text-[10px]",children:["By clicking on sign-up, you agree to java sports"," ",s.jsx(d,{to:"/terms-and-conditions",className:"text-red-500 underline",children:"Terms and Conditions of Use."})]}),s.jsx("button",{className:"p-2 text-white bg-black rounded-3xl",children:f?"Loading...":"Create Account"}),s.jsxs("span",{className:"text-sm text-center ",children:["Have an account?"," ",s.jsx(d,{to:`/login${l?`?redirect=${l}`:""}`,className:"text-red-500 underline",children:"Log in"})]})]})};export{I as default};
