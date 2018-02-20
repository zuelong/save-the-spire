import {createStore} from "redux";


const types = {
    SELECT_CARDS: 'CARDS',
    SELECT_RELICS: 'RELICS',
    SELECT_BASIC: 'BASIC',
    SELECT_ADVANCED: 'ADVANCED',
    UPDATE_JSON: 'UPDATE JSON'
};

const reducer = (state, action) => {
    if (action.type === types.SELECT_CARDS) {
        return {
            ...state,
            Cards: {
                selected: true,
                color: '#D8D8D8'
            },
            Relics: {
                selected: false,
                color: '#E8E8E8'
            }
        };
    }
    else if (action.type === types.SELECT_RELICS){
        return {
            ...state,
            Cards: {
                selected: false,
                color: '#E8E8E8'
            },
            Relics: {
                selected: true,
                color: '#D8D8D8'
            }
        };
    }
    else if (action.type === types.SELECT_BASIC){
        return {
            ...state,
            Basic: {
                selected: true,
                color: '#D8D8D8'
            },
            Advanced: {
                selected: false,
                color: '#E8E8E8'
            }
        };
    }
    else if (action.type === types.SELECT_ADVANCED){
        return {
            ...state,
            Basic: {
                selected: false,
                color: '#E8E8E8'
            },
            Advanced: {
                selected: true,
                color: '#D8D8D8'
            }
        };
    }
    else if (action.type === types.UPDATE_JSON){
        return {
            ...state,
            data: action.payload
        };
    }
    return state
};

const initialState = {
    Cards: {
        selected: true,
        color: '#D8D8D8'
    },
    Relics: {
        selected: false,
        color: '#E8E8E8'
    },
    Basic: {
        selected: true,
        color: '#D8D8D8'
    },
    Advanced: {
        selected: false,
        color: '#E8E8E8'
    }
};

const store = createStore(reducer, initialState);

export {
    store, types
}