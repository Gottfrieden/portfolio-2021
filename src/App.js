import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import { useState, Suspense } from 'react';

import './App.css';
import './utils/variables.css';

import About from './pages/About';
import Projects from './pages/Projects';

import Header from './components/header/Header';
import SideBar from './components/header/SideBar';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [activePage, setActivePage] = useState("");

  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Router>
        <div className="App">
          <Header pageName={activePage} setPageName={setActivePage} />
          <SideBar pageName={activePage} setPageName={setActivePage} />
          <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color='237, 92, 41'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />

          <Switch>
              <Route path="/about">
                <About setActivePage={setActivePage}/>
              </Route>
              <Route path='/'>
                <Projects setActivePage={setActivePage} />
              </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
