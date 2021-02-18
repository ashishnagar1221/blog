const express = require('express');
app = express();
const port = process.env.PORT || 3600;


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const user = require('./routes/auth');
app.use('/api/account',user);

app.get('/', function(req, res){
   res.send("Hello world!");
});

const db = require('./models/index');
db.sequelize.sync({force:true});

app.listen(port, () => {
    console.log(`Server will be running at port: ${ port}`);
});
