import React from 'react'

export default function BookDetails({ book, pickThumbnail, setShowDetails }) {
  const { volumeInfo } = book
  const { authors, title, description, imageLinks, publishedDate, categories, language } = volumeInfo
  const { smallThumbnail, thumbnail } = imageLinks || ""

  const createDetail = detail => {
    if(detail){
      if(detail.length > 1) return detail.map(d => d + ", ")
      return detail
    } else {
      return "Unknown"
    }
  }

  return (
    <div className="book_details">
      <button className="goBackBtn" onClick={() => setShowDetails(sd => !sd)}>Go back</button>
      <div className="book_card">
        <div className="book_image">
          <img src={pickThumbnail()} alt="book image" />
        </div>
        <div className="book_card_info">
          <div className="book_author"><b>By:</b> {createDetail(authors)}</div>
          <div className="book_creationDate"> <b>Published Date:</b> {publishedDate}</div>
          <div className="book_lang"><b>Language:</b> {language}</div>
          <div className="book_categories"> <b>Categories:</b> {createDetail(categories)}</div>
        </div>
      </div>
      <div className="book_resume">
        <h2 className="book_title">{title}</h2>
        <p className="book_resume_content">{description}</p>
      </div>
    </div>
  )
}