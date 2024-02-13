const express =require ('express')
const app = express();

const category=require ('./routes/category');
app.use('/category', category);

const auth=require('./routes/auth')
app.use('/auth', auth);
//http://localhost:5000/hola/?name=john&age=30
app.get('/hola',(req,res)=>{
    res.send(`hello i'm ${req.query.name} and i' am ${req.query.age} years old`)
})

//http://localhost:5000/test/chaima/26
app.get('/test/:name/:age',(req,res)=>{
    res.send(`hello i'm ${req.params.name} and i' am ${req.params.age} years old`)
})

 
app.get('/', (req,res)=>{
    //res.send('hello')
    //res.json({message})
    
    res.sendFile(__dirname+'/index.html')
})
    app.listen(5000 ,()=>{
        console.log("the service is running on port 5000")
    })
