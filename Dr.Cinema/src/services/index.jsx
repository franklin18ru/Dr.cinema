// FETCH API DATA SHOULD RESIDE HERE

// EACH SERVICE FUNCTION SHOULD TAKE token IN AS AN PARAMETER
// MOVIES HOLD TIMES ON WHAT CINEMA IT'S SHOWN

export const GetCinemas = async (token) => {
    
    const result = await fetch(`http://api.kvikmyndir.is/theaters`, {
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
        })
        .then((response) => response.json())
        .then((responseJson) => {
        
        return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
    return result
};

export const GetComingSoonMovies = async (token) => {
    const result = await fetch(`http://api.kvikmyndir.is/upcoming`, {
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
        })
        .then((response) => response.json())
        .then((responseJson) => {
        
        return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
    return result
};

export const GetCinemaMovies = async (token,cinemaId) => {
    const result = await fetch(`http://api.kvikmyndir.is/movies`, {
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
        })
        .then((response) => response.json())
        .then((responseJson) => {
        
        return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
  
    
    // ADD FILTER by cinemaId
    const cinemaMovies = result.filter(movie =>{
        const isShownInCinema = movie.showtimes.filter(showtime =>{
            const showtimeCinemaId = showtime.cinema.id
            if(showtimeCinemaId == cinemaId){return true;}
        });
        if(isShownInCinema.length != 0){return movie;}

        
    });
    return cinemaMovies
};



// export const GetTest = async (token) => {
//     const result = await fetch(`http://api.kvikmyndir.is/movies?title=Ford%20V%20Ferrari`, {
//         method: 'GET',
//         headers: {
//             'x-access-token': token,
//         }
//         })
//         .then((response) => response.json())
//         .then((responseJson) => {
        
//         return responseJson;
//     })
//     .catch((error) => {
//       console.error(error);
//       return [];
//     });
//     console.log(result);
// };