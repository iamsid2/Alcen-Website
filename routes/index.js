var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const contactModel = require('../models/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index');
});

router.get('/about', function(req, res, next) {
  res.render('main/about');
});

router.get('/products', function(req, res, next) {
  res.render('main/products');
});

router.get('/404', function(req, res, next) {
  res.render('main/404');
});

router.get('/gallery', function(req, res, next) {
  res.render('main/gallery');
});

// router.get('/blog-fullwidth', function(req, res, next) {
//   res.render('main/blog-fullwidth');
// });
//
// router.get('/blog-left-sidebar', function(req, res, next) {
//   res.render('main/blog-left-sidebar');
// });
//
// router.get('/blog-right-sidebar', function(req, res, next) {
//   res.render('main/blog-right-sidebar');
// });

router.get('/clients', function(req, res, next) {
  res.render('main/clients');
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

router.post('/contact', function(req,res,next) {
  var contact = new contactModel();
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.subject = req.body.subject;
  contact.message = req.body.message;

  contact.save(function(err){
  if(err){
    return next(err);
  }
})
console.log(req.body)
});

module.exports = router;
