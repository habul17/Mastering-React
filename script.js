import React from 'react'
import ReactDOM from 'react-dom/client'


// Now lwt us create React Element using jsx

const jsxHeading = (
    <h1 className='Heading'>
        "Hello From React"
    </h1>
)

// Let us use functional components - just a normal function

const HeadingComponent = () => {
    return <h1>
        "From Functional components - explicit return"
    </h1>
}

// implicit return

const HeadingComponent1 = () => (
    <div id='container'>
        <h1>"From Functional component - implicit return"</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent1 />);