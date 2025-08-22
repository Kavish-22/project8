import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../helper/helper';

export default function BusinessListing() {

    const { city } = useParams();
    const [searchParams] = useSearchParams();
    const business = searchParams.get("q");
    const [ourBusinesses, setOurBusinesses] = useState([]);

    useEffect(() => {
        // API calling with axios

        try {
            axios.get(`${BASE_URL}/api/businesses?populate=cities&filters[name][$containsi]=${business}&filters[cities][name][$eqi]=${city}`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                    setOurBusinesses(response?.data?.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Business Listing</h1>
                <br />
                <hr />
                <p><strong>City:</strong> {city}</p>
                <p><strong>Search:</strong> {business}</p>
            </div>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Backend Data 👇</li>
            </ul>
            <hr />

            <ul className="list-group">
                {
                    console.log('=>'.ourBusinesses)
                }
                {
                    ourBusinesses.length > 0 &&
                    ourBusinesses.map((cv, index, arr) => {
                        return (

                            <li key={cv.id} className="list-group-item">{cv.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
