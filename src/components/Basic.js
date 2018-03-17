import React, { Component } from 'react';
import Editor from './Editor'
import FileUpload from './FileUpload'

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
                <FileUpload/>
                <Editor/>
            </div>

        );
    }
}

export default Basic;
