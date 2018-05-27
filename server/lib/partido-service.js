const Partidos = require('./partido-model');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();

function get(req, res) {
  const docquery = Partidos.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(partidos => {
      res.json(partidos);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


module.exports = {
  get
};
