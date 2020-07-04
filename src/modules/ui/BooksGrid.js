import React, { useContext } from 'react'
import { GeneralContext } from "../../context/Context"

import Book from "./Book"

export default function BooksGrid() {
  const { data } = useContext(GeneralContext)

  return (
    <div className="books_grid">
      {data.map(book => (
        <Book book={book} key={Math.random()} />
      ))}
    </div>
  )
}
