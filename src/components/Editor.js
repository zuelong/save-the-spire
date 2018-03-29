import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardList from './CardList'
import RelicList from "./RelicList";
import PotionList from "./PotionList";
import MiscList from "./MiscList";
import { actions } from "../utils/ReduxStore"

class Editor extends Component {
    showConverter = () => {
        if (this.props.data.seed !== undefined) {
            this.props.actions.selectConverter();
        } else {
            alert('You must upload a save file first!');
        }
    }

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
                <MiscList/>
                <CardList/>
                <RelicList/>
                <PotionList/>
                <button onClick={this.showConverter}>Generate Save File</button>
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

const mapStateToProps = (state) => ({ 
    data: state.data 
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
