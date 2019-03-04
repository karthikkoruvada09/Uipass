const router = require('express').Router();


//remember to import passport here
const passport = require('passport');



router.get('/login',(req,res)=>{
    console.log("working yaar login")
});

router.get('/google',passport.authenticate('google',{
    scope :['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   res.send(req.session);   //this  confirms and says we are logged in

   //https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

  // res.redirect('/profile');
  //it will check from roo index.js file here
});



module.exports=router;

