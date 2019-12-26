//gets all liked_books in the api and adds the data to the store

export default function fetchLikedBooks() {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_LIKED_BOOKS_REQUEST' })
        fetch('http://localhost:3000/likedbooks', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(likedBooks => dispatch({ type: 'ADD_LIKED_BOOKS', likedBooks}))
    }
}
