import React from 'react';
import Menu from "./Elements/TopNavigation";
import {Footer} from "./Elements/Footer";

import './css/styles.css';

function App(): JSX.Element {
  return (
      <>
          <div>
              <Menu />
              <hr />
              <App />
              <Footer />
          </div>
      </>
  );
}

export default App;
