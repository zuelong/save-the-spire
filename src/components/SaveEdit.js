import React, { Component } from 'react';
import SaveEditNavBar from "./SaveEditNavBar";

class SaveEdit extends Component{

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