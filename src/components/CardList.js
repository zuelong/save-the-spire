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

        return (
            <div>
                <label>Cards:</label>
                <div style={styles.cardlist}>
                    {this.props.cards.map((card, i) => 
                        <Item type="Card" onClick={() => this.props.actions.removeCard(i)} name={card.id + (card.upgrades ? '+' : '')} key={i} />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    cards: state.data.cards
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
