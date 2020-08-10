import {createStore} from "redux";


const types = {
    SELECT_SAVE_PAGE: 'SELECT_SAVE_PAGE',
    SELECT_ITEM_PAGE: 'SELECT_ITEM_PAGE',
    UPDATE_JSON: 'UPDATE JSON',
    ADD_CARD: 'ADD CARD',
    REMOVE_CARD: 'REMOVE_CARD',
    SET_POTION: 'SET_POTION',
    ADD_RELIC: 'ADD_RELIC',
    REMOVE_RELIC: 'REMOVE_RELIC',
    UPDATE_MISC: 'UPDATE_MISC',
    SET_FILE_NAME: 'SET_FILE_NAME'
};

const actions = {
    selectBasic: () => ({type: types.SELECT_SAVE_PAGE, payload: 'Basic'}),
    selectAdvanced: () => ({type: types.SELECT_SAVE_PAGE, payload: 'Advanced'}),
    selectConverter: () => ({type: types.SELECT_SAVE_PAGE, payload: 'Converter'}),
    selectCards: () => ({type: types.SELECT_ITEM_PAGE, payload: 'Cards'}),
    selectRelics: () => ({type: types.SELECT_ITEM_PAGE, payload: 'Relics'}),
    updateJson: (json) => ({type: types.UPDATE_JSON, payload: json}),
    addCard: (card) => ({type: types.ADD_CARD, payload: card}),
    removeCard: (index) => ({type: types.REMOVE_CARD, payload: index}),
    setPotion: (index, potion) => ({type: types.SET_POTION, payload: {index, potion}}),
    addRelic: (relic, bottleTarget) => ({type: types.ADD_RELIC, payload: {relic, bottleTarget}}),
    removeRelic: (index) => ({type: types.REMOVE_RELIC, payload: index}),
    updateMisc: (key, value) => ({type: types.UPDATE_MISC, payload: {key, value}}),
    setFileName: (filename) => ({type: types.SET_FILE_NAME, payload: filename})
};

const reducer = (state, action) => {
    if (action.type === types.SELECT_ITEM_PAGE) {
        return {
            ...state,
            itemPage: action.payload
        };
    }
    else if (action.type === types.SELECT_SAVE_PAGE) {
        return {
            ...state,
            savePage: action.payload,
        };
    }
    else if (action.type === types.UPDATE_JSON) {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === types.ADD_CARD) {
        return {
            ...state,
            data: {
                ...state.data,
                cards: [...state.data.cards, action.payload]
            }
        };
    } else if (action.type === types.REMOVE_CARD) {
        if(state.data.cards.length > action.payload) {
            state.data.cards.splice(action.payload, 1);
        }
        return {
            ...state,
            data: {
                ...state.data,
                cards: state.data.cards
            }
        };
    } else if (action.type === types.SET_POTION) {
        let newPotions = state.data.potions
        newPotions[action.payload.index] = action.payload.potion
        return {
            ...state,
            data: {
                ...state.data,
                potions: newPotions
            }
        };
    } else if (action.type === types.ADD_RELIC) {
        const newState = {
            ...state,
            data: {
                ...state.data,
                relics: [...state.data.relics, action.payload.relic]
            }
        }

        if (action.payload.relic.startsWith('Bottled ')) {
            const bottledKey = action.payload.relic.replace(' ', '_').toLowerCase();
            newState.data[bottledKey] = action.payload.bottleTarget;
        }

        return newState;
    } else if (action.type === types.REMOVE_RELIC) {
        if(state.data.relics.length > action.payload) {
            state.data.relics.splice(action.payload, 1);
        }
        const relic = state.data.relics[action.payload];
        const newState = {
            ...state,
            data: {
                ...state.data,
                relics: state.data.relics
            }
        };

        if (relic.startsWith('Bottled ')) {
            const bottledKey = relic.replace(' ', '_').toLowerCase();
            delete newState.data[bottledKey];
        }

        return newState;
    } else if (action.type === types.UPDATE_MISC) {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.key]: action.payload.value
            }
        };
    } else if (action.type === types.SET_FILE_NAME) {
        return {
            ...state,
            filename: action.payload
        }
    }
    return state;
};

const initialState = {
    itemPage: 'Cards',
    savePage: 'Basic',
    data: {
        current_health: 80,
        max_health: 80,
        gold: 99,
        hand_size: 5,
        cards: [],
        relics: [],
        potions: ["Potion Slot", "Potion Slot", "Potion Slot"]
    },
    searchTerm: '',
    upgraded: false,
    filename: ''
};

const store = createStore(reducer, initialState);

export {
    store, types, actions
}
