import {useState, useEffect} from 'react'
import axios from 'axios'
import {DETAIL_URL} from '../../appConstants.js'
import styled from 'styled-components'

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

	console.log(state, 'state')
	console.log(adder, 'adder')
	return <StyledForm>
		<StyledBody onSubmit={handleStateSubmit}>
			<label htmlFor='name'>name</label>
				<input 
				type='text' 
				name='name' 
				value={state.name} 
				onChange={handleStateInputChange}
				/>
			<label htmlFor='difficulty'>difficulty</label>
				<input 
				type='text' 
				name='difficulty' 
				value={state.difficulty} 
				onChange={handleStateInputChange}
				/>
			<label htmlFor='duration'>duration</label>
				<input 
				type='text' 
				name='duration' 
				value={state.duration} 
				onChange={handleStateInputChange}
				/>
			<label htmlFor='season'>season</label>
				<input 
				type='text' 
				name='season' 
				value={state.season} 
				onChange={handleStateInputChange}
				/>
		<StyledAdder>
			<label htmlFor='idcode'>Escribí el ID para agregar un país</label>
				<input 
				type='text'
				name='idcode' 
				value={state.idcode} 
				onChange={handleAdderInputChange}
				/>
				<button 
				type='submit' 
				onClick={handleSubmit}
				>Agregar país</button>
			<div>{adder.map((country)=>{
				return <h4>{country}</h4>
			})}</div>
		</StyledAdder>
			<button type='submit'>Crear actividad</button>
		</StyledBody>
		<button onClick={handleClick}>Go home</button>
	</StyledForm>
}

export default Form


const StyledForm = styled.div`
	height:97vh;
	background-color: rgb(240, 240, 240);
	button{
		margin-top: 15px;
		border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
	}
	button:hover {
            transition: 0.5s;
            background-color: RoyalBlue;
        }
`;

const StyledBody = styled.form`
	display:flex;
	flex-flow: column;
	width:20%;
	justify-items: space-between;
	label{
		margin-top:10px;
	}

`;
const StyledAdder = styled.form `
	display:inline-flex;
	flex-flow: column wrap;
	margin-top:20px;
	margin-bottom:20px;
`;
