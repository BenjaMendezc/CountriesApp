import {CONSOLE_LOG} from './constants.js'

export function consoleLog(payload){
	return{
		type: CONSOLE_LOG,
		payload: payload
	}
}