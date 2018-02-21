import React, { Component } from 'react';

class FileUpload extends Component {

    handleFileSelect = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();

        let files = evt.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        let output = [];
        for (let f of files) {
            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
        }
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
