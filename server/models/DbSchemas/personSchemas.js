const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name : 
    {
        type : String,
        min : [3, 'your name must be more than {value} character'],
        max : [10,'your name must be least than {value} character'],
        require : [true,'name required'],
        trim : true

    },
    surname:
    {
        type: String,
        min : [3, ' your name must be more than {value} character'],
        max : [12, 'your name must be least than {value} character'],
        require : [true,'surname required'],
        trim : true
    },
    email:
    {
        type:String,
        unique : true,
        min :5,
        max : 30,
        trim : true,
        required : true,
    },
    sifre :
    {
        type : String,
        min : 8,
        max : 20,
        trim : true,
        required : true
    },
    issues : [],
    suggestions : []
},{collection:"persons",timestamps:true})

module.exports = mongoose.model('Person',PersonSchema);