import React, { Component } from 'react';

class MiscList extends Component {

    state = {hp: 0, max_hp:0, gold: 0, hand_size: 5};

    handleChange = () =>{
        let data = this.props.store.getState()['data'];
        this.setState({
            hp: data.current_health,
            max_hp: data.max_health,
            gold: data.gold,
            hand_size: data.hand_size
        })
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

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
                <label>Current Health: </label><input id="hp" type="number" placeholder={this.state.hp}/>
                <label>Max Health: </label><input id="max_hp" type="number" placeholder={this.state.max_hp}/>
                <label>Gold: </label><input id="gold" type="number" placeholder={this.state.gold}/>
                <label>Hand Size: </label><input id="hand_size" type="number" placeholder={this.state.hand_size}/>
            </div>

        );
    }
}

export default MiscList;
