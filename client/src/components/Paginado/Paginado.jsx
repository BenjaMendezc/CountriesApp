import React from 'react'
import styled from 'styled-components'

export default function Paginado({countriesPerPage, allCountries, paginado}){
	const pageNumbers = []

	for(let i = 1; i<=Math.ceil(allCountries/countriesPerPage); i++){
		pageNumbers.push(i)
	}

	return(
		<StyledPaginator>
			<ul>
				{pageNumbers && pageNumbers.map(number=>{
					return(
					<li key={number}>
					<a onClick={()=> paginado(number)}>{number}</a>
					</li>
					)
				})}
			</ul>
		</StyledPaginator>
		)
}

const StyledPaginator = styled.nav`
	ul{
		display:flex;
		list-style:none;
		margin-top:30px;
		margin-right:60px;
		padding: 0px;
	}

	li{
		cursor: pointer;
		background-color: rgb(240, 240, 240);
		margin-left: 0px;
		margin-right: 0px;
		border-left:0px;
		padding:3px;
		border-color: rgb(240, 240, 240);
		border-style:solid;
		border
	}
	li:hover{
		transition: 0.5s;
        background-color: RoyalBlue;
	}
`;