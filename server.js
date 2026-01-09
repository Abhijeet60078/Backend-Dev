/*const {add,subtract,multiply,divide}=require('./calculator');
let sum=add(5,3);
let difference=subtract(10,4);
let product=multiply(6,7);
let quotient=divide(20,5);
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

//Additional code for os information
console.log((os.arch()))
console.log(os.freemen()/(1024**3))
console.log(os.uptime())
console.log("Total memory",os.totalmen()/(1024**3))*/


//using fs module
/*function manageFiles() {
    const fs = require('fs');
    //readfile Using fs module
    fs.readFile('./log.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("Read Data:", data); 
        //write file
        const dataToWrite = "This is new data written to output.txt";
        fs.writeFile('./output.txt', dataToWrite, (err) => {
            if (err) throw err; 
            console.log("File written successfully");
            //append file
            const dataToAppend = "\nThis is appended data.";
            fs.appendFile('./output.txt', dataToAppend, (err) => {
                if (err) throw err;
                console.log("File appended successfully");
                //delete file
                fs.unlink('./output.txt', (err) => {
                    if (err) throw err;
                    console.log("File deleted successfully");
                });
            });
        });
    });
}

module.exports = { manageFiles };*/


//path module 
/*const path=require('path');
//bsolute path
const absolutePath=path.resolve("./log.txt");
console.log(absolutePath);
console.log(__dirname)
console.log(path.basename('./notes/log.txt'))//filename- log
console.log(path.extname('./notes/log.txt'))//file - txt
const joinPath=path.join(__dirname,'notes','log.txt');
console.log(joinPath);
const pathParse=path.parse(joinPath);
console.log(pathParse);
*/

//finding log.txt when it is another folder file Path
/*const path = require('path');
const fs = require('fs');
const filePath=path.join(__dirname,"log","log.txt")
const data=fs.readFileSync(filePath,'utf-8');
console.log(data);*/

//Http method 
/*HTTP Methods (Verbs):

GET - Retrieve data from server (read-only)

Example: Fetch a webpage, get user info
POST - Send data to create new resources

Example: Submit a form, create a user
PUT - Update/replace entire resource

Example: Update full user profile
PATCH - Partially update a resource

Example: Update only user's email
DELETE - Remove a resource

Example: Delete a user account
HEAD - Like GET but only retrieves headers (no body)

OPTIONS - Returns supported HTTP methods for a resource

CONNECT - Establish tunnel (used for HTTPS proxies)

TRACE - Echoes back the received request (debugging)*/

//Types of api
/*1.GraphQL API
Single endpoint, flexible queries
2.SOAP API
XML-based, more structured
3.WebSocket API
Real-time, two-way communication
*/

//creating http server
/*
HTTP Server Points:
1. HTTP (HyperText Transfer Protocol) - Protocol for transmitting data over the web
2. Built-in Node.js module - No need to install external packages
3. Listens on a specific PORT number (e.g., 3000, 8080, 2000)
4. Request Object (req) - Contains client request data (URL, method, headers, body)
5. Response Object (res) - Used to send data back to client
6. Methods: res.end(), res.write(), res.writeHead(), res.setHeader()
7. Can handle multiple HTTP methods: GET, POST, PUT, DELETE
8. Stateless - Each request is independent, no memory of previous requests
9. req.url - Gets the requested URL path
10. req.method - Gets HTTP method (GET, POST, etc.)
11. res.statusCode - Set response status (200, 404, 500, etc.)
12. Content-Type header - Specifies data format (text/html, application/json)
13. Can serve HTML pages, JSON data, files, images
14. Foundation for frameworks like Express.js
15. Handles concurrent connections using Node.js event loop
*/

const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200,{"content-type":"text/html"})
    res.end("Hello from my first server");



})
server.listen(2000,()=>{
    console.log("Server is listening on port 2000",2000);
});



