🔹 1. Event Loop (Node.js)
Node.js runs on a single thread
Async tasks (I/O, timers) go to background
Completed tasks return to event queue
Event loop executes them when stack is free

👉 Example:

console.log("1");
setTimeout(()=>console.log("2"),0);
console.log("3");
// Output: 1 3 2
🔹 2. Sync vs Async File Handling
✔ Sync
fs.readFileSync("file.txt");
Blocking
Simple
Used in small scripts
✔ Async
await fs.promises.readFile("file.txt");
Non-blocking
Scalable
Used in servers
🔹 3. Express: Middleware & Routing
Middleware
Runs before route
app.use((req,res,next)=>{
  next();
});
Routing
app.get('/user',(req,res)=>{
  res.send("User");
});

👉 Flow:

Request → Middleware → Route → Response
🔹 4. MongoDB & Mongoose
Collection = Table
Document = JSON object
Mongoose:

✔ Schema validation
✔ Easy queries

const schema = new mongoose.Schema({
  name:String
});
🔹 5. Authentication vs Authorization
Type	Meaning
Auth	Who are you?
Authorization	What can you access?
if(user.role !== "admin"){
  return res.send("Denied");
}
🔹 6. Project Structure (Modular)
project/
├── controllers
├── services
├── routes
├── middleware
├── utils
├── app.js
└── server.js