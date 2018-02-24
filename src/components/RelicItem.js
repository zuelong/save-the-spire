import React, {Component} from "react";
import {types} from "../utils/ReduxStore";

class RelicItem extends Component {

    state = {hover: false, color: '#27cecb'};

    toggleHover = () => {
        let hover = !this.state.hover;
        this.setState({hover: hover});
        hover ? this.setState({color: '#17bebb'}) : this.setState({color: '#27cecb'});
    };

    addRelic = () => {
        let data = this.props.store.getState()['data'];
        let relics = data.relics;
        data.relics = [...relics, this.props.value];
        this.props.store.dispatch({type: types.UPDATE_JSON, payload: data});
    };

    render() {

        const styles = {
            relicitem: {
                textAlign: 'center',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.color,
                border: '1px solid #17bebb',
                cursor: 'default'
            },
            a: {
                width: '100%',
                cursor: 'default'
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.addRelic} style={styles.relicitem}>
                {this.props.value}
            </div>
        );
    }
}

export default RelicItem