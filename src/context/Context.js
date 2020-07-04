import React, { createContext, useReducer } from "react"
import Reducer from "./Reducer"
import axios from "axios"


const initialState = {
  data: [],
  query: "",
  isLoading: true
}

export const GeneralContext = createContext(initialState)

export const GeneralProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${state.query}`

  // ACTIONS

  const toggleLogin = () => dispatch({type: "TOGGLE_LOADING"})

  const fetchBooks = async () => {
    if(state.query){
      try{
        const res = await axios.get(API_URI)
        dispatch({type: "GET_BOOKS", payload: res.data.items})
        toggleLogin()
      } catch(err){
        console.error(err)
      }
    } else {
      toggleLogin()
    }
  }
  

  const updateQuery = newValue => dispatch({type: "UPDATE_QUERY", payload: newValue})

  return (
    <GeneralContext.Provider value={{
      data: state.data,
      query: state.query,
      isLoading: state.isLoading,
      toggleLogin,
      fetchBooks,
      updateQuery
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

