import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBoWbGhLN19PKtSXNGnFWf6P5mrg5bKT0U'
    }
})

export default authApi;