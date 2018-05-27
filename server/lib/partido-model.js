const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partidosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    orden: Number,
    equipo1: String,
    equipo2: String
  });

const Partidos = mongoose.model("Partidos", partidosSchema);

module.exports = Partidos;
