// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoreSchema = new Schema({
    
  kmLmax: Number,
  kmLmoy: Number,
  kmRmax: Number,
  kmRmoy: Number,
  point: Number,
  jour: Number,
  image_id: { type: Schema.Types.ObjectId, ref: 'Image' }
});

ScoreSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Partie', ScoreSchema);

