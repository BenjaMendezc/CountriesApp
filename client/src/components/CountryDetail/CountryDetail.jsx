import {useEffect} from 'react'
import {connect} from 'react-redux'
import {getDetail} from '../../actions/actions.js'
import styled from 'styled-components'


function CountryDetail(props){
	useEffect(()=>{
		props.getDetail(props.match.params.idPais)
		
	}, [])
	console.log(props)
	return <
	StyledDetail>
				<StyledImg>
					<img src={props.countryDetail.img}/>
				</StyledImg>
				<StyledDetails>
					<h1>{props.countryDetail.name}</h1>
						<h4>ID: {props.countryDetail.idcode}</h4>
						<li>Capital: {props.countryDetail.capital}</li>
						<li>Continent: {props.countryDetail.continent}</li>
						<li>SubContinent: {props.countryDetail.subregion}</li>
						<li>Area: {props.countryDetail.area} km2</li>
				<span>
				{props.activities.map((activity)=>{
					return<div> 
					<h5>{activity.name}</h5>
					<ul>
						<li>Dificultad: {activity.difficulty}</li>
						<li>Duración: {activity.duration}</li>
						<li>Estación: {activity.season}</li>
					</ul>
					</div>
				})}
				</span>
				</StyledDetails>
	</StyledDetail>
}

function mapStateToProps(state){
	return{
		countryDetail: state.countryDetail,
		activities: state.activities
	}
}

export default connect(mapStateToProps, {getDetail})(CountryDetail)



const StyledDetail = styled.div`
	display:grid;
	grid-template-columns: 40% 60%;
	grid-template-rows: 1fr;
	height:85vh;
	width:100%;
	align-items:center;
	font-family: 'Sans-serif', Arial;
	background-color:rgb(240, 240, 240)
`;


const StyledDetails = styled.div`
	display:grid;
	height:40vh;
	grid-template-columns: 50% 50%;
	grid-template-rows:1fr 1fr 1fr 1fr 1fr;
	row-gap:10px;
	li{
		list-style:none;
	}
	h5{
		display:inline-block;

	}
	h4{
		margin-top:2px;
	}
	h1{
		margin-top:2px;
	}
	span{
		display:grid;
		grid-template-columns:1fr 1fr 1fr 1fr;
		h5{
			margin-left:40px;
			margin-top:10px;
			margin-bottom:1px;
		}
	}
`;

const StyledImg = styled.div`
	height:40vh;
	width:480px;
	background-color: white;
	img{
		height:40vh;
		width:480px;
	}
`;
