import Info from './components/pages/Info';
import Home from './components/pages/Home';
import Title from './components/layout/Title';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title />
        <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Info />} />
        </Router>
      </BrowserRouter>
      </div>
    </ApolloProvider>
  )
};

export default App;
