import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2c26a4d4e0b34334b167f33df9061357',
    },
})