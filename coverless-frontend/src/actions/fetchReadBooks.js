//sends a get request to /books/read

export default function fetchReadBooks() {
    console.log('in fetchReadBooks');
    return (dispatch) => {
      console.log('in callback fn');
      dispatch({ type: 'START_GET_READ_BOOKS_REQ' })
      fetch('http://localhost:3000/likedbooks/read')
      .then(response => response.json())
      .then(readBooksObj => dispatch({ type: 'ADD_READ_BOOKS', readBooks: readBooksObj }))
    }
}