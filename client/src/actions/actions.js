import {CONSOLE_LOG, GET_COUNTRIES, GET_DETAILS} from './constants.js'
import axios from 'axios'
import {COUNTRIES_URL, DETAIL_URL} from '../appConstants.js'

export function consoleLog(payload){
	return{
		type: CONSOLE_LOG,
		payload: payload
	}
}

export function getCountries(){
	return function(dispatch){
		return axios.get(COUNTRIES_URL)
			.then((countries)=>{
				dispatch({
					type: GET_COUNTRIES,
					payload: countries.data
				})
			})
	}
}

export function getDetail(id){
	return function(dispatch){
		return axios.get(DETAIL_URL+id)
			.then((country)=>{
				dispatch({
					type: GET_DETAILS,
					payload:country.data
				})
			})
	}
}
