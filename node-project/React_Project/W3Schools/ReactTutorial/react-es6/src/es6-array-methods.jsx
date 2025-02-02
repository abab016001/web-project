import React from 'react';
import ReactDOM from 'react-dom/client';
const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item)=> <p key={item}>{item}</p>);

const container = document.getElementById("root");
if (!container) {
    document.body.appent(container);
}
const root = ReactDOM.createRoot(container);
root.render(myList);

