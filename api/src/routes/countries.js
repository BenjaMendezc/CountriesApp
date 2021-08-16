const Router = require('express')
const {getApiInfo, getCountryInfo, getDbInfo, capitalizeStr} = require('./utils.js')
const {Country} = require('../db.js')
const {Op} = require('sequelize')

const router = Router()

router.get('/', async(req,res,next)=>{
	const {name} = req.query

	if(!name) return next('route')

	const capitalizedName = capitalizeStr(name)
	try{
	const countryByName = await Country.findAll({
		where:{
			name:{
				[Op.like]: {[Op.any]: [`%${capitalizedName}%`, `%${name}%`]}
			}
		}
	})
	res.send(countryByName.length ? countryByName : 'Country not found')
	
	}catch(e){
	
	res.send('error on countryQuery')
	
	}
})

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
		// console.log(dbCountryInfo)
		

		// const countryDetail = dbCountryInfo.concat(apiCountryInfo)

		res.json(dbCountryInfo)
	} catch(e){
		res.send('error on countryDetail')
	}
})


module.exports = router