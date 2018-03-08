import React, {Component} from "react";
import relics from "./RelicsJSON";
import RelicItem from "./RelicItem";
import Search from './Search';

class RelicSelector extends Component {
    
    state = { searchTerm: '' };

    componentDidMount = () => {

        this.unsubscribe = this.props.store.subscribe(() => this.setState({
            searchTerm: this.props.store.getState()['searchTerm']
        }));
    }
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

        let relics_keys = Object.keys(relics).sort();
        relics_keys = relics_keys.filter(relic => relic.toLowerCase().startsWith(this.state.searchTerm.trim()));

        let relicsList = [];

        for(let i = 0; i < relics_keys.length; i++) {
            relicsList.push(
                <RelicItem store={this.props.store} grid={i} value={relics_keys[i]} />
            )}

        return (
            <div>
                <Search store={this.props.store}/>
                <div style={styles.relics}>
                    {relicsList}
                </div>
            </div>    
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

export default RelicSelector