import { createSelector } from 'reselect'

const currencySelector = state => state.currency

const calculatepriceincrease = (currentprice, openprice) => {
    return parseFloat(currentprice) - parseFloat(openprice)
}

const  compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const bandA = a.priceincrease
    const bandB = b.priceincrease

    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

export const getSortedCurrency = createSelector([ currencySelector ], (currency) => {  
    let data = []

    Object.keys(currency).map(key => {
        let cdata = {
            "currencyname" : currency[key].USD.FROMSYMBOL,
            "currentprice" : currency[key].USD.PRICE.toFixed(2),
            "openprice" : currency[key].USD.OPENDAY.toFixed(2),
            "priceincrease": calculatepriceincrease(currency[key].USD.PRICE.toFixed(2), currency[key].USD.OPENDAY.toFixed(2))
        }
        data.push(cdata)
    })
    return data.sort(compare)
})