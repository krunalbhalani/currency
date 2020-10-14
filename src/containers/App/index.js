import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrencyList from '../CurrencyList';
import Home from '../Home';

const App = () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/currency" component={CurrencyList} />
    </Router>
);

export default App;
