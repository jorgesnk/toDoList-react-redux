import React from "react"
import { connect } from 'react-redux';
import { LoginData } from "../../actions/index"
import { bindActionCreators } from "redux"
import { Form, FormField, Button, Box } from "grommet"

class loginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    login() {
        this.props.LoginData({ name: this.state.user, token: this.state.password });
        window.localStorage.setItem('user', JSON.stringify({ name: this.state.user, token: this.state.password }))
    }




    render() {

        return (
            <div>
                <Box direction="column"
                    pad={{ top: "medium", horizontal: "small" }}
                    margin={{ vertical: "large", horizontal: "30%" }}
                >
                    <Form onSubmit={this.login} >
                        <FormField name="user" onChange={this.handleChange} value={this.state.user} label="Name" />
                        <FormField name="password" onChange={this.handleChange} value={this.state.password} label="password" />
                        <Box
                            justify="center"
                            margin={{ top: "large" }}
                        >
                            <Button type="submit" primary label="Submit" />
                        </Box>
                    </Form>
                </Box>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ LoginData }, dispatch);

export default connect(null, mapDispatchToProps)(loginLayout);
