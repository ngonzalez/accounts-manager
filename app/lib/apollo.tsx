import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = 'http://127.0.0.1:3000/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client