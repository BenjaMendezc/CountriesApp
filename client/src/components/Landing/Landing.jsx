
function Landing(props){
	function onClick(){
		props.history.push('/main')
	}
	return <div>
		<button onClick={onClick} >Welcome!</button>
	</div>
}


export default Landing