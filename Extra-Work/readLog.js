//if we are using large amount of data we can use streams to read the data in chunks
/*const fs = require('fs');
const readline = require('readline');

async function processLogFile(filePath) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        // Process each line here
        console.log(`Line from file: ${line}`);
    }
}

processLogFile('path/to/your/logfile.log');

*/
const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(
    path.join(__dirname, 'log.txt'),
    { encoding: 'utf8' }
);

readStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log(chunk);
});

readStream.on('error', (err) => {
    console.error('Error reading log.txt:', err.message);
});
