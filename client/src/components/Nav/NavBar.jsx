import {Link} from 'react-router-dom'

function NavBar(){

	function handleSubmit(e){
		e.preventDefault()
	}
	
	return <div>
	<Link to='/main'>
		<div>Home</div>
	</Link>
	<Link to='/main/about'>
		<div>About</div>
	</Link>
	<Link to='/main/form'>
		<div>Add Activity</div>
	</Link>
	<form  onSubmit={handleSubmit}>
		<input type='text'/>
		<input type='submit' value='Busca tu pais!'/>
	</form>
	</div>
}

export default NavBar