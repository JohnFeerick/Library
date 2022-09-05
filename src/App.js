import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import Cart from './pages/Cart';
import BookInfo from './pages/BookInfo';
import {books} from './data'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books}/>} />
        <Route path="/books/:id" render={() => <BookInfo books={books}/>}/>
        <Route path="/cart" render={() => <Cart books={books}/>}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
