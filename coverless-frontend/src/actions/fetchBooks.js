export default function fetchBooks() {

    return (dispatch) => {
        dispatch({ type: 'START_ADDING_BOOKS_REQ' })
        fetch('https://api.nytimes.com/svc/books/v3/lists/2019-12-10/hardcover-fiction.json')
        .then(response => response.json())
        .then(books => dispatch({
            type: 'ADD_BOOKS',
            books
        }))
    }
}