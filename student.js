const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    },
    semester:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    cgpa:{
        type:String,
        required:true,
    },
});

const studemtModel = mongoose.model('Student',studentSchema);

module.exports = studemtModel;

