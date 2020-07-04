import 'regenerator-runtime/runtime'
import React, { useContext, useEffect } from 'react'
import ReactDOM from "react-dom"
import "./app.scss"
import { GeneralContext, GeneralProvider } from "./context/Context"

import Navbar from "./modules/ui/Navbar"
import Loading from "./modules/Loading"
import BooksGrid from "./modules/ui/BooksGrid"

// APPLICATION POUR CHERCHER DES LIVRES, AVOIR LE RESUME...
// ET PEUT ETRE PLUS TARD AJOUTER A SA LISTE D'ENVIE, AVOIR DES SUGGESTION DE LIVRES...

const Provider = () => (
  <GeneralProvider>
    <App />
  </GeneralProvider>
)

export default function App() {
  const { isLoading, data, query, toggleLogin, fetchBooks } = useContext(GeneralContext)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      {
        data.length === 0 && !isLoading ? 
        <p className="notfound">No books found...</p> 
        :
        <BooksGrid />
      }
    </>
  )
}

ReactDOM.render(<Provider />, document.querySelector("#root"))