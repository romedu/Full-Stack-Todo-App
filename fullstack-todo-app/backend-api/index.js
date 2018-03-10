const express    = require("express"),
      bodyParser = require("body-parser"),
      todoRoutes = require("./routes/todo");
      
const app = express(),
      PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todo", todoRoutes);

app.listen(PORT, process.env.IP, function(){
    console.log(`App running in the console.... Port: ${PORT}`);
});