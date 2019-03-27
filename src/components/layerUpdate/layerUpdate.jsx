import React from "react";
import { connect } from "react-redux"
import { Box, Layer, Heading, } from "grommet"

import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
import FormList from "../formList/formList"
class LayerUpdate extends React.Component {




    render() {
        return (
            <Layer
                position="center"

                onClickOutside={this.props.onEditOpen}
                onEsc={this.props.onEditClose}
            >
                <Box pad="medium" gap="large" width="medium">
                    <Heading level={4} margin="none">
                        Editar {this.props.list[this.props.index].title}
                    </Heading>
                </Box>
                <FormList edit={this.props.list[this.props.index]} onEditClose={this.props.onEditClose} index={this.props.index} ></FormList>


            </Layer>
        )
    }



}

const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LayerUpdate);



