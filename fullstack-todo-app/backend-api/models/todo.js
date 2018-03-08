const mongoose   = require("mongoose"),
      todoSchema = new mongoose.Schema({
           name: {
               type: String,
               required: "You must name your todo"
           },
           completed: {
               type: Boolean,
               default: false
           },
           created: {
               type: Date,
               default: Date.now
           }
        });

module.exports = mongoose.model("Todo", todoSchema);