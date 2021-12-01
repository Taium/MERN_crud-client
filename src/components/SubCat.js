import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Single from './Single';

const SubCat = (props) => {
    const [readSingle, setReadSingle] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/readDataSubCategory/${props.sub}`)
            .then(res => res.json())
            .then(data => setReadSingle(data.data))
    }, [])
    console.log(readSingle);
    return (
        <>
            {
                readSingle &&
                readSingle.length &&
                readSingle.map(read => (<Single sin={read} add={props.add}></Single>))
            }
        </>
    );
};

export default SubCat;