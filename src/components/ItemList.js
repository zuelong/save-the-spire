import React, { Component } from 'react';
import '../App.css';
import NavBar from "./ItemNavBar";
import ReactDOM from "react-dom";
import CardSelector from "./CardSelector";



class ItemList extends Component {

    componentDidMount(){
        ReactDOM.render(<CardSelector store={this.props.store}/>, document.getElementById('item-content'));
    }

    render() {

        const styles = {
            cardlist: {
                height: '100vh',
                width: '50vw',
                overflowX: 'hidden'
            },
            content: {
                height: 'calc(100vh - 60px)',
                boxSizing: 'border-box'
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
