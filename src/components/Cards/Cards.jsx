import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({data}) => {
    console.log(data)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center' >
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Infected</Typography>
                        <Typography variant='h5'> Real data</Typography>
                        <Typography color='textSecondary' >real data</Typography>
                        <Typography variant='body2'> number of actives deas covid_19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Infected</Typography>
                        <Typography variant='h5'> Real data</Typography>
                        <Typography color='textSecondary' >real data</Typography>
                        <Typography variant='body2'> number of actives deas covid_19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary' >Infected</Typography>
                        <Typography variant='h5'> Real data</Typography>
                        <Typography color='textSecondary' >real data</Typography>
                        <Typography variant='body2'> number of actives deas covid_19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
