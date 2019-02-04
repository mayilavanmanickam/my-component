import React, { Component } from 'react';
import ChildComponent from './child.component';
import './styles.css';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello from My Component</h1>
                <ChildComponent />
            </div>
        );
    }
}

export default MyComponent;