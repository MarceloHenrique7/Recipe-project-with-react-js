import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.js'
import Recipes from './components/pages/Recipes.js'
import About from './components/pages/About.js'
import Policity from './components/pages/Policity.js'

import NavBar from './components/layout/NavBar.js';
import Container from './components/layout/Container.js';
import Footer from './components/layout/Footer.js'
import NewRecipe from './components/pages/NewRecipe.js'


function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Container customClass="min-height">
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/recipes' element={<Recipes />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/policity' element={<Policity />} />
                  <Route path='/new_recipe' element={<NewRecipe />} />
              </Routes>
          </Container>  
        </Router>
        <Footer />
    </div>
  );
}

export default App;
