const express=require ('express')
const router=express.Router();

//http://localhost:5000/auth/login
router.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})

router.get('/register',(req,res)=>{
    // res.sendFile(__dirname+'/register.html')
    res.json({message:'register'})
})

module.exports=router