import Info from './components/pages/Info';
import Home from './components/pages/Home';
import Title from './components/layout/Title';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Switch } from 'antd';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Title />
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          ></Route>
          <Route path="/person/:id" element={<Info />} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
