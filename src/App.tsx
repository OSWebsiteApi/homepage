import React from 'react';
import Menu from "./Elements/TopNavigation";
import {Footer} from "./Elements/Footer";

import './css/styles.css';

function App(): JSX.Element {
  return (
      <>
          <section>
              <Menu />
              <hr />
              <App />
              <Footer />
          </section>
      </>
  );
}

export default App;
