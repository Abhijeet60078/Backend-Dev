const fs = require("fs");
const path = require("path");
async function readFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, "utf8");
        console.log("\nFile Content:\n", data);
    } catch (err) {
        console.error("Read Error:", err.message);
    }
}
async function writeFile(filePath, content) {
    try {
        await fs.promises.writeFile(filePath, content, "utf8");
        console.log("File written successfully.");
    } catch (err) {
        console.error("Write Error:", err.message);
    }
}
function copyFile(source, destination) {
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destination);

    readStream.on("error", err => console.error("Read Stream Error:", err.message));
    writeStream.on("error", err => console.error("Write Stream Error:", err.message));

    readStream.pipe(writeStream);
    console.log("File copied successfully.");
}
async function deleteFile(filePath) {
    try {
        await fs.promises.unlink(filePath);
        console.log("File deleted successfully.");
    } catch (err) {
        console.error("Delete Error:", err.message);
    }
}

async function listDirectory(dirPath) {
    try {
        const files = await fs.promises.readdir(dirPath);
        console.log("\nDirectory Contents:");
        files.forEach(file => console.log(file));
    } catch (err) {
        console.error("Directory Error:", err.message);
    }
}
