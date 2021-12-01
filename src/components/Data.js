import React from 'react';
import { Accordion } from 'react-bootstrap';
import SubCat from './SubCat';

const Data = (props) => {
    const addData = () => {
        props.add(props.cat.name)
    }
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.cat.name}</Accordion.Header>
                <button onClick={() => addData()}>Add</button>

                <SubCat sub={props.cat.id} add={props.add}></SubCat>


            </Accordion.Item>
        </Accordion>
    );
};

export default Data;