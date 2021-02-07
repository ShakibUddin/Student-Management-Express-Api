const { all } = require('./routes');
const data = require('./student');

exports.home = (req,res) => {
    res.send("<h1>Student Management System</h1>")
}

exports.getAllStudents = (req,res)=>{
    console.log(data[0]);
    res.send(data[0]);
}

exports.getSpecificStudent = (req,res)=>{
    if(data[0].hasOwnProperty(req.params.studentId)){
        res.send(data[0][req.params.studentId]);
    }
    else{
        res.send("No student found with this id");
    }
}

exports.replaceSpecificStudent = (req,res)=>{
    if(data[0].hasOwnProperty(req.params.studentId)){
        data[0][req.body.id] = req.body;
        delete data[0][req.params.studentId];
        res.send("<h1>Student Replaced Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.deleteSpecificStudent = (req,res)=>{
    if(data[0].hasOwnProperty(req.params.studentId)){
        delete data[0][req.params.studentId];
        res.send("<h1>Student Deleted Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.updateSpecificStudent = (req,res)=>{
    if(data[0].hasOwnProperty(req.params.studentId)){
        data[0][req.params.studentId] = req.body;
        res.send("<h1>Student Updated Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.addStudent = (req,res)=>{
    if(req.body !== undefined){
        console.log(req.body);
        data[0][req.body.id] = req.body;
        res.send("<h1>Student Added Successfully.</h1>");
    }
    else{
        res.send("<h1>Server Error</h1>")
    }
}

exports.error = (req,res)=>{
    res.send("<h1>Invalid Url</h1>");
}