export default function fetchBooks() {
console.log('in fetchBooks');
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_BOOKS_REQ' });
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD')
        .then(response => response.json())
        .then(books => dispatch({ type: 'ADD_BOOKS', books }))
    };
}

// export function fetchAstronauts() {
//     return (dispatch) => {
//       dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//       fetch('http://api.open-notify.org/astros.json')
//         .then(response => response.json())
//         .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//     };
//   }