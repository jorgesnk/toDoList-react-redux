import React from "react";
import "./home.css"
import Header from "../../components/header/header.compent";


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }


  
    handleChange(event) {
        this.setState({ value: event.target.value });
    }



    render() {
        return (
            <div>
                <input key='testeteste' type="text"  value={this.state.value} onChange={this.handleChange} placeholder='teste' id="nameField"></input>

            </div>

        )
    }

}


export default NameForm









