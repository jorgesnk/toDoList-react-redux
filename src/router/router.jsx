import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import About from "../layout/about"
import { connect } from "react-redux"
import Login from "../layout/login/login"
const home = React.lazy(() => import('../layout/home/home'));

class AppRouter extends React.Component {



    render() {

        if (!this.props.user.token) {
            return <HashRouter>
                <Router >
                    <Switch>
                        <Route path="/login" key="login" ref="/login" component={Login} />
                        <Route path="/*" key="login" ref="/login" component={Login} />
                    </Switch>
                </Router>
            </HashRouter>

        }


        return (
            <Router >
                <HashRouter>
                    <Switch>
                        <React.Suspense fallback={<h1>Rendering...</h1>}>
                            <Route path="/home" key="home" component={home} />
                            <Route path="/about/:id" key="about" component={About} />
                            <Route path="/*" component={home} />
                        </React.Suspense>
                    </Switch>
                </HashRouter>

            </Router >
        )




    }

}

const mapStateToProps = store => ({
    user: store.LoginStates.user
});



export default connect(mapStateToProps)(AppRouter);
