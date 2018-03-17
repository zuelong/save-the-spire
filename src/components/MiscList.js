import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../utils/ReduxStore';

class MiscList extends Component {

    updateValues = (event, key) => {
        this.props.actions.updateMisc(key, event.target.value);
    };

    render() {

        const styles = {
            misc: {
                gridRow: "1",
                display: "grid",
                gridTemplateColumns: "min-content 50px",
                whiteSpace: 'nowrap',
                marginBottom: "20px",
                boxSizing: 'border-box'
            }
        };

        const attributes = {
            'current_health': 'Current Health',
            'max_health': 'Max Health',
            'gold': 'Gold',
            'hand_size': 'Hand Size'
        };
        

        return (
            <div style={styles.misc}>
                {Object.entries(attributes).map(([key, label]) => [
                    <label key={key+'label'}>{label + ': '}</label>,
                    <input key={key+'input'} type="number" value={this.props.data[key]} onChange={event => this.updateValues(event, key)}/>
                ])}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({ 
    data: state.data 
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MiscList);
