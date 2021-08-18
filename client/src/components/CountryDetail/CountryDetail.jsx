import {useEffect} from 'react'
import {connect} from 'react-redux'
import {getDetail} from '../../actions/actions.js'


function CountryDetail(props){
	useEffect(()=>{
		props.getDetail(props.match.params.idPais)
	}, [])
	console.log(props)
	return <div>
			<h1>{props.countryDetail.name}</h1>
			<h4>{props.countryDetail.idcode}</h4>
			<img src={props.countryDetail.img}/>
			<ul>{props.countryDetail.continent}</ul>
			<ul>{props.countryDetail.capital}</ul>
			<ul>{props.countryDetail.subregion}</ul>
			<ul>{props.countryDetail.area}km2</ul>
			<span>{props.activities.map((activity)=>{
				return <ul> {activity.name} </ul>
			})}
			</span>
	</div>
}

function mapStateToProps(state){
	return{
		countryDetail: state.countryDetail,
		activities: state.activities
	}
}

export default connect(mapStateToProps, {getDetail})(CountryDetail)