const { model, Schema } = require('mongoose')

const Book = new Schema ({
  bookid: String,
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
})

module.exports = model('Book', Book)