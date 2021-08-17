import {CONSOLE_LOG} from '../actions/constants.js'

var initialState= {
	testState: ''
}

export default function reducer(state= initialState, action){
	switch(action.type){
		case CONSOLE_LOG:
			return{
				...state,
				testState: action.payload
			}
		default: return state
	}
}