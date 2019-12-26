export default function markAsRead(isbn) {
    console.log('in markAsRead fn', isbn);
    return (dispatch) => {
      dispatch({ type: 'BEGIN_MARKING_AS_READ_REQ' })
      fetch(`http://localhost:3000/likedbooks/${isbn}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({"isbn": isbn, "read": true})
      })
      .then(response => response.json())
      .then(data => console.log('finished fetch', data))
      .catch(error => console.log(error.message))
    }
}