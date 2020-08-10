import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cards from "./CardsJSON";
import Item from "./Item";
import Search from './Search';
import { actions } from "../utils/ReduxStore"
import MultiSelect from "@saltyeyes/react-multi-select"

const filterOptions = {
    rarity: {
        BASIC:    "Basic",
        COMMON:   "Common",
        UNCOMMON: "Uncommon",
        RARE:     "Rare",
        SPECIAL:  "Special",
        CURSE:    "Curse"
    },
    color:  {
        RED:       "Red",
        BLUE:      "Blue",
        GREEN:     "Green",
        COLORLESS: "Colorless",
        CURSE:     "Curse"
    },
    cost:   {
        "-2": "Unplayable",
        "-1": "X",
        " 0": "0",
        " 1": "1",
        " 2": "2",
        " 3": "3",
        " 4": "4"
    },
    type:   {
        ATTACK: "Attack",
        POWER:  "Power",
        SKILL:  "Skill",
        STATUS: "Status",
        CURSE:  "Curse"
    }
}

class CardSelector extends Component {

    state = {
        upgraded: false,
        searchTerm: '',
        filters: {}
    }

    sortedCards = Object.keys(cards).sort();

    onSearchTermChanged = (searchTerm) => {
        this.setState({searchTerm});
    };

    toggleCheckbox = () => {
        this.setState({upgraded: !this.state.upgraded});
    };

    addCard(card) {
        this.props.actions.addCard({
            upgrades: this.state.upgraded ? 1 : 0, 
            id: card
        });
    }

    onFiltersChanged(property, options) {
        let filters = {
            ...this.state.filters,
            [property]: options
        }
        this.setState({filters: filters}) 
    }

    filterCard(cardName, filters=null) {
        filters = filters || this.state.filters
        let card = cards[cardName]
        for (let [property, options] of Object.entries(filters)) {
            options = options.map((option) => {return option.trim()})
            if (options.length > 0 && !options.includes(String(card[property]))) {
                return false
            }
        }
        return true
    }

    render() {

        const styles = {
          cards: {
              display: 'grid',
              boxSizing: 'border-box',
              overflowY: 'scroll',
              height: 'calc(100vh - 166px)',  //TODO: Fix this line
              alignContent: 'start'
          },
            upgrade: {
                height: '1.5rem',
                backgroundColor: '#d8d8d8',
                border: '1px solid',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            filters: {
                display: 'grid',
                boxSizing: 'border-box',
                gridRow: 1,
                gridTemplateColumns: '25% 25% 25% 25%'
            }
        };

        const cardsList = this.sortedCards
            .filter(card => card.toLowerCase().startsWith(this.state.searchTerm.trim()))
            .filter(card => this.filterCard(card))
            .map((card) => <Item type="CardItem" onClick={() => this.addCard(card)} name={card + (this.state.upgraded ? '+' : '')} key={card}/>)

        return (
            <div>
                <Search onSearchTermChanged={this.onSearchTermChanged}/>
                <div style={styles.filters}>
                    {Object.entries(filterOptions).map(([name, options]) => {
                        return <CardFilter key={name} options={options} name={name} onFiltersChanged={this.onFiltersChanged.bind(this)} />
                    })}
                </div>
                <div style={styles.upgrade}>
                    <input onChange={this.toggleCheckbox} type='checkbox' value={this.state.upgraded}/><label>upgraded</label>
                </div>
                <div style={styles.cards}>
                    {cardsList}
                </div>
            </div>
        );
    }
}

class CardFilter extends Component {
    state = {
        selected: [],
    };

    valueRenderer(selected, options) {
        let output;
        if (selected.length === 0) {
            output = "None"
        } else if (selected.length === 1) {
            for (let option of options) {
                if (option.value === selected[0]) {
                    output = option.label
                    break;
                }
            }
        } else if (selected.length === options.length) {
            output = "All"
        } else {
            output = `${selected.length} options`
        }
        return <span><strong>{this.props.name[0].toUpperCase() + this.props.name.substring(1)}</strong>: {output}</span>
    }

    componentDidMount() {
        this.setState({selected: Object.keys(this.props.options)})
    }

    handleSelectedChanged(selected) {
        this.setState({selected})
        this.props.onFiltersChanged(this.props.name, selected);
    }

    render() {
        const {selected} = this.state;
        const options = Object.entries(this.props.options).map(([value, label]) => ({
            value: value,
            label: label
        }));
        return <MultiSelect
                options={options}
                onSelectedChanged={this.handleSelectedChanged.bind(this)}
                selected={selected}
                valueRenderer={this.valueRenderer.bind(this)}
                disableSearch={true}
            />
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(CardSelector);
