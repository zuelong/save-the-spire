import React, {Component} from "react";
import ItemNavItem from "./ItemNavItem"
import CardSelector from "./CardSelector"
import RelicSelector from "./RelicSelector";

class ItemNavBar extends Component{

    render(){

        const styles = {
            navbar: {
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                backgroundColor: '#3e383a',
                height: '60px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            },
        };

        return(
            <div style={styles.navbar}>
                <ItemNavItem store={this.props.store} load={<CardSelector store={this.props.store}/>} name={'Cards'}/>
                <ItemNavItem store={this.props.store} load={<RelicSelector store={this.props.store}/>} name={'Relics'}/>
            </div>
        )
    }
}

export default ItemNavBar