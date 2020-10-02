import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import { Products } from '../components/Products/Products';
import { Shops } from '../components/Shops/Shops';

import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/shop/:nameShop" component={Products}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/" component={Shops}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
