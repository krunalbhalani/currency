import { BookActionTypes, CryptoCurrencyTypes } from "../util/api"

export const fetchListCurrency = () => {
    return {
        type: CryptoCurrencyTypes.FETCH_LIST_CURRENCY,
    }
}
export const fetchListCurrencySuccess = (data) => {
    return {
        type: CryptoCurrencyTypes.FETCH_LIST_CURRENCY_SUCESS,
        payload: data,
    }
}