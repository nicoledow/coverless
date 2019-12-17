export default function fetchBooks(listName) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_BOOKS_REQ' });
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD`)
        .then(response => response.json())
        .then(booksData => {
            dispatch({ type: 'ADD_BOOKS', books: booksData.results.books })
        })
    };
}
