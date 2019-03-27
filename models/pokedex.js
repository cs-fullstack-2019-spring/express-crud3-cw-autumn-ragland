var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema (
    {
        pokedex_number:Number,
        name:String,
        hp:Number,
        attack:Number,
        defense:Number,
        speed: Number,
        sp_atk: Number,
        sp_def: Number,
        main_type: String,
    }
);

module.exports = mongoose.model('pokemon', PokemonSchema);