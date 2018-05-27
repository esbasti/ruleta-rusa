var express = require('express');
var router = express.Router();

var usuariosService = require('../lib/usuario-service');
var codgioService = require('../lib/codigo-service');
var partidoService = require('../lib/partido-service');


router.get('/usuarios', function(req, res, next) {
  usuariosService.get(req,res);
});

router.get('/partidos', function(req, res, next) {
  partidoService.get(req,res);
});

router.get('/codigos', function(req, res, next) {
  codgioService.get(req,res);
});

router.post('/codigos', function(req, res, next) {
  codgioService.post(req,res);
});

router.patch('/codigos', function(req, res, next) {
  codgioService.patch(req,res);
});

router.post('/usuarios', function(req, res, next) {
  usuariosService.create(req,res);
});

module.exports = router;
