//this function is reached properly, but the code within the return doesn't seem to be running - why?

export default function fetchLikedBooks() {
    console.log('in fetchlikedbooks')
    return (dispatch) => {
        console.log('going to dispatch')
        dispatch({ type: 'START_FETCHING_LIKED_BOOKS' })
        fetch('http://localhost:3000/likedbooks')
        .then(response => response.json())
        .then(function(data){
            console.log('finished fetch', data)
        })
        .catch(function(error){
            console.log(error.message)
        })
    }
}