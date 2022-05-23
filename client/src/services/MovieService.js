const baseURL = 'http://localhost:9000/api/userMovies/'

const MovieService = {
    get userMovies() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    updateUser(user) {
        return fetch(baseURL + user._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }
}

export default MovieService;