import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import Search from "../Search";
import "./styles.css"

const Main = () => {
  return (
  <div className='main'>
  <div className='container'>
    <div className='middle-content'>
    <div className='content-middle'>
      <Card sx={{ maxWidth: 345 }} >
      <CardContent>
      <Typography>
      Enter a long URL to make it qat<span className='primary'>sar</span>
      </Typography>
      <Search />
      </CardContent>
      </Card>
      </div>
      </div>
      <div>
      <h1> qat<span className='primary'>sar</span> is a simple tool that shortens links and allows you to overlay your own custom message onto any piece of content. </h1>
      <p className="main-sht">It creates an opportunity for you to include a call-to-action with every link you share.</p>
    </div>
    </div>
    </div>
  )
}

export default Main
