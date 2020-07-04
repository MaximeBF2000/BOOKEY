import React from 'react'
import loading_spinner from "../assets/loading_spinner.gif"

export default function Loading() {
  return (
    <div className="center-v loader">
      <img src={loading_spinner} alt="loading..." />
    </div>
  )
}
