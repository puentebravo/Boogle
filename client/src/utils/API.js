/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  ping: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
};
