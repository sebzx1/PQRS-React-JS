import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';

//componentes
function App() {
  const [title, setTitle] = useState(''); // Estado para manejar el título

  const handleLinkClick = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <Router>
      <Navbar />
      <div className="App">
        {/* Pasamos el estado y el manejador al componente Cuerpo */}
        <Cuerpo title={title} onLinkClick={handleLinkClick} />
      </div>
    </Router>
  );
}

export default App;

