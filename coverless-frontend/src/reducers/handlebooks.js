const handleBooks = (state = { books: [], requesting: false }, action) => {
    switch(action.type){
        case 'START_FETCHING_NEW_USER_REQ':
            return {...state, requesting: true }
        case 'START_ADDING_BOOKS_REQ':
            return {...state, books: [...state.books], requesting: true}
        case 'ADD_BOOKS':
            return {...state, books: [...state.books, action.books], requesting: false }
        case 'LIKE_BOOK':
            const likedBook = state.books.find(b => b.isbns[0].isbn10 === action.book.isbns[0].isbn10)
            likedBook.liked = true;
            return {...state, books: [...state.books, likedBook] }
        case 'ADD_USER':
            return {...state, currentUser: action.user }
        default:
            return state;
    }
}

export default handleBooks;