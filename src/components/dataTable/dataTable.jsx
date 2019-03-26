import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListData } from "../../actions/index";
import { Box, Paragraph, Text, Layer, Heading, Button } from "grommet"
import { Trash, Edit, } from "grommet-icons"
import "./dataTablel.css"
class DataTablel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: undefined, index: null,
            onEdit: undefined,
            edit: {
                title: ""
            }
        }
        this.delete = this.delete.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onEditOpen = this.onEditOpen.bind(this);
        this.onEditClose = this.onEditClose.bind(this);
    }


    onEditOpen(index) {
        this.setState({ onEdit: true, index: index });
    }

    onEditClose() {
        this.setState({ onEdit: undefined })
    }

    onOpen(index) {
        this.setState({ open: true, index: index });
    }

    onClose() {
        this.setState({ open: false })
    };

    delete() {
        console.log("teste")
        this.setState({ open: undefined })
        let setList = Object.assign([], this.props.list);
        setList.splice(this.state.index, 1);
        this.props.ListData(setList);
    }


    render() {
        return (
            <div>
                {this.props.list.map((value, index) => {
                    console.log(index);
                    return <Box
                        background={{ color: "ight-4" }}
                        key={`dataTTT${index}`}

                        className="card"
                        margin={{ horizontal: "large", vertical: "large" }}
                        pad={{ horizontal: "xxsmall", vertical: "xxsmall" }}
                    >


                        <Box direction='row' justify="between" pad={{ horizontal: "small", vertical: 'small' }} >
                            <h2 className="h2">{value.title}</h2>

                            <Box align="end" direction="row" justify="end">
                                <Edit className="Edit" onClick={()=>this.onEditOpen(index)} color="neutral-1" ></Edit>
                                <Trash onClick={() => { this.onOpen(index) }} className="trash" color="status-critical" ></Trash>
                            </Box>

                        </Box>
                        <Box align="start" pad={{ horizontal: "small", vertical: 'small' }} margin={{ right: "10px" }} ><Paragraph>doadsa dsahkjhdjksa hsdkjhjkdsjkhdkjahdh kjsahdkjsak jhdksahdkshajhdjk sahdksjhaksjdhdoijidsj djioajsdo</Paragraph></Box>
                        <Box align="start" pad={{ left: "xxsmall", top: 'large' }} ><Text color="dark-3"> 23/02/2019 </Text></Box>


                    </Box>
                })}
                {this.state.open ? <Layer
                    position="center"
                    modal
                    onClickOutside={this.onEditClose}
                    onEsc={this.onClose}
                >
                    <Box pad="medium" gap="large" width="medium">
                        <Heading level={4} margin="none">
                            Editar
                        </Heading>
                        <Text>Deseja deletar a tarefa <strong> {this.props.list[this.state.index].title} </strong> </Text>
                        <Box
                            as="footer"
                            gap="small"
                            direction="row"
                            align="center"
                            justify="end"
                            pad={{ top: "medium", bottom: "small" }}
                        >
                            <Button label="Não" onClick={this.onClose} color="dark-3" />

                            <Button
                                label={
                                    <Text color="white">
                                        <strong>Deletar</strong>
                                    </Text>
                                }
                                onClick={() => this.delete()}
                                primary
                                color="status-critical"
                            />
                        </Box>
                    </Box>
                </Layer> : null}
                {this.state.onEdit && (
                    <Layer
                        position="center"
                        modal
                        onClickOutside={this.onEditClose}
                        onEsc={this.onEditClose}
                    >
                        <Box pad="medium" gap="small" width="medium">
                            <Heading level={3} margin="none">
                                Editar
                        </Heading>
                            <Text>Deseja Editar <strong> {this.props.list[this.state.index].title} </strong> </Text>
                            <Box
                                as="footer"
                                gap="small"
                                direction="row"
                                align="center"
                                justify="end"
                                pad={{ top: "medium", bottom: "small" }}
                            >
                                <Button label="Não" onClick={this.onEditClose} color="dark-3" />

                                <Button
                                    label={
                                        <Text color="white">
                                            <strong>Deletar</strong>
                                        </Text>
                                    }
                                    onClick={this.delete}
                                    primary
                                    color="status-critical"
                                />
                            </Box>
                        </Box>
                    </Layer>
                )}
            </div>
        );
    }







}



const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DataTablel);
