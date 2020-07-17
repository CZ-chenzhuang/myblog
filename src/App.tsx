import React from 'react';
import route from './routes'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function App() {
  const routes: any = route
  return (
    <div className="App">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
