// inside of routes issue

const İssue = require('../models/DbSchemas/issueSchema');
const Subject = require('../models/DbSchemas/subjectSchema');
const Person = require('../models/DbSchemas/personSchemas');
const mongoose = require('mongoose');


exports.getiss = async (req,res)=>
{
    console.log('get issues');
    const allissues = await İssue.find({});
    res.render('issue',{allissues});
}

exports.isspost = async (req,res)=>
{
    console.log(req.body);
    try
    {
        console.log('iss post');
        const issues = new İssue(req.body);
        const result = await issues.save();
        const findiss = await İssue.findOne({_id : issues._id});
        console.log("findiss"+findiss);
        const personname = findiss.person.name;
        // add subject's issues array
        const findsubject = await Subject.findOne({_id:req.body.subject});
        console.log(findsubject)
        findsubject.issues.push({findiss,personname});
        await findsubject.save();
        // add person's issues array
        const findperson = await Person.findOne({_id:req.body.person});
        console.log(findperson);
        findperson.issues.push(issues);
        await findperson.save();
        res.render('subjectiss');
    }catch(err)
    {
        console.log("İssues kaydedilirken hata" + err);
    }
}