import React from "react";
import "./home.css"
import DataTable from "../../components/dataTable/dataTable"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
import { Heading, Button, Box, Stack } from "grommet"
import { Add, } from "grommet-icons"
import LayerCreate from "../../components/layerCreate/layerCreate"
class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { layerCreate: undefined };
        this.openCreate = this.openCreate.bind(this)
        this.closeCreate = this.closeCreate.bind(this)
    }

    openCreate() {
        this.setState({ layerCreate: true })
    }

    closeCreate() {
        this.setState({ layerCreate: undefined });
    }

    render() {
        return (
            <div>
                <Heading textAlign="start" color="neutral-3" margin={{ vertical: "medium", horizontal: "medium" }} > Tarefas</Heading>

                <DataTable></DataTable>

                <Box align="end" pad="large"  >
                    <Box round="full" justify="end" overflow="hidden" background="neutral-3">
                        <Button icon={<Add />} hoverIndicator onClick={this.openCreate} />
                    </Box>
                </Box>

                {this.state.layerCreate && (
                    <LayerCreate isCreate={true} onClose={this.closeCreate} ></LayerCreate>
                )}
            </div>
        )
    }

}

const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);









