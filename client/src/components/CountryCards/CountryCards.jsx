import CountryCard from '../CountryCard/CountryCard.jsx'

function CountryCards(props){
	console.log(props)
	return <div>
		<h1>Henry Countries</h1>
		<span>{props.countries.map((country)=>{
			return <CountryCard country={country}/>
		})}
		</span>
	</div>
}



export default CountryCards