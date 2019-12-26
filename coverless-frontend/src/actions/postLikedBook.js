//sends a post request to the backend and to instantiate a LikedBook

import BASE_URL from '../index';

const postLikedBook = book => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_LIKED_BOOK' });
        fetch(`${BASE_URL}likedbooks`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(book)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(bookData){
            dispatch({ type: 'ADD_LIKED_BOOK', book: bookData })
        })
    }
}

export default postLikedBook;