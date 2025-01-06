function x(k,j){return k.then((b)=>{return[void 0,b]}).catch((b)=>{if(j===void 0)return[b];if(j.some((q)=>b instanceof q))return[b];throw b})}class v extends Error{name="CustomError";extraProp="Error: Test"}export{x as catchErrorTyped,v as CustomError};

//# debugId=3B714A587E7E3F6064756E2164756E21
