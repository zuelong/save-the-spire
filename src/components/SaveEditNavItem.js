import React, {Component} from "react";
import ReactDOM from "react-dom";
import { types } from "../utils/ReduxStore"


class SaveEditNavItem extends Component {

    state = {
        hover: false,
        color: this.props.store.getState()[this.props.name]['color'],
        Basic:{
            border: '1px solid'
        },
        Advanced:{
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
            this.state.hover ? this.setState({color: '#3e383a'}) : this.setState({color: '#2e282a'});
        }
    };

    loadContent = () => {
        if(this.props.name === 'Basic'){
            this.props.store.dispatch({type: types.SELECT_BASIC});
        }
        else if(this.props.name === 'Advanced'){
            this.props.store.dispatch({type: types.SELECT_ADVANCED});
        }
        ReactDOM.render(this.props.load, document.getElementById('save-edit-content'))
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

export default SaveEditNavItem