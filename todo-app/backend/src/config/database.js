const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://helpdev:123456@127.0.0.1:27017/todo');
// module.exports = mongoose.connect('mongodb://helpdev:123456@127.0.0.1:27017/todo',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
