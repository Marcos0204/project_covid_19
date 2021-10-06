import React, { useEffect, useState } from 'react';
import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

const App = () => {

    const [ data, setData ] = useState({}) 

    useEffect(  ()=>{
        
            async function fecht() {
                const  data  = await fetchData();
                setData(data)
            }
            fecht()
            
        
    }, [])
    console.log(data)
    return (
        <div className={styles.container}>
            <Cards/>
            <Chart/>
            <CountryPicker/>
        </div>
    )
}

export default App
