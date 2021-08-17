

function Form(props){
	function handleClick(e){
		props.history.push('/countries')
	}
	return <div>
		<h1>Desde aca creo actividades :)</h1>
		<button onClick={handleClick}>Go home</button>
	</div>
}

export default Form