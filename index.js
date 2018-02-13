import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => {
    return (
        <Header />
    );
};

// Render the component
AppRegistry.registerComponent('albums', () => App);