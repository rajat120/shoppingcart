const express= require('express');
const mysql = require('mysql')
const app  = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"login"
});



app.post("/api/account/login", (req,res)=>{

    const email = req.body.email;
    const password = req.body.password;


    db.query("SELECT * FROM users WHERE email=? AND password=?", [email,password],
    (err, result)=>{
        if(err){
            res.send({err:err})
        }
        if(result){
            res.send(result);
        
        }
        else{
            res.send({message: "Invalid email and password"})

        }
    })
})