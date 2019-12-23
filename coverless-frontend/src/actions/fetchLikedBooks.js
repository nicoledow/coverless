// export default function fetchlikedbooks() {
//     console.log('in fetchLikedBooks fn');
//     return (dispatch) => {
//         dispatch({ type: 'START_FETCHING_LIKED_BOOKS_REQUEST' })
//         fetch(`${BASE_URL}likedbooks`)
//           .then(response => response.json())
//         //   .then(likedBooks => dispatch({ type: 'ADD_LIKED_BOOKS', likedBooks}))
//           .then(data => console.log('results of fetchLikedBooks', data))
//     };
// }

export default function fetchLikedBooks() {
    console.log('in fetchLikedBooks fn');
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
        //.then(data => console.log('results of fetchlikedbooks', data))
        .then(likedBooks => dispatch({ type: 'ADD_LIKED_BOOKS', likedBooks}))
        .catch(error => console.log(error.message))
    }
}
