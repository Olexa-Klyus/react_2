

const accessTokenKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzM5NTgyYzNkYWIyOGMyNTIzNzVhODM4ODQxMDE4OCIsInN1YiI6IjY0YmVkYjg1ZjkxODNhMDBhY2RlMzg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aLVD1cPMxFiGJalzer3KzO8Vu2KmBE5vlHVwXiyhiUQ"

const key = "1c39582c3dab28c252375a8388410188"

const authService = {

    getAccessToken() {
        return accessTokenKey
    },
    setTokens({access}) {
        localStorage.setItem(accessTokenKey, access)
    },
    getKey() {
        return key
    }
}

export {
    authService
}