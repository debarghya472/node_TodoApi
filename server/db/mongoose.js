var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://todoNodeApi:Z319Xe4qnWhDs6uB@cluster0-xw78b.mongodb.net/todNodeApi?retryWrites=true&w=majority',
      { useNewUrlParser: true ,useCreateIndex: true,useUnifiedTopology: true },()=>{
          console.log("Connected to Database")
      });
// mongodb+srv://debarghyaapi:UbI2S5gSyxpkXYiI@cluster0-eefvp.mongodb.net/test?retryWrites=true&w=majority
module.exports={mongoose};