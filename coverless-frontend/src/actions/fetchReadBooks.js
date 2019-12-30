//sends a get request to /books/read

export default function fetchReadBooks() {
    return (dispatch) => {
      dispatch({ type: 'START_GET_READ_BOOKS_REQ' })
      fetch('http://localhost:3000/likedbooks/read')
      .then(response => response.json())
      .then(readBooksObj => dispatch({ type: 'ADD_READ_BOOKS', readBooks: readBooksObj }))
    }
}