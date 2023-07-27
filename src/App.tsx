import React from 'react';
import {Link} from 'react-router-dom';
import './css/styles.css';

function App(): JSX.Element {
  return (
      <>
          <div>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/Login'>Login</Link></li>
                  <li><Link to='/settings'>Settings</Link></li>
              </ul>
              <hr />
              <App />
          </div>
      </>
  );
}

export default App;
