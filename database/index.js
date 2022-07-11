var mongoose = require('mongoose');
//var passw = "#LdYGhnEB5F26GK";

const url = "mongodb+srv://ChirayuGoyal:LdYGhnEB5F26GK@cluster0.lktgzsm.mongodb.net/?retryWrites=true&w=majority"

module.exports.start = function()
{
  mongoose.connect(url).then(function()
  {
    console.log("db is live")
  })
}