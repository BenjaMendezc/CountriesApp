import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/reducer.js'

const finalCreateStore = compose (applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	)(createStore)

const store = finalCreateStore(reducer)

export default store