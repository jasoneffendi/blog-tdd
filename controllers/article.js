var Article = require('../models/article')

class article{
    static get(req,res) {
        Article.find({})
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static post(req,res) {
        console.log(req.body)
        var newArticle = new Article(req.body)

        newArticle.save()
        .then((user, err) => {
            if(err) return res.send(err)
            
            res.send(user)
        })
    }

    static put(req,res) {
        console.log(req.params.id)
        console.log(req.body)
        // Article.findOne({_id: req.params.id})
        // .then((article, err) => {
        //     if(err) return res.send(err)
        //     console.log(article)
        //     res.send(article)
        // })
        Article.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        })
        .then((result, err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static del(req,res) {
        Article.findOneAndRemove({_id: req.params.id})
        .then((result,err) => {
            if(err) return res.send(err)
            console.log(result)
            res.send(result)
        })
        // res.send(req.body)
    }
}

module.exports = article