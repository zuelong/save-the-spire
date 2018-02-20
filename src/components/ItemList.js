import React, { Component } from 'react';
import '../App.css';
import NavBar from "./ItemNavBar";



class ItemList extends Component {

    render() {

        const styles = {
            cardlist: {
                gridColumn: "2",
            },
            content: {
                overflowY: 'scroll',
                height: "90vh"
            },
        };

        return (
            <div style={styles.cardlist}>
                <NavBar store={this.props.store}/>
                <div id="item-content" style={styles.content}/>
            </div>
        );
    }
}

export default ItemList
