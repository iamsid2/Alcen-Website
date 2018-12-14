var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index');
});

router.get('/about', function(req, res, next) {
  res.render('main/about');
});

router.get('/service', function(req, res, next) {
  res.render('main/service');
});

router.get('/404', function(req, res, next) {
  res.render('main/404');
});

router.get('/gallery', function(req, res, next) {
  res.render('main/gallery');
});

router.get('/blog-fullwidth', function(req, res, next) {
  res.render('main/blog-fullwidth');
});

router.get('/blog-left-sidebar', function(req, res, next) {
  res.render('main/blog-left-sidebar');
});

router.get('/blog-right-sidebar', function(req, res, next) {
  res.render('main/blog-right-sidebar');
});

router.get('/contact', function(req, res, next) {
  res.render('main/contact');
});

router.get('/single-portfolio', function(req, res, next) {
  res.render('main/single-portfolio');
});

router.get('/single-post', function(req, res, next) {
  res.render('main/single-post');
});


module.exports = router;
