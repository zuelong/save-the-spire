import React, {Component} from "react";

class NavItem extends Component {

    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover});
    }

    render() {
        const styles = {
            navitem: {
                textAlign: 'center',
                borderRight: '1px solid',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (this.props.isSelected || this.state.hover) ? '#2e282a' : '#3e383a',
            },
            a: {
                width: '100%',
                cursor: 'default'
            },
        };

        return(
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.props.onClick} style={styles.navitem}>
                <div style={styles.a}>{this.props.name}</div>
            </div>
        )
    }
}

export default NavItem;
