import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { actions } from '../utils/ReduxStore';
import relics from "./RelicsJSON";
import cards from "./CardsJSON";
import Search from './Search';
import Item from "./Item";

const bottledTypes = {
    "Bottled Lightning": "SKILL",
    "Bottled Flame":     "ATTACK",
    "Bottled Tornado":   "POWER"
}

class RelicSelector extends Component {

    state = {
        searchTerm: '',
        bottled: false,
    }

    sortedRelics = Object.keys(relics).sort();

    onSearchTermChanged = (searchTerm) => {
        this.setState({searchTerm});
    };

    addRelic = (relic) => {
        if (relic.startsWith("Bottled ")) {
            this.setState({ bottled: relic });
        } else {
            this.props.actions.addRelic(relic);
        }
    }

    finishBottling = (card) => {
        this.props.actions.addRelic(this.state.bottled, card.id);
        this.setState({ bottled: false});
    }

    render() {
        const styles = {
            relics: {
                display: 'grid',
                boxSizing: 'border-box',
                overflowY: 'scroll',
                height: 'calc(100vh - 103px)',
                alignContent:'start'
            },
            modal: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)'
            }
        };

        const relicsList = this.sortedRelics
            .filter(relic => relic.toLowerCase().startsWith(this.state.searchTerm.trim()))
            .map((relic) => <Item type="RelicItem" onClick={() => this.addRelic(relic)} name={relic} key={relic}/>)


        const uniqueCards = this.props.cards.filter((card, i, arr) => arr.findIndex(c => c.id === card.id) === i);

        const bottleableCardType = this.state.bottled && this.state.bottled in bottledTypes ? bottledTypes[this.state.bottled] : false
        const bottleableCards = bottleableCardType ? uniqueCards.filter((card) => cards[card.id].type === bottleableCardType) : false

        return (
            <div>
                <Search onSearchTermChanged={this.onSearchTermChanged}/>
                <div style={styles.relics}>
                    {relicsList}
                </div>
                <Modal isOpen={!!this.state.bottled} style={{content: styles.modal}}>
                    {!bottleableCardType || bottleableCards.length === 0 ? (
                        <div>
                            { uniqueCards.length === 0 ? (
                                <div>Can't add {this.state.bottled} if your deck is empty</div>
                            ) : bottleableCards && bottleableCards.length === 0 ? (
                                <div>Can't add {this.state.bottled} if your deck doesn't contain any {bottleableCardType[0] + bottleableCardType.substring(1).toLowerCase()} cards.</div>
                            ) : (
                                <div>This shouldn't happen.</div>
                            )}
                            <br/>
                            <button style={{width: '100%'}} onClick={() => this.setState({ bottled: false })}>Ok</button>
                        </div>
                    ) : (
                        <div>
                            <div>Select a card for your {this.state.bottled}</div>
                            <br/>
                            {bottleableCards.map((card, i) => 
                                <Item type="CardItem"
                                    name={card.id}
                                    onClick={() => this.finishBottling(card)}
                                    key={i}
                                />
                            )}
                        </div>
                    )}
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(RelicSelector);
