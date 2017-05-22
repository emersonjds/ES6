class HttpService {

    _handleErrors(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res
    }

    get(url) {
        return fetch(url) // API fetch retorna uma promise
            .then(res => this._handleErrors(res))
            .then(res => res.json()) // o retorno ja consegue ser parseado
    }

    post(url, dado) {
        return fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(res => this._handleErrors(res))
    }
}