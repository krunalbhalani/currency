import React from 'react'
import Table from 'react-bootstrap/Table'
import CurrencyItems from '../CurrencyItems'

const CurrencyData = ({currency}) => {
      console.log('currency11==' + currency)
      return (
        <div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Coin Name</th>
                            <th>Current Price</th>
                            <th>Opening Price</th>
                            <th>Price Increased</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CurrencyItems currency={currency}/>
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
   };

  export default CurrencyData;