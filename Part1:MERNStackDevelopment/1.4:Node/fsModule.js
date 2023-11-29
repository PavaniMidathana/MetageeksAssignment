var fs = require("fs"); 

const d = fs.readFileSync("oldJSONFile.json")
const jsonData = JSON.parse(d);
const modifiedData = jsonData.map((each) => {
    const totalPosts = each.posts.length;
        
    return{
        ...each,
        totalPosts
    }
})
console.log(JSON.stringify(modifiedData));
fs.writeFileSync("newJSONFile.json" , JSON.stringify(modifiedData , null ,2));
console.log("Data manipulated successfully");
