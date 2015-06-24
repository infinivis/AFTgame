// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  image: { data: Buffer, contentType: String },
  point: Number,
  stat1: Number
});

ScoreSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Partie', ScoreSchema);