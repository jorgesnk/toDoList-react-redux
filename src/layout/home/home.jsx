import React from "react";
import "./home.css"
import DataTable from "../../components/dataTable/dataTable"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ListData } from "../../actions/index"
import { Heading } from "grommet"
class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addData = this.addData.bind(this);
    }





    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    addData() {
        let toAdd = Object.assign([], this.props.list);
        toAdd.push({
            title: 'teste' + Number((Math.random() * 2)).toFixed(1),
            description:"teste description",
            date:"25/12/1995",
        })
        this.props.ListData([])
        this.props.ListData(toAdd);
    }


    render() {
        return (
            <div>
                <Heading textAlign="start" color="neutral-3" margin={{ vertical: "medium", horizontal: "medium" }} > Tarefas</Heading>
                <DataTable></DataTable>
                <button onClick={this.addData} >Add</button>
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









