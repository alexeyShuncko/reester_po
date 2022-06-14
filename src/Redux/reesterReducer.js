


const ADD_USERS = 'ADD_USERS'


let initialState = {
    users: {
        name: 'Захар', famili: 'Палазник'
    },
    autorize: true
   
}



const reesterReducer = (state = initialState, action) => {


    switch (action.type) {


        case ADD_USERS:
            return {
                ...state,
                users: action.data
            }
            default:
                return state
        }
    }

    
export const addUsers = (data) => {
    return { type: ADD_USERS, data }
}

    export default reesterReducer
    