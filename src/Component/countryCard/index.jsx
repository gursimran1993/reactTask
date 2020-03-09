import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import data from '../../Core/data.json'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { addCountry, removeCountry } from '../../Redux/Action/adddataAction'


class CountryCard extends Component {
  handleCheck = (stateId, countryId, event) => {
    const { dispatch, countries } = this.props
    if (event.target.checked)
      dispatch(addCountry(countryId, stateId))
    else
      dispatch(removeCountry(countryId, stateId))
      
  }
  getChecked = (countryId, stateId) => {
    const { countries } = this.props
    const country = countries.find(countryData => countryData.countryId === countryId)
    if (country) {
    const stateData = country.states.find(state => state.stateId === stateId)
    if (stateData)
    return true
    return false
    }
    return false
    }
  render() {
   console.log(this.props.countries, "afgh")
    return (
      <div>
        <Card style={{ width: 500 }}>
          <CardContent>
            {
              data.map(item => (
                <Fragment>
                  <Typography variant="h5" component="h2" key={item.countryId}>
                    {item.countryName}
                  </Typography>
                  {
                    item.states.map(state => (
                      <Typography color="textSecondary" key={state.stateId}>
                        <Checkbox
                          checked={this.getChecked(item.countryId, state.stateId)}
                          onChange={(event) => this.handleCheck(state.stateId, item.countryId, event)}
                          value={state.stateId}
                          color="primary"
                          key={state.stateId}
                        />
                        {state.stateName}

                      </Typography>
                    ))
                  }
                  </Fragment>
              ))
            }

          </CardContent>
        </Card>
      </div>
    )
  }
}

export default connect(state => ({ countries: state.countriesData.countries }))(CountryCard)