import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  book: [],
  handleInputChange: () => { },
  handleSearchApibook: () => { },
  handleSaveBook: () => { }
})

export default BookContext