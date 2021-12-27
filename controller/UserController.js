const User = require('../models/UserModel')

exports.addingUser = (req,res) => {
    const newUser = req.body
    newUser.save((err,user) => {
        if(err) {
            res.status(400).json({
                message:'User Creation Failed'
            })
        }
        res.send(user)
    })
}