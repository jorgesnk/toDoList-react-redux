import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../layout/about"
import home from "../layout/home/home"
import Users from "../layout/users"

function AppRouter() {



    return (
        
        <Router >
            <Switch>
                <Route path="/home" key="home" component={home} />
                <Route path="/about/:id" key="about" component={About} />
                <Route path="/users/" key="user" component={Users} />
                <Route path="/*" key="user" component={Users} />
            </Switch>
        </Router>


    );
}

export default AppRouter;