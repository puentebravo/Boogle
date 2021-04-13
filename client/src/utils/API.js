/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = `&key=${process.env.API_KEY}`;

export default {
  ping: function (query) {
    return axios.get(ENDPOINT + query + KEY);
  },
};
