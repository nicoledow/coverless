const handleBooks = (state = { books: [], lists: [], currentList: '', likedBooks: [], requesting: false }, action) => {
    switch(action.type){
        case 'START_FETCHING_NEW_USER_REQ':
            return {...state, requesting: true }
        case 'START_ADDING_BOOKS_REQ':
            return {...state, books: [...state.books], currentList: action.listName, requesting: true}
        case 'START_FETCHING_LISTS':
            return {...state, requesting: true }
        case 'START_FETCHING_LIKED_BOOKS_REQUEST':
            return {...state, likedBooks: [...state.likedBooks], requesting: true }
        case 'ADD_LISTS':
            return {...state, requesting: false, lists: action.listData }
        case 'ADD_BOOKS':
            return {...state, books: [action.books], requesting: false }
        case 'START_ADDING_LIKED_BOOK':
            return {...state, requesting: true}
        case 'ADD_LIKED_BOOK':
            let likedBook = state.books.find(b => b.primary_isbn10 === action.book.isbn) //is this unneccessary? Backend is handling this?
            return {...state}
        case 'ADD_LIKED_BOOKS':
            return {...state, likedBooks: action.likedBooks, requesting: false }
        case 'START_REMOVE_LIKED_BOOK_REQ':
            return {...state, requesting: true }
        case 'REMOVE_FROM_LIKED_BOOKS':
            let likedBooks = state.books.filter(b => b.isbn !== action.isbn)
            return {...state, books: likedBooks, requesting: false }
        case 'ADD_USER':
            return {...state, currentUser: action.user }
        case 'UPDATE_CURRENT_LIST':
            return {...state, currentList: action.listName }
        default:
            return state;
    }
}

export default handleBooks;