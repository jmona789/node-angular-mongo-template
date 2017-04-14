var MongoCollection, MongoCollectionSchema, Schema, mongoose;
​
mongoose = require('mongoose');
​
Schema = mongoose.Schema;
​
MongoCollectionSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
​
MongoCollection = mongoose.model('MongoCollection', MongoCollectionSchema);
​
module.exports = MongoCollection;
​