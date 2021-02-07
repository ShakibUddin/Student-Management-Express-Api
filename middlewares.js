const data = require("./student")


function checkDataAmount(){
    return (req,res,next)=>{
        if(Object.keys(data[0]).length === 0){
            res.send("<h1>There are no students yet</h1>");
        }
        next();
    }
}

module.exports = checkDataAmount();