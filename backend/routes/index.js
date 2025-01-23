var express = require('express');
var router = express.Router();

const User = require('../models/users')

//: ajout d’un marqueur en base de données (via req.body)
router.post('/places', (req,res) => {
 
    const newUser = new User({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })

newUser.save().then(data => {
    res.json({result: true, data})}
    
)
})
// récupération de tous les marqueurs d’un utilisateur en fonction de son surnom (via req.params)

router.get('/places/:nickname', (req,res) => {

    User.find({nickname: req.params.nickname})
    .then(data => {
        console.log('databack',data)
        if(data){

            res.json({ result: true, places: data })
        } else {
            res.json({result: false, error: 'no markers found'})
        }
    }
    )
    
})

//suppression d’un marqueur à partir de son nom et du surnom de l’utilisateur (via req.body)

router.delete('/places', (req,res) => {
    console.log(req.body.name)
    User.deleteOne({nickname: req.body.nickname, name: req.body.name})
    .then(data =>{
        if(data){
            res.json({result: true})
        } else {
            res.json({result: false, error: 'No place found'})
        }
    }
       
    )
})
module.exports = router;
