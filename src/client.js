import ApolloClient from "apollo-boost";


const client = new ApolloClient({
    uri : "http://localhost:4000",
    cacheControl : false
})

export default client