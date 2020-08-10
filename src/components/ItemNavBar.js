import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../utils/ReduxStore'
import NavItem from "./NavItem";

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
                <NavItem 
                    isSelected={this.props.itemPage === 'Cards'} 
                    name={'Cards'}
                    onClick={() => this.props.actions.selectCards()}
                />
                <NavItem 
                    isSelected={this.props.itemPage === 'Relics'} 
                    name={'Relics'}
                    onClick={() => this.props.actions.selectRelics()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    itemPage: state.itemPage 
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemNavBar);
