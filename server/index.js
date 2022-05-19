const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyParser=require('body-parser');
const cors=require('cors');
// const { spawn } = require('child_process');


app.listen(3001,()=>{
    console.log("running 3001")
});


// npm run devStart