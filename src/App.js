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
    
    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <Chart/>
            <CountryPicker/>
        </div>
    )
}

export default App
