import BASE_URL from '../index';

export default function postLikedBook(book) {
    console.log('book in fetch fn', book)
   return (dispatch) => {
       dispatch({ type: 'START_ADDING_LIKED_BOOK' });
       fetch(`${BASE_URL}/likedbooks`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           },
           body: JSON.stringify({ 
               "isbn": book.isbns[0].isbn10,
               "title": book.title,
               "author": book.author,
               "blurb": book.description,
               "book_uri": book.book_uri,
               "img_url": book.book_image
            })
       })
       .then(function(response){
           return response.json();
       })
       .then(function(object){
           console.log(object)
       })
   }
}
