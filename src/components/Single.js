import React from 'react';
import { Accordion } from 'react-bootstrap';

const Single = (props) => {
    return (
        <div>
            <Accordion.Body>
                {props.sin.sub_category_name}
                <button onClick={() => props.add(props.sin.sub_category_name)}>Add</button>
            </Accordion.Body>
        </div>
    );
};

export default Single;