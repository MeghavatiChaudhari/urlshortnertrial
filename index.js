const express = require('express');
const app = express();
const PORT = 8001;
const bodyParser = require('body-parser');

// const url = require('./models/url')


//imports
 const urlRoute = require('./routes/url')
 const newurl = require('./routes/redirect');
 const clickurl = require('./routes/clicks');
 const {connection}= require('./connect');
//importsend
connection('mongodb://localhost:27017/practdb')
.then(()=>console.log("mongodb connected"))
//

app.use(bodyParser.json());

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//endmiddleware
app.use('/url',urlRoute);
app.use('/',newurl);
app.use('/',clickurl);
//
 app.get('/',(req,res)=>{
    return res.end(`<html>
    <body>
        <ol>
            hey
            hello
        </ol>
    </body>
</html>`);
 })

app.listen(PORT,()=>console.log("server connted"));




