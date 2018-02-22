import React, { Component } from 'react';
import Editor from './Editor'
import FileUpload from './FileUpload'
import '../App.css';

class Basic extends Component {

    render() {

        const styles = {
            basic: {
                gridColumn: "1",
                display: 'grid'
            },
            textarea: {
                height: "45vh",
                width: "99%"
            },
            fileupload: {
                gridColumn: "1",
            }
        };

        return (
            <div style={styles.basic}>
                <FileUpload store={this.props.store}/>
                <Editor store={this.props.store}/>
            </div>

        );
    }
}

export default Basic;
