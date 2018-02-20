import React, {Component} from "react";
import ItemNavItem from "./ItemNavItem"
import CardComponent from "./CardComponent"
import RelicComponent from "./RelicComponent";

class ItemNavBar extends Component{

    render(){

        const styles = {
            navbar: {
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                backgroundColor: '#E8E8E8',
                height: '8vh',
                alignItems: 'center',
                justifyContent: 'center'
            },
        };

        return(
            <div style={styles.navbar}>
                <ItemNavItem store={this.props.store} load={<CardComponent store={this.props.store}/>} name={'Cards'}/>
                <ItemNavItem store={this.props.store} load={<RelicComponent store={this.props.store}/>} name={'Relics'}/>
            </div>
        )
    }
}

export default ItemNavBar