// // first create a h1 element

// const heading = document.createElement('h1');


// // now add the content to the heading

// heading.innerHTML = 'Hello World from javascript';


// // get the root id to put the content

// const root = document.getElementById('root');

// // add the created headig to the root as a child

// root.appendChild(heading)

// We have created it using javascript , now lets create it using react


// how the dom understand document. things because its a special api given by browser 

// but browser doesnt understand react , for that the easiest way is to import the react library is to import from cdn

// cdn also called as content delivery network is a server which has all your libraries copie , wehn you fetch it , it fetches from geo near you so it will be fast

// now let us create it using react

// create element in react

// takes 3 things 1. tag , attributes in object , child or content , it is handeled by react

// react libraries is the core  usued to create element manage the state etc..

// the reactDom acts as a bridge between react and browser it is managed to show on the browser

// create element

// const heading = React.createElement('h1', {}, 'Hello World from React');

// // get the root element which is the main elemetn wehre our all react code will render - managed by DOM

// const root = ReactDOM.createRoot(document.getElementById('root'));

// //render the heading in the root

// root.render(heading);

// what is react element -  when you create a element using createEleemtn first yoiu will get the reat element , the react elemtn is simply a jaavscript object which has all the discription that is needed to be displayed in the web
// root.render does all the heavy work by comverting the react element to the dom and render i =t inn the browser

// always link script after you import the react from cdn becuase code is read from top to bottom line y line yor js code need react and react dom so use it before


// Let us see a complex nesting

import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'heading 1'),
        React.createElement('h2', {}, 'heading 2')
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)
