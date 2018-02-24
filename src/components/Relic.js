import React, { Component } from 'react';
import { types } from "../utils/ReduxStore";

class Relic extends Component {

    state = {hover: false, color: '#56e39f'};

    toggleHover = () => {
        this.setState({hover: !this.state.hover});
        this.state.hover ? this.setState({color: '#56e39f'}) : this.setState({color: '#46d38f'});
    };

    deleteRelic = () => {
        let data = this.props.store.getState()['data'];
        let relics = data.relics;
        relics.splice(this.props.number, 1);
        data.relics = relics;
        this.props.store.dispatch({ type: types.UPDATE_JSON, payload: data})
    };

    render() {

        const styles = {
            relic: {
                gridRow: this.props.gridRow,
                backgroundColor: this.state.color,
                border: '1px solid #46d38f',
                minHeight: '40px',
                maxHeight: '40px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'default',
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.deleteRelic} style={styles.relic}>
                {this.props.name}
            </div>

        );
    }
}

export default Relic;
