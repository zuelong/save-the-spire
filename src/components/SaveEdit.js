import React, { Component } from 'react';
import { connect } from 'react-redux';
import SaveEditNavBar from "./SaveEditNavBar";
import Basic from "./Basic";
import Advanced from './Advanced';
import Converter from './Converter';

class SaveEdit extends Component{
    render(){
        let content;
        if (this.props.savePage === 'Basic') {
            content = <Basic/>
        } else if (this.props.savePage === 'Advanced') {
            content = <Advanced/>
        } else if (this.props.savePage === 'Converter') {
            content = <Converter/>
        }
        return(
            <div>
                <SaveEditNavBar/>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    savePage: state.savePage 
});

export default connect(mapStateToProps)(SaveEdit);
