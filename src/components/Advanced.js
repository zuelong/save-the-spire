import React, { Component } from 'react';
import '../App.css';

class Advanced extends Component {

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
            const encrypted = document.getElementById("text1").value;
            let decrypted = this.xorWithKey(atob(encrypted), "key");
            document.getElementById("text2").value = JSON.stringify(JSON.parse(decrypted), null, 2);
        }
        catch(e) {
            alert('Invalid Base64')
        }
    };

    encrypt = () => {
        try {
            const decrypted = JSON.stringify(JSON.parse(document.getElementById("text2").value));
            let encrypted = btoa(this.xorWithKey(decrypted, "key"));
            document.getElementById("text1").value = encrypted;
        }
        catch(e){
            alert('Invalid JSON')
        }
    };

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
                <textarea placeholder="Enter Base64 Here" id="text1" style={styles.textarea}/>
                <br />
                <button onClick={this.decrypt}>to JSON</button>
                <button onClick={this.encrypt}>to Base64</button>
                <br />
                <textarea placeholder="Enter JSON Here" id="text2" style={styles.textarea}/>
            </div>

        );
    }
}

export default Advanced;
