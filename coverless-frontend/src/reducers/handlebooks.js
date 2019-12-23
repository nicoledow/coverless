const handleBooks = (state = { books: [], lists: [], currentList: '', likedBooks: [], requesting: false }, action) => {
    switch(action.type){
        case 'START_FETCHING_NEW_USER_REQ':
            return {...state, requesting: true }
        case 'START_ADDING_BOOKS_REQ':
            return {...state, books: [...state.books], currentList: action.listName, requesting: true}
        case 'START_FETCHING_LISTS':
            return {...state, requesting: true }
        case 'START_FETCHING_LIKED_BOOKS_REQUEST':
            console.log('starting to fetch liked books')
            return {...state, likedBooks: [...state.likedBooks], requesting: true }
        case 'ADD_LISTS':
            return {...state, requesting: false, lists: action.listData }
        case 'ADD_BOOKS':
            console.log('adding books in reducer', action)
            return {...state, books: [action.books], requesting: false }
        case 'START_ADDING_LIKED_BOOK':
            return {...state, requesting: true}
        case 'ADD_LIKED_BOOK':
            let likedBook = state.books.find(b => b.primary_isbn10 === action.book.isbn)
            likedBook.liked = true;
            return {...state}
        case 'ADD_LIKED_BOOKS':
            console.log('in reducer adding liked books data')
            return {...state, likedBooks: action.likedBooks, requesting: false }
        case 'START_REMOVE_LIKED_BOOK_REQ':
            return {...state, requesting: true }
        case 'ADD_USER':
            return {...state, currentUser: action.user }
        case 'UPDATE_CURRENT_LIST':
            return {...state, currentList: action.listName }
        default:
            return state;
    }
}

export default handleBooks;