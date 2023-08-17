import axios from "axios";

const authFetch = axios.create({
    baseURL: "https://api.unsplash.com"
})

export default authFetch;