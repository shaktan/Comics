// Load the required packages
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
// autoIncrement = require('mongoose-auto-increment');


// Define the structure of users schema
var usersSchema = new Schema({
  userId        : {type : Number, required : true, unique : true},
  userName      : {type : String, required : true},
  password      : {type : String, required : true},
  permission    : {type : String, default  : "user"},
  comments      : [String],
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date
})

// Define the structure of series schema
var seriesSchema = new Schema({
  seriesId      : {type : Number, required : true, unique : true},
  seriesName    : {type : String, required : true, unique : true},
  description   : String,
  createdBy     : String,
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date
});

// Define the structure of seasons schema
var seasonsSchema = new Schema({
  seriesId      : {type : Number, required : true},
  seasonId      : {type : Number, required : true, unique : true},
  seasonName    : {type : String, required : true},
  description   : String,
  startsOn      : String,
  endsOn        : String,
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date
});

// Define the structure of comics schema
var comicsSchema = new Schema({
  seriesId      : {type : Number, required : true},
  seasonId      : {type : Number, required : true},
  comicId       : {type : Number, required : true, unique : true},
  comicName     : {type : String, required : true},
  image         : {type: String, data: Buffer},
  story         : String,
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date

});

// mongoose.model returns the Model it defines. Setting it as module.exports allows you to easily create instances of
// the Model, without retrieving it from the connection.
var Users = mongoose.model('Users',usersSchema);
var Series = mongoose.model('Series',seriesSchema);
var Seasons = mongoose.model('Seasons',seasonsSchema);
var Comics = mongoose.model('Comics',comicsSchema);

module.exports = {
  Users        : Users,
  Series       : Series,
  Seasons      : Seasons,
  Comics       : Comics
}
