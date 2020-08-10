import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemNavBar from "./ItemNavBar";
import CardSelector from "./CardSelector";
import RelicSelector from './RelicSelector';

class ItemList extends Component {
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
            }
        };

        let content;
        if (this.props.itemPage === 'Cards') {
            content = <CardSelector/>
        } else if (this.props.itemPage === 'Relics') {
            content = <RelicSelector/>
        }

        return (
            <div style={styles.cardlist}>
                <ItemNavBar/>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    itemPage: state.itemPage 
});


export default connect(mapStateToProps)(ItemList);
