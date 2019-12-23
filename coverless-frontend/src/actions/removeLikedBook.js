export default function removeLikedBook(isbn) {
    console.log('going to remove liked book', isbn)
    return (dispatch) => {
        dispatch({ type: 'START_REMOVE_LIKED_BOOK_REQ'})
    }
}