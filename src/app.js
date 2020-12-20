const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// Public Static Path 

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// Routing here 

app.get('',(req,res)=>{
    res.render('index');    
});

app.get('/propertydetails',(req,res)=>{
    res.render('propertydetails');
});
app.get('/addproperty',(req,res)=>{
    res.render('addproperty');
});
app.get('/addpropertyform',(req,res)=>{
    res.render('addpropertyform');
});

app.get('*',(req,res)=>{
    res.render('error');
});


// Server Setting 

app.listen(port, ()=>{
    console.log(`your own server ${port}`);
})