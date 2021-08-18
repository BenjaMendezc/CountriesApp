import {useState, useEffect} from 'react'
import axios from 'axios'
import {DETAIL_URL} from '../../appConstants.js'


function Form(props){

	const[state, setState] = useState({})

	const[adder, setAdder] = useState([])

	// const[countries, setCountries] = useState([])

	function handleClick(e){
		props.history.push('/countries')
	}

	function handleStateInputChange(e){
		setState((prevState)=>{
			return{
				...prevState,
				[e.target.name]: e.target.value
			}
		})
	}

	function handleAdderInputChange(e){
		setState((prevState)=>{
			return{
				...prevState,
				[e.target.name]: e.target.value
			}
		})
	}

	// function getCountries(){
	// 	 axios.get(DETAIL_URL+state.idcode)
	// 		.then(response=>{
	// 			setAdder([...adder, response.data.name])
	// 		})
	// }
	async function getCountries(){
		const country = await axios.get(DETAIL_URL+state.idcode)
		console.log(country, 'country')
		return country.data ? setAdder([...adder, country.data.name]) : alert('noIdcode')
	}


	function handleSubmit(e){
		e.preventDefault()
		getCountries()
	}

	function handleStateSubmit(e){
		e.preventDefault()
		const data = {
			...state,
			additions: adder
		}
		axios.post('http://localhost:3001/activity', data)
		alert('Se agregó la actividad')
	}

	console.log(state, '')
	console.log(adder, 'adder')
	return <div>
		<button onClick={handleClick}>Go home</button>
		<form onSubmit={handleStateSubmit}>
			<label htmlFor='name'>name</label>
				<input type='text' name='name' value={state.name} onChange={handleStateInputChange}/>
			<label htmlFor='difficulty'>difficulty</label>
				<input type='text' name='difficulty' value={state.difficulty} onChange={handleStateInputChange}/>
			<label htmlFor='duration'>duration</label>
				<input type='text' name='duration' value={state.duration} onChange={handleStateInputChange}/>
			<label htmlFor='season'>season</label>
				<input type='text' name='season' value={state.season} onChange={handleStateInputChange}/>
		<form>
			<label htmlFor='idcode'>idcode</label>
				<input type='text' name='idcode' value={state.idcode} onChange={handleAdderInputChange}/>
				<input type='submit' onClick={handleSubmit}/>
			<div>{adder.map((country)=>{
				return <h4>{country}</h4>
			})}</div>
		</form>
			<input type='submit'/>
		</form>
	</div>
}

export default Form
/*
const {name, difficulty, duration, season, idcode} = req.body
*/