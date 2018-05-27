const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    //id: { type: Number, required: true, unique: true },
    codigo: String,
    nombre: String,
    apellido: String,
    telefono: String,
    email: String,
    marcadorPartidos: []
  });

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
