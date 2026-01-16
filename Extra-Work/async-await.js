function fetchData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const data = "Sample Data";
            resolve(data);
        }, 1000);
    });
}
async function processData(){
    const data=await fetchData();
    console.log("Processing Data:",data);
}
processData();

