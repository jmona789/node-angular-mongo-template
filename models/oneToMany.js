var oneToMany, oneToManySchema, Schema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

oneToManySchema = new Schema({
  mongoCollectionIds: [
    {
      type: Schema.ObjectId,
      ref: 'mongoCollection'
    }
  ]
});

oneToMany = mongoose.model('oneToMany', oneToManySchema);

module.exports = oneToMany;