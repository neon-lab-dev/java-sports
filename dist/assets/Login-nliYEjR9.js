import{o as j,c as y,h as N,r as b,f as E,i as L,j as e,L as l,w as v,_ as P,x as i}from"./index-bzqS1RBf.js";import{u as S}from"./index.esm-eTFdkjF2.js";import{E as F,A as c}from"./AppFormErrorLine-lkRVhOg8.js";import{e as A,a as C}from"./eye-q8GmH2cr.js";const D=()=>{const[d]=j(),a=y(),m=N(),[r,u]=b.useState("password"),{register:o,handleSubmit:x,formState:{errors:n}}=S(),p=E(),t=d.get("redirect"),{mutate:h,isPending:f}=L({mutationKey:["user"],mutationFn:({email:s,password:w})=>v({email:s,password:w}),onError:s=>{P.error(s)},onSuccess:()=>{a(i(!0)),m.invalidateQueries({queryKey:["user"]}).then(()=>{a(i(!1)),p(t||"/account")})}}),g=s=>{h(s)};return e.jsxs("form",{onSubmit:x(g),className:"flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8 ",children:[e.jsx("h1",{className:"text-4xl font-700",children:"Login"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"user",className:"text-sm font-700 font-Lato ",children:"Email"}),e.jsx("input",{className:"p-2 border-none rounded-xl",type:"text",placeholder:"Enter your email",id:"user",...o("email",{validate:s=>F.test(s)})}),n.email&&e.jsx(c,{message:"Please enter a valid email"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-700 font-Lato ",children:"Password"}),e.jsxs("div",{className:"w-full relative",children:[e.jsx("input",{className:"p-2 border-none rounded-xl w-full",type:r,placeholder:"Enter Password",id:"password",...o("password",{required:!0})}),e.jsx("button",{type:"button",className:"absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4",onClick:()=>u(s=>s==="password"?"text":"password"),children:e.jsx("img",{src:r==="password"?A:C})})]}),n.password&&e.jsx(c,{message:"Password is required"}),e.jsx(l,{to:"/forgot-password",className:"text-xs text-right text-red-500 underline mt-3",children:"Forget your Password ?"})]}),e.jsx("button",{className:"p-3 text-white bg-black font-700 rounded-3xl font-Lato ",children:f?"Loading...":"Login"}),e.jsxs("span",{className:"text-sm text-center ",children:["Don't Have an account ?",e.jsxs(l,{to:`/signup${t?`?redirect=${t}`:""}`,className:"text-red-500 underline",children:[" ","Create an Account"]})]})]})};export{D as default};
