var mongoose = require('mongoose');

var qstschema = mongoose.Schema(

  {
   question_id:Number,
   Question:String,
   Option1:String,
   Option2:String,
   Option3:String,
   Option4:String,
   KeyAnswer:String 
  }
);
var setqst= mongoose.model('setquestion',qstschema);
module.exports = setqst;


// var signup = mongoose.Schema(

//   { uname:String  },
//   {unamelast:String},
//   { mail:String }
//   ,{ psw:Number }
  
// );
// var signup= mongoose.model('signup',signup);
// module.exports = signup;


    // qid:Qno,
    // question:question,
    // option1:option1,
    // option2:option2,
    // option3:option3,
    // option4:option4,
    // keyAnswer:keyanswer   
