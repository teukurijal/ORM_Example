const models = require('../models')
const Post = models.post
const User = models.user

exports.index = (req, res) => {
    Post.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(post=>res.send(post))
        .catch(err => {
            res.send(err)
        })
}

exports.show = (req, res) => {
    const { id } = req.params
    Post.findOne({ 
        where: { id },
        include: [{
            model: User,
            as: "createdBy"
        }]
    })
        .then(post=>res.send(post))
        .catch(err => {
            res.send(err)
        })
}

exports.store = (req, res) => {
    const { title } = req.body
    Post.create({...req.body,
        createdAt: new Date(),
        created_by:1,
        updateAt: new Date()
    }).then(post=>res.send(post))
        .catch(err => {
            res.send(err)
        })
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}