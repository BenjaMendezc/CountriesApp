import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/Nav/NavBar.jsx'
import CountryCards from './components/CountryCards/CountryCards.jsx'
import Landing from './components/Landing/Landing.jsx'
import Form from './components/Form/Form.jsx'
import CountryDetail from './components/CountryDetail/CountryDetail.jsx'
import About from './components/About/About.jsx'
import {connect} from 'react-redux'
import {getCountries, filterCountriesByContinent, orderByName, orderByArea, searchCountry, activityFilter} from './actions/actions.js'
import img from './errorHandler.jpg'

function App(props) {

    React.useEffect(()=>{
        props.getCountries()
    }, [])

  return (
    <div className="App">
    
                <Route exact path='/' component={Landing} />
                <Route path='/countries' component={NavBar}/>
                <Route exact path='/countries/about'>
                	<About />
                </Route>
                <Route exact path='/countries/params/:idPais' component={CountryDetail}/>
                <Route exact path='/countries'>
                  <CountryCards countries={props.countries}
                  allCountries={props.allCountries} 
                  activities={props.activities}
                  continentFilter={props.filterCountriesByContinent}
                  orderByName={props.orderByName}
                  orderByArea={props.orderByArea}
                  searchCountry={props.searchCountry}
                  activityFilter={props.activityFilter}
                  />
                </Route>
                <Route exact path='/activity' component ={Form} />
                <Route exact path='/error'>
                  <img src={img} />
                </Route>

    </div>
  );
}

function mapStateToProps(state){
    return{
        testState: state.testState,
        countries: state.countries,
        allCountries: state.allCountries,
        activities: state.activities
    }
}

export default connect(mapStateToProps, {
    getCountries, 
    filterCountriesByContinent,
    orderByName,
    orderByArea,
    searchCountry,
    activityFilter
})(App);
