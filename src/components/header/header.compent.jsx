import React from "react"
import "./header.css"
import { connect } from 'react-redux';
import { clickButton } from "../../actions/index";
import { bindActionCreators } from 'redux';

class HeaderTeste extends React.Component {


    constructor(props) {
        super(props)
        this.goToLogin = this.goToLogin.bind(this);
        this.userDiv = this.userDiv.bind(this);
        const { user } = this.props;
        console.log(user);

    }


    userDiv() {
        const { user } = this.props;

        if (user) {
            return <h2>{user}</h2>
        }
        else {

            return <div><button className="button button-outline" onClick={this.goToLogin}>Login</button></div>
        }
    }

    goToLogin() {
        this.props.clickButton("teste");
    }

    render() {
        return (
            <div className="headerLayout"> <h1> Todo List </h1>
                {this.userDiv()}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    user: store.clickState.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(HeaderTeste);
