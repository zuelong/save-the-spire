import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { actions } from '../utils/ReduxStore';
import relics from "./RelicsJSON";
import Search from './Search';
import Item from "./Item";

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
            .map((relic, i) => <Item type="RelicItem" onClick={() => this.addRelic(relic)} name={relic} key={relic}/>)

        const uniqueCards = this.props.cards.filter((card, i, arr) => arr.findIndex(c => c.id === card.id) === i);

        return (
            <div>
                <Search onSearchTermChanged={this.onSearchTermChanged}/>
                <div style={styles.relics}>
                    {relicsList}
                </div>
                <Modal isOpen={!!this.state.bottled} style={{content: styles.modal}}>
                    {uniqueCards.length === 0 ? (
                        <div>
                            <div>Can't add {this.state.bottled} if your deck is empty</div>
                            <br/>
                            <button style={{width: '100%'}} onClick={() => this.setState({ bottled: false })}>Ok</button>
                        </div>
                    ) : (
                        <div>
                            <div>Select a card for your {this.state.bottled}</div>
                            <br/>
                            {uniqueCards.map((card, i) => 
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