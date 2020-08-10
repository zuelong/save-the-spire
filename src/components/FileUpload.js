import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../utils/ReduxStore'
import { bindActionCreators } from 'redux';
import * as LosslessJSON from 'lossless-json';

class FileUpload extends Component {
    state = {
        file: null
    }

    convertToByteArray = (data) => {
        let byte_array = [];

        for (let i = 0; i < data.length; i++){
            byte_array.push(data.charCodeAt(i));
        }

        return byte_array
    };

    xorWithKey = (data, key) => {
        let out = [];
        data = this.convertToByteArray(data);
        key = this.convertToByteArray(key);

        for(let i = 0; i < data.length; i++) {
            out.push(String.fromCharCode(data[i] ^ key[i % key.length]));
        }

        return out.join('');
    };

    decrypt = (encrypted) => {
        try {
            let decrypted = this.xorWithKey(atob(encrypted), "key");
            return LosslessJSON.parse(decrypted);
        }
        catch(e) {
            console.log(e);
            alert('Invalid Base64')
        }
    };

    readFile = (f) => {
        let reader = new FileReader();
        reader.onload = (evt) => {
            let data = evt.target.result;
            this.props.actions.updateJson(this.decrypt(data));
        };

        reader.readAsText(f);
    };

    handleFileSelect = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();

        let files = evt.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        let f = files[0];

        this.setState({file: f});
        this.readFile(f);

        this.props.actions.setFileName(f.name);
    };

    handleDragOver = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    };

    createFileInfo() {
        const file = this.state.file;
        if (!file) {
            return null;
        }
        const name = escape(file.name);
        const type = file.type || 'n/a';
        const size = file.size;
        const lastModified = file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a';
        return (
            <ul>
                <li>
                    <strong>{name}</strong> ({type}) - {size} bytes, last modified: {lastModified}
                </li>
            </ul>
        );
    }

    render() {

        const styles = {
            fileupload: {
                gridColumn: "1",
                gridRow: "1",
                padding: '10px',
                margin: '10px',
                border: '1px solid #ccc',
            },
            dropzone: {
                border: '2px dashed #bbb',
                borderRadius: '5px',
                padding: '25px',
                textAlign: 'center',
                font: '20pt bold',
                color: '#bbb',
            },
            textarea: {
                height: "45vh",
                width: "99%"
            }
        };

        return (
            <div style={styles.fileupload}>
                <div id="drop_zone" onDragOver={this.handleDragOver} onDrop={this.handleFileSelect} style={styles.dropzone}>Drop file here</div>
                {this.createFileInfo()}
                <output id="list"></output>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(FileUpload);
