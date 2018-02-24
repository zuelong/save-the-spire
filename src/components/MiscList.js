import React, { Component } from 'react';
import { types } from '../utils/ReduxStore'

class MiscList extends Component {

    handleChange = () =>{
        let data = this.props.store.getState()['data'];
        if(document.getElementById('hp') !== null) {
            document.getElementById('hp').value = data.current_health;
            document.getElementById('max_hp').value = data.max_health;
            document.getElementById('gold').value = data.gold;
            document.getElementById('hand_size').value = data.hand_size;
        }
    };

    updateValues = () => {
        let data = this.props.store.getState()['data'];
        data.current_health = document.getElementById('hp').value || data.current_health;
        data.max_health = document.getElementById('max_hp').value  || data.max_health;
        data.gold = document.getElementById('gold').value  || data.gold;
        data.hand_size = document.getElementById('hand_size').value  || data.hand_size;
        this.props.store.dispatch({type: types.UPDATE_JSON, payload: data})
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange);
        this.handleChange();
    }

    componentWillUnmount() {
        this.props.store.subscribe(() => {});
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

        return (
            <div style={styles.misc}>
                <label>Current Health: </label><input id="hp" type="number" onBlur={this.updateValues}/>
                <label>Max Health: </label><input id="max_hp" type="number" onBlur={this.updateValues}/>
                <label>Gold: </label><input id="gold" type="number" onBlur={this.updateValues}/>
                <label>Hand Size: </label><input id="hand_size" type="number" onBlur={this.updateValues}/>
            </div>

        );
    }
}

export default MiscList;
