import React, {Component} from "react";
import cards from "./CardsJSON";
import CardItem from "./CardItem";
import Search from './Search';
import { types } from "../utils/ReduxStore"

class CardSelector extends Component {

    state = { searchTerm: '' };

    componentDidMount = () => {

        document.getElementById('upgraded').checked = this.props.store.getState()['checkbox']

        this.unsubscribe = this.props.store.subscribe(() => this.setState({
            searchTerm: this.props.store.getState()['searchTerm']
        }));
    };

    updateCheckbox = () => {
      this.props.store.dispatch({type: types.UPDATE_CHECKBOX, payload: document.getElementById('upgraded').checked})
    };

    render() {

        const styles = {
          cards: {
              display: 'grid',
              boxSizing: 'border-box',
              overflowY: 'scroll',
              height: 'calc(100vh - 103px - 1.5rem)',
              alignContent: 'start'
          },
            upgrade: {
                height: '1.5rem',
                backgroundColor: '#d8d8d8',
                border: '1px solid',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        };
        let cards_keys = Object.keys(cards).sort()
        cards_keys = cards_keys.filter(card => card.toLowerCase().startsWith(this.state.searchTerm.trim()));
        let cardsList = [];

        for(let i = 0; i < cards_keys.length; i++) {
            cardsList.push(
                <CardItem store={this.props.store} grid={i} value={cards_keys[i]} />
            )}

        return (
            <div>
                <Search store={this.props.store}/>
                <div style={styles.upgrade}>
                    <input onClick={this.updateCheckbox} id="upgraded" type='checkbox' /><label>upgraded</label>
                </div>
                <div style={styles.cards}>
                    {cardsList}
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

export default CardSelector