import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App
