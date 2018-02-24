import React, {Component} from "react";
import cards from "./CardsJSON";
import CardItem from "./CardItem";
import { types } from "../utils/ReduxStore"

class CardSelector extends Component {

    componentDidMount = () => {
        document.getElementById('upgraded').checked = this.props.store.getState()['checkbox']
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
              height: 'calc(100vh - 60px - 1.5rem)',
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

        let cards_keys = Object.keys(cards).sort();

        let cardsList = [];

        for(let i = 1; i < cards_keys.length; i++) {
            cardsList.push(
                <CardItem store={this.props.store} grid={i} value={cards_keys[i]} />
            )}

        return (
            <div>
                <div style={styles.upgrade}>
                    <input onClick={this.updateCheckbox} id="upgraded" type='checkbox' /><label>upgraded</label>
                </div>
                <div style={styles.cards}>
                    {cardsList}
                </div>
            </div>
        );
    }
}

export default CardSelector