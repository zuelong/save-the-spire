import React, {Component} from "react";
import ReactDOM from "react-dom";
import { types } from "../utils/ReduxStore"


class ItemNavItem extends Component {

    state = {
        hover: false,
        color: this.props.store.getState()[this.props.name]['color'],
        Cards:{
            border: '1px solid'
        },
        Relics:{
            border: 'none'
        }
    };

    handleChange = () => {
        this.setState({hover: false, color: this.props.store.getState()[this.props.name]['color']});
    };

    componentDidMount(){
        this.props.store.subscribe(this.handleChange)
    }

    toggleHover = () => {
        if(!this.props.store.getState()[this.props.name]['selected']) {
            this.setState({hover: !this.state.hover});
            this.state.hover ? this.setState({color: '#E8E8E8'}) : this.setState({color: '#D8D8D8'});
        }
    };

    loadContent = () => {
        if(this.props.name === 'Cards'){
            this.props.store.dispatch({type: types.SELECT_CARDS});
        }
        else if(this.props.name === 'Relics'){
            this.props.store.dispatch({type: types.SELECT_RELICS});
        }
        ReactDOM.render(this.props.load, document.getElementById('item-content'))
    };

    render() {
        const styles = {
            navitem: {
                textAlign: 'center',
                borderRight: this.state[this.props.name]['border'],
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.color,
            },
            a: {
                width: '100%',
                cursor: 'default'
            },
        };

        return(
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.loadContent} style={styles.navitem}>
                <a style={styles.a}>{this.props.name}</a>
            </div>
        )
    }
}

export default ItemNavItem