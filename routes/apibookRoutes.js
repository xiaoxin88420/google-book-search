const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/googlebook/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}:keyes&key=AIzaSyAh_pacMxnIMO_2GW3PqRmmTC01jcw9CCs`)
    .then(({data}) => data.items.map(book => ({
      bookid: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    })))
    .then(apiBook => Book.find()
      .then(book => apiBook.filter(data =>
        book.every(dbData => dbData.bookid !== data.bookid))))
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router