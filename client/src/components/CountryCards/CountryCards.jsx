import {connect} from 'react-redux'
import {consoleLog} from '../../actions/actions.js'

function CountryCards(props){
	console.log(props)
	return <div>
		<h1>Henry Countries</h1>
      	<p>aca van los datos del main :)</p>
		<button onClick={()=>{props.consoleLog('soy el reducer andando :)')}}>probar el reducer</button>
	</div>
}

function mapStateToProps(state){
	return{
		testState: state.testState
	}
}

export default connect(mapStateToProps, {consoleLog})(CountryCards)