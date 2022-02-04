const mongoose = require('mongoose');
const { Schema } = mongoose;
const Person = require('./personSchemas');
const Subject = require('./subjectSchema');


const SuggSchema =new  mongoose.Schema({
    contentsug :
    {
        type:String,
        required : true,
        trim : true,
        min : [0,'this suggestions must be more than 0 character'],
        max : [130,'this suggestions must be least than 130 character']
    },
    subject :
    {
        type: Schema.Types.ObjectId ,
        ref : 'Subject',
        required:true,
        autopopulate : true
    },
    person :
    {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Person',
        required:true,
        autopopulate : true,
    }
},{collection:"suggestions",timestamps:true})

SuggSchema.plugin(require('mongoose-autopopulate'));


const suggestion = module.exports = mongoose.model('suggestion', SuggSchema);

