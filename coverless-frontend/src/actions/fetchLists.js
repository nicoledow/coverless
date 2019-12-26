export default function fetchLists () {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_LISTS' });
        fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD')
        .then(response => response.json())
        .then(listData => {
            dispatch({ type: 'ADD_LISTS', listData: listData.results })
        })
    }
}