import React, {Component} from "react";
import relics from "./Relics";
import RelicItem from "./RelicItem";

class RelicSelector extends Component {

    render() {

        const styles = {
            relics: {
                display: 'grid',
                boxSizing: 'border-box',
                overflowY: 'scroll',
                height: 'calc(100vh - 60px)',
            }
        };

        let relics_keys = Object.keys(relics).sort();

        let relicsList = [];

        for(let i = 1; i < relics_keys.length; i++) {
            relicsList.push(
                <RelicItem grid={i} value={relics_keys[i]} />
            )}

        return (
            <div style={styles.relics}>
                {relicsList}
            </div>
        );
    }
}

export default RelicSelector