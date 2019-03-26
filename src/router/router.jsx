import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import About from "../layout/about"
import home from "../layout/home/home"
import Users from "../layout/users"
import { connect } from "react-redux"
import Login from "../layout/login/login"
class AppRouter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.user.token) {
            return <Router >
                <Switch>
                    <Route path="/login" key="login" component={Login} />
                    <Route path="/*" key="login" ref="/login" component={Login} />
                </Switch>
            </Router>

        }


        return (
            <Router >
                <Switch>
                    <Route path="/home" key="home" component={home} />
                    <Route path="/about/:id" key="about" component={About} />
                    <Route path="/*" key="home" component={home} />
                </Switch>
            </Router >
        )




    }

}

const mapStateToProps = store => ({
    user: store.LoginStates.user
});



export default connect(mapStateToProps)(AppRouter);
