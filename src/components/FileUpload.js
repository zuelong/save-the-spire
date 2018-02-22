import React, { Component } from 'react';
import { types } from '../utils/ReduxStore'

class FileUpload extends Component {

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
            return JSON.parse(decrypted);
        }
        catch(e) {
            console.log(e);
            alert('Invalid Base64')
        }
    };

    readFile = (f) => {
        let reader = new FileReader();
        reader.onload = (evt) => {
            // The file's text will be printed here
            let data = evt.target.result;
            this.props.store.dispatch({type: types.UPDATE_JSON, payload: this.decrypt(data)})
        };

        reader.readAsText(f);
    };


    //TODO: Clean up logic and make use of React states/props
    handleFileSelect = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();

        let files = evt.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        let output = [];
        let f = files[0];
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
        this.readFile(f);

        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    };

    handleDragOver = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    };

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
                <div id="drop_zone" onDragOver={this.handleDragOver} onDrop={this.handleFileSelect} style={styles.dropzone}>Drop files here</div>
                <output id="list"></output>
            </div>

        );
    }
}

export default FileUpload;
