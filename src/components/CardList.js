import React, { Component } from 'react';
import '../App.css';

class CardList extends Component {

    state = {selected_cards: [], card_names: []};

    handleChange = () =>{
        this.setState({selected_cards: this.props.store.getState()['data']['cards']});
        this.setState({card_names: []});
        let tmp_list = [];
        for(let card of this.state.selected_cards){
            tmp_list.push(card.id);
        }
        this.setState({card_names: tmp_list});
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

    render() {

        const styles = {
            basic: {
                gridColumn: "1",
                gridRow: '2'
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
                <label>Cards:</label>
                <br />
                {this.state.card_names}
            </div>

        );
    }
}

export default CardList;
