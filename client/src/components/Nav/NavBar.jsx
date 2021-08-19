import {Link} from 'react-router-dom'
import styled from 'styled-components'

function NavBar(){
	
	return <StyledNavBar>
	<Link to='/countries'>
		<button>Home</button>
	</Link>
	<Link to='/activity'>
		<button>Add Activity</button>
	</Link>
	<Link to='/countries/about'>
		<button>About</button>
	</Link>
	</StyledNavBar>
}

export default NavBar



const StyledNavBar = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
	padding-top:50px;
	padding-bottom:10px;
	background-color:rgb(240, 240, 240);
	button {
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