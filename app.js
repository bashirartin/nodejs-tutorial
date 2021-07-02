const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("This is our Home Page!")
    }
    if(req.url === '/about') {
        res.end("These are information about our website")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back Home</a>
    `);
}).listen(5000);