var schema = require('../models/collections');
var customHandlers = require('../custom_handlers');

// creating a user
exports.postUser = function(req, res) {
  var user = new schema.Users({
    userId: req.body.userId,
    userName: req.body.userName,
    password: req.body.password,
    permission: req.body.permission
  });

  user.save(function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  });
}

// get user's comments
exports.getUsers = function(req, res) {
  schema.Users.find({}, function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  })
}


// edit user details, only superadmin can use this API
exports.updateUser = function(req, res) {
  var userId = req.params.userId;
  schema.Users.findOne({
    userId: userId
  }, function(err, user) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if (req.body.userName) {
      user.userName = req.body.userName;
      user.updatedDate = new Date();
    }
    if (req.body.password) {
      user.password = req.body.password;
      user.updatedDate = new Date();
    }
    if (req.body.permission) {
      user.permission = req.body.permission;
      user.updatedDate = new Date();
    }

    user.save(function(err, response) {
      if (err) {
        return res.send(customHandlers.failureResponse(err));
      }
      res.json(customHandlers.successResponse(response));
    })
  })
}

// delete user, only superadmin can use this API
exports.deleteUser = function(req, res) {
  var userId = req.params.userId;
  schema.Users.findOne({userId: userId}, function(err, user) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if(user){
      schema.Users.remove({userId: userId}, function(err) {
        if(err) {
          return res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse());
      })
    }
    else {
      res.json("User doesnt exist");
    }
  })
}

// creating a series, only admin can use this API
exports.postSeries = function(req, res) {
  var series = new schema.Series({
    seriesId      : req.body.seriesId,
    seriesName    : req.body.seriesName,
    description   : req.body.description,
    createdBy     : req.body.createdBy
  });

  series.save(function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  });
}


// get series
exports.getSeries = function(req, res) {
  schema.Series.find({}, function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  })
}

// edit series details, only admin can use this API
exports.updateSeries = function(req, res) {
  var seriesId = req.params.seriesId;
  schema.Series.findOne({
    seriesId: seriesId
  }, function(err, series) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if (req.body.seriesName) {
      series.seriesName = req.body.seriesName;
      series.updatedDate = new Date();
    }
    if (req.body.description) {
      series.description = req.body.description;
      series.updatedDate = new Date();
    }
    if (req.body.createdBy) {
      series.createdBy = req.body.createdBy;
      series.updatedDate = new Date();
    }

    series.save(function(err, response) {
      if (err) {
        return res.send(customHandlers.failureResponse(err));
      }
      res.json(customHandlers.successResponse(response));
    })
  })
}

// delete series, only admin can use this API
exports.deleteSeries = function(req, res) {
  var seriesId = req.params.seriesId;
  schema.Series.findOne({seriesId: seriesId}, function(err, series) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if(series){
      schema.Series.remove({seriesId: seriesId}, function(err) {
        if(err) {
          return res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse());
      })
    }
    else {
      res.json("User doesnt exist");
    }
  })
}

// creating a season, only admin can use this API
exports.postSeason = function(req, res) {
  var season = new schema.Seasons({
    seriesId      : req.body.seriesId,
    seasonId      : req.body.seasonId,
    seasonName    : req.body.seasonName,
    description   : req.body.description,
    startsOn      : req.body.startsOn,
    endsOn        : req.body.endsOn
  });

  season.save(function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  });
}


// get Seasons
exports.getSeasons = function(req, res) {
  var seriesId = req.params.seriesId;
  schema.Seasons.find({seriesId: seriesId}, function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  })
}

// edit season details, only admin can use this API
exports.updateSeason = function(req, res) {
  var seasonId = req.params.seasonId;
  schema.Seasons.findOne({
    seasonId: seasonId
  }, function(err, season) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if (req.body.seasonName) {
      season.seriesName = req.body.seasonName;
      season.updatedDate = new Date();
    }
    if (req.body.description) {
      season.description = req.body.description;
      season.updatedDate = new Date();
    }
    if (req.body.startsOn) {
      season.startsOn = req.body.startsOn;
      season.updatedDate = new Date();
    }
    if (req.body.endsOn) {
      season.endOn = req.body.endsOn;
      season.updatedDate = new Date();
    }

    season.save(function(err, response) {
      if (err) {
        return res.send(customHandlers.failureResponse(err));
      }
      res.json(customHandlers.successResponse(response));
    })
  })
}

// delete season, only admin can use this API
exports.deleteSeason = function(req, res) {
  var seasonId = req.params.seasonId;
  schema.Series.findOne({seasonId: seasonId}, function(err, season) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if(season){
      schema.Series.remove({seasonId: seasonId}, function(err) {
        if(err) {
          return res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse());
      })
    }
    else {
      res.json("User doesnt exist");
    }
  })
}

// creating a comic, only admin can use this API
exports.postComic = function(req, res) {
  var comic = new schema.Comics({
    seriesId      : req.body.seriesId,
    seasonId      : req.body.seasonId,
    comicId       : req.body.comicId,
    comicName     : req.body.comicName,
    image         : req.body.image,
    story         : req.body.story
  });

  comic.save(function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  });
}


// get Comics
exports.getComics = function(req, res) {
  var seriesId = req.params.seriesId;
  var seasonId = req.params.seasonId;
  schema.Comics.find({seriesId: seriesId, seasonId: seasonId}, function(err, response) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(response));
  })
}

// edit comic details, only admin can use this API
exports.updateComic = function(req, res) {
  var comicId = req.params.comicId;
  schema.Comics.findOne({
    comicId: comicId
  }, function(err, comic) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if (req.body.comicName) {
      comic.comicName = req.body.comicName;
      comic.updatedDate = new Date();
    }
    if (req.body.image) {
      comic.image = req.body.image;
      comic.updatedDate = new Date();
    }
    if (req.body.story) {
      comic.story = req.body.story;
      comic.updatedDate = new Date();
    }

    comic.save(function(err, response) {
      if (err) {
        return res.send(customHandlers.failureResponse(err));
      }
      res.json(customHandlers.successResponse(response));
    })
  })
}

// delete comic, only admin can use this API
exports.deleteComic = function(req, res) {
  var comicId = req.params.comicId;
  schema.Comics.findOne({comicId: comicId}, function(err, comic) {
    if (err) {
      return res.send(customHandlers.failureResponse(err));
    }
    if(comic){
      schema.Comics.remove({comicId: comicId}, function(err) {
        if(err) {
          return res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse());
      })
    }
    else {
      res.json("Comic doesnt exist");
    }
  })
}
