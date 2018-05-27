const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const codigoSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    codigo: String,
    estado: Boolean
  });

const Codigo = mongoose.model("Codigo", codigoSchema);

module.exports = Codigo;
