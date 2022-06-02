import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import Search from "../Search";
import "./styles.css"

const Main = () => {
  return (
  <div className='main'>
    <div className='middle-content'>
    <div className='content-middle'>
      <Card sx={{ maxWidth: 345 }} >
      <CardContent>
      <Typography>
      Enter a long URL to make it Qatsar
      </Typography>
      <Search />
      </CardContent>
      </Card>
      </div>
      </div>
      <h3 className='middle-h3'> Qatsar is a simple tool that shortens links and <br/>allows you to overlay your own custom message onto any piece of content, <br/>creating an opportunity for you to include a call-to-action with every link you share.</h3>
    </div>
  )
}

export default Main
