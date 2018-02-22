import React, { Component } from 'react';
import '../App.css';

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
            basic: {
                gridRow: "1",
            },
            textarea: {
                height: "45vh",
                width: "99%"
            },
            fileupload: {
                gridColumn: "1",
            }
        };

        return (
            <div style={styles.basic}>
                <label>Current Health: </label><input type="text" value={this.state.hp}/>
                <br />
                <label>Max Health: </label><input type="text" value={this.state.max_hp}/>
                <br />
                <label>Gold: </label><input type="text" value={this.state.gold}/>
                <br />
                <label>Hand Size: </label><input type="text" value={this.state.hand_size}/>
            </div>

        );
    }
}

export default MiscList;
