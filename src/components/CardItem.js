import React, {PureComponent} from "react";
import { types } from "../utils/ReduxStore"

class CardItem extends PureComponent {

    state = {hover: false, color: '#27cecb', upgraded: 0, plus: ''};

    handleChange = () => {
      if(this.props.store.getState().checkbox){
          this.setState({upgraded: 1, plus: '+'})
      }
      else{
          this.setState({upgraded: 0, plus: ''})
      }
    };

    toggleHover = () => {
        let hover = !this.state.hover;
        this.setState({hover: hover});
        hover ? this.setState({color: '#17bebb'}) : this.setState({color: '#27cecb'});
    };

    addCard = () => {
        let data = this.props.store.getState()['data'];
        data.cards.push({upgrades: this.state.upgraded, id: this.props.value});
        this.props.store.dispatch({type: types.UPDATE_JSON, payload: data});
    };

    componentDidMount = () => {
        this.props.store.subscribe(this.handleChange);
        this.handleChange();
    };

    render() {

        const styles = {
            carditem: {
                textAlign: 'center',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.color,
                border: '1px solid #17bebb',
                cursor: 'default',
            },
            a: {
                width: '100%',
                cursor: 'default',
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.addCard} style={styles.carditem}>
                {this.props.value + this.state.plus}
            </div>
        );
    }
}

export default CardItem