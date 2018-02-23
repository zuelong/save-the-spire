import React, { Component } from 'react';
import Relic from "./Relic";

class RelicList extends Component {

    state = {selected_relics: [], relic_names: []};

    handleChange = () =>{
        const tmp_relics = this.props.store.getState()['data']['relics'];
        this.setState({selected_relics: tmp_relics});
        this.setState({relic_names: []});
        let tmp_list = [];
        let i = 1;
        for(let relics of tmp_relics){
            tmp_list.push(<Relic store={this.props.store} number={i - 1} name={relics} grid={i}/>);
            i++;
        }
        this.setState({relic_names: tmp_list});
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

    render() {

        const styles = {
            reliclist: {
                gridColumn: "1",
                gridRow: '3',
                display: 'grid',
                gridTemplateColumns: '20% 20% 20% 20% 20%',
                gridAutoRows: '40px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                minHeight: '40px',
                maxHeight: '240px',
                marginBottom: '20px',
                boxSizing: 'border-box'
            }
        };

        return (
            <div>
                <label>Relics:</label>
                <div style={styles.reliclist}>
                    {this.state.relic_names}
                </div>
            </div>

        );
    }
}

export default RelicList;
