const router = require('express').Router()
const {Book} = require('../models')

router.get('/book', (req, res) => {
  Book.find()
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.post('/book', (req, res) => {
  let authorsString = req.body.authors.toString()

  let saveBook = {
    bookid: req.body.bookid,
    title: req.body.title,
    authors: authorsString,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  }

  Book.create(saveBook)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.delete('/book/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove())
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router