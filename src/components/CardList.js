import React, { Component } from 'react';
import Card from "./Card";

class CardList extends Component {

    state = {selected_cards: [], card_names: []};

    handleChange = () =>{
        const tmp_cards = this.props.store.getState()['data']['cards'];
        this.setState({selected_cards: tmp_cards});
        this.setState({card_names: []});
        let tmp_list = [];
        let i = 1;
        for(let card of tmp_cards){
            let plus = '';
            card.upgrades ? plus = '+' : plus = '';
            tmp_list.push(<Card store={this.props.store} name={card.id + plus} number={i - 1} grid={i}/>);
            i++;
        }
        this.setState({card_names: tmp_list});
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange);
        this.handleChange()
    }

    render() {

        const styles = {
            cardlist: {
                gridColumn: "1",
                gridRow: '2',
                display: 'grid',
                gridTemplateColumns: '20% 20% 20% 20% 20%',
                gridAutoRows: '40px',
                overflowY: 'scroll',
                minHeight: '40px',
                maxHeight: '240px',
                marginBottom: '20px',
                boxSizing: 'border-box'
            }
        };

        return (
            <div>
                <label>Cards:</label>
                <div style={styles.cardlist}>
                    {this.state.card_names}
                </div>
            </div>

        );
    }
}

export default CardList;
