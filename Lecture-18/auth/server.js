/**
 * Created by aayusharora on 7/19/17.
 */

var express = require('express');
var passport = require('passport');
var passportLocal = require('passport-local');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var localStrategy = passportLocal.Strategy;
var userConfig = require('./userconfig');
console.log(userConfig);

var app = express();

app.use(express.static('public_static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(
    function(username, password, done) {

       if(userConfig.username !==  username) {
           return done(null,false,{message: 'Please enter correct username'});
       }

       if(userConfig.password !== password) {
           return done(null,false,{message: 'Please enter valid password'});
       }
       console.log(userConfig.username);
       return done(null, userConfig.username);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get('/success', function(req, res) {
    res.send("Login User")
});

app.post('/login',
          passport.authenticate('local',
                                          {
                                              successRedirect: '/success',
                                              failureRedirect: '/'
                                          }
                                          ));


app.listen(5000, function(){
    console.log("Server is listening");
});
