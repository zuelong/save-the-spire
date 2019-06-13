import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../utils/ReduxStore'

import Item from "./Item";

class CardList extends Component {
    render() {

        const styles = {
            cardlist: {
                gridColumn: "1",
                gridRow: '2',
                display: 'grid',
                gridTemplateColumns: '20% 20% 20% 20% 20%',
                gridAutoRows: '40px',
                overflowY: 'scroll',
                minHeight: '40px',
                maxHeight: '240px',
                marginBottom: '20px',
                boxSizing: 'border-box'
            }
        };

        // The bottled name may match multiple cards, but only one gets the highlight
        const bottledIndices = ['bottled_tornado', 'bottled_flame', 'bottled_lightning']
            .filter(key => this.props.data[key] !== undefined)
            .map(key => this.props.cards.findIndex(card => card.id === this.props.data[key]));

        return (
            <div>
                <label>Cards:</label>
                <div style={styles.cardlist}>
                    {this.props.cards.map((card, i) => 
                        <Item type="Card"
                            name={
                                card.id + (card.upgrades > 0 
                                || (card.upgrades.value !== undefined && card.upgrades.value !== "0") 
                                ? '+' : '')
                            } 
                            bottled={bottledIndices.includes(i)}
                            onClick={() => this.props.actions.removeCard(i)} 
                            key={i}
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    data: state.data,
    cards: state.data.cards
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
