import {CONSOLE_LOG, 
	GET_COUNTRIES, 
	GET_DETAILS, 
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY, 
	ORDER_BY_NAME,
	ORDER_BY_AREA,
	SEARCH_COUNTRY} from './constants.js'
import axios from 'axios'
import {COUNTRIES_URL, DETAIL_URL, QUERY_URL} from '../appConstants.js'

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

export function searchCountry(name){
	return function(dispatch){
		return axios.get(QUERY_URL+name)
			.then((country)=>{
				dispatch({
					type: SEARCH_COUNTRY,
					payload: country.data
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

export function filterCountriesByContinent(payload){
	return {
		type: FILTER_BY_CONTINENT,
		payload: payload
	}
}

export function orderByName(payload){
	return{
		type: ORDER_BY_NAME,
		payload: payload
	}
}

export function orderByArea(payload){
	return{
		type: ORDER_BY_AREA,
		payload: payload
	}
}

export function activityFilter(payload){
	return{
		type:FILTER_BY_ACTIVITY,
		payload: payload
	}
}