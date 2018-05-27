const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.port}/?ssl=true&replicaSet=globaldb`
//const mongoUri = `mongodb://localhost:27017/quiniela`
const mongoUri = process.env.MONGODB_URI



function connect() {
  return mongoose.connect(mongoUri);
}

module.exports = {
  connect,
  mongoose
};
