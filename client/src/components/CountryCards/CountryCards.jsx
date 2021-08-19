import CountryCard from '../CountryCard/CountryCard.jsx'
import Paginado from '../Paginado/Paginado.jsx'
import {useState} from'react'
import styled from 'styled-components'
// import img from '../../image.png'


function CountryCards(props){

	console.log(props)
	const [current, setCurrent] = useState(1)
	const [countriesPerPage, setCountriesPerPage] = useState(9)
	const [order, setOrder] = useState('')

	const[name, setName] = useState('')

	const indexOfLastCountry = current * countriesPerPage
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
	const currentCountries = props.countries.slice(indexOfFirstCountry, indexOfLastCountry)
	
	const paginado = (pageNumber) => {
		setCurrent(pageNumber)
	}

	function handleContinentFilter(e){
		e.preventDefault()
		props.continentFilter(e.target.value)
	}

	function handleOrderByName(e){
		e.preventDefault()
		props.orderByName(e.target.value)
		setCurrent(1)
		setOrder(`Ordenado ${e.target.value}`)
	}

	function handleOrderByArea(e){
		e.preventDefault()
		props.orderByArea(e.target.value)
		setCurrent(1)
		setOrder(`Ordenado ${e.target.value}`)
	}

	function handleInputChange(e){
		e.preventDefault()
		setName(e.target.value)
		console.log(name)
	}

	function handleSubmit(e){
		e.preventDefault()
		props.searchCountry(name)
	}
	function handleActivityFilter(e){
		e.preventDefault()
		props.activityFilter(e.target.value)
	}

	return 	<StyledHome>
			<StyledHeader>
				<span>
					<h1>LocalHost3000</h1>
					<p>Country finder & Activity creator</p>
				</span>
					<Paginado 
					countriesPerPage={countriesPerPage} 
					allCountries={props.countries.length}
					paginado={paginado}
					/>
			</StyledHeader>
			<StyledSelectors>
				<select onChange={handleOrderByName}>
					<option>Sort by name</option>
					<option value='asc'>Ascendente</option>
					<option value='desc'>Descendente</option>
				</select>
				<select onChange={handleOrderByArea}>
					<option>Sort by area</option>
					<option value='ascend'>Ascendente</option>
					<option value='descend'>Descendente</option>
				</select>
				<select onChange={handleContinentFilter}>
					<option >Sort by continent</option>
					<option value='all'>Todos</option>
					<option value='Africa'>Africa</option>
					<option value='Americas'>Americas</option>
					<option value='Asia'>Asia</option>
					<option value='Europe'>Europe</option>
					<option value='Oceania'>Oceania</option>
				</select>

				<select onChange={handleActivityFilter}>
					<option>Sort by Activity</option>
					<option value = 'all'>Todas</option>
					{props.activities.map((activity)=>{
						return <option value={activity.name}>{activity.name}</option>
					})}
				</select>
				<form  onSubmit={handleSubmit}>
					<input type='text' onChange={handleInputChange}/>
					<input type='submit' value='Busca tu pais!' style={inputStyle}/>
				</form>
			</StyledSelectors>
			<StyledCards>
				{currentCountries.map((country)=>{
					return(
							<CountryCard
							key={country.idcode}
							id={country.idcode} 
							name={country.name} 
							img={country.img} 
							continent={country.continent}
							/>
					)
				})}
			</StyledCards>
		</StyledHome>
}



export default CountryCards


const StyledCards = styled.div`
  	display: grid;
  	justify-items:center;
  	grid-template-columns: 1fr 1fr 1fr;
  	grid-template-rows: auto;
  	grid-column-gap: 0.5rem;
  	grid-row-gap: 5rem;
  	margin-top: 30px;
`;

const StyledHeader = styled.div`
	display:grid;
	grid-template-columns: 1fr 1fr;
	justify-items:center;
	span{
		display:block-flex;
		font-family: 'Sans-serif', Arial;
		color:DarkSlateGray;
		h1{
			margin-bottom:1px;
		}
		p{
			margin-top:1px;
		}

	}

`;

const StyledSelectors = styled.div`
	display:flex;
	justify-content: space-around;

`;

const inputStyle = {
        color: 'DarkSlateGray',

}

const StyledHome= styled.div`
	margin-top:40px;
	height: 75vh;
`;