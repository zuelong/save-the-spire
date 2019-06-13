import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LosslessJSON from 'lossless-json';

class Advanced extends Component {

    state = {
        base64: '',
        json: '',
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

    decrypt = () => {
        try {
            const encrypted = this.state.base64;
            let decrypted = this.xorWithKey(atob(encrypted), "key");
            this.setState({json: LosslessJSON.stringify(LosslessJSON.parse(decrypted), null, 2)});
        }
        catch(e) {
            alert('Invalid Base64')
        }
    };

    encrypt = () => {
        try {
            const decrypted = this.state.json;
            let encrypted = btoa(this.xorWithKey(decrypted, "key"));
            this.setState({base64: encrypted})
        }
        catch(e){
            alert('Invalid JSON')
        }
    };

    componentDidMount() {
        this.receiveData(this.props.data);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.receiveData(nextProps.data);
        }
    }

    receiveData(data) {
        const json = LosslessJSON.stringify(data, null, 2);
        const base64 = btoa(this.xorWithKey(json, "key"))
        this.setState({json, base64});
    }

    handleBase64Change = (event) => {
        this.setState({base64: event.target.value});
    }

    handleJsonChange = (event) => {
        this.setState({json: event.target.value});
    }

    render() {

        const styles = {
            textbox: {
                gridColumn: "1",
            },
            textarea: {
                height: "40vh",
                width: "99%"
            }
        };

        return (
            <div style={styles.textbox}>
                <textarea placeholder="Enter Base64 Here" style={styles.textarea} value={this.state.base64} onChange={this.handleBase64Change}/>
                <br />
                <button onClick={this.decrypt}>to JSON</button>
                <button onClick={this.encrypt}>to Base64</button>
                <br />
                <textarea placeholder="Enter JSON Here" style={styles.textarea} value={this.state.json} onChange={this.handleJsonChange}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    data: state.data 
});

export default connect(mapStateToProps)(Advanced);
