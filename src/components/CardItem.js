import React, {PureComponent} from "react";
import { types } from "../utils/ReduxStore"

class CardItem extends PureComponent {

    state = {hover: false, color: '#27cecb'};

    toggleHover = () => {
        let hover = !this.state.hover;
        this.setState({hover: hover});
        hover ? this.setState({color: '#17bebb'}) : this.setState({color: '#27cecb'});
    };

    addCard = () => {
        let data = this.props.store.getState()['data'];
        let cards = data.cards;
        data.cards = [...cards, {upgrades: 0, id: this.props.value}];
        this.props.store.dispatch({type: types.UPDATE_JSON, payload: data});
    };

    render() {

        const styles = {
            carditem: {
                textAlign: 'center',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.color,
                border: '1px solid #17bebb',
                cursor: 'default',
            },
            a: {
                width: '100%',
                cursor: 'default',
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.addCard} style={styles.carditem}>
                {this.props.value}
            </div>
        );
    }
}

export default CardItem