// FETCH API DATA SHOULD RESIDE HERE

// Do we need Async/Await?
// EACH SERVICE FUNCTION SHOULD TAKE token IN AS AN PARAMETER
// MOVIES HOLD TIMES ON WHAT CINEMA IT'S SHOWN

export const GetCinemas = async (token) => {
    
    // Unregonized token error
    const result = await fetch(`http://api.kvikmyndir.is/cinemas?token=${token}`)
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return "is not working";
    });
    console.log(result);

    // return Promise.all(result.map( cinema => {
    //     return cinema
    // }));
};

export const GetComingSoonMovies = (token) => {};
export const GetCinemaMovies = (token,cinema) => {};