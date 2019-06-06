import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListData } from "../../actions/index";
import { Box, Paragraph, Text, } from "grommet"
import { Trash, Edit, } from "grommet-icons"
import LayerDelete from "../layerDelete/layerDelete"
import LayerUpdate from "../layerUpdate/layerUpdate"
import LayerCreate from "../layerCreate/layerCreate"
import "./dataTablel.css"
class DataTablel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: undefined,
            index: null,
            onEdit: undefined,
            onCreate: undefined,
            edit: {
                title: ""
            }
        }
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onEditOpen = this.onEditOpen.bind(this);
        this.onEditClose = this.onEditClose.bind(this);
        this.onCreateOpen = this.onCreateOpen.bind(this);
        this.onCreateClose = this.onCreateClose.bind(this)
    }


    onEditOpen(index) {
        this.setState({ onEdit: true, index: index });
    }

    onEditClose() {
        this.setState({ onEdit: undefined })
    }

    onCreateOpen() {
        this.setState({ onCreate: true, });
    }

    onCreateClose() {
        this.setState({ onCreate: undefined })
    }

    onOpen(index) {
        this.setState({ open: true, index: index });
    }

    onClose() {
        this.setState({ open: false })
    };

    render() {
        return (
            <div>
                {this.props.list.map((value, index) => {
                    console.log(index);
                    return <Box
                        background={{ color: "ight-4" }}
                        key={`dataTTT${index}`}
                        id={`ìd${index}`}
                        className="card"
                        margin={{ horizontal: "large", vertical: "large" }}
                        pad={{ horizontal: "xxsmall", vertical: "xxsmall" }}
                    >
                        <Box direction='row' justify="between" pad={{ horizontal: "small", vertical: 'small' }} >
                            <h2 className="h2">{value.title}</h2>

                            <Box align="end" direction="row" justify="end">
                                <Edit className="Edit" onClick={() => this.onEditOpen(index)} color="neutral-1" ></Edit>
                                <Trash onClick={() => { this.onOpen(index) }} className="trash" color="status-critical" ></Trash>
                            </Box>

                        </Box>
                        <Box align="start" pad={{ horizontal: "small", vertical: 'small' }} margin={{ right: "10px" }} >
                            <Paragraph>{value.description}</Paragraph>
                        </Box>
                        <Box align="start" pad={{ left: "xxsmall", top: 'large' }} >
                            <Text color="dark-3"> {value.date} </Text>
                        </Box>

                    </Box>
                })}
                {this.state.open && (
                    <LayerDelete index={this.state.index} onClose={this.onClose}  ></LayerDelete>
                )}
                {this.state.onEdit && (
                    <LayerUpdate index={this.state.index} onClose={this.onEditClose}  ></LayerUpdate>
                )}
                {this.state.onCreate && (
                    <LayerCreate onOpen={this.onEditClose} onClose={this.onCreateClose}  ></LayerCreate>
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
