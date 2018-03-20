import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from "./Item";
import { actions } from "../utils/ReduxStore";

class RelicList extends Component {
    render() {

        const styles = {
            reliclist: {
                gridColumn: "1",
                gridRow: '3',
                display: 'grid',
                gridTemplateColumns: '20% 20% 20% 20% 20%',
                gridAutoRows: '40px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                minHeight: '40px',
                maxHeight: '240px',
                marginBottom: '20px',
                boxSizing: 'border-box'
            }
        };

        return (
            <div>
                <label>Relics:</label>
                <div style={styles.reliclist}>
                    {this.props.relics.map((relic, i) => 
                        <Item type="Relic" 
                            name={relic} 
                            bottled={relic.startsWith('Bottled ')}
                            onClick={() => this.props.actions.removeRelic(i)}
                            key={i} 
                        />
                    )}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    relics: state.data.relics
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RelicList);
