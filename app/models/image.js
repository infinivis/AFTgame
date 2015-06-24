// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoreSchema = new Schema({
//    data: Buffer,
//    contentType: String
      dataUrl: String
});

ScoreSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Image', ScoreSchema);