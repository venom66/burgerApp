import React from 'react';
import Aux from '../../hoc/Ux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar </div>
            <main className="Content">
                {props.children}
            </main>
            
    </Aux>
);

export default layout;