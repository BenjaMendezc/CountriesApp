const Router = require('express')
const {getApiInfo, getCountryInfo, getDbInfo} = require('./utils.js')
const {Activity, Country} = require('../db.js')

const router = Router()

router.post('/', async (req, res)=>{
	const {name, difficulty, duration, season, idcode} = req.body
	try{
		const [newActivity, created] = await Activity.findOrCreate({
			//hacer el where con otra cosa no con name, tiene que ser algo mas único(probar con hook en el modelo)
			where: {name},
			defaults:{
			name: name,
			difficulty: difficulty,
			duration: duration,
			season: season
			}
		})

		
		let countries = await Country.findAll({where: {idcode}})

		// console.log(countries[0])

		// console.log(countries)

		await newActivity.addCountries(countries)

		// console.log(await newActivity.countCountries())

		res.json({created: created, newActivity})

	}catch(e){
		res.send('error on newActivity')
	}

})

module.exports = router