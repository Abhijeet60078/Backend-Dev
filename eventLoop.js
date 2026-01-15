console.log("Start");
process.nextTick(function () {
    console.log("process.nextTick");
});
Promise.resolve().then(function () {
    console.log("Promise callback");
});
setTimeout(function () {
    console.log("setTimeout");
}, 0);
setImmediate(function () {
    console.log("setImmediate");
});console.log("End");
