import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {palettes} from './palettes.js'



const App = () => {

  const firstPalette = palettes[0];

return (
    <><div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        <div className="palette">
          <div className="palette-scheme palette-scheme--vertical">
            <img src={firstPalette.image} alt=""/>
            <div className="scheme-colors">
              {firstPalette.colors.map((color) => ( 
                  <div key={color} className="scheme-color" style={{ backgroundColor: color }}>{color}
                  </div> 
                ))}
            </div>
          </div>
          <div className="palette-info">
            <h2>{firstPalette.name}</h2>
            <p>{firstPalette.description}</p>
            <p>Photo by: <a href={firstPalette.url}>{firstPalette.name}</a></p>
          </div>
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div></>
  );

};

createRoot(
  document.querySelector('#app'),
).render(<App />);
