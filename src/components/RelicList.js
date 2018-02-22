import React, { Component } from 'react';
import '../App.css';

class RelicList extends Component {

    state = {selected_relics: [], relic_names: []};

    handleChange = () =>{
        this.setState({selected_relics: this.props.store.getState()['data']['relics']});
        this.setState({relic_names: []});
        let tmp_list = [];
        for(let relic of this.state.selected_relics){
            tmp_list.push(relic);
        }
        this.setState({relic_names: tmp_list});
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

    render() {

        const styles = {
            basic: {
                gridColumn: "1",
                gridRow: '3'
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
                <label>Relics:</label>
                <br />
                {this.state.relic_names}
            </div>

        );
    }
}

export default RelicList;
