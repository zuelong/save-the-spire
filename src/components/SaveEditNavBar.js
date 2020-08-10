import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../utils/ReduxStore'
import NavItem from "./NavItem";

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
                <NavItem 
                    isSelected={this.props.savePage === 'Basic'}
                    name={'Basic'}
                    onClick={() => this.props.actions.selectBasic()}
                />
                <NavItem 
                    isSelected={this.props.savePage === 'Advanced'}
                    name={'Advanced'}
                    onClick={() => this.props.actions.selectAdvanced()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    savePage: state.savePage 
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveEditNavBar);
