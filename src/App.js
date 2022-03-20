import Routing from './Route/index';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import DataContext from './context/DataContext';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <DataContext>
      <ApolloProvider client={client}>
        <Routing />
      </ApolloProvider>
    </DataContext>
  );
}

export default App;
