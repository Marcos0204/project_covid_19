import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({data}) => {
    console.log(data)
    return (
        <div className={styles.container}>
            
            <Typography>cards</Typography>
        </div>
    )
}

export default Cards
