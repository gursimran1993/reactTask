import React from 'react'
import CountryCard from '../../Component/countryCard'
import DetailCard from '../../Component/detailCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CountryCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DetailCard />
        </Grid>
      </Grid>
      </Container>
    </div>
  )
}

export default Home