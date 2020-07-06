import React, { useState } from 'react'
import default_thumbnail from "../../assets/default_book_img.jpg"

import BookDetails from "./BookDetails"

export default function Book({ book }) {
  const { volumeInfo } = book
  const { authors, title, description, imageLinks } = volumeInfo
  const { smallThumbnail, thumbnail } = imageLinks || ""

  const [showDetails, setShowDetails] = useState(false)
  const toggleDetails = () => setShowDetails(ps => !ps)

  const shortenDesc = str => str.slice(0, 120) + "..."

  return (
    <>
      {showDetails && <BookDetails book={book} toggleDetails={toggleDetails} />}
      <div className="book_element">
        <div className="book_coverImg">
          <img src={thumbnail || smallThumbnail || default_thumbnail} alt="book image"/>
        </div>
        <div className="book_info">
          <h3 className="book_title">{title}</h3>
          <p className="book_shortDescription">
            {description ? shortenDesc(description) : description}
          </p>        
        </div>
          <div className="book_row">
            <button className="book_goToBtn" onClick={toggleDetails}>See more</button>
            <p className="book_author">By: {authors ? authors[0] : "Unknown"}</p>
          </div>
      </div>
    </>
  )
}
