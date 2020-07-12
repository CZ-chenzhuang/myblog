import React from 'react';
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './routes/RouterView'

function App() {
  // let dispatch = useDispatch()
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView routes={routes}></RouterView>
      </BrowserRouter>
    </div>
  );
}

export default App;
