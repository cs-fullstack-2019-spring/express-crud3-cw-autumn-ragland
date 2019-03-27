var express = require('express');
var router = express.Router();
var PokemonCollection = require('../models/pokedex');

//weird home page
router.get('/', (req, res) =>{
    res.render('index', { title: 'Express' });
});

//get a pokemon
router.get('/pokemon/:id',(req,res) => {
    PokemonCollection.find({pokedex_number:req.params.id},(error,results) => {
        if (error) res.send(error);
        else res.send(results)
    })
});

//update a pokemon
router.put('/pokemon/:id', (req,res) => {
    PokemonCollection.findOneAndUpdate({pokedex_number:req.params.id},
    {
        name:req.body.name,
        hp:req.body.hp,
        attack:req.body.attack,
        defense:req.body.defense,
        speed: req.body.speed,
        sp_atk: req.body.sp_atk,
        sp_def: req.body.sp_atk,
        main_type: req.body.main_type,
    },(error,results) => {
        if (error) res.send(error);
        else res.send(results)
    })
});

//delete a pokemon
router.delete('/pokemon/:id', (req,res) => {
    PokemonCollection.deleteOne({pokedex_number:req.params.id},(error) => {
        if (error) res.send(error);
        else res.send('deleted')
    })
});

//create a new pokemon
router.post('/pokemon', (req,res) => {
    // res.send('okay')
    PokemonCollection.create({
        pokedex_number:req.body.pokedex_number,
        name:req.body.name,
        hp:req.body.hp,
        attack:req.body.attack,
        defense:req.body.defense,
        speed: req.body.speed,
        sp_atk: req.body.sp_atk,
        sp_def: req.body.sp_atk,
        main_type: req.body.main_type,
    }, (error) => {
        if (error) res.send(error);
        else res.send('okay')
    })
});

//view all pokemon
router.get('/pokemon', (req,res) => {
    PokemonCollection.find({},(error,results) => {
        if (error) res.send(error);
        else res.send(results)
    })
});

module.exports = router;