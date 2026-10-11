import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.weatherapi.com/v1/forecast.json`,
    params: {
        key: process.env.API_KEY,
        lang: "PT"
    }
});