import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../utils/ReduxStore';
import relics from "./RelicsJSON";
import Search from './Search';
import Item from "./Item";

class RelicSelector extends Component {
    render() {

        const styles = {
            relics: {
                display: 'grid',
                boxSizing: 'border-box',
                overflowY: 'scroll',
                height: 'calc(100vh - 103px)',
                alignContent:'start'
            }
        };

        const relicsList = Object.keys(relics)
            .filter(relic => relic.toLowerCase().startsWith(this.props.searchTerm.trim()))
            .sort()
            .map((relic, i) => <Item type="RelicItem" onClick={() => this.props.actions.addRelic(relic)} name={relic} key={relic}/>)

        return (
            <div>
                <Search/>
                <div style={styles.relics}>
                    {relicsList}
                </div>
            </div>    
        );
    }
}

const mapStateToProps = (state) => ({ 
    data: state.data,
    searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RelicSelector);