import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intitialState = {
	results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    updateObject(state, { results: updatedArray })
}

const reducer = (state = intitialState, action) => {
	switch (action.type) {
        case actionTypes.STORE_RESULT: 
            return updateObject(state, {results: state.results.concat({id: new Date(), value:   action.result})});
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            
        default:
	}
	return state;
};

export default reducer;