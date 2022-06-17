const Game = require('../models/game.model');

module.exports ={
    createGame: (req,res)=>{
        Game.create(req.body)
            .then((newGame)=>{
                res.json(newGame);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    getAllGames :(req, res) =>{
        Game.find({})
            .then(games => {
                console.log(games);
                res.json(games);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    getOneGame:(req,res)=> {
        Game.findOne({_id: req.params.id})
            .then((oneGame)=> res.json(oneGame))
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    updateGame:(req,res)=>{
        Game.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatedGame => res.json(updatedGame))
            .catch(err=> res.status(400).json(err))
    },

    deleteGame:(req,res)=>{
        console.log(req)
        Game.deleteOne({_id:req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.status(400).json(err));
    },
}