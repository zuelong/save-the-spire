import React, {Component} from "react";
import SaveEditNavItem from "./SaveEditNavItem"
import Advanced from "./Advanced";
import Basic from "./Basic";

class SaveEditNavBar extends Component{

    render(){

        const styles = {
            navbar: {
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                backgroundColor: '#3e383a',
                height: '60px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            },
        };

        return(
            <div style={styles.navbar}>
                <SaveEditNavItem store={this.props.store} load={<Basic store={this.props.store}/>} name={'Basic'}/>
                <SaveEditNavItem store={this.props.store} load={<Advanced store={this.props.store}/>} name={'Advanced'}/>
            </div>
        )
    }
}

export default SaveEditNavBar