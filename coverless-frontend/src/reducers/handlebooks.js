const handleBooks = (state = { books: [], lists: [], requesting: false }, action) => {
    switch(action.type){
        case 'START_FETCHING_NEW_USER_REQ':
            return {...state, requesting: true }
        case 'START_ADDING_BOOKS_REQ':
            return {...state, books: [...state.books], requesting: true}
        case 'START_FETCHING_LISTS':
            return {...state, requesting: true }
        case 'ADD_LISTS':
            return {...state, requesting: false, lists: action.listData }
        case 'ADD_BOOKS':
            console.log('action', action)
            return {...state, books: [...state.books, action.books], requesting: false }
        case 'START_ADDING_LIKED_BOOK':
            return {...state, requesting: true}
        case 'ADD_LIKED_BOOK':
            let likedBook = state.books.find(b => b.primary_isbn10 === action.book.isbn)
            likedBook.liked = true;
            return {...state}
        case 'ADD_USER':
            return {...state, currentUser: action.user }
        default:
            return state;
    }
}

export default handleBooks;