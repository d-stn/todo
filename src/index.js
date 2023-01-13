import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OlayContextProvider } from './context/OverlayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <OlayContextProvider>
        <App />
    </OlayContextProvider>
);

