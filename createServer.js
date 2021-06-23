const http = require('http');

const server = http.createServer((req ,res)=>{
    if(req.url === '/'){
        res.end('this is the home page');
    }else if(req.url === '/about'){
        res.end('this is the about page');
    }else{
        res.end(`<h1>Ooops!</h1>
        we cant find your page
        <a href='/'>this home</a>
        `)
    }
})


server.listen(3000);