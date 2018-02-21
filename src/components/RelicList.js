import React, { Component } from 'react';
import '../App.css';

class RelicList extends Component {

    handleChange = () =>{

    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

    render() {

        const styles = {
            basic: {
                gridColumn: "1",
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

            </div>

        );
    }
}

export default RelicList;
