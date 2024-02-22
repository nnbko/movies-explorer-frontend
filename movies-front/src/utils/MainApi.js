class MainApi {
    constructor(options) {
        this.BASE_URL = options.baseUrl
    }
    _getData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    register(name, email, password) {
        return fetch(`${this.BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

            .then(this._getData)
    }

    authorize(email, password) {
        return fetch(`${this.BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

            .then(this._getData)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                }
            })
    }

    getUserInfo(token) {
        return fetch(`${this.BASE_URL}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._getData)
    }

    setUserInfo(data, token) {
        return fetch(`${this.BASE_URL}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
            .then(this._getData)
    }


    getMovie(token) {
        return fetch(`${this.BASE_URL}/movies`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._getData)
    }

    addMovie(data, token) {
        return fetch(`${this.BASE_URL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                year: data.year,
                duration: data.duration,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
            .then(this._getData)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this.BASE_URL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._getData)
    }
    checkToken(token) {
        return fetch(`${this.BASE_URL}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(this._getData)
    }

}

const apiMain = new MainApi({
    baseUrl: "https://api.nnbkodip.nomoredomainsmonster.ru",
});

export default apiMain