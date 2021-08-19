const Router = require('express')
const {getApiInfo, getCountryInfo, getDbInfo} = require('./utils.js')
const {Activity, Country} = require('../db.js')

const router = Router()

router.post('/', async (req, res)=>{
	const {name, difficulty, duration, season, additions} = req.body
	try{
		const [newActivity, created] = await Activity.findOrCreate({
			where: {name},
			defaults:{
			name: name,
			difficulty: difficulty,
			duration: duration,
			season: season
			}
		})

		
		let countries = await Country.findAll({where:{name:additions}})
		console.log(countries)

		await newActivity.addCountries(countries)

		
		res.json({created: created, newActivity})

	}catch(e){
		res.send('error on newActivity')
	}

})

module.exports = router