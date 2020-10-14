import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { fetchListCurrencySuccess } from "../actions";
import { getCurrency, getCurrencyPrice } from "../services/api";
import { CryptoCurrencyTypes } from "../util/api";

  function* handleCurrencyFetchList() {
    try {
      const res = yield call(getCurrency);
      const payload = res ? res.data.Data : {};
      let CurrencyString =''
      let i = 0
      if(payload){
        Object.keys(payload).slice(0, 10).map((key => {
            if(i == 0) {
              CurrencyString = payload[key].symbol
            } else {
              CurrencyString = CurrencyString + ',' + payload[key].symbol
            }
            i = i + 1
        }))
        const resPrice = yield call(getCurrencyPrice,CurrencyString);
        const payloadAll = resPrice ? resPrice.data.RAW : {};
        yield put(fetchListCurrencySuccess(payloadAll));
      }
    } catch (err) {
      console.error(err);
    }
  }

  function* watchFetchListCurrency() {
    yield takeLatest(CryptoCurrencyTypes.FETCH_LIST_CURRENCY, handleCurrencyFetchList);
  }
  
  function* Saga() {
    yield all([fork(watchFetchListCurrency)]);
  }
  
  export default Saga;