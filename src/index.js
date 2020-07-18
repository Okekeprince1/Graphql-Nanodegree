const gql =  require('graphql-tag');
const  {ApolloServer} = require('apollo-server');

//Defined typeDefs to be used in ApolloServer
const typeDefs = gql`
  type User {
    email: String!
    avatar: String!
    friends: [User]!
  }
    type Query {
      me : User
    }
`

//Defined resolvers to be used in ApolloServer
const resolvers = {
  Query: {
    me () {
      return{
        email: 'loremipsum@gmail.com',
        avatar: 'http://loremipsum.png',
        friends: []
      }
    }
  }
}

//Defined apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//Created server
server.listen(4000).then(() => console.log('Port running on 4000'))
