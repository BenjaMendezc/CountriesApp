import {Link} from 'react-router-dom'

function NavBar(){

	function handleSubmit(e){
		e.preventDefault()
	}
	
	return <div>
	<Link to='/countries'>
		<div>Home</div>
	</Link>
	<Link to='/countries/about'>
		<div>About</div>
	</Link>
	<Link to='/activity'>
		<div>Add Activity</div>
	</Link>
	<form  onSubmit={handleSubmit}>
		<input type='text'/>
		<input type='submit' value='Busca tu pais!'/>
	</form>
	</div>
}

export default NavBar