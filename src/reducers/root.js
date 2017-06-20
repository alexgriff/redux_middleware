
const defaultState = {profile: {}, loading: false}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'ASYNC_START':
      return {
        ...state,
        profile: {},
        loading: true
      }
    case 'FETCH_PROFILE':
      return {
        ...state,
        profile: {
          firstName: action.payload.firstName,
          picture: action.payload.picture
        },
        loading: false
      }
    default:
      return state
  }
  return state
}

export default reducer
