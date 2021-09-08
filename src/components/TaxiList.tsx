import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@material-ui/core'
import React from 'react'
import { FaTaxi } from 'react-icons/fa'

const TaxiList = () => {
  return (
    <Box style={{ height: '100%', border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <List style={{ width: '100%' }}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FaTaxi />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Chevrolet Lacetti"
            secondary={
              <>
                <span
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>Синий</span>
                  <span>300м</span>
                </span>
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Box>
  )
}

export default TaxiList
