import styled from 'styled-components'
import img from './about.jpg'

export default function About(){
	return <StyledLanding> 
		<img src={img}/>
	</StyledLanding>
}



const StyledLanding = styled.div`
	display: flex;
  	height: 100vh;
  	width: 100%;
  
`;