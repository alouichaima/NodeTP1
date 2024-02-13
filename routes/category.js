//cet fichier simillaire controller dans spring
const express= require('express');
//ona fais instanciation juste du module router qui existe dans express pour utulise ses methodes 
const router =express.Router();

//http://localhost:5000/category/all
router.get('/all', (req,res)=>{
    res.send([{id:1,name:'chaima'},{id:2,name:'hana'},{id:3,name:'med_ali'}]);

})
//http://localhost:5000/category/one
router.get('/one', (req,res)=>{
    res.send({id:1,name:'chaima'});

})
//pour que en utilise cet module dans autre fichiers
module.exports=router