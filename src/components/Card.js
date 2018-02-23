import React, { Component } from 'react';
import { types } from '../utils/ReduxStore';

class Card extends Component {

    state = {hover: false, color: '#ef3e36'};

    toggleHover = () => {
            this.setState({hover: !this.state.hover});
            this.state.hover ? this.setState({color: '#ef3e36'}) : this.setState({color: '#df2e26'});
    };

    deleteCard = () => {
        let data = this.props.store.getState()['data'];
        let cards = data.cards;
        cards.splice(this.props.number, 1);
        data.cards = cards;
        this.props.store.dispatch({ type: types.UPDATE_JSON, payload: data})
    };

    render() {

        const styles = {
            card: {
                gridRow: this.props.gridRow,
                backgroundColor: this.state.color,
                border: '1px solid #df2e26',
                minHeight: '40px',
                maxHeight: '40px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'default',
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.deleteCard} style={styles.card}>
                {this.props.name}
            </div>

        );
    }
}

export default Card;
