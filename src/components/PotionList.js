import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../utils/ReduxStore'
import Modal from 'react-modal';
import potions from "./PotionsJSON";

import Item from "./Item";

class PotionList extends Component {

    state = {
        showModal: false,
        modalIndex: 0
    }

    sortedPotions = ["Potion Slot", ...Object.keys(potions).filter((potion) => potion !== "Potion Slot").sort()]

    render() {

        const styles = {
            potionlist: {
                gridColumn: "1",
                gridRow: '2',
                display: 'grid',
                gridTemplateColumns: '20% 20% 20% 20% 20%',
                gridAutoRows: '64px',
                minHeight: '64px',
                maxHeight: '256px',
                marginBottom: '20px',
                boxSizing: 'border-box'
            },
            modal: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div>
                <label>Potions:</label>
                <div style={styles.potionlist}>
                    {this.props.potions.map((potion, i) =>
                        <Item type="Potion"
                            name={potion} 
                            onClick={() => {this.setState({modalIndex: i}); this.setState({showModal: true})}}
                            key={i}
                            item={potions[potion]}
                            id={`potion-${i}`}
                            active={false}
                            isPlaceholder={potion === "Potion Slot"}
                        />
                    )}
                </div>
                <Modal isOpen={this.state.showModal} style={{content: styles.modal}}>
                    <div style={styles.potionlist}>
                        {this.sortedPotions.map((potion, i) => 
                            <Item type="Potion" 
                                onClick={() => {this.setState({showModal: false}); this.props.actions.setPotion(this.state.modalIndex, potion)}}
                                name={potion}
                                key={potion}
                                item={potions[potion]}
                                id={`potion-popup-${i}`}
                                active={potion === this.props.potions[this.state.modalIndex]}
                                isPlaceholder={potion === "Potion Slot"}
                            />
                        )}
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    data: state.data,
    potions: state.data.potions
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PotionList);
