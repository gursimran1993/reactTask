import data from '../../Core/data.json'
export const ADD_COUNTRY_ACTION = "ADD_COUNTRY_ACTION"
export const REMOVE_COUNTRY_ACTION = "REMOVE_COUNTRY_ACTION"


export function addCountry(countryId, stateId){
  const country = data.find(country => country.countryId === countryId)
  const state = country.states.find(state => state.stateId === stateId)

  return {
    type: ADD_COUNTRY_ACTION,
    payload: {country, state}
  }
}

export function removeCountry(countryId, stateId){
  return {
    type: REMOVE_COUNTRY_ACTION,
    payload: {countryId, stateId}
  }
}