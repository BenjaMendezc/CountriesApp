import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function CountryCard({name, img, continent, id}){
	return <div>
	<Link to={`/countries/params/${id}`} style={linkStyle}>
	<StyledCard >
		<StyledImg>
			<img src={img} alt='no flag'/>
		</StyledImg>
		<StyledDetails>
			<ul>
				<StyledName>
					{name}
				</StyledName>
				<StyledContinent>
					{continent}
				</StyledContinent>
			</ul>
		</StyledDetails>
	</StyledCard>
	</Link>
	</div>
}

const linkStyle = {
	textDecoration: 'none',
	color: 'DarkSlateGray'
}

const StyledCard = styled.div`

	display: grid;
	grid-template-columns: 30% 70%;
	height:10vh;
	width:250px;
	border-color: rgb(240, 240, 240);
	border-style:groove;
	border-radius: 2px;
	cursor:pointer;
`;

const StyledDetails = styled.div`
		display: flex;
		flex-flow: column;
		font-family: 'Sans-serif', Arial;
		font-size: 0.8em;
		height:10vh;
		width:175.5px;
		background-color:rgb(240, 240, 240);
		ul{
			margin:0px;
			padding-left: 0px;
			display:block-flex;
			flex-flow:row;
			list-style: none;
			a{
				list-style:none;
			}
		}
	}
`;

const StyledName = styled.li`
	font-weight:800;
	margin-top:8px;
	margin-left:15px;
	margin-bottom: 2px;
	font-size: 1em;
`;

const StyledContinent = styled.li`
	text-transform:uppercase;
	color:DarkSlateGray;
	margin-top:7px;
	margin-left:15px;

`;

const StyledImg = styled.div`
	height:10vh;
	background-color:white;
	img{
	position:relative;
	top: 15px;
	left: 12px;
	height: 5vh;
	width: 50px;
	}
`;