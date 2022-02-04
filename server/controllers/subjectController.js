// inside of routes subject
const Subject = require('../models/DbSchemas/subjectSchema');
console.log("abc");
exports.getsubject = async (req,res)=>
{
    console.log('get subject');
    const allsubject = await Subject.find({});
    console.log("alll"+allsubject)
    res.send(allsubject);
    // res.render('subject',{allsubject});
}

exports.postsugg = async (req,res)=>
{
    console.log("get suggestion method inside subject controller");
    const findsubjectsugg = await Subject.findOne({_id : req.params.id});
    console.log(findsubjectsugg);
    const valuethatwantfromme = findsubjectsugg.suggestions;
    //  find person who text suggestion
    console.log(valuethatwantfromme);
    res.send(valuethatwantfromme);
    // res.render('subjectsug',{valuethatwantfromme});
}

exports.postiss  = async (req,res)=>
{
    console.log("get issue method inside subject controller");
    const findsubjectiss = await Subject.findOne({_id:req.params.id});
    const valuethatwantfromme = findsubjectiss.issues;
    res.send(valuethatwantfromme);
    // res.render('subjectiss',{valuethatwantfromme});
}


exports.subjectpost = async (req,res)=>
{
    console.log("aaaaaadas");
 try{
    const subject = new Subject(req.body);
    const result = await subject.save();
    res.send(subject);

 }catch(err)
 {
    console.log("subject kaydedlilirken hata" + err)
 }

}