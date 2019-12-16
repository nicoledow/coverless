import BASE_URL from '../index';

const postLikedBook = book => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_LIKED_BOOK' });
        console.log('did 1st dispatch')
        fetch(`${BASE_URL}/likedbooks`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({ "title": book.title })
        })
        .then(function(response){
            return response.json();
        })
        .then(function(bookData){
            dispatch({ type: 'ADD_LIKED_BOOK', book: bookData })
        })
        .catch(function(error){
            console.log(error.message);
        })
    }
}

export default postLikedBook;

// export const createBook = book => {
//     return dispatch =>
//       fetch("http://localhost:3000/books", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(book)
//       })
//         .then(response => response.json())
//         .then(book => {
//           dispatch(addBook(book));
//         });
//   };