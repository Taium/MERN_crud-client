import React from 'react';
import { Accordion } from 'react-bootstrap';

const showCat = (props) => {
    console.log('showCat', props.cat)
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.cat.name}</Accordion.Header>
                    <Accordion.Body>
                        sub category
                    </Accordion.Body>
                    <Accordion.Body>
                        sub category
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default showCat;