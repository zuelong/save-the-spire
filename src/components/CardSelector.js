import React, {Component} from "react";
import cards from "./CardsJSON";
import CardItem from "./CardItem";

class CardSelector extends Component {

    render() {

        const styles = {
          cards: {
              display: 'grid',
              boxSizing: 'border-box',
              overflowY: 'scroll',
              height: 'calc(100vh - 60px)',
          }
        };

        let cards_keys = Object.keys(cards).sort();

        let cardsList = [];

        for(let i = 1; i < cards_keys.length; i++) {
            cardsList.push(
                <CardItem store={this.props.store} grid={i} value={cards_keys[i]} />
            )}

        return (
            <div style={styles.cards}>
                {cardsList}
            </div>
        );
    }
}

export default CardSelector