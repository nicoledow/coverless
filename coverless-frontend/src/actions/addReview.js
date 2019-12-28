//sends post request to /reviews with isbn as reference to the book

export default function addReview(isbn, content) {
    return (dispatch) => {
        console.log('inside rtn dispatch fn');
        dispatch({ type: 'START_ADDING_REVIEW_REQ' })
        fetch(`http://localhost:3000/reviews/${isbn}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ "isbn": isbn, "content": content })
        })
        .then(response => response.json())
        .then(reviewObj => dispatch({ type: 'ADD_REVIEW', review: reviewObj }))
    }
}
