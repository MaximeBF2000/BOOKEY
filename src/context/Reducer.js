export const ACTIONS = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
  GET_BOOKS: "GET_BOOKS",
  UPDATE_QUERY: "UPDATE_QUERY",
  RETURN_STATE: "RETURN_STATE"
}

export default (state, action) => {
  const  { type, payload } = action
  switch(type) {
    case ACTIONS.TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading }
    case ACTIONS.GET_BOOKS:
      return { ...state, data: payload }
    case ACTIONS.UPDATE_QUERY:
      return { ...state, query: payload }
    case ACTIONS.RETURN_STATE:
      return state
    default:
      return state
  }
}