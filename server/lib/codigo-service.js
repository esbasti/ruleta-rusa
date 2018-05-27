const Codigo = require('./codigo-model');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();

function post(req, res) {
  const docquery = Codigo.findOne({codigo: req.body.codigo}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(codigos => {
      res.json(codigos);
      console.log(codigos);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


function patch(req, res) {
  const codigoParticipante = req.body.codigo;
  const id = codigoParticipante._id;
  Codigo.findByIdAndUpdate(id, { $set: {estado: false}}, { new: true }, function (err, codigo) {
    if (err) return res.status(500).send(err);
    console.log(codigo);
    res.send(codigo);
  });
}

module.exports = {
  post,
  patch
};
