import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchListCurrency} from '../../actions/index'
import CurrencyData from '../../components/CurrencyData'
import { getSortedCurrency } from '../../selectors'

class CurrencyList extends Component
{
    componentDidMount() {
        this.props.fetchListCurrency()
    }

    render() {
        console.log('currency===', this.props.currency)
        return(
            <div>
                <CurrencyData currency={this.props.currency} />
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currency: getSortedCurrency(state),
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchListCurrency}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CurrencyList);
