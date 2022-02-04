// inside of routes suggestion

const Suggestion = require('../models/DbSchemas/suggestionSchema');
const Subject = require('../models/DbSchemas/subjectSchema');
const Person = require('../models/DbSchemas/personSchemas');
const mongoose = require('mongoose');


exports.getsug = async (req,res)=>
{
    console.log('get suggestons');
    const allsuggestion = await Suggestion.find({});
    res.render('suggestion.pug',{allsuggestion});
}

exports.sugpost = async (req,res)=>
{
    console.log(req.body)
 try{
    const suggestion = new Suggestion(req.body);
    const result = await suggestion.save();
    const findsug = await Suggestion.findOne({_id : suggestion._id});
    const personname = findsug.person.name
    // add person's suggestions array
    const findperson = await Person.findOne({_id:req.body.person});
    findperson.suggestions.push(suggestion);
    await findperson.save();
    // add subject's suggestions array
    const findsubject = await Subject.findOne({_id : req.body.subject});
    findsubject.suggestions.push({findsug,personname});
    await findsubject.save();
   
    res.render('subjectsug');
 }catch(err)
 {
    console.log("suggestions kaydedlilirken hata" + err)
 }

}
 