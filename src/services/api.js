import axios from "axios";
import { API_Currency_ROOT } from "../util/api";

const getCurrency = (action) => {
    const url = `${API_Currency_ROOT}/blockchain/list?api_key=ec6b6cd7e7cabd3f83f24a9ed1e6c4d51af4d0d8c199fdd6480f4794eae6f6ac`;
    return axios
        .get(url)
        .then(response => {
        return response;
        })
        .catch(err => {
        return console.error(err);
        });
}

const getCurrencyPrice = (CurrencyString) => {
    const url = `${API_Currency_ROOT}/pricemultifull?fsyms=${CurrencyString}&tsyms=USD&api_key=ec6b6cd7e7cabd3f83f24a9ed1e6c4d51af4d0d8c199fdd6480f4794eae6f6ac`;
    return axios
        .get(url)
        .then(response => {
        return response;
        })
        .catch(err => {
        return console.error(err);
        });
}

    export {
        getCurrency,
        getCurrencyPrice,
    }