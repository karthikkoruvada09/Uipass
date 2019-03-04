const router = require('express').Router();

const authcheck = (req,res,next)=>{
   
    if(!req.user){
        res.redirect('/auth/login');
    }else{
       next(); 
    }
}

router.get('/',authcheck,(req,res)=>{
    console.log(req.user);
    console.log("profile working yaar login")
});


module.exports=router;

