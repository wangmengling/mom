const defaultState = {
    // data:{username:"wangmengling"},
    data:null,
    // username:"wangmengling",
    isLoading: false
}

const login = (state = defaultState, action) => {
    console.log(action.type)
  switch (action.type) {
    case 'LOGIN_IN':
        return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
        console.log({ data: action.payload, isLoading: false })
        return { data: action.payload, isLoading: false };
    default:
      return state
  }
}

export default login
