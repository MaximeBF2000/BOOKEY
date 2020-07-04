import React, { useState } from 'react'
import default_thumbnail from "../../assets/default_book_img.jpg"

import BookDetails from "./BookDetails"

export default function Book({ book }) {
  const { volumeInfo } = book
  const { authors, title, description, imageLinks } = volumeInfo
  const { smallThumbnail, thumbnail } = imageLinks || ""

  const [showDetails, setShowDetails] = useState(false)

  const shortenDesc = str => str.slice(0, 120) + "..."

  const pickThumbnail = () => {
    if(thumbnail) return thumbnail
    if(smallThumbnail) return smallThumbnail
    return default_thumbnail
  }

  return (
    <>
      <div className="book_element">
        <div className="book_coverImg">
          <img src={pickThumbnail()} alt="book image"/>
        </div>
        <div className="book_info">
          <h3 className="book_title">{title}</h3>
          <p className="book_shortDescription">
            {description ? shortenDesc(description) : description}
          </p>        
        </div>
          <div className="book_row">
            <button className="book_goToBtn" onClick={() => setShowDetails(sd => !sd)}>See more</button>
            <p className="book_author">By: {authors ? authors[0] : "Unknown"}</p>
          </div>
      </div>
      {showDetails && <BookDetails book={book} pickThumbnail={pickThumbnail} setShowDetails={setShowDetails} />}
    </>
  )
}
