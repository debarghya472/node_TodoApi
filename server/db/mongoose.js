var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
// mongodb+srv://debarghyaapi:UbI2S5gSyxpkXYiI@cluster0-eefvp.mongodb.net/test?retryWrites=true&w=majority
module.exports={mongoose};