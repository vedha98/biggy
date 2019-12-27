// var rootdiv = "root"
// let templates={}

// let addTemplate=(name,xmltext)=>{
//     templates[name]=xmltext

// }

// let resolveRoute = (route) => {
//     try {
//      document.getElementById(rootdiv).innerHTML=templates[route]
//     } catch (error) {
//         throw new Error("The route is not defined");
//     }
// };
// let router = (evt) => {
//     const url = window.location.hash.slice(1) || "/";
//     console.log(url)
//     resolveRoute(url);
// };
// addTemplate('hello',`<div>hello</div>`)
// addTemplate('hello1',`<div>hello1</div>`)
// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);
