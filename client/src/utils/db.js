/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ENDPOINT = "/api/saved"

export default {
    getList: function() {
        return axios.get(ENDPOINT)
    },
    save: function(book) {
        return axios.post(ENDPOINT, book)
    },
    delete: function(id) {
        return axios.delete(`/api/saved/${id}`)
    }
}