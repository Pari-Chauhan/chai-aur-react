import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Created the custom react app by creating a render function which takes element and create react element every time and render using it
// Came to our tradtional render function which takes function(returning object)
// Tried to create the function in main itself ->Successded
// Since the function too returning object, tried to create object and directly passing it -> denied object of diff formst but accepts the created React Object/Element
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } passing it in the render function won't work beacuse this was the objects whose attributes name we have set and React accept the object with certain attributes name only

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


// All the code of javascript comes outside the object/element(can come in function) which we are going to pass in the render
// Only the evaluated output comes inside the element and that too in curly braces
const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)


