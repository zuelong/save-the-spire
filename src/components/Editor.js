import React, { Component } from 'react';
import ReactDOM from "react-dom";
import CardList from './CardList'
import RelicList from "./RelicList";
import MiscList from "./MiscList";
import Converter from "./Converter";
import { types } from "../utils/ReduxStore"

class Editor extends Component {

    renderConverter = () => {
        let data = this.props.store.getState()['data'];
        if(data.seed !== undefined) {
            data.current_health = document.getElementById('hp').value || data.current_health;
            data.max_health = document.getElementById('max_hp').value || data.max_health;
            data.gold = document.getElementById('gold').value || data.gold;
            data.hand_size = document.getElementById('hand_size').value || data.hand_size;
            this.props.store.dispatch({type: types.UPDATE_JSON, payload: data});
            ReactDOM.render(<Converter store={this.props.store}/>, document.getElementById('save-edit-content'));
        }
        else{
            alert('You must upload a save file first!');
        }
    };

    render() {

        const styles = {
            editor: {
                gridColumn: "1",
                gridRow: "2",
                display: "grid"
            },
            textarea: {
                height: "45vh",
                width: "99%"
            }
        };

        return (
            <div style={styles.editor}>
                <MiscList store={this.props.store}/>
                <CardList store={this.props.store}/>
                <RelicList store={this.props.store}/>
                <button onClick={this.renderConverter}>Generate Save File</button>
                <p>
                    Welcome to the new Basic option for the save editor!  To learn how to use it: <a href="https://github.com/zuelong/save-the-spire/blob/master/Basic.md">click here!</a>
                    <br/>
                    <br/>
                    Otherwise, you can click "Advanced" on the top of the screen to use the old version of the save editor!
                </p>
            </div>

        );
    }
}

export default Editor;
