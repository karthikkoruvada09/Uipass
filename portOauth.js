const passport = require('passport');
const GoogleStrategy =require('passport-google-oauth20');
const keys =require('./config/keys');
const users = require('./controllers/mongo');

passport.serializeUser((givenByDoneBelow,done)=>{
    done(null,givenByDoneBelow.id);   //sending to cookie
    console.log(givenByDoneBelow);
});

passport.deserializeUser((id,done)=>{    //remember this id here
    users.findById({_id:id},(err,user)=>{
        done(null,user);  //passing user object on to the next stage here and remember to initialize passport.initilize 
    })
})



passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google/redirect' ,
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret
        

},(accessToken,refreshToken,profile,done)=>{
  //  console.log(profile);

    users.findOne({gid:profile.id},(err,data)=>{
       // console.log(data);
        if(data){
            console.log("user exists");
            done(null,data);
        }else{
            console.log("not existing");
          
            let doc = new users();

            doc.name = profile.displayName;
            doc.gid =profile.id;
        

            doc.save((err,data1)=>{
    //console.log(data1);
            })

            done(null,doc);
        
        }
    })



}));