let arr = [{path:"/home", text:"darius", id: 1}, {path:"/home", text:"futta", id:2}, {path:"/yo", text:"darius", id:3}];

let arra = arr.filter(p=>{
    p.path === '/home';
})

console.log(arra);