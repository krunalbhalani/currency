import React, { useState, useEffect} from 'react'

const CurrencyItems = ({currency}) => {
      console.log('CurrencyItem==', currency)
      return currency.map((c) =>
            <tr>
                  <td>{c.currencyname}</td>
                  <td>{c.currentprice}</td>
                  <td>{c.openprice}</td>
                  <td>{c.priceincrease}</td>
            </tr>
          )
   };

  export default CurrencyItems;
  