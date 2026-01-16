const writeStream = fs.createWriteStream('./log.txt');
writeStream.write('Log Entry 1\n');
writeStream.write('Log Entry 2\n');
writeStream.write('Log Entry 3\n');
writeStream.end()
writeStream.on('finish', () => {
    console.log("Task is completed");
});