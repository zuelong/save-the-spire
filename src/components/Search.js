import React, { Component } from "react";
import { types } from "../utils/ReduxStore"
class Search extends Component { 
    updateSearch = (e) => {
        this.props.store.dispatch({ type: types.UPDATE_SEARCH, payload: e.target.value.toLowerCase() })
    };

    render() {
        const styles = {
            searchbox: {
                height: '40px',
                width: '100%',
                fontSize: '18px'
            }
        }
        return <input onChange={this.updateSearch} placeholder="Search" style={styles.searchbox}/>
    }
}

export default Search