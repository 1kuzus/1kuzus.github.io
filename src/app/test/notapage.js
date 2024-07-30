'use client';
import React from 'react';
import useLocalStorage from 'src/hooks/useLocalStorage';

function MyComponent() {
    const [name, setName] = useLocalStorage('name', 'John Doe');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>My App</h1>
            <MyComponent />
        </div>
    );
}

export default App;
