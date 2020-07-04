import React, { useContext } from 'react'
import { GeneralContext } from "../context/Context"

import { AiOutlineSearch } from "react-icons/ai"

export default function Search() {
  const {query, updateQuery, fetchBooks} = useContext(GeneralContext)
  
  const handleChange = e => {
    updateQuery(e.target.value)
    fetchBooks()
  }

  return (
    <div className="search_container">
      <input type="text" className="search" placeholder="Search for books or authors..." value={query} onChange={handleChange} />
      <AiOutlineSearch className="search_icon" />
    </div>
  )
}
