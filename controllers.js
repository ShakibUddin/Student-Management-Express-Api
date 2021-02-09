const Student = require('./student');

exports.home = (req, res) => {
    res.send("<h1>Student Management System</h1>")
}

exports.getAllStudents = (req, res) => {
    Student.find()
        .then(students => {
            res.json(students);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getSpecificStudent = (req, res) => {
    Student.findOne({ id: req.params.id })
        .then(student => {
            res.json(student);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.replaceSpecificStudent = (req, res) => {
    Student.findOneAndReplace({ id: req.params.id })
        .then(student => {
            res.json(student);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.deleteSpecificStudent = (req, res) => {
    Student.findOneAndDelete({ id: req.params.id })
        .then(student => {
            res.json(student);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.updateSpecificStudent = (req, res) => {
    let { name, id, semester, department, cgpa } = req.body;
    Student.findOneAndUpdate(
        { id: req.params.id },
        { $set: { name , id, semester, department, cgpa, } },
        { new: true }
    )
        .then(student => {
            res.json(student);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.addStudent = (req, res) => {
    if (req.body !== undefined) {
        let { name, id, semester, department, cgpa } = req.body;
        let student = new Student({
            name,
            id,
            semester,
            department,
            cgpa
        });
        student.save((error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(req.body);
                res.send("<h1>Student Added Successfully.</h1>");
            }
        });

    }
    else {
        res.send("<h1>Server Error</h1>")
    }
}

exports.error = (req, res) => {
    res.send("<h1>Invalid Url</h1>");
}