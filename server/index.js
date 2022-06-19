const express=require('express');
const app=express();
const mysql=require("mysql");
const bodyParser=require('body-parser');
const cors=require('cors');
const fs = require('fs')


const db=mysql.createPool({
    host:"remotemysql.com",
    user:"nWBFMprI4e",
    password:"aqbTzpHOZa",
    database:"nWBFMprI4e",
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))




// notes pdfs apis


app.get('/pdf1',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_1.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf2',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_2.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf3',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_3.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf4',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_4.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf5',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_5.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf6',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_6.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf7',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_7.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf8',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_8.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})
app.get('/pdf9',(req,res)=>{
    res.download(__dirname + "/pdfs/pdf_subid_9.pdf", function (err) {
        if (err) {
            console.log(err);
        }
    });
})











// event all api


app.get("/eventAll",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventDate/accending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_date ASC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventDate/decending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_date DESC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventSNo/accending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_id ASC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventSNo/decending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from event ORDER BY event_id DESC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})







app.listen(3001,()=>{
    console.log("running remote database(fully connected) CUinfo")
});


// npm run devStart