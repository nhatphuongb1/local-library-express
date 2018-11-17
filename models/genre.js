var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name:{type:String, required: true, max:100}
});

GenreSchema
.virtual('url')
.get(function(){
    return '/catelog/genre/'+this._id;
});
module.exports = mongoose.model('Genre',GenreSchema);