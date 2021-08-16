const axios = require('axios')
const {Country, Activity} = require('../db.js')

const getApiInfo = async () => {
	const apiUrl = await axios.get('https://restcountries.com/v3/all')
	const apiInfo = await apiUrl.data.map(country => {
		//esto sera lo mejor?
		let capital = Array.isArray(country.capital) ? country.capital[0]:country.capital
		return {
			//agregar default para cuando idcode es null, porque algunos no tienen
			idcode: country.cioc,
			name: country.name.common,
			img: country.flags[1],
			continent: country.region,
			subregion: country.subregion,
			capital: capital,
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

const getDbInfo = async(code, foo=false)=>{
	
	const condition = code ? {where:{idcode: code.toUpperCase()}} : {msg:'no countryId provided'}
	
	condition.include = {model: Activity}

	
	if(foo) {
		condition.attributes = ['idcode','capital', 'subregion', 'area']
	}
	
	console.log(condition)
	
	const countryInfo = await Country.findAll(condition)

	console.log(countryInfo)
	return countryInfo
}

const capitalizeStr = (string)=>{
	const str1 = string.charAt(0).toUpperCase()
	const str2 = string.slice(1).toLowerCase()

	const str3 = str1.concat(str2)
	return str3
}


module.exports = {
	getApiInfo,
	getCountryInfo,
	getDbInfo,
	capitalizeStr
}