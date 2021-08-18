import {Link} from 'react-router-dom'

export default function CountryCard(props){
	return <div >
		<Link to={`/countries/params/${props.country.idcode}`}>
			<h3>{props.country.name}</h3>
		</Link>
		<img src={props.country.img} alt='no flag'/>
		<h4>{props.country.continent}</h4>
	</div>
}