import React, { useState } from 'react'
import BookContext from '../../utils/BookContext'
import API from '../../utils/API'
import Form from '../../components/Form'
import Book from '../../components/Book'

const Home = () => {

  const [bookState, setBookState] = useState({
    search: '',
    book: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleSearchApibook = event => {
    event.preventDefault()
    API.getBook(bookState.search)
      .then(({data}) => {
        setBookState({ ...bookState, book: data, search: '' })
      })
      .catch(err => console.log(err))
  }

  bookState.handleSaveBook = bookid => {
    const saveBook = bookState.book.filter(x => x.bookid === bookid)[0]
    API.saveBook(saveBook)
      .then(() => {
        const book = bookState.book.filter(x => x.bookid !== bookid)
        setBookState({...bookState, book})
      })
  }

  return (
    <>
      <BookContext.Provider value={bookState}>
      <Form />
      {
        bookState.book.length > 0 ? (
          bookState.book.map(book => (
            <Book
              key={book.bookid}
              book={book}
              handleSaveBook={bookState.handleSaveBook} />
          ))
        ) : null
      }
      </BookContext.Provider>
    </>
  )
}

export default Home