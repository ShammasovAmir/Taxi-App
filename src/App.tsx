import React, { useState, useEffect } from 'react'
import './App.css'
import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import SuitableTaxi from './components/SuitableTaxi'
import TaxiList from './components/TaxiList'
import Map from './components/Map'

export interface CrewsInfoInterface {
  crewInfo: {
    crewId: number
    carMark: string
    carModel: string
    carColor: string
    carNumber: string
    driverName: string
    driverPhone: string
    lat: number
    lon: number
    distance: number
  }[]
}

const App = () => {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: '1.2rem 0' }}>
        Детали Заказа
      </Typography>
      <Divider />
      <form style={{ marginTop: '1.2rem' }}>
        <TextField
          label="Откуда"
          style={{ width: '60%', marginBottom: '2rem' }}
          required
        />
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ marginBottom: '2rem' }}
        >
          <Grid item xs={12} sm={3}>
            <Typography variant="h5">Подходящий экипаж:</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuitableTaxi />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ minHeight: '400px' }}>
          <Grid item xs={12} sm={8} style={{ background: 'red' }}>
            <Map />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TaxiList />
          </Grid>
        </Grid>
        <div
          style={{
            width: '100%',
            margin: '1.5rem 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Записать
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default App
