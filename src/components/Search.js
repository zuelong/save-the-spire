import React, { Component } from "react";
class Search extends Component { 
    render() {
        const styles = {
            searchbox: {
                height: '40px',
                width: '100%',
                fontSize: '18px'
            }
        }
        return <input onChange={event => this.props.onSearchTermChanged(event.target.value)} placeholder="Search" style={styles.searchbox}/>
    }
}


export default Search;
