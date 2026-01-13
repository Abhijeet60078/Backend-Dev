//callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log("Processing Data:", data);
}
fetchData(processData);