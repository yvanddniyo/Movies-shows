import Clients from "./components/Clients"
import { Header } from "./components/Header"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import AddClients from "./components/AddClientsModal"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClients />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
