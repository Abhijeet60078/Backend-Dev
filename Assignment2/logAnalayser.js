const fs = require("fs");
const readline = require("readline");
const path = require("path");
async function analyzeLog(filePath) {
    let totalLines = 0;
    let errorCount = 0;
    let warningCount = 0;
    try {
        const stream = fs.createReadStream(filePath, "utf8");
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            totalLines++;

            if (line.includes("ERROR")) errorCount++;
            else if (line.includes("WARN")) warningCount++;
        }
        console.log("\nLog Summary Report");
        console.log("-------------------");
        console.log("Total Lines:", totalLines);
        console.log("Errors:", errorCount);
        console.log("Warnings:", warningCount);
    }catch (err) {
        console.error("Log Analysis Error:", err.message);
    }
}