import Info from './components/pages/Info';
import Home from './components/pages/Home';
import Title from './components/layout/Title';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Title text="PEOPLE AND THEIR CARS" />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/person/:personId" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
