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
                color: '#2e282a'
            },
            Relics: {
                selected: false,
                color: '#3e383a'
            }
        };
    }
    else if (action.type === types.SELECT_RELICS){
        return {
            ...state,
            Cards: {
                selected: false,
                color: '#3e383a'
            },
            Relics: {
                selected: true,
                color: '#2e282a'
            }
        };
    }
    else if (action.type === types.SELECT_BASIC){
        return {
            ...state,
            Basic: {
                selected: true,
                color: '#2e282a'
            },
            Advanced: {
                selected: false,
                color: '#3e383a'
            }
        };
    }
    else if (action.type === types.SELECT_ADVANCED){
        return {
            ...state,
            Basic: {
                selected: false,
                color: '#3e383a'
            },
            Advanced: {
                selected: true,
                color: '#2e282a'
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
        color: '#2e282a'
    },
    Relics: {
        selected: false,
        color: '#3e383a'
    },
    Basic: {
        selected: true,
        color: '#2e282a'
    },
    Advanced: {
        selected: false,
        color: '#3e383a'
    }
};

const store = createStore(reducer, initialState);

export {
    store, types
}