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
      <Card style={{ width: 500, height:'100%' }}>
        <CardContent>
        {Boolean(countries.length) ?
            countries.map(item => (
              <Fragment>
                <Typography variant="h5" component="h2" key={item.countryId}>
                  {item.countryName}
                </Typography>
                {
                  item.states.map(state => (
                    <Typography color="textSecondary" key={state.stateId}>
                      <Chip label={state.stateName} onDelete={() => this.handleCheck(state.stateId, item.countryId)} color="primary" />
                    </Typography>
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