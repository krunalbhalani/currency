import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrencyList from '../CurrencyList';

const App = () => (
    <Router>
        <Route exact path="/" component={CurrencyList} />
    </Router>
);

export default App;
