import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import DetailsLove from './pages/DetailsLove';

function Routes(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tuyyo/13072024" exact component={DetailsLove} />
                <Route path="/details/:type/:id" exact component={Details} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;