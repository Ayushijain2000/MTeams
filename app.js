const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
const io = require("socket.io")();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(session({
  secret : "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/MteamsUsers', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res) => {
  if(req.isAuthenticated()){
    res.render("home" , {loginRequired : "hidden" , logoutRequired : ""});
  }else{
    res.render("home" , {loginRequired : "" , logoutRequired : "hidden"});
  }
});

app.get("/index", (req, res) => {
  if(req.isAuthenticated()){
  res.render("index");
  }else{
    res.render("register" , {showMessage : "show"});
  }
});

app.get("/signIn" , (req,res) => {
  res.render("signIn" , {correctPass : ""});
});

app.get("/register" , (req,res) => {
  res.render("register" , {showMessage : ""});
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});


app.post("/register", function (req, res) {
  User.register({username: req.body.username}, req.body.password, function(err, user){
      if(err){
          console.log(err);
          res.redirect("/register" , {showMessage : ""} );
      } else {
          passport.authenticate("local")(req, res, function(){
              res.redirect("/");
          });
      }
  })
});

app.post("/signIn", function (req, res) {
  const user = new User({
      username: req.body.username,
      password: req.body.password
  })

  req.login(user, function(err){
      if(err){
          console.log(err);
      } else {
       passport.authenticate("local")(req, res, function(){
              res.redirect("/");
          });
      }
  });
});

let connectedPeers = [];

io.on("connection", (socket) => {
  connectedPeers.push(socket.id);

  socket.on("pre-offer", (data) => {
    console.log("pre-offer-came");
    const { calleePersonalCode, callType } = data;
    console.log(calleePersonalCode);
    console.log(connectedPeers);
    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === calleePersonalCode
    );

    console.log(connectedPeer);

    if (connectedPeer) {
      const data = {
        callerSocketId: socket.id,
        callType,
      };
      io.to(calleePersonalCode).emit("pre-offer", data);
    } else {
      const data = {
        preOfferAnswer: "CALLEE_NOT_FOUND",
      };
      io.to(socket.id).emit("pre-offer-answer", data);
    }
  });

  socket.on("pre-offer-answer", (data) => {
    const { callerSocketId } = data;

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === callerSocketId
    );

    if (connectedPeer) {
      io.to(data.callerSocketId).emit("pre-offer-answer", data);
    }
  });

  socket.on("webRTC-signaling", (data) => {
    const { connectedUserSocketId } = data;

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === connectedUserSocketId
    );

    if (connectedPeer) {
      io.to(connectedUserSocketId).emit("webRTC-signaling", data);
    }
  });

  socket.on("user-hanged-up" , (data) =>{
     const {connectedUserSocketId} = data;

     const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === connectedUserSocketId
    );

    if(connectedPeer){
      io.to(connectedUserSocketId).emit("user-hanged-up");
    }

  })

  socket.on("disconnect", () => {
    console.log("user disconnected");

    const newConnectedPeers = connectedPeers.filter(
      (peerSocketId) => peerSocketId !== socket.id
    );

    connectedPeers = newConnectedPeers;
    console.log(connectedPeers);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
