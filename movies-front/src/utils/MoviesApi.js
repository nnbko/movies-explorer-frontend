export class MoviesApi {
    constructor(options) {
        this.BASE_URL = options.baseUrl
    }
    _getData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то не так: ${res.status}`);
    }

    getMovie() {
        return fetch(`${this.BASE_URL}/beatfilm-movies`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(this._getData)
            .catch((error) => console.error(`Ошибка загрузки ${error}`));
    }
}


const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co'
});

export default moviesApi;