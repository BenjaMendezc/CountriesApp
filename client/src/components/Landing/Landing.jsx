import styled from 'styled-components'
import img from '../../image.png'

function Landing(props){
	function onClick(){
		props.history.push('/countries')
	}
	return <StyledLanding >

			<button onClick={onClick}>Descubrí LocalHost3000</button>

	</StyledLanding>
}


export default Landing



const StyledLanding = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 97vh;
  width:100%;
  button{
  	position:absolute;
  	top:275px;
  	bottom:100px;
  	right:100px;
  	left:100px;
  	height: 10vh;
  	width:170px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    cursor: pointer;
    font-family: 'Sans-serif', Arial;
    font-weight: 800;

  }
    button:hover {
            transition: 0.5s;
            background-color: RoyalBlue;
        }
`;

            
            
      