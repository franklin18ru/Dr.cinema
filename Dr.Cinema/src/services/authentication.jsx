// SHOULD ONLY HAVE FUNCTIONALITY TO GET THE AUTH TOKEN FROM http://api.kvikmyndir.is/authenticate

// SUCCESSFUL RESPONSE LOOKS LIKE THIS

// {
//     "message": "Enjoy your token it expires in 24 hours",
//     "success": true,
//     "token": "TOKEN", Not an actual token
//   }



export async function getAuthentication(username,password) {
    const result = await fetch('http://api.kvikmyndir.is/authenticate', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        password: password,
    }),
    }).then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
    return result.token;
}

