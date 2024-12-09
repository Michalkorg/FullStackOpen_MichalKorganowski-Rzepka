import React from 'react';
import ReactDOM from 'react-dom/client'; // Używamy `createRoot` w Vite
import App from './App'; // Import komponentu App

// Tworzymy punkt wejścia aplikacji w DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderowanie aplikacji
root.render(<App />);
