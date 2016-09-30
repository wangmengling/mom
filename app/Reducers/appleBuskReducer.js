/*
*appleBuskReducer.js
*
*/

const defaultState = {
    isPicking: false,
    newAppleId: 1,
    apples: [
        {
            id: 0,
            weight: 235,
            isEaten: false
        },
        {
            id: 44444,
            weight: 299,
            isEaten: false
        },
        {
            id: 45,
            weight: 89,
            isEaten: false
        }
    ]
}

const defaultState1 = {
    isPicking: false,
    newAppleId: 55555,
    apples: [
        {
            id: 44444,
            weight: 299,
            isEaten: false
        }
    ]
}

export default (state = defaultState, action) => {

    let newState ;
    // 

    switch (action.type) {
        case 'apple/BEGIN_PICK_APPLE':
            newState = Object.assign({}, state, {
                isPicking: true
            });
            return newState;

        case 'apple/DONE_PICK_APPLE':
            newState = Object.assign({}, state, {
                apples: [
                    ...state.apples,
                    {
                        id: state.newAppleId,
                        weight: action.payload,
                        isEaten: false
                    }
                ],
                newAppleId: state.newAppleId + 1,
                isPicking: false
            })
            return newState;

        case 'apple/FAIL_PICK_APPLE':
            //这里只是简单处理
            newState = Object.assign({}, state, {
                isPicking: false
            });
            return newState;

        case 'apple/EAT_APPLE':
        
            newState = Object.assign({}, state, {
                apples: [
                    ...state.apples.slice(0, action.payload),
                    Object.assign({}, state.apples[action.payload], { isEaten: true }),
                    ...state.apples.slice(action.payload + 1)
                ]
            })
            console.log(newState)
            return newState;

        default:
        // console.log(state)
            return state;
    }

};