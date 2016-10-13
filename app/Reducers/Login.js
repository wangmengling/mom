const defaultState = {
    username:'dddddddddddddd'
}

const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
        
        return action.payload;
    default:
      return state
  }
}

export default login
