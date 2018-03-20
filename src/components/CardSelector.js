import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cards from "./CardsJSON";
import Item from "./Item";
import Search from './Search';
import { actions } from "../utils/ReduxStore"

class CardSelector extends Component {

    state = {
        upgraded: false,
        searchTerm: '',
    }

    sortedCards = Object.keys(cards).sort();

    onSearchTermChanged = (searchTerm) => {
        this.setState({searchTerm});
    };

    toggleCheckbox = () => {
        this.setState({upgraded: !this.state.upgraded});
    };

    addCard(card) {
        this.props.actions.addCard({
            upgrades: this.state.upgraded ? 1 : 0, 
            id: card
        });
    }

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

        const cardsList = this.sortedCards
            .filter(card => card.toLowerCase().startsWith(this.state.searchTerm.trim()))
            .map((card, i) => <Item type="CardItem" onClick={() => this.addCard(card)} name={card + (this.state.upgraded ? '+' : '')} key={card}/>)

        return (
            <div>
                <Search onSearchTermChanged={this.onSearchTermChanged}/>
                <div style={styles.upgrade}>
                    <input onChange={this.toggleCheckbox} type='checkbox' value={this.state.upgraded}/><label>upgraded</label>
                </div>
                <div style={styles.cards}>
                    {cardsList}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(CardSelector)