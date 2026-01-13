//path finding
const os = require('os');
const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, "log", "log.txt");
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
    