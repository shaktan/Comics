// Load the required packages
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


// Define the structure of users schema
var usersSchema = new Schema({
  userName      : {type : String, required : true},
  password      : String,
  email         : String,
  active        : Boolean,
  role          : String,
  code          : String,
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date
});


// Define the structure of series schema
var seriesSchema = new Schema({
  seriesId      : {type : Number, required : true, unique : true},
  seriesName    : {type : String, required : true, unique : true},
  description   : String,
  createdBy     : String,
  subscribers   : [],
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

var CommentsSchema = new Schema({

comment: {type: String, default: ''},
// user: {type: Schema.Types.ObjectId,ref: 'User'},
userId: Number,
created: {type: Date, default: Date.now}
});

// Define the structure of comics schema
var comicsSchema = new Schema({
  seriesId      : {type : Number, required : true},
  seasonId      : {type : Number, required : true},
  comicId       : {type : Number, required : true, unique : true},
  comicName     : {type : String, required : true},
  image         : {type: String, data: Buffer},
  story         : String,
  comments      : [CommentsSchema],
  createdDate   : {type: Date, default: Date.now()},
  updatedDate   : Date

});

// usersSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
// }
//
// usersSchema.methods.validPassword = function(password) {
//   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
//   return this.hash === hash;
// };


// usersSchema.methods.generateHash = function(password){
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// }
//
// usersSchema.methods.validPassword = function(password){
// 	return bcrypt.compareSync(password, this.local.password);
// }

usersSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    userName: this.userName,
    exp: parseInt(expiry.getTime() / 1000),
  }, "shaktan"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};



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
