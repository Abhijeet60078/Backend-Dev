const os = require('os');
const fs = require('fs');
function logSystemInfo() {
    const cpuInfo=os.cpus().length;
    const totalMemory=os.totalmem();
    const freeMemory=os.freemem();
    const platform=os.platform();
    const time=new Date().toLocaleString();
    const logData="Time: " + time + "\n" +
        "CPU Cores: " + cpuInfo + "\n" +
        "Total Memory: " + totalMemory + "\n" +
        "Free Memory: " + freeMemory + "\n" +
        "Platform: " + platform + "\n";

        fs.appendFile('systemInfo.txt', logData, function (err) {
        if (err) {
            console.log("Error writing to file");
        }
    });
}
setInterval(logSystemInfo, 5000);
