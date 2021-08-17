
function Landing(props){
	function onClick(){
		props.history.push('/countries')
	}
	return <div>
		<button onClick={onClick} >Welcome!</button>
	</div>
}


export default Landing