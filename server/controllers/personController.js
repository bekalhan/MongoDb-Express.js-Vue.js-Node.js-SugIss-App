// inside of routes person
const Person = require('../models/DbSchemas/personSchemas');

exports.getpersons = async  (req,res)=>
{
    console.log('get persons page');
    const allpersons = await Person.find({});
    res.render('persons',{allpersons});
}

exports.persondetail = async (req,res)=>
{
    console.log("person detail");
    console.log(req.params.id);
    res.render('persondetail');
}
exports.personpost = async (req,res)=>
{
    console.log('person post içerisi');
 try{
    const person = new Person(req.body);
    const result = await person.save();
    res.send(result)

 }catch(err)
 {
    console.log("person kaydedlilirken hata" + err)
 }

}

// exports.personsugg = async (req,res)=>
// {
//     console.log("all persons suggestions")
//     const allpersons = await Person.find({});
//     console.log(allpersons);
    
//     res.render('personsug')
// }
