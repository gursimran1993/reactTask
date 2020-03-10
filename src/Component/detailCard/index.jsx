import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { removeCountry } from '../../Redux/Action/adddataAction'
import Chip from '@material-ui/core/Chip';
import NoResultFound from '../NoRecords'


class DetailCard extends Component {
  handleCheck = (stateId, countryId) => {
    const { dispatch } = this.props
      dispatch(removeCountry(countryId, stateId))
  }
  render() {
    const { countries } = this.props
    return (
      <Card style={{ height:'100%' }}>
        <CardContent>
        {Boolean(countries.length) ?
            countries.map(item => (
              <Fragment key={item.countryId}>
                <Typography variant="h5" component="h2" key={item.countryId}>
                  {item.countryName}
                </Typography>
                {
                  item.states.map(state => (
                      <Chip label={state.stateName} key={state.stateId} onDelete={() => this.handleCheck(state.stateId, item.countryId)} color="primary" />
                    
                  ))
                }
              </Fragment>
            )):
             <NoResultFound/>
          }

        </CardContent>
      </Card>
    )
  }
}
export default connect(state => ({ countries: state.countriesData.countries }))(DetailCard)