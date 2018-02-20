import React, { Component } from 'react';
import '../App.css';

class CardList extends Component {

    componentDidMount(){
        this.props.store.subscribe()
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

export default CardList;
