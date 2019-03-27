import React from "react"
import "./header.css"
import { connect } from 'react-redux';
import { LoginData,LogOut } from "../../actions/index"
import { bindActionCreators } from "redux";
import { Box, Text, ResponsiveContext, Button } from 'grommet';
import { Menu, Logout } from "grommet-icons"

class HeaderTeste extends React.Component {

    show = true
    constructor(props) {
        super(props)
        this.isLogin = this.isLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.setShow = this.setShow.bind(this);
        this.responseShow = this.responseShow.bind(this);
    }



    renderSize(size) {

        console.log(size);
        switch (size) {

            case "xxsmall": return "xlarge"
            case "xsmall": return "xlarge"
            case "small": return "large"
            default: return "medium"
        }

    }

    isLogin() {
        if (this.props.user.token) {
            return true
        }
        return false

    }

    logout() {
        this.props.LoginData({ user: "", token: "" })
        this.props.LogOut()
        window.localStorage.removeItem("user")
    }

    setShow(state) {
        this.show = state;
        return this.responseShow
    }

    responseShow() {
        return this.show;
    }

    render() {
        return (
            <ResponsiveContext.Consumer>
                {(size) => (
                    <Box
                        tag='header'
                        direction='row'
                        align='center'
                        justify="start"
                        background='brand'
                        pad={{ left: 'medium', right: 'medium', vertical: this.renderSize(size) }}
                        elevation='medium'
                        style={{ zIndex: '1' }}
                    >
                        {this.isLogin() ? <Button className='btnIcon' focusIndicator={true} plain={true} icon={<Menu></Menu>} ></Button> : null}
                        <Text size="xlarge" > ToDoList </Text>

                        <Box justify="end" direction="row" width="100%" >
                            {this.isLogin() ? <Button onClick={this.logout} plain={true} color="light-1" className="btnIcon" reverse={true} label="logout" icon={<Logout size="medium" ></Logout>} ></Button> : null}
                        </Box>
                    </Box>

                )}
            </ResponsiveContext.Consumer>

        )
    }
}






const mapStateToProps = store => ({
    user: store.LoginStates.user,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ LoginData,LogOut }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(HeaderTeste);
