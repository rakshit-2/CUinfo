const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyParser=require('body-parser');
const cors=require('cors');
// const { spawn } = require('child_process');


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"CUinfo",
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));







app.listen(3001,()=>{
    console.log("CUinfo server running 3001")
});


// npm run devStart