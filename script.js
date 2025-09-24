import React from 'react'
import ReactDOM from 'react-dom/client'


// Now lwt us create React Element using jsx

const jsxHeading = (
    <h1 className='Heading'>
        "Hello From React"
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);