import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
import { Form, FormField, Button, TextArea, Box } from "grommet"


class FormList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.edit.title,
            date: this.props.edit.date,
            description: this.props.edit.description,
        }
        this.hadlerChange = this.hadlerChange.bind(this);
        this.update = this.update.bind(this);
    }

    hadlerChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    update() {
        this.props.list[this.props.index] = {
            title: this.state.title,
            date: this.state.date,
            description: this.state.description,
        }
        this.props.onEditClose();
    }

    render() {
        return (
            <Box margin={{ horizontal: "medium", vertical: "small" }}>
                <Form onSubmit={this.update} >
                    <FormField name="title" label="Name" onChange={this.hadlerChange} value={this.state.title} />
                    <FormField name="date" label="Name" onChange={this.hadlerChange} value={this.state.date} />
                    <TextArea
                        placeholder="type here"
                        value={this.state.description}
                        onChange={this.hadlerChange}
                        resize={false}
                        name="description"
                    />
                    <Button type="submit" primary margin={{top:"15px"}} label="Editar" />
                </Form  >
            </Box>

        )

    }



}



const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
