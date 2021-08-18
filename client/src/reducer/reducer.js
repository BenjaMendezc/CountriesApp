import {CONSOLE_LOG, GET_COUNTRIES, GET_DETAILS} from '../actions/constants.js'

var initialState= {
	testState: '',
	countries: [],
	countryDetail: [],
	activities:[]
}

export default function reducer(state= initialState, action){
	switch(action.type){
		case CONSOLE_LOG:
			return{
				...state,
				testState: action.payload
			}
		case GET_COUNTRIES:
			return{
				...state,
				countries: action.payload
			}
		case GET_DETAILS:
			console.log(action.payload)
			return{
				...state,
				countryDetail: action.payload,
				activities:[...action.payload.activities]
			}
		default: return state
	}
}