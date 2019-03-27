import React from "react";
import { connect } from "react-redux"
import { Box, Text, Layer, Heading, Button } from "grommet"

import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
class LayerDelete extends React.Component {


    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);

    }

    render() {
        return (
            <Layer
                position="center"
                modal
                onClickOutside={this.props.onClose}
                onEsc={this.props.onClose}
            >
                <Box pad="medium" gap="large" width="medium">
                    <Heading level={4} margin="none">
                        Editar
                        </Heading>
                    <Text>Deseja deletar a tarefa <strong> {this.props.list[this.props.index].title} </strong> </Text>
                    <Box
                        as="footer"
                        gap="small"
                        direction="row"
                        align="center"
                        justify="end"
                        pad={{ top: "medium", bottom: "small" }}
                    >
                        <Button label="Não" onClick={this.props.onClose} color="dark-3" />

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
            </Layer>
        )
    }

    delete() {

        this.props.onClose()

        setTimeout(() => {
            let setList = Object.assign([], this.props.list);
            setList.splice(this.props.index, 1);
            this.props.ListData(setList);
        }, 100);




    }

}

const mapStateToProps = store => ({
    list: store.ListStates.list,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ListData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LayerDelete);



