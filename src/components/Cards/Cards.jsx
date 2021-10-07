import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data: { confirmed, deaths, recovered, lastUpdate } }) => {
    
    console.log(lastUpdate)
    if(!confirmed){
        return <p>loading...</p>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center' >
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of cases of covid_19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of recoveries from covid_19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Deaths </Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of deaths caused by covid_19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
