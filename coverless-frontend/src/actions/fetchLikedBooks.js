//this function is reached properly, but the code within the return doesn't seem to be running - why?
import BASE_URL from '../index';

export default function fetchlikedbooks() {
    console.log('in fetchLikedBooks fn');
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_LIKED_BOOKS_REQUEST' })
        fetch(`${BASE_URL}likedbooks`)
          .then(response => response.json())
          .then(likedBooks => dispatch({ type: 'ADD_LIKED_BOOKS', likedBooks}))
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