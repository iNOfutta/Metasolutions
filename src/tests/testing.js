function tester(logoURL, navs){
    let links = navs.map(link=>{
            return `<li><a href=${link.path} key=${link.id}>${link['text']}</a></li>`;
        })

        return `<nav>${links}</nav>`;
    
}

console.log(tester("", [{path:"/home", text:"Home", id: 1}, {path:"/about", text:"About us", id:2}, ]));
