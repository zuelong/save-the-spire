import React, { Component } from 'react';
import CardList from './CardList'
import '../App.css';
import RelicList from "./RelicList";
import MiscList from "./MiscList";

class Editor extends Component {

    render() {

        const styles = {
            editor: {
                gridColumn: "1",
                gridRow: "2",
                display: "grid"
            },
            textarea: {
                height: "45vh",
                width: "99%"
            }
        };

        return (
            <div style={styles.editor}>
                <MiscList store={this.props.store}/>
                <CardList store={this.props.store}/>
                <RelicList store={this.props.store}/>
            </div>

        );
    }
}

export default Editor;
