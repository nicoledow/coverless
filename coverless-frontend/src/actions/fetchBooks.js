export default function fetchBooks() {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_BOOKS_REQ' });
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD')
        .then(response => response.json())
        .then(books => dispatch({ type: 'ADD_BOOKS', books }))
    };
}
