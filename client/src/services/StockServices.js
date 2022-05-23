const baseURL = 'http://localhost:9000/api/userMovies/'

const StockService = {
    get userMovies() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}

export default StockService;