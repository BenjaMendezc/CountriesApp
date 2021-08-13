const Router = require('express')
const {getApiInfo, getCountryInfo, getDbInfo} = require('./utils.js')
const {Activity} = require('../db.js')

const router = Router()

router.post('/', async (req, res)=>{
	const {name, difficulty, duration, season} = req.body
	try{
		const newActivity = await Activity.create({
			name: name,
			difficulty: difficulty,
			duration: duration,
			season: season
		})
		res.json(newActivity)
	}catch(e){
		res.send('error on newActivity')
	}

})

module.exports = router