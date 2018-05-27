var nodemailer = require('nodemailer');
const ReadPreference = require('mongodb').ReadPreference;
const Usuario = require('./usuario-model');

var transporter = nodemailer.createTransport({
    host : process.env.NODEMAILER_SERVICE,
    port: 25,
    auth : {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
});
transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
          console.log('Server is ready to take our messages');
   }
});


require('../mongo').connect();

function get(req, res) {
  const docquery = Usuario.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(usuarios => {
      res.json(usuarios);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { _id, id, codigo, nombre, apellido, telefono, email, marcadorPartidos } = req.body.participante;
  const usuario = new Usuario({ id, codigo, nombre, apellido, telefono, email, marcadorPartidos })
  usuario
    .save()
    .then(() => {
      res.json(usuario);
          var mailOptions = {
            from: "Quiniela Applebee's <asistentevirtual@bynetcr.com>", // sender address
            to: `${usuario.email}`, // list of receivers
            subject: 'Confirmación de participación', // Subject line
            text: ``, // plain text body
            html: `<tr>\
            <td align="left" style="padding:0px 40px 40px 40px"><p\
            style="color:#262626; font-size:26px; text-align:left; font-family: Verdana, Geneva, sans-serif">\
            ¡Ya estas participando!</p>\
            <p style="color:#000000; font-size:20px; text-align:left; font-family: Verdana, Geneva, sans-serif; line-height:22px ">\
            Muchas gracias ${usuario.nombre} ${usuario.apellido}, por participar en esta quiniela </p> <br/> <br/>\
            <br/><a href="http://www.applebeescr.com/menu">Ver menú</a> <br/>\
            <br/>\
            </td>\
            </tr>` // html body
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          });
    })
    .catch(err => {
      res.status(500).send(err);
    })
}


module.exports = {
  get,
  create,
};
