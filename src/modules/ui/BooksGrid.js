import React, { useContext } from 'react'
import { GeneralContext } from "../../context/Context"

import Book from "./Book"

export default function BooksGrid() {
  const { data } = useContext(GeneralContext)

  return (
    <div className="books_grid">
      {data.map(book => {
        const { publishedDate, authors } = book.volumeInfo
        if(
          authors
          && parseFloat(publishedDate) > 1850
        ){
          return <Book book={book} key={Math.random()} />
        }
      })}
    </div>
  )
}
