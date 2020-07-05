import React, { createContext, useReducer } from "react"
import Reducer, { ACTIONS } from "./Reducer"
import axios from "axios"

import { GOOGLE_BOOK_API_URI } from "../config.json"


const initialState = {
  data: [],
  query: "",
  isLoading: false
}

export const GeneralContext = createContext(initialState)


export const GeneralProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const API_URI = GOOGLE_BOOK_API_URI + state.query

  // ACTIONS

  const toggleLogin = () => dispatch({type: ACTIONS.TOGGLE_LOADING })

  const fetchBooks = async () => {
    if(state.query){
      try{
        toggleLogin()
        const res = await axios.get(API_URI)
        dispatch({type: ACTIONS.GET_BOOKS, payload: res.data.items})
        toggleLogin()
      } catch(err){
        console.error(err)
      }
    }
  }
  

  const updateQuery = newValue => dispatch({type: ACTIONS.UPDATE_QUERY, payload: newValue})

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

