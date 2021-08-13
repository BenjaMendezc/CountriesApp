const axios = require('axios')
const {Country, Activity} = require('../db.js')

const getApiInfo = async () => {
	const apiUrl = await axios.get('https://restcountries.com/v3/all')
	const apiInfo = await apiUrl.data.map(country => {
		return {
			idcode: country.cioc,
			name: country.name.common,
			img: country.flags[1],
			continent: country.region,
			subregion: country.subregion,
			capital: country.capital,
			area:country.area
			// pop:
		}
	})

	return apiInfo
}

const getCountryInfo = async (code)=>{
	const apiUrl = await axios.get(`https://restcountries.com/v3/alpha/${code}`)
	const {subregion, capital, area} = apiUrl.data
	//lo devuelvo como un array para poder concatenarlo
	const countryInfo = [{
		subregion: subregion,
		capital: capital,
		area:area
	}]
	return countryInfo
}

const getDbInfo = async(code)=>{
	const condition = code ? {where:{idcode: code.toUpperCase()}} : {}
	condition.include = {model: Activity}
	const countryInfo = await Country.findAll(condition)
	return countryInfo
}


module.exports = {
	getApiInfo,
	getCountryInfo,
	getDbInfo
}