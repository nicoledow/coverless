const handleBooks = (state = { books: [] }, action) => {
    switch(action.type){
        default:
            console.log(state)
            console.log(action)
            return;
    }
}

export default handleBooks;