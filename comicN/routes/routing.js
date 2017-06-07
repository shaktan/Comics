var express = require('express');
var router = express.Router();
module.exports = router;
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'shaktan',
  userProperty: 'payload'
});

var Controller = require('../controllers/main');

router.get('/random/:code', Controller.random);
// profile
router.get('/profile', auth, Controller.profileRead);

// authentication
router.route('/register')
  .post(Controller.register);
router.post('/login', Controller.login);


router.route('/post_user')
  .post(Controller.postUser);
router.route('/post_series')
  .post(Controller.postSeries);
router.route('/post_season')
  .post(Controller.postSeason);
router.route('/post_comic')
  .post(Controller.postComic);

router.route('/get_users')
  .get(Controller.getUsers);
router.route('/get_series')
  .get(Controller.getSeries);
router.route('/get_seasons/:seriesId')
  .get(Controller.getSeasons);
router.route('/get_comics/:seriesId/:seasonId')
  .get(Controller.getComics);

router.route('/update_user/:userId')
  .put(Controller.updateUser);
router.route('/update_series/:seriesId')
  .put(Controller.updateSeries);
router.route('/update_season/:seasonId')
  .put(Controller.updateSeason);
router.route('/update_comic/:comicId')
  .put(Controller.updateComic);

router.route('/delete_user/:userId')
  .delete(Controller.deleteUser);
router.route('/delete_series/:seriesId')
  .delete(Controller.deleteSeries);
router.route('/delete_season/:seasonId')
  .delete(Controller.deleteSeason);
router.route('/delete_comic/:comicId')
  .delete(Controller.deleteComic);
