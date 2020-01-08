import * as actionTypes from '../actions';

const intitialState = {
	counter: 0,
}

const reducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			// const newState = Object.assign({}, state);
			// newState.counter = state.counter + 1;
			// return newState;
			return {
				...state,
				counter: state.counter + 1
			}
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value
			}
		case actionTypes.SUBTRACT: 
			return {
				...state,
				counter: state.counter - action.value
			}
        default:
	}
	return state;
};

export default reducer;