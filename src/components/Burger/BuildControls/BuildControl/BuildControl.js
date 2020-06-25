import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './BuildControl.css';

const buildControl = (props) => (
    <Container className="p-0 m-1 border border-info">
        <div className="Label">{props.label}</div>
    <div className="BuildControl">
        <Button className="btn btn-info m-1" onClick={props.remove} disabled={props.disabled}>Less --</Button>
        <div className="m-1">{props.count}</div>
        <Button className="btn btn-warning m-1" onClick={props.added}>More ++</Button>
    </div>
    </Container>

);

export default buildControl;