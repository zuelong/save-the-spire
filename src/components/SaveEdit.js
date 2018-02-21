import React, { Component } from 'react';
import SaveEditNavBar from "./SaveEditNavBar";
import ReactDOM from "react-dom";
import Basic from "./Basic";

class SaveEdit extends Component{

    componentDidMount(){
        ReactDOM.render(<Basic store={this.props.store}/>, document.getElementById('save-edit-content'));
    }

    render(){
        return(
            <div>
                <SaveEditNavBar store={this.props.store}/>
                <div id="save-edit-content" />
            </div>
        )
    }
}

export default SaveEdit