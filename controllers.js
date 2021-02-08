const { all } = require('./routes');
const data = require('./student');
const students = data[0];

exports.home = (req,res) => {
    res.send("<h1>Student Management System</h1>")
}

exports.getAllStudents = (req,res)=>{
    console.log(students);
    res.send(students);
}

exports.getSpecificStudent = (req,res)=>{
    if(students.hasOwnProperty(req.params.studentId)){
        res.send(students[req.params.studentId]);
    }
    else{
        res.send("No student found with this id");
    }
}

exports.replaceSpecificStudent = (req,res)=>{
    if(students.hasOwnProperty(req.params.studentId)){
        students[req.body.id] = req.body;
        delete students[req.params.studentId];
        res.send("<h1>Student Replaced Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.deleteSpecificStudent = (req,res)=>{
    if(students.hasOwnProperty(req.params.studentId)){
        delete students[req.params.studentId];
        res.send("<h1>Student Deleted Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.updateSpecificStudent = (req,res)=>{
    if(students.hasOwnProperty(req.params.studentId)){
        students[req.params.studentId].name = req.body.name || students[req.params.studentId].name;
        students[req.params.studentId].id = req.body.id || students[req.params.studentId].id;
        students[req.params.studentId].semester = req.body.semester || students[req.params.studentId].semester;
        students[req.params.studentId].department = req.body.department || students[req.params.studentId].department;
        students[req.params.studentId].cgpa = req.body.cgpa || students[req.params.studentId].cgpa;
        res.send("<h1>Student Updated Successfully.</h1>");
    }
    else{
        res.send("<h1>No student found with this id</h1>");
    }
}

exports.addStudent = (req,res)=>{
    if(req.body !== undefined){
        console.log(req.body);
        students[req.body.id] = req.body;
        res.send("<h1>Student Added Successfully.</h1>");
    }
    else{
        res.send("<h1>Server Error</h1>")
    }
}

exports.error = (req,res)=>{
    res.send("<h1>Invalid Url</h1>");
}