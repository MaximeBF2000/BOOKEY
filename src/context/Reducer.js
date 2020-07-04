export default (state, action) => {
  const  { type, payload } = action
  switch(type) {
    case "TOGGLE_LOADING":
      return { ...state, isLoading: !state.isLoading }
    case "GET_BOOKS":
      return { ...state, data: payload }
    case "UPDATE_QUERY":
      return { ...state, query: payload }
    default:
      return state
  }
}