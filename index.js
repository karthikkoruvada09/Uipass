const express = require('express');
const config = require('config');
const routes = require('./routes/auth_routes');

const profile = require('./routes/Profile_routes');

const app = express();
const keys = require('./config/keys');
const mongoose=require('mongoose');

const passport = require('passport');
const session=require('cookie-session');



//Remember to export the portOauth file here
const passportSetup = require('./portOauth');
const path=require('path');




//app.use(express.static(path.join(__dirname,'/dist/passport')));
app.use(session({
  maxAge : 24*60*60*1000,
  keys:['karthik']
}))


app.use(passport.initialize());
app.use(passport.session());




app.use('/auth',routes);
app.use('/profile',profile);

app.get('',(req,res)=>{
console.log("puha")
})



mongoose.connect(keys.mongdb.dbURi,()=>{
  console.log("done database");
});












const port =config.get('port');


app.listen(port,()=>{
  console.log(`working on ${port} successfully`)
})