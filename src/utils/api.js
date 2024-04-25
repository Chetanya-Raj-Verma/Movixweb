import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTY0OWYzZGRhZGM1ZDY0ZmMyODFkMmUyZWUyMDc5ZCIsInN1YiI6IjY2MWY5OTBhYzA5ZTk5MDE2M2FmZGI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hP_Za2txqJAn0PHezP68WFnib0dD1MLOrXhD_Grf4aE";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
