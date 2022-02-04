const mongoose = require('mongoose');
const { Schema } = mongoose;
const Person = require('./personSchemas');
const Subject = require('./subjectSchema');

const IssSchema =new mongoose.Schema({
    contentiss :
    {
        type:String,
        required : true,
        trim : true,
        min : [0,'this issue must be more than 0 character'],
        max : [130,'this issue must be least than 130 character']
    },
    subject :
    {
        type: Schema.Types.ObjectId ,
        ref : 'Subject',
        required:true,
        autopopulate :true
    },
    person :
    {
        type:Schema.Types.ObjectId,
        ref : 'Person',
        required:true,
        autopopulate : true
    }
},{collection:"issues",timestamps:true});

IssSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('issues', IssSchema);