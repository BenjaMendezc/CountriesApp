const Router = require('express')
const {getApiInfo, getCountryInfo, getDbInfo} = require('./utils.js')
const {Country} = require('../db.js')

const router = Router()

router.get('/', async (req, res)=>{
	
	let apiInfo = await getApiInfo()

	// console.log(apiInfo)
	
	try{
		let newCountry = apiInfo.forEach(async (country)=>{
			await Country.create({
				idcode: country.idcode,
				name: country.name,
				img: country.img,
				continent: country.continent,
				subregion: country.subregion,
				capital: country.capital,
				area: country.area
			})
		})
		res.send({msg:'db loaded'})
	} catch(e){
		res.send('error')
	}

})

router.get('/:idPais', async(req, res)=>{
	try{
		const {idPais} = req.params
		// const apiCountryInfo = await getCountryInfo(idPais)
		let dbCountryInfo = await getDbInfo(idPais, true)
		console.log(dbCountryInfo)
		

		// const countryDetail = dbCountryInfo.concat(apiCountryInfo)

		res.json(dbCountryInfo)
	} catch(e){
		res.send('error on countryDetail')
	}
})

// router.get('')

module.exports = router