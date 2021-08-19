import {CONSOLE_LOG, 
	GET_COUNTRIES, 
	GET_DETAILS, 
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY,
	ORDER_BY_NAME,
	ORDER_BY_AREA,
	SEARCH_COUNTRY} from '../actions/constants.js'

var initialState= {
	testState: '',
	countries: [],
	allCountries:[],
	countryDetail: [],
	activities:[],
	activityName:[],
	activityCode:[]
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
				countries: action.payload,
				allCountries: action.payload
			}
		case SEARCH_COUNTRY:

			return{
				...state,
				countries: action.payload
			}
			
		case GET_DETAILS:
			return{
				...state,
				countryDetail: action.payload,
				activities:[...action.payload.activities]
			}
		case FILTER_BY_CONTINENT:
			const statusFilter = action.payload === 'all' ? state.allCountries : state.allCountries.filter(e=>e.continent === action.payload)
			return{
				...state,
				countries: statusFilter
			}

		case FILTER_BY_ACTIVITY:
			const middleTable = state.activities.map((e)=>e.countryActivities.countryIdcode)
			console.log('middleTable',middleTable)
			const nameList = state.activities.map((e)=>e.name)
			console.log('nameList', nameList)
			let activityFilter = action.payload === 'all' ?
			state.countries.filter((country)=>{
				return middleTable.includes(country.idcode)
			})
			:
			state.countries.filter((country)=>{
				return middleTable.includes(country.idcode) && nameList.includes(action.payload)
			})
			return{
				...state,
				countries: activityFilter,
				activityName:[...nameList],
				activityCode:[...middleTable]
			}
			console.log('activityFilter', activityFilter)

		case ORDER_BY_NAME:
			let sortedArr = action.payload === 'asc' ?
			state.countries.sort(function(a,b){
				if(a.name > b.name){
					return 1
				}
				if(b.name > a.name){
					return -1
				}
				return 0
			}) : 

			state.countries.sort(function(a,b){
				if(a.name > b.name) {
					return -1
				}
				if(b.name > a.name){
					return 1
				}
				return 0
			})
			return{
				...state,
				countries: sortedArr
			}

		case ORDER_BY_AREA:
			let sortedArea = action.payload === 'ascend' ?
			state.countries.sort(function(a,b){
				if(a.area > b.area) {
					return -1
				}
				if(b.area > a.area){
					return 1
				}
				return 0
			}) : 
			state.countries.sort(function(a,b){
				if(a.area > b.area) {
					return 1
				}
				if(b.area > a.area){
					return -1
				}
				return 0
			})
			return{
				...state,
				countries: sortedArea
			}

		default: return state
	}
}