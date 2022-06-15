// COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route } from "react-router-dom"
// PAGES
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import './App.css';

function App() {
// Heroku URL
const URL = 'https://git.heroku.com/portfoloio-lab-v-1.git'

  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
          <Home />
      </Route>
      <Route path='/projects'>
          <Projects URL={URL} />
      </Route>
      <Route path='/about'>
          <About URL={URL} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
