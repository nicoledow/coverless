//fetches all books from the listName passed in and adds the data to the store

export default function fetchBooks(listName) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_BOOKS_REQ', listName });
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD`)
        .then(response => response.json())
        .then(booksData => {
            dispatch({ type: 'ADD_BOOKS', books: booksData.results.books, listName })
        })
    };
}
