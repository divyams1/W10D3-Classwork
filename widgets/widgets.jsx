import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './frontend/clock';
// import Tabs from "./frontend/tabs";
import Root from "./frontend/root";


document.addEventListener("DOMContentLoaded", ()=> {

    ReactDOM.render(
        // // < Clock/>
        // <Tabs tabs={articles} />
        <Root/>
        ,
        document.getElementById('root')
    );
})

// > a ={1:'hello', 2:'bye'}
// { '1': 'hello', '2': 'bye' }
