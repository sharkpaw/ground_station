import React from 'react';
import MainLayout from './components/MainLayout';
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

PrimeReact.ripple = true;
PrimeReact.autoZIndex = true;

function App() {
  return (
    <div>
      <MainLayout/>
    </div>
  );
}

export default App;
