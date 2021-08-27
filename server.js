const express = require('express')
const bodyParse = require('body-parser')
const handlebars = require('express-handlebars')
const app = express()
const port= 3000

//MySQL
const mySQL = require('mysql')
const bodyParser = require('body-parser')
const sql = mySQL.createConnection ({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306'
})

sql.query('use nodejs')


//Body-Parser
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.use('/css',express.static('css'))
app.use('/js',express.static('js'))
app.use('/img',express.static('img'))

//Template Engine
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.listen(port,()=>{
    console.log('Servidor tá ON')
})






//Routes and Templates
app.get('/',(req,res)=>{
    res.render('index')
    
})
app.get('/inserir',(req,res)=>{
    res.render('inserir')
    
})

app.post('/controllerForm/:id?',(req,res)=>{

       async function Sucess(){    
        const cadastroSucess=  await sql.query("INSERT INTO user(nome,email,idade)  VALUES(?,?,?)" , [req.body.name,req.body.email,req.body.idade] )   
        return cadastroSucess    
    }
    Sucess()
    res.render('index')
    
    
})

app.get('/select/:id?',(req,res)=>{
       async function selectId(){
            const consult= await sql.query('SELECT * FROM user;',(error,results,fields)=>{
                res.render('select',{data:results})
            })
        }
        selectId()
    }
    
)

app.get('/update/:id?',(req,res)=>{

    async function date(){
     const banc =  await sql.query('select*from user;',(error,results,fields)=>{
            res.render('update',{data:results})
        })
    }
    date()
})

app.get('/delete/',function(req,res){
    
    sql.query("delete from user where id=?",[req.params.id]);
    res.render('delete');
})


app.get("/updateid/:id",function(req,res){
    sql.query("select * from user where id=?",[req.params.id],function(err,results,fields){
        res.render('updateid',{id:req.params.id,nome:results[0].nome,email:results[0].email,idade:results[0].idade});
    });
});

app.post('/controllerUpdate',(req,res)=>{
    sql.query('update user set nome=?,email=?,idade=? where id=?',[req.body.nome,req.body.email,req.body.idade,req.body.id])
    res.render('index')
})
    
    
        
