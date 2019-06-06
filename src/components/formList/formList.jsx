import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
import { Form, FormField, Button, TextArea, Box } from "grommet"


class FormList extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.isCreate) {
            this.state = {...this.props}
        } else {
            this.state = {...this.props.edit}
        }
        // console.log(this.props);


        this.hadlerChange = this.hadlerChange.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.submitData = this.submitData.bind(this);
        this.textButonSubimmt = this.textButonSubimmt.bind(this);
    }

    hadlerChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    submitData() {
        if (this.props.isCreate) {
            this.create();
            return
        }
        this.update()
    }

    update() {
        this.props.list[this.props.index] = {
            title: this.state.title,
            date: this.state.date,
            description: this.state.description,
        }
        this.props.onClose();
    }

    create() {
        let newList = Object.assign([], this.props.list);
        newList.push({
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        })
        this.props.ListData(newList);
        this.props.onClose();

    }

    render() {
        return (
            <Box margin={{ horizontal: "medium", vertical: "small" }}>
                <Form onSubmit={this.submitData} >
                    <FormField name="title" label="Name" onChange={this.hadlerChange} value={this.state.title} />
                    <FormField name="date" label="Name" onChange={this.hadlerChange} value={this.state.date} />
                    <TextArea
                        placeholder="type here"
                        value={this.state.description}
                        onChange={this.hadlerChange}
                        resize={false}
                        name="description"
                    />
                    <Box align="center" direction="row" justify="around" >
                        <Button type="submit" primary margin={{ top: "15px" }} label={this.textButonSubimmt()} />
                        <Button onClick={() => this.props.onClose()} primary margin={{ top: "15px" }} color="dark-3" label="Cancelar" />
                    </Box>

                </Form  >
            </Box>

        )

    }

    textButonSubimmt() {
        if (this.props.isCreate) {
            return "Adicionar"
        }
        return "Editar"
    }



}



const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
