import React from 'react'
import CountryCard from '../../Component/countryCard'
import DetailCard from '../../Component/detailCard'
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div>
      <Grid container spacing={3} justify="center" alignItems="stretch" direction="row">
        <Grid item>
          <CountryCard />
        </Grid>
        <Grid item>
          <DetailCard />
        </Grid>
      </Grid>

    </div>
  )
}

export default Home