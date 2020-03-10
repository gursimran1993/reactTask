import { ADD_COUNTRY_ACTION, REMOVE_COUNTRY_ACTION } from '../Action/adddataAction'

const intialState = {
  countries: [],
  stateIdd:0
}

export default function countryReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_COUNTRY_ACTION:
      const { country, state: statedata } = action.payload
      let currentData = [].concat(state.countries)
      const countryFind = currentData.find(countryData => country.countryId === countryData.countryId)
      if (countryFind) {
        currentData = currentData.map(currentCountry => {
          if (currentCountry.countryId === country.countryId) {
            currentCountry.states.push(statedata)
          }
          return currentCountry
        })
      }
      else {
        currentData.push({
          countryName: country.countryName,
          countryId: country.countryId,
          states: [statedata]
        })
      }
      return Object.assign({}, state, { countries: currentData })

    case REMOVE_COUNTRY_ACTION:
      const { countryId, stateId } = action.payload
      let currentDataBeforeRemove = [].concat(state.countries)
      const countryFindforDelete = currentDataBeforeRemove.find(countryData => countryId === countryData.countryId)
      if (countryFindforDelete) {
        currentDataBeforeRemove = currentDataBeforeRemove.map(currentCountry => {
          if (currentCountry.countryId === countryId) {
            const index = currentCountry.states.findIndex(data => data.stateId === stateId)
            if (index !== undefined) {
              currentCountry.states.splice(index, 1)
            }
          }
          return currentCountry
        })
      }

      currentDataBeforeRemove = currentDataBeforeRemove.filter(country => {
        if (country.states.length) {
          return true
        } else {
          return false
        }
      })

      return Object.assign({}, state, { countries: currentDataBeforeRemove })

    default:
      return intialState
  }
}