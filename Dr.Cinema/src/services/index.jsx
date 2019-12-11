export const GetAllCinemas = async (token) => {

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
    // Remove <br> and <b>
    const newResult = result.map(cinema =>{
        if(cinema.description != null){
            var desc = cinema.description.replace(/<\/?[^>]+>/gi, '');
            cinema.description = desc;
        }
        return cinema
    });
    return newResult;
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
    return result;
};

export const GetShowtimesForCurrentCinemaMovie = async (token, cinemaId, movieId) => {
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
    var returnVal;
    const movieShowtime = result.filter(movie => {
        if(movie.id == movieId){
            const isShownInCinema = movie.showtimes.filter(showtime => {
                const showtimeCinemaId = showtime.cinema.id
                if(showtimeCinemaId == cinemaId){
                    return showtime.schedule
                }
            })
            if(isShownInCinema != undefined){
                returnVal = isShownInCinema
                return null;
            }
        }
    })
    return returnVal;
}


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