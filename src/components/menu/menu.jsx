import React from "react"
import { Layer } from 'grommet';

class MenuLayer extends React.Component {


    render() {
        if (this.props.show) {
            return (
                
                <Layer position="right"
                    full="vertical"
                    modal
                    onClickOutside={this.props.show}
                    onEsc={this.props.show} >

                    {this.props.children}
                </Layer>

            )
        }
        return null


    }

}

export default MenuLayer;