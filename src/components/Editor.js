import React, { Component } from 'react';
import CardList from './CardList'
import '../App.css';

class Editor extends Component {

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
                <CardList store={this.props.store}/>
            </div>

        );
    }
}

export default Editor;
