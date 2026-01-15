const fs = require('fs');
fs.readFile('input.txt','utf8',function(err,data){
    if(err){
        console.log('This file have error');
        return;
    }
    const words = data.trim().split(/\s+/);
    const wordCount = words.length;
    const output = `Total number of words: ${wordCount}`;
    fs.writeFile('output.txt', output, function (err) {
        if (err) {
            console.log('Error writing file');
            return;
        }
        console.log("Word counted");
    });
});
