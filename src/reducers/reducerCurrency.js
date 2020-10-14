import { CryptoCurrencyTypes } from "../util/api";
export const initialState = [];
  
  const reducerCurrency = (state = initialState, action) => {
    switch(action.type)
      {
        case CryptoCurrencyTypes.FETCH_LIST_CURRENCY_SUCESS:
          return action.payload;
        default:
          return state;
        }
    }
  export default reducerCurrency;