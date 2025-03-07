const http = require('http');


const server = http.createServer((req,res)=>{
    
    // res.end("Hello Coder Army");

    if(req.url==="/"){
        res.end("Hello Coder Army");
    }
    else if(req.url==="/contact"){
        res.end("This is our Contact Page")
    }
    else if(req.url==="/about"){
        res.end("This is our About Page")
    }
    else
    {
        res.end("Error: Page Not Found");
    }
});


server.listen(4000, ()=>{
    console.log("I am Listening at port number 4000");
})