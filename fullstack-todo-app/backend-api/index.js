import express from "express";
import bodyParser from "body-parser";
const app = express(),
      PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, process.env.IP, function(){
    console.log(`App running in the console.... Port: ${PORT}`);
});