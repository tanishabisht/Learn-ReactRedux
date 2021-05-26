import { Header, ProductCard, ProductDetail, ProductListing } from './Container'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Redirect exact from='/' to='/products' />
        <Route path='/products' exact component={ProductListing} />
        <Route path='/product/:prodId' exact component={ProductDetail} />
        <Route path='/card' exact component={ProductCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App