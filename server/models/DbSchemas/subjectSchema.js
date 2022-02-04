const mongoose = require('mongoose');
const suggestion = require('../DbSchemas/suggestionSchema');
const Person = require('./personSchemas');
const SubjectSchema = new mongoose.Schema({

    subjectname : 
    {
        type : String,
        require : true,
        min : [6,'subject name must be more than 6 character'],
        max : [20,'subject name must be least than 20 character'],
        trim : true,
        unique : true,
    },
    issues : [],
    suggestions : [],

},{collection:"subjects",timestamps:true})

SubjectSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('Subject', SubjectSchema);



