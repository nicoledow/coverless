const handleBooks = (state = { books: [], requesting: false }, action) => {
    switch(action.type){
        case 'START_FETCHING_NEW_USER_REQ':
            return {...state, requesting: true }
        case 'ADD_USER':
            return {...state, currentUser: action.user }
        default:
            return state;
    }
}

export default handleBooks;