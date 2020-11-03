import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Add from './pages/Add';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home>WishListOverview</Home>
        </Route>
        <Route path="/add">
          <Add>Add a new Wishlist</Add>
        </Route>
      </Switch>
    </Router>
  );
}
