import '../App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchFieldMui from './SearchFieldMui';
import SearchField from './SearchField';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const url = 'https://swapi.dev/api/people/'

export default function Main () {
    const [people, setPeople]= useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios.get(url)
                const data = await result.data;
                setPeople(data.results)
                setLoading(false)
            }
            fetchData()
        }, []
        )

        const Loading = () => {
            return (
                <>
                    <div className='skeleton'>
                        <Skeleton height={200} width={300}></Skeleton>
                    </div>
                    <div className='skeleton'>
                        <Skeleton height={200} width={300}></Skeleton>
                    </div>
                </>
            )
        }
    
    return (
        <div className="main">
            {loading ? <Loading></Loading> 
            :
            <>
                <div className='search-field'>
                    <p>Поиск имен, используя Material UI:</p>
                    <SearchFieldMui people={people}></SearchFieldMui> 
                </div>
                <div className='search-field handmade'>
                    <p>Поиск имен, написанный вручную:</p>
                    <SearchField people={people}></SearchField>
                </div>
            </>
            }
        </div>
    )
}
