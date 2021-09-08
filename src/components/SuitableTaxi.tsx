import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FaTaxi } from 'react-icons/fa'
import { CrewsInfoInterface } from '../App'

const SuitableTaxi = () => {
  return (
    <Box
      style={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '20px',
        boxShadow: '10px 10px 5px -5px rgba(0,0,0,0.75)',
        maxWidth: '400px',
      }}
    >
      <Grid container spacing={4}>
        <Grid item>
          <FaTaxi size={60} />
        </Grid>
        <Grid item>
          <Typography variant="h6">Chevrolet Lacetti</Typography>
          <p>Синий</p>
          <Box
            style={{
              border: '2px solid rgba(0, 0, 0, 0.5)',
              padding: '0.6rem 0.8rem',
              maxWidth: '200px',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1">Е234КУ</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SuitableTaxi
