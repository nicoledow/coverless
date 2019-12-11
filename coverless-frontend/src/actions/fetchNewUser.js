export default function fetchNewUser(email, password) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_NEW_USER_REQ'});
        console.log('start_fetching_new_user req initiated')
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            console.log(object);
        })
        .catch(function(error){
            console.log(error.message);
        })
    }
}