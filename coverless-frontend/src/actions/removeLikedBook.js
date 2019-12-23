export default function removeLikedBook(isbn) {
    console.log('going to remove liked book', isbn)
    return (dispatch) => {
        dispatch({ type: 'START_REMOVE_LIKED_BOOK_REQ'})
        fetch(`http://localhost:3000/likedbooks/${isbn}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ "isbn": isbn })
        })
        .then(response => response.json())
        .then(() => dispatch({ type: 'REMOVE_FROM_LIKED_BOOKS', isbn }))
    }
}