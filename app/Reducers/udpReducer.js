const defaultState = {
    // data:{username:"wangmengling"},
    data:JSON.parse(localStorage.getItem('token')) || null,
    // username:"wangmengling",
    // isLoading: false
}

const udpReducer = (state = defaultState, action) => {
    console.log(action.type)
  switch (action.type) {
    case 'udp/SEND_MESSAGE':
        console.log({ data: action.payload, isLoading: false })
        return { ...state, isLoading: true };
    case 'udp/RECIVE_MESSAGE':
        console.log({ data: action.payload, isLoading: false })
        return { data: action.payload, isLoading: false };
    default:
      return state
  }
}

export default udpReducer
