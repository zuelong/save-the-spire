import React, { Component } from 'react';
import styles from '../styles/Potions.module.css'

class Item extends Component {

    state = {hover: false};

    toggleHover = () => {
        this.setState({hover: !this.state.hover});
    };

    createStyle() {
        let commonStyle = {
            textAlign: 'center',
            minHeight: '40px',
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            cursor: 'default'
        };

        let specificStyle;
        if (this.props.type === 'RelicItem' || this.props.type === 'CardItem') {
            specificStyle = {
                backgroundColor: this.state.hover ? '#17bebb' : '#27cecb',
                border: '1px solid #17bebb'
            };
        } else if (this.props.type === 'Relic') {
            specificStyle = {
                backgroundColor: this.state.hover ? '#46d38f' : '#56e39f',
                border: '1px solid #46d38f'
            };
        } else if (this.props.type === 'Card') {
            specificStyle = {
                backgroundColor: this.state.hover ? '#df2e26' : '#ef3e36',
                border: '1px solid #df2e26'
            };
        } else if (this.props.type === 'Potion') {
            specificStyle = {
                backgroundColor: this.state.hover ? '#C4E717' : '#D7EE62',
                border: '1px solid #C4E717'
            };
        }

        if (this.props.bottled === true) {
            specificStyle.border = '3px solid #ffd700';
        }

        return {
            ...commonStyle, 
            ...specificStyle, 
            ...this.props.style
        };
    }

    render() {
        const style = this.createStyle();

        if (this.props.type === 'Potion') {
            if (this.props.active) {
                style.border = "2px solid red"
            }

            let key = `potion-${this.props.isPlaceholder ? "placeholder" : this.props.name.split(" ")[0].toLowerCase()}`

            return (
                <div id={this.props.id} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.props.onClick} style={style}>
                    <div className={typeof styles[key] === "undefined" ? styles.potion_placeholder : styles[key]}></div>
                </div>

            )
        }

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.props.onClick} style={style}>
                {this.props.name}
            </div>

        );
    }
}

export default Item;
