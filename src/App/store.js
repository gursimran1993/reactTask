import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import countryReducer from '../Redux/Reducer/addDataReducer'

const reducer = combineReducers({
  countriesData :countryReducer
})

const middleWare = [thunkMiddleWare]
const store = createStore(reducer, applyMiddleware(...middleWare))
export default store